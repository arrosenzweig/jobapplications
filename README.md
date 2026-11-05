# MBA Summer 2027 Internship Tracker

**Live dashboard → <https://arrosenzweig.github.io/jobapplications/>**

Interactive tracker for Summer 2027 MBA internships in **product, business, corporate and
operations strategy**, screened across 85 target companies on the job description — not just
the title. Built for a Yale SOM Class of 2028 search.

Seed research **4 November 2026**. Every dated role re-verified against live postings and
school career boards **5 November 2026** — those rows carry a note beginning `VERIFIED 5 Nov 2026`.

## Tabs

| Tab | What's in it |
|---|---|
| **Tech Roles** | Strategy / product reqs across the tech target list |
| **Consulting Roles** | MBA summer associate reqs across 30 consulting firms |
| **Other Industries** | Airlines, hospitality, media, gaming and industrials |
| **Consideration** | Other MBA internships at the same companies — finance, marketing, supply chain, sales, HR. **Add to my list** promotes one into its role tab; **Dismiss** hides it |
| **Archived** | Closed applications, moved here automatically. **Restore** brings one back |
| **Company Job Boards** | Every target company with a direct board link. Companies with no MBA internship at all are dimmed, with the reason |

Companies where no MBA internship of any kind exists no longer appear in the role tabs — only
on the Company Job Boards tab, so you keep the link without the clutter.

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

When editing `data.js`, bump the `?v=` on its `<script>` tag in `index.html` — otherwise
browsers serve a cached copy and the dashboard silently shows old deadlines.

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
