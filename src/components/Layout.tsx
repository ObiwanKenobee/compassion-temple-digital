
import { Outlet } from "react-router-dom";
import { SidebarNav } from "@/components/SidebarNav";
import { ModeToggle } from "@/components/ModeToggle";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Layout() {
  const isMobile = useIsMobile();
  const [showSidebar, setShowSidebar] = useState(!isMobile);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div 
        className={cn(
          "fixed top-0 left-0 z-40 h-screen bg-background border-r transition-all duration-300",
          showSidebar ? "w-64" : "w-0"
        )}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-playfair">
              Cathedral of <span className="text-sacred-gold">Compassion</span>
            </h1>
            {isMobile && (
              <button onClick={() => setShowSidebar(false)}>
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          <SidebarNav className="flex-1" />
          <Separator className="my-4" />
          <div className="flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2025 Cathedral of Compassion
            </p>
            <ModeToggle />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div 
        className={cn(
          "flex-1 transition-all duration-300",
          showSidebar ? (isMobile ? "ml-0" : "ml-64") : "ml-0"
        )}
      >
        {isMobile && !showSidebar && (
          <button 
            onClick={() => setShowSidebar(true)}
            className="fixed top-4 left-4 z-40 p-2 rounded-md bg-background border"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
        <main className="py-8 px-6 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
