import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Reduced to 15 stocks to stay within free tier rate limits (60 calls/min)
const STOCK_SYMBOLS = [
  'NVDA', 'MSFT', 'META', 'AMZN', 'GOOGL', 
  'TSLA', 'AAPL', 'PLTR', 'JPM', 'LLY',
  'AMD', 'COIN', 'BA', 'LMT', 'V'
];

interface FinnhubQuote {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
}

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
}

const COMPANY_NAMES: Record<string, string> = {
  'NVDA': 'NVIDIA Corporation',
  'MSFT': 'Microsoft Corporation',
  'META': 'Meta Platforms Inc',
  'AMZN': 'Amazon.com Inc',
  'GOOGL': 'Alphabet Inc',
  'AAPL': 'Apple Inc',
  'TSLA': 'Tesla Inc',
  'PLTR': 'Palantir Technologies',
  'JPM': 'JPMorgan Chase & Co',
  'LLY': 'Eli Lilly and Company',
  'AMD': 'Advanced Micro Devices',
  'COIN': 'Coinbase Global',
  'BA': 'The Boeing Company',
  'LMT': 'Lockheed Martin',
  'V': 'Visa Inc'
};

// Fallback data in case API fails (market closed or rate limited)
const FALLBACK_STOCKS: StockData[] = [
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 140.00, change: 2.50, changePercent: 1.82 },
  { symbol: 'MSFT', name: 'Microsoft Corporation', price: 430.00, change: 1.20, changePercent: 0.28 },
  { symbol: 'META', name: 'Meta Platforms Inc', price: 615.00, change: 5.30, changePercent: 0.87 },
  { symbol: 'AMZN', name: 'Amazon.com Inc', price: 225.00, change: -1.50, changePercent: -0.66 },
  { symbol: 'GOOGL', name: 'Alphabet Inc', price: 190.00, change: 0.80, changePercent: 0.42 },
  { symbol: 'TSLA', name: 'Tesla Inc', price: 430.00, change: 12.00, changePercent: 2.87 },
  { symbol: 'AAPL', name: 'Apple Inc', price: 250.00, change: -2.00, changePercent: -0.79 },
  { symbol: 'PLTR', name: 'Palantir Technologies', price: 78.00, change: 3.50, changePercent: 4.69 },
  { symbol: 'JPM', name: 'JPMorgan Chase & Co', price: 250.00, change: 1.80, changePercent: 0.73 },
  { symbol: 'LLY', name: 'Eli Lilly and Company', price: 815.00, change: 8.00, changePercent: 0.99 },
  { symbol: 'AMD', name: 'Advanced Micro Devices', price: 125.00, change: -1.20, changePercent: -0.95 },
  { symbol: 'COIN', name: 'Coinbase Global', price: 315.00, change: 18.00, changePercent: 6.06 },
  { symbol: 'BA', name: 'The Boeing Company', price: 180.00, change: 2.30, changePercent: 1.29 },
  { symbol: 'LMT', name: 'Lockheed Martin', price: 485.00, change: 3.50, changePercent: 0.73 },
  { symbol: 'V', name: 'Visa Inc', price: 320.00, change: 1.00, changePercent: 0.31 }
];

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const FINNHUB_API_KEY = Deno.env.get('FINNHUB_API_KEY');
    if (!FINNHUB_API_KEY) {
      throw new Error('FINNHUB_API_KEY is not configured');
    }

    console.log('Fetching stock quotes from Finnhub...');

    const stocks: StockData[] = [];
    
    // Fetch sequentially with 1.1s delay to respect rate limits (60/min)
    for (const symbol of STOCK_SYMBOLS) {
      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
        );
        
        if (!response.ok) {
          console.error(`Failed to fetch ${symbol}: ${response.status}`);
          if (response.status === 429) {
            console.log('Rate limited, using fallback data');
            return new Response(JSON.stringify({ stocks: FALLBACK_STOCKS, fallback: true }), {
              headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            });
          }
          continue;
        }
        
        const quote: FinnhubQuote = await response.json();
        
        if (quote.c && quote.c > 0) {
          stocks.push({
            symbol,
            name: COMPANY_NAMES[symbol] || symbol,
            price: quote.c,
            change: quote.d || 0,
            changePercent: quote.dp || 0,
          });
        }
        
        // Wait 1.1 seconds between requests to stay under 60/min limit
        await new Promise(resolve => setTimeout(resolve, 1100));
        
      } catch (error) {
        console.error(`Error fetching ${symbol}:`, error);
      }
    }
    
    console.log(`Successfully fetched ${stocks.length} stock quotes`);

    // If we got less than 5 stocks, use fallback
    if (stocks.length < 5) {
      console.log('Insufficient data, using fallback');
      return new Response(JSON.stringify({ stocks: FALLBACK_STOCKS, fallback: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ stocks }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in fetch-stocks function:', error);
    // Return fallback on error
    return new Response(JSON.stringify({ stocks: FALLBACK_STOCKS, fallback: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
