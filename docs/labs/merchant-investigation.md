---
id: merchant-investigation
title: Lab — Merchant Investigation
sidebar_label: Merchant Investigation
---

# Lab: Merchant Investigation

## Scenario

**Merchant:** "QuickShip Essentials Ltd"
**Registration:** UK Companies House
**Stated Business:** Online retail — household essentials and cleaning products
**MCC Applied For:** 5999 — Miscellaneous Retail Stores
**Monthly Volume Projected:** £85,000
**Average Ticket Size:** £32

You are a Merchant Risk Analyst at a payment gateway. The onboarding team has flagged this merchant for your review before approval.

---

## Evidence Provided

### 1. Company Registration
- Incorporated: 6 weeks ago
- Director: Mr. Amir Hosseini (DOB: 12/03/1987, Iranian national, UK resident)
- Registered address: 47 business incorporations share this address (a known formation agent address in London)

### 2. Website Review
- URL: quickshipessentials.co.uk (domain registered 8 weeks ago)
- Site appears functional with product listings for cleaning sprays, detergents, and "wellness supplements"
- No visible pricing on the supplements section — only a WhatsApp contact number
- Terms & Conditions page is blank. Refund policy says "all sales final"
- SSL certificate valid; Wayback Machine shows no prior version of the site

### 3. Processing History
- No prior processing history; first-time merchant

### 4. Director Screening
- Amir Hosseini: No sanctions hit. No PEP match. One adverse media result: named as a co-defendant in a civil fraud claim (2021, dismissed without finding against him specifically)

### 5. Application Details
- Bank account for settlement: Metro Bank, account opened 3 weeks ago
- Customer support email: quickshipessentials@gmail.com (not a domain email)
- No physical business address listed beyond the formation agent address

---

## Your Objectives

1. Identify all red flags in this merchant application
2. Determine what additional information you would request
3. Assess the overall risk level (Low / Medium / High / Decline)
4. Write a brief investigation summary with your recommendation

---

## Hints

<details>
<summary>💡 Hint 1 — Where to start</summary>

Start with entity verification (Companies House), then move to website review, then director screening. Work systematically through each evidence category before forming an overall view.

</details>

<details>
<summary>💡 Hint 2 — Red flags count</summary>

There are at least 9 identifiable red flags across the evidence. If you've found fewer than 6, re-read the evidence more carefully.

</details>

<details>
<summary>💡 Hint 3 — The supplements section</summary>

The wellness supplements listed without pricing and accessible only via WhatsApp are a significant concern — consider what this might indicate about the actual products being sold.

</details>

---

## Model Solution

<details>
<summary>✅ Reveal Full Model Solution</summary>

### Red Flags Identified

| # | Red Flag | Category |
|---|---|---|
| 1 | Company incorporated only 6 weeks ago — newly formed entity seeking immediate payment processing | Entity risk |
| 2 | Registered address shared with 47 other companies — mass incorporation agent address | Entity risk |
| 3 | Domain registered 8 weeks ago — no operational history predating the application | Website risk |
| 4 | Wellness supplements listed with no pricing, WhatsApp-only contact — suggests undisclosed/potentially prohibited product | Product risk |
| 5 | Terms & Conditions page blank — not compliant with card scheme requirements | Policy risk |
| 6 | "All sales final" refund policy — unusual for consumer goods, potential chargeback risk | Processing risk |
| 7 | Settlement bank account opened only 3 weeks ago — newly opened, no history | Banking risk |
| 8 | Gmail address for customer support — not a domain email, unprofessional indicator | Legitimacy risk |
| 9 | Civil fraud claim co-defendant history on director (even though dismissed) | Adverse media |

### Additional Information Required

- Clarification on the "wellness supplements" — what specifically are these products? Do they require licensing (e.g., medicinal claims)?
- Proof of business premises (beyond formation agent address)
- Evidence of existing business operations (supplier invoices, prior sales records)
- Explanation of why a new bank account was opened 3 weeks ago
- Complete, compliant Terms & Conditions and Refund Policy
- Director's explanation of the 2021 civil fraud claim context

### Risk Assessment

**Overall Risk: HIGH — Recommend Decline (pending further information)**

**Rationale:** The combination of a newly incorporated entity, mass-agent registered address, newly opened bank account, non-transparent product listing (supplements with no pricing), blank legal pages, and a director with adverse media history — even if individually explainable — collectively presents an unacceptably high risk profile for standard merchant onboarding. The supplements section specifically raises concern about potential prohibited or restricted product sales that were not disclosed in the application.

**Recommendation:** Decline unless the merchant can provide within 5 business days: (1) complete product inventory with clear identification of all supplement products and any applicable licenses, (2) fully compliant Terms & Conditions and Refund Policy, (3) evidence of genuine business operations, and (4) explanation of all flagged concerns. If supplements are found to be medicinal/prescription products without appropriate licensing, recommend outright decline with no opportunity to remediate.

</details>

---

## Key Learning Points

1. **Newly formed entity + newly opened bank account = a classic "clean slate" risk pattern** requiring heightened scrutiny
2. **Hidden or vague product sections** often signal undisclosed restricted or prohibited goods
3. **Director adverse media doesn't automatically disqualify** — context and outcome matter, but it must be considered in the overall risk picture
4. **Policy page completeness** is both a red flag indicator and a card scheme compliance requirement

## Related Pages

- [MDD Overview](/docs/kyb/merchant-due-diligence/overview)
- [Merchant Red Flags](/docs/kyb/merchant-due-diligence/red-flags)
- [Transaction Laundering](/docs/aml/typologies/transaction-laundering)
- [Case Study: Merchant Fraud](/docs/case-studies/merchant-fraud)
