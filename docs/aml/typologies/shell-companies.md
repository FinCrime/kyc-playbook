---
id: shell-companies
title: Shell Companies in Money Laundering
sidebar_label: Shell Companies
---

# Shell Companies

## What Is a Shell Company?

A **shell company** is a legal entity — a corporation, limited liability company, trust, or other structure — that has no active business operations, no significant assets, no employees, and no real commercial purpose. It exists solely on paper.

Shell companies are not inherently illegal. They are legitimately used for:
- Holding assets (IP, property, investments)
- Facilitating legitimate cross-border transactions
- Privacy (legal in many jurisdictions)
- Estate planning and tax efficiency

However, their opaque ownership structures make them among the most commonly exploited vehicles for money laundering, tax evasion, and sanctions evasion.

## Why Shell Companies Are Effective

1. **Obscure beneficial ownership** — Multiple layers of shell companies can make it nearly impossible to identify the ultimate beneficial owner (UBO)
2. **Exploit legal opacity** — Jurisdictions like Delaware (USA), BVI, Cayman Islands, and Panama have historically allowed nominee arrangements and limited disclosure
3. **Create paper-trail complexity** — Each company is a transaction endpoint, multiplying the layers investigators must unravel
4. **Appear legitimate** — A payment between two registered companies looks routine

## Key Red Flags

- Company has no verifiable employees, website, premises, or business activity
- Registered agent and nominee directors with no apparent connection to the real owner
- Address shared with hundreds of other companies (mass incorporation address)
- Registered in a known secrecy jurisdiction (BVI, Cayman, Delaware, Seychelles, Marshall Islands)
- UBO cannot be identified after reasonable investigation
- Transactions lack any apparent commercial purpose
- Company was recently incorporated immediately before a large transaction

## Common Jurisdictions

| Jurisdiction | Known For |
|---|---|
| British Virgin Islands (BVI) | Low cost, high secrecy, nominee structures |
| Cayman Islands | Investment funds, no tax |
| Delaware (USA) | No disclosure of beneficial owners (pre-CTA) |
| Panama | Post-Panama Papers but still used |
| Seychelles | Low cost, minimal disclosure |
| Marshall Islands | Shipping registries, anonymous ownership |
| Luxembourg | Holding structures, EU access |
| Netherlands | Holding structures, treaty networks |

:::info Regulatory Update
The US **Corporate Transparency Act (CTA)**, effective January 2024, requires most US companies to report beneficial ownership information to FinCEN — significantly closing the Delaware loophole.
:::

## Investigative Approach

### Step 1: Identify the Entity
- Search business registries (Companies House UK, ACRA Singapore, ROC India, state databases US)
- Verify registration, incorporation date, status (active/dissolved)
- Identify directors, shareholders, registered agent

### Step 2: Challenge the Structure
- Does the company have a real business? Website, phone, premises?
- Are the directors real, contactable, identifiable?
- Is the ownership structure proportionate to any apparent business need?

### Step 3: Identify the UBO
- Follow ownership chains upward through each holding layer
- Apply the [50% Rule](/docs/screening/sanctions/50-percent-rule) for sanctions screening
- Check UBO registries where available (EU member states, UK PSC Register)

### Step 4: Document Findings
- Record every entity in the chain
- Note any elements that cannot be verified
- Assess overall risk rating

## Case Study: BVI Shell Company Investigation

**Scenario:** A UK payment gateway customer, "Pinnacle Global Ltd" (registered BVI), receives high-volume card transactions from retail customers across Europe. The merchant claims to sell consumer electronics online.

**Investigation findings:**
- No verifiable website, address, or product offering
- BVI-registered with nominee directors; UBO declared as "trust"
- The "trust" has no identifiable settlor or beneficiary on record
- Card transaction volume of £2.3M/month inconsistent with any verifiable retail operation
- Refund rate of 38% — far above industry average of 0.5–1%
- Chargebacks from customers claiming they never received goods

**Conclusion:** Shell company used to process fraudulent transactions / facilitate transaction laundering. Merchant relationship terminated; SAR filed with UK NCA.

## Interview Questions

1. **What is a shell company and how is it used in money laundering?**
2. **How would you investigate a shell company's ultimate beneficial owner?**
3. **What is the UK PSC (Persons with Significant Control) Register?**
4. **How does the US Corporate Transparency Act change UBO identification?**

## Related Pages

- [UBO Investigation](/docs/kyb/ubo/overview)
- [Ownership Structures](/docs/kyb/ubo/ownership-structures)
- [50% Rule](/docs/screening/sanctions/50-percent-rule)
- [Layering Stage](/docs/aml/money-laundering/layering)
- [OSINT Techniques](/docs/screening/osint/overview)
