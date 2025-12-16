import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { TabNavigation, Tab } from "@/components/TabNavigation";
import { CategoryInfo } from "@/components/CategoryInfo";
import { StockCard } from "@/components/StockCard";
import { BacktestingView } from "@/components/BacktestingView";
import { useStockData } from "@/hooks/useStockData";
import { technicalStocks, sentimentStocks, politicsStocks, overallStocks, Stock } from "@/data/stocks";
import { Loader2, RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [activeTab, setActiveTab] = useState<Tab>("overall");
  const [useLiveData, setUseLiveData] = useState(true);
  const { fetchStocks, isLoading, error, stocksByCategory, clearCache } = useStockData();

  // Fetch stocks when tab changes (for non-backtesting tabs)
  useEffect(() => {
    if (activeTab !== "backtesting" && useLiveData) {
      fetchStocks(activeTab).catch(console.error);
    }
  }, [activeTab, useLiveData, fetchStocks]);

  // Show error toast
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const getMockStocks = (): Stock[] => {
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

  const getLiveStocks = (): Stock[] => {
    return stocksByCategory[activeTab] || [];
  };

  const stocks = useLiveData ? getLiveStocks() : getMockStocks();
  const showLoading = isLoading && stocks.length === 0;

  const handleRefresh = async () => {
    toast.info("Refreshing stock data...");
    await fetchStocks(activeTab, true);
    toast.success("Stock data refreshed!");
  };

  const toggleDataSource = () => {
    setUseLiveData(!useLiveData);
    if (!useLiveData) {
      clearCache();
    }
    toast.info(useLiveData ? "Switched to mock data" : "Switched to live data");
  };

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

            {/* Data Source Toggle & Refresh */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full ${useLiveData ? 'bg-positive/20 text-positive' : 'bg-muted text-muted-foreground'}`}>
                  {useLiveData ? '🔴 LIVE' : '📊 Mock'}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleDataSource}
                  className="text-xs"
                >
                  {useLiveData ? 'Use Mock Data' : 'Use Live Data'}
                </Button>
              </div>
              {useLiveData && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isLoading}
                  className="gap-2"
                >
                  <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
              )}
            </div>

            {/* Error State */}
            {error && stocks.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <AlertCircle className="w-12 h-12 text-negative mb-4" />
                <p className="text-muted-foreground mb-4">{error}</p>
                <div className="flex gap-2">
                  <Button onClick={() => fetchStocks(activeTab, true)}>
                    Try Again
                  </Button>
                  <Button variant="outline" onClick={() => setUseLiveData(false)}>
                    Use Mock Data
                  </Button>
                </div>
              </div>
            )}

            {/* Loading State */}
            {showLoading && !error && (
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                <p className="text-muted-foreground">Fetching live stock data & AI analysis...</p>
                <p className="text-xs text-muted-foreground mt-2">This may take 10-20 seconds</p>
              </div>
            )}

            {/* Stock List */}
            {!showLoading && stocks.length > 0 && (
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
            )}
          </>
        )}

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            Disclaimer: This is not financial advice. Stock rankings are based on
            AI analysis of live market data and should not be the sole basis for investment
            decisions. Always do your own research. Data provided by Finnhub.io.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
