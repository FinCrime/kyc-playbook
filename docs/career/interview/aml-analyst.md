---
id: aml-analyst
title: AML Analyst Interview Questions
sidebar_label: AML Analyst
---

# AML Analyst Interview Questions

## Technical Knowledge Questions

**1. What are the three stages of money laundering?**

*Model Answer:* Placement, layering, and integration. Placement introduces criminal proceeds into the financial system (e.g., cash deposits). Layering obscures the source through complex transactions (e.g., wire transfers through shell companies). Integration reintroduces the funds into the legitimate economy as apparently clean assets (e.g., real estate purchases).

**2. What's the difference between AML and CFT?**

*Model Answer:* AML (Anti-Money Laundering) addresses the laundering of proceeds from criminal activity. CFT (Counter-Financing of Terrorism) addresses funds used to support terrorism, which can come from legitimate or illegitimate sources. The detection challenges differ — TF often involves smaller amounts and may use otherwise-legitimate funds.

**3. What triggers a SAR filing?**

*Model Answer:* A SAR is filed when there are reasonable grounds to suspect that a transaction or activity is connected to money laundering, terrorist financing, or other financial crime. There is no minimum dollar threshold — suspicion, not transaction size, is the trigger.

**4. How would you investigate a transaction monitoring alert?**

*Model Answer:* I'd start by understanding what specifically triggered the alert, then review the customer's KYC profile and historical transaction pattern for context. I'd assess whether the flagged activity is consistent with the customer's known profile and business purpose. If inconsistent or unexplained, I'd conduct further research (OSINT, related account review) before reaching a conclusion — documenting the rationale either way.

## Behavioral Questions (STAR Format)

**5. Tell me about a time you identified suspicious activity that wasn't initially flagged by automated systems.**

*Approach:* Describe a specific case (anonymized) where you noticed a pattern through manual review or cross-referencing that the system rules didn't catch — e.g., noticing a customer's transaction pattern matched a known typology even though no specific rule triggered.

**6. Describe a time you had to make a judgment call with incomplete information.**

*Approach:* AML investigation often involves ambiguity. Describe how you gathered available evidence, applied risk-based judgment, documented your reasoning, and escalated appropriately when certainty wasn't achievable.

**7. How do you handle a high-volume caseload with competing deadlines?**

*Approach:* Discuss prioritization methodology (risk-based triage), time management techniques, and how you balance thoroughness against SLA pressures without compromising investigation quality.

## Scenario-Based Questions

**8. A customer's account shows 8 cash deposits of $9,200 each across 3 branches in one week. What's your assessment?**

*Model Answer:* This pattern is highly consistent with structuring — deposits deliberately kept below the $10,000 CTR threshold, using multiple branches to avoid detection at a single location. I would review the customer's profile for business rationale, check for any explanation, and given the strong pattern match to known structuring typology, would likely escalate for SAR consideration even before further investigation, given how clearly indicative the pattern is.

**9. How would you approach a case where the customer's explanation seems plausible but you can't independently verify it?**

*Model Answer:* I would document what was provided, assess the internal consistency and plausibility of the explanation, and seek any available independent verification (even partial). If the claim cannot be verified at all and the underlying activity pattern is otherwise consistent with a known risk typology, I would not close the case based on an unverified explanation alone — I'd escalate for further review rather than accept it at face value.

## Related Pages

- [EDD Analyst Interview Prep](/docs/career/interview/edd-analyst)
- [Transaction Monitoring Overview](/docs/transaction-monitoring/overview)
- [SAR Overview](/docs/sar/overview)
