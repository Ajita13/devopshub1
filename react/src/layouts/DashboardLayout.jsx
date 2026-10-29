import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/navigation/Sidebar";
import Topbar from "../components/navigation/Topbar";

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen w-full bg-[#f8f9fb] text-gray-900 dark:bg-[#0d1115] dark:text-white">

      {/* SIDEBAR */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN AREA */}
      <div
        className={`min-h-screen transition-all duration-300 ${
          sidebarOpen ? "ml-[236px]" : "ml-[72px]"
        }`}
      >

        {/* TOPBAR */}
        <Topbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* PAGE CONTENT */}
        <main className="min-h-[calc(100vh-64px)] w-full">
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default DashboardLayout;