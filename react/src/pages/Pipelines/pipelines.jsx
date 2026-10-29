import { useEffect, useState } from "react";

import {
  Plus,
  GitBranch,
  Play,
  MoreVertical,
  Trash2,
  X,
  Loader2,
} from "lucide-react";

import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

import { db, auth } from "../../firebase";

function Pipelines() {
  const [pipelines, setPipelines] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    repository: "",
    branch: "main",
    environment: "Development",
  });

  const [creating, setCreating] = useState(false);
  const [runningId, setRunningId] = useState(null);

  // ==========================================
  // REAL-TIME FIRESTORE PIPELINE LISTENER
  // ==========================================

  useEffect(() => {
    if (!auth.currentUser) {
      setLoading(false);
      return;
    }

    const userId = auth.currentUser.uid;

    const pipelinesQuery = query(
      collection(db, "pipelines"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      pipelinesQuery,
      (snapshot) => {
        const pipelineData = snapshot.docs.map((pipelineDoc) => ({
          id: pipelineDoc.id,
          ...pipelineDoc.data(),
        }));

        setPipelines(pipelineData);
        setLoading(false);
      },
      (error) => {
        console.error("Firebase pipeline error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // ==========================================
  // CREATE PIPELINE
  // ==========================================

  const createPipeline = async (e) => {
    e.preventDefault();

    if (!auth.currentUser) {
      alert("Please login first.");
      return;
    }

    if (!formData.name.trim()) {
      alert("Please enter a pipeline name.");
      return;
    }

    try {
      setCreating(true);

      await addDoc(collection(db, "pipelines"), {
        name: formData.name.trim(),
        repository:
          formData.repository.trim() || "github.com/ajita/devopshub",
        branch: formData.branch.trim() || "main",
        environment: formData.environment,
        status: "Created",
        lastRun: "Never",
        successRate: 100,
        triggeredBy: auth.currentUser.displayName || "User",
        userId: auth.currentUser.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setFormData({
        name: "",
        repository: "",
        branch: "main",
        environment: "Development",
      });

      setShowCreateModal(false);
    } catch (error) {
      console.error("Create pipeline error:", error);

      alert(
        `Unable to create pipeline.\n\n${error.message}`
      );
    } finally {
      setCreating(false);
    }
  };

  // ==========================================
  // RUN PIPELINE
  // ==========================================

  const runPipeline = async (pipeline) => {
    if (!auth.currentUser) {
      alert("Please login first.");
      return;
    }

    if (runningId) {
      return;
    }

    try {
      setRunningId(pipeline.id);

      // --------------------------------------
      // 1. UPDATE PIPELINE TO RUNNING
      // --------------------------------------

      const pipelineRef = doc(db, "pipelines", pipeline.id);

      await updateDoc(pipelineRef, {
        status: "Running",
        lastRun: "Running now",
        updatedAt: serverTimestamp(),
      });

      // --------------------------------------
      // 2. CREATE BUILD RECORD
      // --------------------------------------

      const buildRef = await addDoc(collection(db, "builds"), {
        pipelineId: pipeline.id,
        pipelineName: pipeline.name,

        repository: pipeline.repository || "",
        branch: pipeline.branch || "main",

        environment: pipeline.environment || "Development",

        status: "Running",

        triggeredBy:
          auth.currentUser.displayName ||
          auth.currentUser.email ||
          "User",

        userId: auth.currentUser.uid,

        startedAt: serverTimestamp(),
        createdAt: serverTimestamp(),

        duration: "Running",
      });

      // --------------------------------------
      // 3. SIMULATE BUILD EXECUTION
      // --------------------------------------

      setTimeout(async () => {
        try {
          // Update Build
          await updateDoc(doc(db, "builds", buildRef.id), {
            status: "Success",
            duration: "2m 14s",
            completedAt: serverTimestamp(),
          });

          // Update Pipeline
          await updateDoc(pipelineRef, {
            status: "Success",
            lastRun: "Just now",
            updatedAt: serverTimestamp(),
          });

          setRunningId(null);
        } catch (error) {
          console.error("Build completion error:", error);

          try {
            await updateDoc(pipelineRef, {
              status: "Failed",
              lastRun: "Just now",
              updatedAt: serverTimestamp(),
            });
          } catch (pipelineError) {
            console.error(
              "Pipeline update error:",
              pipelineError
            );
          }

          setRunningId(null);
        }
      }, 5000);
    } catch (error) {
      console.error("Run pipeline error:", error);

      setRunningId(null);

      alert(
        `Unable to run pipeline.\n\n${error.message}`
      );
    }
  };

  // ==========================================
  // DELETE PIPELINE
  // ==========================================

  const deletePipeline = async (pipeline) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${pipeline.name}"?`
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteDoc(
        doc(db, "pipelines", pipeline.id)
      );
    } catch (error) {
      console.error("Delete pipeline error:", error);

      alert(
        `Unable to delete pipeline.\n\n${error.message}`
      );
    }
  };

  // ==========================================
  // CALCULATE STATS
  // ==========================================

  const totalPipelines = pipelines.length;

  const runningPipelines = pipelines.filter(
    (pipeline) => pipeline.status === "Running"
  ).length;

  const successPipelines = pipelines.filter(
    (pipeline) => pipeline.status === "Success"
  ).length;

  const successRate =
    totalPipelines > 0
      ? ((successPipelines / totalPipelines) * 100).toFixed(1)
      : "0.0";

  // ==========================================
  // LOADING SCREEN
  // ==========================================

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <Loader2
            className="animate-spin text-orange-500"
            size={32}
          />
        </div>
      </div>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <div className="p-6">

      {/* ================= HEADER ================= */}

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Pipelines
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your CI/CD pipelines.
          </p>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition"
        >
          <Plus size={18} />
          Create Pipeline
        </button>

      </div>


      {/* ================= STAT CARDS ================= */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

        <Stat
          title="Total Pipelines"
          value={totalPipelines}
        />

        <Stat
          title="Running"
          value={runningPipelines}
        />

        <Stat
          title="Success Rate"
          value={`${successRate}%`}
        />

      </div>


      {/* ================= PIPELINES TABLE ================= */}

      <div className="bg-white dark:bg-[#15191e] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">

        {pipelines.length === 0 ? (

          <div className="p-12 text-center">

            <GitBranch
              size={42}
              className="mx-auto text-gray-400 mb-4"
            />

            <h3 className="text-lg font-semibold">
              No pipelines yet
            </h3>

            <p className="text-gray-500 mt-1">
              Create your first pipeline to get started.
            </p>

          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="bg-gray-50 dark:bg-[#101418] text-left">

                  <th className="p-4">
                    Pipeline
                  </th>

                  <th className="p-4">
                    Branch
                  </th>

                  <th className="p-4">
                    Environment
                  </th>

                  <th className="p-4">
                    Status
                  </th>

                  <th className="p-4">
                    Last Run
                  </th>

                  <th className="p-4">
                    Actions
                  </th>

                </tr>

              </thead>


              <tbody>

                {pipelines.map((pipeline) => (

                  <tr
                    key={pipeline.id}
                    className="border-t border-gray-100 dark:border-gray-800"
                  >

                    {/* PIPELINE */}

                    <td className="p-4">

                      <div className="flex items-center gap-3">

                        <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">

                          <GitBranch size={18} />

                        </div>

                        <div>

                          <span className="font-medium block">
                            {pipeline.name}
                          </span>

                          <span className="text-xs text-gray-400">
                            {pipeline.repository || "No repository"}
                          </span>

                        </div>

                      </div>

                    </td>


                    {/* BRANCH */}

                    <td className="p-4 text-gray-500">
                      {pipeline.branch || "main"}
                    </td>


                    {/* ENVIRONMENT */}

                    <td className="p-4 text-gray-500">
                      {pipeline.environment || "Development"}
                    </td>


                    {/* STATUS */}

                    <td className="p-4">

                      <span
                        className={`px-2.5 py-1 rounded-full text-xs ${
                          pipeline.status === "Success"
                            ? "bg-green-100 text-green-600"
                            : pipeline.status === "Failed"
                            ? "bg-red-100 text-red-600"
                            : pipeline.status === "Running"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {pipeline.status || "Created"}
                      </span>

                    </td>


                    {/* LAST RUN */}

                    <td className="p-4 text-gray-500">
                      {pipeline.lastRun || "Never"}
                    </td>


                    {/* ACTIONS */}

                    <td className="p-4">

                      <div className="flex items-center gap-2">

                        {/* RUN */}

                        <button
                          onClick={() =>
                            runPipeline(pipeline)
                          }
                          disabled={
                            runningId === pipeline.id
                          }
                          title="Run Pipeline"
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
                        >

                          {runningId === pipeline.id ? (

                            <Loader2
                              size={17}
                              className="animate-spin text-blue-500"
                            />

                          ) : (

                            <Play size={17} />

                          )}

                        </button>


                        {/* MORE */}

                        <button
                          onClick={() =>
                            alert(
                              `Pipeline: ${pipeline.name}\nRepository: ${pipeline.repository}\nBranch: ${pipeline.branch}\nEnvironment: ${pipeline.environment}`
                            )
                          }
                          title="Pipeline Details"
                          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >

                          <MoreVertical size={17} />

                        </button>


                        {/* DELETE */}

                        <button
                          onClick={() =>
                            deletePipeline(pipeline)
                          }
                          title="Delete Pipeline"
                          className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-red-500"
                        >

                          <Trash2 size={17} />

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </div>


      {/* ================= CREATE MODAL ================= */}

      {showCreateModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-lg bg-white dark:bg-[#15191e] rounded-2xl shadow-2xl">

            {/* MODAL HEADER */}

            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">

              <div>

                <h2 className="text-xl font-bold">
                  Create Pipeline
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Configure your CI/CD pipeline
                </p>

              </div>

              <button
                onClick={() =>
                  setShowCreateModal(false)
                }
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={20} />
              </button>

            </div>


            {/* FORM */}

            <form
              onSubmit={createPipeline}
              className="p-6 space-y-5"
            >

              {/* NAME */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Pipeline Name
                </label>

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Example: Frontend Production"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101418] outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />

              </div>


              {/* REPOSITORY */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Repository
                </label>

                <input
                  type="text"
                  value={formData.repository}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      repository: e.target.value,
                    })
                  }
                  placeholder="github.com/username/project"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101418] outline-none focus:ring-2 focus:ring-orange-500"
                />

              </div>


              {/* BRANCH */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Branch
                </label>

                <input
                  type="text"
                  value={formData.branch}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      branch: e.target.value,
                    })
                  }
                  placeholder="main"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101418] outline-none focus:ring-2 focus:ring-orange-500"
                />

              </div>


              {/* ENVIRONMENT */}

              <div>

                <label className="block text-sm font-medium mb-2">
                  Environment
                </label>

                <select
                  value={formData.environment}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      environment: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#101418] outline-none focus:ring-2 focus:ring-orange-500"
                >

                  <option value="Development">
                    Development
                  </option>

                  <option value="Staging">
                    Staging
                  </option>

                  <option value="Production">
                    Production
                  </option>

                </select>

              </div>


              {/* BUTTONS */}

              <div className="flex justify-end gap-3 pt-2">

                <button
                  type="button"
                  onClick={() =>
                    setShowCreateModal(false)
                  }
                  className="px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={creating}
                  className="flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg disabled:opacity-50"
                >

                  {creating && (
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                  )}

                  {creating
                    ? "Creating..."
                    : "Create Pipeline"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}


// ==========================================
// STAT CARD
// ==========================================

function Stat({ title, value }) {
  return (
    <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-5">

      <p className="text-gray-500 text-sm">
        {title}
      </p>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}

export default Pipelines;