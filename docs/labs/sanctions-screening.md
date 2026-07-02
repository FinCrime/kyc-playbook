---
id: sanctions-screening
title: Lab — Sanctions Screening
sidebar_label: Sanctions Screening
---

# Lab: Sanctions Screening

## Scenario

You are processing a corporate onboarding for **Caspian Star Trading FZC**, a UAE-registered free zone company. The UBO declaration lists two shareholders:

- **Mr. Nikolai Volkov** — 45% shareholder, Russian national
- **Ms. Elena Morozova** — 55% shareholder, Russian national

Your screening tool returns the following results:

> **MATCH 1**
> Name: Nikolai Volkov
> DOB: 03 March 1968
> Match Score: 87%
> SDN List Entry: Nikolai Aleksandrovich Volkov, DOB: 03 March 1968, Russian national — designated OFAC SDN for involvement in Russian energy sector sanctions evasion

> **MATCH 2**
> Name: Elena Morozova
> DOB: Unknown in listed entry
> Match Score: 72%
> SDN List Entry: Elena Morozova, Russian national — no DOB on record

---

## Your Objectives

1. Assess Match 1: true match or false positive?
2. Assess Match 2: how do you proceed with limited identifiers?
3. Apply the 50% Rule: is Caspian Star Trading FZC blocked?
4. What are your next steps?

---

## Model Solution

<details>
<summary>✅ Reveal Model Solution</summary>

### Match 1 — Nikolai Volkov
- Name: Match ✅
- DOB: **Exact match — 03 March 1968** ✅
- Nationality: Russian ✅
- **Conclusion: TRUE MATCH — Confirmed SDN**

Mr. Volkov is a confirmed OFAC SDN. His assets must be frozen; no transactions may be processed.

### Match 2 — Elena Morozova
- Name: Match ✅
- DOB: Cannot confirm (no DOB in listed entry) ⚠️
- Nationality: Russian ✅
- **Score: 72% — Ambiguous; cannot confirm as true match based on name alone**

Steps required:
1. Request DOB and passport number for Ms. Morozova from the customer
2. Compare against any additional identifiers on the SDN entry (address, passport if listed)
3. Do NOT clear this as false positive based solely on name without DOB confirmation — treat as unresolved match pending additional information

### 50% Rule Application

| Shareholder | Status | Ownership |
|---|---|---|
| Nikolai Volkov | **Confirmed SDN** | 45% |
| Elena Morozova | **Unresolved match** | 55% |

**Scenario A (Morozova is NOT the SDN):**
- Confirmed sanctioned ownership = 45% → Below 50% threshold → Company not blocked by 50% Rule solely due to Volkov
- However: Volkov's 45% interest in Caspian Star itself must still be treated as blocked property (his ownership stake is his asset)
- **Recommendation: Decline relationship regardless** — processing business for a company 45% controlled by a confirmed OFAC SDN is untenable regardless of 50% Rule technicality

**Scenario B (Morozova IS the same SDN):**
- Confirmed sanctioned ownership = 45% + 55% = **100%** → Far exceeds 50% → Company is blocked
- Account must be frozen; file OFAC report

### Next Steps (Both Scenarios)
1. **Immediately halt all processing** and freeze any existing account
2. **Report to OFAC** per reporting obligations for confirmed SDN match
3. **Do not tip off the customer** about the SDN match
4. **Legal review** for any licensing requirements
5. **File SAR** with relevant FIU
6. Resolve Match 2 with additional identifiers — though outcome does not change the decision to decline

</details>

---

## Key Learning Points

1. **Exact DOB match is the highest-confidence confirming identifier** — this makes Match 1 unambiguous
2. **An 87% score without DOB confirmation is inconclusive** — but 87% score WITH DOB confirmation = certainty
3. **The 50% Rule doesn't make a 45% sanctioned shareholder "safe"** — the individual's ownership stake is itself blocked property requiring freezing
4. **Ambiguous matches should never be cleared without resolving the ambiguity** — get additional identifiers before clearing Match 2

## Related Pages

- [50% Rule](/docs/screening/sanctions/50-percent-rule)
- [Hit Resolution](/docs/screening/sanctions/hit-resolution)
- [OFAC Sanctions](/docs/screening/sanctions/ofac)
