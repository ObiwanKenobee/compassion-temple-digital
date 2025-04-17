
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Home,
  Calendar,
  Users,
  Book,
  Clock,
  Wallet,
  Settings
} from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Ritual Dashboard", path: "/rituals", icon: Calendar },
  { name: "Compassion Mentor", path: "/mentors", icon: Users },
  { name: "Philosopher's Forge", path: "/philosophy", icon: Book },
  { name: "History's Lantern", path: "/history", icon: Clock },
  { name: "Soul Wallet", path: "/wallet", icon: Wallet },
  { name: "Settings", path: "/settings", icon: Settings },
];

interface SidebarNavProps {
  className?: string;
}

export function SidebarNav({ className }: SidebarNavProps) {
  const location = useLocation();

  return (
    <nav className={cn("flex flex-col gap-2", className)}>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const Icon = item.icon;
        
        return (
          <Button
            key={item.path}
            variant={isActive ? "default" : "ghost"}
            asChild
            className={cn(
              "justify-start",
              isActive ? "bg-primary text-primary-foreground" : "hover:bg-accent"
            )}
          >
            <Link to={item.path}>
              <Icon className="mr-2 h-4 w-4" />
              {item.name}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
