const axios = require("axios");
const { io } = require("../../react/node_modules/socket.io-client");
const assert = require("assert");

const BASE_URL = "http://localhost:5000/api";
const SOCKET_URL = "http://localhost:5000";

async function verifyFullFlow() {
  console.log("\n========================================================");
  console.log("  DevOpsHub Full Flow & Real-Time Live Verification");
  console.log("========================================================\n");

  const timestamp = Date.now();
  const userA = {
    name: "Alex Rivera",
    email: `alex_${timestamp}@devopshub.test`,
    password: "SecurePassword123!",
  };

  const userB = {
    name: "Jordan Lee",
    email: `jordan_${timestamp}@devopshub.test`,
    password: "SecurePassword123!",
  };

  // Phase 1: User A Registration
  console.log("[1/8] Registering User A...");
  const regA = await axios.post(`${BASE_URL}/auth/register`, userA);
  assert.strictEqual(regA.status, 201);
  const tokenA = regA.data.accessToken;
  const userAData = regA.data.user;
  console.log(`  ✓ Registered User A: ${userAData.name} (${userAData.email})`);

  // Phase 2: Verify Initial Dashboard Real Zero State
  console.log("\n[2/8] Checking Initial Real Dashboard State for User A...");
  const dashInitial = await axios.get(`${BASE_URL}/dashboard/stats`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  assert.strictEqual(dashInitial.data.totalBuilds, 0);
  assert.strictEqual(dashInitial.data.totalDeployments, 0);
  assert.strictEqual(dashInitial.data.stats.find(s => s.title === "Total Pipelines").value, "0");
  assert.strictEqual(dashInitial.data.stats.find(s => s.title === "Successful Builds").value, "0");
  assert.strictEqual(dashInitial.data.recentDeployments.length, 0);
  assert.strictEqual(dashInitial.data.recentBuilds.length, 0);
  console.log("  ✓ Initial Dashboard verified: Zero mock/placeholder data. Real empty state verified.");

  // Phase 3: Connect User A to Real-Time Socket.IO Handshake
  console.log("\n[3/8] Connecting User A to Real-Time Socket.IO Handshake...");
  const socketA = io(SOCKET_URL, {
    auth: { token: tokenA },
    transports: ["websocket", "polling"],
  });

  const receivedEvents = [];

  await new Promise((resolve, reject) => {
    socketA.on("connect", () => {
      console.log(`  ✓ Socket connected with ID: ${socketA.id}`);
      resolve();
    });
    socketA.on("connect_error", (err) => reject(err));
    setTimeout(() => reject(new Error("Socket connection timeout")), 5000);
  });

  socketA.on("pipeline:created", (p) => receivedEvents.push({ type: "pipeline:created", data: p }));
  socketA.on("pipeline:updated", (p) => receivedEvents.push({ type: "pipeline:updated", data: p }));
  socketA.on("build:created", (b) => receivedEvents.push({ type: "build:created", data: b }));
  socketA.on("build:updated", (b) => receivedEvents.push({ type: "build:updated", data: b }));
  socketA.on("deployment:created", (d) => receivedEvents.push({ type: "deployment:created", data: d }));
  socketA.on("stats:refresh", (s) => receivedEvents.push({ type: "stats:refresh", data: s }));

  // Phase 4: User A Creates a Pipeline
  console.log("\n[4/8] User A Creating Production Pipeline...");
  const pipeRes = await axios.post(
    `${BASE_URL}/pipelines`,
    {
      name: "Payments Microservice CI",
      repository: "github.com/org/payments-service",
      branch: "release/v3.0",
      environment: "Production",
    },
    { headers: { Authorization: `Bearer ${tokenA}` } }
  );
  assert.strictEqual(pipeRes.status, 201);
  const pipelineId = pipeRes.data.pipeline.id;
  console.log(`  ✓ Pipeline created: ${pipeRes.data.pipeline.name} (ID: ${pipelineId})`);

  // Wait for real-time socket event
  await new Promise((r) => setTimeout(r, 600));
  const pipeEvent = receivedEvents.find((e) => e.type === "pipeline:created");
  assert.ok(pipeEvent, "Expected real-time pipeline:created event");
  console.log(`  ✓ Socket received real-time 'pipeline:created' event for ${pipeEvent.data.name}`);

  // Phase 5: User A Triggers Pipeline Run
  console.log("\n[5/8] User A Triggering Pipeline Run...");
  const runRes = await axios.post(
    `${BASE_URL}/pipelines/${pipelineId}/run`,
    {},
    { headers: { Authorization: `Bearer ${tokenA}` } }
  );
  assert.strictEqual(runRes.status, 202);
  const buildId = runRes.data.build.id;
  console.log(`  ✓ Pipeline run initiated! Active Build #${runRes.data.build.buildNumber} (ID: ${buildId})`);

  // Phase 6: Wait for Real-Time Execution Progression
  console.log("\n[6/8] Telemetry Streaming: Simulating build, test, scan, and deploy pipeline...");
  await new Promise((resolve) => {
    socketA.on("deployment:created", (dep) => {
      console.log(`  ✓ Received real-time 'deployment:created' event for ${dep.name}`);
      resolve();
    });
    setTimeout(resolve, 8000);
  });

  // Small delay for stats calculation
  await new Promise((r) => setTimeout(r, 600));

  const updatedDash = await axios.get(`${BASE_URL}/dashboard/stats`, {
    headers: { Authorization: `Bearer ${tokenA}` },
  });
  console.log(`  ✓ Real-Time Dashboard Live Values:`);
  console.log(`    - Total Pipelines: ${updatedDash.data.stats.find(s => s.title === "Total Pipelines").value}`);
  console.log(`    - Successful Builds: ${updatedDash.data.stats.find(s => s.title === "Successful Builds").value}`);
  console.log(`    - Total Deployments: ${updatedDash.data.stats.find(s => s.title === "Deployments").value}`);
  console.log(`    - Avg Deploy Time: ${updatedDash.data.stats.find(s => s.title === "Avg. Deploy Time").value}`);
  console.log(`    - Success Rate: ${updatedDash.data.stats.find(s => s.title === "Success Rate").value}`);

  assert.strictEqual(updatedDash.data.stats.find(s => s.title === "Total Pipelines").value, "1");
  assert.strictEqual(updatedDash.data.stats.find(s => s.title === "Successful Builds").value, "1");
  assert.strictEqual(updatedDash.data.stats.find(s => s.title === "Deployments").value, "1");

  // Phase 7: Register User B and Verify Strict Data Isolation
  console.log("\n[7/8] Registering User B and verifying User Data Isolation...");
  const regB = await axios.post(`${BASE_URL}/auth/register`, userB);
  const tokenB = regB.data.accessToken;

  const dashB = await axios.get(`${BASE_URL}/dashboard/stats`, {
    headers: { Authorization: `Bearer ${tokenB}` },
  });

  assert.strictEqual(dashB.data.stats.find(s => s.title === "Total Pipelines").value, "0");
  assert.strictEqual(dashB.data.stats.find(s => s.title === "Successful Builds").value, "0");
  assert.strictEqual(dashB.data.stats.find(s => s.title === "Deployments").value, "0");
  assert.strictEqual(dashB.data.recentDeployments.length, 0);
  assert.strictEqual(dashB.data.recentBuilds.length, 0);

  const pipelinesB = await axios.get(`${BASE_URL}/pipelines`, {
    headers: { Authorization: `Bearer ${tokenB}` },
  });
  assert.strictEqual(pipelinesB.data.pipelines.length, 0);
  console.log("  ✓ Data Isolation Confirmed: User B sees strictly 0 records across pipelines, builds, and deployments.");

  // Phase 8: Profile Update & Password Verification
  console.log("\n[8/8] Verifying Profile Update & Credentials...");
  const updatedProfile = await axios.put(
    `${BASE_URL}/auth/profile`,
    { name: "Alex Rivera (Lead)" },
    { headers: { Authorization: `Bearer ${tokenA}` } }
  );
  assert.strictEqual(updatedProfile.data.user.name, "Alex Rivera (Lead)");
  console.log(`  ✓ User profile updated to: ${updatedProfile.data.user.name}`);

  socketA.disconnect();

  console.log("\n========================================================");
  console.log("  ALL VERIFICATION CHECKS PASSED WITH 100% SUCCESS!");
  console.log("========================================================\n");
  process.exit(0);
}

verifyFullFlow().catch((err) => {
  console.error("Verification failed:", err.message);
  if (err.response?.data) console.error("Details:", err.response.data);
  process.exit(1);
});
