---
id: merchant-fraud
title: Case Study — Merchant Fraud Investigation
sidebar_label: Merchant Fraud
---

# Case Study: Merchant Fraud Investigation

## Scenario

"GlobalTech Gadgets Ltd" onboards with a payment gateway, declaring it sells consumer electronics through an e-commerce website. The merchant is registered in the UK, with a director who is a UK national.

Three months into processing, the gateway's monitoring system flags:
- Chargeback rate of 4.2% (industry benchmark for electronics retail: ~0.3%)
- 60% of chargebacks cite "product not received"
- Statement descriptor shows "GTG SERVICES LTD" — different from the registered merchant name and website branding ("GlobalTech Gadgets")
- Customer complaints (via chargeback documentation) reference purchasing supplements/nutraceuticals, not electronics
- Transaction volume grew 340% month-over-month in month 2, far exceeding the business plan submitted at onboarding

## Investigation Steps

### 1. Website Verification
Live review of the merchant's website shows it still displays consumer electronics, functions normally, and matches the original application.

### 2. Descriptor Investigation
The statement descriptor "GTG SERVICES LTD" does not match any registered business name associated with the merchant. Research reveals "GTG Services Ltd" is a separate UK-registered entity with different directors.

### 3. Customer Complaint Pattern Analysis
Reviewing chargeback documentation in detail: customers consistently describe purchasing weight-loss supplements from an unfamiliar website, not electronics — and recognize the charge only by the descriptor "GTG SERVICES."

### 4. Beneficial Ownership Cross-Check
Investigation into "GTG Services Ltd" reveals one of its directors shares a registered address with a director of "GlobalTech Gadgets Ltd" — suggesting a connection between the two entities.

## Conclusion

This is a classic **transaction laundering** pattern: GlobalTech Gadgets Ltd (the legitimate, vetted front merchant) is being used to process payments for an undisclosed, unvetted merchant (GTG Services Ltd, selling nutraceuticals — a restricted category requiring separate approval) through a shared payment processing relationship.

**Findings:**
- Confirmed transaction laundering via undisclosed sub-merchant routing
- Restricted product category (nutraceuticals) processed without required approval
- Beneficial ownership connection between the two entities not disclosed at onboarding

**Action Taken:**
- Immediate suspension of merchant account pending investigation
- Reserve held against the account to cover anticipated chargebacks
- SAR filed referencing transaction laundering typology
- Merchant relationship terminated
- Consideration of MATCH list reporting to card schemes given confirmed prohibited activity facilitation

## Key Takeaways

1. **Descriptor mismatches are a primary transaction laundering indicator** — always investigate when the billing descriptor doesn't match the registered/visible merchant
2. **Chargeback reason analysis reveals the true nature of disputes** — "product not received" combined with customers describing different products is a strong signal
3. **Shared addresses/directors between entities can reveal undisclosed relationships** — basic OSINT/registry cross-referencing is powerful

## Related Pages

- [Transaction Laundering](/docs/aml/typologies/transaction-laundering)
- [Merchant Red Flags](/docs/kyb/merchant-due-diligence/red-flags)
- [Merchant Investigation Lab](/docs/labs/merchant-investigation)
