# MBA Summer 2027 Internship Tracker

**Live dashboard → <https://arrosenzweig.github.io/jobapplications/>**

Interactive tracker for Summer 2027 MBA internships in **product, business, corporate and
operations strategy**, screened across 85 target companies on the job description — not just
the title. Built for a Yale SOM Class of 2028 search.

Seed research **4 November 2026**. Every dated role re-verified against live postings and
school career boards **5 November 2026** — those rows carry a note beginning `VERIFIED 5 Nov 2026`.

## Tabs

| Tab | What it holds |
|---|---|
| **All Roles** | Every live role, all industries pooled, sorted by deadline. The default view |
| **Tech** / **Consulting** / **Other Industries** | The same roles split by industry |
| **Consideration** | Non-strategy MBA internships at the same companies. Excluded from All Roles until you press **Add to my list** |
| **Applied** | Roles you have submitted. Ticking **Submitted** moves a role here and out of its industry tab |
| **Archived** | Closed roles, auto-moved the day after a confirmed deadline passes |
| **Company Job Boards** | Every target company with a direct board link |

US roles only. A red banner lists anything closing **within 3 days**.

## It's fully editable in the browser

Nothing requires going back to the source files.

- **Started / Submitted** checkboxes on every row. Ticking Submitted auto-ticks Started.
- **Edit** on any row opens a form for every field — company, title, location, link, deadline,
  status, which tab it belongs to, strategy vs other track, the rationale, and a free-text
  **My notes** box for recruiter names, referrals and interview dates.
- **+ Add role** in the header for anything you find yourself. Added roles are tagged `mine`.
- **Archive** / **Restore** to move a role in and out of the Archived tab by hand.
- **Delete** to remove a role entirely.
- **Export backup** writes a JSON file; **Import** restores it — use this to move between
  browsers or devices, since state lives in `localStorage`.
- **Reset all** returns everything to the researched seed data.

## Deadline confidence

| Badge | Meaning |
|---|---|
| `Confirmed` | Close date published on the employer's own posting |
| `Estimated` | Rolling or undated; a projection from the prior cycle and the posting date |
| `Not posted` | Expected this cycle, req not live yet |
| `Closed` | Window passed → Archived tab |
| `Deadline passed` | A **confirmed** date lapsed — auto-moved to Archived, no action needed |
| `Estimate lapsed — verify` | An **estimated** date lapsed. Deliberately NOT auto-archived, because an estimate being wrong would otherwise hide a live role |

**Verify against the live posting before relying on any date.** School-specific deadlines —
McKinsey, Bain, BCG, Oliver Wyman — should be confirmed with the Yale SOM Career Development
Office. A red banner at the top lists everything closing within 14 days.

## Filters

Full-text search across every field including your own notes, plus filters for company,
deadline status, application progress, and Miami/LA locations only. Every column sorts.

## Files

```
index.html   dashboard UI and logic
data.js      seed company list and role database
README.md
```

### Deploying

Run `python release.py` before committing any change to `index.html` or `data.js`. It stamps a
build id into both `index.html` and `version.json`, and points the `data.js?v=` query at the
same id.

This matters because GitHub Pages serves `index.html` with `Cache-Control: max-age=600`, so a
browser can show a stale copy for ten minutes after a deploy. The page fetches `version.json`
with a cache-busting query on load and every five minutes; if the published build id differs
from the one compiled into the page, it shows a **Reload now** banner. Skipping `release.py`
means a deploy can land invisibly.

Browser edits layer on top of `data.js` in `localStorage` — editing the seed file is only
needed for a wholesale research refresh. Role entry shape:

```js
{cat:'tech'|'consulting'|'other', track:'strategy'|'other',
 company:'', title:'', location:'', deadline:'YYYY-MM-DD',
 status:'confirmed'|'rolling'|'notposted'|'closed',
 url:'', why:'', note:''}
```

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
