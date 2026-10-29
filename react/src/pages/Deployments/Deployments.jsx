import { useEffect, useState, useCallback } from "react";
import {
  Rocket,
  CheckCircle2,
  XCircle,
  Plus,
  Loader2,
  AlertCircle,
  RefreshCw,
  X,
  Server,
} from "lucide-react";
import { getDeployments, createDeployment } from "../../services/api";
import { useSocket } from "../../context/SocketContext";

function Deployments() {
  const [deployments, setDeployments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creating, setCreating] = useState(false);

  const [formData, setFormData] = useState({
    name: "Web Application Deployment",
    environment: "Production",
    branch: "main",
  });

  const { socket } = useSocket();

  const loadDeployments = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const res = await getDeployments();
      if (res && res.success) {
        setDeployments(res.deployments);
        setError("");
      }
    } catch (err) {
      console.error("Failed to load deployments:", err);
      if (!isSilent) setError(err.message || "Failed to load deployments.");
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDeployments();
  }, [loadDeployments]);

  // Real-time listener
  useEffect(() => {
    if (!socket) return;

    const handleCreated = (newDep) => {
      setDeployments((prev) => [newDep, ...prev.filter((d) => d.id !== newDep.id)]);
    };

    socket.on("deployment:created", handleCreated);

    return () => {
      socket.off("deployment:created", handleCreated);
    };
  }, [socket]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    try {
      setCreating(true);
      await createDeployment({
        ...formData,
        status: "SUCCESS",
      });
      setShowCreateModal(false);
      loadDeployments(true);
    } catch (err) {
      alert(err.message || "Failed to trigger deployment.");
    } finally {
      setCreating(false);
    }
  };

  const totalDeployments = deployments.length;
  const successful = deployments.filter((d) => d.status === "SUCCESS").length;
  const failed = deployments.filter((d) => d.status === "FAILED").length;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Deployments</h1>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Monitor and trigger continuous delivery releases across environments.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => loadDeployments()}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-[#15191d] dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
            <span>Refresh</span>
          </button>

          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            <Plus size={16} />
            <span>New Deployment</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-[11px] font-medium text-slate-400">Total Deployments</span>
          <p className="mt-1 text-2xl font-bold">{totalDeployments}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-[11px] font-medium text-slate-400">Successful</span>
          <p className="mt-1 text-2xl font-bold text-green-500">{successful}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <span className="text-[11px] font-medium text-slate-400">Failed</span>
          <p className="mt-1 text-2xl font-bold text-red-500">{failed}</p>
        </div>
      </div>

      {/* Main Table */}
      {loading ? (
        <div className="flex min-h-[30vh] items-center justify-center">
          <Loader2 size={28} className="animate-spin text-orange-500" />
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center text-red-500">
          <AlertCircle size={24} className="mx-auto mb-2" />
          <p className="text-sm font-semibold">{error}</p>
          <button
            onClick={() => loadDeployments()}
            className="mt-3 rounded-lg bg-red-600 px-4 py-1.5 text-xs font-medium text-white"
          >
            Retry
          </button>
        </div>
      ) : deployments.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <Rocket size={32} className="mx-auto mb-2 text-slate-400 opacity-40" />
          <p className="text-sm font-semibold">No Deployments Recorded</p>
          <p className="mt-1 text-xs text-slate-400">
            Trigger a manual deployment or run a pipeline to initiate automated releases.
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="mt-4 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-orange-600"
          >
            Deploy Now
          </button>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <table className="w-full text-left text-xs">
            <thead className="border-b border-slate-100 bg-slate-50/50 text-[11px] font-semibold text-slate-500 dark:border-slate-800 dark:bg-slate-800/20 dark:text-slate-400">
              <tr>
                <th className="p-3.5">Deployment</th>
                <th className="p-3.5">Environment</th>
                <th className="p-3.5">Branch</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Duration</th>
                <th className="p-3.5">Deployed By</th>
                <th className="p-3.5">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {deployments.map((dep) => {
                const isSuccess = dep.status === "SUCCESS" || dep.status === "Success";
                return (
                  <tr key={dep.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold text-slate-800 dark:text-slate-200">
                      {dep.name}
                    </td>
                    <td className="p-3.5">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                        {dep.environment}
                      </span>
                    </td>
                    <td className="p-3.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                      {dep.branch}
                    </td>
                    <td className="p-3.5">
                      <span
                        className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                          isSuccess
                            ? "bg-green-500/10 text-green-600 dark:text-green-400"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {isSuccess ? <CheckCircle2 size={11} /> : <XCircle size={11} />}
                        {dep.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-500 dark:text-slate-400">{dep.duration}</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-300">{dep.deployedBy}</td>
                    <td className="p-3.5 text-slate-400">
                      {new Date(dep.createdAt).toLocaleString([], {
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* CREATE MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#15191d]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
              <h2 className="text-sm font-bold">Trigger New Deployment</h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleCreate} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Deployment Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Environment
                  </label>
                  <select
                    value={formData.environment}
                    onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                  >
                    <option>Production</option>
                    <option>Staging</option>
                    <option>Development</option>
                    <option>QA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Branch
                  </label>
                  <input
                    type="text"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                  />
                </div>
              </div>

              <div className="mt-5 flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 disabled:opacity-50"
                >
                  {creating && <Loader2 size={13} className="animate-spin" />}
                  <span>{creating ? "Deploying..." : "Start Deploy"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Deployments;
