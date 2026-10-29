import { useState, useEffect } from "react";
import { Save, User, Lock, Bell, Shield, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useAuth } from "../../auth/AuthContext";
import { updateUserProfile, updatePassword } from "../../services/api";

function Settings() {
  const { user, updateCurrentUser } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileMessage, setProfileMessage] = useState("");
  const [profileError, setProfileError] = useState("");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordSaving, setPasswordSaving] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setProfileMessage("");
    setProfileError("");

    if (!name.trim()) {
      setProfileError("Name cannot be empty.");
      return;
    }

    try {
      setProfileSaving(true);
      const res = await updateUserProfile({ name: name.trim() });
      if (res && res.user) {
        updateCurrentUser(res.user);
        setProfileMessage("Profile successfully updated!");
      }
    } catch (err) {
      setProfileError(err.message || "Failed to update profile.");
    } finally {
      setProfileSaving(false);
    }
  };

  const handleSavePassword = async (e) => {
    e.preventDefault();
    setPasswordMessage("");
    setPasswordError("");

    if (!currentPassword || !newPassword) {
      setPasswordError("Please enter current and new password.");
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError("New password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("New passwords do not match.");
      return;
    }

    try {
      setPasswordSaving(true);
      await updatePassword({ currentPassword, newPassword });
      setPasswordMessage("Password changed successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setPasswordError(err.message || "Failed to update password.");
    } finally {
      setPasswordSaving(false);
    }
  };

  return (
    <div className="max-w-4xl p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold tracking-tight">Account & Security Settings</h1>
        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
          Manage your personal profile, credentials, and access keys.
        </p>
      </div>

      <div className="space-y-6">
        {/* Profile Card */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center gap-2.5">
            <User className="text-orange-500" size={18} />
            <h2 className="text-sm font-bold">Profile Details</h2>
          </div>

          {profileMessage && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-xs text-green-500 border border-green-500/20">
              <CheckCircle2 size={15} />
              <span>{profileMessage}</span>
            </div>
          )}

          {profileError && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-xs text-red-500 border border-red-500/20">
              <AlertCircle size={15} />
              <span>{profileError}</span>
            </div>
          )}

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email Address (Verified)
                </label>
                <input
                  type="email"
                  disabled
                  value={email}
                  className="w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-xs text-slate-500 cursor-not-allowed dark:border-slate-800 dark:bg-[#101316] dark:text-slate-500"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={profileSaving}
                className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-orange-600 disabled:opacity-50"
              >
                {profileSaving ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />}
                <span>{profileSaving ? "Saving..." : "Save Profile"}</span>
              </button>
            </div>
          </form>
        </section>

        {/* Change Password Card */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center gap-2.5">
            <Lock className="text-orange-500" size={18} />
            <h2 className="text-sm font-bold">Change Password</h2>
          </div>

          {passwordMessage && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-green-500/10 p-3 text-xs text-green-500 border border-green-500/20">
              <CheckCircle2 size={15} />
              <span>{passwordMessage}</span>
            </div>
          )}

          {passwordError && (
            <div className="mb-4 flex items-center gap-2 rounded-lg bg-red-500/10 p-3 text-xs text-red-500 border border-red-500/20">
              <AlertCircle size={15} />
              <span>{passwordError}</span>
            </div>
          )}

          <form onSubmit={handleSavePassword} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-orange-500 dark:border-slate-700 dark:bg-[#101316] dark:text-white"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={passwordSaving}
                className="flex items-center gap-1.5 rounded-lg bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-orange-600 disabled:opacity-50"
              >
                {passwordSaving ? <Loader2 size={13} className="animate-spin" /> : <Save size={13} />}
                <span>{passwordSaving ? "Updating..." : "Update Password"}</span>
              </button>
            </div>
          </form>
        </section>

        {/* Security & Access Overview */}
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15191d]">
          <div className="mb-4 flex items-center gap-2.5">
            <Shield className="text-orange-500" size={18} />
            <h2 className="text-sm font-bold">Role & Permissions</h2>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-slate-100 p-4 dark:border-slate-800">
            <div>
              <p className="text-xs font-semibold">Account Role: {user?.role?.toUpperCase()}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">
                {user?.role === "admin"
                  ? "Full administrative access to manage teams, projects, pipelines, and global configurations."
                  : "Standard developer access to create, trigger, and view isolated workspace pipelines."}
              </p>
            </div>
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-500">
              Active
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;
