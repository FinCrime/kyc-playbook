---
id: beneficial-owner-identification
title: Beneficial Owner Identification Process
sidebar_label: BO Identification
---

# Beneficial Owner Identification Process

## Step-by-Step Identification Methodology

### Step 1: Obtain the Ownership Chart
Request a complete ownership/organizational chart from the customer, showing all entities and individuals in the chain, with percentage ownership at each level.

### Step 2: Verify Each Layer Independently
Do not rely solely on the customer-provided chart. Independently verify each entity through:
- Corporate registries
- UBO registries (where available)
- Independent KYC databases

### Step 3: Calculate Indirect Ownership
For multi-layer structures, calculate indirect ownership by multiplying percentages through the chain:

**Example:** Individual X owns 60% of Company B. Company B owns 50% of Company A (target). Individual X's indirect ownership in Company A = 60% × 50% = 30% → Individual X qualifies as UBO (above 25% threshold).

### Step 4: Aggregate Ownership Where Relevant
If multiple related parties (e.g., family members) collectively hold significant ownership, consider whether they should be treated as connected for control assessment purposes (especially relevant for sanctions purposes under the 50% Rule).

### Step 5: Assess Control (Beyond Ownership)
Even below ownership thresholds, assess whether an individual exercises **control** through:
- Voting rights or board appointment rights
- Veto rights over key decisions
- Day-to-day operational control as a director/officer

### Step 6: Document and Screen
- Document the complete UBO determination with supporting evidence
- Screen all identified UBOs against sanctions, PEP, and adverse media sources

## Worked Example: Multi-Layer Calculation

| Layer | Entity | Owner | % Ownership |
|---|---|---|---|
| 1 | Target Co (UK) | Holding Co A (Singapore) | 70% |
| 1 | Target Co (UK) | Mr. Smith (direct) | 30% |
| 2 | Holding Co A | Mr. Tan | 80% |
| 2 | Holding Co A | Ms. Lee | 20% |

**Calculation:**
- Mr. Tan's indirect ownership in Target Co = 70% × 80% = **56%** → UBO
- Ms. Lee's indirect ownership in Target Co = 70% × 20% = **14%** → Below 25% threshold, not a UBO by ownership (assess control separately)
- Mr. Smith's direct ownership = **30%** → UBO

**Result:** Mr. Tan and Mr. Smith are identified UBOs requiring full identification and screening. Ms. Lee's control should still be assessed (e.g., board seat, veto rights) even though below the ownership threshold.

## Common Calculation Errors

- Adding percentages across layers instead of multiplying
- Failing to aggregate connected parties (e.g., spouses, family trusts) who together exceed thresholds
- Stopping investigation once one UBO is found, missing others who also meet the threshold
- Not considering control-based UBO status when ownership-based thresholds aren't met

## Interview Questions

1. **If Person A owns 60% of Company X, and Company X owns 50% of Company Y, what is Person A's indirect ownership in Company Y? Are they a UBO?**
2. **Why might you identify a UBO through control rather than ownership percentage?**
3. **How would you handle aggregated family ownership that individually falls below the UBO threshold?**

## Related Pages

- [UBO Overview](/docs/kyb/ubo/overview)
- [Ownership Structures](/docs/kyb/ubo/ownership-structures)
- [50% Rule](/docs/screening/sanctions/50-percent-rule)
- [UBO Calculator Lab](/docs/labs/risk-rating-calculator)
