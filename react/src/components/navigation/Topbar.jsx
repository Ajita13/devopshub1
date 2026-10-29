import { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  Bell,
  Sun,
  Moon,
  ChevronDown,
  CheckCircle2,
  Radio,
  Wifi,
  WifiOff,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../auth/AuthContext";
import { useSocket } from "../../context/SocketContext";

function Topbar({ setSidebarOpen }) {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const { connectionStatus, isConnected } = useSocket();

  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const searchItems = [
    { name: "Dashboard", keywords: ["dashboard", "overview", "home"], path: "/dashboard" },
    { name: "Pipelines", keywords: ["pipeline", "pipelines"], path: "/pipelines" },
    { name: "Pipeline Templates", keywords: ["template", "templates"], path: "/pipeline-templates" },
    { name: "Triggers", keywords: ["trigger", "triggers"], path: "/triggers" },
    { name: "Webhooks", keywords: ["webhook", "webhooks"], path: "/webhooks" },
    { name: "Builds", keywords: ["build", "builds"], path: "/builds" },
    { name: "Deployments", keywords: ["deploy", "deployment", "deployments"], path: "/deployments" },
    { name: "Environments", keywords: ["environment", "environments"], path: "/environments" },
    { name: "Releases", keywords: ["release", "releases"], path: "/releases" },
    { name: "Insights", keywords: ["insight", "insights"], path: "/insights" },
    { name: "Analytics", keywords: ["analytic", "analytics"], path: "/analytics" },
    { name: "Logs", keywords: ["log", "logs"], path: "/logs" },
    { name: "Alerts", keywords: ["alert", "alerts"], path: "/alerts" },
    { name: "Services", keywords: ["service", "services"], path: "/services" },
    { name: "Docker Registry", keywords: ["docker", "registry", "container"], path: "/docker-registry" },
    { name: "Secrets", keywords: ["secret", "secrets"], path: "/secrets" },
    { name: "Permissions", keywords: ["permission", "permissions"], path: "/permissions" },
    { name: "Audit Logs", keywords: ["audit", "audit logs"], path: "/audit-logs" },
    { name: "Integrations", keywords: ["integration", "integrations"], path: "/integrations" },
    { name: "Team Settings", keywords: ["team", "team settings"], path: "/team-settings" },
    { name: "General Settings", keywords: ["general", "general settings"], path: "/general-settings" },
    { name: "Settings", keywords: ["settings", "profile"], path: "/settings" },
  ];

  const filteredResults = searchItems.filter((item) => {
    const value = search.toLowerCase().trim();
    if (!value) return false;
    return (
      item.name.toLowerCase().includes(value) ||
      item.keywords.some((keyword) => keyword.includes(value))
    );
  });

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (filteredResults.length > 0) {
        navigate(filteredResults[0].path);
        setSearch("");
        setShowSearchResults(false);
      }
    }
  };

  const handleSearchClick = (path) => {
    navigate(path);
    setSearch("");
    setShowSearchResults(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";
  const userName = user?.name || "User";
  const userRole = user?.role ? user.role.toUpperCase() : "MEMBER";

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md dark:border-slate-800 dark:bg-[#0d1115]/80">
      {/* Left: Mobile Toggle & Global Search */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          title="Toggle Sidebar"
        >
          <Menu size={18} />
        </button>

        <div className="relative w-64 md:w-80">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSearchResults(true);
            }}
            onKeyDown={handleSearch}
            placeholder="Search pipelines, builds, logs..."
            className="w-full rounded-lg border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:border-orange-500 focus:bg-white dark:border-slate-800 dark:bg-[#15191d] dark:text-white dark:placeholder-slate-500 dark:focus:border-orange-500"
          />

          {showSearchResults && search.trim() && (
            <div className="absolute left-0 top-10 w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-[#15191d]">
              {filteredResults.length > 0 ? (
                filteredResults.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleSearchClick(item.path)}
                    className="flex w-full items-center px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {item.name}
                  </button>
                ))
              ) : (
                <div className="p-3 text-center text-xs text-slate-400">No destinations found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Real-time Connection Indicator */}
        <div
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
            isConnected
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
          }`}
          title={`Real-Time WebSocket Status: ${connectionStatus}`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              isConnected ? "bg-green-500 animate-pulse" : "bg-amber-500"
            }`}
          />
          <span className="hidden sm:inline capitalize">{connectionStatus}</span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={17} /> : <Moon size={17} />}
        </button>

        {/* Notifications Dropdown */}
        <div ref={notificationRef} className="relative">
          <button
            onClick={() => setShowNotifications((prev) => !prev)}
            className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            title="Notifications"
          >
            <Bell size={17} />
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-800 dark:bg-[#15191d]">
              <div className="mb-2 flex items-center justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-800 dark:text-white">
                  Notifications
                </span>
                <span className="text-[10px] text-green-500 font-medium">Live Sync Active</span>
              </div>
              <p className="py-4 text-center text-xs text-slate-400">
                All services running smoothly.
              </p>
            </div>
          )}
        </div>

        {/* User Profile Menu */}
        <div ref={profileRef} className="relative ml-1">
          <button
            onClick={() => setShowProfile((prev) => !prev)}
            className="flex items-center gap-2 rounded-lg p-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white shadow-sm">
              {userInitial}
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-xs font-semibold text-slate-800 dark:text-white">{userName}</p>
              <p className="text-[10px] text-slate-400">{userRole}</p>
            </div>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {showProfile && (
            <div className="absolute right-0 top-12 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-[#15191d]">
              <div className="border-b border-slate-100 p-3 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-800 dark:text-white">{userName}</p>
                <p className="truncate text-[11px] text-slate-400">{user?.email}</p>
              </div>

              <div className="p-1">
                <button
                  onClick={() => {
                    navigate("/settings");
                    setShowProfile(false);
                  }}
                  className="flex w-full items-center rounded-lg px-3 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Account Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center rounded-lg px-3 py-2 text-left text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30"
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Topbar;
