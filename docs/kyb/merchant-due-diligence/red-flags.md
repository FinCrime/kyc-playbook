---
id: red-flags
title: Merchant Risk Red Flags
sidebar_label: Red Flags
---

# Merchant Risk Red Flags

## Website/Business Red Flags

- Website is non-functional, under construction, or template-only with no real content
- Product descriptions are vague or generic ("various products," "quality goods")
- No verifiable contact information, or contact information doesn't match the registered business
- Pricing is unclear, hidden, or inconsistent with similar legitimate businesses
- Missing or generic Terms of Service/Privacy Policy (or copied verbatim from another company)
- Website domain registered very recently relative to claimed years in business
- Stock photos used for "our team" or "our facility" sections

## Entity/Ownership Red Flags

- UBO cannot be clearly identified
- Directors/UBOs have prior terminated merchant accounts (industry blacklist/MATCH list hits)
- Shell company characteristics (no employees, no verifiable premises)
- Registered in a jurisdiction inconsistent with claimed operational base with no explanation
- Recently incorporated entity immediately seeking high-risk/high-volume processing

## Processing Pattern Red Flags

- Sudden spike in transaction volume inconsistent with business growth trajectory
- High proportion of card-not-present transactions for a business type expecting in-person sales
- High average ticket size inconsistent with the product category
- Disproportionate transactions from high-risk countries
- Multiple merchant accounts with overlapping ownership/control ("merchant stacking")
- Velocity patterns suggesting card testing (many small transactions in rapid succession)

## Chargeback & Refund Red Flags

- Chargeback rate significantly above card scheme thresholds
- Chargeback reasons clustering around "product not received" or "not as described"
- Refund requests citing non-delivery or misrepresentation
- Customer complaints referencing different products than what the merchant claims to sell (classic transaction laundering indicator)
- Pattern of refunds issued just before chargeback deadlines (avoidance behavior)

## Transaction Laundering Indicators

- Statement descriptor doesn't match the actual website/product
- Customers report being charged by an unfamiliar business name for a purchase made elsewhere
- Multiple unrelated "storefronts" routing to the same underlying merchant account
- MCC doesn't match actual goods/services delivered

→ See [Transaction Laundering Typology](/docs/aml/typologies/transaction-laundering) for the complete picture.

## Red Flag Severity Matrix

| Red Flag Combination | Recommended Action |
|---|---|
| Single minor red flag (e.g., recently registered domain) | Request explanation; proceed with standard monitoring |
| Multiple moderate red flags | Escalate to enhanced merchant review |
| Any transaction laundering indicator | Immediate investigation; consider account freeze pending review |
| Confirmed prohibited business activity | Immediate termination; consider SAR and reporting to card schemes (MATCH list) |

## Interview Questions

1. **What website characteristics would make you suspicious of a merchant application?**
2. **What chargeback patterns suggest transaction laundering rather than ordinary customer dissatisfaction?**
3. **What is "merchant stacking" and why is it a red flag?**
4. **What is the MATCH list and when would you report a merchant to it?**

## Related Pages

- [MDD Overview](/docs/kyb/merchant-due-diligence/overview)
- [Investigation Process](/docs/kyb/merchant-due-diligence/investigation-process)
- [Transaction Laundering](/docs/aml/typologies/transaction-laundering)
- [Merchant Investigation Lab](/docs/labs/merchant-investigation)
