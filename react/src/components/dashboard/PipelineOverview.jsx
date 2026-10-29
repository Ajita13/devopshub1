import {
  GitCommit,
  Hammer,
  FlaskConical,
  ShieldCheck,
  Rocket,
  Activity,
} from "lucide-react";

import Card from "../common/Card";
import { pipelineStages } from "../../data/dashboardData";

const icons = {
  commit: GitCommit,
  build: Hammer,
  test: FlaskConical,
  security: ShieldCheck,
  deploy: Rocket,
  monitor: Activity,
};

export default function PipelineOverview() {
  return (
    <Card className="pipeline-card">
      <div className="section-header">
        <h2>Pipeline Overview</h2>

        <div className="overview-controls">
          <span className="system-status">
            <span />
            All Systems Operational
          </span>

          <select defaultValue="week">
            <option value="week">
              This Week
            </option>

            <option value="month">
              This Month
            </option>

            <option value="year">
              This Year
            </option>
          </select>
        </div>
      </div>

      <div className="pipeline-flow">
        {pipelineStages.map(
          (stage, index) => {
            const Icon = icons[stage.icon];

            return (
              <div
                className="pipeline-stage-wrapper"
                key={stage.name}
              >
                <div className="pipeline-stage">
                  <div className="stage-icon">
                    <Icon size={25} />
                  </div>

                  <strong>
                    {stage.name}
                  </strong>

                  <span>
                    {stage.count}
                  </span>
                </div>

                {index <
                  pipelineStages.length - 1 && (
                  <div className="pipeline-connector">
                    <span />
                  </div>
                )}
              </div>
            );
          }
        )}
      </div>
    </Card>
  );
}