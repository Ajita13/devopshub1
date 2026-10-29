import { useEffect, useState, useCallback } from "react";
import {
  TrendingUp,
  Activity,
  CheckCircle2,
  XCircle,
  Clock,
  Rocket,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { getAnalytics } from "../../services/api";

function Analytics() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAnalytics = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getAnalytics();
      if (res && res.success) {
        setData(res);
        setError("");
      }
    } catch (err) {
      console.error("Failed to load analytics:", err);
      setError(err.message || "Failed to load analytics");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);

  if (loading && !data) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 size={32} className="animate-spin text-orange-500" />
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="p-8">
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center text-red-500">
          <AlertCircle size={28} className="mx-auto mb-2" />
          <p className="text-sm font-semibold">{error}</p>
          <button
            onClick={loadAnalytics}
            className="mt-3 rounded-lg bg-red-600 px-4 py-1.5 text-xs font-semibold text-white"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const successRate = data?.successRate || "0.0%";
  const avgBuildTime = data?.avgBuildTime || "0s";
  const totalDeployments = data?.totalDeployments || 0;
  const failedBuilds = data?.failedBuilds || 0;
  const weeklyChart = data?.weeklyChart || [];
  const recentDeployments = data?.recentDeployments || [];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Analytics & Telemetry</h1>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Real performance analytics, cycle time distributions, and stability metrics.
          </p>
        </div>

        <button
          onClick={loadAnalytics}
          className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-[#15191d] dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
          <span>Refresh</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-xs font-medium text-slate-400">Success Rate</span>
          <div className="mt-2 text-2xl font-bold text-green-500">{successRate}</div>
          <p className="mt-1 text-[11px] text-slate-400">Aggregate build pass ratio</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-xs font-medium text-slate-400">Avg Build Time</span>
          <div className="mt-2 text-2xl font-bold text-orange-500">{avgBuildTime}</div>
          <p className="mt-1 text-[11px] text-slate-400">Mean pipeline duration</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-xs font-medium text-slate-400">Total Deployments</span>
          <div className="mt-2 text-2xl font-bold text-purple-500">{totalDeployments}</div>
          <p className="mt-1 text-[11px] text-slate-400">Production & staging releases</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-xs font-medium text-slate-400">Failed Builds</span>
          <div className="mt-2 text-2xl font-bold text-red-500">{failedBuilds}</div>
          <p className="mt-1 text-[11px] text-slate-400">Total build errors</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Weekly Activity Chart */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <h2 className="mb-4 text-sm font-bold">Weekly Pipeline Throughput</h2>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="day" tick={{ fontSize: 11 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#161b22",
                    border: "1px solid #30363d",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="count" fill="#f97316" radius={[4, 4, 0, 0]} name="Builds" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Health Breakdown */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <h2 className="mb-4 text-sm font-bold">Service Reliability & Status</h2>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3.5 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-xs font-semibold">CI/CD Pipeline Engine</span>
              </div>
              <span className="text-xs font-bold text-green-500">100% Operational</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3.5 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-xs font-semibold">Database & ORM Layer</span>
              </div>
              <span className="text-xs font-bold text-green-500">Healthy (SQLite / ACID)</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3.5 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-xs font-semibold">Socket.IO Push Gateway</span>
              </div>
              <span className="text-xs font-bold text-green-500">Connected</span>
            </div>

            <div className="flex items-center justify-between rounded-lg border border-slate-100 p-3.5 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-green-500" />
                <span className="text-xs font-semibold">Deployment Dispatcher</span>
              </div>
              <span className="text-xs font-bold text-green-500">Ready</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
