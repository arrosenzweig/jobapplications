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
  {name:'Microsoft',         cat:'tech', url:'https://jobs.careers.microsoft.com/global/en/search?q=MBA%20Intern&l=en_us'},
  {name:'Apple',             cat:'tech', url:'https://jobs.apple.com/en-us/search?location=united-states-USA&team=internships-STDNT-INTRN'},
  {name:'Meta',              cat:'tech', url:'https://www.metacareers.com/jobs?q=MBA%20intern&is_intern=true'},
  {name:'Nvidia',            cat:'tech', url:'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=MBA%20intern'},
  {name:'Adobe',             cat:'tech', url:'https://careers.adobe.com/us/en/job/R172261/2027-MBA-Intern-Product-Manager'},
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
  {name:'Atlassian',         cat:'tech', url:'https://www.atlassian.com/company/careers/details/10992806'},
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
  {name:'Expedia',           cat:'other', url:'https://expedia.wd108.myworkdayjobs.com/search?q=MBA'},
  {name:'Figure AI',         cat:'other', url:'https://www.figure.ai/careers'},
  {name:'GE Aerospace',      cat:'other', url:'https://careers.geaerospace.com/global/en/students'},
  {name:'Hyatt',             cat:'other', url:'https://careers.hyatt.com/en-US/careers/SearchJobs/intern'},
  {name:'Universal',         cat:'other', url:'https://www.nbcunicareers.com/early-careers'},

  /* --- LUXURY FASHION, BEAUTY & RETAIL ---
     Added 11 Nov 2026. These recruit MUCH later than tech and consulting —
     most open late November through February for the following summer — so
     none has a live Summer 2027 MBA req yet. Every URL below was fetched and
     checked. Notes on each card say where the programme stands. */
  {name:'Estée Lauder Companies', cat:'other', url:'https://www.elcompanies.com/en/careers/students'},
  {name:'L’Oréal',           cat:'other', url:'https://careers.loreal.com/en_US/jobs/SearchJobs/'},
  {name:'Tapestry',               cat:'other', url:'https://careers.tapestry.com/search/'},
  {name:'LVMH',                   cat:'other', url:'https://www.lvmh.com/en/join-us/our-job-offers'},
  {name:'Tiffany & Co.',          cat:'other', url:'https://www.tiffany.com/careers/'},
  {name:'PVH',                    cat:'other', url:'https://careers.pvh.com/jobs'},
  {name:'Richemont',              cat:'other', url:'https://www.richemont.com/talent/students-graduates/early-career-programmes/'},
  {name:'Chanel',                 cat:'other', url:'https://cc.wd3.myworkdayjobs.com/en-US/ChanelCareers'},
  {name:'Nordstrom',              cat:'other', url:'https://careers.nordstrom.com/'},
  {name:'Ralph Lauren',           cat:'other', url:'https://corporate.ralphlauren.com/careers'},
  {name:'Kering',                 cat:'other', url:'https://www.kering.com/en/talent/'},
  {name:'Capri Holdings',         cat:'other', url:'https://www.capriholdings.com/careers/'},
  {name:'Burberry',               cat:'other', url:'https://www.burberryplc.com/careers'},
  {name:'Prada Group',            cat:'other', url:'https://www.pradagroup.com/en.html'},
  {name:'Hermès',                 cat:'other', url:'https://www.hermes.com/us/en/careers/'},
  {name:'Coty',                   cat:'other', url:'https://careers.coty.com/'}
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
  'Boston Dynamics':'No internship listings. Now wholly Hyundai-owned — check Hyundai Motor Group MBA programmes instead.',

  /* --- luxury / beauty / retail, researched 11 Nov 2026 --- */
  'Estée Lauder Companies':'STRONGEST PRECEDENT HERE. The CEO Global Presidential Program has run MBA summer internships for years; the MBA tier is Presidential Management Associate, across marketing, finance and supply chain, feeding a 2-year rotational programme. Summer 2027 dates already published: 7 Jun – 13 Aug 2027, New York. Wants 5+ yrs pre-MBA experience. Caveat: the careers page now folds it into a "Lauder Summer Internship", so confirm the MBA pathway.',
  'L’Oréal':'11-week MBA marketing internship in New York, placed on one Luxe Division brand team — the stated primary route to the Luxe Marketing Chief of Staff role. Historically 15–25 MBA interns a year, ~50–60% conversion target. SUMMER 2027 WINDOW ALREADY CLOSED (30 Sep 2026); next cycle opens ~Aug 2027.',
  'Tapestry':'Runs an explicit MBA Strategy & Consumer Insights internship at Hudson Yards, New York — the closest fit to your strategy target anywhere in luxury. Summer 2027 dates listed as 1 Jun – 6 Aug 2027. Reqs expected on its Workday board in LATE NOVEMBER 2026, so watch it now.',
  'LVMH':'The North America corporate cohort is the MBA-friendly one — its posting prefers "a current Master’s degree candidate (MBA or other analytical degree)", across corporate affairs, data analytics, digital innovation, L&D. Applications opened via Handshake on 24 Nov last cycle, so roughly now. Moët Hennessy USA runs a separate commercial summer programme (1 Jun – 6 Aug 2027).',
  'Tiffany & Co.':'LVMH-owned, runs its own summer programme. The 2026 edition ran 1 Jun – 7 Aug. Nothing was open as of 10 Nov 2026; the next window is expected around DECEMBER 2026. A 2026 listing sought MBA candidates in supply chain, business analytics or retail management.',
  'PVH':'The MBA summer internship is the EXCLUSIVE entry point to PVH’s three-year Finance Leadership Development Program, New York. Applications expected around NOVEMBER 2026. Premium rather than true luxury, but a genuine MBA programme.',
  'Richemont':'Cartier, Van Cleef & Arpels, IWC. Bespoke 10-week Americas summer internship across New York, Dallas, Shelton and Canada. Applications normally open in DECEMBER. Source pages look dated — confirm the current cycle.',
  'Chanel':'Runs a US summer programme out of New York and Piscataway NJ, and a "Summer MBA Intern" listing has appeared on LinkedIn. The most recent posting I could date (2024) targeted rising juniors and seniors, so the MBA route is unconfirmed. Worth a direct check.',
  'Nordstrom':'Runs a Global Leader Program MBA internship at headquarters, with placements in merchandising, finance, supply chain and strategy and a path to full-time. Also a separate (non-MBA) merchandising internship in Seattle at ~$25/hr.',
  'Ralph Lauren':'MBA track appears DORMANT — no evidence the MBA version of RL Inspire has run since summer 2022, and no US corporate internships were listed as of early Oct 2026. Watch rather than plan around.',
  'Kering':'Gucci, Bottega Veneta, Saint Laurent. Does NOT run a branded US internship programme — its American houses post one-off paid intern reqs when a team needs one, mainly Bottega Veneta and Boucheron. Nothing posted for summer 2027.',
  'Capri Holdings':'Michael Kors, Versace, Jimmy Choo. The 10-week corporate programme (NYC + New Jersey) accepts graduate students but has NO dedicated MBA track. $20/hr, no housing or travel stipend. Application deadline was 6 Feb last cycle.',
  'Burberry':'No current US MBA programme found — the only recent evidence is a 2022 student profile in a Europe-facing client engagement role. Monitoring only.',
  'Prada Group':'No US MBA programme found; the only US intern listing that surfaced was an unofficial aggregator page for 2025. Monitoring only.',
  'Hermès':'No Americas MBA internship information surfaced at all. Monitoring only — direct outreach to US HR is the realistic route.',
  'Coty':'US offering is mainly a 4–7.5 month ENGINEERING CO-OP in North Carolina or Maryland, not a summer business internship. Business-function summer internships exist but are in Amsterdam, Paris and London.'
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
 note:'VERIFIED: 5 Nov 2026\nROUTE: If you want Oliver Wyman, the only route left is the SOM CDO board or a direct note to campus recruiting.\nDEADLINE FLAG: My earlier 7 Nov date came from last cycle and was wrong.\nNOTE: FILLED. The official Marsh McLennan careers page for this req now reads "this job has been filled." No GENERALIST Oliver Wyman MBA Summer Associate req exists for 2027 — only this HLS one, and it is gone.'},

{cat:'consulting', track:'strategy', company:'BCG', title:'Summer Consultant (1st-year MBA), Summer 2027',
 location:'All US offices — Miami and Los Angeles both available',
 deadline:'2026-11-10', status:'confirmed', url:'https://careers.bcg.com/global/en/on-campus/united-states-associate-job-opportunities',
 why:'The benchmark MBA strategy internship. One or two client cases over ~10 weeks spanning corporate strategy, growth and operations. Office preference is part of the application and BCG staffs both Miami and LA.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: BCG’s public US associate page explicitly says MBA candidates are NOT eligible to apply through it and that BCG contacts MBA candidates directly. Apply via the SOM campus page on careers.bcg.com or the CDO — not the general board. Highest-priority item on this dashboard.\nNOTE: One application covers 22 US offices.'},

{cat:'consulting', track:'strategy', company:'Bain', title:'Summer Associate (1st-year MBA), Summer 2027',
 location:'All US offices — Los Angeles available; Miami via the Atlanta/Southeast system',
 deadline:'2026-11-11', status:'confirmed', url:'https://www.bain.com/careers/find-a-role/?experience=MBA&search=summer%20associate',
 why:'Ten-week case-team role on live corporate and business-unit strategy work. Bain weights the office-fit conversation heavily, so name LA explicitly and give a reason.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: Verify the exact hour on the Bain portal and check whether SOM runs its own window.'},

{cat:'consulting', track:'strategy', company:'AlixPartners', title:'MBA Intern — Turnaround & Restructuring, Summer 2027',
 location:'New York · Chicago · Dallas · Houston',
 deadline:'2026-11-12', status:'confirmed', url:'https://www.alixpartners.com/careers/7810004003/turnaround--restructuring-mba-intern/',
 why:'Operations strategy under pressure — liquidity, cost structure and operating-model turnaround for distressed companies. The most operationally hands-on strategy internship on this list.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: ON THE YALE SOM CDO BOARD — apply through SOM.\nELIGIBILITY: Requires MBA graduation Dec 2027–Aug 2028.\nPAY: Posted salary $35,000 for the term.\nNOTE: Internship runs 7 Jun – 13 Aug 2027. Locations corrected — Houston, not Detroit.'},

{cat:'consulting', track:'strategy', company:'AlixPartners', title:'MBA Intern — Strategy & Analysis, Summer 2027',
 location:'Any US location (weekly travel to the project site)',
 deadline:'', status:'rolling', url:'https://www.alixpartners.com/careers/7810004003/',
 why:'The pure-strategy half of AlixPartners: growth strategy, commercial diligence and performance improvement. Closer to your stated targets than the restructuring track, and location-flexible, which suits your Miami/LA preference.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: NO DEADLINE PUBLISHED and applications are OPEN on AlixPartners’ own internships page. My earlier assumption that it shared the 12 Nov expiry was wrong — this req is separate and has no stated close. seats go on a rolling basis.\nNOTE: 10-week programme, 7 Jun – 13 Aug 2027. Apply early anyway'},

{cat:'consulting', track:'strategy', company:'BCG', title:'BCG X — Summer Consultant / Product Strategy, Summer 2027',
 location:'US offices — strongest in NY, SF, Boston',
 deadline:'2026-11-17', status:'confirmed', url:'https://careers.bcg.com/global/en/on-campus/united-states-associate-job-opportunities',
 why:'BCG’s build-and-design unit. Product strategy with real engineering adjacency — digital product, AI ventures and new-business building rather than classic slide-based casework.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: Same MBA routing caveat: go via the SOM campus page.\nNOTE: A week later than the core BCG req, and corroborated by one specialist source only — treat the date as likely rather than certain.\nNOTE: A separate application from the core Summer Consultant req; you may apply to both, but BCG will ask which you prefer.'},

{cat:'consulting', track:'strategy', company:'PwC', title:'Strategy& — Strategy Consulting Senior Associate Intern, Summer 2027',
 location:'Rosemont IL, New York, Chicago, Dallas, San Francisco, Boston, Los Angeles',
 deadline:'2026-11-18', status:'confirmed', url:'https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/Strategy--Strategy-Consulting-Senior-Associate-Intern---Summer-2027_765647WD',
 why:'Strategy&’s MBA-level intern track and a direct corporate-strategy hit: growth strategy, deals diligence and operating-model design for Fortune 500 clients. $84k–$202k prorated.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: One guide says MBA applications close 17 Nov at 5pm ET — APPLY BY 17 NOV to be safe. PwC also closes reqs by office as offers are accepted, so a posting can shut before its listed date.'},

{cat:'consulting', track:'strategy', company:'PwC', title:'Strategy& — Deals Strategy Senior Associate Intern, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/Strategy--Deals-Strategy-Senior-Associate-Intern---Summer-2027_765700WD',
 why:'Commercial due diligence and deal-side strategy — market attractiveness, growth cases and synergy analysis for PE and corporate acquirers. A distinct req from the Strategy Consulting track and a strong corporate-strategy fit.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: Found during verification — this req was not on the dashboard before.\nROUTE: Req 765700WD. Apply by 17 Nov to be safe — PwC closes reqs by office as offers are accepted.'},

{cat:'consulting', track:'strategy', company:'PwC', title:'Strategy& — Sustainability Strategy Senior Associate Intern, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/Strategy--Sustainability-Strategy-Senior-Associate-Intern---Summer-2027_765703WD',
 why:'Corporate strategy through a decarbonisation and transition lens — portfolio choices, operating-model change and growth strategy for climate-exposed businesses.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: Req 765703WD.\nNOTE: . Sits inside Strategy& rather than the separate Sustainability consulting practice, so the casework is strategy-led.'},

{cat:'consulting', track:'strategy', company:'PwC', title:'Strategy& — Strategy Consulting Intern, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://pwc.wd3.myworkdayjobs.com/en-US/US_Entry_Level_Careers/job/Strategy--Strategy-Consulting-Intern---Summer-2027_757258WD',
 why:'Companion req to the Senior Associate track. Same casework; office allocation differs by req, so applying to both widens your geography.',
 note:'ROUTE: Check which req the SOM cohort is routed to before doubling up.'},

{cat:'consulting', track:'strategy', company:'Accenture', title:'Strategy Summer Consultant — MBA Internship (NAELFY27)',
 location:'New York, NY · Chicago, IL',
 deadline:'2026-11-29', status:'confirmed', url:'https://www.accenture.com/us-en/careers/jobdetails?id=R00361148_en',
 why:'Explicitly an MBA strategy internship covering business-model innovation, operating strategy, post-merger integration and tech-enabled transformation — a direct hit on all four target strategy types. ~10 weeks from June.',
 note:'VERIFIED: 5 Nov 2026\nELIGIBILITY: MBA graduation Dec 2027–Aug 2028 (fits SOM 2028).\nPAY: $66.3k–$188.1k NY / $59.1k–$188.1k IL.\nNOTE: In-person, NY or Chicago. This is the ONLY MBA req among nine US NAELFY27 postings — the other eight are Summer Analyst.'},

{cat:'consulting', track:'strategy', company:'EY-Parthenon', title:'Strategy & Execution Summer Consultant 2027',
 location:'Boston, New York, Chicago, San Francisco, Los Angeles, Dallas, Atlanta',
 deadline:'2026-11-29', status:'confirmed', url:'https://usearlycareers.ey.com/job/los-angeles/usa-ey-parthenon-strategy-and-execution-summer-consultant-2027/39053/101558399744',
 why:'EY-Parthenon is the strategy house inside EY — corporate strategy, commercial due diligence and growth strategy casework. LA is a staffed office. ~$3,800/week.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: EY asks candidates to apply to NO MORE THAN TWO jobs in any six-month period — choose at most two of the three EY reqs on this dashboard. Some roles stay posted only until filled.'},

{cat:'consulting', track:'strategy', company:'EY', title:'Consulting — Supply Chain & Operations MBA Intern, Summer 2027',
 location:'Washington DC, New York, Chicago, Dallas, Austin',
 deadline:'2026-11-29', status:'confirmed', url:'https://usearlycareers.ey.com/search-jobs?k=1740057',
 why:'Your operations-strategy slot: operating-model redesign, network and supply-chain strategy, and cost transformation. Strategy work, not execution/PMO.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: Counts against EY’s two-applications-per-six-months cap — see the EY-Parthenon row.\nNOTE: Counts against EY’s two-applications-per-six-months cap — see the EY-Parthenon row.'},

{cat:'consulting', track:'strategy', company:'McKinsey', title:'Summer Associate (MBA), Summer 2027',
 location:'All US offices — Miami and Los Angeles both available',
 deadline:'2026-11-12', status:'confirmed', url:'https://www.mckinsey.com/careers/search-jobs?filters=InterestedIn:Internships',
 why:'The flagship MBA strategy internship: ~10 weeks on a single client study spanning corporate, business-unit or operations strategy. Office preference is part of the application and both Miami and LA take Summer Associates.',
 note:'VERIFIED: 5 Nov 2026\nNOTE: This date moved up 18 days from my earlier estimate; the window was confirmed still open as of 26 Oct.\nROUTE: McKinsey can also set school-specific dates, and missing a school deadline means the application is not considered — confirm the SOM date with the CDO immediately.'},

{cat:'consulting', track:'strategy', company:'Kearney', title:'2027 Kearney Summer Associate',
 location:'Atlanta, Boston, Chicago, Dallas, New York, San Francisco, DC (no Miami or LA)',
 deadline:'2026-12-01', status:'confirmed', url:'https://cdo.som.yale.edu/jobs/kearney-2027-kearney-summer-associate/',
 why:'Generalist MBA summer associate with a genuine operations-strategy tilt — Kearney’s heritage is supply chain, procurement and operations transformation.',
 note:'VERIFIED: 11 Nov 2026 — re-confirmed: due TUESDAY 1 DEC 2026, 11:59pm CT.\nROUTE: Submit via the Yale SOM CDO listing. Round 1 and Round 2 interviews are VIRTUAL in January 2027.\nELIGIBILITY: First-year MBA required.\nNOTE: 10-week internship; You rank a practice on the application — General Practice, Strategic Operations, or Digital & Analytics. PERLab is Chicago-only and PEPI is Chicago or New York. No Miami or LA option.'},

{cat:'consulting', track:'strategy', company:'Booz Allen Hamilton', title:'Summer 2027 Consulting Internship (graduate-eligible reqs)',
 location:'McLean VA, Washington DC, and client sites nationwide',
 deadline:'2026-12-10', status:'rolling', url:'https://careers.boozallen.com/search?q=summer%20hire%20consulting',
 why:'Strategy and operations consulting for federal and commercial clients. Worth a look for operations strategy, though the work is more delivery-weighted than MBB and much of it is government.',
 note:'DEADLINE FLAG: ESTIMATED from Workday end dates in early-to-mid Dec 2026.\nNOTE: 70+ reqs live as of Sep 2026. US citizenship required on cleared roles — check each req.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Internal Services — Summer Associate, Internal Strategy',
 location:'New York, NY',
 deadline:'2026-12-11', status:'rolling', url:'https://apply.deloitte.com/en_US/careers/JobDetail/Internal-Services-Summer-Associate-Internal-Strategy-Summer-2027/367722',
 why:'Deloitte’s in-house corporate strategy team — you are the client. Portfolio strategy, M&A support and growth planning for the firm itself.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: THREE CONFLICTING DATES on the same role: one Deloitte listing shows 11 Dec 2026, another says "best applied by 20 Dec", and its structured data says 31 Jan 2027. Treat 11 Dec as the deadline.\nNOTE: I have used the EARLIEST.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Summer Associate — Enterprise Tech Strategy',
 location:'Multiple US offices',
 deadline:'2027-02-28', status:'rolling', url:'https://apply.deloitte.com/en_US/careers/JobDetail/Consultative-Offerings-Summer-Associate-Enterprise-Tech-Strategy/369078',
 why:'Technology strategy: IT operating model, platform and architecture choices tied to business outcomes. A strong bridge between your product-strategy and business-strategy targets.',
 note:'DEADLINE FLAG: Listed as a rolling summer associate track.\nELIGIBILITY: Same eligibility as the other Deloitte strategy reqs.\nNOTE: ESTIMATED.'},

{cat:'consulting', track:'strategy', company:'Cornerstone Research', title:'Summer Associate — MBA, Summer 2027',
 location:'Boston · New York · Chicago · San Francisco · Los Angeles',
 deadline:'2026-12-31', status:'rolling', url:'https://www.cornerstone.com/careers/',
 why:'Economic and financial consulting on litigation. Analytically rigorous and well paid ($7,500 bi-weekly) but narrower than your four target functions — expert-witness analysis, not corporate strategy. LA office available.',
 note:'DEADLINE FLAG: ESTIMATED from a valid-through date of 31 Dec 2026 on a posting carrying a 2025 requisition ID — the 2027 req may not be live yet.\nNOTE: Verify before investing time.'},

{cat:'consulting', track:'strategy', company:'Simon-Kucher', title:'Summer 2027 Consultant Intern — Americas / Healthcare & Life Sciences',
 location:'Boston, New York, San Francisco, Chicago, Atlanta',
 deadline:'2027-01-15', status:'rolling', url:'https://simon-kucher.csod.com/ux/ats/careersite/6/home?c=simon-kucher',
 why:'The pricing and commercial-strategy specialist. Narrow but deep: pricing strategy, monetisation and go-to-market design. A strong complement to a product-strategy target since pricing is where product strategy becomes revenue.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: Reqs went live 13 Jul 2026 with NO published close date; the firm reviews MBA applications Oct–Jan on a rolling basis.\nELIGIBILITY: The MBA posting asks for graduation May–Jun 2028 (fits you) and runs 9 weeks, 7 Jun – 6 Aug 2027.'},

{cat:'consulting', track:'strategy', company:'ZS Associates', title:'Summer 2027 Consulting Intern (MBA-eligible)',
 location:'Evanston IL, New York, Boston, San Francisco, Philadelphia',
 deadline:'2027-01-15', status:'rolling', url:'https://jobs.zs.com/',
 why:'Commercial strategy for pharma and life sciences — market access, launch strategy and salesforce design. An 11-week programme. Industry-specific, so only pursue if healthcare appeals.',
 note:'DEADLINE FLAG: Nine North America intern reqs live as of 1 Oct 2026 with rolling review and no printed deadline.\nNOTE: ESTIMATED.'},

{cat:'consulting', track:'strategy', company:'Analysis Group', title:'Summer Associate Intern (generalist / healthcare)',
 location:'Boston, New York, Chicago, San Francisco, Los Angeles, DC',
 deadline:'2026-11-20', status:'confirmed', url:'https://www.analysisgroup.com/careers/career-path/summer-associate-intern/',
 why:'Economic consulting with generalist and healthcare tracks. Analytical litigation and health-economics work rather than corporate strategy — on your list, but off-target for product and operations strategy.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: THE DATE DEPENDS ON THE OFFICE, and two are earlier than the 1 Dec I had. Washington DC closes 20 NOV, Boston 25 NOV, Denver 1 DEC with interviews mid-January. This row shows the EARLIEST — check the office you actually want.\nELIGIBILITY: MBA or Master’s graduating by summer 2028, which fits you.\nNOTE: The firm keeps reviewing on a rolling basis after the posted date. A separate full-time Associate posting closed 23 Sep 2026.'},

{cat:'consulting', track:'strategy', company:'Charles River Associates', title:'Summer 2027 Consulting Intern (Economics and other tracks)',
 location:'Boston, New York, Chicago, DC, Los Angeles',
 deadline:'2027-01-15', status:'rolling', url:'https://ecp.crai.com/careers/?search=intern',
 why:'Four US summer 2027 intern tracks, 8–10 weeks on live client engagements. Economic consulting rather than strategy — same caveat as Analysis Group and Cornerstone.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: Open since 28 Aug 2026, résumé review from 15 Oct, rolling until roles fill — one source says intake runs to March 2027. No single hard deadline.'},

{cat:'consulting', track:'strategy', company:'Keystone Strategy', title:'Summer 2027 Summer Associate',
 location:'New York, Boston, San Francisco, Seattle',
 deadline:'2027-01-15', status:'rolling', url:'https://www.keystonestrategy.com/careers/open-roles/',
 why:'Tech-and-economics strategy boutique — digital strategy, platform economics and expert work for large tech clients. A genuinely interesting hybrid if you want strategy with a technology substrate.',
 note:'ROUTE: No separate MBA posting — MBAs apply through the general Summer Associate req.\nNOTE: ESTIMATED. Two summer 2027 student reqs live as of 12 Oct 2026.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Strategy Summer Associate — Corporate Strategy & Transactions / Customer & Commercial Strategy',
 location:'Multiple US offices — Miami and Los Angeles available',
 deadline:'2027-01-28', status:'confirmed', url:'https://apply.deloitte.com/en_US/careers/JobDetail/Deloitte-Strategy-Summer-Associate-Corporate-Strategy-Transactions-Customer-Commercial-Strategy/316711',
 why:'Closest title-and-description match to "corporate strategy" anywhere on this list: M&A strategy, portfolio choices and commercial/growth strategy. Deloitte staffs Miami and LA.',
 note:'VERIFIED: 5 Nov 2026\nNOTE: An EARLY deadline of 23 Oct 2026 has already passed, so you are in the second window. Deloitte fills per office on a rolling basis well before the posting expires.\nELIGIBILITY: Requires graduation Spring/Summer 2028 and 3+ yrs full-time experience.\nPAY: ~$3,750/week.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Summer Associate — Functional & Operations Strategy',
 location:'Atlanta, GA + multiple US offices',
 deadline:'2027-03-01', status:'confirmed', url:'https://apply.deloitte.com/en_US/careers/SearchJobs/functional%20operations%20strategy',
 why:'Direct match to operations strategy: operating-model design, cost and margin strategy, and functional transformation across finance and supply chain.',
 note:'VERIFIED: 5 Nov 2026\nNOTE: Deloitte fills per office on a rolling basis — do not wait for the posted date.\nELIGIBILITY: 3+ yrs full-time experience required.'},

{cat:'consulting', track:'strategy', company:'Deloitte', title:'Consultative Offerings — Summer Associate, Enterprise Strategy',
 location:'Multiple US offices',
 deadline:'2027-03-01', status:'confirmed', url:'https://apply.deloitte.com/en_US/careers/JobDetail/Consultative-Offerings-Summer-Associate-Enterprise-Strategy/368915',
 why:'Enterprise-wide strategy: growth agendas, operating model and enterprise transformation for large clients. Business-strategy core.',
 note:'NOTE: Seats go much earlier than the posted date, on a rolling basis.\nPAY: ~$3,750/week.'},

{cat:'consulting', track:'strategy', company:'L.E.K. Consulting', title:'Summer Associate 2027 (MBA)',
 location:'Boston, New York, Chicago, San Francisco, Los Angeles',
 deadline:'', status:'rolling', url:'https://www.lek.com/careers/apply-now',
 why:'Strategy boutique with real strength in commercial due diligence, growth strategy and healthcare. LA is a major L.E.K. office, which matters for your location preference.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: The MBA Summer Consultant (US) posting opened 3 Aug 2026 with NO published closing date. My earlier read that the window had passed was wrong — that was the UNDERGRAD Summer Associate track, which closed ~15 Sep. L.E.K. sets deadlines per school in the fall, so get the SOM date from the CDO.\nNOTE: GOOD NEWS, STILL OPEN.'},

{cat:'consulting', track:'strategy', company:'Alvarez & Marsal', title:'Summer 2027 Associate — Public Sector Services',
 location:'Washington, DC',
 deadline:'2026-12-15', status:'confirmed', url:'https://careers.alvarezandmarsal.com/jobs/18120866-summer-2027-associate-public-sector-services-pss',
 why:'Performance improvement and operations strategy for government and public-sector clients. Narrower than A&M’s corporate work and DC-only, but it is the one A&M graduate req actually open.',
 note:'VERIFIED: 5 Nov 2026\nNOTE: Confirmed on A&M’s own careers site, posted 27 Aug.\nELIGIBILITY: 7-week internship for graduate students finishing within ~a year\nNOTE: A&M calls it the main pathway to a full-time offer.'},

{cat:'consulting', track:'strategy', company:'Alvarez & Marsal', title:'2027 Summer Intern — Corporate Performance Improvement',
 location:'New York, NY',
 deadline:'2026-09-16', status:'closed', url:'https://careers.alvarezandmarsal.com/search/job-requisition-type/campus-recruiting/jobs',
 why:'The A&M req that actually matched your targets — operations strategy, margin and performance turnaround for corporate clients.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: Worth an email to A&M campus recruiting asking whether a second wave runs, since the PSS req is still open.\nELIGIBILITY: CLOSED 16 Sep 2026. Required graduation Dec 2027–Jun 2028, so you were eligible — the window simply passed before this search began.'},

{cat:'consulting', track:'strategy', company:'FTI Consulting', title:'Summer 2027 Consulting Internship',
 location:'New York, Washington DC, Chicago, Houston, Los Angeles',
 deadline:'2026-09-18', status:'closed', url:'https://fticonsulting.wd1.myworkdayjobs.com/FTIConsulting?q=intern',
 why:'Economic, restructuring and transaction advisory. Operations-strategy adjacency through the performance-improvement practice.',
 note:'ROUTE: Worth one check of the Workday board before writing it off.\nDEADLINE FLAG: LIKELY CLOSED — SOURCES CONFLICT. another says rolling.\nNOTE: One source has the US 2027 listing running 27 Jul – 18 Sep 2026'},

{cat:'consulting', track:'strategy', company:'Guidehouse', title:'2027 Campus Internship',
 location:'Washington DC, McLean VA, Chicago',
 deadline:'2026-10-19', status:'closed', url:'https://guidehouse.com/careers/campus',
 why:'Public-sector and healthcare consulting with an operations-improvement core.',
 note:'ROUTE: Watch for an off-cycle MBA req or contact campus recruiting about next cycle.\nDEADLINE FLAG: CLOSED. Several 2027 campus reqs closed 10–19 Oct 2026.'},

/* ---- CONSULTING — other MBA tracks (Consideration) ---- */
{cat:'consulting', track:'other', company:'PwC', title:'Senior Associate Intern — Management Consulting, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://jobs-us.pwc.com/us/en/job/PUVPUIUS765632WDEXTERNALENUS/Management-Consulting-Operations-Supply-Chain-Solutions-Senior-Associate-Intern-Summer-2027',
 why:'Operations and transformation delivery rather than strategy formulation. Same MBA eligibility and pay band as the Strategy& reqs, broader client mix.',
 note:'NOTE: One of ~16 Senior Associate intern reqs PwC posted 2 Oct across Advisory, Consulting, Technology and Sustainability.'},

{cat:'consulting', track:'other', company:'PwC', title:'Senior Associate Intern — Technology Consulting, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://jobs-us.pwc.com/us/en/job/PUVPUIUS765627WDEXTERNALENUS/Technology-Consulting-Senior-Associate-Intern-Summer-2027',
 why:'Enterprise technology delivery — cloud, ERP and digital transformation. Tech-adjacent but implementation-weighted.',
 note:''},

{cat:'consulting', track:'other', company:'PwC', title:'Senior Associate Intern — Sustainability, Summer 2027',
 location:'Multiple US offices',
 deadline:'2026-11-18', status:'confirmed', url:'https://jobs-us.pwc.com/us/en/job/PUVPUIUS765703WDEXTERNALENUS/Sustainability-Strategy-Senior-Associate-Intern-Summer-2027',
 why:'Climate and sustainability advisory — reporting, decarbonisation and transition planning.',
 note:''},

{cat:'consulting', track:'other', company:'Deloitte', title:'Summer Associate — Human Capital',
 location:'Multiple US offices',
 deadline:'2027-02-28', status:'rolling', url:'https://apply.deloitte.com/en_US/careers/SearchJobs/human%20capital%20summer%20associate',
 why:'Organisation design, workforce transformation and change management. People-side consulting rather than strategy.',
 note:'ROUTE: Verify on the board.\nNOTE: ESTIMATED — track existence inferred from Deloitte’s standard summer associate structure rather than a confirmed 2027 req.'},

{cat:'consulting', track:'other', company:'EY', title:'EY-Parthenon — Transactions / Transaction Strategy MBA Intern 2027',
 location:'New York, Boston, Chicago, Dallas',
 deadline:'2026-11-29', status:'rolling', url:'https://usearlycareers.ey.com/search-jobs?k=EY-Parthenon%20Transaction%20Strategy%20MBA',
 why:'Transaction support and due diligence — deal-side analytical work rather than corporate strategy formulation.',
 note:'DEADLINE FLAG: EY’s MBA window is 5 Oct – 29 Nov 2026\nNOTE: ESTIMATED. transactions work is referenced in EY’s internship offerings but a specific 2027 req was not confirmed.'},

/* ============================================================
   TECH — strategy track
   ============================================================ */
{cat:'tech', track:'strategy', company:'Salesforce', title:'Summer 2027 Intern — MBA Business Value & Strategic Selling Consultant',
 location:'New York, NY — Healthcare & Life Sciences and Financial Services tracks',
 deadline:'2026-10-24', status:'closed', url:'https://careers.salesforce.com/en/jobs/?search=MBA%20Business%20Value',
 why:'Business-case and value-engineering work: quantifying ROI and building the commercial argument for enterprise deals. Strategy-adjacent and genuinely MBA-gated. Runs June to August/September 2027.',
 note:'VERIFIED: 11 Nov 2026\nNOTE: RESOLVED — CLOSED. The three New York MBA Business Value reqs (generalist, Healthcare & Life Sciences, Financial Services) ran until 20–24 Oct 2026 and are not among the eight Salesforce Summer 2027 reqs still live on 7 Nov. Last week this was flagged as conflicting; it is settled now.\nEXPERIENCE FLAG: Some listings ask 5–7+ yrs pre-MBA experience, others 3+.'},

{cat:'tech', track:'strategy', company:'Stripe', title:'MBA Intern — Partnerships & Strategic Business Development',
 location:'Seattle, WA · San Francisco, CA · New York, NY',
 deadline:'', status:'notposted', url:'https://stripe.com/jobs/search?query=MBA%20intern%20partnerships',
 why:'Corporate development and partnership strategy: evaluating partners, shaping product roadmaps around them and structuring commercial deals. Financial Partnerships and Payments & Commerce teams.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: Stripe reviews on a rolling basis and reposts, so watch the board — but do not plan around this one.\nNOTE: CORRECTION: NO MBA REQ IS LIVE. Stripe’s Summer 2027 postings are Software Engineering (opened 31 Aug), US Data Analyst and PhD Data Scientist (1 Oct), and a high-school programme. The MBA Partnerships listing I had came from a prior cycle.'},

{cat:'tech', track:'strategy', company:'Block (Square)', title:'Business / Operations Intern — Summer 2027',
 location:'San Francisco, CA · New York, NY · Oakland, CA (remote-friendly)',
 deadline:'2026-11-15', status:'notposted', url:'https://block.xyz/careers/jobs?search=business%20operations%20intern',
 why:'Track covers business analytics, operations and go-to-market strategy over 12 weeks — a legitimate business/operations strategy seat, and Block is one of the more remote-friendly employers on your list.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: NO REQ FOUND after two passes — nothing MBA-specific on block.xyz and no Summer 2027 business/operations posting surfaced anywhere. The projected window (late Aug–early Sep, practical deadline mid-Nov) has effectively run out. Treat as unlikely rather than upcoming.\nNOTE: The track itself is real — business analytics, operations and go-to-market strategy over 12 weeks — but Block does not appear to have posted it this cycle.'},

{cat:'tech', track:'strategy', company:'Nvidia', title:'Product Management MBA Intern, Data Center GPU — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-10-17', status:'closed', url:'https://jobs.nvidia.com/careers/job/893397711858',
 why:'Product strategy with a business-strategy core — the posting lists market sizing, segmentation and pricing analysis as the actual intern work, defining AI systems for enterprise and cloud customers. The most strategy-weighted of NVIDIA’s MBA reqs.',
 note:'VERIFIED: 11 Nov 2026\nNOTE: RESOLVED — CLOSED. NVIDIA’s own posting states "applications for this job will be accepted at least until October 17, 2026". That date has passed. Last week I could not tell whether this was open; now I can.\nELIGIBILITY: MBA graduating winter 2027–summer 2028.\nPAY: $38–$94/hr.'},

{cat:'tech', track:'strategy', company:'Nvidia', title:'Product Management MBA Intern, Gaming, Content Creation & PC AI — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-11-20', status:'rolling', url:'https://jobs.nvidia.com/careers/job/893397725881',
 why:'Posting names "develop product strategy, go-to-market plans" alongside roadmap prioritisation for the GeForce / RTX Spark line — product strategy with real commercial ownership.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: No published deadline\nELIGIBILITY: Requires an MBA graduating winter 2027 or summer 2028.\nNOTE: Title has changed from "Laptop" to "Gaming, Content Creation and PC AI"; same GeForce/Spark team. estimate stands. Check jobs.nvidia.com directly.'},

{cat:'tech', track:'strategy', company:'Nvidia', title:'Product Manager MBA Intern, Enterprise AI — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-11-20', status:'rolling', url:'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=Enterprise%20AI%20MBA%20Intern',
 why:'Enterprise AI product strategy — LLM, RAG and agentic AI product positioning. Strategy work on the fastest-moving product line at the company.',
 note:'NOTE: ESTIMATED. Familiarity with LLM/RAG/agentic AI concepts is called out in the posting; worth a line in your cover letter.'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Product Strategy & Business Operations Intern, SMB and Business Platform',
 location:'Mountain View, CA (hybrid, 3 days on-site)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-product-strategy-and-business-operations-intern-smb-and-business-platform/27595/101313096064',
 why:'THE closest match on this entire dashboard. The posting literally promises "a defined product strategy project with a named business owner and a measurable outcome — a market sizing analysis, a build/buy/partner assessment, a roadmap prioritization framework, or a competitive assessment that leadership will act on." Product strategy and business strategy in one req.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: On Intuit’s own posting — STILL OPEN, no published close date. A sibling Intuit req carries a 31 Jan 2027 validThrough, so the window likely runs into January.\nELIGIBILITY: REQUIRES 2+ YEARS OF PRE-MBA WORK EXPERIENCE, with management consulting strongly preferred — which plays directly to your profile.\nPAY: Pay $48–$57/hr.\nNOTE: Job ID 23011. 12 weeks, two cohorts: 17 May–6 Aug or 14 Jun–3 Sep 2027.'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Strategy & Operations Intern',
 location:'Mountain View, CA (hybrid)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-strategy-and-operations-intern/27595/100620927760',
 why:'Operations strategy by name. Intuit’s S&O function is the internal-consulting arm — exactly the profile you are targeting, and the natural landing spot for an MBA coming from or toward consulting.',
 note:'DEADLINE FLAG: Same cohort structure and no published close.\nNOTE: ESTIMATED. Intuit calls its summer internships "a key pipeline for full-time opportunities".'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Corporate Strategy & Development Intern',
 location:'Mountain View, CA (hybrid, 3 days on-site)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-corporate-strategy-and-development-intern/27595/101313096080',
 why:'Corporate strategy by name: product strategy, partnerships, mobile app strategy and corporate development. Pairs the strategy and M&A sides in one seat.',
 note:'ROUTE: NOTE: the posting text says "beginning in May or June 2026", which conflicts with the Summer 2027 title — almost certainly a copy-paste error in the req, but confirm with the recruiter.\nNOTE: ESTIMATED. 10–12 weeks.'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Strategy & Transformation Intern, Mid Market',
 location:'Mountain View, CA (hybrid)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-strategy-and-transformation-intern-mid-market/27595/101313096112',
 why:'Business strategy for Intuit’s mid-market push — a live growth bet, which usually means a better intern project than a mature line.',
 note:'DEADLINE FLAG: Same cohort structure, no published close.\nNOTE: ESTIMATED.'},

{cat:'tech', track:'strategy', company:'Intuit', title:'Summer 2027: MBA Business Operations Intern, Consumer Group',
 location:'San Diego, CA',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/search-jobs/MBA%20Business%20Operations/27595/1',
 why:'Business operations for the TurboTax consumer business — operating cadence, performance management and growth analytics.',
 note:'NOTE: ESTIMATED. San Diego rather than Mountain View; worth noting if you have a Bay Area preference.'},

{cat:'tech', track:'strategy', company:'Adobe', title:'2027 MBA Intern — Corporate Strategy',
 location:'San Francisco, CA',
 deadline:'2026-11-30', status:'rolling', url:'https://careers.adobe.com/us/en/job/R172471/2027-MBA-Intern-Corporate-Strategy',
 why:'Outstanding fit. The posting describes product strategy development, technological trend assessment, competitive landscape analysis, future positioning of Adobe, and build/buy/partner evaluation of market adjacencies — and says the intern owns and drives a project focused on Adobe’s long-term growth.',
 note:'VERIFIED: 11 Nov 2026\nROUTE: Confirm with the recruiter before investing in the application.\nDEADLINE FLAG: POSSIBLY CLOSED — CHECK THIS ONE FIRST. A third-party copy dated 6 Oct carries an expiry of 5 NOV 2026, now passed. Adobe’s own page is still up and its Colorado notice says the window stays open “until at least” the stated date, so it may still take applications — but unlike the Product Manager req beside it, this one carries no “ongoing basis” language. The PMM sibling req already closed 26 Oct.\nELIGIBILITY FLAG: One aggregator says graduation Dec 2026–Jun 2027 (which would EXCLUDE you), another says Dec 2027–Jun 2028 (which includes you), and Adobe’s own page shows no window.\nPAY: Pay $37–$50/hr.'},

{cat:'tech', track:'strategy', company:'Adobe', title:'2027 MBA Intern — Product Manager',
 location:'San Jose · San Francisco, CA',
 deadline:'2026-11-30', status:'rolling', url:'https://careers.adobe.com/us/en/job/R172261/2027-MBA-Intern-Product-Manager',
 why:'Product management with strategy ownership across Adobe’s Creative Cloud and Document Cloud lines.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: NO DEADLINE — the posting states “Adobe accepts applications on an ongoing basis”. Less time pressure than the Corporate Strategy req beside it, which carries no such language.\nNOTE: Posted 30 Sep 2026.'},

{cat:'tech', track:'strategy', company:'Adobe', title:'2027 MBA Intern — Corporate Development',
 location:'San Francisco, CA (on-site)',
 deadline:'2026-11-30', status:'rolling', url:'https://careers.adobe.com/us/en/search-results?keywords=MBA%20Intern%20Corporate%20Development',
 why:'The M&A and partnership half of Adobe’s strategy organisation — build/buy/partner evaluation, target screening and deal support. Sits directly alongside the Corporate Strategy req and is a strong corporate-strategy fit in its own right.',
 note:'VERIFIED: 11 Nov 2026\nNOTE: FOUND TODAY — this req was not previously on the board. Posted 26 Oct 2026.\nELIGIBILITY: Expected graduation Dec 2027 – Jun 2028, which fits you. One aggregator lists Dec 2026 – Jun 2027 instead — confirm before investing.\nPAY: $37–$50/hr.\nDEADLINE FLAG: No published close date; the date shown is an estimate.'},

{cat:'tech', track:'strategy', company:'Snowflake', title:'Product Management Intern (Summer 2027)',
 location:'Menlo Park, CA',
 deadline:'2026-11-29', status:'rolling', url:'https://careers.snowflake.com/us/en/job/SNCOUSB282FC4CD041487A8444EAB095749368EXTERNALENUS322B82F64B184F86AE34007F55C4BDBF/Product-Management-Intern-Summer-2027',
 why:'Explicitly asks for MBA students and names product strategy and planning, market research, product design and data-driven decision-making as the work. 12-week summer term. One of the cleanest product-strategy reqs in enterprise software.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: STILL OPEN — Snowflake’s careers page shows this RE-POSTED on 8 NOV 2026, which supersedes the 29–30 Nov listing expiry I recorded last week. No published close date.\nPAY: Reported $60–$70/hr, or $124,800–$145,600 annualised — sources disagree.\nNOTE: Open to 1st and 2nd-year MBAs, 12-week summer term.'},

{cat:'tech', track:'strategy', company:'Amazon', title:'2027 Amazon Leadership Accelerator (ALA) — Product Manager Internship',
 location:'Seattle, WA (some Arlington VA / NYC placements)',
 deadline:'2026-10-02', status:'closed', url:'https://cdo.som.yale.edu/jobs/amazon-com-2027-amazon-leadership-accelerator-ala-product-manager-internship/',
 why:'Amazon’s selective MBA leadership development programme. The intern owns a project end-to-end with a defined customer benefit and business outcome — product strategy framed as a business case.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: LIKELY CLOSED. The Yale SOM CDO listing expired 2 Oct 2026, and Yale OCS shows 28 Aug 2026 for the same role. My 15 Dec estimate was wrong. Apply to the MLDP req instead — same cohort, open until 6 Nov.'},

{cat:'tech', track:'strategy', company:'Amazon', title:'2027 MBA Leadership Development Program (MLDP) Intern',
 location:'Seattle, WA (relocation assistance provided)',
 deadline:'2026-11-06', status:'confirmed', url:'https://amazon.jobs/en/jobs/10491603/2027-mba-leadership-development-program-mldp-intern',
 why:'The intern OWNS A STRATEGIC BUSINESS PROBLEM WITH REAL P&L IMPACT and presents the solution to senior leadership — business strategy in about as pure a form as exists on this dashboard. Cross-functional, AI-enabled, data-driven work, and the 12-week internship feeds a three-year full-time MLDP rotation programme.',
 note:'VERIFIED: 5 Nov 2026\nROUTE: ON THE YALE SOM CDO BOARD.\nELIGIBILITY: Opened 5 Aug 2026. Eligibility fits you exactly: enrolled MBA, graduation 1 Dec 2027–30 Jun 2028.\nPAY: Pay $121,200–$163,900. Prefers 3+ yrs full-time experience and a retail / e-commerce / supply-chain background.\nNOTE: Cohorts start 24 May or 14 Jun 2027.'},

{cat:'tech', track:'strategy', company:'Amazon', title:'Product Manager Technical (PMT) Intern — Summer 2027',
 location:'Seattle, WA',
 deadline:'2026-12-15', status:'rolling', url:'https://amazon.jobs/en/jobs/10509639/product-manager-technical-pmt-intern-summer-2027',
 why:'Owns a technical product end-to-end: roadmap, business case, launch. More technical than the ALA track, but the strategy content — market definition, build/buy, pricing — is real.',
 note:'ELIGIBILITY: MBA conferral Dec 2027–Jun 2028. 3+ yrs non-internship experience preferred.\nPAY: $136,170 annualised.\nNOTE: ESTIMATED.'},

{cat:'tech', track:'strategy', company:'ServiceNow', title:'Product Manager Intern (Masters / MBA) — Summer 2027',
 location:'Santa Clara, CA · San Diego, CA',
 deadline:'2026-12-15', status:'rolling', url:'https://careers.servicenow.com/careers/jobs/?search=intern',
 why:'12-week MBA-gated track covering product strategy and market analysis. ServiceNow asks for 3–5 years prior work experience, so the cohort skews senior — a good sign for project quality.',
 note:'ELIGIBILITY: Requires graduation Dec 2027 or later for the Summer 2027 cycle.\nNOTE: ESTIMATED. Grouped with Intuit and HubSpot as firms hiring PM interns Sep through the fall.'},

{cat:'tech', track:'strategy', company:'Google', title:'MBA Intern, Summer 2027 (general business track)',
 location:'Multiple US offices',
 deadline:'2026-11-13', status:'confirmed', url:'https://www.google.com/about/careers/applications/jobs/results/121103710599160518-mba-intern-summer-2027',
 why:'Umbrella req routing into Business Strategy, Product Management, Corporate Development, Finance, Marketing, Operations, People Ops and Sales — a single door onto three of your four target functions, with team preference expressed in the application. THIS is the US req.',
 note:'VERIFIED: 10 Nov 2026\nROUTE: Handshake lists Chicago and Seattle.\nROUTE: Requires attending an MBA programme IN THE US. Interviews run rolling through Q1 2027, and Google warns reqs can close early once projects fill.\nELIGIBILITY: Requires attending an MBA programme IN THE US\nNOTE: STILL OPEN as of today. 12 consecutive weeks May–Sep 2027.'},

{cat:'tech', track:'strategy', company:'Meta', title:'Business Product Strategy Intern (MBA)',
 location:'Menlo Park, CA',
 deadline:'', status:'notposted', url:'https://www.metacareers.com/jobs?q=MBA%20intern&is_intern=true',
 why:'The title is almost a transcription of your ask — business strategy and market evaluation for a product line. Worth watching in case Meta reopens it.',
 note:'VERIFIED: 5 Nov 2026\nELIGIBILITY: The LinkedIn posting’s embedded data shows a 2022 expiry, an APM aggregator marks the role "not yet open", and one analysis finds no verified MBA programme at Meta at all.\nNOTE: THE LISTING IS STALE. Meta’s confirmed Summer 2027 reqs are technical and analytics only. Do not plan around this.'},

{cat:'tech', track:'strategy', company:'Atlassian', title:'Product Management Intern — Summer 2027',
 location:'San Francisco, CA · Remote (US)',
 deadline:'2027-01-15', status:'rolling', url:'https://www.atlassian.com/company/careers/details/10992806',
 why:'One of the few genuinely remote-eligible product roles on this dashboard, which matters given remote is fine for you. Atlassian PM work is strategy-heavy and well documented.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: The Summer 2027 PM intern req was confirmed open as of 9 Oct 2026, rolling.\nNOTE: 12 weeks, May/June to Aug/Sep 2027.'},

{cat:'tech', track:'strategy', company:'Databricks', title:'Product Management Intern (Summer 2027)',
 location:'San Francisco, CA · Mountain View, CA',
 deadline:'2027-01-15', status:'rolling', url:'https://www.databricks.com/company/careers/open-positions?search=Product%20Management%20Intern',
 why:'Product strategy for data and AI infrastructure. $54–$56/hr.',
 note:'ROUTE: Worth a recruiter email first.\nELIGIBILITY FLAG: .\nELIGIBILITY: ESTIMATED — Posted eligibility is "graduating Fall 2027 or Spring 2028", which may exclude a 2028 MBA depending on how they read it.'},

{cat:'tech', track:'strategy', company:'DoorDash', title:'Intern, Growth and Strategy — Drive (MBA preferred)',
 location:'San Francisco, CA · New York, NY',
 deadline:'2027-01-15', status:'rolling', url:'https://careersatdoordash.com/jobs/?search=strategy%20intern',
 why:'DoorDash Strategy & Ops is a canonical tech business-strategy internship — market-level P&L ownership, growth strategy and operating analytics. The Drive (white-label logistics) req states MBA preferred.',
 note:'DEADLINE FLAG: The req found is undated and may be from a prior cycle\nNOTE: ESTIMATED — NEEDS VERIFYING. the only confirmed Summer 2027 ops req is a PhD Operations Research role.'},

{cat:'tech', track:'strategy', company:'Uber', title:'Strategy & Operations Intern / MBA Internship — Summer 2027',
 location:'San Francisco, CA · New York, NY · Chicago, IL',
 deadline:'2027-01-15', status:'notposted', url:'https://jobs.uber.com/en/teams/emerging-talent/',
 why:'Uber S&O is the canonical tech business-strategy internship — city and mobility operations with real P&L exposure, SQL and analytics. The Emerging Talent page lists a distinct MBA internship alongside the Strategy, Operations, Analytics rotational programme.',
 note:'DEADLINE FLAG: NOT YET POSTED for MBA. The Summer 2027 SWE req closed 31 Oct 2026 and no other US req was open that day.\nPAY: 12 weeks, $27–$30/hr on the S&O track.\nNOTE: Set an alert on the Emerging Talent page.'},

{cat:'tech', track:'strategy', company:'Snap', title:'Product Manager Intern — Summer 2027 (MBA preferred)',
 location:'Santa Monica, CA (Los Angeles) · New York, NY',
 deadline:'2027-01-15', status:'notposted', url:'https://careers.snap.com/jobs?search=product%20manager%20intern',
 why:'13-week PM internship with "MBA preferred" stated — and Santa Monica is Los Angeles, hitting your location preference squarely. One of the few LA-headquartered tech companies on your list.',
 note:'DEADLINE FLAG: NOT YET POSTED as of 22 Oct 2026, though last cycle opened late Aug–early Sep. Rolling review.\nNOTE: Worth a weekly check given the LA fit.'},

{cat:'tech', track:'strategy', company:'PayPal', title:'Product Management Intern — Summer 2027',
 location:'San Jose, CA · New York, NY · Austin, TX',
 deadline:'2027-01-15', status:'notposted', url:'https://careers.pypl.com/search-results?keywords=product%20management%20intern',
 why:'Product strategy, feature planning and market analysis for payments products.',
 note:'DEADLINE FLAG: Postings were expected Sep–Oct 2026 with rolling review. The window may be open now — check the board.\nNOTE: NOT CONFIRMED. Estimated 3–5% acceptance rate.'},

{cat:'tech', track:'strategy', company:'Tesla', title:'Internship — FP&A & Business Operations, Summer 2027',
 location:'Sparks, NV · Austin, TX · Palo Alto, CA',
 deadline:'2027-01-31', status:'rolling', url:'https://www.tesla.com/careers/search/job/internship-fpa-business-operations-summer-2027-284439',
 why:'Reads as operations strategy despite the FP&A title: managing investment into service operations, leading pricing work, and evaluating ROI on new markets and business models. The decision content is strategic, not reporting.',
 note:'DEADLINE FLAG: Tesla posts with no notice and closes fast.\nNOTE: ESTIMATED. On-site only, no remote. Min 12 weeks, May/June start.'},

{cat:'tech', track:'strategy', company:'Microsoft', title:'Product Manager MBA Intern, Summer 2027',
 location:'Redmond, WA · Mountain View, CA',
 deadline:'2027-02-28', status:'rolling', url:'https://jobs.careers.microsoft.com/global/en/search?q=Product%20Manager%20MBA%20Internship&l=en_us',
 why:'Posting language is product strategy outright: set product vision and strategy from customer insight and competitive market analysis, then work with Product Marketing, Business Planning and Engineering on release criteria and monetisation.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: MBA roles have no published window and stay open until filled, so there is no reason to wait for December — apply now.\nELIGIBILITY: CORRECTION: the "first week of each month" rule applies to Microsoft EXPLORE, a second-year UNDERGRADUATE programme, NOT the MBA track.\nNOTE: Needs one quarter/semester remaining after the internship.'},

{cat:'tech', track:'strategy', company:'Apple', title:'MBA Internships 2027 (umbrella req)',
 location:'Various US — Cupertino, Austin, Culver City (LA)',
 deadline:'2027-02-28', status:'rolling', url:'https://jobs.apple.com/en-us/search?search=MBA%20internship&location=united-states-USA',
 why:'Single MBA req routing into strategy, product management, operations, business process improvement and programme management. Apple’s Strategy & Operations track covers financial modelling, pricing research and business process analysis.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: Apple’s US umbrella postings state they accept applications ON AN ONGOING BASIS, with hiring per team as headcount opens — so there is no fixed deadline to miss. The 23 Oct expiry I flagged earlier appears on one campus repost only, not Apple’s own page.\nNOTE: Culver City / LA placements exist via Apple Services and Apple TV+.'},

{cat:'tech', track:'strategy', company:'Spotify', title:'Summer MBA Intern — Business Strategy and Product Management',
 location:'New York, NY',
 deadline:'2027-02-05', status:'notposted', url:'https://www.lifeatspotify.com/jobs?q=MBA',
 why:'A near-perfect title match Spotify has run in prior cycles: strategy modelling, senior-leadership presentations and PM rotations over 10 weeks in NYC.',
 note:'DEADLINE FLAG: NOT YET POSTED. projections put the window mid-to-late Jan 2027 with a hard deadline in early Feb. Spotify refuses late applications and will not accept approaches by email or LinkedIn — you must catch the window.\nNOTE: Spotify’s student page says 2027 information is "coming soon"'},

/* ---- TECH — closed ---- */
{cat:'tech', track:'strategy', company:'Airbnb', title:'Strategic Finance & Analytics Intern (MBA), Summer 2027',
 location:'San Francisco, CA',
 deadline:'2026-11-01', status:'closed', url:'https://careers.airbnb.com/positions/8285171/?gh_jid=8285171',
 why:'MBA-gated role partnering with business leaders on investment priorities, growth strategies and future initiatives — business strategy under a finance label. Programme ran 24 May – 13 Aug 2027.',
 note:'DEADLINE FLAG: CLOSED 1 Nov 2026, 11:45pm PST — three days before this dashboard was built.\nNOTE: Airbnb runs one MBA req a year.'},

{cat:'tech', track:'strategy', company:'Stripe', title:'MBA Intern — Product Strategy Consultant',
 location:'Chicago, IL',
 deadline:'2026-10-31', status:'closed', url:'https://stripe.com/jobs/search?query=MBA',
 why:'Internal product strategy consulting — a near-perfect match for an ex-consultant MBA targeting product strategy.',
 note:'DEADLINE FLAG: CLOSED.\nNOTE: Stripe reposts MBA reqs through the cycle, so watch for a re-run; the Partnerships req may still be live.'},

{cat:'tech', track:'strategy', company:'Salesforce', title:'Summer 2027 Intern — Product GTM Strategy',
 location:'San Francisco, CA',
 deadline:'2026-10-17', status:'closed', url:'https://careers.salesforce.com/en/jobs/?search=GTM%20Strategy%20intern',
 why:'Go-to-market strategy with dashboards, SQL and market evaluation.',
 note:'DEADLINE FLAG: CLOSED 17 Oct 2026 — and the req targeted juniors and rising seniors, not MBAs.'},

/* ---- TECH — other MBA tracks (Consideration) ---- */
{cat:'tech', track:'other', company:'Microsoft', title:'Finance Manager: MBA Internship Opportunities, Summer 2027',
 location:'Redmond, WA',
 deadline:'2027-02-28', status:'rolling', url:'https://jobs.careers.microsoft.com/global/en/search?q=Finance%20Manager%20MBA%20Internship&l=en_us',
 why:'12-week role on Microsoft’s Central Finance Team owning a high-impact project for senior finance leaders. Strong corporate-finance seat and a well-trodden path into Business Planning, which is strategy-adjacent.',
 note:'DEADLINE FLAG: POSTED ON THE YALE SOM CDO BOARD — the strongest-sourced non-strategy role here.\nELIGIBILITY: FP&A experience preferred, 3+ yrs relevant experience listed.\nNOTE: Requires a full-time MBA with 1+ semester remaining; Same first-week-of-month application mechanic as the PM req.'},

{cat:'tech', track:'other', company:'Microsoft', title:'Treasury Finance Manager: MBA Internship, Summer 2027',
 location:'Redmond, WA',
 deadline:'2027-02-28', status:'rolling', url:'https://jobs.careers.microsoft.com/global/en/search?q=Treasury%20MBA%20Internship&l=en_us',
 why:'Treasury, capital structure and liquidity management. Narrow corporate-finance function, well outside your four target areas.',
 note:'NOTE: ESTIMATED. Sister req to the Central Finance role above.'},

{cat:'tech', track:'other', company:'Amazon', title:'2027 MBA Pathways Operations Manager Intern',
 location:'US fulfilment / delivery sites — 12 weeks',
 deadline:'2026-12-15', status:'rolling', url:'https://cdo.som.yale.edu/jobs/amazon-com-2027-mba-pathways-operations-manager-intern/',
 why:'Site-level operations management at a fulfilment or delivery centre. Operations execution rather than operations strategy.',
 note:'VERIFIED: 11 Nov 2026\nROUTE: REFERRAL ONLY — the req sits on Amazon’s internal portal for employee referrals and surfaces publicly only through the Yale SOM CDO board. You need an Amazon referral to apply.\nELIGIBILITY: Enrolled MBA or Master’s.\nNOTE: I previously listed this row as an "MBA Supply Chain Internship". That was wrong — Amazon’s 2027 supply-chain intern reqs are Bachelor’s/Master’s engineering roles, not MBA ones.'},

{cat:'tech', track:'other', company:'Amazon', title:'Finance Leadership Development Program — MBA, Summer 2027',
 location:'Seattle, WA · Arlington, VA',
 deadline:'2026-12-15', status:'rolling', url:'https://www.amazon.jobs/en/search?base_query=2027+MBA+Finance+Leadership+Development+Program',
 why:'Corporate finance rotation feeding Amazon’s FP&A and business-finance organisation.',
 note:'ELIGIBILITY: Same MBA conferral window as the PM reqs (Dec 2027–Jun 2028).\nNOTE: ESTIMATED.'},

{cat:'tech', track:'other', company:'Nvidia', title:'Technical Product Marketing MBA Intern, AI Infrastructure — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-11-06', status:'closed', url:'https://jobs.nvidia.com/careers/job/893398510317',
 why:'Positioning and technical marketing for NVIDIA’s AI infrastructure line. Marketing rather than strategy — but it is the NVIDIA MBA req whose status is least in doubt.',
 note:'VERIFIED: 11 Nov 2026\nNOTE: CORRECTION — CLOSED 6 NOV. I previously read a validThrough of 1 May 2027 from the page metadata and called this the live NVIDIA door. The application deadline was 6 Nov 2026. The metadata date was not the deadline.'},

{cat:'tech', track:'other', company:'Nvidia', title:'Product Marketing Management MBA Intern — Summer 2027',
 location:'Santa Clara, CA',
 deadline:'2026-11-20', status:'rolling', url:'https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite?q=Product%20Marketing%20MBA%20Intern',
 why:'Positioning, messaging and launch for NVIDIA product lines. Marketing rather than strategy, though NVIDIA PMM carries more analytical weight than most.',
 note:'ELIGIBILITY: Requires an MBA in product marketing or related, graduating winter 2027–summer 2028.\nPAY: $38–$94/hr, same band as the PM reqs.\nNOTE: ESTIMATED.'},

{cat:'tech', track:'other', company:'Intuit', title:'Summer 2027: MBA Finance Strategy Intern',
 location:'Mountain View, CA (hybrid)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-finance-strategy-intern/27595/101319972336',
 why:'Strategic finance partnering with business leaders on investment priorities — business strategy under a finance label. The closest of Intuit’s non-strategy reqs to your targets.',
 note:'NOTE: ESTIMATED. Worth considering as a fifth Intuit application if the four strategy reqs feel crowded.'},

{cat:'tech', track:'other', company:'Intuit', title:'Summer 2027: MBA Product Marketing Intern',
 location:'Mountain View, CA (hybrid)',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/mountain-view/summer-2027-mba-product-marketing-intern/27595/100620927728',
 why:'Go-to-market strategy and pricing. Adjacent to product strategy rather than core to it.',
 note:'NOTE: ESTIMATED. One of 13 Intuit Summer 2027 intern reqs live as of 21 Sep 2026.'},

{cat:'tech', track:'other', company:'Intuit', title:'Summer 2027: MBA Strategic Sourcing Intern, Technology',
 location:'San Diego, CA',
 deadline:'2026-11-30', status:'rolling', url:'https://jobs.intuit.com/job/san-diego/summer-2027-mba-strategic-sourcing-intern-technology/27595/101062769088',
 why:'Procurement and vendor strategy for Intuit’s technology spend. Operations in a narrow slice — weakest of the Intuit reqs against your targets.',
 note:'NOTE: ESTIMATED.'},

{cat:'tech', track:'other', company:'Meta', title:'Product Marketing Manager Intern (MBA)',
 location:'Menlo Park · San Francisco · Seattle · New York',
 deadline:'2026-12-31', status:'rolling', url:'https://www.metacareers.com/jobs?q=product%20marketing%20MBA&is_intern=true',
 why:'Go-to-market strategy: positioning, segmentation and launch strategy. Overlaps your product-strategy target but sits in marketing.',
 note:'DEADLINE FLAG: ESTIMATED — undated listing, may be from a prior cycle.\nNOTE: Verify on metacareers.com.'},

{cat:'tech', track:'other', company:'Adobe', title:'2027 MBA Intern — Product Marketing Manager',
 location:'San Jose · San Francisco, CA',
 deadline:'2026-10-26', status:'closed', url:'https://careers.adobe.com/us/en/search-results?keywords=MBA%20Intern',
 why:'Go-to-market and positioning strategy for Adobe’s Creative and Document Cloud lines.',
 note:'DEADLINE FLAG: CLOSED — apply-by 26 Oct 2026. Posted 30 Sep.\nNOTE: Noted so you know Adobe’s PMM door has shut.'},

{cat:'tech', track:'other', company:'Databricks', title:'Sales Intern — Summer 2027',
 location:'San Francisco, CA · Mountain View, CA',
 deadline:'2027-01-15', status:'rolling', url:'https://www.databricks.com/company/careers/open-positions?search=Sales%20Intern',
 why:'Enterprise sales for data and AI infrastructure. Commercial exposure but not a strategy seat.',
 note:'ELIGIBILITY FLAG: Same flag as the Databricks PM req — graduating Fall 2027 or Spring 2028.\nNOTE: ESTIMATED. Same'},

{cat:'tech', track:'other', company:'Apple', title:'MBA Internship — Supply Chain / Operations Management, 2027',
 location:'Cupertino, CA · Austin, TX',
 deadline:'2027-02-28', status:'rolling', url:'https://jobs.apple.com/en-us/search?search=MBA%20supply%20chain&location=united-states-USA',
 why:'Apple’s MBA req explicitly welcomes master’s candidates in supply chain, engineering and operations management. Procurement, supply-chain planning and sourcing placements sit here.',
 note:'DEADLINE FLAG: One university listing for the Apple 2027 MBA req showed an expiry of 23 Oct 2026 — verify the req is still live before applying.\nNOTE: ESTIMATED.'},

/* ============================================================
   OTHER INDUSTRIES
   ============================================================ */
{cat:'other', track:'strategy', company:'Epic Games', title:'Product Management Intern (MBA) — Summer 2027',
 location:'Cary, NC',
 deadline:'2026-11-30', status:'rolling', url:'https://www.epicgames.com/site/careers?search=product%20management%20intern',
 why:'MBA-gated and explicitly asks for prior product, strategy, analytics or consulting experience — they are recruiting the consultant-to-PM profile directly. Also asks for hands-on AI/LLM tooling experience.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: A Harvard career-services listing gives a 30 Nov 2026 expiry (recruitment opened 30 Sep). Epic publishes no official deadline and fills roles "as soon as we find the best match", so treat 30 Nov as the outer limit, not a target.\nNOTE: EARLIER THAN I ESTIMATED.'},

{cat:'other', track:'strategy', company:'Epic Games', title:'Business and Marketing Strategy Intern (MBA) — Summer 2027',
 location:'Morrisville, NC',
 deadline:'2026-11-30', status:'rolling', url:'https://www.epicgames.com/site/careers?search=business%20marketing%20strategy',
 why:'Business strategy in the title, MBA enrollment in marketing/strategy/analytics required. Commercial strategy for Fortnite and the wider Epic ecosystem.',
 note:'VERIFIED: 5 Nov 2026\nDEADLINE FLAG: Same 30 Nov 2026 listing expiry as the PM req. Rolling, filled when matched — apply well before.'},

{cat:'other', track:'other', company:'Epic Games', title:'Player Marketing Intern (MBA) — Summer 2027',
 location:'Cary, NC',
 deadline:'2027-03-07', status:'confirmed', url:'https://www.epicgames.com/site/careers?search=player%20marketing',
 why:'Player-facing marketing for Fortnite and the Epic ecosystem. Marketing rather than strategy, but MBA-gated and with by far the longest runway of any Epic req.',
 note:'VERIFIED: 11 Nov 2026\nNOTE: FOUND TODAY — not previously on the board. The only Epic req with an explicit expiry date (7 Mar 2027); the two strategy reqs have none and are filled when matched.'},

{cat:'other', track:'strategy', company:'Universal', title:'NBCUniversal Summer 2027 Internship — strategy tracks',
 location:'New York · Universal City, CA (Los Angeles) · Orlando, FL',
 deadline:'2027-01-15', status:'notposted', url:'https://www.nbcunicareers.com/early-careers',
 why:'NBCU runs strategy and corporate development placements inside the summer programme. Universal City is LA and Universal Destinations sits in Orlando — two of your geography boxes.',
 note:'DEADLINE FLAG: NOT YET POSTED for US MBA. Virtual info sessions are the week of 9 Nov 2026 for the Jun–Aug 2027 programme — ATTEND ONE.\nELIGIBILITY: Eligibility reads "actively enrolled in a degree-granting program", which does include MBA confirm on the call.'},

{cat:'other', track:'strategy', company:'Expedia', title:'MBA Product Management Intern, Summer 2027',
 location:'Seattle, WA',
 deadline:'2027-01-15', status:'rolling', url:'https://expedia.wd108.myworkdayjobs.com/search?q=MBA%20Product%20Management',
 why:'Product strategy for a marketplace business — pricing, supply/demand balance and partner strategy. A strong adjacency if you want travel without the airline operating-company path.',
 note:'ELIGIBILITY FLAG: .\nELIGIBILITY: ESTIMATED — Summer 2027 reqs went live 12 Oct 2026 but require graduation Dec 2027–Jul 2028\nNOTE: The MBA PM req that surfaced was a London 2026 role. Programme runs 200–300 spots across 10+ tracks. Verify a US MBA req exists.'},

{cat:'other', track:'strategy', company:'American Airlines', title:'MBA Intern — Commercial Strategy / Financial Strategy, Summer 2027',
 location:'Fort Worth, TX',
 deadline:'2027-01-31', status:'notposted', url:'https://jobs.aa.com/go/MBA-Leadership/9297500/',
 why:'The Commercial Strategy track covers revenue management, network and sales-partnership strategy; Financial Strategy sits in FP&A with a corporate-strategy exit. Both are MBA-gated under the MBA Leadership pipeline.',
 note:'DEADLINE FLAG: NOT YET POSTED. Sources conflict on when the window opens — the campus page says May, a 2027-cycle guide says September with rolling review.\nNOTE: No postings were live as of mid-Oct 2026. Set an alert on the MBA Leadership page.'},

{cat:'other', track:'strategy', company:'Disney', title:'Corporate Strategy MBA Associate, Summer 2027',
 location:'Burbank, CA (Los Angeles) — occasionally New York',
 deadline:'2027-01-31', status:'notposted', url:'https://www.disneycareers.com/en/category/business-strategy-and-development-jobs/391/8221792/1',
 why:'Corporate Strategy & Business Development is a ~15-person team advising Disney’s executive leadership on strategic planning, joint ventures and acquisitions — arguably the highest-leverage corporate strategy internship in media. Burbank is LA.',
 note:'DEADLINE FLAG: NOT YET POSTED. Disney posts summer reqs Dec–Jan for a May/June start\nNOTE: A DTC Strategy MBA req ran in prior cycles. Set a Disney Careers alert on "Business Strategy and Development" now.'},

/* ---- OTHER — closed ---- */
{cat:'other', track:'strategy', company:'Delta', title:'MBA Intern — Commercial Strategy, Summer 2027',
 location:'Atlanta, GA (on-site required)',
 deadline:'2026-10-04', status:'closed', url:'https://delta.avature.net/careers/JobDetail?jobId=32042',
 why:'Strong strategy content: one strategic project across pricing & revenue management, network/route planning, global sales & distribution, loyalty or reservations. 12 weeks alongside the Finance MBA cohort. $9,493/month.',
 note:'ROUTE: Email the Delta campus recruiter about a late look.\nDEADLINE FLAG: CLOSED — posting ran 3 Sep and expired 4 Oct 2026.\nELIGIBILITY: Requires a first-year MBA finishing by summer 2027, graduating by summer 2028.\nNOTE: NOTE: one source says Delta MBA reqs are still live on its Avature site — worth one check.'},

{cat:'other', track:'strategy', company:'Delta', title:'MBA Intern — Financial Strategy, Summer 2027',
 location:'Atlanta, GA',
 deadline:'2026-10-04', status:'closed', url:'https://careers.delta.com/university',
 why:'Project-based role for rising second-years on revenue improvement and cost savings, with a stated path into corporate development and corporate strategy roles afterwards.',
 note:'ROUTE: Same recruiter outreach applies.\nDEADLINE FLAG: CLOSED alongside the Commercial Strategy req.'},

/* ---- OTHER — other MBA tracks (Consideration) ---- */
{cat:'other', track:'other', company:'Delta', title:'MBA Intern — Supply Chain Management, Summer 2027',
 location:'Atlanta, GA (on-site required)',
 deadline:'2026-10-04', status:'rolling', url:'https://careers.delta.com/university',
 why:'Supply chain and procurement for airline operations. Operations, but sourcing and logistics rather than operations strategy.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: APPEARS STILL OPEN — unlike its Network Scheduling sibling, which is marked expired, this is still listed as an open Summer 2027 posting with no close date. The lapsed 4 Oct estimate on this row was wrong.\nELIGIBILITY: First MBA year completed by summer 2027, concentration in finance, operations, supply chain or another analytical discipline, graduating by summer 2028. Placed within a Supply Chain commodity group.\nPAY: $9,493/month.'},

{cat:'other', track:'other', company:'Delta', title:'MBA Intern — Network Scheduling, Summer 2027',
 location:'Atlanta, GA (on-site required)',
 deadline:'2026-08-31', status:'closed', url:'https://careers.delta.com/university',
 why:'Route and schedule optimisation — quantitative network planning. Genuinely analytical and arguably closer to strategy than the supply-chain track.',
 note:'VERIFIED: 11 Nov 2026\nNOTE: RESOLVED — CLOSED. The listing is marked expired, with an application deadline of 31 Aug 2026, the earliest of Delta’s MBA reqs. One of the three lapsed estimates, now settled.'},

{cat:'other', track:'other', company:'Delta', title:'MBA Intern — Finance, Summer 2027',
 location:'Atlanta, GA (on-site required)',
 deadline:'2026-10-04', status:'rolling', url:'https://careers.delta.com/university',
 why:'Corporate finance and FP&A for the airline. $9,493/month like the other Delta MBA tracks.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: STILL UNRESOLVED after a second pass. Delta’s Avature site does not answer automated requests and no listing gives this req a status either way. Its siblings split both ways — Network Scheduling expired 31 Aug, Supply Chain still appears open — so neither outcome can be assumed. Check delta.avature.net directly.\nPAY: $9,493/month, as with the other Delta MBA tracks.'},

{cat:'other', track:'other', company:'GE Aerospace', title:'Summer 2027 Intern — HR / Financial Management Program (master’s eligible)',
 location:'Cincinnati, OH · Evendale, OH',
 deadline:'2027-01-31', status:'rolling', url:'https://careers.geaerospace.com/global/en/search-results?keywords=2027%20intern',
 why:'GE Aerospace has no MBA strategy or corporate development internship. The closest master’s-eligible reqs are HR (10–12 weeks, including acquisition integration) and the Financial Management Program (Commercial Finance, Supply Chain Finance, FP&A).',
 note:'ROUTE: If GE matters, email a recruiter about a strategy seat — it is not on the board.\nNOTE: ESTIMATED. ~48 US reqs titled 2027 live in early Oct. HR req requires a business or HR master’s and 3.0 GPA, Cincinnati-based, and can lead into the HR Leadership Program.'},

{cat:'other', track:'other', company:'Disney', title:'Accounting & Finance Rotation Program / other MBA tracks, Summer 2027',
 location:'Burbank, CA (Los Angeles) · Orlando, FL',
 deadline:'2027-01-31', status:'notposted', url:'https://www.disneycareers.com/en/search-jobs/MBA',
 why:'Disney’s finance rotation and other business tracks. LA-based, which fits your location preference, but finance rather than strategy.',
 note:'DEADLINE FLAG: NOT POSTED / PARTLY CLOSED. As of 1 Nov 2026 the Accounting & Finance Rotation Program had closed and no summer 2027 tech internship had posted. Disney posts summer reqs Dec–Jan — watch for the next wave.'},

/* ---- LUXURY / BEAUTY / RETAIL — programmes with real precedent, not yet open.
   Added 11 Nov 2026 so the openings surface here rather than being remembered.
   Every deadline below is a PLACEHOLDER: what is known is roughly when each
   programme OPENS, which each note states. ---- */
{cat:'other', track:'strategy', company:'Tapestry', title:'MBA Strategy & Consumer Insights Intern, Summer 2027',
 location:'New York, NY — Hudson Yards (hybrid)',
 deadline:'2027-01-31', status:'notposted', url:'https://careers.tapestry.com/search/',
 why:'The closest fit to your four target functions anywhere in luxury — an explicitly MBA-level strategy and consumer-insights internship at Coach/Kate Spade/Stuart Weitzman’s parent. Programme runs 1 Jun – 6 Aug 2027.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: NOT YET OPEN as of 11 Nov. Both the 2025 and 2026 cycles opened in LATE NOVEMBER with a MID-JANUARY deadline, so the window should open within weeks. The date on this row is a placeholder.\nROUTE: Applications include a HireVue video — one submitted without it is automatically rejected.\nROUTE: Watch careers.tapestry.com weekly from late November.\nPAY: Listings disagree — $30/hr on the careers page, $20/hr in one guide.'},

{cat:'other', track:'strategy', company:'Nordstrom', title:'Global Leader Program — MBA Internship, Summer 2027',
 location:'Seattle, WA — corporate headquarters',
 deadline:'2027-01-31', status:'notposted', url:'https://careers.nordstrom.com/',
 why:'MBA internship placing interns on projects across merchandising, finance, supply chain and strategy, with a path to full-time. Strategy is a named placement area, which is why this sits in the strategy track.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: NOT YET OPEN for Summer 2027 — date shown is a placeholder.\nELIGIBILITY: Minimum 3.0 cumulative GPA; details come from a third-party listing rather than Nordstrom directly, so confirm.'},

{cat:'other', track:'other', company:'Estée Lauder Companies', title:'CEO Global Presidential Program — Presidential Management Associate (MBA)',
 location:'New York, NY',
 deadline:'2027-01-31', status:'notposted', url:'https://www.elcompanies.com/en/careers/students',
 why:'The deepest MBA precedent of any luxury or beauty company — the programme has run for years and feeds a two-year rotational track. Tracks are marketing, finance and supply chain rather than strategy, which is why it sits in Consideration.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: Programme dates for Summer 2027 are already published as 7 Jun – 13 Aug 2027, but the requisition itself was not open as of 11 Nov. The date on this row is a placeholder.\nEXPERIENCE FLAG: Wants 5+ years of pre-MBA experience.\nNOTE: The careers page now folds this into a "Lauder Summer Internship" covering undergraduate and graduate levels, so confirm the MBA pathway still exists in its own right.'},

{cat:'other', track:'other', company:'LVMH', title:'LVMH North America Corporate Summer Internship Cohort, 2027',
 location:'New York, NY',
 deadline:'2027-01-15', status:'notposted', url:'https://www.lvmh.com/en/join-us/our-job-offers',
 why:'The LVMH programme most open to MBAs — its posting prefers "a current Master’s degree candidate (MBA or other analytical degree)". Functions span corporate affairs, data analytics, digital innovation, HR and learning & development.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: NOT YET OPEN as of 11 Nov. Revised: the North America corporate cohort is now expected ~EARLY DECEMBER with a window of only about 2.5 weeks, not 24 Nov as I first had it. Placeholder date.\nNOTE: Moët Hennessy USA’s separate summer programme HAS been open since 10 Sep 2026 (1 Jun – 6 Aug 2027) — that one is commercial/sales, not strategy.\nROUTE: Applications go through Handshake, not lvmh.com — check Handshake from late November.\nNOTE: Moët Hennessy USA runs a separate commercial summer programme, 1 Jun – 6 Aug 2027.'},

{cat:'other', track:'other', company:'PVH', title:'MBA Intern, Finance — Finance Leadership Development Program, Summer 2027',
 location:'New York, NY',
 deadline:'2026-12-31', status:'notposted', url:'https://careers.pvh.com/jobs',
 why:'Calvin Klein and Tommy Hilfiger’s parent. This internship is the EXCLUSIVE entry point to PVH’s three-year Finance Leadership Development Program — finance rather than strategy, but a genuine MBA programme with a defined path.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: Expected to open around NOVEMBER 2026 — possibly this month. Placeholder date.\nELIGIBILITY: Requires MBA graduation in 2027 per the last cycle’s posting; confirm the 2028 cohort is eligible before investing time.'},

{cat:'other', track:'other', company:'Tiffany & Co.', title:'Tiffany & Co. Summer 2027 Internship Program',
 location:'New York, NY',
 deadline:'2027-01-31', status:'notposted', url:'https://www.tiffany.com/careers/',
 why:'LVMH-owned, runs its own summer programme separate from the LVMH cohort. The 2026 edition ran 1 Jun – 7 Aug.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: Nothing was open as of 10 Nov 2026; the window is expected around DECEMBER 2026. Placeholder date.\nELIGIBILITY: A 2026 listing sought MBA candidates concentrating in supply chain, business analytics or retail management.'},

{cat:'other', track:'other', company:'Richemont', title:'Richemont Americas Summer Internship, 2027',
 location:'New York · Dallas · Shelton, CT',
 deadline:'2027-01-31', status:'notposted', url:'https://www.richemont.com/talent/students-graduates/early-career-programmes/',
 why:'Cartier, Van Cleef & Arpels and IWC’s parent. A bespoke 10-week Americas summer internship.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: Applications normally open in DECEMBER. Placeholder date.\nNOTE: The Richemont pages describing this look dated — confirm the current cycle before relying on the timing.'},

{cat:'other', track:'other', company:'Chanel', title:'Summer MBA Intern, 2027',
 location:'New York, NY · Piscataway, NJ',
 deadline:'2027-01-31', status:'notposted', url:'https://cc.wd3.myworkdayjobs.com/en-US/ChanelCareers',
 why:'Chanel runs a US summer programme and a "Summer MBA Intern" listing has appeared on LinkedIn.',
 note:'VERIFIED: 11 Nov 2026\nDEADLINE FLAG: Timing unknown — placeholder date.\nNOTE: UNCONFIRMED. The most recent Chanel US summer posting I could date (2024) targeted rising juniors and seniors, not MBAs. Treat the MBA route as unverified until you see the req.'},

{cat:'other', track:'other', company:'Universal', title:'NBCUniversal Summer 2027 — marketing, finance and content tracks',
 location:'New York · Universal City, CA (Los Angeles) · Orlando, FL',
 deadline:'2027-01-15', status:'notposted', url:'https://www.nbcunicareers.com/early-careers',
 why:'The broader NBCU summer programme spans marketing, finance, communications and content roles alongside the strategy placements.',
 note:'DEADLINE FLAG: NOT YET POSTED.\nELIGIBILITY: Same info sessions the week of 9 Nov 2026 cover all tracks — one call tells you which are MBA-eligible.'}
];
