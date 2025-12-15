export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  score: number;
  reasoning: string;
  signals: string[];
  metrics?: {
    pe?: number;
    marketCap?: string;
    volume?: string;
    rsi?: number;
  };
}

export const technicalStocks: Stock[] = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 142.85,
    change: 4.23,
    changePercent: 3.05,
    score: 98,
    reasoning: "NVIDIA shows exceptional technical strength with RSI at 62 indicating momentum without overbought conditions. The stock recently broke above its 50-day moving average with strong volume confirmation. Goldman Sachs maintains a strong buy rating with a $180 price target. Q3 earnings beat estimates by 18%, with data center revenue up 154% YoY. The AI chip dominance and CUDA ecosystem moat make this a compelling technical and fundamental play.",
    signals: ["RSI Bullish", "MA Breakout", "Volume Surge", "Analyst Buy"],
    metrics: { pe: 65.2, marketCap: "3.5T", volume: "45.2M", rsi: 62 }
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 428.50,
    change: 2.85,
    changePercent: 0.67,
    score: 94,
    reasoning: "Microsoft presents a textbook accumulation pattern with institutional buying evident in the options flow. Azure revenue growth of 29% exceeds AWS, while Copilot integration drives Office 365 upsells. The stock trades at a reasonable 34x forward P/E given its growth profile. Morgan Stanley's $500 price target suggests 17% upside. Technical indicators show a golden cross formation on the weekly chart.",
    signals: ["Golden Cross", "Options Flow Bullish", "Cloud Growth", "Dividend Aristocrat"],
    metrics: { pe: 36.8, marketCap: "3.2T", volume: "18.7M", rsi: 58 }
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc",
    price: 612.30,
    change: 8.45,
    changePercent: 1.40,
    score: 91,
    reasoning: "Meta's technical setup shows a cup-and-handle pattern nearing completion. The Reality Labs losses are narrowing while advertising revenue grew 23% last quarter. JPMorgan raised their target to $650 citing AI monetization potential. The stock has strong support at the 200-day MA with decreasing volatility suggesting a breakout is imminent. Cost discipline has driven margins to multi-year highs.",
    signals: ["Cup & Handle", "Support Bounce", "Margin Expansion", "AI Catalyst"],
    metrics: { pe: 28.4, marketCap: "1.6T", volume: "12.3M", rsi: 55 }
  },
  {
    symbol: "AMZN",
    name: "Amazon.com Inc",
    price: 227.15,
    change: 3.12,
    changePercent: 1.39,
    score: 89,
    reasoning: "Amazon is breaking out of a multi-month consolidation with AWS reaccelerating to 19% growth. The retail segment is showing margin improvement as logistics investments pay off. Technical analysis reveals a bullish flag pattern with volume confirmation. Bank of America sees AWS and advertising as dual growth engines, maintaining a $230 target. Prime membership growth remains robust globally.",
    signals: ["Flag Breakout", "AWS Acceleration", "Margin Turnaround", "E-commerce Leader"],
    metrics: { pe: 42.1, marketCap: "2.4T", volume: "32.1M", rsi: 61 }
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc",
    price: 191.25,
    change: 1.87,
    changePercent: 0.99,
    score: 87,
    reasoning: "Alphabet trades at a significant discount to peers at 23x earnings despite dominating search and YouTube. Cloud grew 28% and is now profitable. The stock shows a double bottom pattern with rising MACD histogram. Citi upgraded to buy citing underappreciated AI monetization through Search Generative Experience. Waymo commercial expansion could unlock additional value.",
    signals: ["Double Bottom", "MACD Bullish", "Cloud Profitable", "Undervalued"],
    metrics: { pe: 23.5, marketCap: "2.4T", volume: "21.5M", rsi: 52 }
  },
  {
    symbol: "LLY",
    name: "Eli Lilly and Company",
    price: 812.40,
    change: 12.30,
    changePercent: 1.54,
    score: 85,
    reasoning: "Eli Lilly leads the GLP-1 revolution with Mounjaro and Zepbound showing unprecedented demand. The stock pulled back 15% from highs creating an attractive entry point. Technical support held at the 100-day MA with bullish divergence on RSI. Evercore maintains a $1,000 target based on obesity drug TAM expansion. Manufacturing capacity additions will unlock further revenue growth.",
    signals: ["Pullback Entry", "RSI Divergence", "GLP-1 Leader", "Capacity Expansion"],
    metrics: { pe: 78.3, marketCap: "770B", volume: "2.8M", rsi: 48 }
  },
  {
    symbol: "TSM",
    name: "Taiwan Semiconductor",
    price: 205.80,
    change: 5.67,
    changePercent: 2.83,
    score: 83,
    reasoning: "TSMC's technical picture shows accumulation at key support levels with rising OBV. The company guides for 20%+ revenue growth driven by AI chip demand. N3 and N2 node transitions cement technological leadership. Bernstein sees limited geopolitical risk priced in and maintains outperform. Arizona fab progress de-risks the geographic concentration narrative.",
    signals: ["OBV Rising", "Support Accumulation", "AI Beneficiary", "Node Leadership"],
    metrics: { pe: 28.9, marketCap: "1.1T", volume: "15.4M", rsi: 59 }
  },
  {
    symbol: "V",
    name: "Visa Inc",
    price: 318.45,
    change: 2.34,
    changePercent: 0.74,
    score: 81,
    reasoning: "Visa shows a steady uptrend within a well-defined channel with low volatility. Payment volume growth of 8% and cross-border transactions up 16% demonstrate resilience. The stock trades at 27x forward earnings with a 15% EPS growth trajectory. UBS highlights the durable competitive moat and pricing power. New flows and value-added services are underappreciated growth drivers.",
    signals: ["Channel Uptrend", "Low Volatility", "Cross-Border Growth", "Pricing Power"],
    metrics: { pe: 29.8, marketCap: "590B", volume: "5.2M", rsi: 56 }
  },
  {
    symbol: "COST",
    name: "Costco Wholesale",
    price: 952.30,
    change: 8.90,
    changePercent: 0.94,
    score: 79,
    reasoning: "Costco's chart shows a classic staircase pattern with higher lows and controlled pullbacks. Membership renewal rates at 93% demonstrate exceptional customer loyalty. Same-store sales grew 5.2% despite the challenging retail environment. Technical indicators suggest the current consolidation precedes a move higher. Deutsche Bank sees membership fee increase as near-term catalyst.",
    signals: ["Staircase Pattern", "Membership Strength", "Defensive Growth", "Fee Increase Catalyst"],
    metrics: { pe: 54.2, marketCap: "420B", volume: "1.8M", rsi: 54 }
  },
  {
    symbol: "JPM",
    name: "JPMorgan Chase & Co",
    price: 248.90,
    change: 3.45,
    changePercent: 1.41,
    score: 77,
    reasoning: "JPMorgan broke above multi-year resistance with strong volume, signaling a new leg higher. Net interest income guidance raised as deposit costs stabilize. The bank's diversified model outperforms pure-play peers. Technical momentum indicators all align bullish with RSI at 63. Barclays upgraded citing asset management growth and improving credit quality outlook.",
    signals: ["Resistance Breakout", "NII Strength", "Diversified Model", "Credit Quality"],
    metrics: { pe: 12.4, marketCap: "715B", volume: "8.9M", rsi: 63 }
  }
];

export const sentimentStocks: Stock[] = [
  {
    symbol: "PLTR",
    name: "Palantir Technologies",
    price: 78.45,
    change: 4.23,
    changePercent: 5.70,
    score: 96,
    reasoning: "Palantir dominates AI sentiment with its AIP platform seeing explosive enterprise adoption. Social media buzz is at all-time highs following multiple government contract wins. The recent S&P 500 inclusion triggered massive institutional buying. Political tailwinds from defense spending increases and NATO expansion benefit the company. Reddit and X sentiment analysis shows 89% bullish mentions with 'AI defense' as the trending narrative.",
    signals: ["Social Buzz Peak", "S&P 500 Entry", "Defense Spending", "AI Platform Leader"]
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc",
    price: 425.80,
    change: 18.45,
    changePercent: 4.53,
    score: 93,
    reasoning: "Tesla sentiment has surged following regulatory clarity on autonomous vehicles in key states. Elon Musk's political connections are viewed favorably by markets for potential EV incentive protection. Cybertruck production ramp and Semi deliveries generate strong retail enthusiasm. AI analysis of social platforms shows 'FSD breakthrough' as the dominant positive theme. Energy storage business reaching inflection point adds to the narrative.",
    signals: ["Regulatory Tailwind", "Political Alignment", "FSD Momentum", "Retail Favorite"]
  },
  {
    symbol: "COIN",
    name: "Coinbase Global",
    price: 312.50,
    change: 22.30,
    changePercent: 7.68,
    score: 91,
    reasoning: "Crypto regulatory sentiment has shifted dramatically positive with SEC leadership changes anticipated. Bitcoin ETF success validates the asset class and drives Coinbase custody revenue. Social sentiment tracking shows 'crypto spring' mentions up 340% month-over-month. Political donations from crypto industry creating bipartisan support narrative. International expansion into compliant markets diversifies regulatory risk.",
    signals: ["Regulatory Optimism", "ETF Catalyst", "Crypto Spring", "Bipartisan Support"]
  },
  {
    symbol: "RKLB",
    name: "Rocket Lab USA",
    price: 27.85,
    change: 2.15,
    changePercent: 8.37,
    score: 88,
    reasoning: "Space sentiment is surging with increased defense and commercial satellite demand. Rocket Lab's Neutron rocket development progress generates significant social media excitement. Government contracts from both NASA and DoD validate the competitive positioning. AI sentiment analysis shows 'SpaceX alternative' emerging as a key investment thesis. The stock has become a retail favorite with strong community support on investment forums.",
    signals: ["Space Boom", "Defense Contracts", "Neutron Progress", "Retail Momentum"]
  },
  {
    symbol: "HOOD",
    name: "Robinhood Markets",
    price: 43.25,
    change: 3.45,
    changePercent: 8.67,
    score: 85,
    reasoning: "Robinhood benefits from renewed retail trading interest and crypto sentiment recovery. The platform's crypto offerings position it well for regulatory clarity. Gold subscription growth shows monetization improvement resonating with investors. Social sentiment analysis reveals 'democratizing finance' narrative regaining traction. Political environment favoring retail investor access strengthens the bull case.",
    signals: ["Retail Revival", "Crypto Exposure", "Gold Growth", "Democratization Theme"]
  },
  {
    symbol: "SMCI",
    name: "Super Micro Computer",
    price: 42.80,
    change: 3.90,
    changePercent: 10.02,
    score: 83,
    reasoning: "Super Micro sentiment recovering after accounting concerns resolved with new auditor. AI infrastructure buildout narrative remains intact with hyperscaler partnerships. Social media sentiment shifted from skeptical to cautiously optimistic. The 'picks and shovels' AI play thesis resonates with growth investors. Political focus on domestic AI supply chain benefits US-based server manufacturers.",
    signals: ["Sentiment Recovery", "Auditor Resolution", "AI Infrastructure", "Supply Chain Focus"]
  },
  {
    symbol: "SOFI",
    name: "SoFi Technologies",
    price: 16.85,
    change: 0.92,
    changePercent: 5.78,
    score: 81,
    reasoning: "SoFi sentiment benefits from fintech optimism and banking charter advantages. Student loan repayment resumption drives refinancing narrative. Social platform analysis shows strong millennial/Gen-Z brand affinity. Political discussions around financial inclusion favor digital-first banks. The 'bank disruptor' theme continues gaining traction in investment communities.",
    signals: ["Fintech Optimism", "Student Loan Catalyst", "Gen-Z Favorite", "Bank Charter Moat"]
  },
  {
    symbol: "IONQ",
    name: "IonQ Inc",
    price: 45.20,
    change: 4.85,
    changePercent: 12.02,
    score: 79,
    reasoning: "Quantum computing sentiment surging following Google's Willow chip announcement. IonQ benefits from the 'rising tide lifts all boats' narrative in quantum. Government funding announcements for quantum research create positive headlines. Social media buzz around quantum AI applications drives retail interest. Political emphasis on quantum supremacy for national security amplifies the narrative.",
    signals: ["Quantum Hype", "Google Catalyst", "Government Funding", "National Security Theme"]
  },
  {
    symbol: "RIVN",
    name: "Rivian Automotive",
    price: 14.25,
    change: 0.85,
    changePercent: 6.34,
    score: 76,
    reasoning: "Rivian sentiment improving with production ramp and VW partnership validation. The Amazon delivery van contract provides revenue visibility and brand credibility. Social sentiment shows 'Tesla alternative' positioning gaining traction. Political support for EV infrastructure spending benefits the sector. Community forums show strong owner advocacy driving organic marketing.",
    signals: ["VW Partnership", "Amazon Contract", "EV Infrastructure", "Owner Advocacy"]
  },
  {
    symbol: "AFRM",
    name: "Affirm Holdings",
    price: 72.30,
    change: 5.10,
    changePercent: 7.59,
    score: 74,
    reasoning: "Buy-now-pay-later sentiment recovering as credit concerns ease. Affirm's zero-interest products differentiate from competitors facing regulatory scrutiny. Holiday shopping season drives usage and merchant adoption narratives. Social analysis shows 'responsible BNPL' positioning resonating. Political discussions around credit card reform indirectly benefit transparent BNPL providers.",
    signals: ["BNPL Recovery", "Holiday Catalyst", "Regulatory Differentiation", "Credit Reform Theme"]
  }
];
