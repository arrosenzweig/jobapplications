# MBA Summer 2027 Internship Tracker

An interactive dashboard of Summer 2027 MBA internships in **product strategy, business strategy,
corporate strategy and operations strategy**, screened across 85 target companies.

Built for a Yale SOM Class of 2028 search. Research snapshot: **4 November 2026**.

## Open it

Open `index.html` in any browser — no build step, no dependencies.

For the cleanest result (and because `data.js` loads as a separate file), serve the folder locally:

```bash
python -m http.server 8777
```

Then visit <http://localhost:8777>.

## Tabs

| Tab | What's in it |
|---|---|
| **Tech Roles** | MBA strategy / product reqs across 42 tech companies |
| **Consulting Roles** | MBA summer associate reqs across 30 consulting firms |
| **Other Industries** | Airlines, hospitality, media, robotics and industrials |
| **Company Job Boards** | Every target company with a direct link to its student / early-careers board |

## Columns

- **Started** / **Submitted** — checkboxes tracking your application progress. State is saved to
  `localStorage` in the browser you use, and "Submitted" automatically marks "Started".
- **Deadline** — sorted nearest-first by default, with days remaining.
- **Company**, **Job Title & Why It Fits**, **Location**, **Apply**.

Each role carries a short rationale explaining why the *job description* — not just the title —
matches the target functions, plus a note on eligibility, pay and verification caveats.

## Deadline confidence

| Badge | Meaning |
|---|---|
| `Confirmed` | Close date published on the employer's own posting |
| `Estimated` | Rolling or undated; date is a projection from the prior cycle and posting date |
| `Not posted` | Role expected this cycle but the req isn't live yet |
| `Closed` | Window has passed — kept visible so you can watch for a re-post |
| `No role` | Board searched, no MBA strategy seat exists |

**Always verify against the live posting before relying on a date.** Estimated dates are an
"apply by" target, not a cliff. School-specific deadlines (notably McKinsey, Bain, BCG and
Oliver Wyman) should be confirmed with the Yale SOM Career Development Office.

## Filters

Search across every field, filter by company, deadline status, application progress, Miami/LA
locations only, hide closed roles, and hide companies with no MBA role. Every column sorts.

## Adding companies

The **Company Job Boards** tab has an add form. New companies are stored in `localStorage` and
appear under the category you choose.

## Files

```
index.html   dashboard UI and logic
data.js      company list and role database — edit this to refresh
README.md
```

To refresh the data, edit the `ROLES` array in `data.js`. Each entry takes:

```js
{cat:'tech'|'consulting'|'other', company:'', title:'', location:'',
 deadline:'YYYY-MM-DD', status:'confirmed'|'rolling'|'notposted'|'closed'|'none',
 url:'', why:'', note:''}
```

---

🤖 Generated with [Claude Code](https://claude.com/claude-code)
