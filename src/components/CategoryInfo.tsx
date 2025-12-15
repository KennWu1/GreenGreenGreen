import { BarChart3, MessageCircle, Landmark, Info, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tab } from "@/components/TabNavigation";

interface CategoryInfoProps {
  activeTab: Exclude<Tab, "backtesting">;
}

export function CategoryInfo({ activeTab }: CategoryInfoProps) {
  const info = {
    overall: {
      icon: Layers,
      title: "Overall Best Picks",
      description:
        "Combined analysis across all categories—technical, sentiment, and political factors—to identify the absolute best stock opportunities right now.",
      color: "primary",
    },
    technical: {
      icon: BarChart3,
      title: "Technical & Fundamental Analysis",
      description:
        "Rankings based on chart patterns, RSI, moving averages, P/E ratios, earnings reports, and institutional sentiment from major investment firms.",
      color: "primary",
    },
    sentiment: {
      icon: MessageCircle,
      title: "AI Sentiment Analysis",
      description:
        "AI-powered analysis of social media buzz, retail investor sentiment, market narrative momentum, and trending investment themes.",
      color: "accent",
    },
    politics: {
      icon: Landmark,
      title: "Political & Geopolitical Analysis",
      description:
        "AI complex analysis of current politics, live news, policy changes, defense spending, regulatory shifts, and short-term panic opportunities where AI predicts recovery.",
      color: "warning",
    },
  };

  const current = info[activeTab];
  const Icon = current.icon;

  return (
    <div className="glass-card rounded-xl p-4 sm:p-5 mb-6 animate-fade-in">
      <div className="flex items-start gap-4">
        <div
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0",
            activeTab === "overall" && "bg-primary/10 text-primary",
            activeTab === "technical" && "bg-primary/10 text-primary",
            activeTab === "sentiment" && "bg-accent/10 text-accent",
            activeTab === "politics" && "bg-warning/10 text-warning"
          )}
        >
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-foreground mb-1">
            {current.title}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {current.description}
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground">
          <Info className="w-3.5 h-3.5" />
          <span>Updated hourly</span>
        </div>
      </div>
    </div>
  );
}
