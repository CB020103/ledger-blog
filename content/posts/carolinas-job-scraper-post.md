---
title: "Building a Job Announcement Tracker (and Everything That Broke)"
date: "2026-07-07"
summary: "A fun side project: a script that scrapes NC/SC economic development news, filters for 50+ job announcements, and emails me a spreadsheet every morning."
metrics: ["Min Jobs: 50", "Sources: 3", "Runs: Daily"]
---

Wanted to build something actually useful instead of just another
practice model, so I made a small tool that tracks economic development
announcements, new jobs, capital investment, company, location - across
North Carolina and South Carolina. Filtered to anything creating 50+
jobs, since that's roughly the threshold where a project actually moves
the needle for local CRE demand.

## What it actually does

A Python script checks a few news sources (state press releases, site
selection trade publications), looks for paragraphs mentioning both a
job count and a dollar figure, and drops anything that clears the
50-job bar into a spreadsheet - company, market, jobs created,
investment, industry, and a link back to the source.

Then it's scheduled to run automatically: scrape in the evening, email
me the updated spreadsheet every morning. Fully hands-off, in theory.

## Where it actually went sideways

"In theory" is doing a lot of work in that sentence. Getting this
running end to end meant fighting through basically every classic
first-real-project problem:

- Installing Python, Git, and Node on a locked-down work laptop with no
  admin rights, ended up using portable/embeddable versions for all
  three to route around it
- A file named with a stray space and `(1)` in it that silently broke
  a deployment
- Git branches diverging and needing an actual merge, vim included
- OneDrive quietly redirecting my Downloads folder, so I had two
  identical-looking project folders and no idea which one was real

None of that is really about the scraper - it's just what "getting a
real tool actually running" looks like once you leave the tutorial and
hit an actual messy computer.

## The bug that mattered most

The one actually worth remembering: my first version of the script
just added new rows to the bottom of the sheet. Which was fine, until
I realized the bottom of the sheet was the TOTAL row, so new
announcements were quietly landing *below* my totals instead of being
counted in them. An easy mistake, and a good reminder to always check
that a running total is actually still summing the range you think it
is, especially once new data starts getting appended automatically.

The other good bug: the script once pulled "1,500 jobs" and "$10
billion" as a single announcement, when the source text was actually
describing an entire city's biotech industry over several years, not
one company. That's exactly why I built in a Confidence flag instead
of trusting every auto-extracted row blindly - anything ambiguous gets
marked REVIEW instead of silently treated as real data.

## Why this is worth doing over just reading the news manually

Realistically, I could just check these sources by hand. But the point
isn't saving five minutes a day - it's that this is now a running,
dated, sourced dataset instead of something I half-remember skimming
once. If I want to know six months from now whether Novartis's project
in Wake County actually created as many jobs as announced, there's a
row for it with a link to check.

Small tool, but a genuinely good practice rep in scraping, automation,
and the annoying-but-useful discipline of not trusting your own script's
output without a way to double-check it.
