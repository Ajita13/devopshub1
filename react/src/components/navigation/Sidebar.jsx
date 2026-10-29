import {
  LayoutDashboard,
  GitBranch,
  Layers3,
  Zap,
  Webhook,
  Hammer,
  Rocket,
  Server,
  PackageCheck,
  Lightbulb,
  BarChart3,
  FileText,
  Bell,
  BriefcaseBusiness,
  Container,
  KeyRound,
  ShieldCheck,
  ClipboardList,
  Plug,
  Users,
  Settings,
  ChevronLeft,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menuSections = [
  {
    title: "",
    items: [
      {
        name: "Overview",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "PIPELINES",
    items: [
      {
        name: "Pipelines",
        path: "/pipelines",
        icon: GitBranch,
      },
      {
        name: "Pipeline Templates",
        path: "/pipeline-templates",
        icon: Layers3,
      },
      {
        name: "Triggers",
        path: "/triggers",
        icon: Zap,
      },
      {
        name: "Webhooks",
        path: "/webhooks",
        icon: Webhook,
      },
    ],
  },

  {
    title: "BUILD & DEPLOY",
    items: [
      {
        name: "Builds",
        path: "/builds",
        icon: Hammer,
      },
      {
        name: "Deployments",
        path: "/deployments",
        icon: Rocket,
      },
      {
        name: "Environments",
        path: "/environments",
        icon: Server,
      },
      {
        name: "Releases",
        path: "/releases",
        icon: PackageCheck,
      },
    ],
  },

  {
    title: "MONITORING",
    items: [
      {
        name: "Insights",
        path: "/insights",
        icon: Lightbulb,
      },
      {
        name: "Analytics",
        path: "/analytics",
        icon: BarChart3,
      },
      {
        name: "Logs",
        path: "/logs",
        icon: FileText,
      },
      {
        name: "Alerts",
        path: "/alerts",
        icon: Bell,
      },
    ],
  },

  {
    title: "MANAGEMENT",
    items: [
      {
        name: "Services",
        path: "/services",
        icon: BriefcaseBusiness,
      },
      {
        name: "Docker Registry",
        path: "/docker-registry",
        icon: Container,
      },
      {
        name: "Secrets",
        path: "/secrets",
        icon: KeyRound,
      },
      {
        name: "Permissions",
        path: "/permissions",
        icon: ShieldCheck,
      },
      {
        name: "Audit Logs",
        path: "/audit-logs",
        icon: ClipboardList,
      },
    ],
  },

  {
    title: "SETTINGS",
    items: [
      {
        name: "Integrations",
        path: "/integrations",
        icon: Plug,
      },
      {
        name: "Team Settings",
        path: "/team-settings",
        icon: Users,
      },
      {
        name: "General Settings",
        path: "/general-settings",
        icon: Settings,
      },
    ],
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen
      bg-[#0d1114] text-white
      border-r border-white/10
      transition-all duration-300
      ${
        sidebarOpen
          ? "w-[236px]"
          : "w-[72px]"
      }`}
    >
      {/* ================= LOGO ================= */}
      <div
        className={`h-[68px] flex items-center
        border-b border-white/10
        ${
          sidebarOpen
            ? "px-5"
            : "justify-center px-2"
        }`}
      >
        {/* Logo icon */}
        <div
          className="w-9 h-9 flex-shrink-0
          rounded-lg bg-orange-500
          flex items-center justify-center
          font-bold text-lg shadow-md"
        >
          D
        </div>

        {sidebarOpen && (
          <div className="ml-3">
            <h1 className="font-bold text-[19px] leading-none">
              DevOps
              <span className="text-orange-500">
                Hub
              </span>
            </h1>

            <p className="text-[9px] text-gray-400 mt-1">
              CI/CD Pipeline Platform
            </p>
          </div>
        )}
      </div>

      {/* ================= MENU ================= */}
      <div
        className="h-[calc(100vh-135px)]
        overflow-y-auto
        overflow-x-hidden
        py-4 px-2
        scrollbar-thin"
      >
        {menuSections.map(
          (section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="mb-5"
            >
              {/* Section heading */}
              {section.title &&
                sidebarOpen && (
                  <p
                    className="px-3 mb-2
                    text-[10px]
                    font-bold
                    tracking-wide
                    text-orange-500"
                  >
                    {section.title}
                  </p>
                )}

              {/* Menu items */}
              {section.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      group
                      flex items-center
                      gap-3
                      ${
                        sidebarOpen
                          ? "px-3"
                          : "justify-center px-2"
                      }
                      py-2.5
                      mb-1
                      rounded-lg
                      text-sm
                      transition-all
                      duration-200

                      ${
                        isActive
                          ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                          : "text-gray-300 hover:bg-white/[0.08] hover:text-white"
                      }
                      `
                    }
                  >
                    <Icon
                      size={18}
                      strokeWidth={2}
                      className="flex-shrink-0"
                    />

                    {sidebarOpen && (
                      <span className="whitespace-nowrap">
                        {item.name}
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </div>
          )
        )}
      </div>

      {/* ================= USER ================= */}
      <div
        className="absolute
        bottom-0
        left-0
        right-0
        border-t
        border-white/10
        bg-[#0d1114]
        p-3"
      >
        <div
          className={`flex items-center ${
            sidebarOpen
              ? "gap-3"
              : "justify-center"
          }`}
        >
          {/* Avatar */}
          <div
            className="w-9 h-9
            flex-shrink-0
            rounded-full
            bg-orange-500
            flex items-center
            justify-center
            font-semibold
            text-white"
          >
            A
          </div>

          {sidebarOpen && (
            <div className="min-w-0">
              <p className="text-sm font-semibold">
                Ajita
              </p>

              <p className="text-[11px] text-gray-400">
                Admin
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ================= COLLAPSE BUTTON ================= */}
      <button
        type="button"
        onClick={() =>
          setSidebarOpen(!sidebarOpen)
        }
        aria-label={
          sidebarOpen
            ? "Collapse sidebar"
            : "Expand sidebar"
        }
        className="absolute
        -right-3
        top-[90px]
        w-7 h-7
        rounded-full
        bg-orange-500
        text-white
        flex items-center
        justify-center
        shadow-lg
        hover:bg-orange-600
        transition-colors
        z-[60]"
      >
        <ChevronLeft
          size={16}
          className={`transition-transform duration-300 ${
            !sidebarOpen
              ? "rotate-180"
              : ""
          }`}
        />
      </button>
    </aside>
  );
}

export default Sidebar;