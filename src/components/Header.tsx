import { Activity, TrendingUp, BarChart3, MessageCircle, Landmark, History, Layers, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

export type Tab = "overall" | "technical" | "sentiment" | "politics" | "backtesting";

interface HeaderProps {
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

const categoryInfo: Record<Exclude<Tab, "backtesting">, { title: string; description: string }> = {
  overall: {
    title: "Overall Best Picks",
    description: "Combined analysis across all categories—technical, sentiment, and political factors—to identify the absolute best stock opportunities right now.",
  },
  technical: {
    title: "Technical & Fundamental Analysis",
    description: "Rankings based on chart patterns, RSI, moving averages, P/E ratios, earnings reports, and institutional sentiment from major investment firms.",
  },
  sentiment: {
    title: "AI Sentiment Analysis",
    description: "AI-powered analysis of social media buzz, retail investor sentiment, market narrative momentum, and trending investment themes.",
  },
  politics: {
    title: "Political & Geopolitical Analysis",
    description: "AI complex analysis of current politics, live news, policy changes, defense spending, regulatory shifts, and short-term panic opportunities where AI predicts recovery.",
  },
};

export function Header({ activeTab, onTabChange }: HeaderProps) {
  const [helpDialog, setHelpDialog] = useState<Exclude<Tab, "backtesting"> | null>(null);

  const handleHelpClick = (e: React.MouseEvent, tabId: Tab) => {
    e.stopPropagation();
    if (tabId !== "backtesting") {
      setHelpDialog(tabId as Exclude<Tab, "backtesting">);
    }
  };

  return (
    <>
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          {/* Top row: Logo and Live indicator */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">GreenGreenGreen</h1>
                <p className="text-xs text-muted-foreground">Stocks Made Easy</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Activity className="w-4 h-4 text-positive animate-pulse-subtle" />
              <span className="hidden sm:inline">Live Analysis</span>
            </div>
          </div>

          {/* Tab navigation row */}
          <div className="flex justify-center">
            <div className="inline-flex bg-secondary/50 rounded-xl p-1 border border-border/50 flex-wrap justify-center gap-0.5">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const showHelp = tab.id !== "backtesting";
                
                return (
                  <div key={tab.id} className="relative">
                    <button
                      onClick={() => onTabChange(tab.id)}
                      className={cn(
                        "relative flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300",
                        showHelp && "pr-7 sm:pr-8",
                        activeTab === tab.id
                          ? "text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {activeTab === tab.id && (
                        <div className="absolute inset-0 tab-indicator rounded-lg" />
                      )}
                      <Icon className="w-3.5 h-3.5 relative z-10" />
                      <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                    </button>
                    
                    {showHelp && (
                      <button
                        onClick={(e) => handleHelpClick(e, tab.id)}
                        className={cn(
                          "absolute right-0.5 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full transition-colors",
                          activeTab === tab.id
                            ? "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                            : "text-muted-foreground/50 hover:text-muted-foreground hover:bg-muted/50"
                        )}
                        aria-label={`Info about ${tab.label}`}
                      >
                        <HelpCircle className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      <Dialog open={helpDialog !== null} onOpenChange={(open) => !open && setHelpDialog(null)}>
        <DialogContent className="sm:max-w-md bg-card border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-foreground">
              {helpDialog && (
                <>
                  {helpDialog === "overall" && <Layers className="w-5 h-5 text-primary" />}
                  {helpDialog === "technical" && <BarChart3 className="w-5 h-5 text-primary" />}
                  {helpDialog === "sentiment" && <MessageCircle className="w-5 h-5 text-accent" />}
                  {helpDialog === "politics" && <Landmark className="w-5 h-5 text-warning" />}
                  {categoryInfo[helpDialog].title}
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {helpDialog && categoryInfo[helpDialog].description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
