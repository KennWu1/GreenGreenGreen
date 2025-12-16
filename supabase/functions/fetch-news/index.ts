import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FinnhubNews {
  category: string;
  datetime: number;
  headline: string;
  id: number;
  image: string;
  related: string;
  source: string;
  summary: string;
  url: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const FINNHUB_API_KEY = Deno.env.get('FINNHUB_API_KEY');
    if (!FINNHUB_API_KEY) {
      throw new Error('FINNHUB_API_KEY is not configured');
    }

    const { symbols } = await req.json();
    const stockSymbols = symbols || ['NVDA', 'MSFT', 'TSLA', 'AAPL', 'GOOGL'];

    console.log('Fetching news for symbols:', stockSymbols);

    // Fetch general market news
    const marketNewsResponse = await fetch(
      `https://finnhub.io/api/v1/news?category=general&token=${FINNHUB_API_KEY}`
    );
    
    const marketNews: FinnhubNews[] = await marketNewsResponse.json();
    
    // Fetch company-specific news for each symbol
    const companyNewsPromises = stockSymbols.slice(0, 5).map(async (symbol: string, index: number) => {
      await new Promise(resolve => setTimeout(resolve, index * 200));
      
      const today = new Date();
      const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
      
      const from = lastWeek.toISOString().split('T')[0];
      const to = today.toISOString().split('T')[0];
      
      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${FINNHUB_API_KEY}`
        );
        
        if (!response.ok) {
          console.error(`Failed to fetch news for ${symbol}: ${response.status}`);
          return [];
        }
        
        const news: FinnhubNews[] = await response.json();
        return news.slice(0, 5).map(n => ({ ...n, symbol }));
      } catch (error) {
        console.error(`Error fetching news for ${symbol}:`, error);
        return [];
      }
    });

    const companyNewsArrays = await Promise.all(companyNewsPromises);
    const companyNews = companyNewsArrays.flat();

    console.log(`Fetched ${marketNews.length} market news and ${companyNews.length} company news`);

    return new Response(JSON.stringify({ 
      marketNews: marketNews.slice(0, 20),
      companyNews 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in fetch-news function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
