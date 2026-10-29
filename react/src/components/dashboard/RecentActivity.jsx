import {
  GitCommit,
  Hammer,
  Rocket,
  ShieldCheck,
  FlaskConical,
  Activity,
} from "lucide-react";
import Card from "../common/Card";

const icons = {
  code: GitCommit,
  build: Hammer,
  deploy: Rocket,
  security: ShieldCheck,
  test: FlaskConical,
};

export default function RecentActivity({ activities = [] }) {
  return (
    <Card className="recent-card">
      <div className="section-header flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold">Recent Activity</h2>
      </div>

      {activities.length === 0 ? (
        <div className="py-8 text-center text-xs text-gray-400">
          <Activity size={24} className="mx-auto mb-2 opacity-30" />
          <p>No recent activity</p>
        </div>
      ) : (
        <div className="activity-grid divide-y divide-gray-100 dark:divide-gray-800">
          {activities.map((act, index) => {
            const Icon = icons[act.type] || Activity;

            return (
              <div className="activity-item flex items-center gap-3 py-2.5" key={act.id || index}>
                <div className="activity-icon flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <Icon size={16} />
                </div>

                <div className="min-w-0 flex-1">
                  <strong className="block text-xs font-semibold truncate">{act.title}</strong>
                  <span className="block text-[10px] text-gray-400">
                    by {act.userName} • {new Date(act.createdAt).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
