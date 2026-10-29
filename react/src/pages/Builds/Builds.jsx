import { useEffect, useState, useCallback } from "react";
import {
  CheckCircle2,
  Clock,
  GitBranch,
  XCircle,
  Search,
  RefreshCw,
  Loader2,
  Terminal,
  X,
  StopCircle,
} from "lucide-react";
import { getBuilds, cancelBuild } from "../../services/api";
import { useSocket } from "../../context/SocketContext";

function Builds() {
  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [selectedBuild, setSelectedBuild] = useState(null);

  const { socket } = useSocket();

  const loadBuilds = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const res = await getBuilds();
      if (res && res.success) {
        setBuilds(res.builds);
        setError("");
      }
    } catch (err) {
      console.error("Failed to load builds:", err);
      if (!isSilent) setError(err.message || "Failed to load builds.");
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadBuilds();
  }, [loadBuilds]);

  // Real-time socket event listeners
  useEffect(() => {
    if (!socket) return;

    const handleCreated = (newBuild) => {
      setBuilds((prev) => [newBuild, ...prev.filter((b) => b.id !== newBuild.id)]);
    };

    const handleUpdated = (updated) => {
      setBuilds((prev) => prev.map((b) => (b.id === updated.id ? { ...b, ...updated } : b)));
      setSelectedBuild((curr) => (curr && curr.id === updated.id ? { ...curr, ...updated } : curr));
    };

    const handleLog = ({ buildId, log }) => {
      setSelectedBuild((curr) => {
        if (curr && curr.id === buildId) {
          return { ...curr, logs: (curr.logs || "") + log };
        }
        return curr;
      });
    };

    socket.on("build:created", handleCreated);
    socket.on("build:updated", handleUpdated);
    socket.on("build:log", handleLog);

    return () => {
      socket.off("build:created", handleCreated);
      socket.off("build:updated", handleUpdated);
      socket.off("build:log", handleLog);
    };
  }, [socket]);

  const handleCancel = async (id) => {
    try {
      await cancelBuild(id);
      loadBuilds(true);
    } catch (err) {
      alert(err.message || "Failed to cancel build.");
    }
  };

  const filteredBuilds = builds.filter((build) => {
    const matchesSearch =
      build.pipelineName?.toLowerCase().includes(search.toLowerCase()) ||
      build.branch?.toLowerCase().includes(search.toLowerCase()) ||
      build.commitHash?.toLowerCase().includes(search.toLowerCase()) ||
      String(build.buildNumber).includes(search);

    const matchesStatus = statusFilter === "All" || build.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalBuilds = builds.length;
  const successfulBuilds = builds.filter((b) => b.status === "SUCCESS").length;
  const failedBuilds = builds.filter((b) => b.status === "FAILED").length;
  const runningBuilds = builds.filter((b) => b.status === "RUNNING").length;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Builds</h1>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Real-time pipeline execution history, status telemetry, and container logs.
          </p>
        </div>

        <button
          onClick={() => loadBuilds()}
          className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-[#15191d] dark:text-slate-300 dark:hover:bg-slate-800"
        >
          <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Stats Counter Bar */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-[11px] font-medium text-slate-400">Total Executed</span>
          <p className="mt-1 text-2xl font-bold">{totalBuilds}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-[11px] font-medium text-slate-400">Successful</span>
          <p className="mt-1 text-2xl font-bold text-green-500">{successfulBuilds}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-[11px] font-medium text-slate-400">Failed</span>
          <p className="mt-1 text-2xl font-bold text-red-500">{failedBuilds}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-[11px] font-medium text-slate-400">In Progress</span>
          <p className="mt-1 text-2xl font-bold text-blue-500">{runningBuilds}</p>
        </div>
      </div>

      {/* Controls: Search & Filter */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-72">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by build #, pipeline, branch..."
            className="w-full rounded-lg border border-slate-200 bg-white py-1.5 pl-9 pr-3 text-xs outline-none focus:border-orange-500 dark:border-slate-800 dark:bg-[#15191d] dark:text-white"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {["All", "RUNNING", "SUCCESS", "FAILED"].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                statusFilter === status
                  ? "bg-orange-500 text-white"
                  : "bg-white text-slate-600 hover:bg-slate-50 dark:bg-[#15191d] dark:text-slate-400 dark:hover:bg-slate-800"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Builds Table */}
      {loading ? (
        <div className="flex min-h-[30vh] items-center justify-center">
          <Loader2 size={28} className="animate-spin text-orange-500" />
        </div>
      ) : filteredBuilds.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <Clock size={32} className="mx-auto mb-2 text-slate-400 opacity-40" />
          <p className="text-sm font-semibold">No Builds Found</p>
          <p className="mt-1 text-xs text-slate-400">
            {builds.length === 0
              ? "Trigger a pipeline run to produce your first build telemetry."
              : "No builds matched your filter criteria."}
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-800/20 dark:text-slate-400">
              <tr>
                <th className="p-3.5">Build #</th>
                <th className="p-3.5">Pipeline</th>
                <th className="p-3.5">Branch / Commit</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Duration</th>
                <th className="p-3.5">Triggered</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredBuilds.map((build) => {
                const isRunning = build.status === "RUNNING";
                const isSuccess = build.status === "SUCCESS";
                const isFailed = build.status === "FAILED";

                return (
                  <tr key={build.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold">#{build.buildNumber}</td>
                    <td className="p-3.5 font-semibold text-slate-800 dark:text-slate-200">
                      {build.pipelineName}
                    </td>
                    <td className="p-3.5 text-slate-500 dark:text-slate-400">
                      <span className="font-mono text-[11px]">
                        {build.branch} {build.commitHash ? `(${build.commitHash})` : ""}
                      </span>
                    </td>
                    <td className="p-3.5">
                      <span
                        className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                          isRunning
                            ? "bg-blue-500/10 text-blue-500"
                            : isSuccess
                            ? "bg-green-500/10 text-green-600 dark:text-green-400"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {isRunning ? (
                          <Loader2 size={11} className="animate-spin" />
                        ) : isSuccess ? (
                          <CheckCircle2 size={11} />
                        ) : (
                          <XCircle size={11} />
                        )}
                        {build.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-500 dark:text-slate-400">{build.duration}</td>
                    <td className="p-3.5 text-slate-400">
                      {new Date(build.createdAt).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="p-3.5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedBuild(build)}
                          className="flex items-center gap-1 rounded bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                          title="View Execution Logs"
                        >
                          <Terminal size={12} />
                          <span>Logs</span>
                        </button>

                        {isRunning && (
                          <button
                            onClick={() => handleCancel(build.id)}
                            className="flex items-center gap-1 rounded bg-red-500/10 px-2 py-1 text-[11px] font-medium text-red-500 hover:bg-red-500/20"
                            title="Cancel Build"
                          >
                            <StopCircle size={12} />
                            <span>Stop</span>
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* LOGS MODAL */}
      {selectedBuild && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="flex h-[80vh] w-full max-w-3xl flex-col rounded-2xl border border-slate-700 bg-[#0d1117] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-800 px-5 py-3">
              <div>
                <h3 className="text-xs font-bold text-orange-400">
                  Build #{selectedBuild.buildNumber} Console Output
                </h3>
                <p className="text-[10px] text-gray-400">
                  {selectedBuild.pipelineName} • {selectedBuild.branch} • Status: {selectedBuild.status}
                </p>
              </div>
              <button
                onClick={() => setSelectedBuild(null)}
                className="text-gray-400 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 font-mono text-xs text-gray-300">
              <pre className="whitespace-pre-wrap leading-relaxed">
                {selectedBuild.logs || "No console output recorded for this build."}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Builds;
