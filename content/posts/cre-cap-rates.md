---
title: "What changes when you move a DCF into CRE"
date: "2026-07-05"
summary: "The same five-step skeleton, but FCF becomes NOI and the exit multiple becomes a cap rate."
metrics: ["Cap Rate 5.5%", "NOI Yr5 $2.1M", "Hold 5yr"]
---

## Same skeleton, different vocabulary

A real estate DCF and a corporate DCF are built from the same bones. The
translation is mostly about which line items exist:

| Corporate DCF | CRE DCF |
|---|---|
| Revenue | Gross Potential Rent |
| EBITDA | Net Operating Income (NOI) |
| CapEx | Capital Improvements / TI-LC |
| EV/EBITDA exit multiple | Exit Cap Rate |
| WACC | Discount Rate (often just called "the discount rate") |

## Terminal value becomes reversion value

Instead of an exit multiple on EBITDA, CRE uses a cap rate on the final
year's NOI:

```
Reversion Value = Final Year NOI / Exit Cap Rate
```

Note the exit cap rate is usually set *higher* than the entry cap rate -
called "cap rate expansion" - a conservative assumption that the market
might be less favorable by the time you sell.

## What's genuinely different

- **Leverage matters earlier.** CRE deals are debt-heavy from day one, so
  levered vs. unlevered cash flow matters a lot more than in a typical
  corporate model.
- **Vacancy and re-leasing** show up explicitly as their own line items,
  something a corporate DCF rarely models directly.
- **The exit isn't optional**: almost every CRE model assumes a sale at a
  specific year, whereas a corporate DCF often treats the terminal value as
  a going-concern estimate, not a real transaction.

More on the entry cap rate vs. exit cap rate relationship next time - that's
where most of the sensitivity in a CRE deal actually lives.
