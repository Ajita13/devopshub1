import { CheckCircle2 } from "lucide-react";
import Card from "../common/Card";

export default function SystemHealth({ services = [] }) {
  const displayServices =
    services.length > 0
      ? services
      : [
          { name: "CI/CD Service", uptime: "100%" },
          { name: "Build Agents", uptime: "100%" },
          { name: "Deployment Service", uptime: "100%" },
          { name: "Container Registry", uptime: "100%" },
          { name: "Monitoring Service", uptime: "100%" },
        ];

  return (
    <Card>
      <div className="section-header flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold">System Health</h2>
      </div>

      <div className="health-list space-y-2">
        {displayServices.map((service) => (
          <div className="health-item flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0" key={service.name}>
            <div className="health-service flex items-center gap-2 text-xs">
              <CheckCircle2 size={16} className="text-green-500" />
              <span>{service.name}</span>
            </div>

            <div className="health-value text-xs font-semibold text-green-500">
              {service.uptime}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
