export interface StockSource {
  title: string;
  url: string;
}

export interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  score: number;
  reasoning: string;
  signals: string[];
  sources: StockSource[];
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
    sources: [
      { title: "Goldman Sachs Price Target", url: "https://www.goldmansachs.com/insights/nvda" },
      { title: "NVIDIA Q3 Earnings Report", url: "https://investor.nvidia.com/earnings" },
      { title: "TradingView Technical Analysis", url: "https://www.tradingview.com/symbols/NASDAQ-NVDA" }
    ],
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
    sources: [
      { title: "Morgan Stanley Research", url: "https://www.morganstanley.com/ideas/msft-outlook" },
      { title: "Microsoft Azure Revenue Report", url: "https://www.microsoft.com/investor/reports" },
      { title: "Options Flow Analysis", url: "https://unusualwhales.com/flow/MSFT" }
    ],
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
    sources: [
      { title: "JPMorgan META Analysis", url: "https://www.jpmorgan.com/insights/meta" },
      { title: "Meta Q4 Earnings Call", url: "https://investor.fb.com/earnings" },
      { title: "StockCharts Pattern Analysis", url: "https://stockcharts.com/h-sc/ui?s=META" }
    ],
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
    sources: [
      { title: "Bank of America AMZN Report", url: "https://www.bofa.com/research/amzn" },
      { title: "AWS Revenue Analysis", url: "https://aws.amazon.com/about-aws" },
      { title: "Technical Breakout Alert", url: "https://www.barchart.com/stocks/quotes/AMZN" }
    ],
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
    sources: [
      { title: "Citi Upgrade Report", url: "https://www.citigroup.com/research/googl" },
      { title: "Google Cloud Earnings", url: "https://abc.xyz/investor" },
      { title: "Waymo Expansion News", url: "https://waymo.com/blog" }
    ],
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
    sources: [
      { title: "Evercore LLY Analysis", url: "https://evercore.com/research/lly" },
      { title: "FDA Drug Approvals", url: "https://www.fda.gov/drugs/lilly" },
      { title: "GLP-1 Market Report", url: "https://www.biopharmadive.com/glp1" }
    ],
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
    sources: [
      { title: "Bernstein TSM Report", url: "https://www.bernstein.com/research/tsm" },
      { title: "TSMC Investor Relations", url: "https://investor.tsmc.com" },
      { title: "Arizona Fab Update", url: "https://www.reuters.com/tsmc-arizona" }
    ],
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
    sources: [
      { title: "UBS Visa Analysis", url: "https://www.ubs.com/research/visa" },
      { title: "Visa Earnings Report", url: "https://investor.visa.com" },
      { title: "Payment Volume Data", url: "https://www.nilsonreport.com" }
    ],
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
    sources: [
      { title: "Deutsche Bank COST Report", url: "https://www.db.com/research/cost" },
      { title: "Costco Monthly Sales", url: "https://investor.costco.com" },
      { title: "Retail Sector Analysis", url: "https://www.retaildive.com/costco" }
    ],
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
    sources: [
      { title: "Barclays JPM Upgrade", url: "https://www.barclays.com/research/jpm" },
      { title: "JPM Investor Day", url: "https://www.jpmorganchase.com/ir" },
      { title: "Banking Sector Outlook", url: "https://www.spglobal.com/banking" }
    ],
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
    signals: ["Social Buzz Peak", "S&P 500 Entry", "Defense Spending", "AI Platform Leader"],
    sources: [
      { title: "Reddit r/wallstreetbets Analysis", url: "https://reddit.com/r/wallstreetbets/pltr" },
      { title: "S&P 500 Inclusion News", url: "https://www.spglobal.com/indices/pltr" },
      { title: "Palantir Contract Wins", url: "https://www.palantir.com/newsroom" }
    ]
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc",
    price: 425.80,
    change: 18.45,
    changePercent: 4.53,
    score: 93,
    reasoning: "Tesla sentiment has surged following regulatory clarity on autonomous vehicles in key states. Elon Musk's political connections are viewed favorably by markets for potential EV incentive protection. Cybertruck production ramp and Semi deliveries generate strong retail enthusiasm. AI analysis of social platforms shows 'FSD breakthrough' as the dominant positive theme. Energy storage business reaching inflection point adds to the narrative.",
    signals: ["Regulatory Tailwind", "Political Alignment", "FSD Momentum", "Retail Favorite"],
    sources: [
      { title: "Autonomous Vehicle Regulations", url: "https://www.nhtsa.gov/autonomous-vehicles" },
      { title: "Tesla Investor Relations", url: "https://ir.tesla.com" },
      { title: "Stocktwits TSLA Sentiment", url: "https://stocktwits.com/symbol/TSLA" }
    ]
  },
  {
    symbol: "COIN",
    name: "Coinbase Global",
    price: 312.50,
    change: 22.30,
    changePercent: 7.68,
    score: 91,
    reasoning: "Crypto regulatory sentiment has shifted dramatically positive with SEC leadership changes anticipated. Bitcoin ETF success validates the asset class and drives Coinbase custody revenue. Social sentiment tracking shows 'crypto spring' mentions up 340% month-over-month. Political donations from crypto industry creating bipartisan support narrative. International expansion into compliant markets diversifies regulatory risk.",
    signals: ["Regulatory Optimism", "ETF Catalyst", "Crypto Spring", "Bipartisan Support"],
    sources: [
      { title: "SEC Crypto Policy Updates", url: "https://www.sec.gov/crypto" },
      { title: "Bitcoin ETF Flows", url: "https://www.theblock.co/bitcoin-etf" },
      { title: "Coinbase Blog", url: "https://www.coinbase.com/blog" }
    ]
  },
  {
    symbol: "RKLB",
    name: "Rocket Lab USA",
    price: 27.85,
    change: 2.15,
    changePercent: 8.37,
    score: 88,
    reasoning: "Space sentiment is surging with increased defense and commercial satellite demand. Rocket Lab's Neutron rocket development progress generates significant social media excitement. Government contracts from both NASA and DoD validate the competitive positioning. AI sentiment analysis shows 'SpaceX alternative' emerging as a key investment thesis. The stock has become a retail favorite with strong community support on investment forums.",
    signals: ["Space Boom", "Defense Contracts", "Neutron Progress", "Retail Momentum"],
    sources: [
      { title: "NASA Contract Awards", url: "https://www.nasa.gov/contracts" },
      { title: "Rocket Lab Updates", url: "https://www.rocketlabusa.com/updates" },
      { title: "Space Industry Report", url: "https://www.spacenews.com" }
    ]
  },
  {
    symbol: "HOOD",
    name: "Robinhood Markets",
    price: 43.25,
    change: 3.45,
    changePercent: 8.67,
    score: 85,
    reasoning: "Robinhood benefits from renewed retail trading interest and crypto sentiment recovery. The platform's crypto offerings position it well for regulatory clarity. Gold subscription growth shows monetization improvement resonating with investors. Social sentiment analysis reveals 'democratizing finance' narrative regaining traction. Political environment favoring retail investor access strengthens the bull case.",
    signals: ["Retail Revival", "Crypto Exposure", "Gold Growth", "Democratization Theme"],
    sources: [
      { title: "Robinhood Earnings", url: "https://investors.robinhood.com" },
      { title: "Retail Trading Trends", url: "https://www.bloomberg.com/retail-trading" },
      { title: "Fintech Sentiment Report", url: "https://www.finextra.com" }
    ]
  },
  {
    symbol: "SMCI",
    name: "Super Micro Computer",
    price: 42.80,
    change: 3.90,
    changePercent: 10.02,
    score: 83,
    reasoning: "Super Micro sentiment recovering after accounting concerns resolved with new auditor. AI infrastructure buildout narrative remains intact with hyperscaler partnerships. Social media sentiment shifted from skeptical to cautiously optimistic. The 'picks and shovels' AI play thesis resonates with growth investors. Political focus on domestic AI supply chain benefits US-based server manufacturers.",
    signals: ["Sentiment Recovery", "Auditor Resolution", "AI Infrastructure", "Supply Chain Focus"],
    sources: [
      { title: "SMCI Auditor News", url: "https://www.supermicro.com/investor" },
      { title: "AI Server Market Report", url: "https://www.gartner.com/ai-infrastructure" },
      { title: "Supply Chain Analysis", url: "https://www.supplychaindive.com" }
    ]
  },
  {
    symbol: "SOFI",
    name: "SoFi Technologies",
    price: 16.85,
    change: 0.92,
    changePercent: 5.78,
    score: 81,
    reasoning: "SoFi sentiment benefits from fintech optimism and banking charter advantages. Student loan repayment resumption drives refinancing narrative. Social platform analysis shows strong millennial/Gen-Z brand affinity. Political discussions around financial inclusion favor digital-first banks. The 'bank disruptor' theme continues gaining traction in investment communities.",
    signals: ["Fintech Optimism", "Student Loan Catalyst", "Gen-Z Favorite", "Bank Charter Moat"],
    sources: [
      { title: "SoFi Investor News", url: "https://investors.sofi.com" },
      { title: "Student Loan Data", url: "https://www.ed.gov/student-loans" },
      { title: "Fintech Industry Report", url: "https://www.cbinsights.com/fintech" }
    ]
  },
  {
    symbol: "IONQ",
    name: "IonQ Inc",
    price: 45.20,
    change: 4.85,
    changePercent: 12.02,
    score: 79,
    reasoning: "Quantum computing sentiment surging following Google's Willow chip announcement. IonQ benefits from the 'rising tide lifts all boats' narrative in quantum. Government funding announcements for quantum research create positive headlines. Social media buzz around quantum AI applications drives retail interest. Political emphasis on quantum supremacy for national security amplifies the narrative.",
    signals: ["Quantum Hype", "Google Catalyst", "Government Funding", "National Security Theme"],
    sources: [
      { title: "Google Willow Announcement", url: "https://blog.google/quantum" },
      { title: "IonQ Press Releases", url: "https://ionq.com/news" },
      { title: "Quantum Computing Report", url: "https://www.quantumcomputingreport.com" }
    ]
  },
  {
    symbol: "RIVN",
    name: "Rivian Automotive",
    price: 14.25,
    change: 0.85,
    changePercent: 6.34,
    score: 76,
    reasoning: "Rivian sentiment improving with production ramp and VW partnership validation. The Amazon delivery van contract provides revenue visibility and brand credibility. Social sentiment shows 'Tesla alternative' positioning gaining traction. Political support for EV infrastructure spending benefits the sector. Community forums show strong owner advocacy driving organic marketing.",
    signals: ["VW Partnership", "Amazon Contract", "EV Infrastructure", "Owner Advocacy"],
    sources: [
      { title: "VW Partnership Details", url: "https://www.volkswagen-newsroom.com/rivian" },
      { title: "Rivian Production Updates", url: "https://rivian.com/stories" },
      { title: "EV Market Analysis", url: "https://www.electrek.co" }
    ]
  },
  {
    symbol: "AFRM",
    name: "Affirm Holdings",
    price: 72.30,
    change: 5.10,
    changePercent: 7.59,
    score: 74,
    reasoning: "Buy-now-pay-later sentiment recovering as credit concerns ease. Affirm's zero-interest products differentiate from competitors facing regulatory scrutiny. Holiday shopping season drives usage and merchant adoption narratives. Social analysis shows 'responsible BNPL' positioning resonating. Political discussions around credit card reform indirectly benefit transparent BNPL providers.",
    signals: ["BNPL Recovery", "Holiday Catalyst", "Regulatory Differentiation", "Credit Reform Theme"],
    sources: [
      { title: "Affirm Investor Relations", url: "https://investors.affirm.com" },
      { title: "BNPL Market Report", url: "https://www.pymnts.com/bnpl" },
      { title: "Consumer Credit Analysis", url: "https://www.consumerfinance.gov" }
    ]
  }
];

export const politicsStocks: Stock[] = [
  {
    symbol: "LMT",
    name: "Lockheed Martin",
    price: 512.30,
    change: 8.45,
    changePercent: 1.68,
    score: 97,
    reasoning: "Defense spending surge following geopolitical tensions in Eastern Europe and Middle East. Bipartisan support for $886B defense budget ensures multi-year contract visibility. F-35 program expansion to NATO allies accelerating. AI analysis of congressional voting patterns shows unanimous defense funding support. Short-term dip after budget delay announcement presents buying opportunity as AI predicts quick resolution.",
    signals: ["Defense Budget Surge", "NATO Expansion", "Bipartisan Support", "Geopolitical Catalyst"],
    sources: [
      { title: "Defense Budget Analysis", url: "https://www.defense.gov/budget" },
      { title: "NATO Procurement News", url: "https://www.nato.int/cps/procurement" },
      { title: "Congressional Defense Votes", url: "https://www.congress.gov/defense" },
      { title: "Reuters Defense Report", url: "https://www.reuters.com/defense" }
    ],
    metrics: { pe: 18.2, marketCap: "125B", volume: "1.2M", rsi: 58 }
  },
  {
    symbol: "RTX",
    name: "RTX Corporation",
    price: 124.80,
    change: 3.20,
    changePercent: 2.63,
    score: 94,
    reasoning: "Raytheon missiles in high demand following Middle East conflicts. Patriot system orders from allies creating record backlog. Political pressure for domestic weapons manufacturing benefits US defense contractors. AI analysis shows defense contractor sentiment at 5-year highs following international incidents. Recent stock weakness from engine recall provides discounted entry as issue is contained.",
    signals: ["Missile Demand Surge", "Patriot Orders", "Domestic Manufacturing", "Recall Recovery"],
    sources: [
      { title: "Patriot System Orders", url: "https://www.rtx.com/news/patriot" },
      { title: "Defense Contract Awards", url: "https://www.defense.gov/contracts" },
      { title: "Weapons Export Data", url: "https://www.state.gov/defense-exports" },
      { title: "RTX Investor Updates", url: "https://www.rtx.com/investors" }
    ],
    metrics: { pe: 21.5, marketCap: "168B", volume: "4.8M", rsi: 52 }
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil",
    price: 118.45,
    change: 2.15,
    changePercent: 1.85,
    score: 91,
    reasoning: "Energy independence narrative strengthening with political focus on domestic production. OPEC+ supply cuts creating favorable pricing environment. Permian Basin expansion positions XOM for increased output. AI analysis of energy policy statements suggests regulatory easing ahead. Short-term panic from climate litigation headlines overblown—AI predicts settlement with minimal impact.",
    signals: ["Energy Independence", "OPEC+ Tailwind", "Permian Growth", "Regulatory Easing"],
    sources: [
      { title: "OPEC+ Decision", url: "https://www.opec.org/opec_web" },
      { title: "Energy Policy Updates", url: "https://www.energy.gov/policy" },
      { title: "Exxon Permian News", url: "https://corporate.exxonmobil.com/permian" },
      { title: "Oil Price Analysis", url: "https://oilprice.com" }
    ],
    metrics: { pe: 13.8, marketCap: "475B", volume: "15.2M", rsi: 55 }
  },
  {
    symbol: "GD",
    name: "General Dynamics",
    price: 298.60,
    change: 5.40,
    changePercent: 1.84,
    score: 89,
    reasoning: "Submarine construction backlog at record levels following AUKUS agreement. Virginia-class demand from Australia adds decades of revenue visibility. Gulfstream business jet orders recovering with corporate travel rebound. AI analysis of defense appropriations shows submarine funding as untouchable. Political consensus on naval superiority ensures sustained spending.",
    signals: ["AUKUS Catalyst", "Submarine Backlog", "Naval Supremacy", "Gulfstream Recovery"],
    sources: [
      { title: "AUKUS Agreement Details", url: "https://www.whitehouse.gov/aukus" },
      { title: "Navy Shipbuilding Plan", url: "https://www.navy.mil/shipbuilding" },
      { title: "General Dynamics IR", url: "https://investorrelations.gd.com" },
      { title: "Defense News Report", url: "https://www.defensenews.com" }
    ],
    metrics: { pe: 19.4, marketCap: "82B", volume: "890K", rsi: 61 }
  },
  {
    symbol: "GEO",
    name: "GEO Group Inc",
    price: 34.25,
    change: 4.85,
    changePercent: 16.49,
    score: 87,
    reasoning: "Private prison stocks surging on immigration enforcement expectations. ICE contract renewals and expansions accelerating. AI analysis of border policy statements predicts increased detention capacity needs. Political shift toward stricter immigration creates multi-year tailwind. Recent executive orders signal immediate demand increase for detention facilities.",
    signals: ["Immigration Policy", "ICE Contracts", "Detention Demand", "Policy Shift"],
    sources: [
      { title: "ICE Contract Awards", url: "https://www.ice.gov/contracts" },
      { title: "Immigration Policy Updates", url: "https://www.dhs.gov/immigration" },
      { title: "GEO Group News", url: "https://www.geogroup.com/news" },
      { title: "Border Security Analysis", url: "https://www.cbp.gov/newsroom" }
    ],
    metrics: { pe: 8.2, marketCap: "4.2B", volume: "8.5M", rsi: 72 }
  },
  {
    symbol: "FANG",
    name: "Diamondback Energy",
    price: 178.90,
    change: 4.30,
    changePercent: 2.46,
    score: 85,
    reasoning: "Permian Basin pure-play benefits from drill-baby-drill policy direction. Federal land lease approvals expected to accelerate. Low-cost producer positioned to gain market share. AI analysis shows energy sector sentiment improving on policy expectations. Recent acquisition of Endeavor Energy creates scale advantages and synergy opportunities.",
    signals: ["Policy Tailwind", "Permian Pure-Play", "Lease Acceleration", "M&A Synergies"],
    sources: [
      { title: "BLM Lease Updates", url: "https://www.blm.gov/oil-gas" },
      { title: "Diamondback Investor News", url: "https://ir.diamondbackenergy.com" },
      { title: "Permian Basin Report", url: "https://www.eia.gov/petroleum/drilling" },
      { title: "Energy M&A News", url: "https://www.spglobal.com/energy" }
    ],
    metrics: { pe: 10.5, marketCap: "52B", volume: "2.1M", rsi: 57 }
  },
  {
    symbol: "NUE",
    name: "Nucor Corporation",
    price: 156.20,
    change: 3.80,
    changePercent: 2.49,
    score: 83,
    reasoning: "Steel tariff expectations driving domestic producer sentiment. Infrastructure bill implementation creating sustained demand. AI analysis of trade policy rhetoric predicts tariff increases on Chinese steel. Reshoring trend benefits US manufacturers with capacity. Recent announcements on tariff extensions provide near-term catalyst.",
    signals: ["Tariff Expectations", "Infrastructure Demand", "Reshoring Trend", "Domestic Production"],
    sources: [
      { title: "Steel Tariff Updates", url: "https://www.commerce.gov/steel-tariffs" },
      { title: "Infrastructure Spending", url: "https://www.whitehouse.gov/infrastructure" },
      { title: "Nucor Press Releases", url: "https://www.nucor.com/news" },
      { title: "Steel Market Analysis", url: "https://www.steelonthenet.com" }
    ],
    metrics: { pe: 11.2, marketCap: "38B", volume: "1.5M", rsi: 54 }
  },
  {
    symbol: "DJT",
    name: "Trump Media & Tech",
    price: 52.80,
    change: 8.90,
    changePercent: 20.29,
    score: 81,
    reasoning: "Truth Social user engagement correlates directly with political events. AI analysis shows platform activity spiking during campaign periods. Merger completion removed overhang, now pure sentiment play. Political loyalty of user base provides stable engagement floor. High volatility creates trading opportunities around political announcements.",
    signals: ["Political Correlation", "User Engagement", "Merger Complete", "Volatility Play"],
    sources: [
      { title: "Truth Social Metrics", url: "https://truthsocial.com/about" },
      { title: "DJT SEC Filings", url: "https://www.sec.gov/cgi-bin/browse-edgar?company=djt" },
      { title: "Social Media Analysis", url: "https://www.similarweb.com" },
      { title: "Political Event Calendar", url: "https://www.politico.com/calendar" }
    ],
    metrics: { pe: undefined, marketCap: "10.5B", volume: "45M", rsi: 78 }
  },
  {
    symbol: "CVX",
    name: "Chevron Corporation",
    price: 162.30,
    change: 2.45,
    changePercent: 1.53,
    score: 79,
    reasoning: "LNG export expansion aligns with energy security priorities. Hess acquisition adds Guyana exposure with massive reserves. AI analysis of energy policy indicates support for natural gas as transition fuel. Political framing of gas as clean energy benefits integrated majors. Venezuela sanctions relief creates potential upside catalyst.",
    signals: ["LNG Expansion", "Hess Acquisition", "Gas Transition", "Sanctions Optionality"],
    sources: [
      { title: "LNG Export Data", url: "https://www.energy.gov/lng" },
      { title: "Chevron Hess Deal", url: "https://www.chevron.com/hess" },
      { title: "Venezuela Sanctions", url: "https://www.state.gov/venezuela-sanctions" },
      { title: "Natural Gas Outlook", url: "https://www.eia.gov/naturalgas" }
    ],
    metrics: { pe: 14.2, marketCap: "295B", volume: "6.8M", rsi: 51 }
  },
  {
    symbol: "CXW",
    name: "CoreCivic Inc",
    price: 28.40,
    change: 3.95,
    changePercent: 16.17,
    score: 77,
    reasoning: "Private corrections operator benefits from policy shift on incarceration. State-level contracts expanding as federal narrative shifts. AI analysis of corrections spending shows bipartisan state-level support. Recent executive actions on crime create favorable operating environment. Short-term volatility from policy announcements creates entry points as AI predicts sustained demand.",
    signals: ["Corrections Demand", "State Contracts", "Crime Policy", "Federal Tailwind"],
    sources: [
      { title: "DOJ Corrections Policy", url: "https://www.justice.gov/corrections" },
      { title: "CoreCivic News", url: "https://www.corecivic.com/news" },
      { title: "State Corrections Budgets", url: "https://www.vera.org/incarceration" },
      { title: "Crime Policy Analysis", url: "https://www.brennancenter.org" }
    ],
    metrics: { pe: 12.8, marketCap: "3.2B", volume: "5.2M", rsi: 69 }
  }
];

// Overall best picks combining analysis from all categories
export const overallStocks: Stock[] = [
  {
    symbol: "NVDA",
    name: "NVIDIA Corporation",
    price: 142.85,
    change: 4.23,
    changePercent: 3.05,
    score: 99,
    reasoning: "NVIDIA ranks #1 overall due to exceptional confluence across all factors. Technical analysis shows RSI momentum with MA breakout and strong volume. Sentiment analysis reveals AI dominance narrative at peak enthusiasm. Political tailwinds from CHIPS Act funding and defense AI contracts. The rare combination of technical strength, retail passion, and policy support makes this the top pick.",
    signals: ["Technical Breakout", "AI Leader", "Policy Beneficiary", "Triple Confluence"],
    sources: [
      { title: "Goldman Sachs Price Target", url: "https://www.goldmansachs.com/insights/nvda" },
      { title: "CHIPS Act Analysis", url: "https://www.commerce.gov/chips" },
      { title: "AI Sentiment Report", url: "https://www.wsj.com/ai-stocks" }
    ],
    metrics: { pe: 65.2, marketCap: "3.5T", volume: "45.2M", rsi: 62 }
  },
  {
    symbol: "PLTR",
    name: "Palantir Technologies",
    price: 78.45,
    change: 4.23,
    changePercent: 5.70,
    score: 96,
    reasoning: "Palantir shows exceptional strength across sentiment and political factors with solid technicals. AIP platform adoption drives social buzz while defense contracts align with spending priorities. S&P 500 inclusion provides institutional validation. The defense-AI narrative creates a unique cross-category moat that few competitors can match.",
    signals: ["Defense AI Leader", "S&P 500 Entry", "Contract Pipeline", "Sentiment Peak"],
    sources: [
      { title: "Palantir Contract Wins", url: "https://www.palantir.com/newsroom" },
      { title: "Defense Spending Bill", url: "https://www.defense.gov/budget" },
      { title: "Reddit Sentiment Analysis", url: "https://reddit.com/r/wallstreetbets/pltr" }
    ]
  },
  {
    symbol: "RTX",
    name: "RTX Corporation",
    price: 124.85,
    change: 2.95,
    changePercent: 2.42,
    score: 94,
    reasoning: "RTX combines strong technical fundamentals with massive political tailwinds from defense spending increases. NATO expansion and Middle East tensions create sustained demand. The stock shows accumulation patterns while benefiting from bipartisan defense support. Sentiment analysis shows 'defense play' trending among institutional investors.",
    signals: ["Defense Demand", "NATO Expansion", "Technical Strength", "Bipartisan Support"],
    sources: [
      { title: "RTX Investor Relations", url: "https://www.rtx.com/investors" },
      { title: "NATO Defense Spending", url: "https://www.nato.int/defense-spending" },
      { title: "Defense Sector Analysis", url: "https://www.defensenews.com" }
    ],
    metrics: { pe: 22.5, marketCap: "180B", volume: "8.5M", rsi: 58 }
  },
  {
    symbol: "TSLA",
    name: "Tesla Inc",
    price: 425.80,
    change: 18.45,
    changePercent: 4.53,
    score: 92,
    reasoning: "Tesla scores high across sentiment and politics with improving technicals. Political connections provide regulatory clarity while FSD momentum drives retail enthusiasm. Technical consolidation suggests breakout potential. Energy storage business adds diversification beyond auto narrative. Cross-category strength makes this a top overall pick.",
    signals: ["Political Alignment", "FSD Momentum", "Energy Storage", "Retail Favorite"],
    sources: [
      { title: "Tesla Investor Relations", url: "https://ir.tesla.com" },
      { title: "Autonomous Regulations", url: "https://www.nhtsa.gov/autonomous-vehicles" },
      { title: "Energy Storage Report", url: "https://www.eia.gov/storage" }
    ]
  },
  {
    symbol: "LMT",
    name: "Lockheed Martin",
    price: 542.30,
    change: 12.80,
    changePercent: 2.42,
    score: 90,
    reasoning: "Lockheed combines defensive technical characteristics with maximum political exposure. F-35 program provides decades of revenue visibility. Hypersonics and space divisions offer growth optionality. Bipartisan defense support ensures stable demand regardless of election outcomes. Technical analysis shows consistent uptrend with low volatility.",
    signals: ["F-35 Visibility", "Hypersonics Leader", "Political Shield", "Stable Uptrend"],
    sources: [
      { title: "Lockheed Martin News", url: "https://www.lockheedmartin.com/news" },
      { title: "F-35 Program Update", url: "https://www.f35.com" },
      { title: "Defense Budget Analysis", url: "https://www.csis.org/defense" }
    ],
    metrics: { pe: 18.9, marketCap: "130B", volume: "1.2M", rsi: 55 }
  },
  {
    symbol: "COIN",
    name: "Coinbase Global",
    price: 312.50,
    change: 22.30,
    changePercent: 7.68,
    score: 88,
    reasoning: "Coinbase benefits from crypto regulatory optimism across political and sentiment factors. SEC leadership changes anticipated to be favorable. Bitcoin ETF success validates custody business. Social sentiment shows 'crypto spring' narrative gaining momentum. Technical bounce from support creates attractive entry point.",
    signals: ["Regulatory Shift", "ETF Catalyst", "Sentiment Recovery", "Support Bounce"],
    sources: [
      { title: "SEC Crypto Policy", url: "https://www.sec.gov/crypto" },
      { title: "Bitcoin ETF Flows", url: "https://www.theblock.co/bitcoin-etf" },
      { title: "Coinbase Earnings", url: "https://investor.coinbase.com" }
    ]
  },
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 428.50,
    change: 2.85,
    changePercent: 0.67,
    score: 86,
    reasoning: "Microsoft provides balanced exposure across all categories with minimal downside. Technical golden cross with Azure growth acceleration. Copilot AI integration drives sentiment momentum. Government cloud contracts provide political stability. The ultimate defensive AI play with exposure to enterprise, cloud, and gaming.",
    signals: ["Golden Cross", "Azure Growth", "AI Copilot", "Government Cloud"],
    sources: [
      { title: "Morgan Stanley Research", url: "https://www.morganstanley.com/ideas/msft-outlook" },
      { title: "Azure Revenue Report", url: "https://www.microsoft.com/investor/reports" },
      { title: "Government Cloud", url: "https://azure.microsoft.com/government" }
    ],
    metrics: { pe: 36.8, marketCap: "3.2T", volume: "18.7M", rsi: 58 }
  },
  {
    symbol: "XOM",
    name: "Exxon Mobil",
    price: 118.45,
    change: 3.20,
    changePercent: 2.78,
    score: 84,
    reasoning: "Exxon combines defensive value with political tailwinds from energy policy shifts. Pioneer acquisition adds Permian scale. Dividend aristocrat status appeals to income investors. AI analysis shows energy independence narrative benefiting integrated majors. Technical support at 200-day MA provides entry point with defined risk.",
    signals: ["Pioneer Synergies", "Energy Policy", "Dividend Strength", "Value Play"],
    sources: [
      { title: "Exxon Pioneer Deal", url: "https://corporate.exxonmobil.com/pioneer" },
      { title: "Energy Policy Update", url: "https://www.energy.gov" },
      { title: "Dividend Analysis", url: "https://www.dividendchannel.com/xom" }
    ],
    metrics: { pe: 13.8, marketCap: "475B", volume: "14.2M", rsi: 52 }
  },
  {
    symbol: "META",
    name: "Meta Platforms Inc",
    price: 612.30,
    change: 8.45,
    changePercent: 1.40,
    score: 82,
    reasoning: "Meta shows technical cup-and-handle pattern with improving sentiment metrics. AI monetization through ads drives fundamental strength. Reality Labs narrative improving with Quest success. Political risk from antitrust appears manageable in current environment. Cross-category strength in technicals and sentiment outweighs moderate political uncertainty.",
    signals: ["Cup & Handle", "AI Ads Growth", "VR Momentum", "Margin Expansion"],
    sources: [
      { title: "JPMorgan META Analysis", url: "https://www.jpmorgan.com/insights/meta" },
      { title: "Meta Earnings", url: "https://investor.fb.com/earnings" },
      { title: "VR Market Report", url: "https://www.statista.com/vr-market" }
    ],
    metrics: { pe: 28.4, marketCap: "1.6T", volume: "12.3M", rsi: 55 }
  },
  {
    symbol: "GEO",
    name: "The GEO Group",
    price: 32.80,
    change: 4.65,
    changePercent: 16.52,
    score: 80,
    reasoning: "GEO provides maximum political exposure with improving sentiment and technical breakout. Immigration policy shifts create demand catalyst. ICE contract renewals provide revenue visibility. Technical analysis shows breakout from multi-year base. Sentiment recovery as ESG concerns take backseat to earnings growth narrative.",
    signals: ["Policy Catalyst", "Contract Visibility", "Technical Breakout", "Sentiment Shift"],
    sources: [
      { title: "GEO Group News", url: "https://www.geogroup.com/news" },
      { title: "ICE Detention Data", url: "https://www.ice.gov/detention" },
      { title: "Immigration Policy Update", url: "https://www.dhs.gov/immigration" }
    ],
    metrics: { pe: 15.2, marketCap: "4.0B", volume: "8.5M", rsi: 72 }
  }
];

export interface BacktestDay {
  date: string;
  stocks: {
    symbol: string;
    recommendedPrice: number;
    closePrice: number;
    returnPercent: number;
  }[];
  avgReturn: number;
}

export interface BacktestWeek {
  weekStart: string;
  weekEnd: string;
  days: BacktestDay[];
  avgWeeklyReturn: number;
  accuracy: number;
  totalIfBought: number;
}

export const backtestData: BacktestWeek[] = [
  {
    weekStart: "2024-12-02",
    weekEnd: "2024-12-06",
    avgWeeklyReturn: 4.2,
    accuracy: 78,
    totalIfBought: 4200,
    days: [
      {
        date: "2024-12-02",
        avgReturn: 2.8,
        stocks: [
          { symbol: "NVDA", recommendedPrice: 138.50, closePrice: 142.10, returnPercent: 2.6 },
          { symbol: "PLTR", recommendedPrice: 72.30, closePrice: 76.80, returnPercent: 6.2 },
          { symbol: "TSLA", recommendedPrice: 398.00, closePrice: 410.50, returnPercent: 3.1 }
        ]
      },
      {
        date: "2024-12-03",
        avgReturn: 3.5,
        stocks: [
          { symbol: "META", recommendedPrice: 598.20, closePrice: 618.40, returnPercent: 3.4 },
          { symbol: "COIN", recommendedPrice: 295.00, closePrice: 308.20, returnPercent: 4.5 },
          { symbol: "LMT", recommendedPrice: 498.50, closePrice: 505.80, returnPercent: 1.5 }
        ]
      },
      {
        date: "2024-12-04",
        avgReturn: 5.1,
        stocks: [
          { symbol: "RKLB", recommendedPrice: 24.50, closePrice: 27.20, returnPercent: 11.0 },
          { symbol: "IONQ", recommendedPrice: 38.90, closePrice: 42.30, returnPercent: 8.7 },
          { symbol: "SMCI", recommendedPrice: 38.20, closePrice: 41.50, returnPercent: 8.6 }
        ]
      },
      {
        date: "2024-12-05",
        avgReturn: 4.8,
        stocks: [
          { symbol: "GOOGL", recommendedPrice: 185.40, closePrice: 191.20, returnPercent: 3.1 },
          { symbol: "RTX", recommendedPrice: 118.90, closePrice: 124.50, returnPercent: 4.7 },
          { symbol: "GEO", recommendedPrice: 28.50, closePrice: 32.80, returnPercent: 15.1 }
        ]
      },
      {
        date: "2024-12-06",
        avgReturn: 4.8,
        stocks: [
          { symbol: "AMZN", recommendedPrice: 218.30, closePrice: 225.80, returnPercent: 3.4 },
          { symbol: "XOM", recommendedPrice: 112.50, closePrice: 118.20, returnPercent: 5.1 },
          { symbol: "HOOD", recommendedPrice: 38.90, closePrice: 42.80, returnPercent: 10.0 }
        ]
      }
    ]
  },
  {
    weekStart: "2024-12-09",
    weekEnd: "2024-12-13",
    avgWeeklyReturn: 3.8,
    accuracy: 82,
    totalIfBought: 3800,
    days: [
      {
        date: "2024-12-09",
        avgReturn: 3.2,
        stocks: [
          { symbol: "MSFT", recommendedPrice: 420.50, closePrice: 428.30, returnPercent: 1.9 },
          { symbol: "PLTR", recommendedPrice: 76.80, closePrice: 78.90, returnPercent: 2.7 },
          { symbol: "LMT", recommendedPrice: 505.80, closePrice: 512.40, returnPercent: 1.3 }
        ]
      },
      {
        date: "2024-12-10",
        avgReturn: 4.5,
        stocks: [
          { symbol: "TSLA", recommendedPrice: 410.50, closePrice: 425.80, returnPercent: 3.7 },
          { symbol: "GD", recommendedPrice: 290.20, closePrice: 298.60, returnPercent: 2.9 },
          { symbol: "RIVN", recommendedPrice: 12.80, closePrice: 14.20, returnPercent: 10.9 }
        ]
      },
      {
        date: "2024-12-11",
        avgReturn: 2.9,
        stocks: [
          { symbol: "NVDA", recommendedPrice: 142.10, closePrice: 142.85, returnPercent: 0.5 },
          { symbol: "COIN", recommendedPrice: 308.20, closePrice: 312.50, returnPercent: 1.4 },
          { symbol: "FANG", recommendedPrice: 172.30, closePrice: 178.90, returnPercent: 3.8 }
        ]
      },
      {
        date: "2024-12-12",
        avgReturn: 4.2,
        stocks: [
          { symbol: "META", recommendedPrice: 618.40, closePrice: 612.30, returnPercent: -1.0 },
          { symbol: "DJT", recommendedPrice: 42.50, closePrice: 52.80, returnPercent: 24.2 },
          { symbol: "SOFI", recommendedPrice: 15.20, closePrice: 16.85, returnPercent: 10.9 }
        ]
      },
      {
        date: "2024-12-13",
        avgReturn: 4.2,
        stocks: [
          { symbol: "TSM", recommendedPrice: 198.50, closePrice: 205.80, returnPercent: 3.7 },
          { symbol: "NUE", recommendedPrice: 150.80, closePrice: 156.20, returnPercent: 3.6 },
          { symbol: "AFRM", recommendedPrice: 68.20, closePrice: 72.30, returnPercent: 6.0 }
        ]
      }
    ]
  }
];
