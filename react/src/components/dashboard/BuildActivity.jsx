import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

import Card from "../common/Card";
import Badge from "../common/Badge";

import { builds } from "../../data/dashboardData";

export default function BuildActivity() {
  return (
    <Card>
      <div className="section-header">
        <h2>Build Activity</h2>

        <button className="view-button">
          View all
        </button>
      </div>

      <div className="build-list">
        {builds.map((build) => {
          const success =
            build.status === "Success";

          return (
            <div
              className="build-item"
              key={build.id}
            >
              <div className="build-left">
                {success ? (
                  <CheckCircle2
                    size={17}
                    className="success-icon"
                  />
                ) : (
                  <XCircle
                    size={17}
                    className="failed-icon"
                  />
                )}

                <strong>
                  Build {build.id}
                </strong>

                <span className="branch">
                  {build.branch}
                </span>
              </div>

              <div className="build-right">
                <span>{build.time}</span>

                <Badge
                  type={
                    success
                      ? "success"
                      : "failed"
                  }
                >
                  {build.status}
                </Badge>
              </div>
            </div>
          );
        })}
      </div>

      <button className="bottom-view-button">
        View all builds →
      </button>
    </Card>
  );
}