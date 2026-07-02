---
id: overview
title: Templates Overview
sidebar_label: Overview
---

# Templates

Ready-to-use templates for common AML/KYC documentation tasks.

## Available Templates

| Template | Use Case |
|---|---|
| EDD Investigation Summary | Document EDD findings and recommendation |
| SAR Narrative | Structure SAR filing narrative |
| Merchant Investigation Report | Document MDD findings |
| Risk Assessment Worksheet | Score customer risk systematically |
| Hit Resolution Record | Document sanctions/PEP hit resolution decisions |

---

## EDD Investigation Summary Template

```
EDD INVESTIGATION SUMMARY
═══════════════════════════════════════════════════

Case Reference:          [Internal case ID]
Investigation Date:      [DD/MM/YYYY]
Investigator:            [Name, Role]
EDD Trigger:             [Specify trigger: PEP / High-Risk Jurisdiction / 
                          Adverse Media / Complex Structure / Other]

═══════════════════════════════════════════════════
CUSTOMER PROFILE
═══════════════════════════════════════════════════

Customer Name:           [Full legal name]
Entity Type:             [Individual / Company / Trust]
Nationality:             [Country]
Residence/Incorporation: [Country]
Occupation/Business:     [Stated occupation or business purpose]
Relationship Type:       [Account type, product, relationship purpose]

═══════════════════════════════════════════════════
INVESTIGATION FINDINGS
═══════════════════════════════════════════════════

1. IDENTITY & BENEFICIAL OWNERSHIP
   Documents Reviewed:    [List documents]
   Verification Status:   [Verified / Partially Verified / Unverified]
   UBO Identified:        [Yes / No / N/A - Individual customer]
   Findings:              [Narrative]

2. SOURCE OF FUNDS
   Claimed Source:        [Customer's stated SoF]
   Evidence Reviewed:     [List documents/evidence]
   Adequacy Assessment:   [Adequate / Partially Adequate / Inadequate]
   Findings:              [Narrative]

3. SOURCE OF WEALTH (Where Applicable)
   Claimed Source:        [Customer's stated SoW]
   Evidence Reviewed:     [List documents/evidence]
   Plausibility:          [Plausible / Partially Plausible / Implausible]
   Findings:              [Narrative]

4. ADVERSE MEDIA & OSINT
   Sources Searched:      [List databases and search methods]
   Languages Searched:    [English / [Other languages]]
   Findings:              [Summary of findings, or "No adverse media identified"]

5. SANCTIONS / PEP SCREENING
   Screening Date:        [DD/MM/YYYY]
   Screening Tool:        [Tool name]
   Result:                [Clear / Hit resolved as false positive / 
                           True match - [action taken]]
   Findings:              [Narrative]

═══════════════════════════════════════════════════
RISK ASSESSMENT
═══════════════════════════════════════════════════

Risk Rating:             [LOW / MEDIUM / HIGH]
Key Risk Factors:        [List primary risk drivers]
Mitigating Factors:      [List factors reducing residual risk]

═══════════════════════════════════════════════════
RECOMMENDATION
═══════════════════════════════════════════════════

Recommendation:          [APPROVE / DECLINE / CONDITIONAL APPROVE / ESCALATE]

Conditions (if applicable):
  - [Condition 1]
  - [Condition 2]

Monitoring Plan:
  Review Frequency:      [Annual / Semi-Annual / Other]
  Monitoring Threshold:  [Transaction alert threshold]

Rationale:               [Clear statement of basis for recommendation]

═══════════════════════════════════════════════════
APPROVAL
═══════════════════════════════════════════════════

Approved By:             [Name, Title]
Date:                    [DD/MM/YYYY]
Comments:                [Any conditions or notes from approver]
```

---

## Hit Resolution Record Template

```
SANCTIONS / PEP HIT RESOLUTION RECORD
═══════════════════════════════════════════════════

Date:                    [DD/MM/YYYY]
Analyst:                 [Name]
Case Reference:          [Internal ID]

SCREENING DETAILS
List Screened:           [SDN / UN / EU / UK / PEP / Other]
Match Score:             [%]
Listed Name:             [Exact name on the list]
Listed DOB:              [DOB on list, if available]
Listed Nationality:      [Nationality on list, if available]
Other Listed Details:    [Any other identifiers on the list entry]

CUSTOMER DETAILS
Customer Name:           [Full legal name]
Customer DOB:            [DD/MM/YYYY]
Customer Nationality:    [Country]
Customer Passport No:    [If available]

COMPARISON ANALYSIS
Name Match Quality:      [Exact / Close / Partial / Phonetic only]
DOB Match:               [Match / No Match / Not Available]
Nationality Match:       [Match / No Match / Not Available]
Other Identifier Match:  [Match / No Match / Not Available]

DETERMINATION
Outcome:                 [TRUE MATCH / FALSE POSITIVE]

Rationale:               [Specific explanation of why this is/isn't the listed
                           individual, referencing each identifier compared]

ACTION TAKEN (True Match only):
  [ ] Transaction blocked
  [ ] Account frozen
  [ ] Escalated to Compliance
  [ ] Regulatory report filed: [Date / Reference]
  [ ] SAR filed: [Date / Reference]
```

---

## SAR Narrative Template

```
SUSPICIOUS ACTIVITY REPORT — NARRATIVE

WHO:
[Customer name, account number, key identifying information, 
declared occupation, relationship length with institution]

BACKGROUND:
[Brief account/relationship history; typical activity profile 
prior to the suspicious activity]

WHAT / WHEN / WHERE (Suspicious Activity):
[Chronological, specific description of the suspicious 
transactions/activity, with exact dates, amounts, and 
account numbers. Describe counterparties involved.]

RED FLAGS IDENTIFIED:
1. [Specific red flag with supporting data]
2. [Specific red flag with supporting data]
3. [Continue as needed]

INVESTIGATION STEPS TAKEN:
[What research was conducted: profile review, OSINT, 
customer contact (if applicable), related account review, etc.]

WHY SUSPICIOUS:
[Connect the specific facts to recognized typologies or 
risk indicators; explain why the institution believes 
criminal activity is involved]

CONCLUSION:
[Institution name] is filing this SAR on the basis of 
reasonable grounds to suspect [money laundering / 
terrorist financing / other] in connection with the 
above-described activity.
```

---

## How to Use These Templates

1. These are starting-point frameworks — adapt to your institution's specific requirements
2. Never submit a template as-is — every field must be completed with case-specific content
3. Generic templates that aren't thoroughly populated with specific facts are a QA failure
4. Your institution's policy may require additional sections — always check local requirements

## Related Pages

- [EDD Narrative Writing](/docs/edd/narrative-writing)
- [SAR Narrative Writing](/docs/sar/narrative-writing)
- [QA Checklist](/docs/qa/audit-checklist)
