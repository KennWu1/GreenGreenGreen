import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

// Fallback stocks if API fails
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
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const { stocks: inputStocks, news, category } = await req.json();
    
    // Use fallback if no stocks provided
    const stocks = (inputStocks && inputStocks.length > 0) ? inputStocks : FALLBACK_STOCKS;
    console.log(`Using ${inputStocks?.length || 0} provided stocks, fallback: ${!inputStocks || inputStocks.length === 0}`);

    console.log(`Analyzing ${stocks.length} stocks for category: ${category}`);

    const categoryPrompts: Record<string, string> = {
      technical: `You are a technical analysis expert. Analyze these stocks based on price momentum, RSI indicators (estimate from price movement), moving average patterns, and volume trends. Focus on chart patterns and technical signals.`,
      sentiment: `You are a sentiment analysis expert. Analyze these stocks based on market sentiment, social media buzz, retail investor interest, and overall market perception. Consider news headlines and their emotional impact.`,
      politics: `You are a political and macro analyst. Analyze these stocks based on political developments, government policies, regulatory changes, defense spending, trade relations, and geopolitical factors.`,
      overall: `You are a comprehensive investment analyst. Combine technical analysis, sentiment analysis, and political/macro factors to rank these stocks. Weight all factors equally and identify the best overall opportunities.`
    };

    const stocksInfo = stocks.map((s: StockData) => 
      `${s.symbol} (${s.name}): $${s.price.toFixed(2)}, Change: ${s.change >= 0 ? '+' : ''}${s.changePercent.toFixed(2)}%`
    ).join('\n');

    const newsInfo = news?.slice(0, 15).map((n: NewsItem) => 
      `[${n.symbol || 'Market'}] ${n.headline}`
    ).join('\n') || 'No recent news available';

    const prompt = `${categoryPrompts[category] || categoryPrompts.overall}

Current Stock Data:
${stocksInfo}

Recent News Headlines:
${newsInfo}

Analyze and rank the TOP 10 stocks to buy right now. For each stock provide:
1. A score from 1-100 (higher = stronger buy)
2. 3-4 key signals/indicators
3. A compelling 2-3 sentence reasoning for why to buy NOW
4. Estimated metrics (P/E ratio estimate, market cap tier, RSI estimate 30-70)

Respond ONLY with valid JSON in this exact format:
{
  "stocks": [
    {
      "symbol": "TICKER",
      "score": 95,
      "signals": ["Signal 1", "Signal 2", "Signal 3"],
      "reasoning": "Brief compelling reason to buy now...",
      "metrics": {
        "pe": 25.5,
        "marketCap": "1.5T",
        "rsi": 55
      }
    }
  ]
}`;

    console.log('Calling Lovable AI for analysis...');
    
    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: 'You are a professional stock analyst. Always respond with valid JSON only, no markdown or code blocks.' },
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI API error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'AI usage limit reached. Please add credits.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`AI API error: ${response.status}`);
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error('No content in AI response');
    }

    console.log('AI Response received, parsing...');
    
    // Clean the response - remove markdown code blocks if present
    let cleanedContent = content.trim();
    if (cleanedContent.startsWith('```json')) {
      cleanedContent = cleanedContent.slice(7);
    } else if (cleanedContent.startsWith('```')) {
      cleanedContent = cleanedContent.slice(3);
    }
    if (cleanedContent.endsWith('```')) {
      cleanedContent = cleanedContent.slice(0, -3);
    }
    cleanedContent = cleanedContent.trim();

    const analysis = JSON.parse(cleanedContent);
    
    // Merge AI analysis with real stock data
    const enrichedStocks = analysis.stocks.map((analyzed: any) => {
      const realData = stocks.find((s: StockData) => s.symbol === analyzed.symbol);
      return {
        ...analyzed,
        name: realData?.name || analyzed.symbol,
        price: realData?.price || 0,
        change: realData?.change || 0,
        changePercent: realData?.changePercent || 0,
        sources: [
          { title: 'Finnhub Real-Time Data', url: `https://finnhub.io/quote/${analyzed.symbol}` },
          { title: 'Yahoo Finance', url: `https://finance.yahoo.com/quote/${analyzed.symbol}` },
          { title: 'TradingView', url: `https://www.tradingview.com/symbols/${analyzed.symbol}` }
        ]
      };
    });

    console.log(`Analysis complete: ${enrichedStocks.length} stocks ranked`);

    return new Response(JSON.stringify({ stocks: enrichedStocks }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in analyze-stocks function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
