---
id: overview
title: UBO Identification
sidebar_label: UBO Overview
---

# Ultimate Beneficial Owner (UBO) Identification

## What Is a UBO?

The **Ultimate Beneficial Owner (UBO)** is the natural person(s) who ultimately owns or controls a legal entity, even if that ownership/control is exercised through layers of intermediate entities, nominees, or trust arrangements.

FATF defines beneficial ownership as referring to "the natural person(s) who ultimately owns or controls a customer and/or the natural person on whose behalf a transaction is being conducted. It also includes those persons who exercise ultimate effective control over a legal person or arrangement."

## Why UBO Identification Matters

Identifying the UBO is critical because:
1. **Prevents anonymous control** — Shell companies and complex structures are often used precisely to hide who really controls assets
2. **Sanctions compliance** — Sanctioned individuals/entities cannot be allowed to control accounts through intermediary structures
3. **Risk assessment accuracy** — The real risk of a relationship depends on who actually controls it, not the nominal entity name
4. **Regulatory requirement** — FATF Recommendation 24/25 and domestic equivalents mandate UBO identification

## The 25% Threshold (Standard) and 50% Rule (Sanctions)

Most KYC/CDD frameworks define a UBO as anyone owning **25% or more** of an entity (directly or indirectly), though some jurisdictions use 10% for higher-risk sectors or 25% as standard:

| Jurisdiction | Standard UBO Threshold |
|---|---|
| FATF Recommendation | 25% (suggested, not mandatory) |
| EU (4th/5th/6th AMLD) | 25% |
| UK (PSC Register) | 25% |
| US (Corporate Transparency Act) | 25% |
| India (PMLA Rules) | 10% (companies), 15% (trusts/partnerships) |

For **sanctions screening purposes**, a different and stricter standard applies — the **50% Rule** (aggregate ownership by sanctioned individuals) — see [50% Rule](/docs/screening/sanctions/50-percent-rule).

## Identifying UBOs: The Process

```mermaid
flowchart TD
    A[Entity Customer] --> B[Obtain Shareholder\nRegister]
    B --> C{Shareholder is\nNatural Person?}
    C -->|Yes, ≥25%| D[Identified as UBO]
    C -->|No, Legal Entity| E[Trace Up to Next Layer]
    E --> F[Obtain That Entity's\nShareholder Register]
    F --> C
    C -->|No One ≥25%| G[Identify Person(s) with\nSignificant Control\ne.g., majority of board]
    G --> H[If No One Identified:\nSenior Managing Official]
```

## When Ownership Doesn't Identify a Clear UBO

If no individual owns 25%+ directly or indirectly, regulations require identifying the person(s) who exercise **control** through other means:
- Right to appoint/remove majority of directors
- Significant influence over the entity's decisions
- As a last resort: the senior managing official (e.g., CEO) — but this should be a measure of last resort, not a shortcut

## Complex Ownership Structures

### Layered Corporate Chains
Company A (target) → owned by Company B → owned by Company C → owned by Individual X

Each layer must be traced and verified independently.

### Trusts
Trusts require identification of:
- **Settlor** — Person who established the trust and contributed assets
- **Trustee** — Person/entity managing the trust
- **Beneficiaries** — Person(s) entitled to benefit (may be a class, e.g., "settlor's descendants")
- **Protector** (if applicable) — Person with oversight/veto power over trustee decisions

### Foundations
Civil law equivalent of trusts in some jurisdictions (Liechtenstein, Panama foundations) — similarly require identification of founder, council members, and beneficiaries.

### Nominee Arrangements
Where a nominee shareholder/director holds shares/position on behalf of an undisclosed principal — the true UBO is the principal, not the nominee. Nominee declarations should be obtained and verified.

## Red Flags in UBO Identification

- Ownership structure has no clear commercial rationale for its complexity
- UBO cannot be identified after reasonable investigation
- Use of bearer shares (anonymous, transferable by physical possession) — increasingly restricted but still exist in some jurisdictions
- Nominee directors/shareholders with no other apparent business relationship to the entity
- Ownership structure spans multiple secrecy jurisdictions with no business rationale
- Declared UBO doesn't match independent verification or registry information
- UBO is a PEP or has adverse media not initially disclosed

## UBO Verification Sources

| Source | Use |
|---|---|
| Company self-declaration | Starting point, must be independently verified |
| National UBO Registries | EU member states, UK PSC Register |
| Corporate registry filings | Shareholder/director records |
| Trust deeds | For trust structures |
| Independent KYC/screening databases | CLEAR, World-Check, etc. |
| Court records / litigation | May reveal undisclosed ownership disputes |

## Interview Questions

1. **What is a UBO and why is identifying them important?**
2. **What is the standard ownership threshold for UBO identification?**
3. **How would you trace UBO through a 3-layer corporate structure?**
4. **What is the difference between UBO ownership thresholds and the sanctions 50% Rule?**
5. **How do you identify the UBO of a trust structure?**
6. **What would you do if you cannot identify a clear UBO after reasonable investigation?**

## Related Pages

- [Ownership Structures](/docs/kyb/ubo/ownership-structures)
- [Beneficial Owner Identification](/docs/kyb/ubo/beneficial-owner-identification)
- [50% Rule](/docs/screening/sanctions/50-percent-rule)
- [Shell Companies](/docs/aml/typologies/shell-companies)
- [Merchant Due Diligence](/docs/kyb/merchant-due-diligence/overview)
