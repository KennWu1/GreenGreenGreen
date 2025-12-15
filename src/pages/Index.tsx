import { useState } from "react";
import { Header } from "@/components/Header";
import { TabNavigation, Tab } from "@/components/TabNavigation";
import { CategoryInfo } from "@/components/CategoryInfo";
import { StockCard } from "@/components/StockCard";
import { BacktestingView } from "@/components/BacktestingView";
import { technicalStocks, sentimentStocks, politicsStocks, overallStocks } from "@/data/stocks";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overall");

  const getStocks = () => {
    switch (activeTab) {
      case "overall":
        return overallStocks;
      case "technical":
        return technicalStocks;
      case "sentiment":
        return sentimentStocks;
      case "politics":
        return politicsStocks;
      default:
        return [];
    }
  };

  const stocks = getStocks();

  return (
    <div className="min-h-screen bg-background">
      {/* Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Header />

      <main className="relative container mx-auto px-4 pb-12">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {activeTab === "backtesting" ? (
          <BacktestingView />
        ) : (
          <>
            <CategoryInfo activeTab={activeTab} />

            <div className="space-y-3">
              {stocks.map((stock, index) => (
                <StockCard
                  key={`${activeTab}-${stock.symbol}`}
                  stock={stock}
                  rank={index + 1}
                  index={index}
                />
              ))}
            </div>
          </>
        )}

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Disclaimer: This is not financial advice. Stock rankings are based on
            algorithmic analysis and should not be the sole basis for investment
            decisions. Always do your own research.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
