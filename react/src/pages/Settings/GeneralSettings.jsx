import { useState, useEffect } from "react";
import {
  Settings,
  Server,
  Shield,
  Bell,
  Cpu,
  Database,
  Save,
  RotateCcw,
  CheckCircle2,
  Lock,
  GitBranch,
  Radio,
  Sliders,
  HardDrive,
  Terminal,
} from "lucide-react";
import { useAuth } from "../../auth/AuthContext";

function GeneralSettings() {
  const { user } = useAuth();

  const defaultSettings = {
    // Organization
    orgName: "DevOpsHub Enterprise Workspace",
    orgDomain: "devopshub.io/org/enterprise",
    cloudRegion: "us-east-1",
    defaultEnv: "Production",

    // CI/CD Engine
    defaultBranch: "main",
    concurrentRunners: 8,
    buildTimeoutMinutes: 60,
    autoCancelRedundant: true,
    autoRetryFailed: true,
    cleanWorkspaceBeforeBuild: true,

    // Storage & Artifacts
    artifactRetentionDays: "30",
    dockerCacheLimitGb: 50,
    autoPruneStaleImages: true,
    enableCompression: true,

    // Security & Compliance
    enforce2FA: true,
    maskSecretsInLogs: true,
    rejectUnsignedCommits: true,
    blockOnCriticalCVEs: true,
    sessionTimeoutMinutes: 30,

    // Notifications
    emailOnFailure: true,
    slackWebhook: "https://hooks.slack.com/services/T00/B00/devopshub-alerts",
    realtimeWebSocketSync: true,
    weeklyPerformanceDigest: false,
  };

  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem("devopshub_general_settings");
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });

  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (field, value) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaving(true);

    setTimeout(() => {
      localStorage.setItem("devopshub_general_settings", JSON.stringify(settings));
      setSaving(false);
      setSuccessMsg("DevOpsHub general configuration saved successfully!");
      setTimeout(() => setSuccessMsg(""), 3500);
    }, 400);
  };

  const handleReset = () => {
    if (window.confirm("Reset all settings to recommended DevOpsHub defaults?")) {
      setSettings(defaultSettings);
      localStorage.removeItem("devopshub_general_settings");
      setSuccessMsg("Settings restored to defaults.");
      setTimeout(() => setSuccessMsg(""), 3000);
    }
  };

  return (
    <div className="max-w-5xl p-6">
      {/* Toast Notification */}
      {successMsg && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-semibold text-emerald-400 shadow-2xl backdrop-blur-md animate-fade-in">
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <div className="flex items-center gap-2">
            <Settings className="text-orange-500" size={22} />
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              General System Settings
            </h1>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Configure global workspace parameters, CI/CD pipeline concurrency, storage retention, and compliance policies.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-800 dark:bg-[#15191d] dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <RotateCcw size={13} />
            <span>Reset Defaults</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:opacity-50"
          >
            <Save size={13} />
            <span>{saving ? "Saving Changes..." : "Save Settings"}</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: Organization & Cloud Region */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
            <Server className="text-orange-500" size={17} />
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Organization & Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Workspace / Organization Name
              </label>
              <input
                type="text"
                value={settings.orgName}
                onChange={(e) => handleChange("orgName", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Internal Organization Domain
              </label>
              <input
                type="text"
                value={settings.orgDomain}
                onChange={(e) => handleChange("orgDomain", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Primary Cloud Deployment Region
              </label>
              <select
                value={settings.cloudRegion}
                onChange={(e) => handleChange("cloudRegion", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              >
                <option value="us-east-1">US East (N. Virginia) - us-east-1</option>
                <option value="us-west-2">US West (Oregon) - us-west-2</option>
                <option value="eu-west-1">Europe (Ireland) - eu-west-1</option>
                <option value="ap-south-1">Asia Pacific (Mumbai) - ap-south-1</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Default Deployment Target
              </label>
              <select
                value={settings.defaultEnv}
                onChange={(e) => handleChange("defaultEnv", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              >
                <option value="Production">Production Cluster (k8s-prod)</option>
                <option value="Staging">Staging Cluster (k8s-stage)</option>
                <option value="Development">Development Sandbox</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: CI/CD Pipeline Execution */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
            <Cpu className="text-orange-500" size={17} />
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              CI/CD Pipeline Execution Engine
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Default Git Branch
              </label>
              <input
                type="text"
                value={settings.defaultBranch}
                onChange={(e) => handleChange("defaultBranch", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Concurrent Runner Limit
              </label>
              <input
                type="number"
                min="1"
                max="32"
                value={settings.concurrentRunners}
                onChange={(e) => handleChange("concurrentRunners", Number(e.target.value))}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Job Timeout (Minutes)
              </label>
              <input
                type="number"
                min="5"
                max="360"
                value={settings.buildTimeoutMinutes}
                onChange={(e) => handleChange("buildTimeoutMinutes", Number(e.target.value))}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              />
            </div>
          </div>

          {/* Execution Toggles */}
          <div className="mt-5 space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Auto-Cancel Redundant Builds
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Automatically cancel in-progress builds when a newer commit is pushed to the same branch.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.autoCancelRedundant}
                onChange={(e) => handleChange("autoCancelRedundant", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Auto-Retry Failed Network Steps
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Automatically retry transient network or package registry download failures up to 2 times.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.autoRetryFailed}
                onChange={(e) => handleChange("autoRetryFailed", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Clean Container Workspace Before Build
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Isolate each pipeline by creating an ephemeral container workspace with no artifact carry-over.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.cleanWorkspaceBeforeBuild}
                onChange={(e) => handleChange("cleanWorkspaceBeforeBuild", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>
          </div>
        </div>

        {/* Section 3: Storage, Artifacts & Docker Images */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
            <HardDrive className="text-orange-500" size={17} />
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Storage, Artifacts & Container Cache
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Artifact Retention Period
              </label>
              <select
                value={settings.artifactRetentionDays}
                onChange={(e) => handleChange("artifactRetentionDays", e.target.value)}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              >
                <option value="7">7 Days</option>
                <option value="14">14 Days</option>
                <option value="30">30 Days (Recommended)</option>
                <option value="90">90 Days</option>
                <option value="365">1 Year</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                Docker Cache Storage Limit (GB)
              </label>
              <input
                type="number"
                min="10"
                max="500"
                value={settings.dockerCacheLimitGb}
                onChange={(e) => handleChange("dockerCacheLimitGb", Number(e.target.value))}
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
              />
            </div>
          </div>

          <div className="mt-4 space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Auto-Prune Stale Container Images
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Automatically delete untagged and dangling Docker image layers when cache exceeds limit.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.autoPruneStaleImages}
                onChange={(e) => handleChange("autoPruneStaleImages", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Fast Gzip / Brotli Artifact Compression
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Compress build artifacts and test binaries before uploading to cloud storage.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.enableCompression}
                onChange={(e) => handleChange("enableCompression", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>
          </div>
        </div>

        {/* Section 4: Security, Compliance & Secret Masking */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
            <Shield className="text-orange-500" size={17} />
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Security & Compliance Policies
            </h2>
          </div>

          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Automatic Secret Masking in Live Logs
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Scan standard output for environment tokens and replace sensitive credentials with `***`.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.maskSecretsInLogs}
                onChange={(e) => handleChange("maskSecretsInLogs", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Block Deployments on Critical Vulnerabilities (CVE)
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Automatically halt production deployments if container vulnerability scanner detects critical CVEs.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.blockOnCriticalCVEs}
                onChange={(e) => handleChange("blockOnCriticalCVEs", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Reject Unsigned Git Commits
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Require verified GPG/SSH signatures on git tags before triggering production deployment.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.rejectUnsignedCommits}
                onChange={(e) => handleChange("rejectUnsignedCommits", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Enforce Two-Factor Authentication (2FA)
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Require 2FA verification for all developers with production deployment permissions.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.enforce2FA}
                onChange={(e) => handleChange("enforce2FA", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>
          </div>
        </div>

        {/* Section 5: Notifications & Webhook Alerts */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
            <Bell className="text-orange-500" size={17} />
            <h2 className="text-sm font-bold text-slate-900 dark:text-white">
              Notifications & Incident Dispatch
            </h2>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
              Slack / Discord Webhook URL for Build Alerts
            </label>
            <input
              type="url"
              value={settings.slackWebhook}
              onChange={(e) => handleChange("slackWebhook", e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
            />
          </div>

          <div className="space-y-3 pt-2">
            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Email Notifications on Pipeline Failure
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Send immediate diagnostic reports to the committer whenever a CI/CD build or deployment fails.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.emailOnFailure}
                onChange={(e) => handleChange("emailOnFailure", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>

            <label className="flex items-center justify-between cursor-pointer rounded-lg p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/50">
              <div>
                <p className="text-xs font-semibold text-slate-900 dark:text-white">
                  Real-Time WebSocket Sync
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  Push instant build metrics, log streams, and status badges directly to open dashboard tabs.
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.realtimeWebSocketSync}
                onChange={(e) => handleChange("realtimeWebSocketSync", e.target.checked)}
                className="h-4 w-4 accent-orange-500"
              />
            </label>
          </div>
        </div>

        {/* Bottom Save Bar */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 dark:border-slate-700 dark:bg-[#15191d] dark:text-slate-300 dark:hover:bg-slate-800"
          >
            Reset Defaults
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-6 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-orange-600 disabled:opacity-50"
          >
            <Save size={14} />
            <span>{saving ? "Saving Configuration..." : "Save General Settings"}</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default GeneralSettings;
