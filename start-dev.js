const { spawn } = require("child_process");

console.log("\n=======================================================");
console.log("  🚀 Starting DevOpsHub (Backend API + Frontend UI)    ");
console.log("=======================================================\n");

const isWin = process.platform === "win32";
const npmCmd = isWin ? "npm.cmd" : "npm";

// Spawn backend
const backend = spawn(npmCmd, ["--prefix", "backend", "run", "dev"], {
  stdio: ["inherit", "pipe", "pipe"],
  shell: true,
});

backend.stdout.on("data", (data) => {
  process.stdout.write(`\x1b[36m[Backend]\x1b[0m ${data}`);
});

backend.stderr.on("data", (data) => {
  process.stderr.write(`\x1b[31m[Backend Error]\x1b[0m ${data}`);
});

// Spawn frontend
const frontend = spawn(npmCmd, ["--prefix", "react", "run", "dev", "--", "--host"], {
  stdio: ["inherit", "pipe", "pipe"],
  shell: true,
});

frontend.stdout.on("data", (data) => {
  process.stdout.write(`\x1b[32m[Frontend]\x1b[0m ${data}`);
});

frontend.stderr.on("data", (data) => {
  process.stderr.write(`\x1b[33m[Frontend]\x1b[0m ${data}`);
});

const cleanup = () => {
  console.log("\nShutting down DevOpsHub services...");
  try {
    backend.kill();
  } catch {}
  try {
    frontend.kill();
  } catch {}
  process.exit(0);
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);
