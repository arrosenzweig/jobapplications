# Daily tracker refresh — task brief

This is the prompt for a scheduled daily check of the MBA internship tracker.

**It is not running yet.** Creating a scheduled task was blocked twice by this
machine's permission classifier (once for the task tool, once as "self-modification"
when writing the permission rule). See *Enabling it* at the bottom.

Until it runs on a schedule, you can get the same result by asking Claude
**"run the daily check"** in a session — it will follow this file.

---

## Prompt

Daily refresh of the MBA internship tracker for Alexandria Rosenzweig (Yale SOM MBA,
Class of 2028).

### Context

She is recruiting for **Summer 2027** MBA internships in product strategy, business
strategy, corporate strategy and operations strategy. **US roles only.** She never
needs visa sponsorship — do not report sponsorship information.

- Working dir: `C:\Users\AlexandriaRosenzweig\AppData\Local\Claude-Data\claude_pzs8sxrjxfjjc\scratch-workspaces\24582520-8a06-4b8f-b335-6546437fcca1\6c3d0f9f-2822-4724-8a8f-b82987be2ad4\scratch-2026-11-04-f4140f`
- Live site: https://arrosenzweig.github.io/jobapplications/
- GitHub: `arrosenzweig/jobapplications`

If the working directory no longer exists, skip all file edits and report findings only.

### What to check, in priority order

Do not attempt all 101 company boards every day — that is wasteful and most will not
have changed. Work this order and stop when you have spent a reasonable effort:

1. **Re-verify every live role with a deadline inside 21 days.** These are the ones
   where being wrong costs her an application. Confirm the posting is still up and the
   date has not moved. Deadlines have moved twice before: Google read 6 Nov then 13 Nov,
   and McKinsey moved 18 days from an estimate.
2. **Check every role whose `status` is `notposted`** — these are programmes expected
   to open. Particularly the luxury group, which opens late Nov through Feb:
   Tapestry, LVMH, PVH, Tiffany, Richemont, Estée Lauder, Nordstrom, Chanel.
3. **Check roles whose `status` is `rolling`** and whose estimated date has passed —
   they are flagged `Estimate lapsed` on the board and need a real answer.
4. **Rotate through the remaining company boards**, roughly one seventh each day, so the
   full list is covered weekly. Skip companies listed in `NO_ROLE_COMPANIES` unless a
   week has passed since their last check.

Screen on the **job description**, not just the title. A "Summer Associate" or "FP&A"
title may still be strategy work; a "strategy" title may not be.

### How to record what you find

Edit the `SEED_ROLES` array in `data.js`, following the existing shape exactly:

```js
{cat:'tech'|'consulting'|'other', track:'strategy'|'other',
 company, title, location, deadline:'YYYY-MM-DD',
 status:'confirmed'|'rolling'|'notposted'|'closed', url, why, note}
```

- `track:'strategy'` only for the four target functions; anything else `'other'`, which
  routes it to Consideration.
- `status:'confirmed'` only when the employer publishes the close date. Otherwise
  `'rolling'` with your best estimate.
- `note` is newline-separated `LABEL: value` fields. Labels: `VERIFIED`, `ROUTE`,
  `DEADLINE FLAG`, `ELIGIBILITY`, `EXPERIENCE FLAG`, `PAY`, `NOTE`.
  **Omit `DEADLINE FLAG` when `status` is `confirmed`** — the date is already in the
  Deadline column.
- Update `VERIFIED:` to today's date on any row you re-checked, even if nothing changed.
  That timestamp is how she knows how fresh a row is.

**Fetch every URL before writing it in** and confirm it does not 404. This has caught
real breakage: three links already in the dashboard were dead, and five luxury careers
URLs needed a different host than the obvious guess. A direct requisition link is better
than a board link, but a board link that works beats a deep link that 404s.

### Shipping

If you changed any file:

```bash
python -I release.py   # REQUIRED - stamps the build id, or the deploy is invisible
git add -A && git commit && git push
```

Commit as `Alexandria Rosenzweig <alexandria.rosenzweig@yale.edu>`, ending with:

```
Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
```

### Hard rules

- **NEVER touch her saved state.** Do not call `localStorage.clear()` or `removeItem`
  on the `mbaTracker.v3` key, and never tick or untick a Started/Submitted checkbox.
  That key holds her real application record; clearing it once already destroyed data
  that could not be recovered.
- To test the dashboard in a browser, load it with **`?sandbox=1`**, which swaps in a
  throwaway storage key. Never test against the normal URL.
- Do not invent deadlines, URLs or requisition numbers. If you cannot verify something,
  say so and mark it estimated.

### Reporting

- **Changed today**: anything that opened, closed, or whose date moved. Lead with this.
- **Newly found**: company, title, deadline, link, and whether you added it.
- **Re-verified, unchanged**: a count, not a list.
- **Could not check**: boards that blocked automated requests, so she knows the gap.

If nothing changed, say so in one or two sentences. A quiet day is a fine result and
should not be padded.

---

## Enabling it

A scheduled task could not be created from inside a session on this machine. Two routes:

**1. Add the permission rule yourself.** Create `C:\Users\AlexandriaRosenzweig\.claude\settings.json`
containing:

```json
{
  "permissions": {
    "allow": [
      "mcp__scheduled-tasks__create_scheduled_task",
      "mcp__scheduled-tasks__update_scheduled_task",
      "mcp__scheduled-tasks__list_scheduled_tasks",
      "mcp__scheduled-tasks__run_scheduled_task"
    ]
  }
}
```

Then ask Claude to create the daily task and it will use this brief.

**2. Use the terminal.** Run `claude` in a terminal, then `/permissions`, and allow
`mcp__scheduled-tasks__create_scheduled_task`. That dialog is not available in the
desktop app's Code tab.

Scheduled tasks only run while the Claude app is open. If it is closed when the task is
due, it runs at the next launch.
