import React, { useState, useEffect, useCallback } from "react";
import {
  Plus,
  Search,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Activity,
  Loader2,
  RefreshCw,
  X,
  Shield,
  Zap,
  Play,
  ExternalLink,
} from "lucide-react";
import { getModuleData, createModuleItem } from "../services/api";
import { useSocket } from "../context/SocketContext";

function renderStatusBadge(text) {
  const val = String(text).toLowerCase();

  if (
    val.includes("active") ||
    val.includes("healthy") ||
    val.includes("connected") ||
    val.includes("success") ||
    val.includes("verified") ||
    val.includes("enabled") ||
    val.includes("resolved") ||
    val.includes("elite")
  ) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        {text}
      </span>
    );
  }

  if (val.includes("warn") || val.includes("high")) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
        {text}
      </span>
    );
  }

  if (val.includes("protected")) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2.5 py-0.5 text-[11px] font-medium text-purple-600 dark:text-purple-400">
        <Shield size={11} className="text-purple-500" />
        {text}
      </span>
    );
  }

  if (val.includes("scheduled") || val.includes("running")) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-600 dark:text-blue-400">
        <Clock3 size={11} className="text-blue-500" />
        {text}
      </span>
    );
  }

  return <span>{text}</span>;
}

function ModulePage({ title, description, type }) {
  const [items, setItems] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [actionMessage, setActionMessage] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const { socket } = useSocket();

  const loadData = useCallback(async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const res = await getModuleData(type);
      if (res && res.success) {
        setItems(res.items || []);
        setHeaders(res.headers || ["Name", "Category", "Status", "Details"]);
        setError("");
      }
    } catch (err) {
      console.error(`Failed to load module data for ${type}:`, err);
      if (!isSilent) setError(err.message || "Failed to load data.");
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Real-time updates via Socket.IO
  useEffect(() => {
    if (!socket) return;

    const handleUpdate = (payload) => {
      if (payload?.type === type) {
        loadData(true);
      }
    };

    socket.on("module:updated", handleUpdate);
    return () => {
      socket.off("module:updated", handleUpdate);
    };
  }, [socket, type, loadData]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    try {
      setSubmitting(true);
      await createModuleItem(type, {
        name: newItemName.trim(),
        key: newItemName.trim().toUpperCase().replace(/\s+/g, "_"),
        version: newItemName.trim(),
      });
      setShowAddModal(false);
      setNewItemName("");
      loadData(true);
      triggerToast(`Added new item to ${title}`);
    } catch (err) {
      alert(err.message || "Failed to create item.");
    } finally {
      setSubmitting(false);
    }
  };

  const triggerToast = (msg) => {
    setActionMessage(msg);
    setTimeout(() => setActionMessage(""), 3500);
  };

  const handleRowAction = (item) => {
    const itemName = item[0] || "Item";
    triggerToast(`Action initiated on ${itemName}: Success`);
  };

  const filteredItems = items.filter((row) =>
    row.some((cell) => String(cell).toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6">
      {/* Toast Notification */}
      {actionMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl bg-slate-900 border border-slate-700 px-4 py-3 text-xs text-white shadow-2xl animate-fade-in">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{actionMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {title}
          </h1>
          <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => loadData()}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-[#15191d] dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
            <span>Refresh</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            <Plus size={15} />
            <span>Add Item</span>
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-4 relative w-full sm:w-72">
        <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={`Search ${title.toLowerCase()}...`}
          className="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-500 dark:border-slate-800 dark:bg-[#15191d] dark:text-white"
        />
      </div>

      {/* Content Table / Cards */}
      {loading ? (
        <div className="flex min-h-[30vh] items-center justify-center">
          <Loader2 size={28} className="animate-spin text-orange-500" />
        </div>
      ) : error ? (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6 text-center text-red-500">
          <AlertCircle size={24} className="mx-auto mb-2" />
          <p className="text-sm font-semibold">{error}</p>
          <button
            onClick={() => loadData()}
            className="mt-3 rounded-lg bg-red-600 px-4 py-1.5 text-xs font-medium text-white"
          >
            Retry
          </button>
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <Activity size={32} className="mx-auto mb-2 text-slate-400 opacity-40" />
          <p className="text-sm font-semibold">No records found for {title}</p>
          <p className="mt-1 text-xs text-slate-400">
            Click "Add Item" above to add your first record to this module.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-slate-100 bg-slate-50/75 dark:border-slate-800 dark:bg-[#111417]">
                <tr>
                  {headers.map((h, i) => (
                    <th
                      key={i}
                      className="p-3.5 font-semibold text-slate-600 dark:text-slate-300"
                    >
                      {h}
                    </th>
                  ))}
                  <th className="p-3.5 text-right font-semibold text-slate-600 dark:text-slate-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredItems.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/50 transition-colors dark:hover:bg-slate-800/40"
                  >
                    {row.map((cell, cIdx) => (
                      <td
                        key={cIdx}
                        className={`p-3.5 ${
                          cIdx === 0
                            ? "font-semibold text-slate-900 dark:text-slate-100"
                            : "text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {cIdx === 2 || String(cell).includes("Active") || String(cell).includes("Protected") || String(cell).includes("Healthy")
                          ? renderStatusBadge(cell)
                          : String(cell)}
                      </td>
                    ))}
                    <td className="p-3.5 text-right">
                      <button
                        onClick={() => handleRowAction(row)}
                        className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 transition hover:bg-orange-500 hover:text-white hover:border-orange-500 dark:border-slate-700 dark:bg-[#161a1f] dark:text-slate-300 dark:hover:bg-orange-500 dark:hover:text-white"
                      >
                        <Zap size={11} />
                        <span>Run / Test</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#15191d]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Add to {title}
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleCreate} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name / Identifier
                </label>
                <input
                  type="text"
                  required
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder={`e.g. New ${title} Record`}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                />
              </div>

              <div className="mt-5 flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white hover:bg-orange-600 disabled:opacity-50"
                >
                  {submitting && <Loader2 size={13} className="animate-spin" />}
                  <span>Save Record</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModulePage;
