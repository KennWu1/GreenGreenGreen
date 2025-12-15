import { BarChart3, MessageCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = "technical" | "sentiment";

interface CategoryInfoProps {
  activeTab: Tab;
}

export function CategoryInfo({ activeTab }: CategoryInfoProps) {
  const info = {
    technical: {
      icon: BarChart3,
      title: "Technical & Fundamental Analysis",
      description:
        "Rankings based on chart patterns, RSI, moving averages, P/E ratios, earnings reports, and institutional sentiment from major investment firms.",
    },
    sentiment: {
      icon: MessageCircle,
      title: "AI Sentiment Analysis",
      description:
        "AI-powered analysis of political landscape, social media buzz, retail investor sentiment, and market narrative momentum.",
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
            activeTab === "technical"
              ? "bg-primary/10 text-primary"
              : "bg-accent/10 text-accent"
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
