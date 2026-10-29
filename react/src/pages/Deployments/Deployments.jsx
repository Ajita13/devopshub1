import { useState } from "react";
import { Rocket, CheckCircle, XCircle, Plus } from "lucide-react";

function Deployments() {

  const [deployments, setDeployments] = useState([
    {
      name: "Production Deployment",
      environment: "Production",
      branch: "main",
      status: "Success",
      time: "2 min ago",
    },
    {
      name: "Staging Deployment",
      environment: "Staging",
      branch: "develop",
      status: "Success",
      time: "15 min ago",
    },
    {
      name: "Production Deployment",
      environment: "Production",
      branch: "release/v2.1",
      status: "Success",
      time: "1 hour ago",
    },
    {
      name: "QA Deployment",
      environment: "QA",
      branch: "feature/login",
      status: "Success",
      time: "2 hours ago",
    },
    {
      name: "Hotfix Deployment",
      environment: "Production",
      branch: "hotfix/critical",
      status: "Failed",
      time: "5 hours ago",
    },
  ]);

  const deploy = () => {

    const newDeployment = {
      name: "New Deployment",
      environment: "Staging",
      branch: "main",
      status: "Success",
      time: "Just now",
    };

    setDeployments([newDeployment, ...deployments]);
  };

  return (
    <div className="p-6">

      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-2xl font-bold">
            Deployments
          </h1>

          <p className="text-gray-500">
            Monitor application deployments.
          </p>
        </div>

        <button
          onClick={deploy}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg"
        >
          <Plus size={17} />
          New Deployment
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">

        <Stat
          title="Total Deployments"
          value={deployments.length}
        />

        <Stat
          title="Successful"
          value={
            deployments.filter(
              (d) => d.status === "Success"
            ).length
          }
        />

        <Stat
          title="Failed"
          value={
            deployments.filter(
              (d) => d.status === "Failed"
            ).length
          }
        />

      </div>

      <div className="bg-white dark:bg-[#15191e] rounded-xl border border-gray-200 dark:border-gray-800">

        {deployments.map((deployment, index) => (

          <div
            key={index}
            className="p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between"
          >

            <div className="flex items-center gap-4">

              <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">

                {deployment.status === "Success" ? (
                  <CheckCircle className="text-green-500" size={20} />
                ) : (
                  <XCircle className="text-red-500" size={20} />
                )}

              </div>

              <div>

                <h3 className="font-semibold">
                  {deployment.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {deployment.environment} • {deployment.branch}
                </p>

              </div>

            </div>

            <div className="text-right">

              <span
                className={`text-xs px-2.5 py-1 rounded-full ${
                  deployment.status === "Success"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {deployment.status}
              </span>

              <p className="text-xs text-gray-400 mt-2">
                {deployment.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-5">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>

    </div>
  );
}

export default Deployments;