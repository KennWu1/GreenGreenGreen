import { TrendingUp, TrendingDown, Target, DollarSign, Calendar, ChevronDown } from "lucide-react";
import { backtestData, BacktestWeek } from "@/data/stocks";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function BacktestingView() {
  const [expandedWeek, setExpandedWeek] = useState<string | null>(backtestData[0]?.weekStart || null);

  const overallAccuracy = Math.round(
    backtestData.reduce((acc, week) => acc + week.accuracy, 0) / backtestData.length
  );
  
  const totalReturns = backtestData.reduce((acc, week) => acc + week.totalIfBought, 0);
  const avgWeeklyReturn = (
    backtestData.reduce((acc, week) => acc + week.avgWeeklyReturn, 0) / backtestData.length
  ).toFixed(1);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-card rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Accuracy Rate</span>
          </div>
          <p className="text-3xl font-bold text-foreground font-mono">{overallAccuracy}%</p>
          <p className="text-xs text-muted-foreground mt-1">of recommendations profitable</p>
        </div>

        <div className="glass-card rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-positive/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-positive" />
            </div>
            <span className="text-sm text-muted-foreground">Total Returns</span>
          </div>
          <p className="text-3xl font-bold text-positive font-mono">+${totalReturns.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground mt-1">if bought $1,000 each pick</p>
        </div>

        <div className="glass-card rounded-xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">Avg Weekly Return</span>
          </div>
          <p className="text-3xl font-bold text-accent font-mono">+{avgWeeklyReturn}%</p>
          <p className="text-xs text-muted-foreground mt-1">average across all picks</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="glass-card rounded-xl p-4 border-l-4 border-l-primary">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Historical Performance Tracking</h3>
            <p className="text-sm text-muted-foreground">
              We track every stock recommendation daily and compare against closing prices to measure accuracy. 
              Returns calculated assuming $1,000 invested in each daily pick.
            </p>
          </div>
        </div>
      </div>

      {/* Weekly Breakdowns */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Weekly Breakdown</h3>
        {backtestData.map((week) => (
          <WeekCard 
            key={week.weekStart} 
            week={week} 
            isExpanded={expandedWeek === week.weekStart}
            onToggle={() => setExpandedWeek(expandedWeek === week.weekStart ? null : week.weekStart)}
          />
        ))}
      </div>
    </div>
  );
}

interface WeekCardProps {
  week: BacktestWeek;
  isExpanded: boolean;
  onToggle: () => void;
}

function WeekCard({ week, isExpanded, onToggle }: WeekCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="glass-card rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center gap-4 text-left hover:bg-secondary/30 transition-colors"
      >
        <div className="flex-1">
          <p className="font-semibold text-foreground">
            Week of {formatDate(week.weekStart)} - {formatDate(week.weekEnd)}
          </p>
          <div className="flex items-center gap-4 mt-1 text-sm">
            <span className="text-muted-foreground">
              Accuracy: <span className="text-primary font-mono font-medium">{week.accuracy}%</span>
            </span>
            <span className="text-muted-foreground">
              Return: <span className="text-positive font-mono font-medium">+{week.avgWeeklyReturn}%</span>
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-positive font-mono">+${week.totalIfBought.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">potential gain</p>
        </div>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform",
            isExpanded && "rotate-180"
          )} 
        />
      </button>

      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-[1000px]" : "max-h-0"
      )}>
        <div className="px-4 pb-4 border-t border-border/50">
          <div className="space-y-3 mt-4">
            {week.days.map((day) => (
              <div key={day.date} className="bg-secondary/30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">
                    {formatDate(day.date)}
                  </span>
                  <span className={cn(
                    "text-sm font-mono font-medium",
                    day.avgReturn >= 0 ? "text-positive" : "text-negative"
                  )}>
                    {day.avgReturn >= 0 ? "+" : ""}{day.avgReturn.toFixed(1)}% avg
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {day.stocks.map((stock) => (
                    <div key={stock.symbol} className="flex items-center justify-between bg-background/50 rounded-md px-3 py-2">
                      <span className="font-mono font-medium text-foreground">{stock.symbol}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">
                          ${stock.recommendedPrice.toFixed(2)} → ${stock.closePrice.toFixed(2)}
                        </span>
                        <span className={cn(
                          "text-xs font-mono font-medium flex items-center gap-0.5",
                          stock.returnPercent >= 0 ? "text-positive" : "text-negative"
                        )}>
                          {stock.returnPercent >= 0 ? (
                            <TrendingUp className="w-3 h-3" />
                          ) : (
                            <TrendingDown className="w-3 h-3" />
                          )}
                          {stock.returnPercent >= 0 ? "+" : ""}{stock.returnPercent.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
