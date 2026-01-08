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
