import {
  TrendingUp,
  TrendingDown,
  Activity,
} from "lucide-react";

function Analytics() {

  return (
    <div className="p-6">

      <div className="mb-6">

        <h1 className="text-2xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-500 mt-1">
          Analyze your DevOps performance.
        </p>

      </div>

      <div className="grid md:grid-cols-4 gap-4">

        <Card
          title="Success Rate"
          value="75.0%"
          change="+12%"
          positive
        />

        <Card
          title="Avg Build Time"
          value="2m 34s"
          change="-8%"
          positive
        />

        <Card
          title="Total Deployments"
          value="16"
          change="+33%"
          positive
        />

        <Card
          title="Failed Builds"
          value="3"
          change="-12%"
          positive
        />

      </div>

      <div className="mt-6 grid lg:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-6">

          <h2 className="font-semibold mb-5">
            Pipeline Performance
          </h2>

          <div className="h-64 flex items-end gap-4">

            {[40, 60, 45, 75, 65, 85, 95].map(
              (height, index) => (

                <div
                  key={index}
                  className="flex-1 bg-orange-500 rounded-t-lg"
                  style={{ height: `${height}%` }}
                />

              )
            )}

          </div>

          <div className="flex justify-between text-xs text-gray-400 mt-3">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>

        </div>

        <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-6">

          <h2 className="font-semibold mb-5">
            System Health
          </h2>

          <Health name="CI/CD Service" value="99.8%" />
          <Health name="Build Agents" value="98.7%" />
          <Health name="Deployment Service" value="100%" />
          <Health name="Monitoring Service" value="99.9%" />

        </div>

      </div>

    </div>
  );
}

function Card({ title, value, change, positive }) {
  return (
    <div className="bg-white dark:bg-[#15191e] border border-gray-200 dark:border-gray-800 rounded-xl p-5">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>

      <div className="flex items-center gap-1 mt-2 text-green-500 text-sm">

        {positive ? (
          <TrendingUp size={15} />
        ) : (
          <TrendingDown size={15} />
        )}

        {change}

      </div>

    </div>
  );
}

function Health({ name, value }) {
  return (
    <div className="mb-5">

      <div className="flex justify-between mb-2">

        <span className="text-sm">
          {name}
        </span>

        <span className="text-sm text-green-500">
          {value}
        </span>

      </div>

      <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full">

        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: value }}
        />

      </div>

    </div>
  );
}

export default Analytics;