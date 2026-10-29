import { useEffect, useState } from "react";
import {
  Activity,
  CheckCircle,
  Clock,
  GitBranch,
  XCircle,
  Search,
  RefreshCw,
} from "lucide-react";

import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";

import { db, auth } from "../../firebase";

function Builds() {
  const [builds, setBuilds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let unsubscribeSnapshot = null;

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setBuilds([]);
        setLoading(false);
        setError("Please login to view your builds.");
        return;
      }

      setLoading(true);
      setError("");

      const buildsQuery = query(
        collection(db, "builds"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      unsubscribeSnapshot = onSnapshot(
        buildsQuery,
        (snapshot) => {
          const buildData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          setBuilds(buildData);
          setLoading(false);
        },
        (firebaseError) => {
          console.error("Firestore Builds Error:", firebaseError);
          setError(
            "Unable to connect to Builds in Firebase. Please check Firestore."
          );
          setLoading(false);
        }
      );
    });

    return () => {
      unsubscribeAuth();

      if (unsubscribeSnapshot) {
        unsubscribeSnapshot();
      }
    };
  }, []);

  const filteredBuilds = builds.filter((build) => {
    const searchText = search.toLowerCase();

    return (
      build.pipelineName?.toLowerCase().includes(searchText) ||
      build.branch?.toLowerCase().includes(searchText) ||
      build.status?.toLowerCase().includes(searchText) ||
      build.commit?.toLowerCase().includes(searchText)
    );
  });

  const totalBuilds = builds.length;

  const successfulBuilds = builds.filter(
    (build) => build.status === "Success"
  ).length;

  const failedBuilds = builds.filter(
    (build) => build.status === "Failed"
  ).length;

  const runningBuilds = builds.filter(
    (build) => build.status === "Running"
  ).length;

  const successRate =
    totalBuilds > 0
      ? ((successfulBuilds / totalBuilds) * 100).toFixed(1)
      : "0.0";

  const formatDate = (timestamp) => {
    if (!timestamp) return "Just now";

    if (timestamp?.toDate) {
      return timestamp.toDate().toLocaleString();
    }

    if (timestamp instanceof Date) {
      return timestamp.toLocaleString();
    }

    return "Just now";
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Success":
        return "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400";

      case "Failed":
        return "bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400";

      case "Running":
        return "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400";

      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Success":
        return <CheckCircle size={16} />;

      case "Failed":
        return <XCircle size={16} />;

      case "Running":
        return <RefreshCw size={16} className="animate-spin" />;

      default:
        return <Clock size={16} />;
    }
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Builds</h1>

          <p className="text-gray-500 mt-1">
            Monitor your CI/CD build activity in real time.
          </p>
        </div>

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search builds..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-72 pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#15191e] outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* ERROR */}
      {error && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
          {error}
        </div>
      )}

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Stat
          title="Total Builds"
          value={totalBuilds}
          icon={<Activity size={20} />}
        />

        <Stat
          title="Successful"
          value={successfulBuilds}
          icon={<CheckCircle size={20} />}
        />

        <Stat
          title="Failed"
          value={failedBuilds}
          icon={<XCircle size={20} />}
        />

        <Stat
          title="Running"
          value={runningBuilds}
          icon={<RefreshCw size={20} />}
        />
      </div>

      {/* SUCCESS RATE */}
      <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-5 mb-6">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-gray-500 text-sm">Build Success Rate</p>

            <p className="text-2xl font-bold mt-1">
              {successRate}%
            </p>
          </div>

          <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-500">
            <CheckCircle size={24} />
          </div>
        </div>

        <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full transition-all duration-500"
            style={{
              width: `${Math.min(Number(successRate), 100)}%`,
            }}
          />
        </div>
      </div>

      {/* BUILDS TABLE */}
      <div className="bg-white dark:bg-[#15191e] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="font-semibold text-lg">Build History</h2>

          <p className="text-sm text-gray-500 mt-1">
            Firebase real-time build data
          </p>
        </div>

        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading builds from Firebase...
          </div>
        ) : filteredBuilds.length === 0 ? (
          <div className="p-10 text-center">
            <div className="w-14 h-14 mx-auto rounded-xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 mb-4">
              <Activity size={26} />
            </div>

            <h3 className="font-semibold text-lg">
              No builds found
            </h3>

            <p className="text-gray-500 mt-1">
              Builds created from your pipelines will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-[#101418] text-left">
                  <th className="p-4">Build</th>
                  <th className="p-4">Pipeline</th>
                  <th className="p-4">Branch</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Commit</th>
                  <th className="p-4">Created</th>
                </tr>
              </thead>

              <tbody>
                {filteredBuilds.map((build) => (
                  <tr
                    key={build.id}
                    className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#101418]"
                  >
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
                          <Activity size={18} />
                        </div>

                        <div>
                          <p className="font-medium">
                            {build.buildNumber
                              ? `Build #${build.buildNumber}`
                              : `Build ${build.id.slice(0, 6)}`}
                          </p>

                          {build.duration && (
                            <p className="text-xs text-gray-500 mt-1">
                              {build.duration}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    <td className="p-4 font-medium">
                      {build.pipelineName || "Unknown Pipeline"}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <GitBranch size={16} />
                        {build.branch || "main"}
                      </div>
                    </td>

                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                          build.status
                        )}`}
                      >
                        {getStatusIcon(build.status)}
                        {build.status || "Created"}
                      </span>
                    </td>

                    <td className="p-4 text-gray-500">
                      {build.commit || "—"}
                    </td>

                    <td className="p-4 text-gray-500 text-sm">
                      {formatDate(build.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ title, value, icon }) {
  return (
    <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <p className="text-2xl font-bold mt-2">{value}</p>
        </div>

        <div className="w-10 h-10 rounded-lg bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-500">
          {icon}
        </div>
      </div>
    </div>
  );
}

export default Builds;