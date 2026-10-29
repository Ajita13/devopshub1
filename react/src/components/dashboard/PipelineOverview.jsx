import {
  GitCommit,
  Hammer,
  FlaskConical,
  ShieldCheck,
  Rocket,
  Activity,
} from "lucide-react";
import Card from "../common/Card";

const icons = {
  commit: GitCommit,
  build: Hammer,
  test: FlaskConical,
  security: ShieldCheck,
  deploy: Rocket,
  monitor: Activity,
};

export default function PipelineOverview({ stages = [] }) {
  return (
    <Card className="pipeline-card">
      <div className="section-header flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold">Pipeline Overview</h2>
        <span className="flex items-center gap-1.5 text-xs text-green-500">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Systems Operational
        </span>
      </div>

      <div className="pipeline-flow flex items-center overflow-x-auto py-2">
        {stages.map((stage, index) => {
          const Icon = icons[stage.icon] || GitCommit;

          return (
            <div className="pipeline-stage-wrapper flex items-center min-w-[110px]" key={stage.name}>
              <div className="pipeline-stage flex flex-col items-center">
                <div className="stage-icon flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500 mb-2">
                  <Icon size={20} />
                </div>
                <strong className="text-xs font-semibold">{stage.name}</strong>
                <span className="text-[10px] text-gray-400">{stage.value || stage.count}</span>
              </div>

              {index < stages.length - 1 && (
                <div className="pipeline-connector flex-1 h-[2px] bg-gray-200 dark:bg-gray-800 mx-2" />
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
