---
title: "Building my first DCF from scratch"
date: "2026-07-06"
summary: "Working through free cash flow, WACC, and the two terminal value methods — and where my model's enterprise value formula broke."
metrics: ["WACC 8.49%", "EV/EBITDA 7.0x", "g = 1.7%"]
---

## The five-step skeleton

Every DCF, no matter how dressed up, comes down to the same sequence:

1. Build unlevered free cash flow for each projected year
2. Discount each year's FCF back to today using WACC
3. Estimate a terminal value for everything beyond the projection window
4. Add it all up to get Enterprise Value
5. Bridge from Enterprise Value to an actual share price

## Free cash flow, the indirect way

Start from EBIAT (EBIT after tax, sometimes called NOPAT), then undo the
non-cash accounting to get back to real cash:

```
EBIT
– Tax
+ D&A
– CapEx
– Increase in Net Working Capital
= Free Cash Flow
```

D&A gets added back because it's a non-cash expense. CapEx and the working
capital build get subtracted because they're real cash going out the door
that the income statement doesn't show.

## WACC — the discount rate

```
WACC = (E/V × Cost of Equity) + (D/V × Cost of Debt × (1 – Tax Rate))
```

The tax adjustment only applies to the debt side — interest is
tax-deductible, equity returns aren't. Cost of equity itself usually comes
from CAPM: risk-free rate + beta × equity risk premium.

## Terminal value: two methods, two philosophies

**Perpetuity growth** assumes the business grows at a steady rate forever:

```
TV = FCF(final year) × (1 + g) / (WACC – g)
```

**Exit multiple** assumes someone buys the business at a market multiple in
the future:

```
TV = Final Year EBITDA × EV/EBITDA multiple
```

They rarely agree exactly, and that's fine — the useful exercise is checking
*why* they diverge. A big gap usually means the growth rate baked into your
multiple doesn't match the growth rate you assumed in the perpetuity method.

## Where I actually got tripped up

My Enterprise Value cell was showing a number bigger than PV of FCF + PV of
Terminal Value — which shouldn't be possible, since that sum *is* the
definition of EV. Turned out to be a stale cell reference pulling in an
extra line. Lesson: after building the PV rows, always sanity-check that
EV = SUM(PV of FCF) + PV(TV), nothing more, nothing less.

Next up: mapping this same structure onto a CRE deal, where FCF becomes NOI
and the exit multiple becomes a cap rate.
