import { CheckCircle2, XCircle, Rocket } from "lucide-react";
import Card from "../common/Card";
import Badge from "../common/Badge";

export default function DeploymentHistory({ deployments = [] }) {
  return (
    <Card>
      <div className="section-header flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold">Deployment History</h2>
      </div>

      {deployments.length === 0 ? (
        <div className="py-8 text-center text-xs text-gray-400">
          <Rocket size={24} className="mx-auto mb-2 opacity-30" />
          <p>No recent deployments</p>
        </div>
      ) : (
        <div className="deployment-list divide-y divide-gray-100 dark:divide-gray-800">
          {deployments.map((deployment, index) => {
            const success = deployment.status === "SUCCESS";

            return (
              <div className="deployment-item flex items-center justify-between py-2.5" key={deployment.id || index}>
                <div className="deployment-left flex items-center gap-2.5">
                  {success ? (
                    <CheckCircle2 size={16} className="text-green-500" />
                  ) : (
                    <XCircle size={16} className="text-red-500" />
                  )}

                  <div>
                    <strong className="block text-xs font-semibold">{deployment.name}</strong>
                    <span className="branch text-[10px] text-gray-400">{deployment.branch}</span>
                  </div>
                </div>

                <div className="deployment-right flex items-center gap-2 text-xs">
                  <span className="text-[10px] text-gray-400">{deployment.duration}</span>
                  <Badge type={success ? "success" : "failed"}>{deployment.status}</Badge>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}
