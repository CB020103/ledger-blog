---
title: "Why REITs Don't Care About Cap Rate, and What They Watch Instead"
date: "2026-07-20"
summary: "A conversation with my MD about REIT metrics turned into a rabbit hole on FFO, NAV, and why a REIT's cost of capital decides whether it buys buildings or buys itself."
metrics: ["FFO = NI + D&A - Gains", "NAV Premium/Discount Drives Buybacks", "Public vs Private REIT Liquidity"]
---

A conversation with my MD this week started with something simple: she mentioned a low cap rate deal trading, and noted that REITs don't weigh cap rate the way a typical buyer does. I asked what they look at instead. Her answer was FFO, funds from operations, and it opened up a rabbit hole I want to walk through here, because the mechanics underneath it are genuinely elegant once they click.

## Why net income doesn't work for REITs

GAAP requires depreciating real estate every year, but real estate usually doesn't lose value the way GAAP assumes. It often appreciates. That means a REIT's net income looks artificially depressed by a non-cash charge that doesn't reflect economic reality. FFO fixes this by taking net income, adding back real estate depreciation and amortization, and backing out gains or losses from property sales, since those are one-time events rather than recurring operating performance. What's left is a much cleaner read on a REIT's actual cash-generating power, and analysts quote a price-to-FFO multiple the way they'd quote a P/E ratio for any other company.

## Why cap rate matters less to a REIT

Cap rate is really an entry-yield metric for someone underwriting a single deal with a defined hold and exit. A REIT is a permanent-capital vehicle, so a single asset's going-in yield matters less than the durability and growth of FFO per share across the whole portfolio over decades. That's the distinction my MD was pointing at.

## The sharpest part: NAV, stock price, and buybacks

NAV, net asset value, is what a REIT's real estate would be worth if you sold every property piece by piece at market cap rates. Stock price is what public markets actually pay for the whole company. When the stock trades below NAV, the market is refusing to pay full value for the real estate through the stock, and in that case the cheapest way for the REIT to acquire real estate is to buy back its own shares. Buying a dollar of underlying property value for eighty cents in the stock market beats paying a dollar for a similar property directly. When the stock trades above NAV, the trade flips: issue new equity, which is expensive real estate value to give up but cheap capital to raise, and go buy actual properties instead.

## Cost of capital ties it together

A REIT's cost of capital is a blend of its cost of debt and its cost of equity, and the cost of equity is a direct function of where the stock trades relative to NAV. Right now, with rates elevated and a lot of REITs trading at discounts to NAV, their blended cost of capital sits above the cap rates available on deals in the market. That makes external acquisitions dilutive rather than accretive, meaning FFO per share would actually fall after the deal, even though the company grew in absolute size. That is the real mechanism behind REITs pulling back from buying right now. It is not sentiment, it is math: they cannot buy property cheaper than the market is already pricing their own stock.

## Public vs. private REITs: same idea, different plumbing

Public REIT shareholders own an indirect but proportional claim on the actual portfolio, and REITs are required to distribute at least 90% of taxable income as dividends, so the pass-through to shareholders is direct. But public REIT stock prices are set daily by the market, which is exactly why they can drift meaningfully away from NAV.

Private REITs work differently. There is no daily market price, so the sponsor periodically appraises the portfolio, often monthly or quarterly, and sets NAV per share directly from that appraisal. That sounds cleaner, but it creates a liquidity problem instead. With no market to sell into, private REITs run redemption programs that cap how much investors can cash out in a given period. When a lot of investors want out at once, as happened industry-wide in 2022 and 2023, sponsors gate redemptions, meaning the stated NAV is real on paper but not immediately accessible.

The contrast is the cleanest way to hold both models in your head at once. Public REITs have close to perfect liquidity but noisy, sentiment-driven pricing. Private REITs have steadier, appraisal-based pricing but real liquidity risk when everyone wants out at the same time. Same asset class, same core FFO and NAV logic underneath, completely different plumbing on top.

## Sources

- [Nareit: Funds From Operations (FFO) Defined](https://www.reit.com/glossary/funds-operation-ffo)
- [Nareit: 2002 FFO White Paper](https://www.reit.com/sites/default/files/media/Portals/0/Files/Nareit/htdocs/policy/accounting/2002_FFO_White_Paper.pdf)
- [Wall Street Prep: FFO Formula and Calculator](https://www.wallstreetprep.com/knowledge/ffo-funds-from-operations/)
- [Blue Vault: Blackstone REIT Share Redemptions Story](https://bluevaultpartners.com/blackstone-reits-share-redemptions-story-far-from-over/)
- [Neuberger Berman: Non-Traded REIT Redemption Gates Explainer](https://www.nb.com/handlers/documents.ashx?id=8e4abae8-0b6e-4899-b3d3-3243c3a2da30)
