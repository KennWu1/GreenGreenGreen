import { cn } from "@/lib/utils";
import { BarChart3, MessageCircle, Landmark, History, Layers } from "lucide-react";

export type Tab = "overall" | "technical" | "sentiment" | "politics" | "backtesting";

interface TabNavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: typeof BarChart3 }[] = [
  { id: "overall", label: "Overall", icon: Layers },
  { id: "technical", label: "Technical", icon: BarChart3 },
  { id: "sentiment", label: "Sentiment", icon: MessageCircle },
  { id: "politics", label: "Politics", icon: Landmark },
  { id: "backtesting", label: "Backtesting", icon: History },
];

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex justify-center py-6">
      <div className="inline-flex bg-secondary/50 rounded-xl p-1.5 border border-border/50 flex-wrap justify-center gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {activeTab === tab.id && (
                <div className="absolute inset-0 tab-indicator rounded-lg" />
              )}
              <Icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10 hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
