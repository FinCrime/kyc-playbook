---
id: investigation-process
title: Alert Investigation Process
sidebar_label: Investigation Process
---

# Alert Investigation Process

## Step-by-Step Alert Investigation

### Step 1: Review Alert Details
- Understand exactly what rule(s) triggered the alert
- Review the specific transaction(s) involved

### Step 2: Review Customer Profile
- Cross-reference customer's KYC information, stated occupation/business, expected activity profile
- Review risk rating and any prior EDD findings

### Step 3: Analyze Transaction History
- Review broader transaction history beyond the alerting transaction(s) for pattern context
- Identify counterparties involved

### Step 4: Assess Consistency
- Is the alerting activity consistent with the customer's known profile and business purpose?
- Is there a plausible, verifiable explanation?

### Step 5: Conduct Supplementary Research
- OSINT on involved counterparties if unfamiliar/high-risk
- Check for related alerts on linked accounts
- Review any prior SAR filings related to this customer

### Step 6: Document Findings and Conclusion
- Clearly state what was reviewed and the conclusion reached
- If closing as non-suspicious, explain the rationale with specific evidence
- If escalating, summarize the basis for suspicion

### Step 7: Decision
- **Close** — No suspicious activity identified; document rationale
- **Escalate** — Refer for SAR consideration or further EDD investigation
- **Request additional information** — Contact customer for clarification (where appropriate and compliant with "tipping off" restrictions)

:::warning Tipping Off
In many jurisdictions, directly informing a customer that they are under SAR investigation (or that a SAR has been/will be filed) is illegal ("tipping off"). Requests for additional information must be carefully worded to avoid revealing investigation status.
:::

## Investigation Documentation Standard

A complete alert investigation record should include:
1. Alert trigger details
2. Customer profile summary
3. Transaction analysis performed
4. Supplementary research conducted
5. Conclusion and rationale
6. Decision and next steps

## Interview Questions

1. **Walk through your process for investigating a velocity-based alert.**
2. **What is "tipping off" and how does it affect how you communicate with customers during an investigation?**
3. **How would you handle an alert where the customer's explanation seems plausible but cannot be fully verified?**

## Related Pages

- [Transaction Monitoring Overview](/docs/transaction-monitoring/overview)
- [Alert Management](/docs/transaction-monitoring/alert-management)
- [Red Flags](/docs/transaction-monitoring/red-flags)
- [SAR Overview](/docs/sar/overview)
