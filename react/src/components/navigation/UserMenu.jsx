import { ChevronDown } from "lucide-react";

export default function UserMenu() {
  return (
    <div className="top-user">
      <div className="top-user-avatar">
        A
      </div>

      <div className="top-user-info">
        <strong>Ajita</strong>
        <span>Admin</span>
      </div>

      <ChevronDown size={16} />
    </div>
  );
}