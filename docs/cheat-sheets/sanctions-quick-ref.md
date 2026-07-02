---
id: sanctions-quick-ref
title: Sanctions Quick Reference
sidebar_label: Sanctions Quick Ref
---

# Sanctions Quick Reference

## Major Sanctions Regimes at a Glance

| Regime | Body | Primary List | Key Scope |
|---|---|---|---|
| OFAC (USA) | US Treasury | SDN List | US persons; USD transactions globally |
| UN Security Council | UNSC | Consolidated List | All UN member states (binding) |
| EU | European Council | EU Consolidated Financial Sanctions List | EU member states |
| OFSI (UK) | HM Treasury | UK Sanctions List | UK persons/entities |
| SECO (Switzerland) | Swiss Federal Council | Swiss Sanctions List | Switzerland-nexus |
| DFAT (Australia) | Aus. Dept. Foreign Affairs | Australian Autonomous Sanctions | Australia-nexus |

## The 50% Rule — Quick Summary

> **An entity is blocked if sanctioned persons own ≥50% in aggregate — even if the entity is not itself named on any list.**

**Key points:**
- Aggregates across ALL sanctioned owners (unrelated to each other)
- Cascades through ownership layers
- Applies even without control
- Cannot rely on list-only screening — must calculate ownership

## Hit Resolution Decision Tree

```
Is the name a plausible match?
├── No → Clear as False Positive (document)
└── Yes → Compare DOB
    ├── DOB doesn't match → Likely False Positive (document; seek additional IDs)
    └── DOB matches → Compare Nationality/Passport
        ├── All differ → False Positive (document thoroughly)
        └── All match → TRUE MATCH
            └── BLOCK → ESCALATE → REPORT → DO NOT TIP OFF
```

## Sanctions Screening Do's and Don'ts

| Do | Don't |
|---|---|
| Screen against all applicable lists (OFAC + UN + EU + UK + domestic) | Screen only against one list |
| Document every hit resolution decision with rationale | Clear matches without explanation |
| Apply the 50% Rule when calculating entity ownership | Assume list-only screening is sufficient |
| Report confirmed true matches per regulatory timelines | Delay reporting while "monitoring" |
| Maintain strict confidentiality | Inform customer of SAR/sanctions investigation |
| Re-screen periodically (lists update frequently) | Rely solely on onboarding screening |

## Common False Positive Scenarios

| Scenario | How to Clear |
|---|---|
| Common name, different DOB | Document DOB comparison; clear if confirmed different person |
| Matching name, different nationality | Confirm nationality via passport; clear if different |
| Partial/phonetic name match only | Document analysis; clear if no other identifiers match |
| Junior/senior with same name | Confirm generational suffix, DOB, nationality |

## Key Filing Timelines (Verify Current Requirements)

| Jurisdiction | Approximate Timeline |
|---|---|
| US (OFAC SDN) | "Immediately" upon discovery; written report within 10 days |
| UK (OFSI) | "As soon as practicable" |
| EU | Per national implementation (varies by member state) |

:::warning Always Verify
Regulatory requirements change. Always confirm current reporting timelines with your compliance team and the relevant regulator's latest guidance.
:::

## Related Pages

- [Sanctions Overview](/docs/screening/sanctions/overview)
- [OFAC](/docs/screening/sanctions/ofac)
- [50% Rule](/docs/screening/sanctions/50-percent-rule)
- [Hit Resolution](/docs/screening/sanctions/hit-resolution)
