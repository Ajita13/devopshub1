import React, { useState } from "react";
import {
  Plus,
  Search,
  MoreVertical,
  CheckCircle2,
  Clock3,
  AlertCircle,
  Activity,
} from "lucide-react";

function ModulePage({ title, description, type }) {
  const [search, setSearch] = useState("");

  const data = {
    templates: [
      ["Node.js CI/CD", "Node.js", "Active", "2 hours ago"],
      ["React Production", "React", "Active", "5 hours ago"],
      ["Python Backend", "Python", "Active", "1 day ago"],
    ],

    triggers: [
      ["Push Trigger", "main", "Active", "GitHub"],
      ["Pull Request", "develop", "Active", "GitHub"],
      ["Scheduled Build", "Every night", "Active", "Scheduler"],
    ],

    webhooks: [
      ["GitHub Webhook", "Connected", "Active", "GitHub"],
      ["Docker Webhook", "Connected", "Active", "Docker"],
      ["Deployment Hook", "Connected", "Active", "Internal"],
    ],

    environments: [
      ["Development", "dev", "Healthy", "99.9%"],
      ["Staging", "staging", "Healthy", "99.7%"],
      ["Production", "main", "Healthy", "99.9%"],
    ],

    releases: [
      ["Release v2.1", "Production", "Success", "Today"],
      ["Release v2.0", "Production", "Success", "Yesterday"],
      ["Release v1.9", "Staging", "Success", "2 days ago"],
    ],

    insights: [
      ["Build Success Rate", "94.7%", "Improving", "+6.2%"],
      ["Deployment Frequency", "16", "Improving", "+33%"],
      ["Avg Deploy Time", "3m 47s", "Improving", "-18%"],
    ],

    alerts: [
      ["High CPU Usage", "Production Server", "Warning", "10 min ago"],
      ["Build Failed", "release/v2.1", "Critical", "25 min ago"],
      ["Deployment Completed", "Production", "Resolved", "1 hour ago"],
    ],

    services: [
      ["GitHub", "Source Control", "Connected", "Healthy"],
      ["Docker", "Container Registry", "Connected", "Healthy"],
      ["Jenkins", "CI Server", "Connected", "Healthy"],
    ],

    docker: [
      ["devopshub/frontend", "v2.1.0", "Latest", "120 MB"],
      ["devopshub/backend", "v2.0.4", "Latest", "210 MB"],
      ["devopshub/api", "v1.9.2", "Older", "185 MB"],
    ],

    secrets: [
      ["DATABASE_URL", "Production", "Protected", "Updated today"],
      ["API_KEY", "Production", "Protected", "Updated yesterday"],
      ["JWT_SECRET", "Backend", "Protected", "Updated 2 days ago"],
    ],

    permissions: [
      ["Admin", "Full Access", "4 users", "Active"],
      ["Developer", "Build + Deploy", "8 users", "Active"],
      ["Viewer", "Read Only", "12 users", "Active"],
    ],

    audit: [
      ["Ajita", "Pipeline Created", "DevOpsHub", "2 min ago"],
      ["Admin", "Deployment Started", "Production", "15 min ago"],
      ["System", "Security Scan", "Pipeline", "30 min ago"],
    ],

    integrations: [
      ["GitHub", "Source Control", "Connected", "Healthy"],
      ["Docker Hub", "Container Registry", "Connected", "Healthy"],
      ["Slack", "Notifications", "Not Connected", "—"],
    ],

    team: [
      ["Ajita", "Administrator", "Admin", "Active"],
      ["DevOps Engineer", "Developer", "Developer", "Active"],
      ["QA Engineer", "Tester", "Viewer", "Active"],
    ],

    general: [
      ["Theme", "Light", "Appearance", "Enabled"],
      ["Notifications", "Enabled", "Preferences", "Enabled"],
      ["Auto Refresh", "30 seconds", "Dashboard", "Enabled"],
    ],
  };

  const rows = data[type] || [];

  const filteredRows = rows.filter((row) =>
    row.join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {description}
          </p>
        </div>

        <button
          onClick={() => alert(`Create ${title} clicked`)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
        >
          <Plus size={18} />
          Create New
        </button>

      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        <Stat
          title="Total"
          value={rows.length}
          icon={<Activity size={20} />}
        />

        <Stat
          title="Active"
          value={rows.length}
          icon={<CheckCircle2 size={20} />}
        />

        <Stat
          title="Pending"
          value="2"
          icon={<Clock3 size={20} />}
        />

        <Stat
          title="Issues"
          value="1"
          icon={<AlertCircle size={20} />}
        />

      </div>

      {/* Search */}
      <div className="bg-white dark:bg-[#15191e] rounded-xl border border-gray-200 dark:border-gray-800">

        <div className="p-4 border-b border-gray-200 dark:border-gray-800">

          <div className="relative max-w-md">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={`Search ${title.toLowerCase()}...`}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#101418] text-gray-900 dark:text-white outline-none focus:border-orange-500"
            />

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="text-left bg-gray-50 dark:bg-[#101418]">

                <th className="px-5 py-3 text-sm font-semibold">
                  Name
                </th>

                <th className="px-5 py-3 text-sm font-semibold">
                  Details
                </th>

                <th className="px-5 py-3 text-sm font-semibold">
                  Status
                </th>

                <th className="px-5 py-3 text-sm font-semibold">
                  Updated
                </th>

                <th className="px-5 py-3 text-sm font-semibold">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredRows.map((row, index) => (

                <tr
                  key={index}
                  className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#1b2026]"
                >

                  <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">
                    {row[0]}
                  </td>

                  <td className="px-5 py-4 text-gray-500 dark:text-gray-400">
                    {row[1]}
                  </td>

                  <td className="px-5 py-4">

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 dark:bg-green-900/20">
                      <CheckCircle2 size={13} />
                      {row[2]}
                    </span>

                  </td>

                  <td className="px-5 py-4 text-gray-500 dark:text-gray-400">
                    {row[3]}
                  </td>

                  <td className="px-5 py-4">

                    <button
                      onClick={() => alert(`Viewing ${row[0]}`)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <MoreVertical size={18} />
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {filteredRows.length === 0 && (
            <div className="p-10 text-center text-gray-500">
              No results found.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}

function Stat({ title, value, icon }) {
  return (
    <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-5">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {value}
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-500 flex items-center justify-center">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default ModulePage;