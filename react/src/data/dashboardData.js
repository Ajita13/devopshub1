export const stats = [
  {
    title: "Total Pipelines",
    value: "24",
    change: "14%",
    direction: "up",
    icon: "pipeline",
    color: "blue",
  },
  {
    title: "Successful Builds",
    value: "18",
    change: "28%",
    direction: "up",
    icon: "success",
    color: "green",
  },
  {
    title: "Failed Builds",
    value: "3",
    change: "12%",
    direction: "down",
    icon: "failed",
    color: "red",
  },
  {
    title: "Deployments",
    value: "16",
    change: "33%",
    direction: "up",
    icon: "deployment",
    color: "purple",
  },
  {
    title: "Avg. Deploy Time",
    value: "3m 47s",
    change: "18%",
    direction: "down",
    icon: "time",
    color: "orange",
  },
  {
    title: "Success Rate",
    value: "94.7%",
    change: "6.2%",
    direction: "up",
    icon: "security",
    color: "blue",
  },
];

export const deployments = [
  {
    name: "Production Deployment",
    branch: "main",
    time: "2m ago",
    status: "Success",
  },
  {
    name: "Staging Deployment",
    branch: "develop",
    time: "15m ago",
    status: "Success",
  },
  {
    name: "Production Deployment",
    branch: "release/v2.1",
    time: "1h ago",
    status: "Success",
  },
  {
    name: "QA Deployment",
    branch: "feature/login",
    time: "2h ago",
    status: "Success",
  },
  {
    name: "Hotfix Deployment",
    branch: "hotfix/critical",
    time: "5h ago",
    status: "Failed",
  },
];

export const builds = [
  {
    id: "#1247",
    branch: "main",
    time: "2m 45s",
    status: "Success",
  },
  {
    id: "#1246",
    branch: "develop",
    time: "1m 32s",
    status: "Success",
  },
  {
    id: "#1245",
    branch: "feature/auth",
    time: "2m 18s",
    status: "Success",
  },
  {
    id: "#1244",
    branch: "release/v2.1",
    time: "3m 05s",
    status: "Failed",
  },
  {
    id: "#1243",
    branch: "hotfix/critical",
    time: "1m 45s",
    status: "Success",
  },
];

export const pipelineStages = [
  {
    name: "Code Commit",
    count: "128 commits",
    icon: "commit",
  },
  {
    name: "Build",
    count: "24 builds",
    icon: "build",
  },
  {
    name: "Test",
    count: "92 tests",
    icon: "test",
  },
  {
    name: "Security Scan",
    count: "24 scans",
    icon: "security",
  },
  {
    name: "Deploy",
    count: "16 deployments",
    icon: "deploy",
  },
  {
    name: "Monitor",
    count: "99.5% uptime",
    icon: "monitor",
  },
];

export const services = [
  {
    name: "CI/CD Service",
    uptime: "99.9%",
  },
  {
    name: "Build Agents",
    uptime: "98.7%",
  },
  {
    name: "Deployment Service",
    uptime: "100%",
  },
  {
    name: "Container Registry",
    uptime: "99.5%",
  },
  {
    name: "Monitoring Service",
    uptime: "99.8%",
  },
];

export const activities = [
  {
    title: "Code pushed to main",
    user: "Ajita",
    time: "2m ago",
    type: "code",
  },
  {
    title: "Build #1247 completed",
    user: "CI System",
    time: "2m 45s ago",
    type: "build",
  },
  {
    title: "Deployed to Production",
    user: "CD System",
    time: "3m ago",
    type: "deploy",
  },
  {
    title: "Security scan completed",
    user: "Security Bot",
    time: "5m ago",
    type: "security",
  },
  {
    title: "Tests completed",
    user: "Test Runner",
    time: "7m ago",
    type: "test",
  },
];