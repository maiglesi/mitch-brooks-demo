/*
 * Component Renderers
 * Translates React components to Vanilla JS Strings
 */

/* --- Role Data (Aligned with Real App) --- */
const DEPARTMENT_ROLES = {
  executive: {
    meta: {
      icon: "👔",
      desc: "Strategy formulation, vision alignment, and orchestration.",
      color: "text-slate-800",
    },
    roles: [
      {
        name: "Chief Executive Officer",
        count: "5 components",
        desc: "Company vision, board reporting, investor relations, and strategic initiatives.",
        icon: "👔",
        slug: "ceo",
      },
      {
        name: "Chief Operating Officer",
        count: "5 components",
        desc: "Operational efficiency, cross-functional orchestration, and process health.",
        icon: "⚡",
        slug: "coo",
      },
      {
        name: "Chief Financial Officer",
        count: "5 components",
        desc: "Financial health, capital allocation, risk management, and unit economics.",
        icon: "💰",
        slug: "cfo",
      },
      {
        name: "Chief Technology Officer",
        count: "5 components",
        desc: "Technology roadmap, engineering velocity, and technical debt management.",
        icon: "🛠️",
        slug: "cto",
      },
      {
        name: "Chief Marketing Officer",
        count: "5 components",
        desc: "Brand positioning, market expansion, and customer acquisition strategy.",
        icon: "📣",
        slug: "cmo",
      },
      {
        name: "Chief Revenue Officer",
        count: "5 components",
        desc: "Revenue growth, sales strategy, and partnership development.",
        icon: "📈",
        slug: "cro",
      },
      {
        name: "Chief HR Officer",
        count: "5 components",
        desc: "Talent strategy, organizational culture, and people operations.",
        icon: "👥",
        slug: "chro",
      },
      {
        name: "Chief Product Officer",
        count: "5 components",
        desc: "Product vision, roadmap alignment, and market fit.",
        icon: "📦",
        slug: "cpo",
      },
      {
        name: "Chief Legal Officer",
        count: "5 components",
        desc: "Legal compliance, risk mitigation, and corporate governance.",
        icon: "⚖️",
        slug: "clo",
      },
    ],
  },
  engineering: {
    meta: {
      icon: "🔧",
      desc: "Technical excellence, infrastructure, and software development",
      color: "text-blue-600",
    },
    roles: [
      {
        name: "Engineering Manager",
        count: "5 components",
        desc: "Team leadership, sprint planning, resource allocation, and technical roadmap.",
        icon: "👔",
        slug: "engineering-manager",
      },
      {
        name: "Frontend Developer",
        count: "5 components",
        desc: "UI development, performance optimization, accessibility, and component libraries.",
        icon: "🎨",
        slug: "frontend-developer",
      },
      {
        name: "Backend Developer",
        count: "5 components",
        desc: "API development, database management, service architecture, and system optimization.",
        icon: "🖥️",
        slug: "backend-developer",
      },
      {
        name: "Fullstack Developer",
        count: "5 components",
        desc: "End-to-end feature development, integration testing, and release management.",
        icon: "🔗",
        slug: "fullstack-developer",
      },
      {
        name: "DevOps Engineer",
        count: "6 components",
        desc: "CI/CD pipelines, infrastructure automation, deployment, and system reliability.",
        icon: "🔄",
        slug: "devops-engineer",
      },
      {
        name: "Data Engineer",
        count: "1 component",
        desc: "Data pipelines, ETL processes, data warehouse management, and analytics infrastructure.",
        icon: "📊",
        slug: "data-engineer",
      },
      {
        name: "Security Engineer",
        count: "5 components",
        desc: "Security monitoring, vulnerability assessment, penetration testing, and access control.",
        icon: "🔒",
        slug: "security-engineer",
      },
      {
        name: "QA Engineer",
        count: "6 components",
        desc: "Test automation, quality assurance, bug triage, and regression analysis.",
        icon: "✅",
        slug: "qa-engineer",
      },
    ],
  },
  finance: {
    meta: {
      icon: "💰",
      desc: "Financial planning, accounting, and fiscal management",
      color: "text-amber-600",
    },
    roles: [
      {
        name: "Controller",
        count: "5 components",
        desc: "Month-end close, internal controls, audit preparation, and financial reporting.",
        icon: "📈",
        slug: "controller",
      },
      {
        name: "FP&A Analyst",
        count: "6 components",
        desc: "Budget planning, scenario analysis, headcount planning, and board reporting.",
        icon: "🎯",
        slug: "fpa-analyst",
      },
      {
        name: "Financial Analyst",
        count: "5 components",
        desc: "Variance analysis, financial modeling, forecasting, and investment analysis.",
        icon: "📊",
        slug: "financial-analyst",
      },
      {
        name: "Treasury Analyst",
        count: "5 components",
        desc: "Cash position monitoring, forecasting, bank relationships, and FX exposure.",
        icon: "🏦",
        slug: "treasury-analyst",
      },
      {
        name: "Tax Specialist",
        count: "4 components",
        desc: "Tax calendar management, provisions, nexus analysis, and transfer pricing.",
        icon: "🏛️",
        slug: "tax-specialist",
      },
      {
        name: "Accountant",
        count: "5 components",
        desc: "Accounts payable/receivable, invoice processing, and reconciliation.",
        icon: "📒",
        slug: "accountant",
      },
      {
        name: "Bookkeeper",
        count: "5 components",
        desc: "Bank reconciliation, expense reports, and transaction categorization.",
        icon: "📚",
        slug: "bookkeeper",
      },
      {
        name: "Payroll Specialist",
        count: "5 components",
        desc: "Payroll processing, time tracking, benefits enrollment, and tax filing.",
        icon: "💵",
        slug: "payroll-specialist",
      },
    ],
  },
  marketing: {
    meta: {
      icon: "📣",
      desc: "Brand management, growth, and content strategy",
      color: "text-teal-600",
    },
    roles: [
      {
        name: "Marketing Manager",
        count: "5 components",
        desc: "Campaign strategy, budget allocation, team coordination, and performance tracking.",
        icon: "🎯",
        slug: "marketing-manager",
      },
      {
        name: "Brand Designer",
        count: "5 components",
        desc: "Visual identity, creative assets, design systems, and brand guidelines.",
        icon: "🎨",
        slug: "brand-designer",
      },
      {
        name: "Content Writer",
        count: "5 components",
        desc: "Blog posts, whitepapers, social copy, SEO optimization, and editorial calendar.",
        icon: "✍️",
        slug: "content-writer",
      },
      {
        name: "SEO Specialist",
        count: "5 components",
        desc: "Keyword research, on-page optimization, technical SEO, and organic growth.",
        icon: "🔍",
        slug: "seo-specialist",
      },
      {
        name: "Paid Media Manager",
        count: "5 components",
        desc: "Ad campaign management, bid optimization, audience targeting, and ROAS analysis.",
        icon: "💰",
        slug: "paid-media-manager",
      },
      {
        name: "Social Media Manager",
        count: "5 components",
        desc: "Community engagement, content scheduling, social listening, and viral growth.",
        icon: "📱",
        slug: "social-media-manager",
      },
      {
        name: "Email Marketing Specialist",
        count: "5 components",
        desc: "Drip campaigns, newsletter automation, list segmentation, and deliverability.",
        icon: "📧",
        slug: "email-marketing",
      },
      {
        name: "Growth Hacker",
        count: "5 components",
        desc: "Viral loops, A/B testing, conversion rate optimization, and rapid experimentation.",
        icon: "🚀",
        slug: "growth-hacker",
      },
    ],
  },
  revenue: {
    meta: {
      icon: "📈",
      desc: "Revenue strategy, sales operations, and customer success",
      color: "text-indigo-600",
    },
    roles: [
      {
        name: "Sales Manager",
        count: "6 components",
        desc: "Pipeline oversight, forecasting, deal inspection, and rep performance.",
        icon: "👔",
        slug: "sales-manager",
      },
      {
        name: "Account Executive",
        count: "5 components",
        desc: "Deal management, proposals, stakeholder mapping, and contract negotiations.",
        icon: "🤝",
        slug: "account-executive",
      },
      {
        name: "Account Manager",
        count: "5 components",
        desc: "Account health, renewals, upselling, and customer relationship management.",
        icon: "📋",
        slug: "account-manager",
      },
      {
        name: "Sales Development Rep",
        count: "5 components",
        desc: "Prospecting, lead scoring, sequences, meetings, and activity metrics.",
        icon: "📞",
        slug: "sdr",
      },
      {
        name: "Customer Success Manager",
        count: "5 components",
        desc: "Customer health, onboarding, adoption metrics, and success planning.",
        icon: "🌟",
        slug: "csm",
      },
      {
        name: "Sales Operations",
        count: "5 components",
        desc: "Sales analytics, territory mapping, compensation, and CRM data quality.",
        icon: "⚙️",
        slug: "sales-ops",
      },
      {
        name: "Partnership Manager",
        count: "5 components",
        desc: "Partner pipeline, scorecards, co-marketing, and integration marketplace.",
        icon: "🔗",
        slug: "partnership-manager",
      },
    ],
  },
  people: {
    meta: {
      icon: "👥",
      desc: "Talent, culture, and organizational health",
      color: "text-rose-600",
    },
    roles: [
      {
        name: "HR Manager",
        count: "5 components",
        desc: "Policy administration, employee relations, compliance, and HR strategy.",
        icon: "👔",
        slug: "hr-manager",
      },
      {
        name: "Recruiter",
        count: "5 components",
        desc: "Sourcing, candidate pipeline, interviewing, and offer management.",
        icon: "🔎",
        slug: "recruiter",
      },
      {
        name: "People Ops Specialist",
        count: "5 components",
        desc: "Onboarding, offboarding, HRIS management, and process efficiency.",
        icon: "⚙️",
        slug: "people-ops",
      },
      {
        name: "L&D Specialist",
        count: "5 components",
        desc: "Training programs, skill gap analysis, learning paths, and workshops.",
        icon: "📚",
        slug: "ld-specialist",
      },
      {
        name: "Comp & Benefits Analyst",
        count: "5 components",
        desc: "Salary benchmarking, benefits administration, equity planning, and total rewards.",
        icon: "💹",
        slug: "comp-benefits",
      },
      {
        name: "Employee Experience",
        count: "5 components",
        desc: "Engagement surveys, culture initiatives, internal events, and recognition.",
        icon: "🎉",
        slug: "employee-experience",
      },
    ],
  },
  product: {
    meta: {
      icon: "📦",
      desc: "Product strategy, design, and development lifecycle",
      color: "text-purple-600",
    },
    roles: [
      {
        name: "Product Manager",
        count: "5 components",
        desc: "Roadmap planning, feature definition, backlog prioritization, and stakeholder management.",
        icon: "🗺️",
        slug: "product-manager",
      },
      {
        name: "Product Analyst",
        count: "5 components",
        desc: "Product metrics, user behavior analysis, cohort retention, and data insights.",
        icon: "📊",
        slug: "product-analyst",
      },
      {
        name: "UX Researcher",
        count: "5 components",
        desc: "User interviews, usability testing, persona development, and research repository.",
        icon: "🔬",
        slug: "ux-researcher",
      },
      {
        name: "UX Designer",
        count: "5 components",
        desc: "Wireframing, prototyping, user flows, and interaction design.",
        icon: "✏️",
        slug: "ux-designer",
      },
      {
        name: "UI Designer",
        count: "5 components",
        desc: "Visual design, high-fidelity mockups, design systems, and icon libraries.",
        icon: "🎨",
        slug: "ui-designer",
      },
      {
        name: "Technical Writer",
        count: "5 components",
        desc: "Documentation, API references, release notes, and user guides.",
        icon: "📝",
        slug: "technical-writer",
      },
    ],
  },
  legal: {
    meta: {
      icon: "⚖️",
      desc: "Risk management, compliance, and legal operations",
      color: "text-slate-600",
    },
    roles: [
      {
        name: "Corporate Counsel",
        count: "5 components",
        desc: "Corporate governance, board materials, entity management, and M&A support.",
        icon: "🏛️",
        slug: "corporate-counsel",
      },
      {
        name: "Contract Specialist",
        count: "5 components",
        desc: "Contract drafting, review, lifecycle management, and template libraries.",
        icon: "📝",
        slug: "contract-specialist",
      },
      {
        name: "Compliance Officer",
        count: "5 components",
        desc: "Regulatory tracking, policy enforcement, audits, and compliance reporting.",
        icon: "🛡️",
        slug: "compliance-officer",
      },
      {
        name: "Employment Counsel",
        count: "5 components",
        desc: "Labor law compliance, workplace policies, investigations, and employment agreements.",
        icon: "👥",
        slug: "employment-counsel",
      },
      {
        name: "IP Counsel",
        count: "5 components",
        desc: "Patent portfolio, trademark management, IP strategy, and licensing agreements.",
        icon: "💡",
        slug: "ip-counsel",
      },
    ],
  },
  operations: {
    meta: {
      icon: "⚙️",
      desc: "Business efficiency, logistics, and process management",
      color: "text-orange-600",
    },
    roles: [
      {
        name: "Operations Manager",
        count: "5 components",
        desc: "Operational dashboard, process optimization, resource allocation, and KPI tracking.",
        icon: "📊",
        slug: "operations-manager",
      },
      {
        name: "Project Manager",
        count: "5 components",
        desc: "Project planning, timeline tracking, risk management, and status reporting.",
        icon: "📅",
        slug: "project-manager",
      },
      {
        name: "Business Analyst",
        count: "5 components",
        desc: "Requirements gathering, process mapping, data analysis, and solution validation.",
        icon: "📈",
        slug: "business-analyst",
      },
      {
        name: "Executive Assistant",
        count: "5 components",
        desc: "Calendar management, travel planning, meeting prep, and correspondence.",
        icon: "📅",
        slug: "executive-assistant",
      },
      {
        name: "Vendor Manager",
        count: "5 components",
        desc: "Vendor selection, contract management, performance evaluation, and procurement.",
        icon: "🤝",
        slug: "vendor-manager",
      },
      {
        name: "Process Improvement",
        count: "5 components",
        desc: "Workflow analysis, automation opportunities, Six Sigma projects, and efficiency metrics.",
        icon: "🔄",
        slug: "process-improvement",
      },
    ],
  },
};

const renderExecutiveDashboard = () => {
  const departments = [
    {
      name: "Revenue",
      head: "Portfolio Pipeline",
      status: "healthy",
      primaryColor: "#14B8A6",
      metrics: [
        {
          label: "Portfolio ARR",
          value: "$12.4M",
          trend: "up",
          trendValue: "+9%",
          history: [55, 60, 68, 72, 80, 86, 90, 95],
        },
        {
          label: "Pipeline",
          value: "$4.2M",
          trend: "flat",
          trendValue: "0%",
          history: [50, 52, 51, 53, 50, 52, 51, 52],
        },
      ],
      alerts: [],
    },
    {
      name: "Operations",
      head: "COO Ops Desk",
      status: "warning",
      primaryColor: "#1E3A5F",
      metrics: [
        {
          label: "Service Coverage",
          value: "78%",
          trend: "up",
          trendValue: "+6%",
          history: [40, 48, 55, 62, 68, 72, 74, 78],
        },
        {
          label: "Sprint Velocity",
          value: "34 pts",
          trend: "up",
          trendValue: "+4%",
          history: [30, 32, 33, 35, 36, 34, 33, 34],
        },
      ],
      alerts: [{ id: "ops1", message: "ChargerHelp! reliability sprint staffing gap", severity: "medium" }],
    },
    {
      name: "Engineering",
      head: "Reliability Pod",
      status: "healthy",
      primaryColor: "#3B82F6",
      metrics: [
        {
          label: "Uptime",
          value: "99.3%",
          trend: "up",
          trendValue: "+0.4%",
          history: [96, 97, 98, 98, 99, 99, 99, 99],
        },
        {
          label: "Response SLA",
          value: "2.1h",
          trend: "down",
          trendValue: "-0.3h",
          history: [70, 66, 60, 58, 54, 52, 48, 44],
        },
      ],
      alerts: [],
    },
    {
      name: "Finance",
      head: "Capital Ops",
      status: "healthy",
      primaryColor: "#F59E0B",
      metrics: [
        {
          label: "Runway",
          value: "18 mo",
          trend: "flat",
          trendValue: "0%",
          history: [50, 50, 49, 49, 48, 48, 48, 48],
        },
        {
          label: "Burn",
          value: "$450k",
          trend: "down",
          trendValue: "-5%",
          history: [80, 78, 75, 70, 68, 65, 60, 55],
        },
      ],
      alerts: [],
    },
    {
      name: "Equity Impact",
      head: "Founder Enablement",
      status: "warning",
      primaryColor: "#EC4899",
      metrics: [
        {
          label: "Founder Support",
          value: "62%",
          trend: "up",
          trendValue: "+8%",
          history: [40, 42, 45, 48, 52, 56, 58, 62],
        },
        {
          label: "Engagement",
          value: "71",
          trend: "down",
          trendValue: "-3",
          history: [80, 78, 76, 75, 74, 73, 72, 71],
        },
      ],
      alerts: [
        { id: "eq1", message: "Impact data still Pending for 2 portfolio companies", severity: "high" },
      ],
    },
  ];

  const renderTrend = (metric) => {
    if (metric.trend === "flat") {
      return `<span class="text-[var(--text-secondary)] font-mono text-xs font-bold">→</span>`;
    }
    const isUp = metric.trend === "up";
    const color = isUp ? "text-[var(--status-working-text)]" : "text-[#991B1B]";
    const icon = isUp ? "↗" : "↘";
    return `<span class="${color} font-mono text-xs font-bold">${icon}</span>`;
  };

  const renderSparkline = (history, color) =>
    history
      .map(
        (value) => `
        <div class="flex-1 rounded-t-[1px]" style="height: ${value}%; background-color: ${color};"></div>
    `
      )
      .join("");

  return `
        <div class="font-sans text-[var(--text-primary)]">
            <div class="w-full bg-[var(--bg-surface)] border border-[var(--border)] rounded-[4px] shadow-[var(--shadow-float)] flex flex-col overflow-hidden">
                <div class="h-[48px] bg-[#FAFAF8] border-b border-[var(--border)] px-5 flex items-center justify-between shrink-0">
                    <div class="flex items-center gap-3">
                        <span class="text-lg">🏛️</span>
                        <span class="text-[14px] font-[600] text-[var(--text-primary)] tracking-tight">Portfolio Health Brief</span>
                        <span class="font-mono text-[10px] uppercase bg-[#F3F4F6] text-[var(--text-secondary)] px-2 py-0.5 rounded-sm tracking-wider">
                            Live
                        </span>
                    </div>
                    <div class="flex gap-2">
                        <div class="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                        <div class="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                        <div class="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                    </div>
                </div>

                <div class="p-8 bg-[var(--bg-surface)] overflow-y-auto max-h-[760px]">
                    <div class="mb-8 flex justify-between items-end">
                        <div>
                            <h1 class="text-2xl font-semibold text-[var(--text-primary)] mb-1">Portfolio Health</h1>
                            <p class="text-[var(--text-secondary)] text-sm">Operating signals aligned to HSEP's equity gap thesis.</p>
                        </div>
                        <div class="text-right">
                            <div class="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider mb-1">ARR Floor</div>
                            <div class="text-xl font-mono font-medium text-[var(--text-primary)]">$100k+</div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${departments
                          .map((dept) => {
                            const statusDot =
                              dept.status === "healthy"
                                ? "bg-[#22C55E]"
                                : dept.status === "warning"
                                  ? "bg-[#F59E0B]"
                                  : "bg-[#EF4444]";
                            return `
                            <div class="group border border-[var(--border)] rounded-[4px] p-5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow duration-200 bg-[var(--bg-page)]/50 hover:bg-[var(--bg-surface)]">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="flex items-center gap-2">
                                        <div class="w-2 h-2 rounded-full ${statusDot}"></div>
                                        <span class="font-semibold text-[15px]">${dept.name}</span>
                                    </div>
                                    <span class="text-xs text-[var(--text-muted)]">${dept.head}</span>
                                </div>

                                <div class="space-y-4 mb-4">
                                    ${dept.metrics
                                      .map(
                                        (metric) => `
                                        <div class="flex items-center justify-between">
                                            <div class="flex flex-col">
                                                <span class="text-[11px] text-[var(--text-muted)] uppercase tracking-wide">${metric.label}</span>
                                                <div class="flex items-center gap-1.5">
                                                    <span class="font-mono text-lg font-medium">${metric.value}</span>
                                                    <span class="text-xs flex items-center gap-0.5 bg-opacity-10 rounded px-1">
                                                        ${renderTrend(metric)}
                                                        <span class="font-mono text-[10px] ${
                                                          metric.trend === "up"
                                                            ? "text-[var(--status-working-text)]"
                                                            : metric.trend === "down"
                                                              ? "text-[#991B1B]"
                                                              : "text-[var(--text-secondary)]"
                                                        }">
                                                            ${metric.trendValue}
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="flex items-end gap-[2px] h-8 w-16 opacity-80">
                                                ${renderSparkline(metric.history, dept.primaryColor)}
                                            </div>
                                        </div>
                                    `
                                      )
                                      .join("")}
                                </div>

                                ${
                                  dept.alerts.length > 0
                                    ? `
                                    <div class="mt-4 pt-3 border-t border-[var(--border)] space-y-2">
                                        ${dept.alerts
                                          .map(
                                            (alert) => `
                                            <div class="flex items-start gap-2 text-xs">
                                                <span class="mt-0.5">${alert.severity === "high" ? "🔴" : "🟠"}</span>
                                                <span class="text-[var(--text-secondary)] leading-tight">${alert.message}</span>
                                            </div>
                                        `
                                          )
                                          .join("")}
                                    </div>
                                `
                                    : `
                                    <div class="mt-4 pt-3 border-t border-[var(--border)] min-h-[24px]">
                                        <span class="text-[11px] text-[var(--status-working-text)] flex items-center gap-1">
                                            ✓ No active alerts
                                        </span>
                                    </div>
                                `
                                }
                            </div>
                        `;
                          })
                          .join("")}
                    </div>

                    <div class="mt-8 pt-6 border-t border-[var(--border)] flex justify-between items-center text-xs text-[var(--text-muted)]">
                        <span>Last updated: Just now</span>
                        <div class="flex gap-4">
                            <span class="hover:text-[var(--text-primary)] cursor-pointer">View Portfolio Notes →</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderTaskProgressTracker = () => {
  const tasks = [
    {
      id: "HSEP-014",
      title: "Equity Gap Readiness Audit",
      type: "Ops",
      assignee: { name: "Ops Agent", initials: "OA", color: "#1E3A5F" },
      status: "in_progress",
      progress: 62,
    },
    {
      id: "HSEP-018",
      title: "ChargerHelp! Reliability Sprint",
      type: "Engineering",
      assignee: { name: "Eng Agent", initials: "EA", color: "#3B82F6" },
      status: "in_progress",
      progress: 48,
    },
    {
      id: "HSEP-021",
      title: "Founder Enablement Playbook",
      type: "Strategy",
      assignee: { name: "COO", initials: "CO", color: "#14B8A6" },
      status: "blocked",
      progress: 15,
      blockers: ["Pending founder input"],
    },
    {
      id: "HSEP-024",
      title: "Impact Metrics Rollup",
      type: "Finance",
      assignee: { name: "Finance Agent", initials: "FA", color: "#F59E0B" },
      status: "pending",
      progress: 0,
    },
    {
      id: "HSEP-026",
      title: "Board Narrative Draft",
      type: "Reporting",
      assignee: { name: "Strategy Agent", initials: "SA", color: "#8B5CF6" },
      status: "completed",
      progress: 100,
    },
  ];

  const statusStyles = {
    in_progress: { bg: "var(--status-working-bg)", text: "var(--status-working-text)", label: "WORKING" },
    blocked: { bg: "#FEF2F2", text: "#991B1B", label: "BLOCKED" },
    completed: { bg: "var(--status-ready-bg)", text: "var(--status-ready-text)", label: "DONE" },
    pending: { bg: "var(--status-waiting-bg)", text: "var(--status-waiting-text)", label: "WAITING" },
  };

  return `
        <div class="w-full flex flex-col overflow-hidden rounded-[4px] border shadow-sm h-full" style="background-color: var(--bg-surface); border-color: var(--border); box-shadow: var(--shadow-md); font-family: var(--font-sans);">
            <div class="h-[48px] px-5 flex items-center justify-between border-b shrink-0" style="background-color: #FAFAF8; border-color: var(--border);">
                <div class="flex items-center gap-3">
                    <span class="text-lg">📋</span>
                    <h3 class="text-[14px] font-semibold text-[var(--text-primary)]">Service-Heavy Sprint Plan</h3>
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-gray-100 text-gray-500 uppercase">Live View</span>
                </div>
                <div class="flex gap-2">
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                </div>
            </div>

            <div class="flex-1 p-6 overflow-y-auto">
                <div class="flex flex-col gap-4">
                    ${tasks
                      .map((task) => {
                        const status = statusStyles[task.status];
                        return `
                        <div class="group p-4 rounded border transition-all hover:shadow-sm" style="background-color: white; border-color: var(--border);">
                            <div class="flex justify-between items-start mb-3">
                                <div class="flex gap-3">
                                    <div class="w-8 h-8 rounded flex items-center justify-center text-[10px] font-bold text-white shrink-0" style="background-color: ${task.assignee.color};">
                                        ${task.assignee.initials}
                                    </div>
                                    <div>
                                        <h4 class="text-[14px] font-medium text-[var(--text-primary)] leading-tight">${task.title}</h4>
                                        <div class="flex items-center gap-2 mt-1">
                                            <span class="text-[10px] font-mono text-[var(--text-secondary)]">${task.id}</span>
                                            <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span class="text-[11px] text-[var(--text-secondary)]">${task.type}</span>
                                        </div>
                                    </div>
                                </div>
                                <span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-medium" style="background-color: ${status.bg}; color: ${status.text};">
                                    ${status.label}
                                </span>
                            </div>

                            <div class="pl-11">
                                ${
                                  task.status === "blocked"
                                    ? `
                                    <div class="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-2 rounded border border-red-100 mb-2">
                                        <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        <span class="text-xs font-medium">Blocked by: ${task.blockers.join(", ")}</span>
                                    </div>
                                `
                                    : ""
                                }

                                <div class="flex items-center gap-3">
                                    <div class="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div class="h-full rounded-full transition-all duration-500 ease-out" style="width: ${task.progress}%; background-color: ${
                                          task.status === "completed" ? "var(--accent-green, #22C55E)" : task.assignee.color
                                        };"></div>
                                    </div>
                                    <span class="text-[11px] font-mono font-medium text-[var(--text-secondary)] w-8 text-right">${task.progress}%</span>
                                </div>
                            </div>
                        </div>
                    `;
                      })
                      .join("")}
                </div>

                <div class="mt-6 pt-4 border-t border-[var(--border)] flex justify-between items-center text-xs text-[var(--text-secondary)]">
                    <span>5 Active Tasks</span>
                    <div class="flex gap-4">
                        <span class="flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-[var(--status-working-bg)] border border-[var(--status-working-text)]"></span>
                            On Track
                        </span>
                        <span class="flex items-center gap-1.5">
                            <span class="w-2 h-2 rounded-full bg-red-100 border border-red-600"></span>
                            Attention Needed
                        </span>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderApprovalWorkflowCard = () => {
  const approvals = [
    {
      id: "REQ-2026-014",
      title: "Portfolio Readiness Scorecard",
      type: "policy",
      requester: { name: "Ops Lead", role: "Portfolio Ops" },
      approvers: [
        { initials: "MB", name: "Mitch Brooks", status: "pending" },
        { initials: "TW", name: "Tristan Wilkerson", status: "pending" },
      ],
      status: "review",
      deadline: "2 days left",
    },
    {
      id: "REQ-2026-021",
      title: "Service-Heavy Sprint Budget",
      type: "budget",
      requester: { name: "COO Agent", role: "MyCOO" },
      approvers: [
        { initials: "MB", name: "Mitch Brooks", status: "approved" },
      ],
      status: "approved",
      deadline: "Completed",
      amount: "$42,000",
    },
    {
      id: "REQ-2026-027",
      title: "LP Impact Brief Share",
      type: "contract",
      requester: { name: "Finance Agent", role: "Fund Ops" },
      approvers: [
        { initials: "MB", name: "Mitch Brooks", status: "approved" },
        { initials: "LP", name: "LP Liaison", status: "pending" },
      ],
      status: "pending",
      deadline: "Tomorrow",
    },
  ];

  const getTypeColor = (type) => {
    if (type === "budget") return "bg-amber-100 text-amber-800 border-amber-200";
    if (type === "contract") return "bg-blue-100 text-blue-800 border-blue-200";
    if (type === "policy") return "bg-purple-100 text-purple-800 border-purple-200";
    return "bg-gray-100 text-gray-800 border-gray-200";
  };

  const getStatusBadge = (status) => {
    if (status === "pending") return `<span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#DCFCE7] text-[#166534]">Pending</span>`;
    if (status === "approved") return `<span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#E0E7FF] text-[#3730A3]">Approved</span>`;
    if (status === "review") return `<span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#FEF3C7] text-[#854D0E]">Review</span>`;
    return `<span class="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-red-100 text-red-800">Rejected</span>`;
  };

  const getApproverColor = (status) => {
    if (status === "approved") return "bg-green-100 text-green-700 ring-2 ring-white";
    if (status === "rejected") return "bg-red-100 text-red-700 ring-2 ring-white";
    return "bg-gray-100 text-gray-500 ring-2 ring-white";
  };

  return `
        <div class="w-full max-w-4xl mx-auto bg-[#FFFFFF] border border-[#EAEAEA] rounded-[4px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden">
            <div class="h-[48px] bg-[#FAFAF8] border-b border-[#EAEAEA] px-5 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <span class="text-lg">✅</span>
                    <span class="text-sm font-semibold text-[#1C1B1A]">Approval Queue</span>
                    <span class="px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded text-[10px] font-mono">ACTIVE</span>
                </div>
                <div class="flex gap-2">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                </div>
            </div>

            <div class="p-8 flex flex-col gap-6">
                <div class="flex justify-between items-end border-b border-[#EAEAEA] pb-4">
                    <div>
                        <h2 class="text-xl font-semibold text-[#1C1B1A]">Decision Chain</h2>
                        <p class="text-sm text-[#5C5A56] mt-1">
                            Approvals tied to HSEP portfolio enablement.
                        </p>
                    </div>
                    <button class="px-4 py-2 bg-[#1C1B1A] text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
                        Review All
                    </button>
                </div>

                <div class="flex flex-col gap-4">
                    ${approvals
                      .map(
                        (item) => `
                        <div class="group relative p-5 rounded-lg border border-[#EAEAEA] bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-200 cursor-pointer">
                            <div class="flex justify-between items-start mb-3">
                                <div class="flex items-center gap-3">
                                    <span class="px-2 py-1 rounded-md text-[10px] font-mono font-medium uppercase border ${getTypeColor(item.type)}">
                                        ${item.type}
                                    </span>
                                    <span class="text-xs font-mono text-[#5C5A56]">${item.id}</span>
                                </div>
                                ${getStatusBadge(item.status)}
                            </div>

                            <div class="flex justify-between items-center mb-4">
                                <div>
                                    <h3 class="text-base font-semibold text-[#1C1B1A] mb-1 group-hover:text-blue-600 transition-colors">
                                        ${item.title}
                                    </h3>
                                    <div class="flex items-center gap-2 text-sm text-[#5C5A56]">
                                        <span>Requested by <span class="font-medium text-[#1C1B1A]">${item.requester.name}</span></span>
                                        <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                                        <span>${item.requester.role}</span>
                                        ${
                                          item.amount
                                            ? `
                                            <span class="w-1 h-1 rounded-full bg-gray-300"></span>
                                            <span class="font-mono text-[#1C1B1A]">${item.amount}</span>
                                        `
                                            : ""
                                        }
                                    </div>
                                </div>
                                <div class="text-right">
                                    <div class="text-xs text-[#5C5A56] mb-1 uppercase font-mono tracking-wider">Deadline</div>
                                    <div class="text-sm font-medium ${item.deadline === "Urgent" ? "text-red-600" : "text-[#1C1B1A]"}">
                                        ${item.deadline}
                                    </div>
                                </div>
                            </div>

                            <div class="flex items-center justify-between pt-4 border-t border-dashed border-[#EAEAEA]">
                                <div class="flex items-center gap-3">
                                    <span class="text-xs text-[#5C5A56] font-medium">Chain of Command:</span>
                                    <div class="flex -space-x-2">
                                        ${item.approvers
                                          .map(
                                            (approver) => `
                                            <div class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getApproverColor(approver.status)}" title="${approver.name} (${approver.status})">
                                                ${approver.initials}
                                            </div>
                                        `
                                          )
                                          .join("")}
                                        <div class="w-8 h-8 rounded-full border border-dashed border-gray-300 flex items-center justify-center bg-transparent text-gray-400 text-xs ring-2 ring-white">
                                            +
                                        </div>
                                    </div>
                                </div>
                                <div class="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button class="p-2 hover:bg-green-50 text-green-600 rounded-md transition-colors" title="Quick Approve">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                    </button>
                                    <button class="p-2 hover:bg-red-50 text-red-600 rounded-md transition-colors" title="Reject">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `;
};

const renderBoardReportView = () => {
  const report = {
    period: "Q1 2026",
    date: "January 6, 2026",
    author: "MyCOO",
    summary:
      "HSEP portfolio companies above the $100k ARR floor are accelerating. The main bottleneck is service-heavy execution capacity; we are offsetting it with sprint pods and verified impact metrics.",
    highlights: [
      { category: "ARR Floor", value: "$100k+", change: "Coverage: 83%", sentiment: "positive" },
      { category: "Growth", value: "6 Portfolio Wins", change: "+2 QoQ", sentiment: "positive" },
      { category: "Equity Impact", value: "42 Founders", change: "Verified", sentiment: "neutral" },
      { category: "Runway", value: "18 Months", change: "On plan", sentiment: "neutral" },
    ],
    financials: [
      { metric: "Portfolio ARR", q3: "$10.8M", q4: "$12.4M", variance: "+15%" },
      { metric: "Gross Margin", q3: "68%", q4: "70%", variance: "+2%" },
      { metric: "Service Coverage", q3: "62%", q4: "78%", variance: "+16%" },
      { metric: "Impact Reporting", q3: "Pending", q4: "78% Verified", variance: "+18%" },
      { metric: "Cash Burn", q3: "$480k", q4: "$450k", variance: "-6%" },
      { metric: "Cash on Hand", q3: "$6.2M", q4: "$5.9M", variance: "" },
    ],
    challenges: [
      {
        title: "Service Capacity",
        severity: "high",
        desc: "Reliability pods need 2 additional operators to sustain ChargerHelp! sprint velocity.",
      },
      {
        title: "Impact Verification",
        severity: "medium",
        desc: "Two portfolio companies still pending survey validation for equity gap KPIs.",
      },
    ],
    asks: [
      "Confirm pilot cohort for the next 30/60/90 operating cadence.",
      "Share LP reporting priorities for the 2026 impact narrative.",
      "Approve expansion of the reliability sprint pod by 2 contractors.",
    ],
  };

  return `
        <div class="artifact-card flex flex-col bg-[var(--bg-surface)] border border-[var(--border)] rounded-[4px] overflow-hidden" style="width: 100%; max-width: 960px; height: 640px; box-shadow: var(--shadow-float);">
            <div class="artifact-header h-[48px] border-b border-[var(--border)] px-5 flex items-center justify-between bg-[#FAFAFA]">
                <div class="flex items-center gap-3">
                    <span class="text-lg">📊</span>
                    <span class="text-[13px] font-medium text-[#1C1B1A]">Board Update_Q1_2026.pdf</span>
                    <span class="label px-1 py-0.5 rounded-[2px] font-mono text-[10px] uppercase tracking-wider bg-[#F1F3F5] text-[#495057]">Draft</span>
                </div>
                <div class="flex gap-2">
                    <div class="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                    <div class="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]"></div>
                </div>
            </div>

            <div class="artifact-body p-8 overflow-y-auto">
                <div class="flex justify-between items-end border-b border-[var(--border)] pb-4 mb-8">
                    <div>
                        <h1 class="text-2xl font-semibold text-[var(--text-primary)] tracking-tight">Executive Board Update</h1>
                        <p class="text-sm text-[var(--text-secondary)] mt-1 font-mono">Period: ${report.period} • ${report.date}</p>
                    </div>
                    <div class="text-right">
                        <div class="inline-flex items-center gap-1.5 px-2 py-1 bg-red-50 text-red-700 rounded text-[10px] font-bold uppercase tracking-wider border border-red-100">
                            <span class="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                            Confidential
                        </div>
                        <p class="text-xs text-[var(--text-secondary)] mt-2">Prep: ${report.author}</p>
                    </div>
                </div>

                <section>
                    <h3 class="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">01. Performance Highlights</h3>
                    <p class="text-sm text-[var(--text-primary)] mb-6 leading-relaxed max-w-2xl">${report.summary}</p>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        ${report.highlights
                          .map((item) => {
                            const sentimentClass =
                              item.sentiment === "positive"
                                ? "text-emerald-600"
                                : item.sentiment === "negative"
                                  ? "text-red-600"
                                  : "text-[var(--text-secondary)]";
                            return `
                            <div class="p-4 bg-[var(--bg-page)] border border-[var(--border)] rounded flex flex-col gap-1">
                                <span class="text-[11px] text-[var(--text-secondary)] uppercase font-semibold">${item.category}</span>
                                <span class="text-xl font-bold text-[#1E3A5F]">${item.value}</span>
                                <span class="text-xs font-medium ${sentimentClass}">${item.change}</span>
                            </div>
                        `;
                          })
                          .join("")}
                    </div>
                </section>

                <section class="mt-8">
                    <h3 class="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">02. Financial Overview</h3>
                    <div class="border border-[var(--border)] rounded overflow-hidden">
                        <table class="w-full text-sm text-left">
                            <thead class="bg-[var(--bg-page)] text-[var(--text-secondary)] font-medium border-b border-[var(--border)]">
                                <tr>
                                    <th class="px-4 py-3 font-medium">Metric</th>
                                    <th class="px-4 py-3 font-medium text-right">Q4 Actual</th>
                                    <th class="px-4 py-3 font-medium text-right">Q1 Actual</th>
                                    <th class="px-4 py-3 font-medium text-right">Variance</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-[var(--border)]">
                                ${report.financials
                                  .map(
                                    (row) => `
                                    <tr class="hover:bg-[var(--bg-page)]">
                                        <td class="px-4 py-3 font-medium text-[var(--text-primary)]">${row.metric}</td>
                                        <td class="px-4 py-3 text-right font-mono text-[var(--text-secondary)]">${row.q3}</td>
                                        <td class="px-4 py-3 text-right font-mono text-[var(--text-primary)]">${row.q4}</td>
                                        <td class="px-4 py-3 text-right font-mono font-medium ${row.variance.startsWith("+") ? "text-emerald-600" : row.variance.startsWith("-") ? "text-red-600" : "text-[var(--text-secondary)]"}">
                                            ${row.variance}
                                        </td>
                                    </tr>
                                `
                                  )
                                  .join("")}
                            </tbody>
                        </table>
                    </div>
                </section>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <section>
                        <h3 class="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">03. Key Risks & Challenges</h3>
                        <div class="flex flex-col gap-3">
                            ${report.challenges
                              .map(
                                (risk) => `
                                <div class="flex gap-3 items-start p-3 border border-[var(--border)] rounded bg-[var(--bg-surface)]">
                                    <div class="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${risk.severity === "high" ? "bg-red-500" : "bg-amber-400"}"></div>
                                    <div>
                                        <h4 class="text-sm font-semibold text-[var(--text-primary)]">${risk.title}</h4>
                                        <p class="text-xs text-[var(--text-secondary)] mt-1 leading-normal">${risk.desc}</p>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </section>
                    <section>
                        <h3 class="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-3">04. Board Asks</h3>
                        <ul class="list-disc list-outside ml-4 space-y-2">
                            ${report.asks
                              .map(
                                (ask) => `
                                <li class="text-sm text-[var(--text-primary)] pl-1 marker:text-[#1E3A5F]">${ask}</li>
                            `
                              )
                              .join("")}
                        </ul>
                        <div class="mt-4 p-3 bg-blue-50 border border-blue-100 rounded text-xs text-blue-800 flex items-center gap-2">
                            <span>ℹ️</span>
                            <span>Next LP sync: Feb 2, 2026 (Virtual)</span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    `;
};

const VC_PROFILE =
  typeof VC_DEMO_PROFILE !== "undefined" ? VC_DEMO_PROFILE : {};
const VC_FUND =
  VC_PROFILE.fundShort ||
  VC_PROFILE.fundName ||
  (typeof INVESTOR_PROFILE !== "undefined" ? INVESTOR_PROFILE.firm : "Your Fund");
const VC_TARGET = VC_PROFILE.targetCompany || "TargetCo";
const VC_STAGE = VC_PROFILE.targetStage || "Series A";
const VC_SECTOR = VC_PROFILE.marketSector || "Future of Work Infrastructure";

const renderStartupHealthMonitor = () => {
  const portfolio = [
    { name: VC_TARGET, sector: "Future of Work", cash: "18 mo", burn: "$350k", status: "healthy" },
    { name: "HealthFlow", sector: "Health Tech", cash: "6 mo", burn: "$1.2M", status: "critical" },
    { name: "LogiTech", sector: "Logistics", cash: "24 mo", burn: "$150k", status: "healthy" },
    { name: "FinPulse", sector: "FinTech", cash: "10 mo", burn: "$400k", status: "warning" },
    { name: "SecureDocs", sector: "Security", cash: "14 mo", burn: "$200k", status: "healthy" },
    { name: "RetailAI", sector: "E-com", cash: "4 mo", burn: "$800k", status: "critical" },
  ];

  const statusPill = {
    critical: "bg-[#FEE2E2] text-[#991B1B]",
    warning: "bg-[#FEF3C7] text-[#92400E]",
    healthy: "bg-[#DCFCE7] text-[#166534]",
  };

  const statusLabel = {
    critical: "Urgent",
    warning: "Watch",
    healthy: "Good",
  };

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Portfolio Health Monitor</span>
                    <span class="artifact-badge bg-red-100 text-red-700">2 CRITICAL</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full flex-col bg-white">
                <div class="h-[80px] border-b border-[var(--border)] flex divide-x divide-[var(--border)]">
                    <div class="flex-1 p-4 flex flex-col justify-center items-center">
                        <div class="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-1">${VC_FUND} Portfolio ARR</div>
                        <div class="text-[20px] font-bold text-[#1C1B1A]">$84.5M</div>
                        <div class="text-[10px] text-[#166534]">+12% QoQ</div>
                    </div>
                    <div class="flex-1 p-4 flex flex-col justify-center items-center bg-[#FEF2F2]">
                        <div class="text-[11px] font-bold text-[#991B1B] uppercase tracking-wider mb-1">Critical Runway</div>
                        <div class="text-[20px] font-bold text-[#991B1B]">2 Cos</div>
                        <div class="text-[10px] text-[#991B1B] opacity-80">&lt; 6 months</div>
                    </div>
                    <div class="flex-1 p-4 flex flex-col justify-center items-center">
                        <div class="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider mb-1">Avg Burn Rate</div>
                        <div class="text-[20px] font-bold text-[#1C1B1A]">$420k</div>
                        <div class="text-[10px] text-[#5C5A56]">Flat QoQ</div>
                    </div>
                </div>

                <div class="bg-[#FAFAF8] border-b border-[#EAEAEA] px-6 py-2 flex text-[11px] font-bold text-[#5C5A56] uppercase tracking-wider">
                    <div class="w-[30%]">Company</div>
                    <div class="w-[20%]">Sector</div>
                    <div class="w-[15%]">Cash Date</div>
                    <div class="w-[15%]">Monthly Burn</div>
                    <div class="w-[20%] text-right">Status</div>
                </div>

                <div class="flex-1 overflow-y-auto">
                    ${portfolio
                      .map(
                        (co) => `
                        <div class="flex items-center px-6 py-4 border-b border-[#EAEAEA] hover:bg-[#FAFAF8] transition-colors">
                            <div class="w-[30%]">
                                <div class="text-[14px] font-bold text-[#1C1B1A]">${co.name}</div>
                            </div>
                            <div class="w-[20%]">
                                <span class="px-2 py-0.5 border border-[#EAEAEA] rounded-[4px] text-[11px] text-[#5C5A56] bg-white">
                                    ${co.sector}
                                </span>
                            </div>
                            <div class="w-[15%]">
                                <div class="text-[13px] font-mono font-medium ${
                                  co.status === "critical"
                                    ? "text-[#EF4444]"
                                    : co.status === "warning"
                                      ? "text-[#F59E0B]"
                                      : "text-[#1C1B1A]"
                                }">
                                    ${co.cash}
                                </div>
                            </div>
                            <div class="w-[15%]">
                                <div class="text-[13px] text-[#5C5A56]">${co.burn}</div>
                            </div>
                            <div class="w-[20%] flex justify-end">
                                <span class="flex items-center gap-1.5 px-2 py-1 rounded-[4px] text-[11px] font-bold uppercase ${statusPill[co.status]}">
                                    ${statusLabel[co.status]}
                                </span>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>

                <div class="p-4 border-t border-[#EAEAEA] bg-[#FAFAF8] flex justify-between items-center">
                    <span class="text-[11px] text-[#5C5A56]">Data synced from QuickBooks/Xero 2m ago</span>
                    <button class="text-[12px] font-bold text-[#1C1B1A] flex items-center gap-1 hover:underline">
                        View Full Report
                    </button>
                </div>
            </div>
        </div>
    `;
};

const renderMarketMapGenerator = () => {
  const companies = [
    { id: 1, name: VC_TARGET, x: 68, y: 28, type: "portfolio", rev: "Pending", note: "Anchor" },
    { id: 2, name: "OpsWave", x: 82, y: 74, type: "competitor", rev: "$220M" },
    { id: 3, name: "FieldOS", x: 64, y: 62, type: "competitor", rev: "$80M" },
    { id: 4, name: "SignalStack", x: 74, y: 44, type: "competitor", rev: "$35M" },
    { id: 5, name: "Reliant", x: 52, y: 36, type: "opportunity", rev: "$12M" },
    { id: 6, name: "BridgeAI", x: 38, y: 32, type: "opportunity", rev: "$8M" },
    { id: 7, name: "TaskFlow", x: 76, y: 50, type: "opportunity", rev: "$18M" },
    { id: 8, name: "Gridline", x: 48, y: 68, type: "competitor", rev: "$40M" },
    { id: 9, name: "LegacyCo", x: 30, y: 78, type: "acquired", rev: "Acq" },
    { id: 10, name: "InfraStack", x: 58, y: 22, type: "portfolio", rev: "$6M" },
    { id: 11, name: "ServiceIQ", x: 60, y: 18, type: "portfolio", rev: "$3M" },
    { id: 12, name: "EdgePilot", x: 42, y: 54, type: "opportunity", rev: "$9M" },
  ];
  const stats = [
    { label: "Mapped Cos", value: "46" },
    { label: "High Fit", value: "8" },
    { label: "Whitespace", value: "3" },
  ];
  const filters = ["Infrastructure", "Ops", "Vertical SaaS", "Automation"];

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Sector Map: ${VC_SECTOR}</span>
                    <span class="artifact-badge bg-emerald-100 text-emerald-700">LIVE DATA</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="relative flex-1 bg-[#F9FAFB] overflow-hidden">
                <div class="absolute inset-0 market-map-grid"></div>
                <div class="absolute inset-0 market-map-glow"></div>

                <div class="market-map-summary">
                    <div class="text-[11px] font-bold text-[#5C5A56] uppercase tracking-wider mb-3">Market Coverage</div>
                    <div class="grid grid-cols-3 gap-3">
                        ${stats
                          .map(
                            (stat) => `
                            <div class="p-2 bg-white border border-[#EAEAEA] rounded-[4px]">
                                <div class="text-[10px] text-[#9CA3AF] uppercase">${stat.label}</div>
                                <div class="text-[16px] font-bold text-[#1C1B1A]">${stat.value}</div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                    <div class="mt-3 flex flex-wrap gap-2">
                        ${filters
                          .map(
                            (filter) => `
                            <span class="market-map-filter">${filter}</span>
                        `
                          )
                          .join("")}
                    </div>
                </div>

                <div class="absolute left-4 bottom-1/2 -translate-y-1/2 -rotate-90 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest origin-left">
                    Enterprise Readiness ->
                </div>
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-widest">
                    Product Differentiation ->
                </div>

                <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div class="w-full h-[1px] bg-[#E5E7EB]"></div>
                    <div class="absolute h-full w-[1px] bg-[#E5E7EB]"></div>
                </div>

                ${companies
                  .map((co) => {
                    const nodeClass =
                      co.type === "portfolio"
                        ? "bg-[#1C1B1A] border-[#1C1B1A] text-white"
                        : co.type === "opportunity"
                          ? "bg-white border-[#F59E0B] text-[#1C1B1A] border-2"
                          : co.type === "acquired"
                            ? "bg-[#F3F4F6] border-[#E5E7EB] text-[#9CA3AF] line-through"
                            : "bg-white border-[#EAEAEA] text-[#5C5A56]";
                    return `
                        <div class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style="left: ${co.x}%; bottom: ${co.y}%;">
                            <div class="px-3 py-1.5 rounded-full border shadow-sm flex items-center gap-2 transition-all hover:scale-110 ${nodeClass}">
                                <span class="text-[12px] font-bold whitespace-nowrap">${co.name}</span>
                                ${co.type === "portfolio" ? `<div class="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></div>` : ""}
                            </div>
                            <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-[#1C1B1A] text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
                                Rev: ${co.rev}${co.note ? ` • ${co.note}` : ""}
                            </div>
                        </div>
                    `;
                  })
                  .join("")}

                <div class="market-map-legend">
                    <div class="flex items-center justify-between border-b border-[#EAEAEA] pb-2 mb-1">
                        <span class="text-[11px] font-bold text-[#1C1B1A]">Legend</span>
                        <span class="text-[11px] text-[#9CA3AF]">Filters</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-[#1C1B1A]"></div>
                        <span class="text-[11px] text-[#5C5A56]">Portfolio</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full border-2 border-[#F59E0B]"></div>
                        <span class="text-[11px] text-[#5C5A56]">Opportunity</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-[#E5E5E5]"></div>
                        <span class="text-[11px] text-[#5C5A56]">Competitor</span>
                    </div>
                </div>

                <div class="market-map-insight">
                    <div class="text-[11px] font-bold text-[#1C1B1A] uppercase tracking-wider">White Space</div>
                    <p class="text-[11px] text-[#5C5A56] mt-2">
                        Service-heavy operators in ${VC_SECTOR} lack automation depth. ${VC_TARGET} sits in the highest-fit gap.
                    </p>
                    <div class="mt-3 flex gap-2">
                        <span class="insight-chip">20%+ capture target</span>
                        <span class="insight-chip">Time-to-value ${VC_PROFILE.timeToValue || "20-30 min"}</span>
                    </div>
                </div>

                <div class="absolute bottom-4 right-4 flex gap-2">
                    <button class="p-2 bg-white border border-[#EAEAEA] rounded hover:bg-[#F9FAFB]">+</button>
                    <button class="p-2 bg-white border border-[#EAEAEA] rounded hover:bg-[#F9FAFB]">-</button>
                </div>
            </div>
        </div>
    `;
};

const renderPatternMatcher = () => {
  const radarAxes = [
    { label: "Market Size", target: 82, avg: 72 },
    { label: "Founder Grit", target: 76, avg: 88 },
    { label: "Tech Moat", target: 70, avg: 85 },
    { label: "GTM Velocity", target: 74, avg: 70 },
    { label: "Capital Eff.", target: 68, avg: 75 },
    { label: "Ntwk Effects", target: 52, avg: 60 },
  ];
  const center = 110;
  const radius = 80;
  const toPoint = (value, index, scale = 1) => {
    const angle = (Math.PI * 2 * index) / radarAxes.length - Math.PI / 2;
    const r = (value / 100) * radius * scale;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  };
  const polygonPoints = (key) =>
    radarAxes.map((axis, index) => toPoint(axis[key], index)).join(" ");
  const gridPoints = [0.33, 0.66, 1].map((scale) =>
    radarAxes.map((_, index) => toPoint(100, index, scale)).join(" ")
  );
  const labelPoints = radarAxes.map((axis, index) => {
    const angle = (Math.PI * 2 * index) / radarAxes.length - Math.PI / 2;
    const r = radius + 18;
    return {
      label: axis.label,
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  });

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Pattern Matcher: ${VC_TARGET} vs Historical Portfolio</span>
                    <span class="artifact-badge bg-emerald-100 text-emerald-700">ANALYSIS READY</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full">
                <div class="w-[60%] border-r border-[#EAEAEA] p-6 flex flex-col">
                    <div class="mb-4">
                        <h3 class="text-[16px] font-semibold text-[#1C1B1A] mb-1">Archetype Comparison</h3>
                        <p class="text-[13px] text-[#5C5A56]">Overlaying ${VC_TARGET} (${VC_STAGE}) against historical winners.</p>
                    </div>
                    <div class="flex-1 min-h-0 flex items-center justify-center">
                        <svg viewBox="0 0 220 220" class="w-full h-full max-h-[300px]">
                            ${gridPoints
                              .map(
                                (points) => `
                                <polygon points="${points}" fill="none" stroke="#E5E7EB" stroke-width="1"></polygon>
                            `
                              )
                              .join("")}
                            ${radarAxes
                              .map((_, index) => {
                                const angle = (Math.PI * 2 * index) / radarAxes.length - Math.PI / 2;
                                const x = center + radius * Math.cos(angle);
                                const y = center + radius * Math.sin(angle);
                                return `<line x1="${center}" y1="${center}" x2="${x}" y2="${y}" stroke="#E5E7EB" stroke-width="1" />`;
                              })
                              .join("")}
                            <polygon points="${polygonPoints("avg")}" fill="rgba(245,158,11,0.18)" stroke="#F59E0B" stroke-width="2"></polygon>
                            <polygon points="${polygonPoints("target")}" fill="rgba(28,27,26,0.15)" stroke="#1C1B1A" stroke-width="2"></polygon>
                            ${labelPoints
                              .map(
                                (label) =>
                                  `<text x="${label.x.toFixed(1)}" y="${label.y.toFixed(1)}" font-size="9" fill="#5C5A56" text-anchor="middle">${label.label}</text>`
                              )
                              .join("")}
                        </svg>
                    </div>
                    <div class="flex justify-center gap-4 text-[11px] text-[#5C5A56]">
                        <span class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-[#1C1B1A] inline-block"></span>
                            Target
                        </span>
                        <span class="flex items-center gap-2">
                            <span class="w-2 h-2 rounded-full bg-[#F59E0B] inline-block"></span>
                            Avg. Winner
                        </span>
                    </div>
                    <div class="mt-4 grid grid-cols-3 gap-3">
                        <div class="p-3 bg-[#FAFAF8] rounded-[4px] border border-[#EAEAEA]">
                            <div class="text-[11px] text-[#5C5A56] uppercase tracking-wider mb-1">Pattern Score</div>
                            <div class="text-[20px] font-semibold text-[#1C1B1A]">94/100</div>
                            <div class="text-[11px] text-[#166534]">Top 5%</div>
                        </div>
                        <div class="p-3 bg-[#FAFAF8] rounded-[4px] border border-[#EAEAEA]">
                            <div class="text-[11px] text-[#5C5A56] uppercase tracking-wider mb-1">Similarity</div>
                            <div class="text-[20px] font-semibold text-[#1C1B1A]">High</div>
                            <div class="text-[11px] text-[#5C5A56]">Matches "DevTools"</div>
                        </div>
                        <div class="p-3 bg-[#FAFAF8] rounded-[4px] border border-[#EAEAEA]">
                            <div class="text-[11px] text-[#5C5A56] uppercase tracking-wider mb-1">Risk Factor</div>
                            <div class="text-[20px] font-semibold text-[#B45309]">Med</div>
                            <div class="text-[11px] text-[#5C5A56]">Capital Intensity</div>
                        </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 gap-3">
                        <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                            <div class="text-[11px] font-bold text-[#1C1B1A] uppercase tracking-wider mb-2">Strengths</div>
                            <ul class="text-[11px] text-[#5C5A56] space-y-1">
                                <li>High operator adoption signals</li>
                                <li>Fast time-to-value workflow</li>
                                <li>Services-led wedge into SaaS</li>
                            </ul>
                        </div>
                        <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                            <div class="text-[11px] font-bold text-[#1C1B1A] uppercase tracking-wider mb-2">Watchouts</div>
                            <ul class="text-[11px] text-[#5C5A56] space-y-1">
                                <li>Capital intensity during ramp</li>
                                <li>Competitive urgency on outreach</li>
                                <li>Vertical depth per industry</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="w-[40%] bg-[#FAFAF8] p-6 overflow-y-auto">
                    <h4 class="text-[13px] font-semibold text-[#1C1B1A] mb-4 uppercase tracking-wider">Historical Comps</h4>
                    <div class="space-y-3">
                        <div class="bg-white p-4 rounded-[4px] border border-[#EAEAEA] shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-[4px] h-full bg-[#10B981]"></div>
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <div class="text-[14px] font-bold text-[#1C1B1A]">ScaleAI</div>
                                    <div class="text-[11px] text-[#5C5A56]">Series A (2018)</div>
                                </div>
                                <span class="px-2 py-0.5 bg-[#DCFCE7] text-[#166534] text-[10px] font-bold rounded-full uppercase">Fund Driver</span>
                            </div>
                            <p class="text-[12px] text-[#5C5A56] leading-relaxed">
                                <span class="font-semibold text-[#1C1B1A]">Why it matches:</span> Similar "human-in-the-loop" wedge for autonomous data.
                            </p>
                        </div>
                        <div class="bg-white p-4 rounded-[4px] border border-[#EAEAEA] shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-[4px] h-full bg-[#EF4444]"></div>
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <div class="text-[14px] font-bold text-[#1C1B1A]">DataSift</div>
                                    <div class="text-[11px] text-[#5C5A56]">Series B (2014)</div>
                                </div>
                                <span class="px-2 py-0.5 bg-[#FEE2E2] text-[#991B1B] text-[10px] font-bold rounded-full uppercase">Passed</span>
                            </div>
                            <p class="text-[12px] text-[#5C5A56] leading-relaxed">
                                <span class="font-semibold text-[#1C1B1A]">Missed Opportunity:</span> We cited "service revenue too high." They pivoted to SaaS 6 months later.
                            </p>
                            <div class="mt-2 text-[11px] text-[#B45309] font-medium bg-[#FFFBEB] p-1.5 rounded">
                                Warning: Speed to customer is the key competitive edge.
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded-[4px] border border-[#EAEAEA] shadow-sm relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-[4px] h-full bg-[#F59E0B]"></div>
                            <div class="flex justify-between items-start mb-2">
                                <div>
                                    <div class="text-[14px] font-bold text-[#1C1B1A]">Hugging Face</div>
                                    <div class="text-[11px] text-[#5C5A56]">Series A (2019)</div>
                                </div>
                                <span class="px-2 py-0.5 bg-[#F3F4F6] text-[#4B5563] text-[10px] font-bold rounded-full uppercase">Competitor</span>
                            </div>
                            <p class="text-[12px] text-[#5C5A56] leading-relaxed">
                                <span class="font-semibold text-[#1C1B1A]">Differentiation:</span> ${VC_TARGET} focuses on operational automation vs model hosting.
                            </p>
                        </div>
                    </div>
                    <div class="mt-5 p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                        <div class="text-[11px] font-bold text-[#1C1B1A] uppercase tracking-wider mb-2">IC Questions</div>
                        <ul class="text-[11px] text-[#5C5A56] space-y-1">
                            <li>What early cohorts show strongest ROI?</li>
                            <li>How fast does services mix decline?</li>
                            <li>Which vertical shows the fastest payback?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderNetworkGraphVisualizer = () => {
  const nodes = [
    { id: "firm", name: VC_FUND, type: "firm", x: 50, y: 50, size: 56, color: "#1C1B1A" },
    { id: "target", name: VC_TARGET, type: "target", x: 80, y: 22, size: 48, color: "#F59E0B" },
    { id: "advisor", name: "Sarah Chen", type: "person", x: 66, y: 36, size: 40, color: "#14B8A6" },
    { id: "operator", name: "David Kim", type: "person", x: 30, y: 32, size: 40, color: "#64748B" },
    { id: "partner", name: "GlobalFoundries", type: "company", x: 22, y: 62, size: 44, color: "#3B82F6" },
    { id: "alumni", name: "Stanford Network", type: "group", x: 60, y: 72, size: 36, color: "#8B5CF6" },
  ];

  const edges = [
    { from: "firm", to: "advisor", label: "Strong", type: "strong" },
    { from: "advisor", to: "target", label: "Advisor", type: "strong" },
    { from: "firm", to: "operator", label: "Ex-Colleague", type: "direct" },
    { from: "operator", to: "partner", label: "Board", type: "weak" },
    { from: "firm", to: "alumni", label: "Network", type: "weak" },
    { from: "alumni", to: "target", label: "Alumni", type: "weak" },
  ];

  const nodeBadge = (node) => {
    if (node.type === "firm") return "F";
    if (node.type === "target") return "T";
    if (node.type === "person") return "P";
    if (node.type === "group") return "G";
    return "C";
  };

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Network Intelligence: Path to ${VC_TARGET}</span>
                    <span class="artifact-badge bg-emerald-100 text-emerald-700">3 PATHS FOUND</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full -m-8 relative bg-[#FAFAF8] overflow-hidden">
                <div class="absolute top-4 left-4 z-10 w-[320px]">
                    <div class="bg-white p-2 rounded-[4px] shadow-sm border border-[#EAEAEA] flex items-center gap-2 mb-2">
                        <span class="text-[12px] text-[#9CA3AF]">Search</span>
                        <input type="text" placeholder="Find path to..." class="flex-1 text-[13px] outline-none placeholder-[#9CA3AF]" value="${VC_TARGET}" />
                    </div>
                    <div class="bg-white/90 backdrop-blur-sm p-3 rounded-[4px] border border-[#EAEAEA] shadow-sm">
                        <div class="text-[11px] font-bold text-[#5C5A56] uppercase tracking-wider mb-2">Best Warm Intro</div>
                        <div class="flex items-center gap-3 p-2 bg-[#F0FDF4] border border-[#DCFCE7] rounded-[4px]">
                            <div class="w-8 h-8 rounded-full bg-[#14B8A6] flex items-center justify-center text-white text-[10px] font-bold">SC</div>
                            <div>
                                <div class="text-[12px] font-bold text-[#1C1B1A]">Sarah Chen</div>
                                <div class="text-[10px] text-[#166534]">High Trust - Replying fast</div>
                            </div>
                            <span class="text-[11px] text-[#F59E0B] ml-auto font-bold">HOT</span>
                        </div>
                    </div>
                </div>

                <div class="flex-1 relative h-full w-full">
                    <svg class="absolute inset-0 w-full h-full pointer-events-none">
                        ${edges
                          .map((edge) => {
                            const start = nodes.find((node) => node.id === edge.from);
                            const end = nodes.find((node) => node.id === edge.to);
                            if (!start || !end) return "";
                            const labelX = (start.x + end.x) / 2;
                            const labelY = (start.y + end.y) / 2;
                            const stroke =
                              edge.type === "strong" ? "#F59E0B" : "#E5E7EB";
                            const strokeWidth = edge.type === "strong" ? 2 : 1;
                            const dash = edge.type === "weak" ? "4 4" : "0";
                            return `
                                <g>
                                    <line x1="${start.x}%" y1="${start.y}%" x2="${end.x}%" y2="${end.y}%" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-dasharray="${dash}"></line>
                                    <text x="${labelX}%" y="${labelY}%" fill="#5C5A56" font-size="10" text-anchor="middle" dy="-6">${edge.label}</text>
                                </g>
                            `;
                          })
                          .join("")}
                    </svg>

                    ${nodes
                      .map(
                        (node) => `
                        <div class="absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center cursor-pointer group" style="left: ${node.x}%; top: ${node.y}%;">
                            <div class="rounded-full shadow-md flex items-center justify-center border-2 border-white transition-shadow group-hover:shadow-lg" style="width: ${node.size}px; height: ${node.size}px; background-color: ${node.color};">
                                <span class="text-white text-[14px] font-bold">${nodeBadge(node)}</span>
                            </div>
                            <div class="mt-2 bg-white/90 backdrop-blur px-2 py-0.5 rounded-[4px] border border-[#EAEAEA] shadow-sm">
                                <span class="text-[11px] font-bold text-[#1C1B1A] whitespace-nowrap">${node.name}</span>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>

                <div class="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded-[4px] border border-[#EAEAEA] flex gap-4 text-[10px] text-[#5C5A56]">
                    <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-full bg-[#14B8A6]"></div>Strong Intro</div>
                    <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-full bg-[#F59E0B]"></div>Target</div>
                    <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-full bg-[#E5E7EB]"></div>Weak Link</div>
                </div>
            </div>
        </div>
    `;
};

const renderPortfolioSynergyFinder = () => {
  const synergies = [
    {
      id: 1,
      source: { name: "RetailAI", sector: "Commerce" },
      target: { name: "LogiTech", sector: "Supply Chain" },
      score: 95,
      reason: "Customer overlap: RetailAI clients need LogiTech's last-mile layer.",
    },
    {
      id: 2,
      source: { name: "HealthFlow", sector: "MedTech" },
      target: { name: "SecureDocs", sector: "Security" },
      score: 88,
      reason: "EU expansion requires SecureDocs compliance rails.",
    },
    {
      id: 3,
      source: { name: "FinPulse", sector: "FinTech" },
      target: { name: "BankOS", sector: "Infra" },
      score: 72,
      reason: "BankOS launching APIs requested in the last board cycle.",
    },
  ];

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Portfolio Synergy Engine</span>
                    <span class="artifact-badge bg-indigo-100 text-indigo-700">SCANNING</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full -m-8">
                <div class="w-[240px] border-r border-[#EAEAEA] bg-[#FAFAF8] p-5 flex flex-col gap-6">
                    <div>
                        <h4 class="text-[11px] font-bold text-[#5C5A56] uppercase tracking-wider mb-3">Scan Scope</h4>
                        <div class="space-y-2 text-[13px] text-[#1C1B1A]">
                            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#1C1B1A]"></span>Current Portfolio (42)</div>
                            <div class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#1C1B1A]"></span>Alumni Founders (120)</div>
                            <div class="flex items-center gap-2 text-[#5C5A56]"><span class="w-2 h-2 rounded-full bg-[#E5E7EB]"></span>Corporate Partners</div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-[11px] font-bold text-[#5C5A56] uppercase tracking-wider mb-3">Synergy Type</h4>
                        <div class="flex flex-wrap gap-2">
                            <span class="px-2 py-1 bg-[#F3F4F6] text-[#4B5563] text-[11px] rounded">Commercial</span>
                            <span class="px-2 py-1 bg-[#1C1B1A] text-white text-[11px] rounded">Technical</span>
                            <span class="px-2 py-1 bg-[#F3F4F6] text-[#4B5563] text-[11px] rounded">Hiring</span>
                        </div>
                    </div>
                    <div class="mt-auto p-3 bg-[#EEF2FF] border border-[#E0E7FF] rounded-[4px] text-[11px] text-[#4338CA]">
                        <strong>AI Note:</strong> 3 new synergies found since the last board cycle.
                    </div>
                </div>
                <div class="flex-1 bg-white p-6 overflow-y-auto">
                    <h3 class="text-[16px] font-semibold text-[#1C1B1A] mb-6">High-Value Connections</h3>
                    <div class="space-y-4">
                        ${synergies
                          .map(
                            (item) => `
                            <div class="border border-[#EAEAEA] rounded-[4px] overflow-hidden hover:shadow-md transition-shadow">
                                <div class="bg-[#FAFAF8] px-4 py-3 border-b border-[#EAEAEA] flex justify-between items-center">
                                    <div class="flex items-center gap-4">
                                        <div class="flex items-center gap-2">
                                            <span class="text-[14px] font-semibold text-[#1C1B1A]">${item.source.name}</span>
                                            <span class="text-[11px] text-[#9CA3AF] bg-white px-1.5 py-0.5 rounded border border-[#EAEAEA]">${item.source.sector}</span>
                                        </div>
                                        <span class="text-[12px] text-[#9CA3AF]">-></span>
                                        <div class="flex items-center gap-2">
                                            <span class="text-[14px] font-semibold text-[#1C1B1A]">${item.target.name}</span>
                                            <span class="text-[11px] text-[#9CA3AF] bg-white px-1.5 py-0.5 rounded border border-[#EAEAEA]">${item.target.sector}</span>
                                        </div>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <span class="text-[11px] text-[#5C5A56] uppercase tracking-wider font-bold">Match</span>
                                        <div class="w-8 h-8 rounded-full bg-[#ECFCCB] flex items-center justify-center text-[12px] font-bold text-[#365314] border border-[#BEF264]">
                                            ${item.score}
                                        </div>
                                    </div>
                                </div>
                                <div class="p-4 flex gap-4 items-start">
                                    <div class="flex-1">
                                        <p class="text-[13px] text-[#5C5A56] leading-relaxed mb-3">${item.reason}</p>
                                        <div class="flex gap-2">
                                            <span class="text-[10px] bg-[#F3F4F6] text-[#4B5563] px-2 py-1 rounded">Commercial Intro</span>
                                            <span class="text-[10px] bg-[#F3F4F6] text-[#4B5563] px-2 py-1 rounded">Ops Partnership</span>
                                        </div>
                                    </div>
                                    <div class="w-[140px] flex flex-col gap-2">
                                        <button class="w-full py-1.5 bg-[#1C1B1A] text-white text-[12px] font-medium rounded hover:bg-black">Draft Intro</button>
                                        <button class="w-full py-1.5 bg-white border border-[#EAEAEA] text-[#5C5A56] text-[12px] font-medium rounded hover:bg-[#FAFAF8]">Dismiss</button>
                                    </div>
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderPortfolioTalentBank = () => {
  const candidates = [
    {
      name: "Alex Rivera",
      role: "Staff Engineer",
      prev: "Stripe, Uber",
      match: 98,
      status: "Interviewing",
      company: VC_TARGET,
      tags: ["Distributed Systems", "Rust"],
    },
    {
      name: "Sarah Chen",
      role: "VP Marketing",
      prev: "Notion",
      match: 92,
      status: "Offer Pending",
      company: "HealthFlow",
      tags: ["Product Marketing", "B2B"],
    },
    {
      name: "David Kim",
      role: "Founding Designer",
      prev: "Airbnb",
      match: 88,
      status: "New",
      company: "Stealth Co.",
      tags: ["Design Systems", "Figma"],
    },
  ];

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Portfolio Talent Pool</span>
                    <span class="artifact-badge bg-blue-100 text-blue-700">12 NEW</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full -m-8 flex-col">
                <div class="h-[72px] border-b border-[#EAEAEA] flex items-center px-6 justify-between bg-white">
                    <div class="relative w-[320px]">
                        <input type="text" placeholder="Search by skill, role, or ex-employer..." class="w-full pl-4 pr-4 py-2 bg-[#FAFAF8] border border-[#EAEAEA] rounded-[4px] text-[13px] outline-none focus:border-[#3B82F6]" />
                    </div>
                    <div class="flex gap-4">
                        <div class="flex flex-col items-end">
                            <span class="text-[10px] text-[#5C5A56] uppercase tracking-wider">Active Roles</span>
                            <span class="text-[14px] font-bold text-[#1C1B1A]">42</span>
                        </div>
                        <div class="flex flex-col items-end">
                            <span class="text-[10px] text-[#5C5A56] uppercase tracking-wider">Vetted Candidates</span>
                            <span class="text-[14px] font-bold text-[#14B8A6]">158</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex bg-[#FAFAF8]">
                    <div class="w-[200px] border-r border-[#EAEAEA] py-4">
                        <div class="px-4 mb-2 text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider">Functions</div>
                        <div class="space-y-0.5">
                            <div class="px-4 py-2 bg-white border-r-2 border-[#1C1B1A] text-[13px] font-medium text-[#1C1B1A] flex justify-between">
                                Engineering <span class="text-[#9CA3AF]">18</span>
                            </div>
                            <div class="px-4 py-2 text-[13px] text-[#5C5A56] hover:bg-white hover:text-[#1C1B1A] flex justify-between">
                                Product <span class="text-[#9CA3AF]">8</span>
                            </div>
                            <div class="px-4 py-2 text-[13px] text-[#5C5A56] hover:bg-white hover:text-[#1C1B1A] flex justify-between">
                                Design <span class="text-[#9CA3AF]">4</span>
                            </div>
                            <div class="px-4 py-2 text-[13px] text-[#5C5A56] hover:bg-white hover:text-[#1C1B1A] flex justify-between">
                                GTM/Sales <span class="text-[#9CA3AF]">12</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 p-6 overflow-y-auto">
                        <div class="space-y-3">
                            ${candidates
                              .map(
                                (candidate) => `
                                <div class="bg-white border border-[#EAEAEA] rounded-[4px] p-4 hover:shadow-md transition-shadow group cursor-pointer">
                                    <div class="flex justify-between items-start mb-2">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[14px] font-bold text-[#5C5A56]">
                                                ${candidate.name
                                                  .split(" ")
                                                  .map((part) => part[0])
                                                  .join("")}
                                            </div>
                                            <div>
                                                <div class="text-[14px] font-bold text-[#1C1B1A]">${candidate.name}</div>
                                                <div class="text-[12px] text-[#5C5A56]">${candidate.role} - Ex-${candidate.prev}</div>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <div class="text-[11px] font-bold px-2 py-0.5 rounded inline-block mb-1 ${
                                              candidate.status === "Interviewing"
                                                ? "bg-[#DBEAFE] text-[#1E40AF]"
                                                : candidate.status === "Offer Pending"
                                                  ? "bg-[#DCFCE7] text-[#166534]"
                                                  : "bg-[#F3F4F6] text-[#4B5563]"
                                            }">
                                                ${candidate.status}
                                            </div>
                                            <div class="text-[11px] text-[#9CA3AF]">for ${candidate.company}</div>
                                        </div>
                                    </div>
                                    <div class="pl-[52px] flex items-center gap-2">
                                        ${candidate.tags
                                          .map(
                                            (tag) => `
                                            <span class="px-2 py-0.5 border border-[#EAEAEA] rounded text-[11px] text-[#5C5A56] bg-[#FAFAF8]">${tag}</span>
                                        `
                                          )
                                          .join("")}
                                        <div class="ml-auto text-[12px] font-bold text-[#166534]">${candidate.match}% Match</div>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderCapTableSimulator = () => {
  const scenarios = [
    { name: "Base Case ($500M)", segments: [20, 45, 20, 15] },
    { name: "Downside ($100M)", segments: [45, 35, 15, 5] },
    { name: "IPO ($2B)", segments: [5, 45, 35, 15] },
  ];
  const colors = ["#EF4444", "#1C1B1A", "#F59E0B", "#14B8A6"];
  const labels = ["Liq Pref", "Investors", "Founders", "Option Pool"];

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Exit Waterfall Simulator</span>
                    <span class="artifact-badge bg-emerald-100 text-emerald-700">SCENARIO MODE</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full -m-8">
                <div class="w-[280px] bg-[#FAFAF8] border-r border-[#EAEAEA] p-5 flex flex-col gap-6">
                    <div>
                        <h4 class="text-[11px] font-bold text-[#5C5A56] uppercase tracking-wider mb-3">Series B Term Sheet</h4>
                        <div class="space-y-4">
                            <div>
                                <label class="text-[12px] text-[#1C1B1A] font-medium block mb-1">Pre-Money Valuation</label>
                                <div class="flex items-center bg-white border border-[#EAEAEA] rounded px-2 h-8">
                                    <span class="text-[#9CA3AF] text-[12px]">$</span>
                                    <input type="text" value="45,000,000" class="flex-1 text-[13px] outline-none ml-1 text-[#1C1B1A]" readonly />
                                </div>
                            </div>
                            <div>
                                <label class="text-[12px] text-[#1C1B1A] font-medium block mb-1">Investment Amount</label>
                                <div class="flex items-center bg-white border border-[#EAEAEA] rounded px-2 h-8">
                                    <span class="text-[#9CA3AF] text-[12px]">$</span>
                                    <input type="text" value="12,000,000" class="flex-1 text-[13px] outline-none ml-1 text-[#1C1B1A]" readonly />
                                </div>
                            </div>
                            <div>
                                <label class="text-[12px] text-[#1C1B1A] font-medium block mb-1">Liquidation Pref.</label>
                                <div class="flex items-center justify-between bg-white border border-[#EAEAEA] rounded px-2 h-8">
                                    <span class="text-[13px] text-[#1C1B1A]">1x Non-Participating</span>
                                    <span class="text-[11px] text-[#9CA3AF]">Settings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-[11px] font-bold text-[#5C5A56] uppercase tracking-wider mb-3">Simulate Exit</h4>
                        <div class="h-2 w-full bg-[#E5E7EB] rounded-full overflow-hidden">
                            <div class="h-full bg-[#1C1B1A]" style="width: 55%;"></div>
                        </div>
                        <div class="flex justify-between text-[10px] text-[#9CA3AF] mt-1">
                            <span>$50M</span>
                            <span>$2B+</span>
                        </div>
                    </div>
                </div>
                <div class="flex-1 p-8 flex flex-col">
                    <div class="flex justify-between items-end mb-6">
                        <div>
                            <h3 class="text-[18px] font-semibold text-[#1C1B1A]">Payout Distribution</h3>
                            <p class="text-[13px] text-[#5C5A56]">Returns across three scenarios.</p>
                        </div>
                        <div class="flex gap-4">
                            <div class="text-right">
                                <div class="text-[11px] text-[#5C5A56]">Fund MOIC</div>
                                <div class="text-[16px] font-bold text-[#14B8A6]">4.2x</div>
                            </div>
                            <div class="text-right">
                                <div class="text-[11px] text-[#5C5A56]">Founder Ownership</div>
                                <div class="text-[16px] font-bold text-[#1C1B1A]">18.4%</div>
                            </div>
                        </div>
                    </div>
                    <div class="space-y-4">
                        ${scenarios
                          .map(
                            (scenario) => `
                            <div>
                                <div class="text-[12px] text-[#5C5A56] mb-2">${scenario.name}</div>
                                <div class="flex h-4 w-full bg-[#F3F4F6] rounded overflow-hidden">
                                    ${scenario.segments
                                      .map(
                                        (value, index) => `
                                        <div class="h-full" style="width: ${value}%; background: ${colors[index]};"></div>
                                    `
                                      )
                                      .join("")}
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                        <div class="flex flex-wrap gap-3 text-[11px] text-[#5C5A56] mt-4">
                            ${labels
                              .map(
                                (label, index) => `
                                <span class="flex items-center gap-2">
                                    <span class="w-2 h-2 rounded-full" style="background: ${colors[index]};"></span>
                                    ${label}
                                </span>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderLPCommitmentForecaster = () => {
  const chartData = [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 75 },
    { month: "May", value: 92 },
    { month: "Jun", value: 110 },
  ];
  const lps = [
    { name: "Ontario Teachers", status: "Verbal", prob: 90, amt: "$15M" },
    { name: "Sequoia Heritage", status: "Diligence", prob: 60, amt: "$10M" },
    { name: "Yale Endowment", status: "First Meeting", prob: 20, amt: "$5M" },
    { name: "Sovereign Wealth X", status: "Closing", prob: 95, amt: "$25M" },
  ];

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Fund Close Prediction Model</span>
                    <span class="artifact-badge bg-amber-100 text-amber-800">LIVE FORECAST</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex flex-col h-full -m-8">
                <div class="h-[55%] border-b border-[#EAEAEA] p-6 flex gap-6">
                    <div class="w-[200px] flex flex-col gap-4">
                        <div>
                            <div class="text-[11px] text-[#5C5A56] uppercase tracking-wider mb-1">Current Commit</div>
                            <div class="text-[24px] font-bold text-[#1C1B1A]">$45M</div>
                            <div class="text-[11px] text-[#5C5A56]">37.5% of Goal</div>
                        </div>
                        <div>
                            <div class="text-[11px] text-[#5C5A56] uppercase tracking-wider mb-1">Projected Q2</div>
                            <div class="text-[24px] font-bold text-[#14B8A6]">$110M</div>
                            <div class="text-[11px] text-[#166534]">On Track</div>
                        </div>
                        <div class="mt-auto p-3 bg-[#FFFBEB] border border-[#FEF3C7] rounded-[4px] text-[11px] text-[#92400E]">
                            <strong>Gap Alert:</strong> Need two more anchors to hit June close.
                        </div>
                    </div>
                    <div class="flex-1 min-w-0 flex flex-col">
                        <div class="text-[13px] text-[#5C5A56] mb-4">Projected commitments vs goal.</div>
                        <div class="flex items-end gap-3 h-full pb-4">
                            ${chartData
                              .map(
                                (point) => `
                                <div class="flex flex-col items-center gap-2 flex-1">
                                    <div class="w-full bg-[#E5E7EB] rounded-t" style="height: 120px;">
                                        <div class="w-full bg-[#14B8A6] rounded-t" style="height: ${Math.min(point.value, 120)}px;"></div>
                                    </div>
                                    <span class="text-[10px] text-[#9CA3AF]">${point.month}</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
                <div class="flex-1 bg-[#FAFAF8] p-6 overflow-y-auto">
                    <div class="flex items-center justify-between mb-4">
                        <h4 class="text-[13px] font-semibold text-[#1C1B1A] uppercase tracking-wider">Active Discussions</h4>
                        <button class="text-[11px] text-[#3B82F6] font-medium hover:underline">View CRM -></button>
                    </div>
                    <table class="w-full text-left border-collapse text-[13px]">
                        <thead>
                            <tr class="text-[11px] text-[#5C5A56] border-b border-[#EAEAEA]">
                                <th class="pb-2 font-medium uppercase tracking-wider pl-2">LP Name</th>
                                <th class="pb-2 font-medium uppercase tracking-wider">Stage</th>
                                <th class="pb-2 font-medium uppercase tracking-wider">Probability</th>
                                <th class="pb-2 font-medium uppercase tracking-wider">Exp. Commit</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${lps
                              .map(
                                (lp) => `
                                <tr class="border-b border-[#EAEAEA] last:border-0 hover:bg-white transition-colors">
                                    <td class="py-3 pl-2 font-medium text-[#1C1B1A]">${lp.name}</td>
                                    <td class="py-3 text-[#5C5A56]">${lp.status}</td>
                                    <td class="py-3">
                                        <div class="flex items-center gap-2">
                                            <div class="w-16 h-1.5 bg-[#E5E7EB] rounded-full overflow-hidden">
                                                <div class="h-full bg-[#14B8A6]" style="width: ${lp.prob}%;"></div>
                                            </div>
                                            <span class="text-[11px] text-[#5C5A56]">${lp.prob}%</span>
                                        </div>
                                    </td>
                                    <td class="py-3 font-mono text-[#1C1B1A]">${lp.amt}</td>
                                </tr>
                            `
                              )
                              .join("")}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
};

const renderBoardDeckAnalyzer = () => {
  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Board Deck Analyst: ${VC_TARGET}</span>
                    <span class="artifact-badge bg-amber-100 text-amber-800">PROCESSING</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full -m-8">
                <div class="w-[55%] bg-[#E5E5E5] p-6 flex flex-col items-center relative overflow-hidden">
                    <div class="bg-white shadow-lg w-full h-full max-w-[400px] p-8 flex flex-col gap-4">
                        <div class="w-1/3 h-6 bg-[#1C1B1A] mb-8"></div>
                        <div class="w-3/4 h-8 bg-[#E5E7EB] rounded"></div>
                        <div class="w-1/2 h-4 bg-[#F3F4F6] rounded"></div>
                        <div class="mt-8 space-y-4">
                            <div class="w-full h-32 bg-[#F3F4F6] rounded"></div>
                            <div class="space-y-2">
                                <div class="w-full h-2 bg-[#E5E7EB] rounded"></div>
                                <div class="w-full h-2 bg-[#E5E7EB] rounded"></div>
                                <div class="w-2/3 h-2 bg-[#E5E7EB] rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#1C1B1A]/80 text-white px-3 py-1 rounded-full text-[11px] font-medium">
                        Page 4 of 22
                    </div>
                </div>
                <div class="w-[45%] bg-white flex flex-col border-l border-[#EAEAEA]">
                    <div class="p-5 border-b border-[#EAEAEA]">
                        <h3 class="text-[14px] font-semibold text-[#1C1B1A] mb-1">Key Metrics Extracted</h3>
                        <div class="grid grid-cols-2 gap-3 mt-3">
                            <div class="p-2 bg-[#FAFAF8] border border-[#EAEAEA] rounded-[4px]">
                                <div class="text-[10px] text-[#5C5A56] uppercase">ARR</div>
                                <div class="text-[16px] font-bold text-[#1C1B1A]">Pending</div>
                            </div>
                            <div class="p-2 bg-[#FAFAF8] border border-[#EAEAEA] rounded-[4px]">
                                <div class="text-[10px] text-[#5C5A56] uppercase">Burn</div>
                                <div class="text-[16px] font-bold text-[#1C1B1A]">Pending</div>
                            </div>
                            <div class="p-2 bg-[#FAFAF8] border border-[#EAEAEA] rounded-[4px]">
                                <div class="text-[10px] text-[#5C5A56] uppercase">Runway</div>
                                <div class="text-[16px] font-bold text-[#1C1B1A]">Pending</div>
                            </div>
                            <div class="p-2 bg-[#FAFAF8] border border-[#EAEAEA] rounded-[4px]">
                                <div class="text-[10px] text-[#5C5A56] uppercase">CAC</div>
                                <div class="text-[16px] font-bold text-[#1C1B1A]">Pending</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-1 overflow-y-auto p-5">
                        <h3 class="text-[14px] font-semibold text-[#1C1B1A] mb-3">AI Findings & Open Questions</h3>
                        <div class="space-y-3">
                            <div class="p-3 bg-[#FFFBEB] border border-[#FEF3C7] rounded-[4px]">
                                <div class="text-[12px] font-bold text-[#92400E]">Inconsistent churn data</div>
                                <p class="text-[11px] text-[#B45309] leading-relaxed mt-1">
                                    Slide 6 reports 2% monthly churn, but the revenue waterfall implies 4.5%. Ask CFO to reconcile.
                                </p>
                            </div>
                            <div class="p-3 bg-[#FAFAF8] border border-[#EAEAEA] rounded-[4px]">
                                <div class="text-[12px] font-bold text-[#1C1B1A]">Suggested Question</div>
                                <p class="text-[11px] text-[#5C5A56]">
                                    "Sales cycle increased from 45 to 60 days. Is this due to the new enterprise focus?"
                                </p>
                            </div>
                            <div class="p-3 bg-[#FAFAF8] border border-[#EAEAEA] rounded-[4px]">
                                <div class="text-[12px] font-bold text-[#1C1B1A]">Suggested Question</div>
                                <p class="text-[11px] text-[#5C5A56]">
                                    "Engineering headcount is flat but roadmap is accelerating. Are we accruing tech debt?"
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 border-t border-[#EAEAEA]">
                        <button class="w-full py-2 bg-[#1C1B1A] text-white rounded-[4px] text-[13px] font-medium">
                            View Full Report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderDealMemoGenerator = () => {
  const sections = [
    { id: "thesis", label: "Investment Thesis", status: "complete" },
    { id: "market", label: "Market Sizing", status: "complete" },
    { id: "product", label: "Product & Tech", status: "review" },
    { id: "team", label: "Team Analysis", status: "generating" },
    { id: "risks", label: "Risks & Mitigants", status: "pending" },
    { id: "terms", label: "Deal Terms", status: "pending" },
  ];

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-title">Auto-Draft Deal Memo: ${VC_TARGET} ${VC_STAGE}</span>
                    <span class="artifact-badge bg-emerald-100 text-emerald-700">DRAFTING</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full">
                <div class="w-[280px] border-r border-[#EAEAEA] bg-[#FAFAF8] p-4 flex flex-col gap-4">
                    <div class="text-[11px] font-bold text-[#5C5A56] uppercase tracking-wider mb-2">Source Context</div>
                    <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px] shadow-sm">
                        <div class="text-[12px] font-medium text-[#1C1B1A] mb-1">Partner Notes</div>
                        <p class="text-[11px] text-[#5C5A56] line-clamp-2">
                            Discussed moat durability, CAC trend, and services mix. Founder strength noted.
                        </p>
                    </div>
                    <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px] shadow-sm">
                        <div class="text-[12px] font-medium text-[#1C1B1A] mb-1">Financial Snapshot</div>
                        <p class="text-[11px] text-[#5C5A56]">ARR Pending • Burn $350k/mo • Runway 18 mo</p>
                    </div>
                    <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px] shadow-sm">
                        <div class="text-[12px] font-medium text-[#1C1B1A] mb-1">Competitive Scan</div>
                        <p class="text-[11px] text-[#5C5A56]">3 new entrants funded in last 6 months.</p>
                    </div>
                    <div class="mt-auto">
                        <button class="w-full py-2 flex items-center justify-center gap-2 bg-[#F59E0B] text-white rounded-[4px] text-[12px] font-medium">
                            Analyze New Sources
                        </button>
                    </div>
                </div>
                <div class="flex-1 flex flex-col bg-white">
                    <div class="h-12 border-b border-[#EAEAEA] flex items-center px-6 gap-6">
                        ${sections
                          .map((section) => {
                            const isActive = section.id === "thesis";
                            const dot =
                              section.status === "generating"
                                ? `<span class="w-1.5 h-1.5 rounded-full bg-[#F59E0B] inline-block"></span>`
                                : "";
                            return `
                                <div class="h-full relative flex items-center gap-2 text-[12px] font-medium ${
                                  isActive ? "text-[#1C1B1A]" : "text-[#9CA3AF]"
                                }">
                                    ${section.label}
                                    ${dot}
                                    ${isActive ? `<div class="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F59E0B]"></div>` : ""}
                                </div>
                            `;
                          })
                          .join("")}
                    </div>
                    <div class="flex-1 p-8 overflow-y-auto">
                        <div class="max-w-2xl mx-auto">
                            <div class="mb-6 flex items-center justify-between">
                                <h2 class="text-[20px] font-semibold text-[#1C1B1A]">Investment Thesis</h2>
                                <button class="text-[11px] text-[#5C5A56]">Regenerate</button>
                            </div>
                            <div class="prose prose-sm max-w-none text-[#374151]">
                                <p class="leading-relaxed">
                                    <span class="bg-[#FEF3C7] px-1 rounded">${VC_TARGET} represents a contrarian bet</span> on service-heavy workflows
                                    that require reliable automation. The market is underserved by tools that stop at surface-level AI.
                                </p>
                                <p class="leading-relaxed mt-4">
                                    Their orchestration engine allows operators to deploy specialized agents with measurable ROI in under 30 days.
                                </p>
                                <div class="my-6 p-4 bg-[#FAFAF8] border-l-2 border-[#14B8A6] rounded-r-[4px]">
                                    <div class="text-[12px] font-bold text-[#14B8A6] uppercase">AI Insight</div>
                                    <p class="text-[12px] text-[#5C5A56] mt-2">
                                        Historical pattern match: Similar to the 2012 shift to workflow SaaS. Operators that automated first
                                        captured 4-6x valuation expansion by Series B.
                                    </p>
                                </div>
                                <p class="leading-relaxed">
                                    <strong>Why Now:</strong> Enterprise customers are demanding automation with compliance and auditability.
                                </p>
                            </div>
                            <div class="mt-8 pt-6 border-t border-[#EAEAEA] flex justify-end gap-3">
                                <button class="px-4 py-2 bg-white border border-[#EAEAEA] text-[#5C5A56] rounded-[4px] text-[13px]">
                                    Save Draft
                                </button>
                                <button class="px-4 py-2 bg-[#1C1B1A] text-white rounded-[4px] text-[13px]">
                                    Approve Thesis ->
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderOstiaInvestorMemo = () => {
  const profile = VC_PROFILE || {};
  const verticals =
    profile.verticals && profile.verticals.length
      ? profile.verticals.join(", ")
      : "Construction, CPA firms, MSPs, Retail, Consultants, Startups";
  const raiseAmount = profile.raiseAmount || "$2.5M";
  const raiseStage = profile.raiseStage || "Pre-seed";
  const runwayMonths =
    typeof profile.runwayMonths === "number"
      ? `${profile.runwayMonths} mo`
      : profile.runwayMonths || "18 mo";
  const runwayAllocation = profile.runwayAllocation || "$1.5M";
  const plgBudget = profile.plgBudget || "$1.0M";
  const plgDemoCount = profile.plgDemoCount || "100k";
  const plgConversionMin = profile.plgConversionMin || "2%";
  const plgConversionTarget = profile.plgConversionTarget || "7%";
  const demoAccess = profile.demoAccess || "24 hours";
  const timeToValue = profile.timeToValue || "20-30 minutes";
  const loiSeats = profile.loiSeats || "30";
  const loiSeatsTarget = profile.loiSeatsTarget || "100+";
  const seatPrice = profile.seatPrice || "$10k / seat / year";
  const launchWindow = profile.launchWindow || "Late Jan / Early Feb";
  const marketCaptureTarget = profile.marketCaptureTarget || "20%+";
  const riskNote = profile.riskNote || "Competitors reaching customers first";
  const memoTabs = [
    { id: "overview", label: "Overview" },
    { id: "traction", label: "Traction" },
    { id: "plg", label: "PLG Engine" },
    { id: "funds", label: "Use of Funds" },
    { id: "launch", label: "Launch Plan" },
    { id: "questions", label: "IC Questions" },
    { id: "risks", label: "Risks" },
  ];

  return `
        <div class="artifact-card w-full h-[600px] flex flex-col font-sans">
            <div class="artifact-header">
                <div class="artifact-title-group">
                    <span class="artifact-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                    </span>
                    <span class="artifact-title">Ostia Investor Memo</span>
                    <span class="artifact-badge bg-amber-100 text-amber-800">${profile.memoStatus || "DRAFTING"}</span>
                </div>
                <div class="artifact-controls">
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                    <div class="artifact-dot"></div>
                </div>
            </div>
            <div class="flex h-full flex-col bg-white">
                <div class="p-6 border-b border-[#EAEAEA] bg-[#FAFAF8]">
                    <div class="flex items-start justify-between gap-6">
                        <div>
                            <div class="text-[10px] font-mono uppercase tracking-wider text-[#9CA3AF]">Ostia</div>
                            <div class="text-[20px] font-semibold text-[#1C1B1A]">Investor Memo</div>
                            <div class="text-[12px] text-[#5C5A56]">${raiseAmount} ${raiseStage} raise - Launch ${launchWindow}</div>
                        </div>
                        <button class="px-3 py-2 bg-[#1C1B1A] text-white rounded-[4px] text-[11px] font-medium hover:bg-black" onclick="App.openViewer('assets/ostia-hsep-transparency-panel.html', 'Ostia Investor Memo', 'doc')">
                            Open IC Memo
                        </button>
                    </div>
                    <div class="grid grid-cols-3 gap-3 mt-4">
                        <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                            <div class="text-[10px] text-[#5C5A56] uppercase">Raise</div>
                            <div class="text-[16px] font-bold text-[#1C1B1A]">${raiseAmount} ${raiseStage}</div>
                        </div>
                        <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                            <div class="text-[10px] text-[#5C5A56] uppercase">Runway</div>
                            <div class="text-[16px] font-bold text-[#1C1B1A]">${runwayMonths}</div>
                        </div>
                        <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                            <div class="text-[10px] text-[#5C5A56] uppercase">PLG Budget</div>
                            <div class="text-[16px] font-bold text-[#1C1B1A]">${plgBudget}</div>
                        </div>
                        <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                            <div class="text-[10px] text-[#5C5A56] uppercase">LOI Seats</div>
                            <div class="text-[16px] font-bold text-[#1C1B1A]">${loiSeats} -> ${loiSeatsTarget}</div>
                        </div>
                        <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                            <div class="text-[10px] text-[#5C5A56] uppercase">Seat Price</div>
                            <div class="text-[16px] font-bold text-[#1C1B1A]">${seatPrice}</div>
                        </div>
                        <div class="p-3 bg-white border border-[#EAEAEA] rounded-[4px]">
                            <div class="text-[10px] text-[#5C5A56] uppercase">Demo Scale</div>
                            <div class="text-[16px] font-bold text-[#1C1B1A]">${plgDemoCount}</div>
                        </div>
                    </div>
                    <div class="mt-3 text-[11px] text-[#5C5A56]">Pre-launch, no revenue yet. Near-perfect LOI conversion from one-week demos.</div>
                </div>
                <div class="px-6 py-3 border-b border-[#EAEAEA] bg-white">
                    <div class="memo-tabs">
                        ${memoTabs
                          .map(
                            (tab, index) => `
                            <button class="memo-tab${index === 0 ? " active" : ""}" data-ostia-tab="${tab.id}">
                                ${tab.label}
                            </button>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                <div class="flex-1 overflow-y-auto px-6 py-6">
                    <div class="memo-panel active" data-ostia-panel="overview">
                        <h4 class="memo-panel-title">Overview</h4>
                        <p class="memo-panel-text">
                            Raising ${raiseAmount} ${raiseStage}. ${runwayAllocation} funds ${runwayMonths} runway, ${plgBudget} funds product-led growth for tailored demos at scale.
                        </p>
                        <p class="memo-panel-text">
                            Launch target is ${launchWindow}. Market capture goal is ${marketCaptureTarget} with fast verticalization and an agent-native delivery stack.
                        </p>
                        <div class="memo-panel-chips">
                            <span class="memo-chip">Time to value: ${timeToValue}</span>
                            <span class="memo-chip">Trial access: ${demoAccess}</span>
                            <span class="memo-chip">Pre-launch</span>
                        </div>
                    </div>
                    <div class="memo-panel" data-ostia-panel="traction">
                        <h4 class="memo-panel-title">Traction</h4>
                        <p class="memo-panel-text">
                            ${loiSeats} LOI seats growing to ${loiSeatsTarget}+ at ${seatPrice}. Near-perfect LOI conversion after one week of demos with real deliverables.
                        </p>
                        <ul class="memo-panel-list">
                            <li>LOIs across ${verticals} with active feedback loops.</li>
                            <li>Demonstrated value within ${timeToValue} for individuals and teams.</li>
                        </ul>
                        <div class="memo-panel-chips">
                            ${verticals
                              .split(", ")
                              .map(
                                (vertical) => `
                                <span class="memo-chip">${vertical}</span>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="memo-panel" data-ostia-panel="plg">
                        <h4 class="memo-panel-title">PLG Demo Engine</h4>
                        <p class="memo-panel-text">
                            ${plgDemoCount} tailored demos with ${demoAccess} access, ${timeToValue} time-to-value, and ${plgConversionMin} min / ${plgConversionTarget} target conversion.
                        </p>
                        <ul class="memo-panel-list">
                            <li>Deliver real artifacts in the first 20-30 minutes.</li>
                            <li>Scale demo distribution to individuals and teams selected by Ostia.</li>
                        </ul>
                    </div>
                    <div class="memo-panel" data-ostia-panel="funds">
                        <h4 class="memo-panel-title">Use of Funds</h4>
                        <ul class="memo-panel-list">
                            <li>${runwayAllocation} for salaries + incidentals (${runwayMonths} runway).</li>
                            <li>${plgBudget} for PLG demo distribution at scale.</li>
                            <li>Bring team full-time to finalize product and launch.</li>
                        </ul>
                    </div>
                    <div class="memo-panel" data-ostia-panel="launch">
                        <h4 class="memo-panel-title">Launch Plan</h4>
                        <ul class="memo-panel-list">
                            <li>Launch window: ${launchWindow}.</li>
                            <li>Verticalize with three people per industry using the agent-native platform.</li>
                            <li>Deliver early demos to drive value in the first ${timeToValue}.</li>
                        </ul>
                    </div>
                    <div class="memo-panel" data-ostia-panel="questions">
                        <h4 class="memo-panel-title">IC Questions</h4>
                        <ul class="memo-panel-list">
                            <li>Which ICPs get the first ${plgDemoCount} demos (roles, titles, segments)? <span class="text-[10px] font-mono uppercase text-[#9CA3AF]">Pending</span></li>
                            <li>What is the per-demo delivery cost (compute + human ops) and expected gross margin?</li>
                            <li>How is pricing structured for teams vs individuals beyond the trial? <span class="text-[10px] font-mono uppercase text-[#9CA3AF]">Pending</span></li>
                            <li>What ARR outcomes do we expect at ${plgConversionMin} and ${plgConversionTarget} conversion?</li>
                            <li>Which verticals get prioritized first and what is the close timeline for LOIs?</li>
                            <li>Any security or compliance requirements required for early pilots?</li>
                        </ul>
                    </div>
                    <div class="memo-panel" data-ostia-panel="risks">
                        <h4 class="memo-panel-title">Risks</h4>
                        <p class="memo-panel-text">
                            ${riskNote}. Mitigation: fast launch, early LOIs, and active customer feedback loops.
                        </p>
                        <p class="memo-panel-text">
                            Additional focus: scale demo delivery without sacrificing quality while verticalizing quickly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderSceneFundHealth = () => `
    <div class="scene-layout">
        <div class="scene-full">
            <div class="scene-card">${renderStartupHealthMonitor()}</div>
        </div>
    </div>
`;

const renderSceneMarketIntel = () => `
    <div class="scene-layout">
        <div class="scene-grid wide">
            <div class="scene-card market-map-card">${renderMarketMapGenerator()}</div>
            <div class="scene-card pattern-card">${renderPatternMatcher()}</div>
        </div>
    </div>
`;

const renderSceneDealMemo = () => `
    <div class="scene-layout">
        <div class="scene-full">
            <div class="scene-card">${renderDealMemoGenerator()}</div>
        </div>
    </div>
`;

const renderSceneOstiaMemo = () => `
    <div class="scene-layout">
        <div class="scene-full">
            <div class="scene-card">${renderOstiaInvestorMemo()}</div>
        </div>
    </div>
`;

const renderSceneBriefing = () => `
    <div class="scene-layout">
        <div class="scene-full">
            <div class="scene-card">${renderExecutiveDashboard()}</div>
        </div>
    </div>
`;

const renderSceneSprint = () => `
    <div class="scene-layout">
        <div class="scene-grid">
            <div class="scene-card">${renderTaskProgressTracker()}</div>
            <div class="scene-card compact">${renderApprovalWorkflowCard()}</div>
        </div>
    </div>
`;

const renderSceneReporting = () => `
    <div class="scene-layout">
        <div class="scene-full">
            <div class="scene-card">${renderBoardReportView()}</div>
        </div>
    </div>
`;

const renderSceneOstia = () => `
    <div class="scene-layout">
        <div class="scene-iframe">
            <iframe src="assets/ostia-hsep-transparency-panel.html" title="Ostia Transparency Panel"></iframe>
        </div>
    </div>
`;

const Components = {
  ExecutiveDashboard: renderExecutiveDashboard,
  TaskProgressTracker: renderTaskProgressTracker,
  ApprovalWorkflowCard: renderApprovalWorkflowCard,
  BoardReportView: renderBoardReportView,
  StartupHealthMonitor: renderStartupHealthMonitor,
  MarketMapGenerator: renderMarketMapGenerator,
  PatternMatcher: renderPatternMatcher,
  DealMemoGenerator: renderDealMemoGenerator,
  OstiaInvestorMemo: renderOstiaInvestorMemo,
  SceneBriefing: renderSceneBriefing,
  SceneSprint: renderSceneSprint,
  SceneReporting: renderSceneReporting,
  SceneOstia: renderSceneOstia,
  SceneFundHealth: renderSceneFundHealth,
  SceneMarketIntel: renderSceneMarketIntel,
  SceneDealMemo: renderSceneDealMemo,
  SceneOstiaMemo: renderSceneOstiaMemo,
  /* --- Operations Command Center --- */
  OperationsCommandCenter: () => {
    return `
            <div class="bg-white border border-slate-200 rounded-lg shadow-sm p-0 overflow-hidden h-full flex flex-col">
                <!-- Header -->
                <div class="h-14 border-b border-slate-200 px-6 flex items-center justify-between bg-slate-50">
                    <div class="flex items-center gap-3">
                        <h3 class="font-semibold text-slate-800">Operations Command Center</h3>
                        <span class="bg-red-100 text-red-700 text-[10px] font-bold px-2 py-0.5 rounded animate-pulse">● LIVE MONITORING</span>
                    </div>
                    <div class="text-xs text-slate-500 font-mono">UPDATED: JUST NOW</div>
                </div>

                <div class="p-6 flex-1 bg-slate-50/50 overflow-y-auto">
                    <!-- KPI Row -->
                    <div class="grid grid-cols-4 gap-4 mb-8">
                        <div class="bg-white p-4 rounded border shadow-sm">
                            <div class="text-[10px] text-slate-500 uppercase font-mono mb-1">System Health</div>
                            <div class="flex items-end justify-between">
                                <span class="text-2xl font-bold text-slate-800">94%</span>
                                <span class="text-xs text-green-600 font-medium">+2%</span>
                            </div>
                            <div class="w-full bg-slate-100 h-1 mt-3 rounded-full overflow-hidden">
                                <div class="bg-green-500 h-full w-[94%]"></div>
                            </div>
                        </div>
                        <div class="bg-white p-4 rounded border shadow-sm">
                            <div class="text-[10px] text-slate-500 uppercase font-mono mb-1">Active Agents</div>
                            <div class="text-2xl font-bold text-slate-800">7</div>
                            <div class="text-xs text-slate-400 mt-2">Currently deployed</div>
                        </div>
                        <div class="bg-white p-4 rounded border shadow-sm">
                            <div class="text-[10px] text-slate-500 uppercase font-mono mb-1">Warnings</div>
                            <div class="text-2xl font-bold text-amber-600">2</div>
                            <div class="text-xs text-slate-400 mt-2">Requires attention</div>
                        </div>
                        <div class="bg-white p-4 rounded border shadow-sm">
                            <div class="text-[10px] text-slate-500 uppercase font-mono mb-1">Blockers</div>
                            <div class="text-2xl font-bold text-red-600">1</div>
                            <div class="text-xs text-slate-400 mt-2">Critical path</div>
                        </div>
                    </div>

                    <!-- Department Grid -->
                    <div class="grid grid-cols-3 gap-6">
                        ${_renderDeptCard("Engineering", 98, "operational", "CTO Agent")}
                        ${_renderDeptCard("Marketing", 85, "warning", "CMO Agent", "Budget Approval")}
                        ${_renderDeptCard("Revenue", 94, "operational", "CRO Agent")}
                        ${_renderDeptCard("Product", 88, "warning", "CPO Agent", "User Research")}
                        ${_renderDeptCard("Finance", 100, "operational", "CFO Agent")}
                        ${_renderDeptCard("Legal", 99, "operational", "CLO Agent")}
                    </div>
                </div>
            </div>
        `;
  },

  /* --- Agent Activity Feed --- */
  AgentActivityFeed: () => {
    const events = [
      {
        agent: "Orchestrator",
        role: "ops",
        msg: "Initializing workflow...",
        status: "completed",
      },
      {
        agent: "Claude-3.5",
        role: "marketing",
        msg: "Drafting strategy → Campaign Brief",
        status: "completed",
      },
      {
        agent: "GPT-4-Turbo",
        role: "finance",
        msg: "Allocating budget → Cost Projection",
        status: "completed",
      },
      {
        agent: "Gemini-2.0",
        role: "design",
        msg: "Generating assets → Hero_Image_v1",
        status: "completed",
      },
      {
        agent: "Gemini-2.0",
        role: "design",
        msg: "Refining variation → Hero_Image_v2",
        status: "completed",
      },
      {
        agent: "Claude-3.5",
        role: "marketing",
        msg: "Generating copy → LinkedIn Ad #1",
        status: "working",
      },
      {
        agent: "Legal-Swarm",
        role: "legal",
        msg: "Scanning compliance → Ad Copy",
        status: "working",
      },
      {
        agent: "GPT-4-Turbo",
        role: "finance",
        msg: "Verifying spend → Ad Spend Allocation",
        status: "waiting",
      },
    ];

    return `
            <div class="bg-slate-900 text-slate-300 rounded-lg shadow-xl p-0 overflow-hidden h-full flex flex-col font-mono text-sm border border-slate-800">
                <div class="h-12 border-b border-slate-800 bg-slate-950 px-4 flex items-center justify-between">
                    <span class="font-bold text-white">Swarm Activity Log</span>
                    <span class="bg-green-900 text-green-400 text-[10px] px-2 py-0.5 rounded">● LIVE</span>
                </div>
                <div class="p-6 flex-1 overflow-y-auto space-y-4">
                    ${events
                      .map(
                        (e, i) => `
                        <div class="flex gap-4 items-start animate-fadeIn" style="animation-delay: ${i * 100}ms">
                            <div class="w-24 text-right text-xs opacity-50 pt-1">${new Date().toLocaleTimeString()}</div>
                            <div class="w-px bg-slate-800 relative">
                                <div class="absolute top-1.5 -left-1 w-2 h-2 rounded-full ${
                                  e.status === "working"
                                    ? "bg-blue-500 animate-pulse"
                                    : e.status === "completed"
                                      ? "bg-green-500"
                                      : "bg-slate-600"
                                }"></div>
                            </div>
                            <div class="flex-1 pb-4">
                                <div class="flex items-center gap-2 mb-1">
                                    <span class="font-bold ${
                                      e.role === "marketing"
                                        ? "text-teal-400"
                                        : e.role === "finance"
                                          ? "text-amber-400"
                                          : e.role === "design"
                                            ? "text-blue-400"
                                            : e.role === "legal"
                                              ? "text-slate-400"
                                              : "text-purple-400"
                                    }">@${e.agent}</span>
                                    ${e.status === "working" ? '<span class="text-[10px] border border-blue-900 bg-blue-900/30 text-blue-300 px-1 rounded">WORKING</span>' : ""}
                                </div>
                                <div class="text-slate-300">${e.msg}</div>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                    <div class="text-green-500 pt-4">> All tasks synchronized. Swarm active._</div>
                </div>
            </div>
        `;
  },

  /* --- Month End Close Checklist --- */
  MonthEndCloseChecklist: () => {
    const tasks = [
      {
        title: "Revenue Recognition Sync",
        status: "DONE",
        assignee: "Finance Agent",
        day: "-1",
      },
      {
        title: "Bank Reconciliation (Operating)",
        status: "DONE",
        assignee: "Finance Agent",
        day: "1",
      },
      {
        title: "AP Accruals Calculation",
        status: "REVIEW",
        assignee: "Controller",
        day: "2",
        isHuman: true,
      },
      {
        title: "Intercompany Reconciliations",
        status: "IN_PROGRESS",
        assignee: "Finance Agent",
        day: "2",
      },
      {
        title: "Fixed Asset Depreciation Run",
        status: "PENDING",
        assignee: "ERP Bot",
        day: "3",
      },
      {
        title: "Payroll Accrual Journal",
        status: "PENDING",
        assignee: "Payroll Spec.",
        day: "3",
        isHuman: true,
      },
      {
        title: "Inventory Valuation Adjustment",
        status: "BLOCKED",
        assignee: "Ops Lead",
        day: "4",
        isHuman: true,
      },
      {
        title: "Bad Debt Provision Review",
        status: "PENDING",
        assignee: "CFO",
        day: "5",
        isHuman: true,
      },
      {
        title: "Final P&L Consolidation",
        status: "PENDING",
        assignee: "Finance Agent",
        day: "5",
      },
    ];

    return `
            <div class="bg-white border border-slate-200 rounded-lg shadow-sm p-0 overflow-hidden h-full flex flex-col">
                <div class="p-6 border-b border-slate-100">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h2 class="text-lg font-bold text-slate-800">Month-End Close: December 2025</h2>
                            <p class="text-sm text-slate-500">Projected Completion: 2 Days (vs 5 avg)</p>
                        </div>
                        <span class="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">DAY 2 OF 5</span>
                    </div>
                    
                    <div class="relative pt-1">
                        <div class="flex mb-2 items-center justify-between">
                            <div class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                                22% Complete
                            </div>
                        </div>
                        <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                            <div style="width:22%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                        </div>
                    </div>
                </div>

                <div class="flex-1 overflow-y-auto bg-slate-50 p-6">
                    <div class="space-y-3">
                        ${tasks
                          .map(
                            (task) => `
                            <div class="bg-white p-4 rounded border ${task.status === "BLOCKED" ? "border-red-200 bg-red-50" : "border-slate-200"} shadow-sm flex items-center justify-between">
                                <div class="flex items-center gap-4">
                                    <div class="w-6 h-6 rounded-full flex items-center justify-center border ${
                                      task.status === "DONE"
                                        ? "bg-green-500 border-green-500 text-white"
                                        : "border-slate-300"
                                    }">
                                        ${task.status === "DONE" ? "✓" : ""}
                                    </div>
                                    <div>
                                        <div class="text-sm font-medium text-slate-800 ${task.status === "DONE" ? "line-through text-slate-400" : ""}">${task.title}</div>
                                        <div class="flex items-center gap-2 mt-1">
                                            <span class="text-[10px] px-1.5 py-0.5 rounded ${task.isHuman ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"} font-medium">
                                                ${task.isHuman ? "👤" : "🤖"} ${task.assignee}
                                            </span>
                                            <span class="text-[10px] text-slate-400">Due Day ${task.day}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    ${_renderStatusBadge(task.status)}
                                </div>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        `;
  },

  /* --- Departments Overview (Interactive) --- */
  DepartmentsOverview: () => {
    const departments = [
      {
        name: "Executive",
        count: "9 roles",
        desc: "Strategy formulation, vision alignment, and orchestration.",
        icon: "👔",
        slug: "executive",
      },
      {
        name: "Engineering",
        count: "8 roles",
        desc: "Technical implementation, architecture, and system health.",
        icon: "🛠️",
        slug: "engineering",
      },
      {
        name: "Finance",
        count: "8 roles",
        desc: "Budgeting, forecasting, P&L analysis, and fiscal controls.",
        icon: "💰",
        slug: "finance",
      },
      {
        name: "Marketing",
        count: "8 roles",
        desc: "Campaign management, brand strategy, and market growth.",
        icon: "📣",
        slug: "marketing",
      },
      {
        name: "Revenue",
        count: "7 roles",
        desc: "Sales operations, pipeline management, and revenue optimization.",
        icon: "📈",
        slug: "revenue",
      },
      {
        name: "People",
        count: "6 roles",
        desc: "Talent acquisition, culture building, and HR operations.",
        icon: "👥",
        slug: "people",
      },
      {
        name: "Product",
        count: "6 roles",
        desc: "Roadmap planning, feature definition, and user experience.",
        icon: "📦",
        slug: "product",
      },
      {
        name: "Legal",
        count: "5 roles",
        desc: "Contract review, compliance monitoring, and risk management.",
        icon: "⚖️",
        slug: "legal",
      },
      {
        name: "Operations",
        count: "6 roles",
        desc: "Process optimization, efficiency tracking, and logistics.",
        icon: "⚙️",
        slug: "operations",
      },
    ];

    // Attach handler to global scope
    window.showDeptDetails = (slug, name) => {
      const container = document.getElementById("dept-container");
      const data = DEPARTMENT_ROLES[slug] || { roles: [] };
      const roles = data.roles;
      const meta = data.meta || {
        icon: "🏢",
        desc: "Department",
        color: "text-slate-800",
      };

      container.innerHTML = `
                <div class="h-full flex flex-col p-8 bg-[#FAFAF8] overflow-hidden animate-fadeIn">
                    
                    <!-- Header -->
                    <div class="mb-8 flex flex-col items-start gap-4">
                        <button onclick="Components.renderDeptGrid()" class="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-2 transition-colors">
                            ← Back to Departments
                        </button>
                        
                        <div class="flex items-center gap-4 mt-2">
                            <div class="w-16 h-16 bg-[#FFFFFF] rounded-full flex items-center justify-center text-3xl border border-[#EAEAEA] shadow-sm">
                                ${meta.icon}
                            </div>
                            <div>
                                <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-1">${name} Department</h2>
                                <p class="text-[#5C5A56]">${meta.desc}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Stats Bar -->
                    <div class="mb-8 flex gap-6">
                        <div class="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[4px] px-6 py-4 shadow-sm">
                            <div class="text-2xl font-semibold text-[#1C1B1A]">${roles.length}</div>
                            <div class="text-sm text-[#5C5A56]">Active Roles</div>
                        </div>
                        <div class="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[4px] px-6 py-4 shadow-sm">
                            <div class="text-2xl font-semibold text-green-600">35+</div>
                            <div class="text-sm text-[#5C5A56]">UI Components</div>
                        </div>
                        <div class="bg-[#FFFFFF] border border-[#EAEAEA] rounded-[4px] px-6 py-4 shadow-sm">
                            <div class="text-2xl font-semibold text-slate-800">Live</div>
                            <div class="text-sm text-[#5C5A56]">Status</div>
                        </div>
                    </div>
                    
                    <!-- Grid -->
                    <div class="flex-1 overflow-y-auto pr-2">
                        <div class="grid grid-cols-2 gap-6 pb-12">
                            ${roles
                              .map(
                                (role) => `
                                <div class="bg-white border border-[#EAEAEA] rounded-[4px] p-6 shadow-sm hover:shadow-md hover:border-slate-800 hover:-translate-y-1 transition-all duration-200 cursor-default group flex flex-col">
                                    <div class="flex justify-between items-start mb-4">
                                        <div class="w-12 h-12 bg-[#FAFAFA] rounded-full flex items-center justify-center text-2xl border border-[#EAEAEA] group-hover:scale-105 transition-transform">
                                            ${role.icon}
                                        </div>
                                        <span class="font-mono text-[10px] uppercase tracking-wider text-[#767370] bg-[#F1F3F5] px-2 py-1 rounded-[2px]">
                                            ${role.count}
                                        </span>
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="text-lg font-semibold mb-2 group-hover:text-slate-800 transition-colors text-slate-700">
                                            ${role.name}
                                        </h3>
                                        <p class="text-sm text-[#5C5A56] leading-relaxed">
                                            ${role.desc}
                                        </p>
                                    </div>
                                    <div class="mt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span class="text-slate-800 text-sm font-medium flex items-center gap-1">
                                            View Components <span class="text-xs">→</span>
                                        </span>
                                    </div>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            `;
    };

    // Self-reference to allow "Back" button to work
    Components.renderDeptGrid = () => {
      const container = document.getElementById("dept-container");
      if (container) {
        container.innerHTML = _renderGridHTML(departments);
      }
    };

    return `
            <div id="dept-container" class="h-full w-full">
                ${_renderGridHTML(departments)}
            </div>
        `;
  },
};

/* --- Helpers --- */

function _renderGridHTML(departments) {
  return `
        <div class="h-full flex flex-col p-8 bg-[#FAFAF8] overflow-hidden">
            <div class="mb-8">
                <h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Platform Organization</h2>
                <p class="text-[#5C5A56]">
                    Every function of a modern enterprise, mapped to an autonomous agent swarm. 
                    <strong>63 Specialized Roles</strong> ready to deploy.
                </p>
            </div>
            
            <div class="flex-1 overflow-y-auto pr-2">
                <div class="grid grid-cols-3 gap-6 pb-12">
                    ${departments
                      .map(
                        (dept) => `
                        <div onclick="window.showDeptDetails('${dept.slug}', '${dept.name}')" class="bg-white border border-[#EAEAEA] rounded-[4px] p-6 shadow-sm hover:shadow-md hover:border-blue-400 hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col h-full">
                            <div class="flex justify-between items-start mb-4">
                                <div class="w-12 h-12 bg-[#FAFAFA] rounded-full flex items-center justify-center text-2xl border border-[#EAEAEA] group-hover:scale-105 transition-transform">
                                    ${dept.icon}
                                </div>
                                <span class="font-mono text-[10px] uppercase tracking-wider text-[#767370] bg-[#F1F3F5] px-2 py-1 rounded-[2px]">
                                    ${dept.count}
                                </span>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors text-slate-800">
                                    ${dept.name}
                                </h3>
                                <p class="text-sm text-[#5C5A56] leading-relaxed">
                                    ${dept.desc}
                                </p>
                            </div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `;
}

function _renderDeptCard(name, health, status, agent, blocker) {
  const statusColors = {
    operational: "bg-green-500",
    warning: "bg-amber-500",
    critical: "bg-red-500",
  };

  return `
        <div class="bg-white p-4 rounded border border-slate-200 shadow-sm relative overflow-hidden">
            <div class="flex justify-between items-start mb-3">
                <h4 class="font-semibold text-slate-800">${name}</h4>
                <div class="flex gap-1">
                    <div class="w-2 h-2 rounded-full ${statusColors[status]}"></div>
                </div>
            </div>
            
            <div class="space-y-3">
                <div>
                    <div class="flex justify-between text-xs mb-1">
                        <span class="text-slate-500">Health</span>
                        <span class="font-mono ${status === "operational" ? "text-green-600" : "text-amber-600"}">${health}%</span>
                    </div>
                    <div class="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
                        <div class="h-full ${status === "operational" ? "bg-green-500" : "bg-amber-500"}" style="width: ${health}%"></div>
                    </div>
                </div>
                
                <div class="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 p-2 rounded">
                    <span>🤖</span> ${agent}
                </div>

                ${
                  blocker
                    ? `
                    <div class="flex items-center gap-2 text-[10px] text-red-700 bg-red-50 p-1.5 rounded border border-red-100 font-medium">
                        <span>⚠️ ${blocker}</span>
                    </div>
                `
                    : ""
                }
            </div>
        </div>
    `;
}

function _renderStatusBadge(status) {
  const styles = {
    DONE: "bg-green-100 text-green-700",
    REVIEW: "bg-purple-100 text-purple-700",
    IN_PROGRESS: "bg-blue-100 text-blue-700",
    PENDING: "bg-slate-100 text-slate-500",
    BLOCKED: "bg-red-100 text-red-700",
  };
  return `<span class="text-[10px] font-bold px-2 py-1 rounded ${styles[status] || styles.PENDING}">${status.replace("_", " ")}</span>`;
}
