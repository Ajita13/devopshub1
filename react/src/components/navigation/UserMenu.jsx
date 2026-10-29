import { ChevronDown } from "lucide-react";
import { useAuth } from "../../auth/AuthContext";

export default function UserMenu() {
  const { user } = useAuth();
  const initial = user?.name ? user.name.charAt(0).toUpperCase() : "U";
  const name = user?.name || "User";
  const role = user?.role ? user.role.toUpperCase() : "MEMBER";

  return (
    <div className="top-user flex items-center gap-2">
      <div className="top-user-avatar flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
        {initial}
      </div>

      <div className="top-user-info text-left">
        <strong className="block text-xs font-semibold">{name}</strong>
        <span className="block text-[10px] text-gray-400">{role}</span>
      </div>

      <ChevronDown size={14} className="text-gray-400" />
    </div>
  );
}
