import {
  CheckCircle2,
} from "lucide-react";

import Card from "../common/Card";

import { services } from "../../data/dashboardData";

export default function SystemHealth() {
  return (
    <Card>
      <div className="section-header">
        <h2>System Health</h2>

        <button className="view-button">
          View all
        </button>
      </div>

      <div className="health-list">
        {services.map(
          (service) => (
            <div
              className="health-item"
              key={service.name}
            >
              <div className="health-service">
                <CheckCircle2
                  size={18}
                  className="success-icon"
                />

                <span>
                  {service.name}
                </span>
              </div>

              <div className="health-value">
                <span>
                  Healthy
                </span>

                <strong>
                  {service.uptime}
                </strong>
              </div>
            </div>
          )
        )}
      </div>
    </Card>
  );
}