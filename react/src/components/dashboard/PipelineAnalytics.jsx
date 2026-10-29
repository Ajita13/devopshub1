import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import Card from "../common/Card";

const data = [
  {
    name: "Successful",
    value: 18,
  },
  {
    name: "Failed",
    value: 3,
  },
  {
    name: "In Progress",
    value: 3,
  },
];

const colors = [
  "#16a34a",
  "#ef4444",
  "#3b82f6",
];

export default function PipelineAnalytics() {
  return (
    <Card className="analytics-card">
      <div className="section-header">
        <h2>Pipeline Analytics</h2>

        <select
          className="period-select"
          defaultValue="7"
        >
          <option value="7">
            Last 7 days
          </option>

          <option value="30">
            Last 30 days
          </option>

          <option value="90">
            Last 90 days
          </option>
        </select>
      </div>

      <div className="analytics-content">
        <div className="donut-container">
          <ResponsiveContainer
            width="100%"
            height={175}
          >
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={52}
                outerRadius={78}
                paddingAngle={3}
                strokeWidth={0}
              >
                {data.map(
                  (entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={
                        colors[index]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>

          <div className="donut-center">
            <strong>24</strong>
            <span>Total</span>
          </div>
        </div>

        <div className="analytics-legend">
          {data.map(
            (item, index) => (
              <div
                className="legend-item"
                key={item.name}
              >
                <span
                  className="legend-dot"
                  style={{
                    background:
                      colors[index],
                  }}
                />

                <span>
                  {item.name}
                </span>

                <strong>
                  {item.value}
                </strong>

                <small>
                  (
                  {(
                    (item.value / 24) *
                    100
                  ).toFixed(1)}
                  %)
                </small>
              </div>
            )
          )}
        </div>
      </div>

      <div className="analytics-footer">
        <div>
          <span>Success Rate</span>
          <strong>75.0%</strong>
          <small>↑ 12%</small>
        </div>

        <div>
          <span>Avg. Build Time</span>
          <strong>2m 34s</strong>
          <small>↓ 8%</small>
        </div>

        <div>
          <span>Total Deploys</span>
          <strong>16</strong>
          <small>↑ 33%</small>
        </div>
      </div>
    </Card>
  );
}