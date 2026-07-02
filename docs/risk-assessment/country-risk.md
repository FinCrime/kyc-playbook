---
id: country-risk
title: Country / Geographic Risk
sidebar_label: Country Risk
---

# Country / Geographic Risk

## Overview

Geographic risk assesses the ML/TF risk associated with a customer's nationality, residence, place of business, and the jurisdictions involved in their transactions.

## Key Geographic Risk Indicators

### FATF Lists
- **FATF High-Risk Jurisdictions ("Black List")** — Countries with the most severe AML/CFT deficiencies, subject to a call for action
- **FATF Increased Monitoring ("Grey List")** — Countries actively working with FATF to address deficiencies

:::tip Always Verify Current Lists
FATF lists are updated periodically (typically 3x per year). Analysts should always check the current FATF list rather than relying on memory, as country status changes.
:::

### Other Country Risk Indices
- **Basel AML Index** — Annual ranking of countries by AML/CFT risk
- **Transparency International Corruption Perceptions Index (CPI)** — Measures perceived public sector corruption
- **OFAC/UN/EU Sanctioned Countries** — Comprehensive or targeted sanctions regimes
- **Tax Justice Network Financial Secrecy Index** — Measures jurisdiction secrecy/transparency

## Categories of Geographic Risk

| Category | Examples (illustrative, always verify current status) |
|---|---|
| Comprehensively sanctioned | North Korea, Iran, Syria, Cuba (varies by sanctioning regime) |
| FATF Black List | Periodically updated — verify current list |
| FATF Grey List | Periodically updated — verify current list |
| Tax havens / secrecy jurisdictions | BVI, Cayman Islands, Panama (context-dependent) |
| Conflict zones | Active conflict areas — TF and corruption risk |
| High corruption perception | Lower-ranked CPI countries |

## Applying Country Risk in Practice

Country risk should be assessed for:
1. **Customer's nationality**
2. **Customer's country of residence**
3. **Customer's place of business/incorporation**
4. **Countries of transaction counterparties**
5. **Countries through which funds are routed**

A customer may be resident in a low-risk country but transact heavily with high-risk jurisdictions — the transaction geography matters independently of the customer's own location.

## Interview Questions

1. **What is the difference between the FATF Black List and Grey List?**
2. **What other indices beyond FATF lists inform country risk assessment?**
3. **How would you assess country risk for a customer with multi-jurisdictional transaction patterns?**

## Related Pages

- [Risk Assessment Overview](/docs/risk-assessment/overview)
- [Sanctions Screening](/docs/screening/sanctions/overview)
- [EDD Triggers](/docs/edd/triggers)
