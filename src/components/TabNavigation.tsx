import { cn } from "@/lib/utils";
import { BarChart3, MessageCircle } from "lucide-react";

type Tab = "technical" | "sentiment";

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex justify-center py-6">
      <div className="inline-flex bg-secondary/50 rounded-xl p-1.5 border border-border/50">
        <button
          onClick={() => onTabChange("technical")}
          className={cn(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
            activeTab === "technical"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeTab === "technical" && (
            <div className="absolute inset-0 tab-indicator rounded-lg" />
          )}
          <BarChart3 className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Technical</span>
        </button>
        <button
          onClick={() => onTabChange("sentiment")}
          className={cn(
            "relative flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
            activeTab === "sentiment"
              ? "text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeTab === "sentiment" && (
            <div className="absolute inset-0 tab-indicator rounded-lg" />
          )}
          <MessageCircle className="w-4 h-4 relative z-10" />
          <span className="relative z-10">Sentiment</span>
        </button>
      </div>
    </div>
  );
}
