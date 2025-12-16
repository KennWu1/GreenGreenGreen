import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Top stocks to analyze across categories
const STOCK_SYMBOLS = [
  'NVDA', 'MSFT', 'META', 'AMZN', 'GOOGL', 'AAPL', 'TSM', 'AVGO', 'LLY', 'JPM',
  'PLTR', 'TSLA', 'COIN', 'RKLB', 'HOOD', 'SMCI', 'SOFI', 'IONQ', 'RIVN', 'AMD',
  'V', 'COST', 'UNH', 'XOM', 'CVX', 'BA', 'LMT', 'RTX', 'GD', 'NOC'
];

interface FinnhubQuote {
  c: number;  // Current price
  d: number;  // Change
  dp: number; // Percent change
  h: number;  // High
  l: number;  // Low
  o: number;  // Open
  pc: number; // Previous close
  t: number;  // Timestamp
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
  'TSM': 'Taiwan Semiconductor',
  'AVGO': 'Broadcom Inc',
  'LLY': 'Eli Lilly and Company',
  'JPM': 'JPMorgan Chase & Co',
  'PLTR': 'Palantir Technologies',
  'TSLA': 'Tesla Inc',
  'COIN': 'Coinbase Global',
  'RKLB': 'Rocket Lab USA',
  'HOOD': 'Robinhood Markets',
  'SMCI': 'Super Micro Computer',
  'SOFI': 'SoFi Technologies',
  'IONQ': 'IonQ Inc',
  'RIVN': 'Rivian Automotive',
  'AMD': 'Advanced Micro Devices',
  'V': 'Visa Inc',
  'COST': 'Costco Wholesale',
  'UNH': 'UnitedHealth Group',
  'XOM': 'Exxon Mobil Corporation',
  'CVX': 'Chevron Corporation',
  'BA': 'The Boeing Company',
  'LMT': 'Lockheed Martin',
  'RTX': 'RTX Corporation',
  'GD': 'General Dynamics',
  'NOC': 'Northrop Grumman'
};

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

    // Fetch quotes for all symbols in parallel (with rate limiting consideration)
    const stockPromises = STOCK_SYMBOLS.map(async (symbol, index) => {
      // Add small delay to avoid rate limiting (60 calls/min = 1 per second)
      await new Promise(resolve => setTimeout(resolve, index * 100));
      
      try {
        const response = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${FINNHUB_API_KEY}`
        );
        
        if (!response.ok) {
          console.error(`Failed to fetch ${symbol}: ${response.status}`);
          return null;
        }
        
        const quote: FinnhubQuote = await response.json();
        
        // Skip if no valid data
        if (!quote.c || quote.c === 0) {
          console.log(`No data for ${symbol}`);
          return null;
        }
        
        return {
          symbol,
          name: COMPANY_NAMES[symbol] || symbol,
          price: quote.c,
          change: quote.d || 0,
          changePercent: quote.dp || 0,
        } as StockData;
      } catch (error) {
        console.error(`Error fetching ${symbol}:`, error);
        return null;
      }
    });

    const stocks = (await Promise.all(stockPromises)).filter((s): s is StockData => s !== null);
    
    console.log(`Successfully fetched ${stocks.length} stock quotes`);

    return new Response(JSON.stringify({ stocks }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in fetch-stocks function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
