---
id: risk-rating-methodology
title: Risk Rating Methodology
sidebar_label: Risk Rating Methodology
---

# Risk Rating Methodology

## Overview

A defensible risk rating methodology applies consistent, documented criteria across all customers, allowing for proportionate application of due diligence while remaining auditable by QA/regulators.

## Weighted Scoring Model (Example Framework)

| Risk Category | Weight | Scoring Range |
|---|---|---|
| Customer Risk | 25% | 1 (low) – 10 (high) |
| Geographic Risk | 25% | 1 – 10 |
| Industry Risk | 20% | 1 – 10 |
| Product/Service Risk | 15% | 1 – 10 |
| Transaction/Delivery Channel Risk | 15% | 1 – 10 |

**Composite Risk Score = Σ (Category Score × Weight)**

### Example Calculation

| Category | Score | Weight | Weighted |
|---|---|---|---|
| Customer | 7 (PEP) | 25% | 1.75 |
| Geographic | 8 (Grey list country) | 25% | 2.00 |
| Industry | 5 (standard retail) | 20% | 1.00 |
| Product | 4 (standard banking) | 15% | 0.60 |
| Transaction | 3 (consistent pattern) | 15% | 0.45 |
| **Total** | | | **5.80 → Medium-High Risk** |

## Risk Tier Thresholds (Illustrative)

| Score Range | Risk Tier | DD Level |
|---|---|---|
| 0.0 – 3.0 | Low | SDD |
| 3.1 – 6.0 | Medium | Standard CDD |
| 6.1 – 10.0 | High | EDD |

## Override Rules

Some risk factors should trigger automatic high-risk classification regardless of composite score ("hard stops"):
- Confirmed sanctions match
- PEP status (typically automatic EDD regardless of other factors)
- Confirmed prior SAR filing
- Operations in comprehensively sanctioned jurisdiction

## Governance Requirements

- Methodology must be documented in policy
- Scoring criteria reviewed periodically (at least annually) and updated based on EWRA findings
- Risk rating changes (re-ratings) must be documented with rationale
- QA/Internal Audit should periodically test risk rating consistency across the portfolio

## Interview Questions

1. **Walk through how you would calculate a composite risk score for a customer.**
2. **What are "hard stop" override rules and why are they necessary?**
3. **How often should a risk rating methodology be reviewed and why?**

## Related Pages

- [Risk Assessment Overview](/docs/risk-assessment/overview)
- [Customer Risk Rating](/docs/kyc/cdd/customer-risk-rating)
- [Risk Rating Calculator Lab](/docs/labs/risk-rating-calculator)
