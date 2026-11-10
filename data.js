/* ============================================================
   MBA Summer 2027 Internship Tracker — seed data
   Researched 4 November 2026 · Yale SOM Class of 2028
   Targets: product / business / corporate / operations strategy
   ------------------------------------------------------------
   This file is the SEED. Anything you add, edit, archive or
   dismiss in the browser is stored on top of it in localStorage
   and survives reloads. Use Export in the header to back it up.
   ------------------------------------------------------------
   status: 'confirmed' = close date published by the employer
           'rolling'   = open, no published close; date is an estimate
           'notposted' = expected this cycle, req not live yet
           'closed'    = window has passed  -> Archived tab
   track:  'strategy'  = matches the target functions -> role tabs
           'other'     = MBA internship, different function -> Consideration
   cat:    'tech' | 'consulting' | 'other'
   ============================================================ */

const BUILD_DATE = '2026-11-05';

/* ---------------- TARGET COMPANY LIST ---------------- */
const BASE_COMPANIES = [
  /* --- TECH --- */
  {name:'Google',            cat:'tech', url:'https://www.google.com/about/careers/applications/jobs/results/?q=MBA%20intern%202027'},
  {name:'Amazon',            cat:'tech', url:'https://www.amazon.jobs/en/search?base_query=MBA+intern+2027'},
  {name:'Microsoft',         cat:'tech', url:'https://careers.microsoft.com/v2/global/en/students'},
  {name:'Apple',             cat:'tech', url:'https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN'},
  {name:'Meta',              cat:'tech', url:'https://www.metacareers.com/jobs?q=MBA%20intern&is_intern=true'},
  {name:'Nvidia',            cat:'tech', url:'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=MBA%20intern'},
  {name:'Adobe',             cat:'tech', url:'https://adobe.wd5.myworkdayjobs.com/external_university?q=MBA%20intern'},
  {name:'Salesforce',        cat:'tech', url:'https://careers.salesforce.com/en/jobs/?search=MBA+intern+2027&pagesize=20'},
  {name:'Oracle',            cat:'tech', url:'https://careers.oracle.com/jobs/#en/sites/jobsearch/jobs?keyword=MBA%20intern'},
  {name:'IBM',               cat:'tech', url:'https://www.ibm.com/careers/search?field_keyword_08[0]=Internship'},
  {name:'Intel',             cat:'tech', url:'https://jobs.intel.com/en/search-jobs/intern%20MBA'},
  {name:'Cisco',             cat:'tech', url:'https://jobs.cisco.com/jobs/SearchJobs/intern'},
  {name:'Netflix',           cat:'tech', url:'https://explore.jobs.netflix.net/careers?query=intern'},
  {name:'Uber',              cat:'tech', url:'https://www.uber.com/us/en/careers/list/?query=MBA%20intern'},
  {name:'Airbnb',            cat:'tech', url:'https://careers.airbnb.com/university/'},
  {name:'LinkedIn',          cat:'tech', url:'https://careers.linkedin.com/students'},
  {name:'Spotify',           cat:'tech', url:'https://www.lifeatspotify.com/start-your-journey/students'},
  {name:'PayPal',            cat:'tech', url:'https://careers.pypl.com/Students-and-Graduates/'},
  {name:'Stripe',            cat:'tech', url:'https://stripe.com/jobs/search?query=MBA'},
  {name:'Block (Square)',    cat:'tech', url:'https://block.xyz/careers/jobs?search=intern'},
  {name:'Intuit',            cat:'tech', url:'https://jobs.intuit.com/search-jobs/MBA%202027/27595/1'},
  {name:'ServiceNow',        cat:'tech', url:'https://careers.servicenow.com/careers/jobs/?search=intern'},
  {name:'Workday',           cat:'tech', url:'https://workday.wd5.myworkdayjobs.com/Workday?q=intern'},
  {name:'Snowflake',         cat:'tech', url:'https://careers.snowflake.com/us/en/search-results?keywords=intern'},
  {name:'Databricks',        cat:'tech', url:'https://www.databricks.com/company/careers/open-positions?department=University%20Recruiting'},
  {name:'Palantir',          cat:'tech', url:'https://www.palantir.com/careers/?lever-via=internship'},
  {name:'Shopify',           cat:'tech', url:'https://www.shopify.com/careers/interns'},
  {name:'DoorDash',          cat:'tech', url:'https://careersatdoordash.com/university/'},
  {name:'Instacart',         cat:'tech', url:'https://instacart.careers/current-openings/'},
  {name:'Pinterest',         cat:'tech', url:'https://www.pinterestcareers.com/university/'},
  {name:'Snap',              cat:'tech', url:'https://careers.snap.com/jobs?search=intern'},
  {name:'Dropbox',           cat:'tech', url:'https://jobs.dropbox.com/all-jobs?search=intern'},
  {name:'Atlassian',         cat:'tech', url:'https://www.atlassian.com/company/careers/all-jobs?search=intern'},
  {name:'HubSpot',           cat:'tech', url:'https://www.hubspot.com/careers/jobs?search=intern'},
  {name:'Zoom',              cat:'tech', url:'https://careers.zoom.us/jobs?search=intern'},
  {name:'Tesla',             cat:'tech', url:'https://www.tesla.com/careers/search/?type=3&site=US'},
  {name:'OpenAI',            cat:'tech', url:'https://openai.com/careers/search/'},
  {name:'Anthropic',         cat:'tech', url:'https://www.anthropic.com/careers'},
  {name:'Scale AI',          cat:'tech', url:'https://scale.com/careers'},
  {name:'Samsung',           cat:'tech', url:'https://www.samsung.com/us/careers/students/'},
  {name:'Qualcomm',          cat:'tech', url:'https://careers.qualcomm.com/careers?query=intern'},
  {name:'AMD',               cat:'tech', url:'https://careers.amd.com/careers-home/jobs?keywords=intern'},

  /* --- CONSULTING --- */
  {name:'McKinsey',                cat:'consulting', url:'https://www.mckinsey.com/careers/search-jobs?filters=InterestedIn:Internships'},
  {name:'BCG',                     cat:'consulting', url:'https://careers.bcg.com/global/en/on-campus/united-states-associate-job-opportunities'},
  {name:'Bain',                    cat:'consulting', url:'https://www.bain.com/careers/find-a-role/?experience=MBA'},
  {name:'Kearney',                 cat:'consulting', url:'https://kearney.recsolu.com/external/jobs'},
  {name:'Oliver Wyman',            cat:'consulting', url:'https://careers.oliverwyman.com/early-careers'},
  {name:'L.E.K. Consulting',       cat:'consulting', url:'https://www.lek.com/careers/apply-now'},
  {name:'Roland Berger',           cat:'consulting', url:'https://www.rolandberger.com/en/Join/All-Jobs/'},
  {name:'Strategy& (PwC)',         cat:'consulting', url:'https://jobs-us.pwc.com/us/en/search-results?keywords=Strategy%26%20intern%20summer%202027'},
  {name:'Deloitte',                cat:'consulting', url:'https://apply.deloitte.com/en_US/careers/SearchJobs/summer%20associate%20strategy'},
  {name:'PwC',                     cat:'consulting', url:'https://jobs-us.pwc.com/us/en/search-results?keywords=MBA%20intern%20summer%202027'},
  {name:'EY-Parthenon',            cat:'consulting', url:'https://usearlycareers.ey.com/'},
  {name:'KPMG',                    cat:'consulting', url:'https://www.kpmguscareers.com/jobs/?keyword=intern'},
  {name:'Accenture',               cat:'consulting', url:'https://www.accenture.com/us-en/careers/jobsearch?jk=MBA%20internship'},
  {name:'Alvarez & Marsal',        cat:'consulting', url:'https://www.alvarezandmarsal.com/careers'},
  {name:'AlixPartners',            cat:'consulting', url:'https://www.alixpartners.com/careers/students-and-recent-graduates/internships/'},
  {name:'FTI Consulting',          cat:'consulting', url:'https://fticonsulting.wd1.myworkdayjobs.com/FTIConsulting?q=intern'},
  {name:'Huron',                   cat:'consulting', url:'https://careers.huronconsultinggroup.com/students'},
  {name:'ZS Associates',           cat:'consulting', url:'https://jobs.zs.com/search-jobs/intern'},
  {name:'Putnam Associates',       cat:'consulting', url:'https://www.putassoc.com/careers/'},
  {name:'Simon-Kucher',            cat:'consulting', url:'https://www.simon-kucher.com/en/careers/job-search'},
  {name:'Analysis Group',          cat:'consulting', url:'https://www.analysisgroup.com/careers/career-path/summer-associate-intern/'},
  {name:'Cornerstone Research',    cat:'consulting', url:'https://www.cornerstone.com/careers/open-positions/'},
  {name:'Charles River Associates',cat:'consulting', url:'https://ecp.crai.com/careers/'},
  {name:'Keystone Strategy',       cat:'consulting', url:'https://www.keystonestrategy.com/careers/open-roles/'},
  {name:'Booz Allen Hamilton',     cat:'consulting', url:'https://careers.boozallen.com/teams/students'},
  {name:'Guidehouse',              cat:'consulting', url:'https://guidehouse.com/careers/campus'},
  {name:'West Monroe',             cat:'consulting', url:'https://www.westmonroe.com/careers/early-careers'},
  {name:'Capgemini Invent',        cat:'consulting', url:'https://www.capgemini.com/us-en/careers/join-capgemini/students-and-graduates/'},
  {name:'Arthur D. Little',        cat:'consulting', url:'https://www.adlittle.com/en/careers'},
  {name:'Marakon',                 cat:'consulting', url:'https://www.charlesriverassociates.com/careers'},

  /* --- OTHER INDUSTRIES --- */
  {name:'1X',                cat:'other', url:'https://www.1x.tech/careers'},
  {name:'Agility Robotics',  cat:'other', url:'https://www.agilityrobotics.com/careers'},
  {name:'American Airlines', cat:'other', url:'https://jobs.aa.com/go/MBA-Leadership/9297500/'},
  {name:'Booking.com',       cat:'other', url:'https://careers.booking.com/early-careers'},
  {name:'Boston Dynamics',   cat:'other', url:'https://bostondynamics.com/careers/'},
  {name:'Delta',             cat:'other', url:'https://careers.delta.com/university'},
  {name:'Disney',            cat:'other', url:'https://www.disneycareers.com/en/category/business-strategy-and-development-jobs/391/8221792/1'},
  {name:'Epic Games',        cat:'other', url:'https://www.epicgames.com/site/earlycareers'},
  {name:'Expedia',           cat:'other', url:'https://careers.expediagroup.com/earlycareers/'},
  {name:'Figure AI',         cat:'other', url:'https://www.figure.ai/careers'},
  {name:'GE Aerospace',      cat:'other', url:'https://careers.geaerospace.com/global/en/students'},
  {name:'Hyatt',             cat:'other', url:'https://careers.hyatt.com/en-US/careers/SearchJobs/intern'},
  {name:'Universal',         cat:'other', url:'https://www.nbcunicareers.com/early-careers'}
];

/* Companies searched where no MBA internship of any kind was found.
   Shown only on the Company Job Boards tab so you keep the link. */
const NO_ROLE_COMPANIES = {
  'Pinterest':'Summer 2027 US reqs opened 1 Oct 2026 but are all technical (SWE, MS/PhD ML, MS/PhD Data Science, UX). No MBA seat.',
  'Palantir':'30 US reqs live on Lever 6 Oct 2026, all engineering and forward-deployed. Palantir hires business staff as FDEs, not strategy interns.',
  'Dropbox':'Only Summer 2027 req is a virtual SWE internship.',
  'Instacart':'No US internship posting for Summer 2027 as of 11 Oct 2026.',
  'OpenAI':'No live 2027 intern req found in late Sep 2026; existing roles are research and engineering.',
  'Scale AI':'Summer 2027 listings are SWE, ML research and AI Builder only.',
  'Shopify':'No 2027 MBA posting surfaced. Research gap rather than confirmed absence.',
  'Oracle':'No MBA strategy posting surfaced. Research gap — check the board directly.',
  'IBM':'No MBA posting surfaced. IBM Consulting runs an MBA track in some cycles — check separately.',
  'Intel':'No MBA posting surfaced. Research gap.',
  'Cisco':'No MBA posting surfaced. Cisco has historically run an MBA Corporate Strategy internship — worth a direct check.',
  'Qualcomm':'No MBA posting surfaced. Research gap.',
  'AMD':'No MBA posting surfaced. Research gap.',
  'Samsung':'No MBA internship. The Global Strategy Group is a full-time post-MBA programme, not a summer seat.',
  'Zoom':'No internship results at all for the 2027 cycle. Research gap.',
  'Netflix':'Runs occasional MBA internships ad hoc. Summer 2027 reqs so far are SWE only. Monitor weekly — an LA business req would fit well.',
  'LinkedIn':'No 2027 results surfaced. Historically runs an MBA product / business-ops internship. Research gap — worth a direct check.',
  'HubSpot':'Grouped with ServiceNow and Intuit as fall PM-intern hirers, but no req details found. Remote-friendly.',
  'Workday':'A PM Intern req in Pleasanton surfaced via an aggregator but could not be verified and MBA eligibility is unknown.',
  'Anthropic':'No traditional internship. Student track is a research fellowship (Jan 2027 cohort), not an MBA seat.',
  'KPMG':'Summer/Fall 2027 reqs are Audit, Tech Assurance and Advisory Associate, aimed at undergrads and MAcc. Route in is KPMG Strategy directly.',
  'West Monroe':'67 postings live but the programme is explicitly for college juniors. Not MBA-eligible as structured.',
  'Huron':'No Student Consultant or Summer Associate reqs live for the 2027 cycle as of Aug 2026.',
  'Capgemini Invent':'No US summer 2027 intern roles posted as of 9 Oct 2026. Student offering is a sophomore workshop.',
  'Putnam Associates':'Eligibility text explicitly excludes graduate students and MBA candidates. Posting came down 16–21 Oct 2026.',
  'Arthur D. Little':'No US MBA 2027 posting found. US intake appears ad hoc — direct outreach to Boston is the route.',
  'Marakon':'Acquired by CRA and folded into its Management Consulting practice. Apply via CRA instead.',
  'Hyatt':'Summer 2027 Corporate Internship Program is scoped to sophomores and juniors. Only MBA item found (World of Hyatt marketing) is closed.',
  '1X':'No internship programme at all. Direct outreach to a Chief of Staff or BizOps lead is the realistic route.',
  'Figure AI':'Winter 2027 reqs are engineering and CS/Robotics masters only. Watch the "Special Projects Intern" req.',
  'Agility Robotics':'Only a Spring 2027 technical internship (11 Jan – 14 May), which clashes with the SOM academic year.',
  'Boston Dynamics':'No internship listings. Now wholly Hyundai-owned — check Hyundai Motor Group MBA programmes instead.'
};

/* ---------------- ROLE DATABASE ---------------- */
const SEED_ROLES = [

/* ============================================================
   CONSULTING — strategy track
   ============================================================ */
{cat:'consulting', track:'strategy', company:'Oliver Wyman', title:'MBA Summer Associate 2027 — Health & Life Sciences',
 location:'New York, NY (also listed Boston, Chicago, San Francisco)',
 deadline:'2026-11-05', status:'closed', url:'https://careers.marsh.com/global/en/job/MAMCGLOBALR363378EXTERNALENGLOBAL/Oliver-Wyman-2027-MBA-Summer-Associate-Health-Life-Sciences',
 why:'10-week summer associate internship in the Health & Life Sciences practice — client-facing strategy work, but industry-specific rather than the generalist seat.',
 note:'VERIFIED 5 Nov 2026: FILLED. The official Marsh McLennan careers page for this req now reads "this job has been filled." No GENERALIST Oliver Wyman MBA Summer Associate req exists for 2027 — only this HLS one, and it is gone. My earlier 7 Nov date came from last cycle and was wrong. If you want Oliver Wyman, the only route left is the SOM CDO board or a direct note to campus recruiting. No sponsorship offered on this req.'},

{cat:'consulting', track:'strategy', company:'BCG', title:'Summer Consultant (1st-year MBA), Summer 2027',
 location:'All US offices — Miami and Los Angeles both available',
 deadline:'2026-11-10', status:'confirmed', url:'https://careers.bcg.com/global/en/on-campus/united-states-associate-job-opportunities',
 why:'The benchmark MBA strategy internship. One or two client cases over ~10 weeks spanning corporate strategy, growth and operations. Office preference is part of the application and BCG staffs both Miami and LA.',
 note:'VERIFIED 5 Nov 2026: CONFIRMED 10 Nov 2026, 11:59pm — one application covers 22 US offices. IMPORTANT ROUTE NOTE: BCG’s public US associate page explicitly says MBA candidates are NOT eligible to apply through it and that BCG contacts MBA candidates directly. Apply via the SOM campus page on careers.bcg.com or the CDO — not the general board. Highest-priority item on this dashboard.'},

{cat:'consulting', track:'strategy', company:'Bain', title:'Summer Associate (1st-year MBA), Summer 2027',
 location:'All US offices — Los Angeles available; Miami via the Atlanta/Southeast system',
 deadline:'2026-11-11', status:'confirmed', url:'https://www.bain.com/careers/find-a-role/?experience=MBA',
 why:'Ten-week case-team role on live corporate and business-unit strategy work. Bain weights the office-fit conversation heavily, so name LA explicitly and give a reason.',
 note:'VERIFIED 5 Nov 2026: CONFIRMED 11 Nov 2026 on the Management Consulted firm-confirmed table (prior cycle was 13 Nov 2025, consistent). Verify the exact hour on the Bain portal and check whether SOM runs its own window.'},

{cat:'consulting', track:'strategy', company:'AlixPartners', title:'MBA Intern — Turnaround & Restructuring, Summer 2027',
 location:'New York · Chicago · Dallas · Houston',
 deadline:'2026-11-12', status:'confirmed', url:'https://www.alixpartners.com/careers/7810004003/turnaround--restructuring-mba-intern/',
 why:'Operations strategy under pressure — liquidity, cost structure and operating-model turnaround for distressed companies. The most operationally hands-on strategy internship on this list.',
 note:'VERIFIED 5 Nov 2026: CONFIRMED 12 Nov 2026 — and it is ON THE YALE SOM CDO BOARD, so apply through SOM. Internship runs 7 Jun – 13 Aug 2027. Requires MBA graduation Dec 2027–Aug 2028. Posted salary $35,000 for the term. Locations corrected — Houston, not Detroit.'},

{cat:'consulting', track:'strategy', company:'AlixPartners', title:'MBA Intern — Strategy & Analysis, Summer 2027',
 location:'Any US location (weekly travel to the project site)',
 deadline:'', status:'rolling', url:'https://www.alixpartners.com/careers/students-and-recent-graduates/internships/',
 why:'The pure-strategy half of AlixPartners: growth strategy, commercial diligence and performance improvement. Closer to your stated targets than the restructuring track, and location-flexible, which suits your Miami/LA preference.',
 note:'VERIFIED 5 Nov 2026: NO DEADLINE PUBLISHED and applications are OPEN on AlixPartners’ own internships page. My earlier assumption that it shared the 12 Nov expiry was wrong — this req is separate and has no stated close. 10-week programme, 7 Jun – 13 Aug 2027. Apply early anyway; seats go on a rolling basis.'},

{cat:'consulting', track:'strategy', company:'BCG', title:'BCG X — Summer Consultant / Product Strategy, Summer 2027',
 location:'US offices — strongest in NY, SF, Boston',
 deadline:'2026-11-17', status:'confirmed', url:'https://careers.bcg.com/global/en/on-campus/united-states-associate-job-opportunities',
 why:'BCG’s build-and-design unit. Product strategy with real engineering adjacency — digital product, AI ventures and new-business building rather than classic slide-based casework.',
 note:'VERIFIED 5 Nov 2026: 17 Nov 2026, a week later than the core BCG req — corroborated by one specialist source only, so treat as likely rather than certain. A separate application from the core Summer Consultant req; you may apply to both, but BCG will ask which you prefer. Same MBA routing caveat: go via the SOM campus page.'},

{cat:'consulting', track:'strategy', company:'PwC', title:'Strategy& — Strategy Consulting Senior Associate Intern, Summer 2027',
 location:'Rosemont IL, New York, Chicago, Dallas, San Francisco, Boston, Los Angeles',
 deadline:'2026-11-18', status:'confirmed', url:'https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/Strategy--Strategy-Consulting-Senior-Associate-Intern---Summer-2027_765647WD',
 why:'Strategy&’s MBA-level intern track and a direct corporate-strategy hit: growth strategy, deals diligence and operating-model design for Fortune 500 clients. $84k–$202k prorated.',
 note:'VERIFIED 5 Nov 2026 on PwC’s own Workday: posting end date 18 Nov 2026, posted 2 Oct. One guide says MBA applications close 17 Nov at 5pm ET — APPLY BY 17 NOV to be safe. PwC also closes reqs by office as offers are accepted, so a posting can shut before its listed date.'},

{cat:'consulting', track:'strategy', company:'PwC', title:'Strategy& — Deals Strategy Senior Associate Intern, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/Strategy--Deals-Strategy-Senior-Associate-Intern---Summer-2027_765700WD',
 why:'Commercial due diligence and deal-side strategy — market attractiveness, growth cases and synergy analysis for PE and corporate acquirers. A distinct req from the Strategy Consulting track and a strong corporate-strategy fit.',
 note:'FOUND 5 Nov 2026 during verification — this req was not on the dashboard before. VERIFIED posting end date 18 Nov 2026 on PwC’s own Workday (req 765700WD), posted 2 Oct. Apply by 17 Nov to be safe.'},

{cat:'consulting', track:'strategy', company:'PwC', title:'Strategy& — Sustainability Strategy Senior Associate Intern, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/Strategy--Sustainability-Strategy-Senior-Associate-Intern---Summer-2027_765703WD',
 why:'Corporate strategy through a decarbonisation and transition lens — portfolio choices, operating-model change and growth strategy for climate-exposed businesses.',
 note:'FOUND 5 Nov 2026 during verification. VERIFIED apply-by 18 Nov 2026 (req 765703WD). Sits inside Strategy& rather than the separate Sustainability consulting practice, so the casework is strategy-led.'},

{cat:'consulting', track:'strategy', company:'PwC', title:'Strategy& — Strategy Consulting Intern, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/Strategy--Strategy-Consulting-Intern---Summer-2027_757258WD',
 why:'Companion req to the Senior Associate track. Same casework; office allocation differs by req, so applying to both widens your geography.',
 note:'CONFIRMED 18 Nov 2026. Check which req the SOM cohort is routed to before doubling up.'},

{cat:'consulting', track:'strategy', company:'Accenture', title:'Strategy Summer Consultant — MBA Internship (NAELFY27)',
 location:'New York, NY · Chicago, IL',
 deadline:'2026-11-29', status:'confirmed', url:'https://www.accenture.com/us-en/careers/jobdetails?id=R00361148_en',
 why:'Explicitly an MBA strategy internship covering business-model innovation, operating strategy, post-merger integration and tech-enabled transformation — a direct hit on all four target strategy types. ~10 weeks from June.',
 note:'VERIFIED 5 Nov 2026 on Accenture’s own posting — STILL OPEN, apply by 29 Nov 2026. MBA graduation Dec 2027–Aug 2028 (fits SOM 2028). In-person, NY or Chicago. $66.3k–$188.1k NY / $59.1k–$188.1k IL. This is the ONLY MBA req among nine US NAELFY27 postings — the other eight are Summer Analyst.'},

{cat:'consulting', track:'strategy', company:'EY-Parthenon', title:'Strategy & Execution Summer Consultant 2027',
 location:'Boston, New York, Chicago, San Francisco, Los Angeles, Dallas, Atlanta',
 deadline:'2026-11-29', status:'confirmed', url:'https://usearlycareers.ey.com/business/job_type/intern/39053/5',
 why:'EY-Parthenon is the strategy house inside EY — corporate strategy, commercial due diligence and growth strategy casework. LA is a staffed office. ~$3,800/week.',
 note:'VERIFIED 5 Nov 2026 on EY’s own early-careers timelines page: the MBA intern window for Consulting and EY-Parthenon opens 5 Oct and closes 29 Nov 2026. IMPORTANT: EY asks candidates to apply to NO MORE THAN TWO jobs in any six-month period — so you must choose at most two of the three EY reqs on this dashboard. Some roles stay posted only until filled.'},

{cat:'consulting', track:'strategy', company:'EY', title:'Consulting — Supply Chain & Operations MBA Intern, Summer 2027',
 location:'Washington DC, New York, Chicago, Dallas, Atlanta',
 deadline:'2026-11-29', status:'confirmed', url:'https://usearlycareers.ey.com/business/job_type/intern/39053/5',
 why:'Your operations-strategy slot: operating-model redesign, network and supply-chain strategy, and cost transformation. Strategy work, not execution/PMO.',
 note:'VERIFIED 5 Nov 2026: same MBA window, 5 Oct – 29 Nov 2026. Counts against EY’s two-applications-per-six-months cap — see the EY-Parthenon row.'},

{cat:'consulting', track:'strategy', company:'McKinsey', title:'Summer Associate (MBA), Summer 2027',
 location:'All US offices — Miami and Los Angeles both available',
 deadline:'2026-11-12', status:'confirmed', url:'https://www.mckinsey.com/careers/search-jobs?filters=InterestedIn:Internships',
 why:'The flagship MBA strategy internship: ~10 weeks on a single client study spanning corporate, business-unit or operations strategy. Office preference is part of the application and both Miami and LA take Summer Associates.',
 note:'VERIFIED 5 Nov 2026 — DATE MOVED UP 18 DAYS. Two independent sources now give 12 Nov 2026 for Summer Associate (1Y MBA); my earlier 30 Nov estimate was wrong and would have cost you the application. Window was confirmed still open as of 26 Oct. McKinsey can also set school-specific dates, and missing a school deadline means the application is not considered — confirm the SOM date with the CDO immediately.'},

{cat:'consulting', track:'strategy', company:'Kearney', title:'2027 Kearney Summer Associate',
 location:'Atlanta, Boston, Chicago, Dallas, New York, San Francisco, DC (no Miami or LA)',
 deadline:'2026-12-01', status:'confirmed', url:'https://cdo.som.yale.edu/jobs/kearney-2027-kearney-summer-associate/',
 why:'Generalist MBA summer associate with a genuine operations-strategy tilt — Kearney’s heritage is supply chain, procurement and operations transformation.',
 note:'VERIFIED 5 Nov 2026 on the Yale SOM CDO listing: submit by TUESDAY 1 DEC 2026, 11:59pm CT. 10-week internship; Round 1 and Round 2 interviews are VIRTUAL in January 2027. First-year MBA required. You rank a practice on the application — General Practice, Strategic Operations, or Digital & Analytics. PERLab is Chicago-only and PEPI is Chicago or New York. No Miami or LA option.'},

{cat:'consulting', track:'strategy', company:'Booz Allen Hamilton', title:'Summer 2027 Consulting Internship (graduate-eligible reqs)',
 location:'McLean VA, Washington DC, and client sites nationwide',
 deadline:'2026-12-10', status:'rolling', url:'https://careers.boozallen.com/teams/students',
 why:'Strategy and operations consulting for federal and commercial clients. Worth a look for operations strategy, though the work is more delivery-weighted than MBB and much of it is government.',
 note:'ESTIMATED from Workday end dates in early-to-mid Dec 2026. 70+ reqs live as of Sep 2026. US citizenship required on cleared roles — check each req.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Internal Services — Summer Associate, Internal Strategy',
 location:'New York, NY',
 deadline:'2026-12-11', status:'rolling', url:'https://apply.deloitte.com/en_US/careers/JobDetail/Internal-Services-Summer-Associate-Internal-Strategy-Summer-2027/367722',
 why:'Deloitte’s in-house corporate strategy team — you are the client. Portfolio strategy, M&A support and growth planning for the firm itself.',
 note:'VERIFIED 5 Nov 2026 — THREE CONFLICTING DATES on the same role: one Deloitte listing shows 11 Dec 2026, another says "best applied by 20 Dec", and its structured data says 31 Jan 2027. I have used the EARLIEST. Treat 11 Dec as the deadline.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Summer Associate — Enterprise Tech Strategy',
 location:'Multiple US offices',
 deadline:'2027-02-28', status:'rolling', url:'https://apply.deloitte.com/en_US/careers/SearchJobs/enterprise%20tech%20strategy',
 why:'Technology strategy: IT operating model, platform and architecture choices tied to business outcomes. A strong bridge between your product-strategy and business-strategy targets.',
 note:'ESTIMATED. Listed as a rolling summer associate track. Same eligibility as the other Deloitte strategy reqs.'},

{cat:'consulting', track:'strategy', company:'Cornerstone Research', title:'Summer Associate — MBA, Summer 2027',
 location:'Boston · New York · Chicago · San Francisco · Los Angeles',
 deadline:'2026-12-31', status:'rolling', url:'https://www.cornerstone.com/careers/open-positions/',
 why:'Economic and financial consulting on litigation. Analytically rigorous and well paid ($7,500 bi-weekly) but narrower than your four target functions — expert-witness analysis, not corporate strategy. LA office available.',
 note:'ESTIMATED from a valid-through date of 31 Dec 2026 on a posting carrying a 2025 requisition ID — the 2027 req may not be live yet. Verify before investing time.'},

{cat:'consulting', track:'strategy', company:'Simon-Kucher', title:'Summer 2027 Consultant Intern — Americas / Healthcare & Life Sciences',
 location:'Boston, New York, San Francisco, Chicago, Atlanta',
 deadline:'2027-01-15', status:'rolling', url:'https://www.simon-kucher.com/en/careers/job-search',
 why:'The pricing and commercial-strategy specialist. Narrow but deep: pricing strategy, monetisation and go-to-market design. A strong complement to a product-strategy target since pricing is where product strategy becomes revenue.',
 note:'VERIFIED 5 Nov 2026: reqs went live 13 Jul 2026 with NO published close date; the firm reviews MBA applications Oct–Jan on a rolling basis. The MBA posting asks for graduation May–Jun 2028 (fits you) and runs 9 weeks, 7 Jun – 6 Aug 2027.'},

{cat:'consulting', track:'strategy', company:'ZS Associates', title:'Summer 2027 Consulting Intern (MBA-eligible)',
 location:'Evanston IL, New York, Boston, San Francisco, Philadelphia',
 deadline:'2027-01-15', status:'rolling', url:'https://jobs.zs.com/search-jobs/intern',
 why:'Commercial strategy for pharma and life sciences — market access, launch strategy and salesforce design. An 11-week programme. Industry-specific, so only pursue if healthcare appeals.',
 note:'ESTIMATED. Nine North America intern reqs live as of 1 Oct 2026 with rolling review and no printed deadline.'},

{cat:'consulting', track:'strategy', company:'Analysis Group', title:'Summer Associate Intern (generalist / healthcare)',
 location:'Boston, New York, Chicago, San Francisco, Los Angeles, DC',
 deadline:'2026-12-01', status:'confirmed', url:'https://www.analysisgroup.com/careers/career-path/summer-associate-intern/',
 why:'Economic consulting with generalist and healthcare tracks. Analytical litigation and health-economics work rather than corporate strategy — on your list, but off-target for product and operations strategy.',
 note:'VERIFIED 5 Nov 2026: the Summer Associate Intern — Generalist (MBA/MA), 2027 start, carries a CONFIRMED deadline of 1 Dec 2026 and asks for graduation by summer 2028, which fits you. A separate full Associate posting already closed 23 Sep 2026.'},

{cat:'consulting', track:'strategy', company:'Charles River Associates', title:'Summer 2027 Consulting Intern (Economics and other tracks)',
 location:'Boston, New York, Chicago, DC, Los Angeles',
 deadline:'2027-01-15', status:'rolling', url:'https://ecp.crai.com/careers/',
 why:'Four US summer 2027 intern tracks, 8–10 weeks on live client engagements. Economic consulting rather than strategy — same caveat as Analysis Group and Cornerstone.',
 note:'VERIFIED 5 Nov 2026: open since 28 Aug 2026, résumé review from 15 Oct, rolling until roles fill — one source says intake runs to March 2027. No single hard deadline.'},

{cat:'consulting', track:'strategy', company:'Keystone Strategy', title:'Summer 2027 Summer Associate',
 location:'New York, Boston, San Francisco, Seattle',
 deadline:'2027-01-15', status:'rolling', url:'https://www.keystonestrategy.com/careers/open-roles/',
 why:'Tech-and-economics strategy boutique — digital strategy, platform economics and expert work for large tech clients. A genuinely interesting hybrid if you want strategy with a technology substrate.',
 note:'ESTIMATED. Two summer 2027 student reqs live as of 12 Oct 2026. No separate MBA posting — MBAs apply through the general Summer Associate req.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Strategy Summer Associate — Corporate Strategy & Transactions / Customer & Commercial Strategy',
 location:'Multiple US offices — Miami and Los Angeles available',
 deadline:'2027-01-28', status:'confirmed', url:'https://apply.deloitte.com/en_US/careers/JobDetail/Deloitte-Strategy-Summer-Associate-Corporate-Strategy-Transactions-Customer-Commercial-Strategy/316711',
 why:'Closest title-and-description match to "corporate strategy" anywhere on this list: M&A strategy, portfolio choices and commercial/growth strategy. Deloitte staffs Miami and LA.',
 note:'VERIFIED 5 Nov 2026: deadline 28 JAN 2027 — but note an EARLY deadline of 23 Oct 2026 has already passed, so you are now in the second window. Requires graduation Spring/Summer 2028 and 3+ yrs full-time experience. ~$3,750/week. Deloitte fills per office on a rolling basis well before the posting expires.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Summer Associate — Functional & Operations Strategy',
 location:'Atlanta, GA + multiple US offices',
 deadline:'2027-03-01', status:'confirmed', url:'https://apply.deloitte.com/en_US/careers/SearchJobs/functional%20operations%20strategy',
 why:'Direct match to operations strategy: operating-model design, cost and margin strategy, and functional transformation across finance and supply chain.',
 note:'VERIFIED 5 Nov 2026: the listing says apply by 1 Mar 2027. 3+ yrs full-time experience required. Deloitte fills per office on a rolling basis, so do not wait for March.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Consultative Offerings — Summer Associate, Enterprise Strategy',
 location:'Multiple US offices',
 deadline:'2027-03-01', status:'confirmed', url:'https://apply.deloitte.com/en_US/careers/JobDetail/Consultative-Offerings-Summer-Associate-Enterprise-Strategy/368915',
 why:'Enterprise-wide strategy: growth agendas, operating model and enterprise transformation for large clients. Business-strategy core.',
 note:'CONFIRMED valid-through 1 Mar 2027, but seats go much earlier on a rolling basis. ~$3,750/week.'},

{cat:'consulting', track:'strategy', company:'L.E.K. Consulting', title:'Summer Associate 2027 (MBA)',
 location:'Boston, New York, Chicago, San Francisco, Los Angeles',
 deadline:'', status:'rolling', url:'https://www.lek.com/careers/apply-now',
 why:'Strategy boutique with real strength in commercial due diligence, growth strategy and healthcare. LA is a major L.E.K. office, which matters for your location preference.',
 note:'VERIFIED 5 Nov 2026 — GOOD NEWS, STILL OPEN. The MBA Summer Consultant (US) posting opened 3 Aug 2026 with NO published closing date. My earlier read that the window had passed was wrong — that was the UNDERGRAD Summer Associate track, which closed ~15 Sep. L.E.K. sets deadlines per school in the fall, so get the SOM date from the CDO.'},

{cat:'consulting', track:'strategy', company:'Alvarez & Marsal', title:'Summer 2027 Associate — Public Sector Services',
 location:'Washington, DC',
 deadline:'2026-12-15', status:'confirmed', url:'https://careers.alvarezandmarsal.com/jobs/18120866-summer-2027-associate-public-sector-services-pss',
 why:'Performance improvement and operations strategy for government and public-sector clients. Narrower than A&M’s corporate work and DC-only, but it is the one A&M graduate req actually open.',
 note:'VERIFIED 5 Nov 2026: CONFIRMED on A&M’s own careers site — accepting applications until 15 DECEMBER at midnight EST, posted 27 Aug. 7-week internship for graduate students finishing within ~a year; A&M calls it the main pathway to a full-time offer. My earlier mid-Nov placeholder was wrong in both directions.'},

{cat:'consulting', track:'strategy', company:'Alvarez & Marsal', title:'2027 Summer Intern — Corporate Performance Improvement',
 location:'New York, NY',
 deadline:'2026-09-16', status:'closed', url:'https://careers.alvarezandmarsal.com/search/job-requisition-type/campus-recruiting/jobs',
 why:'The A&M req that actually matched your targets — operations strategy, margin and performance turnaround for corporate clients.',
 note:'VERIFIED 5 Nov 2026: CLOSED 16 Sep 2026. Required graduation Dec 2027–Jun 2028, so you were eligible — the window simply passed before this search began. Worth an email to A&M campus recruiting asking whether a second wave runs, since the PSS req is still open.'},

{cat:'consulting', track:'strategy', company:'FTI Consulting', title:'Summer 2027 Consulting Internship',
 location:'New York, Washington DC, Chicago, Houston, Los Angeles',
 deadline:'2026-09-18', status:'closed', url:'https://fticonsulting.wd1.myworkdayjobs.com/FTIConsulting?q=intern',
 why:'Economic, restructuring and transaction advisory. Operations-strategy adjacency through the performance-improvement practice.',
 note:'LIKELY CLOSED — SOURCES CONFLICT. One source has the US 2027 listing running 27 Jul – 18 Sep 2026; another says rolling. Worth one check of the Workday board before writing it off.'},

{cat:'consulting', track:'strategy', company:'Guidehouse', title:'2027 Campus Internship',
 location:'Washington DC, McLean VA, Chicago',
 deadline:'2026-10-19', status:'closed', url:'https://guidehouse.com/careers/campus',
 why:'Public-sector and healthcare consulting with an operations-improvement core.',
 note:'CLOSED. Several 2027 campus reqs closed 10–19 Oct 2026. Watch for an off-cycle MBA req or contact campus recruiting about next cycle.'},

/* ---- CONSULTING — other MBA tracks (Consideration) ---- */
{cat:'consulting', track:'other', company:'PwC', title:'Senior Associate Intern — Management Consulting, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://jobs-us.pwc.com/us/en/search-results?keywords=Senior%20Associate%20Intern%20Summer%202027',
 why:'Operations and transformation delivery rather than strategy formulation. Same MBA eligibility and pay band as the Strategy& reqs, broader client mix.',
 note:'CONFIRMED 18 Nov 2026. One of ~16 Senior Associate intern reqs PwC posted 2 Oct across Advisory, Consulting, Technology and Sustainability.'},

{cat:'consulting', track:'other', company:'PwC', title:'Senior Associate Intern — Technology Consulting, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://jobs-us.pwc.com/us/en/search-results?keywords=Technology%20Consulting%20Senior%20Associate%20Intern',
 why:'Enterprise technology delivery — cloud, ERP and digital transformation. Tech-adjacent but implementation-weighted.',
 note:'CONFIRMED 18 Nov 2026.'},

{cat:'consulting', track:'other', company:'PwC', title:'Senior Associate Intern — Sustainability, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://jobs-us.pwc.com/us/en/search-results?keywords=Sustainability%20Senior%20Associate%20Intern',
 why:'Climate and sustainability advisory — reporting, decarbonisation and transition planning.',
 note:'CONFIRMED 18 Nov 2026.'},

{cat:'consulting', track:'other', company:'Deloitte', title:'Summer Associate — Human Capital',
 location:'Multiple US offices',
 deadline:'2027-02-28', status:'rolling', url:'https://apply.deloitte.com/en_US/careers/SearchJobs/human%20capital%20summer%20associate',
 why:'Organisation design, workforce transformation and change management. People-side consulting rather than strategy.',
 note:'ESTIMATED — track existence inferred from Deloitte’s standard summer associate structure rather than a confirmed 2027 req. Verify on the board.'},

{cat:'consulting', track:'other', company:'EY', title:'EY-Parthenon — Transactions / Transaction Strategy MBA Intern 2027',
 location:'New York, Boston, Chicago, Dallas',
 deadline:'2026-11-29', status:'rolling', url:'https://usearlycareers.ey.com/business/job_type/intern/39053/5',
 why:'Transaction support and due diligence — deal-side analytical work rather than corporate strategy formulation.',
 note:'ESTIMATED. EY’s MBA window is 5 Oct – 29 Nov 2026; transactions work is referenced in EY’s internship offerings but a specific 2027 req was not confirmed.'},

/* ============================================================
   TECH — strategy track
   ============================================================ */
{cat:'tech', track:'strategy', company:'Salesforce', title:'Summer 2027 Intern — MBA Business Value & Strategic Selling Consultant',
 location:'New York, NY — Healthcare & Life Sciences and Financial Services tracks',
 deadline:'2026-11-15', status:'rolling', url:'https://careers.salesforce.com/en/jobs/?search=MBA%20Business%20Value',
 why:'Business-case and value-engineering work: quantifying ROI and building the commercial argument for enterprise deals. Strategy-adjacent and genuinely MBA-gated. Runs June to August/September 2027.',
 note:'VERIFIED 5 Nov 2026 — SOURCES CONFLICT, CHECK TODAY. Two Summer 2027 reqs (HLS and Financial Services) were posted 1 Oct 2026 and one aggregator still lists them open with no close date; another shows an apply-by of 20 Oct, now passed. EXPERIENCE FLAG: some listings ask 5–7+ yrs pre-MBA experience, others 3+. No visa sponsorship.'},

{cat:'tech', track:'strategy', company:'Stripe', title:'MBA Intern — Partnerships & Strategic Business Development',
 location:'Seattle, WA · San Francisco, CA · New York, NY',
 deadline:'', status:'notposted', url:'https://stripe.com/jobs/search?query=MBA',
 why:'Corporate development and partnership strategy: evaluating partners, shaping product roadmaps around them and structuring commercial deals. Financial Partnerships and Payments & Commerce teams.',
 note:'VERIFIED 5 Nov 2026 — CORRECTION: NO MBA REQ IS LIVE. Stripe’s Summer 2027 postings are Software Engineering (opened 31 Aug), US Data Analyst and PhD Data Scientist (1 Oct), and a high-school programme. The MBA Partnerships listing I had came from a prior cycle. Stripe reviews on a rolling basis and reposts, so watch the board — but do not plan around this one.'},

{cat:'tech', track:'strategy', company:'Block (Square)', title:'Business / Operations Intern — Summer 2027',
 location:'San Francisco, CA · New York, NY · Oakland, CA (remote-friendly)',
 deadline:'2026-11-15', status:'notposted', url:'https://block.xyz/careers/jobs?search=intern',
 why:'Track covers business analytics, operations and go-to-market strategy over 12 weeks — a legitimate business/operations strategy seat, and Block is one of the more remote-friendly employers on your list.',
 note:'NOT YET POSTED. Projected from the prior cycle: window late Aug–early Sep, practical deadline mid-Nov 2026. That projection is now suspect given the date — check the board this week.'},

{cat:'tech', track:'strategy', company:'Nvidia', title:'Product Management MBA Intern, Data Center GPU — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-11-20', status:'rolling', url:'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=Product%20Management%20MBA%20Intern',
 why:'Product strategy with a business-strategy core — the posting lists market sizing, segmentation and pricing analysis as the actual intern work, defining AI systems for enterprise and cloud customers. The most strategy-weighted of NVIDIA’s MBA reqs.',
 note:'VERIFIED 5 Nov 2026 — STATUS GENUINELY UNCLEAR. One aggregator shows "Apply by 17 Oct" (passed); another says "still accepting applications". NVIDIA’s own page states no deadline. Open jobs.nvidia.com and check this req directly before writing it off. MBA graduating winter 2027–summer 2028. $38–$94/hr.'},

{cat:'tech', track:'strategy', company:'Nvidia', title:'Product Management MBA Intern, Gaming, Content Creation & PC AI — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-11-20', status:'rolling', url:'https://jobs.nvidia.com/careers/job/893397725881',
 why:'Posting names "develop product strategy, go-to-market plans" alongside roadmap prioritisation for the GeForce / RTX Spark line — product strategy with real commercial ownership.',
 note:'VERIFIED 5 Nov 2026 — title has changed from "Laptop" to "Gaming, Content Creation and PC AI"; same GeForce/Spark team. Requires an MBA graduating winter 2027 or summer 2028. No published deadline; estimate stands. Check jobs.nvidia.com directly.'},

{cat:'tech', track:'strategy', company:'Nvidia', title:'Product Manager MBA Intern, Enterprise AI — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-11-20', status:'rolling', url:'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=Enterprise%20AI%20MBA%20Intern',
 why:'Enterprise AI product strategy — LLM, RAG and agentic AI product positioning. Strategy work on the fastest-moving product line at the company.',
 note:'ESTIMATED. Familiarity with LLM/RAG/agentic AI concepts is called out in the posting; worth a line in your cover letter.'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Product Strategy & Business Operations Intern, SMB and Business Platform',
 location:'Mountain View, CA (hybrid, 3 days on-site)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-product-strategy-and-business-operations-intern-smb-and-business-platform/27595/101313096064',
 why:'THE closest match on this entire dashboard. The posting literally promises "a defined product strategy project with a named business owner and a measurable outcome — a market sizing analysis, a build/buy/partner assessment, a roadmap prioritization framework, or a competitive assessment that leadership will act on." Product strategy and business strategy in one req.',
 note:'VERIFIED 5 Nov 2026 on Intuit’s own posting — STILL OPEN, no published close date. Job ID 23011. 12 weeks, two cohorts: 17 May–6 Aug or 14 Jun–3 Sep 2027. Pay $48–$57/hr. REQUIRES 2+ YEARS OF PRE-MBA WORK EXPERIENCE, with management consulting strongly preferred — which plays directly to your profile. A sibling Intuit req carries a 31 Jan 2027 validThrough, so the window likely runs into January.'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Strategy & Operations Intern',
 location:'Mountain View, CA (hybrid)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-strategy-and-operations-intern/27595/100620927760',
 why:'Operations strategy by name. Intuit’s S&O function is the internal-consulting arm — exactly the profile you are targeting, and the natural landing spot for an MBA coming from or toward consulting.',
 note:'ESTIMATED. Same cohort structure and no published close. Intuit calls its summer internships "a key pipeline for full-time opportunities".'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Corporate Strategy & Development Intern',
 location:'Mountain View, CA (hybrid, 3 days on-site)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-corporate-strategy-and-development-intern/27595/101313096080',
 why:'Corporate strategy by name: product strategy, partnerships, mobile app strategy and corporate development. Pairs the strategy and M&A sides in one seat.',
 note:'ESTIMATED. 10–12 weeks. NOTE: the posting text says "beginning in May or June 2026", which conflicts with the Summer 2027 title — almost certainly a copy-paste error in the req, but confirm with the recruiter.'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Strategy & Transformation Intern, Mid Market',
 location:'Mountain View, CA (hybrid)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-strategy-and-transformation-intern-mid-market/27595/101313096112',
 why:'Business strategy for Intuit’s mid-market push — a live growth bet, which usually means a better intern project than a mature line.',
 note:'ESTIMATED. Same cohort structure, no published close.'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Business Operations Intern, Consumer Group',
 location:'San Diego, CA',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/search-jobs/MBA%202027/27595/1',
 why:'Business operations for the TurboTax consumer business — operating cadence, performance management and growth analytics.',
 note:'ESTIMATED. San Diego rather than Mountain View; worth noting if you have a Bay Area preference.'},

{cat:'tech', track:'strategy', company:'Adobe', title:'2027 MBA Intern — Corporate Strategy',
 location:'San Francisco, CA',
 deadline:'2026-11-30', status:'rolling', url:'https://adobe.wd5.myworkdayjobs.com/external_experienced/job/San-Francisco/XMLNAME-2027-MBA-Intern---Corporate-Strategy_R172471',
 why:'Outstanding fit. The posting describes product strategy development, technological trend assessment, competitive landscape analysis, future positioning of Adobe, and build/buy/partner evaluation of market adjacencies — and says the intern owns and drives a project focused on Adobe’s long-term growth.',
 note:'VERIFIED 5 Nov 2026: live on Adobe’s careers site, posted 14 Oct 2026, no published close date. Pay $37–$50/hr. ELIGIBILITY CONFLICT — one aggregator says graduation Dec 2026–Jun 2027 (which would EXCLUDE you), another says Dec 2027–Jun 2028 (which includes you), and Adobe’s own page shows no window. Confirm with the recruiter before investing in the application. The PMM sibling req already closed 26 Oct.'},

{cat:'tech', track:'strategy', company:'Adobe', title:'2027 MBA Intern — Product Manager',
 location:'San Jose · San Francisco, CA',
 deadline:'2026-11-30', status:'rolling', url:'https://adobe.wd5.myworkdayjobs.com/external_university?q=MBA%20intern',
 why:'Product management with strategy ownership across Adobe’s Creative Cloud and Document Cloud lines.',
 note:'ESTIMATED. Posted 30 Sep 2026 alongside the PMM req that has since closed — treat as time-sensitive.'},

{cat:'tech', track:'strategy', company:'Snowflake', title:'Product Management Intern (Summer 2027)',
 location:'Menlo Park, CA',
 deadline:'2026-11-29', status:'rolling', url:'https://careers.snowflake.com/us/en/job/SNCOUSB282FC4CD041487A8444EAB095749368EXTERNALENUS322B82F64B184F86AE34007F55C4BDBF/Product-Management-Intern-Summer-2027',
 why:'Explicitly asks for MBA students and names product strategy and planning, market research, product design and data-driven decision-making as the work. 12-week summer term. One of the cleanest product-strategy reqs in enterprise software.',
 note:'VERIFIED 5 Nov 2026 — CLOSES EARLIER THAN I ESTIMATED. Two boards give a listing expiry of 29–30 Nov 2026 (posted 30 Oct), not the 15 Dec I had. Open to 1st and 2nd-year MBAs, 12-week summer term. Pay reported $60–$70/hr.'},

{cat:'tech', track:'strategy', company:'Amazon', title:'2027 Amazon Leadership Accelerator (ALA) — Product Manager Internship',
 location:'Seattle, WA (some Arlington VA / NYC placements)',
 deadline:'2026-10-02', status:'closed', url:'https://cdo.som.yale.edu/jobs/amazon-com-2027-amazon-leadership-accelerator-ala-product-manager-internship/',
 why:'Amazon’s selective MBA leadership development programme. The intern owns a project end-to-end with a defined customer benefit and business outcome — product strategy framed as a business case.',
 note:'VERIFIED 5 Nov 2026: LIKELY CLOSED. The Yale SOM CDO listing expired 2 Oct 2026, and Yale OCS shows 28 Aug 2026 for the same role. My 15 Dec estimate was wrong. Apply to the MLDP req instead — same cohort, open until 6 Nov.'},

{cat:'tech', track:'strategy', company:'Amazon', title:'2027 MBA Leadership Development Program (MLDP) Intern',
 location:'Seattle, WA (relocation assistance provided)',
 deadline:'2026-11-06', status:'confirmed', url:'https://cdo.som.yale.edu/jobs/amazon-com-2027-mba-leadership-development-program-mldp-intern/',
 why:'The intern OWNS A STRATEGIC BUSINESS PROBLEM WITH REAL P&L IMPACT and presents the solution to senior leadership — business strategy in about as pure a form as exists on this dashboard. Cross-functional, AI-enabled, data-driven work, and the 12-week internship feeds a three-year full-time MLDP rotation programme.',
 note:'FOUND 5 Nov 2026 during verification — DUE TOMORROW, 6 NOV, and it is ON THE YALE SOM CDO BOARD. Opened 5 Aug 2026. Eligibility fits you exactly: enrolled MBA, graduation 1 Dec 2027–30 Jun 2028. Cohorts start 24 May or 14 Jun 2027. Pay $121,200–$163,900. Prefers 3+ yrs full-time experience and a retail / e-commerce / supply-chain background.'},

{cat:'tech', track:'strategy', company:'Amazon', title:'Product Manager Technical (PMT) Intern — Summer 2027',
 location:'Seattle, WA',
 deadline:'2026-12-15', status:'rolling', url:'https://amazon.jobs/en/jobs/10509639/product-manager-technical-pmt-intern-summer-2027',
 why:'Owns a technical product end-to-end: roadmap, business case, launch. More technical than the ALA track, but the strategy content — market definition, build/buy, pricing — is real.',
 note:'ESTIMATED. MBA conferral Dec 2027–Jun 2028. 3+ yrs non-internship experience preferred. $136,170 annualised.'},

{cat:'tech', track:'strategy', company:'ServiceNow', title:'Product Manager Intern (Masters / MBA) — Summer 2027',
 location:'Santa Clara, CA · San Diego, CA',
 deadline:'2026-12-15', status:'rolling', url:'https://careers.servicenow.com/careers/jobs/?search=intern',
 why:'12-week MBA-gated track covering product strategy and market analysis. ServiceNow asks for 3–5 years prior work experience, so the cohort skews senior — a good sign for project quality.',
 note:'ESTIMATED. Requires graduation Dec 2027 or later for the Summer 2027 cycle. Grouped with Intuit and HubSpot as firms hiring PM interns Sep through the fall.'},

{cat:'tech', track:'strategy', company:'Google', title:'MBA Intern, Summer 2027 (general business track)',
 location:'Multiple US offices',
 deadline:'2026-11-13', status:'confirmed', url:'https://www.google.com/about/careers/applications/jobs/results/121103710599160518-mba-intern-summer-2027',
 why:'Umbrella req routing into Business Strategy, Product Management, Corporate Development, Finance, Marketing, Operations, People Ops and Sales — a single door onto three of your four target functions, with team preference expressed in the application. THIS is the US req.',
 note:'RE-CHECKED 10 Nov 2026 — DEADLINE IS 13 NOV, NOT 6 NOV. The live Google listing now reads "complete your application by November 13, 2026"; my 5 Nov reading of 6 Nov was either wrong or has since been extended. STILL OPEN as of today. The US MBA Intern, Summer 2027 posting states applications are due by 6 Nov 2026, with interviews rolling through Q1 2027. My earlier 31 Dec estimate was badly wrong. Requires attending an MBA programme IN THE US; 12 consecutive weeks May–Sep 2027. Handshake lists Chicago and Seattle. Google warns reqs also close early once projects fill.'},

{cat:'tech', track:'strategy', company:'Meta', title:'Business Product Strategy Intern (MBA)',
 location:'Menlo Park, CA',
 deadline:'', status:'notposted', url:'https://www.metacareers.com/jobs?q=MBA%20intern&is_intern=true',
 why:'The title is almost a transcription of your ask — business strategy and market evaluation for a product line. Worth watching in case Meta reopens it.',
 note:'VERIFIED 5 Nov 2026 — THE LISTING IS STALE. The LinkedIn posting’s embedded data shows a 2022 expiry, an APM aggregator marks the role "not yet open", and one analysis finds no verified MBA programme at Meta at all. Meta’s confirmed Summer 2027 reqs are technical and analytics only. Do not plan around this.'},

{cat:'tech', track:'strategy', company:'Atlassian', title:'Product Management Intern — Summer 2027',
 location:'San Francisco, CA · Remote (US)',
 deadline:'2027-01-15', status:'rolling', url:'https://www.atlassian.com/company/careers/all-jobs?search=intern',
 why:'One of the few genuinely remote-eligible product roles on this dashboard, which matters given remote is fine for you. Atlassian PM work is strategy-heavy and well documented.',
 note:'VERIFIED 5 Nov 2026: the Summer 2027 PM intern req was confirmed open as of 9 Oct 2026, rolling. Atlassian’s 2027 intern reqs require graduation by Aug 2028 and carry NO work sponsorship (explicitly not open to F1/J1 students). 12 weeks, May/June to Aug/Sep 2027.'},

{cat:'tech', track:'strategy', company:'Databricks', title:'Product Management Intern (Summer 2027)',
 location:'San Francisco, CA · Mountain View, CA',
 deadline:'2027-01-15', status:'rolling', url:'https://www.databricks.com/company/careers/open-positions?department=University%20Recruiting',
 why:'Product strategy for data and AI infrastructure. $54–$56/hr.',
 note:'ESTIMATED — ELIGIBILITY FLAG. Posted eligibility is "graduating Fall 2027 or Spring 2028", which may exclude a 2028 MBA depending on how they read it. Worth a recruiter email first.'},

{cat:'tech', track:'strategy', company:'DoorDash', title:'Intern, Growth and Strategy — Drive (MBA preferred)',
 location:'San Francisco, CA · New York, NY',
 deadline:'2027-01-15', status:'rolling', url:'https://careersatdoordash.com/university/',
 why:'DoorDash Strategy & Ops is a canonical tech business-strategy internship — market-level P&L ownership, growth strategy and operating analytics. The Drive (white-label logistics) req states MBA preferred.',
 note:'ESTIMATED — NEEDS VERIFYING. The req found is undated and may be from a prior cycle; the only confirmed Summer 2027 ops req is a PhD Operations Research role.'},

{cat:'tech', track:'strategy', company:'Uber', title:'Strategy & Operations Intern / MBA Internship — Summer 2027',
 location:'San Francisco, CA · New York, NY · Chicago, IL',
 deadline:'2027-01-15', status:'notposted', url:'https://jobs.uber.com/en/teams/emerging-talent/',
 why:'Uber S&O is the canonical tech business-strategy internship — city and mobility operations with real P&L exposure, SQL and analytics. The Emerging Talent page lists a distinct MBA internship alongside the Strategy, Operations, Analytics rotational programme.',
 note:'NOT YET POSTED for MBA. The Summer 2027 SWE req closed 31 Oct 2026 and no other US req was open that day. 12 weeks, $27–$30/hr on the S&O track. Set an alert on the Emerging Talent page.'},

{cat:'tech', track:'strategy', company:'Snap', title:'Product Manager Intern — Summer 2027 (MBA preferred)',
 location:'Santa Monica, CA (Los Angeles) · New York, NY',
 deadline:'2027-01-15', status:'notposted', url:'https://careers.snap.com/jobs?search=intern',
 why:'13-week PM internship with "MBA preferred" stated — and Santa Monica is Los Angeles, hitting your location preference squarely. One of the few LA-headquartered tech companies on your list.',
 note:'NOT YET POSTED as of 22 Oct 2026, though last cycle opened late Aug–early Sep. Rolling review. Worth a weekly check given the LA fit.'},

{cat:'tech', track:'strategy', company:'PayPal', title:'Product Management Intern — Summer 2027',
 location:'San Jose, CA · New York, NY · Austin, TX',
 deadline:'2027-01-15', status:'notposted', url:'https://careers.pypl.com/Students-and-Graduates/',
 why:'Product strategy, feature planning and market analysis for payments products.',
 note:'NOT CONFIRMED. Postings were expected Sep–Oct 2026 with rolling review. Estimated 3–5% acceptance rate. The window may be open now — check the board.'},

{cat:'tech', track:'strategy', company:'Tesla', title:'Internship — FP&A & Business Operations, Summer 2027',
 location:'Sparks, NV · Austin, TX · Palo Alto, CA',
 deadline:'2027-01-31', status:'rolling', url:'https://www.tesla.com/careers/search/job/internship-fpa-business-operations-summer-2027-284439',
 why:'Reads as operations strategy despite the FP&A title: managing investment into service operations, leading pricing work, and evaluating ROI on new markets and business models. The decision content is strategic, not reporting.',
 note:'ESTIMATED. On-site only, no remote. Min 12 weeks, May/June start. Tesla posts with no notice and closes fast.'},

{cat:'tech', track:'strategy', company:'Microsoft', title:'Product Manager MBA Intern, Summer 2027',
 location:'Redmond, WA · Mountain View, CA',
 deadline:'2027-02-28', status:'rolling', url:'https://careers.microsoft.com/v2/global/en/students',
 why:'Posting language is product strategy outright: set product vision and strategy from customer insight and competitive market analysis, then work with Product Marketing, Business Planning and Engineering on release criteria and monetisation.',
 note:'VERIFIED 5 Nov 2026 — CORRECTION: the "first week of each month" rule applies to Microsoft EXPLORE, a second-year UNDERGRADUATE programme, NOT the MBA track. MBA roles have no published window and stay open until filled, so there is no reason to wait for December — apply now. Needs one quarter/semester remaining after the internship.'},

{cat:'tech', track:'strategy', company:'Apple', title:'MBA Internships 2027 (umbrella req)',
 location:'Various US — Cupertino, Austin, Culver City (LA)',
 deadline:'2027-02-28', status:'rolling', url:'https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN',
 why:'Single MBA req routing into strategy, product management, operations, business process improvement and programme management. Apple’s Strategy & Operations track covers financial modelling, pricing research and business process analysis.',
 note:'VERIFIED 5 Nov 2026: Apple’s US umbrella postings state they accept applications ON AN ONGOING BASIS, with hiring per team as headcount opens — so there is no fixed deadline to miss. The 23 Oct expiry I flagged earlier appears on one campus repost only, not Apple’s own page. Culver City / LA placements exist via Apple Services and Apple TV+.'},

{cat:'tech', track:'strategy', company:'Spotify', title:'Summer MBA Intern — Business Strategy and Product Management',
 location:'New York, NY',
 deadline:'2027-02-05', status:'notposted', url:'https://www.lifeatspotify.com/start-your-journey/students',
 why:'A near-perfect title match Spotify has run in prior cycles: strategy modelling, senior-leadership presentations and PM rotations over 10 weeks in NYC.',
 note:'NOT YET POSTED. Spotify’s student page says 2027 information is "coming soon"; projections put the window mid-to-late Jan 2027 with a hard deadline in early Feb. Spotify refuses late applications and will not accept approaches by email or LinkedIn — you must catch the window.'},

/* ---- TECH — closed ---- */
{cat:'tech', track:'strategy', company:'Airbnb', title:'Strategic Finance & Analytics Intern (MBA), Summer 2027',
 location:'San Francisco, CA',
 deadline:'2026-11-01', status:'closed', url:'https://careers.airbnb.com/positions/8285171/?gh_jid=8285171',
 why:'MBA-gated role partnering with business leaders on investment priorities, growth strategies and future initiatives — business strategy under a finance label. Programme ran 24 May – 13 Aug 2027.',
 note:'CLOSED 1 Nov 2026, 11:45pm PST — three days before this dashboard was built. Airbnb runs one MBA req a year.'},

{cat:'tech', track:'strategy', company:'Stripe', title:'MBA Intern — Product Strategy Consultant',
 location:'Chicago, IL',
 deadline:'2026-10-31', status:'closed', url:'https://stripe.com/jobs/search?query=MBA',
 why:'Internal product strategy consulting — a near-perfect match for an ex-consultant MBA targeting product strategy.',
 note:'CLOSED. Stripe reposts MBA reqs through the cycle, so watch for a re-run; the Partnerships req may still be live.'},

{cat:'tech', track:'strategy', company:'Salesforce', title:'Summer 2027 Intern — Product GTM Strategy',
 location:'San Francisco, CA',
 deadline:'2026-10-17', status:'closed', url:'https://careers.salesforce.com/en/jobs/?search=GTM%20Strategy%20intern',
 why:'Go-to-market strategy with dashboards, SQL and market evaluation.',
 note:'CLOSED 17 Oct 2026 — and the req targeted juniors and rising seniors, not MBAs.'},

/* ---- TECH — other MBA tracks (Consideration) ---- */
{cat:'tech', track:'other', company:'Microsoft', title:'Finance Manager: MBA Internship Opportunities, Summer 2027',
 location:'Redmond, WA',
 deadline:'2027-02-28', status:'rolling', url:'https://careers.microsoft.com/v2/global/en/students',
 why:'12-week role on Microsoft’s Central Finance Team owning a high-impact project for senior finance leaders. Strong corporate-finance seat and a well-trodden path into Business Planning, which is strategy-adjacent.',
 note:'POSTED ON THE YALE SOM CDO BOARD — the strongest-sourced non-strategy role here. Requires a full-time MBA with 1+ semester remaining; FP&A experience preferred, 3+ yrs relevant experience listed. Same first-week-of-month application mechanic as the PM req.'},

{cat:'tech', track:'other', company:'Microsoft', title:'Treasury Finance Manager: MBA Internship, Summer 2027',
 location:'Redmond, WA',
 deadline:'2027-02-28', status:'rolling', url:'https://careers.microsoft.com/v2/global/en/students',
 why:'Treasury, capital structure and liquidity management. Narrow corporate-finance function, well outside your four target areas.',
 note:'ESTIMATED. Sister req to the Central Finance role above.'},

{cat:'tech', track:'other', company:'Google', title:'Finance MBA Intern, 2027',
 location:'Multiple US offices',
 deadline:'2026-12-31', status:'rolling', url:'https://www.google.com/about/careers/applications/jobs/results/?q=Finance%20MBA%20Intern%202027',
 why:'Google lists Finance as one of its MBA intern functions: forecasting, accounting, compliance and project management. A distinct req from the Strategy & Operations track.',
 note:'ESTIMATED. Google publishes no close dates. 12 weeks May–Sep 2027, first-year MBAs preferred.'},

{cat:'tech', track:'other', company:'Google', title:'Marketing MBA Intern, 2027',
 location:'Multiple US offices',
 deadline:'2026-12-31', status:'rolling', url:'https://www.google.com/about/careers/applications/jobs/results/?q=Marketing%20MBA%20Intern%202027',
 why:'Marketing is listed among Google’s MBA intern functions alongside Business Strategy, Finance, Operations & Support, People Operations, Product Management and Sales.',
 note:'ESTIMATED — function confirmed on Google’s MBA listing, specific req not individually verified.'},

{cat:'tech', track:'other', company:'Amazon', title:'MBA Supply Chain Internship — Summer 2027',
 location:'Seattle, WA · Bellevue, WA',
 deadline:'2026-12-15', status:'rolling', url:'https://www.amazon.jobs/en/search?base_query=MBA+supply+chain+intern+2027',
 why:'Supply chain and fulfilment network management. Operations, but execution and network optimisation rather than operations strategy.',
 note:'ESTIMATED. Retail-side supply chain roles post earliest, rolling from ~Aug 2026 into early 2027.'},

{cat:'tech', track:'other', company:'Amazon', title:'Finance Leadership Development Program — MBA, Summer 2027',
 location:'Seattle, WA · Arlington, VA',
 deadline:'2026-12-15', status:'rolling', url:'https://www.amazon.jobs/en/search?base_query=finance+MBA+intern+2027',
 why:'Corporate finance rotation feeding Amazon’s FP&A and business-finance organisation.',
 note:'ESTIMATED. Same MBA conferral window as the PM reqs (Dec 2027–Jun 2028).'},

{cat:'tech', track:'other', company:'Nvidia', title:'Technical Product Marketing MBA Intern, AI Infrastructure — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2027-05-01', status:'confirmed', url:'https://jobs.nvidia.com/careers/job/893398510317',
 why:'Positioning and technical marketing for NVIDIA’s AI infrastructure line. Marketing rather than strategy — but it is the NVIDIA MBA req whose status is least in doubt.',
 note:'FOUND 5 Nov 2026 during verification — POSTED 3 NOV 2026, the freshest NVIDIA MBA req, with a validThrough date of 1 May 2027 on NVIDIA’s own careers page. If the PM reqs turn out to have closed, this is the live NVIDIA door.'},

{cat:'tech', track:'other', company:'Nvidia', title:'Product Marketing Management MBA Intern — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-11-20', status:'rolling', url:'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=Product%20Marketing%20MBA%20Intern',
 why:'Positioning, messaging and launch for NVIDIA product lines. Marketing rather than strategy, though NVIDIA PMM carries more analytical weight than most.',
 note:'ESTIMATED. $38–$94/hr, same band as the PM reqs. Requires an MBA in product marketing or related, graduating winter 2027–summer 2028.'},

{cat:'tech', track:'other', company:'Intuit', title:'Summer 2027: MBA Finance Strategy Intern',
 location:'Mountain View, CA (hybrid)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-finance-strategy-intern/27595/101319972336',
 why:'Strategic finance partnering with business leaders on investment priorities — business strategy under a finance label. The closest of Intuit’s non-strategy reqs to your targets.',
 note:'ESTIMATED. Worth considering as a fifth Intuit application if the four strategy reqs feel crowded.'},

{cat:'tech', track:'other', company:'Intuit', title:'Summer 2027: MBA Product Marketing Intern',
 location:'Mountain View, CA (hybrid)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-product-marketing-intern/27595/100620927728',
 why:'Go-to-market strategy and pricing. Adjacent to product strategy rather than core to it.',
 note:'ESTIMATED. One of 13 Intuit Summer 2027 intern reqs live as of 21 Sep 2026.'},

{cat:'tech', track:'other', company:'Intuit', title:'Summer 2027: MBA Strategic Sourcing Intern, Technology',
 location:'San Diego, CA',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/san-diego/summer-2027-mba-strategic-sourcing-intern-technology/27595/101062769088',
 why:'Procurement and vendor strategy for Intuit’s technology spend. Operations in a narrow slice — weakest of the Intuit reqs against your targets.',
 note:'ESTIMATED.'},

{cat:'tech', track:'other', company:'Meta', title:'Product Marketing Manager Intern (MBA)',
 location:'Menlo Park · San Francisco · Seattle · New York',
 deadline:'2026-12-31', status:'rolling', url:'https://www.metacareers.com/jobs?q=product%20marketing%20MBA&is_intern=true',
 why:'Go-to-market strategy: positioning, segmentation and launch strategy. Overlaps your product-strategy target but sits in marketing.',
 note:'ESTIMATED — undated listing, may be from a prior cycle. Verify on metacareers.com.'},

{cat:'tech', track:'other', company:'Adobe', title:'2027 MBA Intern — Product Marketing Manager',
 location:'San Jose · San Francisco, CA',
 deadline:'2026-10-26', status:'closed', url:'https://adobe.wd5.myworkdayjobs.com/external_university?q=MBA%20intern',
 why:'Go-to-market and positioning strategy for Adobe’s Creative and Document Cloud lines.',
 note:'CLOSED — apply-by 26 Oct 2026. Posted 30 Sep. Noted so you know Adobe’s PMM door has shut.'},

{cat:'tech', track:'other', company:'Databricks', title:'Sales Intern — Summer 2027',
 location:'San Francisco, CA · Mountain View, CA',
 deadline:'2027-01-15', status:'rolling', url:'https://www.databricks.com/company/careers/open-positions?department=University%20Recruiting',
 why:'Enterprise sales for data and AI infrastructure. Commercial exposure but not a strategy seat.',
 note:'ESTIMATED. Same eligibility flag as the Databricks PM req (graduating Fall 2027 or Spring 2028).'},

{cat:'tech', track:'other', company:'Apple', title:'MBA Internship — Supply Chain / Operations Management, 2027',
 location:'Cupertino, CA · Austin, TX',
 deadline:'2027-02-28', status:'rolling', url:'https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN',
 why:'Apple’s MBA req explicitly welcomes master’s candidates in supply chain, engineering and operations management. Procurement, supply-chain planning and sourcing placements sit here.',
 note:'ESTIMATED. One university listing for the Apple 2027 MBA req showed an expiry of 23 Oct 2026 — verify the req is still live before applying.'},

/* ============================================================
   OTHER INDUSTRIES
   ============================================================ */
{cat:'other', track:'strategy', company:'Epic Games', title:'Product Management Intern (MBA) — Summer 2027',
 location:'Cary, NC',
 deadline:'2026-11-30', status:'rolling', url:'https://www.epicgames.com/site/earlycareers',
 why:'MBA-gated and explicitly asks for prior product, strategy, analytics or consulting experience — they are recruiting the consultant-to-PM profile directly. Also asks for hands-on AI/LLM tooling experience.',
 note:'VERIFIED 5 Nov 2026 — EARLIER THAN I ESTIMATED. A Harvard career-services listing gives a 30 Nov 2026 expiry (recruitment opened 30 Sep). Epic publishes no official deadline and fills roles "as soon as we find the best match", so treat 30 Nov as the outer limit, not a target.'},

{cat:'other', track:'strategy', company:'Epic Games', title:'Business and Marketing Strategy Intern (MBA) — Summer 2027',
 location:'Cary, NC',
 deadline:'2026-11-30', status:'rolling', url:'https://www.epicgames.com/site/earlycareers',
 why:'Business strategy in the title, MBA enrollment in marketing/strategy/analytics required. Commercial strategy for Fortnite and the wider Epic ecosystem.',
 note:'VERIFIED 5 Nov 2026: same 30 Nov 2026 listing expiry as the PM req. Rolling, filled when matched — apply well before.'},

{cat:'other', track:'strategy', company:'Universal', title:'NBCUniversal Summer 2027 Internship — strategy tracks',
 location:'New York · Universal City, CA (Los Angeles) · Orlando, FL',
 deadline:'2027-01-15', status:'notposted', url:'https://www.nbcunicareers.com/early-careers',
 why:'NBCU runs strategy and corporate development placements inside the summer programme. Universal City is LA and Universal Destinations sits in Orlando — two of your geography boxes.',
 note:'NOT YET POSTED for US MBA. Virtual info sessions are the week of 9 Nov 2026 for the Jun–Aug 2027 programme — ATTEND ONE. Eligibility reads "actively enrolled in a degree-granting program", which does include MBA; confirm on the call.'},

{cat:'other', track:'strategy', company:'Expedia', title:'MBA Product Management Intern, Summer 2027',
 location:'Seattle, WA',
 deadline:'2027-01-15', status:'rolling', url:'https://careers.expediagroup.com/earlycareers/',
 why:'Product strategy for a marketplace business — pricing, supply/demand balance and partner strategy. A strong adjacency if you want travel without the airline operating-company path.',
 note:'ESTIMATED — ELIGIBILITY FLAG. Summer 2027 reqs went live 12 Oct 2026 but require graduation Dec 2027–Jul 2028; the MBA PM req that surfaced was a London 2026 role. Programme runs 200–300 spots across 10+ tracks. Verify a US MBA req exists.'},

{cat:'other', track:'strategy', company:'American Airlines', title:'MBA Intern — Commercial Strategy / Financial Strategy, Summer 2027',
 location:'Fort Worth, TX',
 deadline:'2027-01-31', status:'notposted', url:'https://jobs.aa.com/go/MBA-Leadership/9297500/',
 why:'The Commercial Strategy track covers revenue management, network and sales-partnership strategy; Financial Strategy sits in FP&A with a corporate-strategy exit. Both are MBA-gated under the MBA Leadership pipeline.',
 note:'NOT YET POSTED. Sources conflict on when the window opens — the campus page says May, a 2027-cycle guide says September with rolling review. No postings were live as of mid-Oct 2026. Set an alert on the MBA Leadership page.'},

{cat:'other', track:'strategy', company:'Disney', title:'Corporate Strategy MBA Associate, Summer 2027',
 location:'Burbank, CA (Los Angeles) — occasionally New York',
 deadline:'2027-01-31', status:'notposted', url:'https://www.disneycareers.com/en/category/business-strategy-and-development-jobs/391/8221792/1',
 why:'Corporate Strategy & Business Development is a ~15-person team advising Disney’s executive leadership on strategic planning, joint ventures and acquisitions — arguably the highest-leverage corporate strategy internship in media. Burbank is LA.',
 note:'NOT YET POSTED. Disney posts summer reqs Dec–Jan for a May/June start; a DTC Strategy MBA req ran in prior cycles. Set a Disney Careers alert on "Business Strategy and Development" now.'},

/* ---- OTHER — closed ---- */
{cat:'other', track:'strategy', company:'Delta', title:'MBA Intern — Commercial Strategy, Summer 2027',
 location:'Atlanta, GA (on-site required)',
 deadline:'2026-10-04', status:'closed', url:'https://careers.delta.com/university',
 why:'Strong strategy content: one strategic project across pricing & revenue management, network/route planning, global sales & distribution, loyalty or reservations. 12 weeks alongside the Finance MBA cohort. $9,493/month.',
 note:'CLOSED — posting ran 3 Sep and expired 4 Oct 2026. Requires a first-year MBA finishing by summer 2027, graduating by summer 2028. Email the Delta campus recruiter about a late look. NOTE: one source says Delta MBA reqs are still live on its Avature site — worth one check.'},

{cat:'other', track:'strategy', company:'Delta', title:'MBA Intern — Financial Strategy, Summer 2027',
 location:'Atlanta, GA',
 deadline:'2026-10-04', status:'closed', url:'https://careers.delta.com/university',
 why:'Project-based role for rising second-years on revenue improvement and cost savings, with a stated path into corporate development and corporate strategy roles afterwards.',
 note:'CLOSED alongside the Commercial Strategy req. Same recruiter outreach applies.'},

/* ---- OTHER — other MBA tracks (Consideration) ---- */
{cat:'other', track:'other', company:'Delta', title:'MBA Intern — Supply Chain Management, Summer 2027',
 location:'Atlanta, GA (on-site required)',
 deadline:'2026-10-04', status:'rolling', url:'https://careers.delta.com/university',
 why:'Supply chain and procurement for airline operations. Operations, but sourcing and logistics rather than operations strategy.',
 note:'ESTIMATED / STATUS UNCLEAR. Delta MBA reqs are reported across Finance, Commercial Strategy, Supply Chain Management, Financial Strategy and Network Scheduling on its Avature site, but the main Sep–Oct window appears to have closed. Verify directly.'},

{cat:'other', track:'other', company:'Delta', title:'MBA Intern — Network Scheduling, Summer 2027',
 location:'Atlanta, GA (on-site required)',
 deadline:'2026-10-04', status:'rolling', url:'https://careers.delta.com/university',
 why:'Route and schedule optimisation — quantitative network planning. Genuinely analytical and arguably closer to strategy than the supply-chain track.',
 note:'ESTIMATED / STATUS UNCLEAR. Same Avature caveat as the supply-chain req.'},

{cat:'other', track:'other', company:'Delta', title:'MBA Intern — Finance, Summer 2027',
 location:'Atlanta, GA (on-site required)',
 deadline:'2026-10-04', status:'rolling', url:'https://careers.delta.com/university',
 why:'Corporate finance and FP&A for the airline. $9,493/month like the other Delta MBA tracks.',
 note:'ESTIMATED / STATUS UNCLEAR. Same Avature caveat.'},

{cat:'other', track:'other', company:'GE Aerospace', title:'Summer 2027 Intern — HR / Financial Management Program (master’s eligible)',
 location:'Cincinnati, OH · Evendale, OH',
 deadline:'2027-01-31', status:'rolling', url:'https://careers.geaerospace.com/global/en/students',
 why:'GE Aerospace has no MBA strategy or corporate development internship. The closest master’s-eligible reqs are HR (10–12 weeks, including acquisition integration) and the Financial Management Program (Commercial Finance, Supply Chain Finance, FP&A).',
 note:'ESTIMATED. ~48 US reqs titled 2027 live in early Oct. HR req requires a business or HR master’s and 3.0 GPA, Cincinnati-based, and can lead into the HR Leadership Program. If GE matters, email a recruiter about a strategy seat — it is not on the board.'},

{cat:'other', track:'other', company:'Disney', title:'Accounting & Finance Rotation Program / other MBA tracks, Summer 2027',
 location:'Burbank, CA (Los Angeles) · Orlando, FL',
 deadline:'2027-01-31', status:'notposted', url:'https://www.disneycareers.com/en/search-jobs',
 why:'Disney’s finance rotation and other business tracks. LA-based, which fits your location preference, but finance rather than strategy.',
 note:'NOT POSTED / PARTLY CLOSED. As of 1 Nov 2026 the Accounting & Finance Rotation Program had closed and no summer 2027 tech internship had posted. Disney posts summer reqs Dec–Jan — watch for the next wave.'},

{cat:'other', track:'other', company:'Universal', title:'NBCUniversal Summer 2027 — marketing, finance and content tracks',
 location:'New York · Universal City, CA (Los Angeles) · Orlando, FL',
 deadline:'2027-01-15', status:'notposted', url:'https://www.nbcunicareers.com/early-careers',
 why:'The broader NBCU summer programme spans marketing, finance, communications and content roles alongside the strategy placements.',
 note:'NOT YET POSTED. Same info sessions the week of 9 Nov 2026 cover all tracks — one call tells you which are MBA-eligible.'}
];
