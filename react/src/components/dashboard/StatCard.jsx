import {
  GitBranch,
  CheckCircle2,
  XCircle,
  Rocket,
  Clock3,
  ShieldCheck,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

const icons = {
  pipeline: GitBranch,
  success: CheckCircle2,
  failed: XCircle,
  deployment: Rocket,
  time: Clock3,
  security: ShieldCheck,
};

export default function StatCard({
  title,
  value,
  change,
  direction,
  icon,
  color,
}) {
  const Icon = icons[icon];

  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className={`stat-icon ${color}`}>
          <Icon size={21} />
        </div>
      </div>

      <div className="stat-title">
        {title}
      </div>

      <div className="stat-value">
        {value}
      </div>

      <div
        className={`stat-change ${
          direction === "down" &&
          title !== "Failed Builds"
            ? "positive-down"
            : direction === "down"
            ? "negative-down"
            : ""
        }`}
      >
        {direction === "up" ? (
          <ArrowUp size={13} />
        ) : (
          <ArrowDown size={13} />
        )}

        <span>{change} from last week</span>
      </div>
    </div>
  );
}