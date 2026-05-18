# Startup Journey: ComputeFlow

## 1. Current Snapshot

- **Project name:** ComputeFlow
- **Local folder:** `/Users/joshuadavis/startups/computeflow`
- **Live URL:** https://computeflow.noaerth.com (portfolio subdomain pattern)
- **Live site status:** HTTP **200**
- **Product:** Global compute routing OS — route workloads across pools with an interactive `ComputeRouter` on the homepage
- **Framework:** Next.js App Router (`src/app`), TypeScript, Tailwind
- **Build command:** `pnpm build`
- **Local review command:** `pnpm dev` → http://localhost:3000
- **Current build status:** **PASS** (2026-05-14)
- **GitHub remote:** **None** — local `.git` may exist without remote; no GitHub push configured
- **GitHub push status:** N/A
- **Deployment:** **Not run** this loop
- **Last updated:** 2026-05-14

- Overall reality label: **VERIFIED (local build) + DEMO (product flows)**
- Launch readiness: **NOT READY**
- Proof ladder level: **4 — Local build proof**

## 2. Portfolio Score

| Dimension | Score (0–10) | Notes |
|-----------|----------------|-------|
| Product clarity | 9 | Global compute routing story is immediate |
| MVP reality | 8 | Homepage router, demo, dashboard, pricing |
| Visual quality | 9 | Strong technical product marketing + interactive preview |
| Build health | 8 | **PASS** |
| Customer urgency | 8 | Inference cost and latency pressure is acute |
| Market potential | 9 | Compute orchestration market is large |
| Monetization potential | 8 | Routing layer + enterprise path |
| Growth potential | 8 | Shareable routing plans internally |
| Investor story | 9 | “Routing layer above clouds” narrative |
| Local review readiness | 8 | Homepage `ComputeRouter` → `/demo` |

- **Total score:** **84 / 100**
- **Classification:** **Portfolio leader** — among highest-scoring products; documentation loop this cycle
- **Best next loop type:** **Engineering loop** (persisted routing profiles) or **GitHub** (remote + CI)

## 3. 10-Second Startup Explanation

- **What this startup is:** A global compute routing OS that plans where workloads should run based on cost, latency, and pool constraints.
- **Who it is for:** Platform teams, ML infra leads, and founders optimizing inference spend.
- **What pain it solves:** Workloads stuck on the wrong region/GPU tier; no shared routing plan across teams.
- **What the user can do:** Try `ComputeRouter` on the homepage, open demo and command center, review pricing.
- **Why it matters:** A bad routing decision burns budget every hour inference runs.
- **Primary CTA:** Try the router (homepage `#preview` or `/demo`)

## 4. Founder Thesis

- **Core belief:** Compute should be routed like traffic — policies, pools, and measurable tradeoffs.
- **Why this should exist:** Teams manually pick regions and instance types in spreadsheets.
- **Why now:** Multi-cloud GPUs, spot markets, and inference spikes demand a routing layer.
- **Market wedge:** Interactive `ComputeRouter` as proof, not a slide deck.
- **Expansion path:** Live pool feeds, team policies, billing integrations.
- **What this can become:** Default routing control plane above cloud consoles.
- **1000x opportunity:** Aggregated routing outcomes across consented workloads (anonymized).
- **Biggest strategic risk:** Perceived as calculator-only without production integrations.
- **Next founder decision:** Git remote + document which router inputs are illustrative vs live.

## 5. Live Website Diagnosis

Based on live site (HTTP **200**):

- **Status code or load status:** **200**
- **What visitors currently see:** Long-form marketing with interactive routing preview, pool network story, pricing.
- **Current headline:** Compute routing / global pools framing (verify live hero).
- **Current CTA:** “Try the router” on homepage section and header.
- **What works:** `ComputeRouter` on homepage is rare, high-trust MVP proof; mobile `Header` already present; build **PASS**.
- **What feels weak:** Dashboard may need sample routing history for first visit.
- **What feels generic:** “Multi-cloud” without showing a concrete before/after plan.
- **What feels confusing:** Which pools are illustrative vs connected — label explicitly.
- **What feels unfinished:** Production integration story vs interactive preview.
- **What feels premium:** Marketing depth + live interactive section.
- **What is missing:** GitHub remote; saved routing profiles.
- **Highest leverage live-site fix:** One-click “load sample workload” in `ComputeRouter`.

## 6. Local Codebase Diagnosis

- **Framework:** Next.js App Router under `src/app`, TypeScript, Tailwind
- **App structure:** Marketing homepage sections + product router + app pages
- **Current routes:** `/`, `/demo`, `/dashboard`, `/pricing`, `/about`, `/contact`
- **Current pages:** Home (with `ComputeRouter`), demo, dashboard, pricing, about, contact
- **Current components:** `Header` (mobile menu), `ComputeRouter`, site sections (`Hero`, `PoolNetwork`, `Pricing`, etc.)
- **Current data files:** Routing logic inside `ComputeRouter` and related libs (client-side preview)
- **Current styling system:** Dark technical marketing (`#04060d`) with gradient accents
- **Technical risks:** No GitHub remote — collaboration and CI missing
- **Build risks:** None — **PASS**
- **Env var risks:** Low for static preview; audit before live pool APIs
- **API risks:** None in MVP — future routing API needs versioning
- **Mobile risks:** **Mitigated** — `Header` includes mobile menu pattern
- **GitHub risks:** **No remote**
- **Local review risks:** Test router on narrow viewport; verify drawer links

## 7. Company Role Analysis

### CEO / Founder

- **Thesis:** Own the routing layer narrative above hyperscaler consoles.
- **Wedge:** Homepage interactive router as undeniable demo.
- **Biggest opportunity:** Become default planning surface before workloads ship.
- **Biggest risk:** Stuck in “cool demo” without persistence story.
- **Next decision:** Git remote + saved profiles on dashboard.

### Chief Product Officer

- **MVP:** Homepage router, `/demo`, `/dashboard`, `/pricing`.
- **Primary workflow:** Adjust workload → see routing plan → share internally.
- **Dashboard:** Command center for plans (per implementation).
- **Onboarding:** Homepage `#preview` is the aha.
- **Retention loop:** Re-route when workload or budget constraints change.

### Customer Researcher

- **Buyer:** Head of platform, ML infra lead, CTO at inference-heavy startups.
- **User:** Engineer evaluating region/GPU choices weekly.
- **Pain:** Surprise bills, latency regressions, manual spreadsheets.
- **Alternatives:** Cloud consoles, Kubecost, custom scripts, consultant spreadsheets.
- **Objections:** “Is this connected to our accounts?”
- **Trust builders:** Transparent assumptions, sample workloads, exportable plans.

### JTBD Strategist

- **Job-to-be-done:** “Show me the cheapest acceptable place to run this workload.”
- **Trigger:** Invoice spike, latency SLO miss, new model launch.
- **Desired outcome:** Named routing plan with cost/latency tradeoffs.
- **Old way:** Spreadsheet + tribal knowledge.
- **New way:** Router preview → dashboard history → future API.

### UX Designer

- **UX issue:** Mobile access to demo/dashboard — **already addressed** via `Header`.
- **Homepage flow:** Problem → solution → interactive preview → pricing.
- **App flow:** Router controls → plan output → CTA to demo/dashboard.
- **Mobile flow:** Header drawer to primary routes.
- **Friction removed:** Router usable without signup on homepage.

### Visual Design Director

- **Visual identity:** Dark infra aesthetic — credible to platform engineers.
- **Type:** Monospace-friendly for pool names; readable plan tables.
- **Color:** Gradients for emphasis; restrained elsewhere.
- **Motion:** CSS transitions; lucide icons in header.
- **Component style:** Section kit + product router visually aligned.

### Brand Strategist

- **Category:** Global compute routing OS.
- **Enemy:** Defaulting every workload to one region because it’s easy.
- **Memorable phrase:** “Route compute like traffic.”
- **Voice:** Precise, engineer-trusted, no magic cost guarantees.

### Copy Chief

- **Headline:** Routing OS, not “AI cloud optimizer.”
- **Subheadline:** Interactive plan with pools, cost, and latency tradeoffs.
- **CTA:** “Try the router.”
- **Copy rules:** Distinguish preview assumptions from live telemetry.

### Staff Engineer

- **Architecture:** Next marketing app + client-side routing engine preview.
- **Build:** **PASS**; `typecheck` script available.
- **Env strategy:** Document future API keys for pool providers.
- **Dependency plan:** Keep router schema stable when adding API.

### Frontend Engineer

- **Pages:** Homepage sections + demo + dashboard.
- **Components:** `ComputeRouter`, `Header`, marketing sections.
- **Interactions:** Real-time plan updates on slider/select changes.
- **Mobile fixes:** Header menu; ensure router controls fit narrow screens.

### Full-Stack Architect

- **Data:** Client preview today; future persisted `RoutingPlan` model.
- **Future database:** Postgres for plans, teams, audit.
- **Future auth:** Workspace per engineering team.
- **Future API:** `POST /api/route` with versioned plan schema.
- **Future billing:** Plans per month + API calls.

### AI Product Architect

- **AI use:** Optional narrative on tradeoffs — rules engine sufficient for MVP.
- **Safe boundaries:** Estimates, not contractual SLAs or invoices.
- **Future plan:** LLM explains plan diffs with citations to input knobs only.

### Data Moat Strategist

- **Data loop:** Planned vs actual cost/latency (with consent).
- **Feedback loop:** “Was this plan accurate?” after billing period.
- **Benchmark:** Routing choices by workload class (anonymized).

### Growth Marketer

- **Hook:** “Your inference bill is a routing problem.”
- **SEO:** compute routing, GPU region optimizer, inference cost routing.
- **Distribution:** ML infra newsletters, platform engineering communities.
- **Share loop:** Export routing plan PDF (backlog).

### Sales Operator

- **Buyer pain:** Uncontrolled inference spend and opaque region choices.
- **Proof:** Live **200** site with homepage router.
- **Pricing:** Team + API tier (hypothesis on `/pricing`).
- **Objections:** Production integration — roadmap slide with honest timeline.

### Pricing Strategist

- **Model:** SaaS seats + routing API usage.
- **Free tier:** Limited saved plans (hypothesis).
- **Paid tier:** Unlimited plans, exports, integrations.
- **Upgrade trigger:** Team wants shared routing policies.

### Investor Analyst

- **Venture thesis:** Routing control plane wins as inference becomes majority of cloud spend.
- **Market:** Cloud cost + orchestration for ML platforms.
- **Expansion:** Live pool feeds, policy engine, chargeback.
- **Moat:** Outcome-labeled routing models across consented workloads.
- **Metrics:** Router runs, saved plans, return visits, integration pilots.

### Competitive Intelligence Analyst

- **Category pattern:** FinOps tools vs routing-first planning surface.
- **Differentiation:** Interactive router on homepage + command center story.

### Experiment Designer

- **Tests:** Default sample workload auto-load vs blank router.
- **Success metric:** Router interaction → `/demo` or `/dashboard` visit.
- **Feedback loop:** Plan accuracy rating after use.

### QA Engineer

- **Build:** **PASS**
- **Routes:** `/`, `/demo`, `/dashboard`, `/pricing`, `/about`, `/contact`.
- **Mobile:** `Header` navigation and router controls.

### Security / Trust Reviewer

- **Risks:** Future API keys for cloud providers — vault in production.
- **Disclaimers:** Estimates for planning; verify with provider billing.
- **Data handling:** No customer workload metadata in analytics without consent.

### Legal / Policy Framing Reviewer

- **Risk category:** Low — infrastructure planning, not regulated advice.
- **Safe framing:** Routing intelligence, not guaranteed savings claims.
- **Required disclaimers:** Assumption labels on cost/latency outputs.

### GitHub Release Operator

- **Remote:** **None**
- **Commit / push:** Not run this loop (SPEED loop — docs only)

### Local Review Director

- **Command:** `cd /Users/joshuadavis/startups/computeflow && pnpm dev`
- **URL:** http://localhost:3000
- **Test flow:** Homepage `ComputeRouter` → `/demo` → mobile header

### Speed / Token Efficiency Operator

- **Scope:** **SPEED loop** — `startupjourney.md` + `NOAERTH_UPGRADE_REPORT.md` only; no code changes.
- **Blockers:** None — build already **PASS**; mobile `Header` already shipped.

### Taste Reviewer

- **Quality diagnosis:** Top-tier portfolio product — interactive homepage is standout.
- **Premium fix:** Plan diff view when sliders change (highlight what moved).

### Contrarian Strategist

- **Angle:** Partner with GPU marketplaces as routing distribution.
- **Wedge:** “Invoice week mode” — 48h routing audit SKU.

### Community / Ecosystem Builder

- **Community:** Platform engineering office hours on routing playbooks.
- **Public artifact:** Workload routing checklist (informational).

### Automation Architect

- **Safe automation:** CI `pnpm build` when remote exists.
- **Future:** Pool feed ingestion with human validation queue.

## 8. Product Strategy

- **MVP definition:** Homepage `ComputeRouter` + demo + dashboard + pricing.
- **Primary workflow:** Configure workload → see routing plan → iterate.
- **Input:** Workload profile knobs (compute type, latency budget, regions, etc.).
- **Output:** Routing plan with pool recommendations and tradeoffs.
- **First aha moment:** Plan changes visibly when latency budget tightens.
- **Dashboard purpose:** Saved plans and team visibility (per implementation).
- **Retention loop:** Re-route on new model or budget event.
- **Monetization path:** Seats + API + enterprise integrations.

## 9. Roadmap

### Loop 1: Make It Understandable

- Homepage marketing + router — **strong**.

### Loop 2: Make It Real

- Mobile `Header` — **already done**; sample workload presets next.

### Loop 3: Make It Premium

- Plan diff highlights; export styling.

### Loop 4: Make It Useful

- Saved profiles on dashboard; assumption footers on plans.

### Loop 5: Make It Monetizable

- Pricing aligned to saved plans and API tier.

### Loop 6: Make It Fundable

- Metrics: router runs, save rate, return visits.

### Loop 7: Make It Compound

- Live pool telemetry with validation queue.

### Loop 8: Make It Defensible

- Anonymized routing benchmarks by workload class.

### Loop 9: Make It Distributable

- ML infra newsletter partnerships; embeddable router widget.

### Loop 10: Make It Operationally Scalable

- Postgres, auth, routing API, audit logs, billing hooks.

## 10. Work Completed This Loop

### Loop Entry: 2026-05-14

- **Loop type:** **SPEED** — journey + upgrade report only
- **Loop goal:** Document portfolio state; no deployment; confirm **PASS** build and existing mobile `Header`
- **Changes made:** Created `startupjourney.md` and `NOAERTH_UPGRADE_REPORT.md`
- **Files changed:** `startupjourney.md`, `NOAERTH_UPGRADE_REPORT.md` (documentation only)
- **Routes added:** none
- **Routes improved:** none (documented existing)
- **Components added:** none
- **Components improved:** none — `Header` mobile menu already present
- **MVP interactions added:** none
- **Demo data added:** none
- **Copy improved:** none
- **Design improved:** none
- **Mobile improved:** none (already shipped)
- **Engineering fixed:** none
- **Build result:** **PASS** (unchanged)
- **GitHub commit:** N/A — no remote
- **GitHub push result:** N/A
- **Deployment:** **Not run**
- **Local review command:** `pnpm dev`
- **Local review URL:** http://localhost:3000
- **What improved:** Portfolio documentation accuracy
- **What still needs work:** Git remote; saved routing profiles; pool data source labels

## 11. Next Loop Plan

- **Highest leverage next move:** Git remote + CI; sample workload presets in `ComputeRouter`; dashboard saved plans.
- **Product:** Persist routing plans; export for finance review.
- **Design:** Plan diff visualization on knob changes.
- **Engineering:** Version future `/api/route` schema.
- **Growth:** One ML infra case study with honest assumptions.
- **Sales:** Pilot narrative for platform teams pre-launch.
- **Monetization:** Align `/pricing` with plans + API tiers.
- **Investor story:** Router runs and save rate.
- **Trust/safety:** No guaranteed savings language; assumption footers.
- **GitHub:** Add `origin` when user approves.
- **Biggest risk:** Demo perceived as disconnected from production telemetry.
- **Suggested next command:** `cd /Users/joshuadavis/startups/computeflow && pnpm dev`

## 12. 1000x Backlog

### Product

- Live pool feeds; policy engine; chargeback views

### Design

- Plan export PDF; diff highlights

### Engineering

- Postgres; auth; routing API; CI on GitHub

### Growth

- ML infra content; platform eng newsletters

### Sales

- Enterprise pilot for inference-heavy teams

### Monetization

- Seats + API usage tiers

### Investor Narrative

- “Global compute routing OS”

### Data Moat

- Aggregated routing outcomes (consented)

### Automation

- Pool feed ingestion with validation queue

### Partnerships

- GPU marketplaces; cloud resellers

### SEO / Content

- Inference routing guides (estimates, not guarantees)

### User Retention

- Alerts on budget threshold; monthly routing review

### Demo Quality

- Presets for LLM inference, batch training, edge burst

### Mobile Experience

- Router controls usable on phone (verify regularly)

### Trust and Safety

- Assumption labels on all cost/latency numbers

### Real API Integrations

- Cloud billing and telemetry read-only where licensed

### Enterprise Features

- SSO; RBAC; audit logs

### Future AI Features

- Plan explanations with citations to inputs only

### Community

- Routing office hours for platform teams

### Distribution

- Embeddable router for partner sites

### Templates

- Standard policies per workload class

### Analytics

- Funnel: router → save → dashboard return

### Internal Tools

- Copy linter for savings guarantee language

### Public Artifacts

- Compute routing readiness checklist

## Work completed this loop
### Portfolio loop (2026-05-16)

- Graphics kit, TrustStrip, SubpageVisual, LOCAL_REVIEW, PROOF_LOOP in place.
- Build status: see `.noaerth_full_build_status.tsv` at portfolio root.
- Claim level: DEMO for public metrics unless marked PROVEN below.


## 8. Work Completed This Loop (Hyperion v6 — 2026-05-18)
- Mode: REALITY LABELS + portfolio memory
- Build matrix: **PASS** (portfolio TSV)
- Reality labels: snapshot + evidence map normalized
- Git: see per-project safe commit

## 8. Work Completed This Loop (BlackDiamond v7 — 2026-05-18)
- Mode: CLAIM REGISTER + FAILURE REGISTER
- Build matrix: **PASS** (portfolio TSV)
- Claim register: created/updated
- Failure register: created/updated
- Launch gate: LOCAL REVIEW READY if build PASS (not PUBLIC READY)
- Git: see per-project safe commit

## 8. Work Completed This Loop (EverestKernel v8 — 2026-05-18)
- Mode: LAUNCH READINESS + REVIEW QUEUE
- LAUNCH_READINESS.md: installed/updated
- Build matrix: **PASS**
- Launch gate: **NOT READY**
- Review queue: see NOAERTH_REVIEW_QUEUE.md if P1 demo project
- Deployment: none

## 8. Work Completed This Loop (SovereignCompiler v9 — 2026-05-18)
- Mode: DECISION RECORD + launch governance
- DECISION_RECORD.md: installed/updated
- Build matrix: **PASS** (TSV; spot-build after code changes)
- AI boundary: no deploy, no vercel --prod

## 8. Work Completed This Loop (SingularityForge v11 — 2026-05-18)
- Mode: PROOF LADDER + claim safety batch
- Proof ladder: **4 — Local build proof**
- Build matrix: **PASS** (TSV; spot-build after code changes)
- No deploy

## TitanAtlas v13 patch (2026-05-18)
- Scored total: 68/100 · stage: dashboard MVP · priority: P2
- Recommended action: local review + claim safety
