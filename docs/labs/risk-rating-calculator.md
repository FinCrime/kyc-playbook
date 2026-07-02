---
id: risk-rating-calculator
title: Lab — Risk Rating Calculator
sidebar_label: Risk Rating Calculator
---

# Lab: Risk Rating Calculator

## Overview

This lab walks through applying a weighted risk scoring model to three different customer profiles. Work through each calculation before checking the model answers.

---

## Scoring Framework

| Risk Category | Weight |
|---|---|
| Customer Risk | 25% |
| Geographic Risk | 25% |
| Industry/Business Risk | 20% |
| Product/Service Risk | 15% |
| Delivery Channel Risk | 15% |

**Score 1–10 per category (1 = lowest risk, 10 = highest risk)**

**Composite thresholds:**
- **0.0–3.0** → Low Risk (SDD)
- **3.1–6.0** → Medium Risk (CDD)
- **6.1–10.0** → High Risk (EDD)

---

## Customer Profile 1

**Customer:** A publicly listed UK retail bank, seeking a correspondent banking relationship.

| Category | Your Score | Notes |
|---|---|---|
| Customer Risk | ? | Regulated financial institution |
| Geographic Risk | ? | UK — low-risk jurisdiction |
| Industry Risk | ? | Banking — regulated |
| Product Risk | ? | Correspondent banking |
| Delivery Channel | ? | Standard institutional |

<details>
<summary>✅ Model Answer — Profile 1</summary>

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Customer Risk | 2 | 25% | 0.50 |
| Geographic Risk | 1 | 25% | 0.25 |
| Industry Risk | 2 | 20% | 0.40 |
| Product Risk | 7 | 15% | 1.05 |
| Delivery Channel | 3 | 15% | 0.45 |
| **Total** | | | **2.65 → Low Risk** |

**Key driver:** Correspondent banking is an inherently higher-risk product (indirect exposure to underlying customer base of the respondent) — rated 7. But the customer type (regulated, listed UK bank) and geography (UK, low-risk) keep the composite in Low Risk territory. SDD applicable, though ongoing correspondent monitoring is still required.

</details>

---

## Customer Profile 2

**Customer:** An individual money service business (MSB) operator, Nigerian national resident in the UK, offering informal remittance services.

| Category | Your Score | Notes |
|---|---|---|
| Customer Risk | ? | |
| Geographic Risk | ? | |
| Industry Risk | ? | |
| Product Risk | ? | |
| Delivery Channel | ? | |

<details>
<summary>✅ Model Answer — Profile 2</summary>

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Customer Risk | 6 | 25% | 1.50 |
| Geographic Risk | 6 | 25% | 1.50 |
| Industry Risk | 8 | 20% | 1.60 |
| Product Risk | 7 | 15% | 1.05 |
| Delivery Channel | 5 | 15% | 0.75 |
| **Total** | | | **6.40 → High Risk (EDD)** |

**Key drivers:** MSB industry (high cash intensity, potential unregulated sub-agents = 8); remittance products with cross-border reach (7); Nigeria geographic risk (6); individual operator with less institutional oversight than a corporate MSB (6). EDD required.

</details>

---

## Customer Profile 3

**Customer:** A large UK supermarket chain (publicly listed, FTSE 100), seeking a straightforward GBP current account for payroll.

| Category | Your Score | Notes |
|---|---|---|
| Customer Risk | ? | |
| Geographic Risk | ? | |
| Industry Risk | ? | |
| Product Risk | ? | |
| Delivery Channel | ? | |

<details>
<summary>✅ Model Answer — Profile 3</summary>

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Customer Risk | 1 | 25% | 0.25 |
| Geographic Risk | 1 | 25% | 0.25 |
| Industry Risk | 2 | 20% | 0.40 |
| Product Risk | 1 | 15% | 0.15 |
| Delivery Channel | 1 | 15% | 0.15 |
| **Total** | | | **1.20 → Low Risk (SDD)** |

**Note:** Large listed retail companies with disclosure obligations, in low-risk jurisdictions, using simple domestic payroll accounts are among the lowest-risk customers in any portfolio. SDD applicable.

</details>

---

## Key Learning Points

1. **Product risk can significantly elevate composite risk** even when all other factors are low (see Profile 1 — correspondent banking)
2. **Industry risk compounds with geographic risk** — an MSB in Nigeria is higher risk than an MSB in Switzerland
3. **Hard stops override composite scores** — if a customer is a confirmed PEP or has a true sanctions match, they are EDD/blocked regardless of composite score

## Related Pages

- [Risk Rating Methodology](/docs/risk-assessment/risk-rating-methodology)
- [Customer Risk Rating](/docs/kyc/cdd/customer-risk-rating)
- [Risk Assessment Overview](/docs/risk-assessment/overview)
