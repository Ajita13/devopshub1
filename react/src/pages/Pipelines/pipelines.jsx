import { useEffect, useState, useCallback } from "react";
import {
  Plus,
  GitBranch,
  Play,
  Trash2,
  X,
  Loader2,
  AlertCircle,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import {
  getPipelines,
  createPipeline,
  runPipeline,
  deletePipeline,
} from "../../services/api";
import { useSocket } from "../../context/SocketContext";

function Pipelines() {
  const [pipelines, setPipelines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [creating, setCreating] = useState(false);
  const [runningId, setRunningId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    repository: "",
    branch: "main",
    environment: "Development",
  });

  const { socket } = useSocket();

  const loadPipelines = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const res = await getPipelines();
      if (res && res.success) {
        setPipelines(res.pipelines);
        setError("");
      }
    } catch (err) {
      console.error("Failed to load pipelines:", err);
      if (!isSilent) setError(err.message || "Failed to load pipelines.");
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPipelines();
  }, [loadPipelines]);

  // Real-time socket events for pipelines
  useEffect(() => {
    if (!socket) return;

    const handleCreated = (newPipeline) => {
      setPipelines((prev) => [newPipeline, ...prev.filter((p) => p.id !== newPipeline.id)]);
    };

    const handleUpdated = (updated) => {
      setPipelines((prev) => prev.map((p) => (p.id === updated.id ? { ...p, ...updated } : p)));
    };

    const handleDeleted = ({ id }) => {
      setPipelines((prev) => prev.filter((p) => p.id !== id));
    };

    socket.on("pipeline:created", handleCreated);
    socket.on("pipeline:updated", handleUpdated);
    socket.on("pipeline:deleted", handleDeleted);

    return () => {
      socket.off("pipeline:created", handleCreated);
      socket.off("pipeline:updated", handleUpdated);
      socket.off("pipeline:deleted", handleDeleted);
    };
  }, [socket]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    try {
      setCreating(true);
      await createPipeline(formData);
      setShowCreateModal(false);
      setFormData({
        name: "",
        repository: "",
        branch: "main",
        environment: "Development",
      });
      loadPipelines(true);
    } catch (err) {
      alert(err.message || "Failed to create pipeline.");
    } finally {
      setCreating(false);
    }
  };

  const handleRun = async (pipelineId) => {
    try {
      setRunningId(pipelineId);
      await runPipeline(pipelineId);
      setPipelines((prev) =>
        prev.map((p) => (p.id === pipelineId ? { ...p, status: "RUNNING" } : p))
      );
    } catch (err) {
      alert(err.message || "Failed to trigger pipeline run.");
    } finally {
      setRunningId(null);
    }
  };

  const handleDelete = async (pipelineId) => {
    if (!window.confirm("Are you sure you want to delete this pipeline?")) return;
    try {
      await deletePipeline(pipelineId);
      setPipelines((prev) => prev.filter((p) => p.id !== pipelineId));
    } catch (err) {
      alert(err.message || "Failed to delete pipeline.");
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Pipelines</h1>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
            Create, trigger, and monitor your continuous integration & delivery pipelines.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600"
        >
          <Plus size={16} />
          <span>New Pipeline</span>
        </button>
      </div>

      {/* Main Content */}
      {loading ? (
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 size={28} className="animate-spin text-orange-500" />
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center text-red-500">
          <AlertCircle size={24} className="mx-auto mb-2" />
          <p className="text-sm font-semibold">{error}</p>
          <button
            onClick={() => loadPipelines()}
            className="mt-3 rounded-lg bg-red-600 px-4 py-1.5 text-xs font-medium text-white"
          >
            Retry
          </button>
        </div>
      ) : pipelines.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-12 text-center">
          <GitBranch size={36} className="mx-auto mb-3 text-slate-400 opacity-60" />
          <h2 className="text-base font-semibold">No Pipelines Configured</h2>
          <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto">
            You don't have any CI/CD pipelines yet. Create your first pipeline to automate your build and deployment workflows.
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-orange-600"
          >
            <Plus size={15} />
            Create First Pipeline
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pipelines.map((pipeline) => {
            const isRunning = pipeline.status === "RUNNING" || runningId === pipeline.id;
            const isSuccess = pipeline.status === "SUCCESS";
            const isFailed = pipeline.status === "FAILED";

            return (
              <div
                key={pipeline.id}
                className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-[#15191d]"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-bold tracking-tight">{pipeline.name}</h3>
                      <p className="text-[11px] text-slate-400 mt-0.5 truncate max-w-[220px]">
                        {pipeline.repository}
                      </p>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                        isRunning
                          ? "bg-blue-500/10 text-blue-500"
                          : isSuccess
                          ? "bg-green-500/10 text-green-600 dark:text-green-400"
                          : isFailed
                          ? "bg-red-500/10 text-red-500"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      }`}
                    >
                      {isRunning ? (
                        <Loader2 size={11} className="animate-spin" />
                      ) : isSuccess ? (
                        <CheckCircle2 size={11} />
                      ) : isFailed ? (
                        <XCircle size={11} />
                      ) : null}
                      {pipeline.status}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      branch: {pipeline.branch}
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      env: {pipeline.environment}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3 dark:border-slate-800">
                  <span className="text-[10px] text-slate-400">
                    {pipeline.lastRunAt
                      ? `Last run: ${new Date(pipeline.lastRunAt).toLocaleTimeString()}`
                      : "Never executed"}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleRun(pipeline.id)}
                      disabled={isRunning}
                      className="flex items-center gap-1 rounded-lg bg-orange-500 px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:opacity-50"
                      title="Run Pipeline"
                    >
                      {isRunning ? <Loader2 size={12} className="animate-spin" /> : <Play size={12} />}
                      <span>{isRunning ? "Running..." : "Run"}</span>
                    </button>

                    <button
                      onClick={() => handleDelete(pipeline.id)}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-950/30"
                      title="Delete Pipeline"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* CREATE MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#15191d]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
              <h2 className="text-sm font-bold">Create New Pipeline</h2>
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
                  Pipeline Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. backend-api-ci"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Repository URL / Identifier
                </label>
                <input
                  type="text"
                  value={formData.repository}
                  onChange={(e) => setFormData({ ...formData, repository: e.target.value })}
                  placeholder="github.com/my-org/my-service"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
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

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Environment
                  </label>
                  <select
                    value={formData.environment}
                    onChange={(e) => setFormData({ ...formData, environment: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                  >
                    <option>Development</option>
                    <option>Staging</option>
                    <option>Production</option>
                    <option>QA</option>
                  </select>
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
                  <span>{creating ? "Creating..." : "Create Pipeline"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pipelines;
