import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  CheckCircle2,
  Clock3,
  GitCommit,
  Hammer,
  Rocket,
  ShieldCheck,
  FlaskConical,
  XCircle,
  Plus,
  ArrowRight,
  Loader2,
  AlertCircle,
  Radio,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useAuth } from "../../auth/AuthContext";
import { useSocket } from "../../context/SocketContext";
import { getDashboardStats } from "../../services/api";

const statIconMap = {
  pipeline: GitCommit,
  success: CheckCircle2,
  failed: XCircle,
  deployment: Rocket,
  time: Clock3,
  security: ShieldCheck,
};

const stageIconMap = {
  commit: GitCommit,
  build: Hammer,
  test: FlaskConical,
  security: ShieldCheck,
  deploy: Rocket,
  monitor: Activity,
};

function StatusBadge({ status }) {
  const success = status === "SUCCESS" || status === "Success";
  const running = status === "RUNNING" || status === "In progress";

  if (running) {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/10 px-2 py-0.5 text-[10px] font-semibold text-blue-500">
        <Loader2 size={11} className="animate-spin" />
        Running
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold ${
        success
          ? "bg-green-500/10 text-green-600 dark:text-green-400"
          : "bg-red-500/10 text-red-500"
      }`}
    >
      {success ? <CheckCircle2 size={11} /> : <XCircle size={11} />}
      {status}
    </span>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { socket, isConnected } = useSocket();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchStats = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const res = await getDashboardStats();
      if (res && res.success) {
        setData(res);
        setError("");
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err);
      if (!isSilent) setError(err.message || "Failed to load dashboard data");
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  // Real-time socket event listeners for instant UI synchronization
  useEffect(() => {
    if (!socket) return;

    const handleRealtimeUpdate = () => {
      fetchStats(true); // silent refresh
    };

    socket.on("stats:refresh", handleRealtimeUpdate);
    socket.on("pipeline:created", handleRealtimeUpdate);
    socket.on("pipeline:updated", handleRealtimeUpdate);
    socket.on("pipeline:deleted", handleRealtimeUpdate);
    socket.on("build:created", handleRealtimeUpdate);
    socket.on("build:updated", handleRealtimeUpdate);
    socket.on("deployment:created", handleRealtimeUpdate);
    socket.on("activity:new", handleRealtimeUpdate);

    return () => {
      socket.off("stats:refresh", handleRealtimeUpdate);
      socket.off("pipeline:created", handleRealtimeUpdate);
      socket.off("pipeline:updated", handleRealtimeUpdate);
      socket.off("pipeline:deleted", handleRealtimeUpdate);
      socket.off("build:created", handleRealtimeUpdate);
      socket.off("build:updated", handleRealtimeUpdate);
      socket.off("deployment:created", handleRealtimeUpdate);
      socket.off("activity:new", handleRealtimeUpdate);
    };
  }, [socket, fetchStats]);

  const userName = user?.name || "Engineer";

  if (loading && !data) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center p-6 text-slate-500">
        <Loader2 size={32} className="animate-spin text-orange-500 mb-3" />
        <p className="text-sm font-medium">Aggregating live DevOps metrics...</p>
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="p-8">
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center text-red-500">
          <AlertCircle size={28} className="mx-auto mb-2" />
          <h2 className="text-base font-semibold">Unable to Load Dashboard</h2>
          <p className="mt-1 text-xs">{error}</p>
          <button
            onClick={() => fetchStats()}
            className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const stats = data?.stats || [];
  const stages = data?.stages || [];
  const analyticsChart = data?.analyticsChart || [];
  const recentDeployments = data?.recentDeployments || [];
  const recentBuilds = data?.recentBuilds || [];
  const recentActivities = data?.recentActivities || [];
  const totalBuilds = data?.totalBuilds || 0;

  return (
    <div className="min-h-screen bg-[#f8fafc] px-6 py-6 text-slate-900 dark:bg-[#0b0d0f] dark:text-white">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight">
            Welcome back, {userName}! 👋
          </h1>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Real-time pipeline orchestration and live deployment monitoring.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/pipelines")}
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            <Plus size={15} />
            <span>New Pipeline</span>
          </button>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-6">
        {stats.map((stat) => {
          const Icon = statIconMap[stat.icon] || GitCommit;
          const isFailed = stat.title === "Failed Builds";

          return (
            <button
              key={stat.title}
              type="button"
              onClick={() => navigate(stat.path)}
              className="rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-[#15191d]"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {stat.title}
                </span>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    stat.color === "green"
                      ? "bg-green-500/10 text-green-600 dark:text-green-400"
                      : stat.color === "red"
                      ? "bg-red-500/10 text-red-500"
                      : stat.color === "purple"
                      ? "bg-purple-500/10 text-purple-500"
                      : stat.color === "orange"
                      ? "bg-orange-500/10 text-orange-500"
                      : "bg-blue-500/10 text-blue-500"
                  }`}
                >
                  <Icon size={16} />
                </div>
              </div>

              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>

              <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-400">
                <span
                  className={
                    isFailed
                      ? stat.value !== "0"
                        ? "text-red-500 font-semibold"
                        : "text-green-500"
                      : "text-green-500 font-semibold"
                  }
                >
                  {stat.change}
                </span>
                <span>live status</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* PIPELINE OVERVIEW FLOW */}
      <div className="mb-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold tracking-tight">Pipeline Stage Flow</h2>
            <p className="text-[11px] text-slate-400">
              Aggregated cycle progression across all active pipelines
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-[10px] text-slate-600 dark:border-slate-700 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>

        <div className="flex items-center overflow-x-auto py-3">
          {stages.map((stage, index) => {
            const Icon = stageIconMap[stage.icon] || GitCommit;

            return (
              <div key={stage.name} className="flex min-w-[130px] flex-1 items-center">
                <button
                  type="button"
                  onClick={() => navigate(stage.path)}
                  className="flex flex-col items-center rounded-xl p-2 transition hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-orange-500 shadow-sm dark:border-slate-700 dark:bg-[#12161a]">
                    <Icon size={20} />
                  </div>
                  <strong className="mt-2 text-xs font-semibold">{stage.name}</strong>
                  <span className="text-[10px] text-slate-400">{stage.value}</span>
                </button>

                {index < stages.length - 1 && (
                  <div className="relative mx-2 h-[2px] flex-1 bg-slate-200 dark:bg-slate-700">
                    <span className="absolute -right-1 -top-[3px] h-2 w-2 rounded-full bg-orange-500" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SPLIT SECTION 1: RECENT DEPLOYMENTS & RECENT BUILDS */}
      <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Deployment History */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold">Deployment History</h2>
            <button
              onClick={() => navigate("/deployments")}
              className="text-xs text-orange-500 hover:text-orange-600 font-medium"
            >
              View all →
            </button>
          </div>

          {recentDeployments.length === 0 ? (
            <div className="py-10 text-center text-xs text-slate-400">
              <Rocket size={28} className="mx-auto mb-2 opacity-30" />
              <p>No deployments recorded yet.</p>
              <button
                onClick={() => navigate("/deployments")}
                className="mt-2 text-orange-500 hover:underline font-medium"
              >
                Trigger your first deployment
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentDeployments.map((dep) => (
                <div key={dep.id} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-xs font-semibold">{dep.name}</p>
                    <p className="text-[10px] text-slate-400">
                      {dep.environment} • branch {dep.branch}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400">
                      {new Date(dep.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                    <StatusBadge status={dep.status} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Build Activity */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold">Build Activity</h2>
            <button
              onClick={() => navigate("/builds")}
              className="text-xs text-orange-500 hover:text-orange-600 font-medium"
            >
              View all →
            </button>
          </div>

          {recentBuilds.length === 0 ? (
            <div className="py-10 text-center text-xs text-slate-400">
              <Hammer size={28} className="mx-auto mb-2 opacity-30" />
              <p>No builds executed yet.</p>
              <button
                onClick={() => navigate("/pipelines")}
                className="mt-2 text-orange-500 hover:underline font-medium"
              >
                Run a pipeline to start builds
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentBuilds.map((build) => (
                <div key={build.id} className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-xs font-semibold">
                      Build #{build.buildNumber} — {build.pipelineName}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      branch {build.branch} {build.commitHash ? `(${build.commitHash})` : ""}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400">{build.duration}</span>
                    <StatusBadge status={build.status} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SPLIT SECTION 2: ANALYTICS DONUT & RECENT ACTIVITIES */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Pipeline Analytics Donut */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold">Pipeline Analytics</h2>
            <button
              onClick={() => navigate("/analytics")}
              className="text-xs text-orange-500 hover:text-orange-600 font-medium"
            >
              Detailed Analytics →
            </button>
          </div>

          {totalBuilds === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              <p>No pipeline runs to chart yet.</p>
              <p className="mt-1 text-[11px] text-slate-500">
                Run pipelines to see live success/failure distribution.
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
              <div className="relative h-44 w-44">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={analyticsChart}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={3}
                      strokeWidth={0}
                    >
                      {analyticsChart.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xl font-bold">{totalBuilds}</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                    Builds
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {analyticsChart.map((entry) => (
                  <div key={entry.name} className="flex items-center gap-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <span className="text-slate-500 dark:text-slate-400 min-w-[70px]">
                      {entry.name}:
                    </span>
                    <strong className="font-semibold">{entry.value}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Live Activity Feed */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold">Recent System Activity</h2>
            <button
              onClick={() => navigate("/audit-logs")}
              className="text-xs text-orange-500 hover:text-orange-600 font-medium"
            >
              View audit log →
            </button>
          </div>

          {recentActivities.length === 0 ? (
            <div className="py-12 text-center text-xs text-slate-400">
              <Activity size={28} className="mx-auto mb-2 opacity-30" />
              <p>No recent activities.</p>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentActivities.map((act) => (
                <div key={act.id} className="flex items-center gap-3 py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <GitCommit size={15} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold">{act.title}</p>
                    <p className="truncate text-[10px] text-slate-400">
                      by {act.userName} • {new Date(act.createdAt).toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
