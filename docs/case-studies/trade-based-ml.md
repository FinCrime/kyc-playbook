---
id: trade-based-ml
title: Case Study — Trade-Based Money Laundering
sidebar_label: Trade-Based ML
---

# Case Study: Trade-Based Money Laundering

## Scenario

A trade finance desk reviews a letter of credit transaction: Company A (importer, Country X) is importing "industrial machinery parts" valued at $2.8 million from Company B (exporter, Country Y). 

Red flags identified during routine trade document review:
- Market research suggests comparable machinery parts shipments of similar volume/specification typically value at $1.1–$1.4 million
- The bill of lading describes the shipment generically as "machinery parts" without HS code-level specificity typically expected for high-value industrial imports
- Company A has no prior import history in this product category
- Company B (exporter) was incorporated only 8 months before this transaction
- Payment terms require 100% advance payment — unusual for an established trade relationship of this value

## Investigation Steps

### 1. Price Benchmarking
Cross-reference using trade statistics databases confirms the invoiced price is approximately double the market rate for comparable goods based on description and weight/volume data provided in shipping documents.

### 2. Counterparty Verification
- Company A: Established entity with 12-year operating history, but no prior history in machinery imports (primarily a textiles trading company)
- Company B: Newly incorporated, minimal verifiable business history, registered address shared with several other recently incorporated entities

### 3. Ownership Cross-Check
OSINT research reveals a director of Company B shares a surname and likely familial connection with a senior executive of Company A — though this requires further confirmation and is not independently conclusive.

### 4. Payment Structure Analysis
100% advance payment for a first-time transaction with a newly incorporated counterparty is inconsistent with standard trade finance risk practices (where some form of payment security/staged payment would be expected).

## Conclusion

The pattern is consistent with **over-invoicing-based TBML**: the inflated invoice value allows transfer of approximately $1.4–$1.7 million in excess value from Country X to Country Y, disguised as a legitimate trade transaction. The apparent familial connection between the companies, combined with Company B's lack of operating history and the unusual advance payment terms, substantially increases suspicion beyond price discrepancy alone.

**Action Taken:**
- Transaction placed on hold pending further documentation
- Additional documentation requested: end-use certificates, prior business correspondence, evidence of goods' fair market value
- Escalated to trade-based AML specialist team
- SAR filed referencing suspected TBML via over-invoicing

## Key Takeaways

1. **Price benchmarking against trade statistics is essential** for detecting TBML — without external reference data, mis-invoicing is invisible
2. **New entity + unusual payment terms + price anomaly** is a classic TBML combination
3. **Apparent connections between counterparties** (even unconfirmed) should be investigated, as TBML often involves related-party transactions disguised as arm's-length trade

## Related Pages

- [Trade-Based ML Typology](/docs/aml/typologies/trade-based-ml)
- [Layering Stage](/docs/aml/money-laundering/layering)
- [Risk Assessment](/docs/risk-assessment/overview)
