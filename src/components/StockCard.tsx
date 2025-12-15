import { useState } from "react";
import { ChevronDown, TrendingUp, TrendingDown, Zap, ExternalLink } from "lucide-react";
import { Stock } from "@/data/stocks";
import { cn } from "@/lib/utils";

interface StockCardProps {
  stock: Stock;
  rank: number;
  index: number;
}

export function StockCard({ stock, rank, index }: StockCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isPositive = stock.change >= 0;

  return (
    <div
      className="glass-card glow-effect rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/30"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 sm:p-5 flex items-center gap-4 text-left"
      >
        {/* Rank Badge */}
        <div className="stock-rank flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center">
          <span className="text-lg sm:text-xl font-bold text-primary font-mono">
            {rank}
          </span>
        </div>

        {/* Stock Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-lg sm:text-xl font-semibold text-foreground font-mono">
              {stock.symbol}
            </span>
            <div className="hidden sm:flex items-center gap-1.5">
              {stock.signals.slice(0, 2).map((signal) => (
                <span
                  key={signal}
                  className="px-2 py-0.5 text-xs font-medium bg-secondary rounded-full text-muted-foreground"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-muted-foreground truncate mt-0.5">
            {stock.name}
          </p>
        </div>

        {/* Price & Change */}
        <div className="flex-shrink-0 text-right">
          <p className="text-lg sm:text-xl font-semibold font-mono">
            ${stock.price.toFixed(2)}
          </p>
          <div
            className={cn(
              "flex items-center justify-end gap-1 text-sm font-medium",
              isPositive ? "text-positive" : "text-negative"
            )}
          >
            {isPositive ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5" />
            )}
            <span className="font-mono">
              {isPositive ? "+" : ""}
              {stock.changePercent.toFixed(2)}%
            </span>
          </div>
        </div>

        {/* Score */}
        <div className="hidden md:flex flex-shrink-0 items-center gap-2">
          <div className="relative w-14 h-14">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="4"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${(stock.score / 100) * 150.8} 150.8`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-primary font-mono">
                {stock.score}
              </span>
            </div>
          </div>
        </div>

        {/* Expand Arrow */}
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {/* Expanded Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-[600px]" : "max-h-0"
        )}
      >
        <div className="px-4 sm:px-5 pb-5 pt-2 border-t border-border/50">
          {/* Mobile Score */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Buy Score:</span>
            <span className="text-lg font-bold text-primary font-mono">
              {stock.score}/100
            </span>
          </div>

          {/* Signals */}
          <div className="flex flex-wrap gap-2 mb-4">
            {stock.signals.map((signal) => (
              <span
                key={signal}
                className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
              >
                {signal}
              </span>
            ))}
          </div>

          {/* Metrics (if available) */}
          {stock.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {stock.metrics.pe && (
                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">P/E Ratio</p>
                  <p className="text-sm font-semibold font-mono">
                    {stock.metrics.pe}
                  </p>
                </div>
              )}
              {stock.metrics.marketCap && (
                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Market Cap</p>
                  <p className="text-sm font-semibold font-mono">
                    {stock.metrics.marketCap}
                  </p>
                </div>
              )}
              {stock.metrics.volume && (
                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Volume</p>
                  <p className="text-sm font-semibold font-mono">
                    {stock.metrics.volume}
                  </p>
                </div>
              )}
              {stock.metrics.rsi && (
                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">RSI</p>
                  <p className="text-sm font-semibold font-mono">
                    {stock.metrics.rsi}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Reasoning */}
          <div className="bg-secondary/30 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4 text-accent" />
              Why Buy Now
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {stock.reasoning}
            </p>
          </div>

          {/* Sources */}
          {stock.sources && stock.sources.length > 0 && (
            <div className="bg-secondary/20 rounded-lg p-4">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5" />
                Sources
              </h4>
              <div className="flex flex-wrap gap-2">
                {stock.sources.map((source, idx) => (
                  <a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {source.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
