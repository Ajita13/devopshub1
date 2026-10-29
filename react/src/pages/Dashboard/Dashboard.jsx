import {
  Activity,
  BarChart3,
  CheckCircle2,
  Clock3,
  GitCommit,
  Hammer,
  Rocket,
  ShieldCheck,
  FlaskConical,
  XCircle,
  Server,
  Code2,
  TestTube2,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    title: "Total Pipelines",
    value: "24",
    change: "+14% from last week",
    icon: GitCommit,
    iconClass: "bg-blue-100 text-blue-600",
    positive: true,
    path: "/pipelines",
  },
  {
    title: "Successful Builds",
    value: "18",
    change: "+28% from last week",
    icon: CheckCircle2,
    iconClass: "bg-green-100 text-green-600",
    positive: true,
    path: "/builds",
  },
  {
    title: "Failed Builds",
    value: "3",
    change: "12% from last week",
    icon: XCircle,
    iconClass: "bg-red-100 text-red-600",
    positive: false,
    path: "/builds",
  },
  {
    title: "Deployments",
    value: "16",
    change: "+33% from last week",
    icon: Rocket,
    iconClass: "bg-purple-100 text-purple-600",
    positive: true,
    path: "/deployments",
  },
  {
    title: "Avg. Deploy Time",
    value: "3m 47s",
    change: "18% from last week",
    icon: Clock3,
    iconClass: "bg-orange-100 text-orange-600",
    positive: true,
    path: "/deployments",
  },
  {
    title: "Success Rate",
    value: "94.7%",
    change: "+6.2% from last week",
    icon: ShieldCheck,
    iconClass: "bg-blue-100 text-blue-600",
    positive: true,
    path: "/analytics",
  },
];

const pipelineStages = [
  {
    name: "Code Commit",
    value: "128 commits",
    icon: GitCommit,
    path: "/pipelines",
  },
  {
    name: "Build",
    value: "24 builds",
    icon: Hammer,
    path: "/builds",
  },
  {
    name: "Test",
    value: "92 tests",
    icon: FlaskConical,
    path: "/pipelines",
  },
  {
    name: "Security Scan",
    value: "24 scans",
    icon: ShieldCheck,
    path: "/insights",
  },
  {
    name: "Deploy",
    value: "16 deployments",
    icon: Rocket,
    path: "/deployments",
  },
  {
    name: "Monitor",
    value: "99.5% uptime",
    icon: Activity,
    path: "/services",
  },
];

const deployments = [
  ["Production Deployment", "main", "2m ago", "Success"],
  ["Staging Deployment", "develop", "15m ago", "Success"],
  ["Production Deployment", "release/v2.1", "1h ago", "Success"],
  ["QA Deployment", "feature/login", "2h ago", "Success"],
  ["Hotfix Deployment", "hotfix/critical", "5h ago", "Failed"],
];

const builds = [
  ["Build #1247", "main", "2m 45s", "Success"],
  ["Build #1246", "develop", "1m 32s", "Success"],
  ["Build #1245", "feature/auth", "2m 18s", "Success"],
  ["Build #1244", "release/v2.1", "3m 05s", "Failed"],
  ["Build #1243", "hotfix/critical", "1m 45s", "Success"],
];

const services = [
  ["CI/CD Service", "99.9%"],
  ["Build Agents", "98.7%"],
  ["Deployment Service", "100%"],
  ["Container Registry", "99.5%"],
  ["Monitoring Service", "99.8%"],
];

const activities = [
  {
    title: "Code pushed to main",
    user: "Ajita",
    time: "2m ago",
    icon: Code2,
    className: "bg-gray-100 text-gray-700",
  },
  {
    title: "Build #1247 completed",
    user: "CI System",
    time: "2m 45s ago",
    icon: Hammer,
    className: "bg-blue-100 text-blue-600",
  },
  {
    title: "Deployed to Production",
    user: "CD System",
    time: "3m ago",
    icon: Rocket,
    className: "bg-orange-100 text-orange-600",
  },
  {
    title: "Security scan completed",
    user: "Security Bot",
    time: "5m ago",
    icon: ShieldCheck,
    className: "bg-green-100 text-green-600",
  },
  {
    title: "Tests completed",
    user: "Test Runner",
    time: "7m ago",
    icon: TestTube2,
    className: "bg-cyan-100 text-cyan-600",
  },
];

function StatusBadge({ status }) {
  const success = status === "Success";

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold ${
        success
          ? "bg-green-50 text-green-600"
          : "bg-red-50 text-red-500"
      }`}
    >
      {success ? (
        <CheckCircle2 size={12} />
      ) : (
        <XCircle size={12} />
      )}
      {status}
    </span>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [pipelinePeriod, setPipelinePeriod] =
    useState("This Week");

  const [analyticsPeriod, setAnalyticsPeriod] =
    useState("Last 7 days");

  return (
    <div className="min-h-screen bg-[#f8fafc] px-5 py-5 text-[#111827] dark:bg-[#0b0d0f] dark:text-white">

      {/* Welcome */}
      <div className="mb-5">
        <h1 className="text-[20px] font-bold tracking-tight">
          Welcome back, Ajita! 👋
        </h1>

        <p className="mt-1 text-[12px] text-slate-500 dark:text-slate-400">
          Here's what's happening with your DevOps pipelines today.
        </p>
      </div>

      {/* STAT CARDS */}
      <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <button
              key={stat.title}
              type="button"
              onClick={() => navigate(stat.path)}
              className="min-h-[122px] rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-[#15191d]"
            >
              <div className="mb-3 flex items-start justify-between">
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${stat.iconClass}`}
                >
                  <Icon size={18} />
                </div>
              </div>

              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                {stat.title}
              </p>

              <p className="mt-1 text-[21px] font-bold">
                {stat.value}
              </p>

              <p
                className={`mt-1 flex items-center gap-1 text-[9px] ${
                  stat.positive
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                <span>{stat.positive ? "↑" : "↓"}</span>
                {stat.change}
              </p>
            </button>
          );
        })}
      </div>

      {/* PIPELINE + DEPLOYMENT */}
      <div className="mb-3 grid grid-cols-1 gap-3 xl:grid-cols-[2.1fr_1fr]">

        {/* Pipeline Overview */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">

          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[13px] font-bold">
              Pipeline Overview
            </h2>

            <div className="flex items-center gap-2">

              <div className="flex items-center gap-2 rounded-md border border-slate-200 px-2 py-1 text-[9px] text-slate-500 dark:border-slate-700 dark:text-slate-300">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                All Systems Operational
              </div>

              <select
                value={pipelinePeriod}
                onChange={(e) =>
                  setPipelinePeriod(e.target.value)
                }
                className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[9px] outline-none dark:border-slate-700 dark:bg-[#111417]"
              >
                <option>This Week</option>
                <option>Last Week</option>
                <option>This Month</option>
              </select>

            </div>
          </div>

          <div className="flex items-start overflow-x-auto px-1 py-7">

            {pipelineStages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.name}
                  className="flex min-w-[105px] flex-1 items-start"
                >

                  <button
                    type="button"
                    onClick={() => navigate(stage.path)}
                    className="flex min-w-[80px] flex-col items-center rounded-lg p-1 transition hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  >

                    <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-slate-200 bg-[#f9fbff] text-blue-500 shadow-[0_0_0_7px_#f8fafc] dark:border-slate-700 dark:bg-[#151a1f] dark:shadow-[0_0_0_7px_#111417]">
                      <Icon size={22} />
                    </div>

                    <strong className="mt-4 whitespace-nowrap text-[10px]">
                      {stage.name}
                    </strong>

                    <span className="mt-1 whitespace-nowrap text-[9px] text-slate-500 dark:text-slate-400">
                      {stage.value}
                    </span>

                  </button>

                  {index < pipelineStages.length - 1 && (
                    <div className="relative mt-[27px] h-[2px] flex-1 bg-slate-300 dark:bg-slate-700">
                      <span className="absolute -right-1 -top-[3px] h-2 w-2 rounded-full bg-green-500" />
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* Deployment History */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">

          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[13px] font-bold">
              Deployment History
            </h2>

            <button
              type="button"
              onClick={() => navigate("/deployments")}
              className="text-[9px] text-blue-500 hover:underline"
            >
              View all
            </button>
          </div>

          <div>
            {deployments.map(
              ([name, branch, time, status]) => (
                <button
                  type="button"
                  key={`${name}-${branch}`}
                  onClick={() => navigate("/deployments")}
                  className="flex min-h-[45px] w-full items-center justify-between gap-3 border-b border-slate-100 text-left transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
                >

                  <div className="flex min-w-0 items-center gap-2">

                    {status === "Success" ? (
                      <CheckCircle2
                        size={16}
                        className="text-green-500"
                      />
                    ) : (
                      <XCircle
                        size={16}
                        className="text-red-500"
                      />
                    )}

                    <div className="flex flex-col">
                      <strong className="text-[10px]">
                        {name}
                      </strong>

                      <span className="mt-1 w-fit rounded bg-slate-100 px-1.5 py-0.5 text-[8px] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                        {branch}
                      </span>
                    </div>

                  </div>

                  <div className="flex flex-shrink-0 items-center gap-2">

                    <span className="text-[8px] text-slate-400">
                      {time}
                    </span>

                    <StatusBadge status={status} />

                  </div>

                </button>
              )
            )}
          </div>

          <button
            type="button"
            onClick={() => navigate("/deployments")}
            className="mt-3 h-8 w-full rounded-md border border-slate-200 bg-slate-50 text-[9px] font-medium text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-[#171b1f] dark:text-slate-300"
          >
            View all deployments →
          </button>

        </div>
      </div>

      {/* BUILD + ANALYTICS */}
      <div className="mb-3 grid grid-cols-1 gap-3 xl:grid-cols-2">

        {/* Build Activity */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">

          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[13px] font-bold">
              Build Activity
            </h2>

            <button
              type="button"
              onClick={() => navigate("/builds")}
              className="text-[9px] text-blue-500 hover:underline"
            >
              View all
            </button>
          </div>

          {builds.map(
            ([build, branch, duration, status]) => (
              <button
                type="button"
                key={build}
                onClick={() => navigate("/builds")}
                className="flex min-h-[40px] w-full items-center justify-between border-b border-slate-100 text-left transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
              >

                <div className="flex items-center gap-2">

                  {status === "Success" ? (
                    <CheckCircle2
                      size={15}
                      className="text-green-500"
                    />
                  ) : (
                    <XCircle
                      size={15}
                      className="text-red-500"
                    />
                  )}

                  <strong className="text-[10px]">
                    {build}
                  </strong>

                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[8px] text-slate-500 dark:bg-slate-800">
                    {branch}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <span className="text-[8px] text-slate-400">
                    {duration}
                  </span>

                  <StatusBadge status={status} />

                </div>

              </button>
            )
          )}

          <button
            type="button"
            onClick={() => navigate("/builds")}
            className="mt-3 h-8 w-full rounded-md border border-slate-200 bg-slate-50 text-[9px] text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-[#171b1f] dark:text-slate-300"
          >
            View all builds →
          </button>

        </div>

        {/* Pipeline Analytics */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">

          <div className="mb-2 flex items-center justify-between">

            <h2 className="text-[13px] font-bold">
              Pipeline Analytics
            </h2>

            <select
              value={analyticsPeriod}
              onChange={(e) =>
                setAnalyticsPeriod(e.target.value)
              }
              className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[9px] dark:border-slate-700 dark:bg-[#111417]"
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
            </select>

          </div>

          <div className="flex min-h-[170px] items-center">

            <div className="relative flex w-1/2 justify-center">

              <div
                className="relative flex h-[150px] w-[150px] items-center justify-center rounded-full"
                style={{
                  background:
                    "conic-gradient(#16a34a 0deg 270deg, #ef4444 270deg 315deg, #3b82f6 315deg 360deg)",
                }}
              >

                <div className="flex h-[98px] w-[98px] flex-col items-center justify-center rounded-full bg-white dark:bg-[#15191d]">

                  <strong className="text-[20px]">
                    24
                  </strong>

                  <span className="text-[9px] text-slate-500">
                    Total
                  </span>

                </div>

              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4">

              <div className="flex items-center gap-2 text-[9px]">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="flex-1">
                  Successful
                </span>
                <strong>18</strong>
                <span className="text-slate-400">
                  (75.0%)
                </span>
              </div>

              <div className="flex items-center gap-2 text-[9px]">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                <span className="flex-1">
                  Failed
                </span>
                <strong>3</strong>
                <span className="text-slate-400">
                  (12.5%)
                </span>
              </div>

              <div className="flex items-center gap-2 text-[9px]">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="flex-1">
                  In Progress
                </span>
                <strong>3</strong>
                <span className="text-slate-400">
                  (12.5%)
                </span>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-3 border-t border-slate-100 pt-3 dark:border-slate-800">

            <div className="text-center">
              <span className="text-[8px] text-slate-400">
                Success Rate
              </span>

              <strong className="mt-1 block text-[15px]">
                75.0%
              </strong>

              <small className="text-[8px] text-green-500">
                ↑ 12%
              </small>
            </div>

            <div className="border-x border-slate-100 text-center dark:border-slate-800">
              <span className="text-[8px] text-slate-400">
                Avg. Build Time
              </span>

              <strong className="mt-1 block text-[15px]">
                2m 34s
              </strong>

              <small className="text-[8px] text-green-500">
                ↓ 8%
              </small>
            </div>

            <div className="text-center">
              <span className="text-[8px] text-slate-400">
                Total Deploys
              </span>

              <strong className="mt-1 block text-[15px]">
                16
              </strong>

              <small className="text-[8px] text-green-500">
                ↑ 33%
              </small>
            </div>

          </div>
        </div>
      </div>

      {/* SYSTEM HEALTH */}
      <div className="mb-3 grid grid-cols-1 gap-3 xl:grid-cols-[1fr_0.8fr]">

        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">

          <div className="mb-2 flex items-center justify-between">

            <h2 className="text-[13px] font-bold">
              System Health
            </h2>

            <button
              type="button"
              onClick={() => navigate("/services")}
              className="text-[9px] text-blue-500 hover:underline"
            >
              View all
            </button>

          </div>

          {services.map(([service, uptime]) => (

            <button
              type="button"
              key={service}
              onClick={() => navigate("/services")}
              className="flex min-h-[40px] w-full items-center justify-between border-b border-slate-100 text-left transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/40"
            >

              <div className="flex items-center gap-2">

                <CheckCircle2
                  size={15}
                  className="text-green-500"
                />

                <span className="text-[10px]">
                  {service}
                </span>

              </div>

              <div className="flex items-center gap-2">

                <span className="text-[8px] text-green-500">
                  Healthy
                </span>

                <strong className="text-[9px]">
                  {uptime}
                </strong>

              </div>

            </button>

          ))}

        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white p-5 dark:border-slate-800 dark:from-[#14191d] dark:to-[#111417]">

          <div>
            <span className="text-[9px] text-slate-500 dark:text-slate-400">
              Overall System Status
            </span>

            <strong className="mt-2 block text-[13px] text-green-600">
              All Systems Operational
            </strong>

            <small className="mt-1 block text-[8px] text-slate-400">
              Last checked just now
            </small>
          </div>

          <div className="text-right">

            <strong className="block text-[28px] font-bold text-green-600">
              99.5%
            </strong>

            <span className="text-[8px] text-slate-400">
              uptime
            </span>

          </div>

        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">

        <div className="mb-3 flex items-center justify-between">

          <h2 className="text-[13px] font-bold">
            Recent Activity
          </h2>

          <button
            type="button"
            onClick={() => navigate("/logs")}
            className="text-[9px] text-blue-500 hover:underline"
          >
            View all activity
          </button>

        </div>

        <div className="grid grid-cols-1 border-t border-slate-100 sm:grid-cols-2 xl:grid-cols-5 dark:border-slate-800">

          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <button
                type="button"
                key={activity.title}
                onClick={() => navigate("/logs")}
                className="min-h-[90px] border-b border-slate-100 px-3 py-3 text-left transition hover:bg-slate-50 xl:border-b-0 xl:border-r dark:border-slate-800 dark:hover:bg-slate-800/40"
              >

                <div
                  className={`mb-2 flex h-7 w-7 items-center justify-center rounded-full ${activity.className}`}
                >
                  <Icon size={14} />
                </div>

                <strong className="block text-[9px] leading-4">
                  {activity.title}
                </strong>

                <span className="mt-1 block text-[8px] text-slate-500">
                  {activity.user}
                </span>

                <small className="mt-1 block text-[7px] text-slate-400">
                  {activity.time}
                </small>

              </button>
            );
          })}

        </div>
      </div>

      {/* FOOTER */}
      <div className="py-5 text-center text-[8px] text-slate-400">
        DevOpsHub – CI/CD Pipeline Management Platform © 2024
        <span className="ml-1">
          | Made with ❤️ for DevOps Engineers
        </span>
      </div>

    </div>
  );
}