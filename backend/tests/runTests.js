const assert = require("assert");
const axios = require("axios");
const { server } = require("../server");

const BASE_URL = "http://localhost:5000/api";

async function runTests() {
  console.log("\n==============================================");
  console.log("  Running DevOpsHub End-to-End API Test Suite");
  console.log("==============================================\n");

  let testPassed = 0;
  let testFailed = 0;

  async function test(name, fn) {
    try {
      await fn();
      console.log(`  ✓ ${name}`);
      testPassed++;
    } catch (err) {
      console.error(`  ✗ ${name}`);
      console.error(`    Error: ${err.message}`);
      if (err.response?.data) {
        console.error(`    Response:`, err.response.data);
      }
      testFailed++;
    }
  }

  const timestamp = Date.now();
  const userAEmail = `tester_a_${timestamp}@devopshub.test`;
  const userBEmail = `tester_b_${timestamp}@devopshub.test`;
  const password = "StrongPassword123!";

  let tokenA = "";
  let userAId = "";
  let tokenB = "";
  let pipelineAId = "";

  // 1. Health check
  await test("System Health endpoint returns status 200 and healthy DB", async () => {
    const res = await axios.get(`${BASE_URL}/health`);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.status, "healthy");
    assert.strictEqual(res.data.database.status, "connected");
  });

  // 2. Validation error on registration
  await test("Register fails with invalid email and short password", async () => {
    try {
      await axios.post(`${BASE_URL}/auth/register`, {
        name: "Test",
        email: "not-an-email",
        password: "123",
      });
      assert.fail("Should have failed validation");
    } catch (err) {
      assert.strictEqual(err.response.status, 400);
      assert.strictEqual(err.response.data.success, false);
    }
  });

  // 3. Successful registration User A
  await test("Register User A successfully", async () => {
    const res = await axios.post(`${BASE_URL}/auth/register`, {
      name: "Tester Alpha",
      email: userAEmail,
      password,
    });
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.data.success, true);
    assert.ok(res.data.accessToken);
    assert.strictEqual(res.data.user.email, userAEmail);
    tokenA = res.data.accessToken;
    userAId = res.data.user.id;
  });

  // 4. Duplicate registration rejected
  await test("Register User A again rejected with 409 Conflict", async () => {
    try {
      await axios.post(`${BASE_URL}/auth/register`, {
        name: "Duplicate User",
        email: userAEmail,
        password,
      });
      assert.fail("Should have rejected duplicate");
    } catch (err) {
      assert.strictEqual(err.response.status, 409);
    }
  });

  // 5. Login wrong password rejected
  await test("Login User A with wrong password rejected with 401", async () => {
    try {
      await axios.post(`${BASE_URL}/auth/login`, {
        email: userAEmail,
        password: "WrongPassword!",
      });
      assert.fail("Should have rejected invalid password");
    } catch (err) {
      assert.strictEqual(err.response.status, 401);
    }
  });

  // 6. Login User A success
  await test("Login User A with valid credentials returns tokens", async () => {
    const res = await axios.post(`${BASE_URL}/auth/login`, {
      email: userAEmail,
      password,
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.success, true);
    assert.ok(res.data.accessToken);
    tokenA = res.data.accessToken;
  });

  // 7. Protected route /auth/me
  await test("Protected /api/auth/me rejects without token and succeeds with token", async () => {
    try {
      await axios.get(`${BASE_URL}/auth/me`);
      assert.fail("Should have required auth");
    } catch (err) {
      assert.strictEqual(err.response.status, 401);
    }

    const res = await axios.get(`${BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${tokenA}` },
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.user.id, userAId);
  });

  // 8. User A starts with 0 pipelines and 0 stats (no fake/mock data!)
  await test("Brand new User A has 0 pipelines and 0 builds in dashboard", async () => {
    const res = await axios.get(`${BASE_URL}/dashboard/stats`, {
      headers: { Authorization: `Bearer ${tokenA}` },
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.totalBuilds, 0);
    assert.strictEqual(res.data.totalDeployments, 0);
    assert.strictEqual(res.data.stats.find(s => s.title === "Total Pipelines").value, "0");
  });

  // 9. User A creates a pipeline
  await test("User A creates a new pipeline", async () => {
    const res = await axios.post(
      `${BASE_URL}/pipelines`,
      {
        name: "Backend Production CI/CD",
        repository: "github.com/org/backend-service",
        branch: "main",
        environment: "Production",
      },
      { headers: { Authorization: `Bearer ${tokenA}` } }
    );
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.data.pipeline.name, "Backend Production CI/CD");
    pipelineAId = res.data.pipeline.id;
  });

  // 10. Register User B and verify strict data isolation
  await test("Register User B and verify User B cannot see User A's pipelines (Data Isolation)", async () => {
    const resB = await axios.post(`${BASE_URL}/auth/register`, {
      name: "Tester Beta",
      email: userBEmail,
      password,
    });
    tokenB = resB.data.accessToken;

    const listB = await axios.get(`${BASE_URL}/pipelines`, {
      headers: { Authorization: `Bearer ${tokenB}` },
    });
    assert.strictEqual(listB.data.pipelines.length, 0);

    const statsB = await axios.get(`${BASE_URL}/dashboard/stats`, {
      headers: { Authorization: `Bearer ${tokenB}` },
    });
    assert.strictEqual(statsB.data.stats.find(s => s.title === "Total Pipelines").value, "0");
  });

  // 11. User A triggers pipeline run
  await test("User A triggers pipeline run and creates build", async () => {
    const res = await axios.post(
      `${BASE_URL}/pipelines/${pipelineAId}/run`,
      {},
      { headers: { Authorization: `Bearer ${tokenA}` } }
    );
    assert.strictEqual(res.status, 202);
    assert.strictEqual(res.data.pipeline.status, "RUNNING");
    assert.ok(res.data.build.buildNumber);
  });

  // 12. User A fetches builds list
  await test("User A sees the newly created build in builds list", async () => {
    const res = await axios.get(`${BASE_URL}/builds`, {
      headers: { Authorization: `Bearer ${tokenA}` },
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.builds.length, 1);
    assert.strictEqual(res.data.builds[0].pipelineId, pipelineAId);
  });

  console.log("\n----------------------------------------------");
  console.log(`  Tests Finished: ${testPassed} Passed, ${testFailed} Failed`);
  console.log("----------------------------------------------\n");

  if (testFailed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

setTimeout(runTests, 800);
