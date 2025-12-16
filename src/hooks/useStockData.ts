import { useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Stock } from '@/data/stocks';

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

interface NewsItem {
  headline: string;
  summary: string;
  source: string;
  url: string;
  symbol?: string;
}

interface AnalyzedStock extends Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  score: number;
  signals: string[];
  reasoning: string;
  sources: { title: string; url: string }[];
  metrics?: {
    pe?: number;
    marketCap?: string;
    rsi?: number;
  };
}

export function useStockData() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stocksByCategory, setStocksByCategory] = useState<Record<string, AnalyzedStock[]>>({});
  const [lastFetched, setLastFetched] = useState<Record<string, number>>({});

  const fetchStocks = useCallback(async (category: string, forceRefresh = false) => {
    // Check if we have cached data less than 5 minutes old
    const cacheTime = lastFetched[category];
    const now = Date.now();
    if (!forceRefresh && cacheTime && now - cacheTime < 5 * 60 * 1000 && stocksByCategory[category]) {
      return stocksByCategory[category];
    }

    setIsLoading(true);
    setError(null);

    try {
      // Step 1: Fetch real-time stock quotes
      console.log('Fetching stock quotes...');
      const { data: stocksData, error: stocksError } = await supabase.functions.invoke('fetch-stocks');
      
      if (stocksError) {
        throw new Error(stocksError.message || 'Failed to fetch stock data');
      }

      if (stocksData.error) {
        throw new Error(stocksData.error);
      }

      const stocks: StockData[] = stocksData.stocks;
      console.log(`Received ${stocks.length} stock quotes`);

      // Step 2: Fetch news for sentiment analysis
      console.log('Fetching news...');
      const { data: newsData, error: newsError } = await supabase.functions.invoke('fetch-news', {
        body: { symbols: stocks.slice(0, 10).map(s => s.symbol) }
      });

      let news: NewsItem[] = [];
      if (!newsError && newsData && !newsData.error) {
        news = [...(newsData.marketNews || []), ...(newsData.companyNews || [])];
        console.log(`Received ${news.length} news items`);
      }

      // Step 3: Analyze stocks with AI
      console.log(`Analyzing stocks for category: ${category}`);
      const { data: analysisData, error: analysisError } = await supabase.functions.invoke('analyze-stocks', {
        body: { stocks, news, category }
      });

      if (analysisError) {
        throw new Error(analysisError.message || 'Failed to analyze stocks');
      }

      if (analysisData.error) {
        throw new Error(analysisData.error);
      }

      const analyzedStocks: AnalyzedStock[] = analysisData.stocks;
      console.log(`Analysis complete: ${analyzedStocks.length} stocks ranked`);

      // Update cache
      setStocksByCategory(prev => ({
        ...prev,
        [category]: analyzedStocks
      }));
      setLastFetched(prev => ({
        ...prev,
        [category]: now
      }));

      return analyzedStocks;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      console.error('Error fetching stocks:', errorMessage);
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [stocksByCategory, lastFetched]);

  const clearCache = useCallback(() => {
    setStocksByCategory({});
    setLastFetched({});
  }, []);

  return {
    fetchStocks,
    isLoading,
    error,
    stocksByCategory,
    clearCache
  };
}
