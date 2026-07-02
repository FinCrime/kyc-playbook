---
id: placement
title: Placement Stage
sidebar_label: Placement
description: Deep dive into the placement stage of money laundering — methods, red flags, and detection.
---

# Placement: The First Stage of Money Laundering

## What Is Placement?

**Placement** is the first and most vulnerable stage of the money laundering process. It involves introducing criminal proceeds — most often cash — into the formal financial system. This is the point where launderers face the greatest risk of detection because illicit funds are still physically separate from the legitimate financial system.

At this stage, the launderer must find a way to deposit, exchange, or otherwise inject cash into a bank, currency exchange, casino, or other financial institution without triggering scrutiny.

:::warning Why This Stage Is Critical
Placement is the most detectable stage. Effective AML controls — particularly Cash Transaction Reports (CTRs), Suspicious Activity Reports (SARs), and Know Your Customer procedures — are designed to intercept criminal proceeds at this exact moment.
:::

## Common Placement Methods

### 1. Structuring (Smurfing)

Structuring is the deliberate breaking up of large cash deposits into smaller amounts to stay below currency reporting thresholds. In the United States, cash transactions over $10,000 require a Currency Transaction Report (CTR). Structuring to avoid this threshold is itself a federal crime.

**Example:** A drug trafficker has $150,000 in cash. Instead of depositing it at once, they recruit "smurfs" — multiple individuals who each deposit $9,500 across different branches on the same day.

**Red flags:**
- Multiple deposits just below $10,000 (in USD jurisdictions)
- Deposits across multiple branches or accounts on the same day
- Round numbers slightly below reporting thresholds
- Use of multiple individuals to make deposits

### 2. Currency Exchanges

Foreign exchange bureaux and currency exchange services are attractive placement vehicles because they:
- Handle large volumes of cash legitimately
- May have weaker AML controls than banks
- Allow conversion of one currency to another, adding an additional layer

**Red flag:** Customer exchanges large amounts of small-denomination domestic currency for foreign currency or wire transfers with no plausible business reason.

### 3. Commingling (Cash-Intensive Businesses)

Criminal proceeds are mixed with revenue from legitimate cash-intensive businesses. Common vehicles include:
- Restaurants and bars
- Car washes
- Parking lots
- Nail salons
- Convenience stores
- Laundromats

The business inflates its reported revenues to include criminal proceeds as if they were legitimate sales.

**Red flag:** A restaurant reports sales volumes inconsistent with its size, location, or customer traffic. Revenue per table-turn or per employee is implausibly high.

### 4. Casino / Gaming

Cash is used to purchase casino chips, minimal gambling occurs, and the chips are cashed out and documented as "gambling winnings." Casinos are also used for deposits and withdrawals.

**Red flag:** Customer purchases large quantities of chips, barely plays, and immediately redeems for a casino check.

### 5. Real Estate (Cash Purchases)

All-cash real estate purchases allow physical injection of criminal proceeds into a high-value asset that appears legitimate. Common in jurisdictions with weak AML oversight of real estate.

**Red flag:** All-cash purchase of high-value property by a purchaser with no verifiable source of funds.

### 6. Loan-Back Schemes

The launderer deposits criminal proceeds into an offshore account and then "borrows" the money back from the offshore entity. The "loan" is legitimate on paper but is never repaid.

**Red flag:** Individual takes a large "loan" from an offshore or shell company, repayments are sporadic or non-existent.

### 7. Trade-Based Placement

Import/export transactions are used to move criminal proceeds across borders. The value of goods is over- or under-invoiced to allow transfer of value. See: [Trade-Based Money Laundering](/docs/aml/typologies/trade-based-ml)

## Regulatory Reporting Requirements (Placement Controls)

| Country | Cash Threshold | Report Type |
|---|---|---|
| United States | USD 10,000 | Currency Transaction Report (CTR) |
| United Kingdom | No fixed threshold (suspicious = SAR) | Suspicious Activity Report (SAR) |
| European Union | EUR 10,000 (varies by member state) | STR/SAR |
| India | INR 10 lakh (approx. USD 12,000) | CTR |
| Australia | AUD 10,000 | Threshold Transaction Report (TTR) |
| UAE | AED 55,000 | Cash Transaction Report |

## Detection Techniques for Analysts

### Transaction Pattern Analysis
When reviewing accounts or merchant activity, look for:

1. **Multiple transactions just below thresholds** — Run queries grouping transactions by day/week to identify structuring patterns
2. **High frequency of cash deposits** — Unusual for most non-retail business types
3. **Inconsistency with customer profile** — A salaried employee depositing large amounts of cash
4. **Multiple depositors to one account** — Classic smurfing signature

### Business Profiling
For business accounts:
- Compare reported revenues to industry benchmarks for similar-sized businesses
- Analyze revenue-per-employee or revenue-per-square-foot ratios
- Look for businesses in cash-intensive sectors with unusually high margins

## Red Flag Summary

| Red Flag | Indicator Type |
|---|---|
| Transactions just below reporting thresholds | Structuring |
| Sudden large cash deposits inconsistent with profile | Unusual activity |
| Multiple individuals depositing to same account | Smurfing |
| Cash-intensive business with implausibly high revenue | Commingling |
| Casino chips purchased with cash, immediately redeemed | Casino layering |
| Offshore "loan" with no repayments | Loan-back |
| All-cash real estate purchase, no SOF | Cash placement |
| Frequent currency exchange with no business rationale | FX placement |

## Case Study: Restaurant Commingling

**Scenario:** A small restaurant in a mid-tier city reports annual revenues of $4.2 million. A peer analysis of similar restaurants in the same area shows average revenues of $1.1 million. The restaurant has 12 tables, operates 6 days a week, and is rarely seen with full occupancy.

**Analysis:** Revenue per table-turn implied by reported revenues is $150 — far above local industry norms of $55-65. The discrepancy of approximately $3.1 million annually has no plausible legitimate explanation.

**Red Flags Identified:**
- Revenue implausibly above peer benchmarks
- Cash-heavy business with minimal card transactions
- Owner unable to explain high revenue to account manager
- No clear peak periods or catering events to account for volumes

**Outcome:** SAR filed referencing potential commingling of criminal proceeds through restaurant operations.

## Interview Questions

1. **What is structuring, and why is it itself a crime?**
   *Answer: Structuring is deliberately breaking up transactions to avoid reporting thresholds. It is a standalone offense under the BSA (31 U.S.C. § 5324) because the intent to evade reporting is itself illegal, even if the underlying funds are from a legitimate source.*

2. **How would you identify commingling in a cash-intensive business?**
   *Answer: Compare reported revenues to industry benchmarks (revenue per table, per square foot, per employee). Unusual margins, high cash proportions, and inconsistencies with observable business activity are key indicators.*

3. **What is the difference between a CTR and a SAR?**
   *Answer: A CTR (Currency Transaction Report) is mandatory and filed automatically for cash transactions over the threshold (e.g., $10,000 in the US). A SAR (Suspicious Activity Report) is discretionary and filed when a financial institution suspects criminal activity — there is no minimum transaction amount.*

## Related Pages

- [Layering Stage](/docs/aml/money-laundering/layering)
- [Integration Stage](/docs/aml/money-laundering/integration)
- [Smurfing Typology](/docs/aml/typologies/smurfing)
- [Trade-Based ML](/docs/aml/typologies/trade-based-ml)
- [SAR Filing](/docs/sar/overview)
