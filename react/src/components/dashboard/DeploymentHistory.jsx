import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

import Card from "../common/Card";
import Badge from "../common/Badge";

import { deployments } from "../../data/dashboardData";

export default function DeploymentHistory() {
  return (
    <Card>
      <div className="section-header">
        <h2>Deployment History</h2>

        <button className="view-button">
          View all
        </button>
      </div>

      <div className="deployment-list">
        {deployments.map(
          (deployment, index) => {
            const success =
              deployment.status ===
              "Success";

            return (
              <div
                className="deployment-item"
                key={index}
              >
                <div className="deployment-left">
                  {success ? (
                    <CheckCircle2
                      size={19}
                      className="success-icon"
                    />
                  ) : (
                    <XCircle
                      size={19}
                      className="failed-icon"
                    />
                  )}

                  <div>
                    <strong>
                      {deployment.name}
                    </strong>

                    <span className="branch">
                      {deployment.branch}
                    </span>
                  </div>
                </div>

                <div className="deployment-right">
                  <span>
                    {deployment.time}
                  </span>

                  <Badge
                    type={
                      success
                        ? "success"
                        : "failed"
                    }
                  >
                    {deployment.status}
                  </Badge>
                </div>
              </div>
            );
          }
        )}
      </div>

      <button className="bottom-view-button">
        View all deployments →
      </button>
    </Card>
  );
}