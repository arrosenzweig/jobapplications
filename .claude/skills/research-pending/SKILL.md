---
name: research-pending
description: Research roles Alexandria parked in the dashboard by pasting a URL, and write them into data.js as finished rows. Use when she says "research the pending roles", when a pending-roles.json turns up in Downloads, or when the scheduled intake task runs.
---

# Research the pending roles

She adds a role by pasting its link into the dashboard's **+ Add role** button. That parks a
stub in her browser under the company name `Pending research`, and the page drops the queue
into **`C:\Users\AlexandriaRosenzweig\Downloads\pending-roles.json`**. Your job is to turn each
parked link into a real row in `data.js`.

Her search, which decides every judgement below: Yale SOM MBA, **Class of 2028**, recruiting
**Summer 2027** internships in **product, business, corporate and operations strategy**.
**US roles only.** Preferred locations **Miami and Los Angeles**. She never needs visa
sponsorship — do not report sponsorship information.

## 1. Read the queue

Downloads may hold `pending-roles.json`, `pending-roles (1).json`, and so on. **Use the newest
by modification time**, and also read any older copies from the same day — a browser that
renamed the file did not merge it, so an older copy can hold a link the newest one lost.

```powershell
Get-ChildItem "$env:USERPROFILE\Downloads\pending-roles*.json" | Sort-Object LastWriteTime -Descending
```

Each entry has `url`, `added` (the stub's note, with the date she added it) and `key`.

**Skip any URL already in `data.js`** — compare on the URL, trailing slash and case ignored,
**and on the requisition number** (`JR2029639`, `?jobid=109572`, `/job/10163693/`). The same job
is served at several addresses: Workday gives a req with and without an `/en-US/` segment and
adds a `-1` when it republishes, so two different-looking links are often one role. Check both
ways before writing a row, or the board grows duplicates.

A **403 from a Workday posting does not mean the job is gone.** It means that URL is gone. When
NVIDIA republishes a req it changes the path, and the old one returns `permission denied` while
the job is still open — this cost a wrong "closed" on two live roles on 24 Nov 2026. Always
confirm by searching the board for the requisition NUMBER before closing anything.

## 2. Research each link

Fetch the posting itself. Do not fill a field from an aggregator, a careers-site mirror, or
your own memory of the company. The rules that govern the daily check apply here in full, so
read `DAILY-CHECK.md` before you start if you have not already.

What a finished row needs:

| field | rule |
|---|---|
| `company` | The employer, as they write it. |
| `title` | The posting's own title, trimmed of req numbers and boilerplate. |
| `location` | City and state. Note hybrid/on-site if the posting says. |
| `deadline` | `YYYY-MM-DD`. **Only from the employer.** No date is better than a guessed one. |
| `status` | `confirmed` if the employer published the date; `rolling` if the date is your estimate; `notposted` if the role is not open yet; `closed` if the window has passed. |
| `cat` | `tech`, `consulting` or `other` — this is the tab it lands in. |
| `track` | `strategy` if the role is in her target functions, otherwise `other`. |
| `why` | Two or three sentences on what the role actually is and why it does or does not fit her search. Be straight about a poor fit. |
| `note` | Newline-separated `LABEL: value` lines. |

Note labels, in the order they usually read: `VERIFIED` (always, with today's date and what you
read), `ROUTE`, `DEADLINE FLAG`, `ELIGIBILITY`, `EXPERIENCE FLAG`, `PAY`, `NOTE`. A
`DEADLINE FLAG` is dropped at render when `status` is `confirmed`, so put a confirmed date's
provenance in `VERIFIED` or `NOTE` instead.

**Screen on the description, not the title.** A "Product Management Intern" that requires a CS
degree, a "Strategy Intern" that is undergraduate-only, and a strategy role in France are all
rule-outs — and each of those has actually turned up on this board. When you rule one out, still
write the row, with `status` reflecting reality and the reason stated plainly in `note`. She
would rather see a role she cannot take, labelled, than have it vanish.

If the posting cannot be read but the employer is real — a JavaScript-only board, a login wall,
a page that renders nothing to a fetch — **write the row anyway** with whatever is certain, leave
`deadline` empty, and say in `note` exactly which URL failed and how. Never invent a date, a
requisition number or a URL to fill the gap.

**But do not create a row for a link that points at no employer at all.** If the host does not
resolve, or is a placeholder (`example.com`, `localhost`, an IP address, a `file://` path), or
the page is plainly not a job posting, skip it, leave the stub parked, and name the URL in your
report so she can fix or delete it. A junk row is worse than an empty queue: it has to be found
and removed by hand, and it makes every count on the board wrong until it is.

## 3. Write it in

Edit `data.js` with a small Python script in the scratchpad, in the style of the daily-check
scripts: match role blocks with `\{cat:'.*?'\},`, build the new block, and insert it after a
**unique** anchor substring of an existing block. Then:

```powershell
node --check data.js
```

on a copy before touching the real file, every time.

## 4. Ship it

```powershell
python -I release.py
```

**This is required.** GitHub Pages serves `index.html` with a ten-minute cache; without the
build stamp the deploy is invisible and she will reload onto the old page. Then commit as
`Alexandria Rosenzweig <alexandria.rosenzweig@yale.edu>`, ending the message with
`Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`, and push.

Her stub disappears from the board on the next reload, because the page hides a
`Pending research` row once a seed role carries the same URL. Nothing in her saved state is
deleted, and any note she wrote on the stub is carried onto the real row.

## 5. Never

- **Never touch her saved state.** No `localStorage.clear()`, no `removeItem` on
  `mbaTracker.v3`, and never tick or untick a Started/Submitted checkbox. That key holds her
  real application record; clearing it once already destroyed data that could not be recovered.
- Never test against the normal URL. Load the page with **`?sandbox=1`**, which swaps in a
  throwaway storage key.
- Never delete `pending-roles.json` from Downloads. It is hers, it is harmless, and a deleted
  queue cannot be re-read if your run goes wrong.

## 6. Report

Say what was added, what was ruled out and why, and name anything you could not verify. If the
queue was empty, say so in one line and stop — do not go looking for other work.
