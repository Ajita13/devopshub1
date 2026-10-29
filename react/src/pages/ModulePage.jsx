import React, { useState, useEffect, useCallback } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Activity,
  Loader2,
  RefreshCw,
  X,
} from "lucide-react";
import { getModuleData, createModuleItem } from "../services/api";
import { useSocket } from "../context/SocketContext";

function ModulePage({ title, description, type }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

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

  // Real-time updates
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
    } catch (err) {
      alert(err.message || "Failed to create item.");
    } finally {
      setSubmitting(false);
    }
  };

  const filteredItems = items.filter((row) =>
    row.some((cell) => String(cell).toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold tracking-tight">{title}</h1>
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
          <table className="w-full text-left text-xs">
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredItems.map((row, index) => (
                <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`p-3.5 ${
                        cIdx === 0
                          ? "font-semibold text-slate-800 dark:text-slate-200"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {String(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-[#15191d]">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
              <h2 className="text-sm font-bold">Add to {title}</h2>
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
                  placeholder={`e.g. New ${title}`}
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
                  <span>Save</span>
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
