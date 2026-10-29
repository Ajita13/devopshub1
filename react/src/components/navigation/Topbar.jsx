import { useEffect, useRef, useState } from "react";
import {
  Menu,
  Search,
  Bell,
  CircleHelp,
  Sun,
  Moon,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../auth/AuthContext";

function Topbar({ setSidebarOpen }) {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const { logout } = useAuth();

  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);

  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  /*
    Search destinations
  */
  const searchItems = [
    {
      name: "Dashboard",
      keywords: ["dashboard", "overview", "home"],
      path: "/dashboard",
    },
    {
      name: "Pipelines",
      keywords: ["pipeline", "pipelines"],
      path: "/pipelines",
    },
    {
      name: "Pipeline Templates",
      keywords: ["template", "templates"],
      path: "/pipeline-templates",
    },
    {
      name: "Triggers",
      keywords: ["trigger", "triggers"],
      path: "/triggers",
    },
    {
      name: "Webhooks",
      keywords: ["webhook", "webhooks"],
      path: "/webhooks",
    },
    {
      name: "Builds",
      keywords: ["build", "builds"],
      path: "/builds",
    },
    {
      name: "Deployments",
      keywords: ["deploy", "deployment", "deployments"],
      path: "/deployments",
    },
    {
      name: "Environments",
      keywords: ["environment", "environments"],
      path: "/environments",
    },
    {
      name: "Releases",
      keywords: ["release", "releases"],
      path: "/releases",
    },
    {
      name: "Insights",
      keywords: ["insight", "insights"],
      path: "/insights",
    },
    {
      name: "Analytics",
      keywords: ["analytic", "analytics"],
      path: "/analytics",
    },
    {
      name: "Logs",
      keywords: ["log", "logs"],
      path: "/logs",
    },
    {
      name: "Alerts",
      keywords: ["alert", "alerts"],
      path: "/alerts",
    },
    {
      name: "Services",
      keywords: ["service", "services"],
      path: "/services",
    },
    {
      name: "Docker Registry",
      keywords: ["docker", "registry", "container"],
      path: "/docker-registry",
    },
    {
      name: "Secrets",
      keywords: ["secret", "secrets"],
      path: "/secrets",
    },
    {
      name: "Permissions",
      keywords: ["permission", "permissions"],
      path: "/permissions",
    },
    {
      name: "Audit Logs",
      keywords: ["audit", "audit logs"],
      path: "/audit-logs",
    },
    {
      name: "Integrations",
      keywords: ["integration", "integrations"],
      path: "/integrations",
    },
    {
      name: "Team Settings",
      keywords: ["team", "team settings"],
      path: "/team-settings",
    },
    {
      name: "General Settings",
      keywords: ["general", "general settings"],
      path: "/general-settings",
    },
  ];

  /*
    Filter search results
  */
  const filteredResults = searchItems.filter((item) => {
    const value = search.toLowerCase().trim();

    if (!value) return false;

    return (
      item.name.toLowerCase().includes(value) ||
      item.keywords.some((keyword) => keyword.includes(value))
    );
  });

  /*
    Navigate from search
  */
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

  /*
    Close dropdowns when clicking outside
  */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /*
    Help
  */
  const handleHelp = () => {
    alert(
      "DevOpsHub Help Center\n\n" +
        "• Use the sidebar to navigate between modules.\n" +
        "• Use the search bar to quickly open a page.\n" +
        "• Use the notification icon to view recent activities.\n" +
        "• Use the sun/moon button to change the theme."
    );
  };

  /*
    LOGOUT
  */
  const handleLogout = async () => {
    try {
      await logout();

      setShowProfile(false);

      navigate("/login", {
        replace: true,
      });
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center border-b border-gray-200 bg-white px-5 dark:border-gray-800 dark:bg-[#11161b]">

      {/* MENU BUTTON */}
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
        title="Toggle sidebar"
      >
        <Menu size={20} />
      </button>

      {/* SEARCH */}
      <div className="relative mx-auto w-full max-w-xl">

        <Search
          size={17}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowSearchResults(true);
          }}
          onFocus={() => {
            if (search.trim()) {
              setShowSearchResults(true);
            }
          }}
          onKeyDown={handleSearch}
          placeholder="Search pipelines, builds, deployments..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-12 text-sm outline-none transition focus:border-orange-500 dark:border-gray-700 dark:bg-[#181d22]"
        />

        {/* Keyboard shortcut */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-gray-300 px-1.5 py-0.5 text-xs text-gray-400 dark:border-gray-600">
          /
        </span>

        {/* SEARCH RESULTS */}
        {showSearchResults && search.trim() && (
          <div className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-[#151a1f]">

            {filteredResults.length > 0 ? (
              <div className="max-h-80 overflow-y-auto py-2">

                <p className="px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Pages
                </p>

                {filteredResults.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => handleSearchClick(item.path)}
                    className="flex w-full items-center px-4 py-2.5 text-left text-sm transition hover:bg-orange-50 dark:hover:bg-orange-500/10"
                  >
                    <Search
                      size={15}
                      className="mr-3 text-gray-400"
                    />

                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 text-center">

                <Search
                  size={25}
                  className="mx-auto mb-2 text-gray-300"
                />

                <p className="text-sm text-gray-500">
                  No pages found
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Try searching for pipelines, builds or logs.
                </p>

              </div>
            )}

          </div>
        )}

      </div>

      {/* RIGHT SIDE */}
      <div className="ml-4 flex items-center gap-2">

        {/* NOTIFICATIONS */}
        <div
          ref={notificationRef}
          className="relative"
        >
          <button
            onClick={() => {
              setShowNotifications((prev) => !prev);
              setShowProfile(false);
            }}
            className="relative rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            title="Notifications"
          >
            <Bell size={19} />

            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">
              3
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-[#151a1f]">

              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 dark:border-gray-700">

                <h3 className="font-semibold">
                  Notifications
                </h3>

                <span className="rounded-full bg-orange-50 px-2 py-1 text-xs text-orange-500 dark:bg-orange-500/10">
                  3 new
                </span>

              </div>

              <div className="p-2">

                <Notification
                  text="Production deployment completed"
                  time="2 minutes ago"
                />

                <Notification
                  text="Build #1247 completed successfully"
                  time="5 minutes ago"
                />

                <Notification
                  text="Security scan completed"
                  time="8 minutes ago"
                />

              </div>

              <button
                onClick={() => navigate("/logs")}
                className="w-full border-t border-gray-100 px-4 py-3 text-center text-xs font-medium text-orange-500 hover:bg-orange-50 dark:border-gray-700 dark:hover:bg-orange-500/10"
              >
                View activity logs →
              </button>

            </div>
          )}
        </div>

        {/* HELP */}
        <button
          onClick={handleHelp}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          title="Help"
        >
          <CircleHelp size={19} />
        </button>

        {/* THEME */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
          title={
            darkMode
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {darkMode ? (
            <Sun size={19} />
          ) : (
            <Moon size={19} />
          )}
        </button>

        {/* PROFILE */}
        <div
          ref={profileRef}
          className="relative ml-2"
        >
          <button
            onClick={() => {
              setShowProfile((prev) => !prev);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 font-semibold text-white">
              A
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold">
                Ajita
              </p>

              <p className="text-[10px] text-gray-400">
                Admin
              </p>
            </div>

            <ChevronDown
              size={15}
              className={`transition ${
                showProfile
                  ? "rotate-180"
                  : ""
              }`}
            />

          </button>

          {showProfile && (
            <div className="absolute right-0 top-12 w-52 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-[#151a1f]">

              {/* User information */}
              <div className="border-b border-gray-100 px-4 py-3 dark:border-gray-700">

                <p className="text-sm font-semibold">
                  Ajita
                </p>

                <p className="text-xs text-gray-400">
                  Administrator
                </p>

              </div>

              <button
                onClick={() => {
                  navigate("/general-settings");
                  setShowProfile(false);
                }}
                className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Profile Settings
              </button>

              <button
                onClick={() => {
                  navigate("/settings");
                  setShowProfile(false);
                }}
                className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Settings
              </button>

              {/* REAL FIREBASE LOGOUT */}
              <button
                onClick={handleLogout}
                className="w-full border-t border-gray-100 px-4 py-3 text-left text-sm text-red-500 hover:bg-red-50 dark:border-gray-700 dark:hover:bg-red-900/20"
              >
                Logout
              </button>

            </div>
          )}
        </div>

      </div>
    </header>
  );
}

/*
  Notification component
*/
function Notification({ text, time }) {
  return (
    <div className="flex gap-3 rounded-lg p-3 transition hover:bg-gray-50 dark:hover:bg-gray-800">

      <div className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-500/10">
        <CheckCircle2 size={14} />
      </div>

      <div className="min-w-0">

        <p className="text-sm">
          {text}
        </p>

        <p className="mt-1 text-xs text-gray-400">
          {time}
        </p>

      </div>

    </div>
  );
}

export default Topbar;