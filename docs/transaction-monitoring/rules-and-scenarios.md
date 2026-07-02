---
id: rules-and-scenarios
title: Rules and Scenarios
sidebar_label: Rules & Scenarios
---

# Transaction Monitoring Rules and Scenarios

## Common Scenario Categories

### 1. Structuring/Smurfing Detection
**Logic:** Multiple cash transactions just below reporting thresholds within a defined period.
**Example rule:** 3+ cash deposits between $9,000–$9,999 within 5 business days.

### 2. Rapid Movement of Funds (Pass-Through)
**Logic:** Funds received and substantially transferred out within a short window with minimal retention.
**Example rule:** >80% of incoming funds transferred out within 48 hours.

### 3. High-Risk Jurisdiction Activity
**Logic:** Transactions involving counterparties in FATF high-risk or sanctioned-adjacent jurisdictions.
**Example rule:** Wire transfer to/from a jurisdiction on the monitored high-risk list, regardless of amount.

### 4. Dormant Account Reactivation
**Logic:** Account with no activity for an extended period suddenly shows significant transaction volume.
**Example rule:** Account dormant 180+ days, then >$10,000 in transactions within 7 days of reactivation.

### 5. Velocity Anomalies
**Logic:** Transaction frequency/volume significantly exceeds the customer's historical pattern.
**Example rule:** Transaction count or volume exceeds 3 standard deviations from the customer's 90-day rolling average.

### 6. Round-Dollar Transaction Patterns
**Logic:** Unusual frequency of round-number transactions, which is statistically uncommon in genuine commercial activity.

### 7. Geographic Inconsistency
**Logic:** Transaction location/IP inconsistent with customer's stated residence/business location.

### 8. Negative Customer Behavior
**Logic:** Customer requests information about reporting thresholds, asks to avoid documentation, or behaves evasively.

## Scenario Calibration

Rules require ongoing calibration based on:
- Customer segment (different thresholds for retail vs. business vs. high-net-worth)
- Historical alert quality (productivity rate analysis)
- Emerging typologies (new patterns identified through investigations or industry intelligence sharing)

## Above-the-Line / Below-the-Line Testing

A critical TM optimization technique:
- **Above-the-line** — Transactions that currently trigger alerts
- **Below-the-line** — Transactions just below current thresholds that do NOT trigger alerts

Periodically sampling below-the-line transactions helps validate whether thresholds are correctly calibrated or missing genuinely suspicious activity.

## Interview Questions

1. **Describe a structuring detection rule and how you would calibrate its thresholds.**
2. **What is above-the-line/below-the-line testing and why is it important?**
3. **How would you approach calibrating rules for a new customer segment?**

## Related Pages

- [Transaction Monitoring Overview](/docs/transaction-monitoring/overview)
- [Investigation Process](/docs/transaction-monitoring/investigation-process)
- [Red Flags](/docs/transaction-monitoring/red-flags)
- [Smurfing Typology](/docs/aml/typologies/smurfing)
