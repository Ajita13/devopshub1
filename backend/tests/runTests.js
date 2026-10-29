process.env.NODE_ENV = "test";
const assert = require("assert");
const axios = require("axios");
const { server } = require("../server");

const TEST_PORT = 5005;
const BASE_URL = `http://localhost:${TEST_PORT}/api`;

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
  const googleEmail = `google_user_${timestamp}@devopshub.test`;
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
      assert.fail("Should have rejected invalid data");
    } catch (err) {
      assert.strictEqual(err.response.status, 400);
    }
  });

  // 3. User A registration
  await test("User A registers successfully and receives JWT tokens", async () => {
    const res = await axios.post(`${BASE_URL}/auth/register`, {
      name: "Tester A",
      email: userAEmail,
      password: password,
    });
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.data.success, true);
    assert.ok(res.data.accessToken);
    tokenA = res.data.accessToken;
    userAId = res.data.user.id;
  });

  // 4. Duplicate registration rejected
  await test("Duplicate email registration returns 409 conflict", async () => {
    try {
      await axios.post(`${BASE_URL}/auth/register`, {
        name: "Tester A Duplicate",
        email: userAEmail,
        password: password,
      });
      assert.fail("Should have rejected duplicate email");
    } catch (err) {
      assert.strictEqual(err.response.status, 409);
    }
  });

  // 5. User A login
  await test("User A logs in with correct credentials", async () => {
    const res = await axios.post(`${BASE_URL}/auth/login`, {
      email: userAEmail,
      password: password,
    });
    assert.strictEqual(res.status, 200);
    assert.ok(res.data.accessToken);
    assert.strictEqual(res.data.user.email, userAEmail);
  });

  // 6. Google OAuth endpoint
  await test("Google OAuth endpoint registers or logs in user and returns tokens", async () => {
    const res = await axios.post(`${BASE_URL}/auth/google`, {
      name: "Google DevOps Engineer",
      email: googleEmail,
      avatar: "https://lh3.googleusercontent.com/test-avatar",
      uid: "firebase-uid-123",
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.success, true);
    assert.ok(res.data.accessToken);
    assert.strictEqual(res.data.user.email, googleEmail);
    assert.strictEqual(res.data.user.avatar, "https://lh3.googleusercontent.com/test-avatar");
  });

  // 7. Protected route verification
  await test("Protected /api/auth/me returns User A details with valid bearer token", async () => {
    const res = await axios.get(`${BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${tokenA}` },
    });
    assert.strictEqual(res.status, 200);
    assert.strictEqual(res.data.user.id, userAId);
  });

  // 8. Register User B
  await test("User B registers successfully", async () => {
    const res = await axios.post(`${BASE_URL}/auth/register`, {
      name: "Tester B",
      email: userBEmail,
      password: password,
    });
    assert.strictEqual(res.status, 201);
    tokenB = res.data.accessToken;
  });

  // 9. User A creates a pipeline
  await test("User A creates a new CI/CD pipeline", async () => {
    const res = await axios.post(
      `${BASE_URL}/pipelines`,
      {
        name: "Backend Production Pipeline",
        repository: "github.com/org/backend-service",
        branch: "main",
        environment: "Production",
      },
      {
        headers: { Authorization: `Bearer ${tokenA}` },
      }
    );
    assert.strictEqual(res.status, 201);
    assert.strictEqual(res.data.pipeline.name, "Backend Production Pipeline");
    pipelineAId = res.data.pipeline.id;
  });

  // 10. Data isolation check
  await test("User B CANNOT see User A's pipeline (Strict Data Isolation)", async () => {
    const res = await axios.get(`${BASE_URL}/pipelines`, {
      headers: { Authorization: `Bearer ${tokenB}` },
    });
    assert.strictEqual(res.status, 200);
    const found = res.data.pipelines.some((p) => p.id === pipelineAId);
    assert.strictEqual(found, false, "Data isolation violation: User B saw User A's pipeline!");
  });

  // 11. Trigger build
  await test("User A triggers a new build for the pipeline", async () => {
    const res = await axios.post(
      `${BASE_URL}/pipelines/${pipelineAId}/run`,
      {
        branch: "main",
        commit: "feat: add google oauth",
      },
      {
        headers: { Authorization: `Bearer ${tokenA}` },
      }
    );
    assert.strictEqual(res.status, 202);
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

  server.close(() => {
    if (testFailed > 0) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  });
}

server.listen(TEST_PORT, () => {
  runTests();
});
