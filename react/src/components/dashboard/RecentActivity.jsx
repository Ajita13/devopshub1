import {
  GitCommit,
  Hammer,
  Rocket,
  ShieldCheck,
  FlaskConical,
} from "lucide-react";

import Card from "../common/Card";

import { activities } from "../../data/dashboardData";

const icons = {
  code: GitCommit,
  build: Hammer,
  deploy: Rocket,
  security: ShieldCheck,
  test: FlaskConical,
};

export default function RecentActivity() {
  return (
    <Card className="recent-card">
      <div className="section-header">
        <h2>Recent Activity</h2>

        <button className="view-button">
          View all activity
        </button>
      </div>

      <div className="activity-grid">
        {activities.map(
          (activity, index) => {
            const Icon =
              icons[activity.type];

            return (
              <div
                className="activity-item"
                key={index}
              >
                <div
                  className={`activity-icon activity-${activity.type}`}
                >
                  <Icon size={17} />
                </div>

                <strong>
                  {activity.title}
                </strong>

                <span>
                  {activity.user}
                </span>

                <small>
                  {activity.time}
                </small>
              </div>
            );
          }
        )}
      </div>
    </Card>
  );
}