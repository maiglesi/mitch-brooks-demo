/*
 * Slide Data Configuration - Mitch Brooks (High Street Equity Partners)
 * Narrative: The Intuitive AI Operating System
 */

const INVESTOR_NAME = "Mitch Brooks";

const INVESTOR_PROFILE = {
  name: "Mitch Brooks",
  title: "Managing Partner & Co-Founder",
  firm: "High Street Equity Partners",
  focus: [
    "Future of Work",
    "Health Tech",
    "Underrepresented Founders",
  ],
  credentials: "MBA (FAMU), Former COO (DSI)",
  region: "Washington, DC / Little Rock, AR",
};

const VC_DEMO_PROFILE = {
  fundName: INVESTOR_PROFILE.firm,
  fundShort: "HSEP",
  thesis: "Equity gap closure for service-heavy founders",
  focusThemes: INVESTOR_PROFILE.focus,
  stageFocus: "Seed to Series A",
  portfolioCount: 42,
  targetCompany: "ChargerHelp!",
  targetStage: "Series A",
  marketSector: "Future of Work Infrastructure",
  memoStatus: "DRAFTING",
  raiseAmount: "$2.5M",
  raiseStage: "Pre-seed",
  runwayAllocation: "$1.5M",
  runwayMonths: 18,
  plgBudget: "$1.0M",
  plgDemoCount: "100k",
  plgConversionMin: "2%",
  plgConversionTarget: "7%",
  demoAccess: "24 hours",
  timeToValue: "20-30 minutes",
  loiSeats: "30",
  loiSeatsTarget: "100+",
  seatPrice: "$10k / seat / year",
  verticals: ["Construction", "CPA firms", "MSPs", "Retail", "Consultants", "Startups"],
  launchWindow: "Late Jan / Early Feb",
  marketCaptureTarget: "20%+",
  riskNote: "Competitors reaching customers first",
};

const SLIDES = [
  {
    id: "title",
    type: "slide",
    content: `
            <div class="flex flex-col justify-center h-full text-center">
                <span class="deck-label">INVESTOR BRIEFING • 2026</span>
                <h1 class="deck-title" style="font-size: 72px; line-height: 1.1;">The Intuitive<br>Enterprise.</h1>
                <p class="deck-subtitle mx-auto max-w-2xl">The first AI-native operating system that works the way humans think.</p>
                
                <div class="mt-12 flex justify-center">
                    <div class="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm">
                        <div class="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs font-bold">M</div>
                        <div>
                            <div class="text-sm font-bold text-slate-900">MyCOO Universal Canvas</div>
                            <div class="text-[10px] text-slate-500 uppercase tracking-wide">Live Prototype v2.0</div>
                        </div>
                    </div>
                </div>

                <div class="mt-16 text-xs font-mono text-slate-400 animate-pulse">
                    [ Press Space to Begin ]
                </div>
            </div>
        `,
    cooMessage:
      "Welcome, Mitch. I've prepared a demonstration tailored to High Street Equity Partners' focus on the Future of Work and closing the equity gap.",
    agents: [
      {
        name: "Research Agent",
        status: "ready",
        statusText: "HSEP Thesis Loaded",
        model: "gemini",
      },
      {
        name: "Strategy Agent",
        status: "ready",
        statusText: "Narrative Locked",
        model: "claude",
      },
    ],
  },
  {
        id: 'problem',
        type: 'slide',
        content: `
            <div class="deck-grid-2">
                <div>
                    <span class="deck-label text-red-600">MARKET OPPORTUNITY</span>
                    <h2 class="deck-title">The Agentic AI Gap.</h2>
                    <p class="deck-subtitle text-base">Massive market with no clear winner.</p>
                    <p class="text-sm text-slate-600 mt-6 leading-relaxed">
                        Businesses are adopting AI tools in fragments—no memory, no coordination, no orchestration. The market needs a single platform that simplifies agentic AI. We are that platform.
                    </p>
                </div>

                <div class="bg-white border border-slate-200 rounded-lg p-8 shadow-sm h-full flex flex-col justify-center">
                    <div class="mb-6">

                        <h3 class="font-bold text-slate-900">Why Now?</h3>

                    </div>

                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div class="mt-1 text-red-500 font-bold">&bull;</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">Adoption vs. Fragmentation</div>
                                <div class="text-xs text-slate-500 mt-1">AI adoption is accelerating, but tool sprawl is creating chaos.</div>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="mt-1 text-red-500 font-bold">&bull;</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">Orchestration is Unsolved</div>
                                <div class="text-xs text-slate-500 mt-1">Single-agent tools exist. Multi-agent orchestration is the blue ocean.</div>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="mt-1 text-red-500 font-bold">&bull;</div>
                            <div>
                                <div class="font-bold text-sm text-slate-900">First-Mover Advantage</div>
                                <div class="text-xs text-slate-500 mt-1">Defining the "AI COO" category before incumbents adapt.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        cooMessage: "The market is flooded with tools but starving for orchestration. We aren't just another tool; we are the platform that makes all other tools work together.",
        agents: [
            { name: "Market Agent", status: "working", statusText: "Analyzing market fragmentation", model: "claude", progress: 85 }
        ]
    },
    {
    id: "solution",
    type: "slide",
    content: `
            <div class="h-full flex flex-col justify-center">
                <div class="mb-16 text-center">
                    <span class="deck-label text-emerald-600">THE SOLUTION</span>
                    <h2 class="deck-title">The Simple AI Platform.</h2>
                    <p class="deck-subtitle mx-auto max-w-2xl">Users don't want "AI Tools." They want a competent worker. We hide the complexity to give them exactly that.</p>
                </div>

                <div class="grid grid-cols-3 gap-8">
                    <!-- The Interface -->
                    <div class="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div class="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            <span class="font-mono text-xs uppercase tracking-widest text-slate-400">Interface</span>
                        </div>
                        <h3 class="font-bold text-lg text-slate-900 mb-3 text-center">The Simple Worker</h3>
                        <p class="text-sm text-slate-600 text-center leading-relaxed">
                            An easy-to-use interface that figures it out. No complex prompting. You just delegate, and the worker executes.
                        </p>
                    </div>

                    <!-- The Backend -->
                    <div class="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div class="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            <span class="font-mono text-xs uppercase tracking-widest text-slate-400">Infrastructure</span>
                        </div>
                        <h3 class="font-bold text-lg text-slate-900 mb-3 text-center">Hidden Complexity</h3>
                        <p class="text-sm text-slate-600 text-center leading-relaxed">
                            We solve the hard problems in the backend—memory, context, routing—so the user never sees the mess, only the result.
                        </p>
                    </div>

                    <!-- The Network -->
                    <div class="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div class="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                            <span class="font-mono text-xs uppercase tracking-widest text-slate-400">Network</span>
                        </div>
                        <h3 class="font-bold text-lg text-slate-900 mb-3 text-center">Connected Value</h3>
                        <p class="text-sm text-slate-600 text-center leading-relaxed">
                            <span class="text-xs uppercase tracking-wide font-bold text-emerald-600 block mb-1">IN DEVELOPMENT</span>
                            Connecting to specialized AIs for deep value. Example: <strong>tryflume.ai</strong> for automated construction material sourcing.
                        </p>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "Complexity belongs in the code, not in the user's face. I am the interface that makes AI simple, useful, and connected.",
    agents: [
      {
        name: "COO Agent",
        status: "ready",
        statusText: "Orchestration Mode: Active",
        model: "claude",
      },
      {
        name: "Swarm",
        status: "ready",
        statusText: "Waiting for signal",
        model: "mixed",
      },
    ],
  },
  {
    id: "mission-hico",
    type: "slide",
    content: `
            <div class="deck-grid-2">
                <div>
                    <span class="deck-label text-emerald-600">MISSION 01: CREATION</span>
                    <h2 class="deck-title">Instant Digital Reality.</h2>
                    <p class="deck-subtitle text-base">HICO Construction. A traditional business needing a digital face. The user said: "Build me a site." MyCOO did the rest.</p>
                    
                    <div class="mt-8">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="font-mono text-xs bg-slate-100 px-2 py-1 rounded">Step 1</span>
                            <span class="text-sm">Gemini researches competitors & trends.</span>
                        </div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="font-mono text-xs bg-slate-100 px-2 py-1 rounded">Step 2</span>
                            <span class="text-sm">Claude writes SEO-optimized copy.</span>
                        </div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="font-mono text-xs bg-slate-100 px-2 py-1 rounded">Step 3</span>
                            <span class="text-sm">Swarm generates logo & brand palette.</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="font-mono text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Result</span>
                            <span class="text-sm font-bold text-emerald-600">Full Website Deployed in 20 Mins.</span>
                        </div>
                    </div>

                    <button class="btn-primary mt-8" onclick="App.openViewer('assets/hico-website-mockup.html', 'HICO Construction Website', 'mode-web')">
                        View Generated Site →
                    </button>
                </div>
                <div class="relative h-full bg-slate-100 rounded-lg overflow-hidden border border-slate-200 group cursor-pointer shadow-lg transition-transform hover:scale-[1.02]" onclick="App.openViewer('assets/hico-website-mockup.html', 'HICO Construction Website', 'mode-web')">
                     <iframe src="assets/hico-website-mockup.html" class="w-full h-full pointer-events-none border-none"></iframe>
                     <div class="absolute inset-0 bg-transparent group-hover:bg-black/5 transition-colors flex items-center justify-center">
                        <span class="opacity-0 group-hover:opacity-100 bg-white/90 px-4 py-2 rounded-full shadow-sm text-xs font-bold transition-opacity">Click to Preview</span>
                     </div>
                </div>
            </div>
        `,
    cooMessage:
      "This wasn't a template. The agents wrote the code, wrote the copy, and designed the assets. This is generative product development.",
    agents: [
      {
        name: "Design Agent",
        status: "done",
        statusText: "Assets Deployed",
        model: "gemini",
      },
      {
        name: "Dev Agent",
        status: "done",
        statusText: "Code Shipped",
        model: "gpt",
      },
    ],
  },
  {
    id: "mission-orbiss",
    type: "slide",
    content: `
            <div class="flex flex-col h-full">
                <div class="mb-8">
                    <span class="deck-label text-purple-600">MISSION 02: STRATEGY</span>
                    <h2 class="deck-title">Deep Work, Democratized.</h2>
                    <p class="deck-subtitle">Orbiss Tax Advisory. Complex international expansion. We deployed a legal swarm to do the work of a partner-level consultant.</p>
                </div>

                <div class="grid grid-cols-4 gap-4 flex-1">
                    <div class="deck-card bg-purple-50/50 border-purple-100 col-span-1 justify-between">
                        <div>
                            <div class="text-sm font-bold text-purple-900 mb-1">Orbiss Advisory</div>
                            <div class="text-xs text-purple-700">Strategic Client</div>
                        </div>
                        <div>
                            <div class="deck-stat-huge text-purple-900" style="font-size: 48px;">889</div>
                            <div class="text-xs font-mono text-purple-700 mt-1">LINES OF ANALYSIS</div>
                        </div>
                    </div>
                    <div class="col-span-3 bg-white border border-slate-200 rounded-lg overflow-hidden relative shadow-md">
                        <div class="absolute inset-0 overflow-y-auto p-8 font-mono text-xs text-slate-600 leading-relaxed bg-slate-50">
                            <p># European Expansion Strategy v1.0</p>
                            <p class="text-slate-400">Generated by MyCOO Strategic Swarm</p>
                            <br/>
                            <p>## 1. Executive Summary</p>
                            <p>The opportunity for US-based tax advisory in the EU market represents a $4B TAM...</p>
                            <br/>
                            <p>## 2. Regulatory Compliance (NYLLCTA)</p>
                            <p>Analysis of New York LLC Transparency Act implications for cross-border entities...</p>
                            <br/>
                            <p>## 3. Financial Projections (3-Year)</p>
                            <p>| Year | Revenue | EBITDA |</p>
                            <p>|------|---------|--------|</p>
                            <p>| 2026 | $2.4M   | $0.4M  |</p>
                            <br/>
                            <p class="text-blue-600">[... 800+ lines of analysis ...]</p>
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none flex items-end justify-center pb-8">
                            <button class="btn-primary shadow-lg pointer-events-auto bg-purple-600 hover:bg-purple-700 text-white" onclick="App.openViewer('assets/european-expansion-strategy.html', 'Orbiss Strategy', 'doc')">
                                Read Full Document →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "Most AI summarizes. MyCOO analyzes. We handled complex tax law, financial modeling, and market entry strategy. This is high-value, billable work.",
    agents: [
      {
        name: "Legal Agent",
        status: "done",
        statusText: "Regulatory Analysis",
        model: "claude",
      },
      {
        name: "Finance Agent",
        status: "done",
        statusText: "Financial Modeling",
        model: "gpt",
      },
    ],
  },
  {
    id: "mission-neuromart",
    type: "slide",
    content: `
            <div class="deck-grid-2">
                <!-- Left: Text -->
                <div>
                    <span class="deck-label text-orange-600">MISSION 03: RECRUITMENT</span>
                    <h2 class="deck-title">Attracting Top Tier Talent.</h2>
                    <p class="deck-subtitle text-base">Abiy built Walmart's location platform and exited the "Amazon of Ethiopia". He was building his own retail AI, saw MyCOO, and decided to join us instead.</p>
                    
                    <div class="mt-8 bg-orange-50 p-6 rounded-lg border border-orange-100">
                        <div class="flex items-center gap-4 mb-4">
                             <div class="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-800 font-bold text-xl">A</div>
                             <div>
                                <div class="font-bold text-sm text-slate-900">Abiy's Story</div>
                                <div class="text-xs text-secondary">Former Chegg | Walmart Platform Lead</div>
                             </div>
                        </div>
                        <p class="text-sm text-slate-700 italic">"I've built massive retail systems. MyCOO is the platform I was trying to build. I want to lead the retail vertical here."</p>
                    </div>

                    <button class="btn-primary mt-8 bg-orange-600 hover:bg-orange-700 text-white" onclick="App.openViewer('https://maiglesi.github.io/neuromart-deck/', 'Neuromart Deck', 'deck')">
                        View Neuromart Vision →
                    </button>
                </div>

                <!-- Right: Visual -->
                <div class="relative h-full w-full bg-[#F4F4F0] rounded-lg border border-slate-200 shadow-xl overflow-hidden group cursor-pointer" onclick="App.openViewer('https://maiglesi.github.io/neuromart-deck/', 'Neuromart Deck', 'deck')">
                    
                    <!-- Swiss Graph Paper Background -->
                    <div class="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                    <!-- Slide Content -->
                    <div class="relative h-full flex flex-col p-12">
                        <!-- Top Bar -->
                        <div class="flex justify-between items-center border-b border-[#1A1A1A] pb-4 mb-8">
                            <span class="font-sans font-bold text-[#1A1A1A] text-xs tracking-widest">DEC 2025</span>
                            <span class="font-sans font-bold text-[#1A1A1A] text-xs tracking-widest">CONFIDENTIAL</span>
                        </div>

                        <!-- Main Title Area -->
                        <div class="flex-1 flex flex-col justify-center border-l-[8px] border-[#C04E35] pl-8">
                            <div class="font-sans font-extrabold text-[#1A1A1A] leading-[0.8] mb-4" style="font-size: 5rem;">
                                N<span style="color:#C04E35">M</span>
                            </div>
                            <h3 class="font-serif text-[#1A1A1A] text-4xl font-bold uppercase tracking-tight mb-4">Neuromart</h3>
                            <p class="font-sans text-[#1A1A1A] text-lg tracking-widest">
                                Retail Science. <span style="color:#C04E35">Applied.</span>
                            </p>
                            
                            <div class="mt-12 pt-6 border-t border-[#1A1A1A] inline-block">
                                <span class="block font-sans text-[10px] text-[#C04E35] font-bold tracking-widest mb-1">PRESENTED BY</span>
                                <div class="font-sans font-bold text-[#1A1A1A] text-sm">Abiy Selassie</div>
                                <div class="font-sans text-[#1A1A1A] text-xs opacity-70">Founder & CEO</div>
                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="mt-8 pt-4 border-t border-[#1A1A1A] flex justify-between items-end font-sans text-[10px] text-[#1A1A1A]">
                            <span>01 / 12</span>
                            <span>AGENTIC AI FOR MID-MARKET RETAIL</span>
                        </div>
                    </div>

                    <!-- Hover Overlay -->
                    <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                        <span class="bg-[#C04E35] text-white px-6 py-3 rounded-sm text-sm font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-sans tracking-wide uppercase">Open Deck</span>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "Great platforms attract great builders. We aren't just winning customers; we're winning the talent war against major tech companies.",
    agents: [
      {
        name: "Recruiting",
        status: "done",
        statusText: "Talent Acquired",
        model: "claude",
      },
    ],
  },
  {
    id: "revenue-engine",
    type: "slide",
    content: `
            <div class="deck-grid-2">
                <!-- Text Content -->
                <div>
                    <span class="deck-label text-blue-600">MISSION 04: INTELLIGENCE</span>
                    <h2 class="deck-title">Superhuman Sales Ops.</h2>
                    <p class="deck-subtitle text-base">E. & J. Gallo. The goal: Win the account. The method: Total information dominance.</p>
                    
                    <div class="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <div class="text-sm font-bold text-blue-900 mb-2">TARGET: E. & J. Gallo Winery</div>
                        <ul class="space-y-2 text-sm text-blue-800">
                            <li class="flex items-start gap-2"><span class="mt-1 text-blue-600 font-bold">&bull;</span> Deep Web Research (News, Earnings, Podcasts)</li>
                            <li class="flex items-start gap-2"><span class="mt-1 text-blue-600 font-bold">&bull;</span> Psychological Profiling of Decision Makers</li>
                            <li class="flex items-start gap-2"><span class="mt-1 text-blue-600 font-bold">&bull;</span> "Trojan Horse" Strategy Development</li>
                        </ul>
                    </div>

                    <button class="btn-primary mt-8 bg-blue-600 hover:bg-blue-700" onclick="App.openViewer('assets/Megan-Putney-Gallo-Analysis.html', 'Megan Putney Analysis', 'doc')">
                        Open Sales Dossier →
                    </button>
                </div>

                <!-- Visual Content (Dossier Preview) -->
                <div class="relative h-full w-full bg-white rounded-lg border border-slate-200 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500 cursor-pointer group" onclick="App.openViewer('assets/Megan-Putney-Gallo-Analysis.html', 'Megan Putney Analysis', 'doc')">
                    
                    <!-- Document Header -->
                    <div class="h-4 bg-blue-600 w-full"></div>
                    <div class="p-8">
                        <div class="flex justify-between items-start mb-6">
                            <div>
                                <div class="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">CONFIDENTIAL ANALYSIS</div>
                                <h3 class="text-2xl font-serif font-bold text-slate-900">E. & J. Gallo Winery</h3>
                                <div class="text-sm text-slate-500 mt-1">Strategic Account Intelligence</div>
                            </div>
                            <div class="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold border border-slate-200">MP</div>
                        </div>

                        <!-- Content Preview -->
                        <div class="space-y-4">
                            <div>
                                <div class="text-xs font-bold text-slate-900 uppercase border-b border-slate-100 pb-1 mb-2">Executive Summary</div>
                                <p class="text-[10px] text-slate-600 leading-relaxed">
                                    Megan Putney (Director, Commerce Marketing) is driving a digital transformation initiative focused on omnichannel acceleration...
                                </p>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div class="bg-slate-50 p-3 rounded border border-slate-100">
                                    <div class="text-[9px] font-bold text-slate-500 uppercase mb-1">Key Pain Point</div>
                                    <div class="text-[10px] font-semibold text-slate-800">Data Fragmentation</div>
                                </div>
                                <div class="bg-slate-50 p-3 rounded border border-slate-100">
                                    <div class="text-[9px] font-bold text-slate-500 uppercase mb-1">Winning Angle</div>
                                    <div class="text-[10px] font-semibold text-slate-800">Unified Commerce</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                        <span class="bg-blue-600 text-white shadow-lg px-6 py-3 rounded-full text-sm font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform">
                            View Full Analysis
                        </span>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "This is how teams win. No more cold calls. No more guessing. MyCOO gives every employee the intelligence of a dedicated research team.",
    agents: [
      {
        name: "Sales Agent",
        status: "done",
        statusText: "Dossier Complete",
        model: "claude",
      },
    ],
  },
  {
    id: "thesis",
    type: "slide",
    content: `
            <div class="flex flex-col items-center text-center h-full justify-center">
                <span class="deck-label text-purple-600">THE ULTIMATE PROOF</span>
                <h2 class="deck-title">Built By Agents. For You.</h2>
                <p class="deck-subtitle mx-auto max-w-2xl">This entire investor demo—personalized for Mitch Brooks—was built by MyCOO agents.</p>
                
                <div class="mt-8 mb-12 max-w-2xl mx-auto">
                    <p class="text-sm text-slate-600 leading-relaxed">
                        That's our distribution advantage: the moment a customer engages, our agents customize and deliver value instantly. No setup. No onboarding delay. Immediate ROI.
                    </p>
                </div>
                
                <div class="grid grid-cols-3 gap-8 w-full">
                    <div class="p-6 border border-purple-100 bg-purple-50/50 rounded-lg">
                        <div class="mb-4 flex justify-center"><span class="font-mono text-xs text-purple-600">01</span></div>
                        <h3 class="font-bold text-sm text-purple-900">Instant Value</h3>
                        <p class="text-xs text-purple-700 mt-1">Zero-day onboarding. We don't tell you what it does; we show you what it did.</p>
                    </div>
                    <div class="p-6 border border-purple-100 bg-purple-50/50 rounded-lg">
                        <div class="mb-4 flex justify-center"><span class="font-mono text-xs text-purple-600">02</span></div>
                        <h3 class="font-bold text-sm text-purple-900">Self-Building</h3>
                        <p class="text-xs text-purple-700 mt-1">The product builds its own sales assets. This deck is a living artifact.</p>
                    </div>
                    <div class="p-6 border border-purple-100 bg-purple-50/50 rounded-lg">
                        <div class="mb-4 flex justify-center"><span class="font-mono text-xs text-purple-600">03</span></div>
                        <h3 class="font-bold text-sm text-purple-900">Personalized</h3>
                        <p class="text-xs text-purple-700 mt-1">Every touchpoint is custom-tailored by an agent swarm.</p>
                    </div>
                </div>
            </div>
        `,
    cooMessage:
      "I didn't just help build this company. I built this pitch. This is the power of a recursive AI operating system.",
    agents: [
      {
        name: "Pitch Agent",
        status: "done",
        statusText: "Deck Generated",
        model: "gpt",
      },
    ],
  },
  {
    id: "team",
    type: "slide",
    content: `
            <div class="h-full flex flex-col">
                <div class="mb-8 text-center">
                    <span class="deck-label text-slate-500">THE BUILDERS</span>
                    <h2 class="deck-title">A Team Built for Complexity.</h2>
                    <p class="deck-subtitle mx-auto">We aren't just web devs. We are security engineers, infrastructure architects, and intelligence officers who have built systems that cannot fail.</p>
                </div>

                <div class="grid grid-cols-2 gap-8 h-full">
                    
                    <!-- Mauricio -->
                    <div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xl font-bold">MI</div>
                            <div>
                                <h3 class="font-bold text-xl text-slate-900">Mauricio Iglesias</h3>
                                <div class="text-xs font-mono text-emerald-600 mt-1 uppercase tracking-wide">CEO • HF0 Alum • Repeat Founder</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-1">
                            Repeat founder with a successful exit. Built Bastazo to <strong>$3M ARR</strong> in under a year, winning contracts with DOD/DOE. Led orgs of 60+ people. Deep expertise in AI/ML & OT Cybersecurity.
                        </p>
                    </div>

                    <!-- Nate -->
                    <div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xl font-bold">NM</div>
                            <div>
                                <h3 class="font-bold text-xl text-slate-900">Nate McBride</h3>
                                <div class="text-xs font-mono text-blue-600 mt-1 uppercase tracking-wide">Top Secret-Cleared • Deep Defense</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-1">
                            Rebuilt <strong>DARPA's security infra</strong>. Built zero-days, hunted insiders, and conducted red team exercises for three-letter agencies. Expert in forensics & deception infrastructure.
                        </p>
                    </div>

                    <!-- Claire -->
                    <div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xl font-bold">CL</div>
                            <div>
                                <h3 class="font-bold text-xl text-slate-900">Claire Li</h3>
                                <div class="text-xs font-mono text-purple-600 mt-1 uppercase tracking-wide">HF0 Alum • Infrastructure Lead</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-1">
                            <strong>Apple Anti-Fraud</strong> & Palo Alto Networks lead. Architected global cloud infra across US/UK/Aus. Built DevSecOps pipelines reducing weeks of manual work to 18 minutes.
                        </p>
                    </div>

                    <!-- Itay -->
                    <div class="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-all group flex flex-col">
                        <div class="flex items-start gap-4 mb-4">
                            <div class="w-16 h-16 rounded-full bg-slate-900 text-white flex-shrink-0 flex items-center justify-center text-xl font-bold">IY</div>
                            <div>
                                <h3 class="font-bold text-xl text-slate-900">Itay Yaffe</h3>
                                <div class="text-xs font-mono text-orange-600 mt-1 uppercase tracking-wide">IDF Unit 8200 Captain</div>
                            </div>
                        </div>
                        <p class="text-sm text-slate-600 leading-relaxed flex-1">
                            7 years in <strong>Israel's elite intelligence unit</strong>. Led DevOps teams for classified systems. Expert in deploying systems in high-security, air-gapped environments.
                        </p>
                    </div>

                </div>
            </div>
        `,
    cooMessage:
      "We aren't learning on the job. We've secured nations, protected billions of devices, and built exits. We are the team to build the enterprise OS.",
    agents: [
      {
        name: "HR Agent",
        status: "ready",
        statusText: "Team Verified",
        model: "gpt",
      },
    ],
  },
];

const DELIVERABLE_LIBRARY = {
  equityGapScorecard: {
    id: "equity-gap-scorecard",
    title: "Equity Gap Readiness Scorecard",
    badge: "LIVE",
    url: "assets/equity-gap-scorecard.html",
    mode: "doc",
    previewType: "iframe",
    description: "Operational maturity scoring for scale-up readiness.",
    size: { width: 460, height: 300 },
  },
  sprintBoard: {
    id: "sprint-board",
    title: "Service Reliability Sprint Board",
    badge: "LIVE",
    url: "assets/sprint-board.html",
    mode: "web",
    previewType: "iframe",
    description: "Real-time engineering and reliability task management.",
    size: { width: 480, height: 320 },
  },
  reportingHub: {
    id: "reporting-hub",
    title: "Equity Gap Reporting Hub",
    badge: "GROWTH",
    url: "assets/reporting-hub.html",
    mode: "web",
    previewType: "iframe",
    description: "Centralized growth metrics for Series A readiness.",
    size: { width: 460, height: 320 },
  },
  ostiaPanel: {
    id: "ostia-panel",
    title: "Ostia Strategic Monitor",
    badge: "PLATFORM",
    url: "assets/ostia-panel.html",
    mode: "web",
    previewType: "iframe",
    description: "High-level strategic oversight and investor updates.",
    size: { width: 460, height: 300 },
  },
};

const EXPERIENCE_DELIVERABLES = {
  "readiness-audit": [
    DELIVERABLE_LIBRARY.equityGapScorecard,
    DELIVERABLE_LIBRARY.reportingHub,
    DELIVERABLE_LIBRARY.sprintBoard,
  ],
  "reliability-sprint": [
    DELIVERABLE_LIBRARY.sprintBoard,
    DELIVERABLE_LIBRARY.equityGapScorecard,
    DELIVERABLE_LIBRARY.ostiaPanel,
  ],
  "growth-reporting": [
    DELIVERABLE_LIBRARY.reportingHub,
    DELIVERABLE_LIBRARY.ostiaPanel,
    DELIVERABLE_LIBRARY.equityGapScorecard,
  ],
};

const EXPERIENCE = {
  title: `MyCOO for ${VC_DEMO_PROFILE.fundName}`,
  subtitle: "A VC operating system for portfolio oversight, diligence, and IC-ready memos.",
  introMessage:
    `Thanks for the time, ${INVESTOR_PROFILE.name.split(" ")[0]}. I rebuilt this experience to show how we translate your ${VC_DEMO_PROFILE.thesis} thesis into portfolio signals and investor-ready artifacts. I will walk you through four demos and explain the thinking behind each. Any private data stays masked as Pending.`,
  idleAgents: [
    {
      name: "COO Orchestrator",
      status: "watching",
      statusText: "Standing by",
      model: "claude",
    },
    {
      name: "Ops Agent",
      status: "ready",
      statusText: "Operational frameworks loaded",
      model: "gemini",
    },
    {
      name: "Growth Agent",
      status: "ready",
      statusText: "Metric tracking active",
      model: "gpt",
    },
  ],
  layers: [
    {
      id: "fund-health",
      title: "Portfolio Health Monitor",
      subtitle: "Thesis-to-signal translation across the fund.",
      statusLabel: "THINKING MODE",
      prompt:
        "Thinking mode. Normalize portfolio data, flag runway risk, and surface equity-gap insights.",
      scene: "SceneFundHealth",
      activity: [
        { agent: "Ops Agent", text: "Translate fund thesis into health metrics" },
        { agent: "Data Agent", text: "Normalize portfolio KPIs into a shared schema" },
        { agent: "COO Orchestrator", text: "Flag private company data as Pending" },
        { agent: "Strategy Agent", text: "Surface equity-gap risks and action paths" },
        { agent: "Executive Agent", text: "Publish the live portfolio monitor" },
      ],
      duration: 4600,
      coo: {
        start:
          "Demo one is the portfolio health monitor. I start with your thesis, convert it into signals, and keep sensitive company data marked Pending.",
        complete:
          "This gives your IC a live view of where attention is needed right now.",
      },
    },
    {
      id: "market-intel",
      title: "Market Map + Pattern Match",
      subtitle: "Landscape + pattern recognition for faster conviction.",
      statusLabel: "THINKING MODE",
      prompt:
        "Thinking mode. Map the sector, compare the target to winning patterns, and surface comps.",
      scene: "SceneMarketIntel",
      activity: [
        { agent: "Research Agent", text: "Build a sector landscape map" },
        { agent: "Model Agent", text: "Score target vs historical fund patterns" },
        { agent: "Ops Agent", text: "Annotate market risks and capital intensity" },
        { agent: "COO Orchestrator", text: "Prepare IC-ready pattern summary" },
      ],
      duration: 4600,
      coo: {
        start:
          "Next is market intelligence. I map the landscape, compare your target to historical winners, and summarize the match quality.",
        complete:
          "This is how we shorten diligence cycles without losing rigor.",
      },
    },
    {
      id: "deal-memo",
      title: "Deal Memo Generator",
      subtitle: "IC-ready narrative drafted from diligence inputs.",
      statusLabel: "THINKING MODE",
      prompt:
        "Thinking mode. Synthesize diligence, draft memo sections, and highlight risks and mitigants.",
      scene: "SceneDealMemo",
      activity: [
        { agent: "Memo Agent", text: "Draft thesis, market sizing, and product sections" },
        { agent: "Finance Agent", text: "Validate ARR, burn, and runway inputs" },
        { agent: "Risk Agent", text: "Compile risks, mitigants, and open questions" },
        { agent: "COO Orchestrator", text: "Package the IC-ready memo draft" },
      ],
      duration: 4400,
      coo: {
        start:
          "Here is the deal memo generator. I synthesize diligence and produce an IC-ready narrative in minutes.",
        complete:
          "Your team can refine the draft instead of starting from scratch.",
      },
    },
    {
      id: "ostia-memo",
      title: "Ostia Investor Memo",
      subtitle: "Founder-level transparency with IC-ready context.",
      statusLabel: "THINKING MODE",
      prompt:
        "Thinking mode. Compile traction, risks, and asks while keeping sensitive data marked Pending.",
      scene: "SceneOstiaMemo",
      activity: [
        { agent: "Ostia Agent", text: "Compile traction, pipeline, and product signals" },
        { agent: "Finance Agent", text: "Validate burn, runway, and use-of-funds data" },
        { agent: "Compliance Agent", text: "Mask sensitive fields as Pending" },
        { agent: "COO Orchestrator", text: "Finalize the investor memo draft" },
      ],
      duration: 4200,
      coo: {
        start:
          "Finally, the Ostia Investor Memo. I compile traction, risks, and asks in one IC-ready view.",
        complete:
          "That completes the VC demo set. Ready for the next demo when you are.",
      },
    },
  ],
};
