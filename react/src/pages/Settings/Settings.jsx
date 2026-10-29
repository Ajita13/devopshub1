import { useState } from "react";
import { Save, User, Bell, Shield, Palette } from "lucide-react";

function Settings() {

  const [name, setName] = useState("Ajita");
  const [email, setEmail] = useState("ajita@example.com");
  const [notifications, setNotifications] = useState(true);

  const saveSettings = () => {
    localStorage.setItem(
      "devopshub-settings",
      JSON.stringify({
        name,
        email,
        notifications,
      })
    );

    alert("Settings saved successfully!");
  };

  return (
    <div className="p-6 max-w-5xl">

      <div className="mb-6">

        <h1 className="text-2xl font-bold">
          Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your DevOpsHub account and preferences.
        </p>

      </div>

      <div className="space-y-5">

        <section className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <User className="text-orange-500" />

            <h2 className="font-semibold">
              Profile
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <label className="text-sm text-gray-500">
                Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-[#101418] outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">
                Email
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border border-gray-200 dark:border-gray-700 rounded-lg p-3 bg-gray-50 dark:bg-[#101418] outline-none"
              />
            </div>

          </div>

        </section>

        <section className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-5">

            <Bell className="text-orange-500" />

            <h2 className="font-semibold">
              Notifications
            </h2>

          </div>

          <label className="flex items-center justify-between">

            <div>
              <p className="font-medium">
                Enable Notifications
              </p>

              <p className="text-sm text-gray-500">
                Receive build and deployment notifications.
              </p>
            </div>

            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) =>
                setNotifications(e.target.checked)
              }
              className="w-5 h-5 accent-orange-500"
            />

          </label>

        </section>

        <section className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-3">

            <Palette className="text-orange-500" />

            <div>
              <h2 className="font-semibold">
                Appearance
              </h2>

              <p className="text-sm text-gray-500">
                Use the theme button in the top navigation.
              </p>
            </div>

          </div>

        </section>

        <section className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-6">

          <div className="flex items-center gap-3 mb-4">

            <Shield className="text-orange-500" />

            <h2 className="font-semibold">
              Security
            </h2>

          </div>

          <button
            onClick={() => alert("Password change page will be connected later.")}
            className="border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Change Password
          </button>

        </section>

        <button
          onClick={saveSettings}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg"
        >
          <Save size={18} />
          Save Changes
        </button>

      </div>

    </div>
  );
}

export default Settings;