import { CheckCircle2, XCircle, Hammer } from "lucide-react";
import Card from "../common/Card";
import Badge from "../common/Badge";

export default function BuildActivity({ builds = [] }) {
  return (
    <Card>
      <div className="section-header flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold">Build Activity</h2>
      </div>

      {builds.length === 0 ? (
        <div className="py-8 text-center text-xs text-gray-400">
          <Hammer size={24} className="mx-auto mb-2 opacity-30" />
          <p>No recent builds</p>
        </div>
      ) : (
        <div className="build-list divide-y divide-gray-100 dark:divide-gray-800">
          {builds.map((build) => {
            const success = build.status === "SUCCESS";

            return (
              <div className="build-item flex items-center justify-between py-2.5" key={build.id}>
                <div className="build-left flex items-center gap-2.5">
                  {success ? (
                    <CheckCircle2 size={16} className="text-green-500" />
                  ) : (
                    <XCircle size={16} className="text-red-500" />
                  )}

                  <div>
                    <strong className="block text-xs font-semibold">Build #{build.buildNumber}</strong>
                    <span className="branch text-[10px] text-gray-400">{build.branch}</span>
                  </div>
                </div>

                <div className="build-right flex items-center gap-2 text-xs">
                  <span className="text-[10px] text-gray-400">{build.duration}</span>
                  <Badge type={success ? "success" : "failed"}>{build.status}</Badge>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
