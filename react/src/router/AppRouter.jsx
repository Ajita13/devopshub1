import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Pipelines from "../pages/Pipelines/Pipelines";
import Builds from "../pages/Builds/Builds";
import Deployments from "../pages/Deployments/Deployments";
import Analytics from "../pages/Analytics/Analytics";
import Logs from "../pages/Logs/Logs";
import Settings from "../pages/Settings/Settings";
import GeneralSettings from "../pages/Settings/GeneralSettings";

import ModulePage from "../pages/ModulePage";

// Authentication pages
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

import { useAuth } from "../auth/AuthContext";


// ============================================================
// PROTECTED ROUTE
// ============================================================

function ProtectedRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait until Firebase checks current login
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07090c] text-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-red-500" />

          <p className="text-sm text-gray-400">
            Loading DevOpsHub...
          </p>
        </div>
      </div>
    );
  }

  // Not logged in
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location,
        }}
      />
    );
  }

  // Logged in
  return <Outlet />;
}


// ============================================================
// APP ROUTER
// ============================================================

function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================================================
            AUTHENTICATION
        ===================================================== */}

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />


        {/* =====================================================
            PROTECTED DASHBOARD
        ===================================================== */}

        <Route element={<ProtectedRoute />}>

          <Route element={<DashboardLayout />}>

            {/* Default */}

            <Route
              path="/"
              element={
                <Navigate
                  to="/dashboard"
                  replace
                />
              }
            />


            {/* =================================================
                MAIN DASHBOARD
            ================================================= */}

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />


            {/* =================================================
                PIPELINES
            ================================================= */}

            <Route
              path="/pipelines"
              element={<Pipelines />}
            />

            <Route
              path="/pipeline-templates"
              element={
                <ModulePage
                  title="Pipeline Templates"
                  description="Create and manage reusable CI/CD pipeline templates."
                  type="templates"
                />
              }
            />

            <Route
              path="/triggers"
              element={
                <ModulePage
                  title="Triggers"
                  description="Manage automated pipeline triggers."
                  type="triggers"
                />
              }
            />

            <Route
              path="/webhooks"
              element={
                <ModulePage
                  title="Webhooks"
                  description="Configure webhook integrations for your pipelines."
                  type="webhooks"
                />
              }
            />


            {/* =================================================
                BUILD & DEPLOY
            ================================================= */}

            <Route
              path="/builds"
              element={<Builds />}
            />

            <Route
              path="/deployments"
              element={<Deployments />}
            />

            <Route
              path="/environments"
              element={
                <ModulePage
                  title="Environments"
                  description="Manage development, staging and production environments."
                  type="environments"
                />
              }
            />

            <Route
              path="/releases"
              element={
                <ModulePage
                  title="Releases"
                  description="Track application releases and versions."
                  type="releases"
                />
              }
            />


            {/* =================================================
                MONITORING
            ================================================= */}

            <Route
              path="/insights"
              element={
                <ModulePage
                  title="Insights"
                  description="Monitor DevOps performance and engineering insights."
                  type="insights"
                />
              }
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/logs"
              element={<Logs />}
            />

            <Route
              path="/alerts"
              element={
                <ModulePage
                  title="Alerts"
                  description="View and manage system alerts."
                  type="alerts"
                />
              }
            />


            {/* =================================================
                MANAGEMENT
            ================================================= */}

            <Route
              path="/services"
              element={
                <ModulePage
                  title="Services"
                  description="Manage connected DevOps services."
                  type="services"
                />
              }
            />

            <Route
              path="/docker-registry"
              element={
                <ModulePage
                  title="Docker Registry"
                  description="Manage Docker images and container registries."
                  type="docker"
                />
              }
            />

            <Route
              path="/secrets"
              element={
                <ModulePage
                  title="Secrets"
                  description="Securely manage deployment and application secrets."
                  type="secrets"
                />
              }
            />

            <Route
              path="/permissions"
              element={
                <ModulePage
                  title="Permissions"
                  description="Manage roles and access permissions."
                  type="permissions"
                />
              }
            />

            <Route
              path="/audit-logs"
              element={
                <ModulePage
                  title="Audit Logs"
                  description="Track important user and system activities."
                  type="audit"
                />
              }
            />


            {/* =================================================
                SETTINGS
            ================================================= */}

            <Route
              path="/integrations"
              element={
                <ModulePage
                  title="Integrations"
                  description="Connect Git, cloud and DevOps services."
                  type="integrations"
                />
              }
            />

            <Route
              path="/team-settings"
              element={
                <ModulePage
                  title="Team Settings"
                  description="Manage team members and team configuration."
                  type="team"
                />
              }
            />

            <Route
              path="/general-settings" element={<GeneralSettings />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Route>

        </Route>


        {/* =====================================================
            UNKNOWN URL
        ===================================================== */}

        <Route
          path="*"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;