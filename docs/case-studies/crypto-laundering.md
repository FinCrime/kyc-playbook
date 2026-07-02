---
id: crypto-laundering
title: Case Study — Cryptocurrency Laundering
sidebar_label: Crypto Laundering
---

# Case Study: Cryptocurrency Laundering

## Scenario

A regulated cryptocurrency exchange's compliance team reviews an account flagged by their blockchain analytics tool. The customer (individual, verified identity) has been depositing cryptocurrency consistently for 6 months, with the following pattern emerging:

- Deposits originate from a wallet address with a "high-risk" exposure score, linked through 3 hops to a known darknet marketplace wallet
- The customer immediately converts deposited crypto to fiat currency and withdraws to a linked bank account within hours of each deposit
- Total volume over 6 months: approximately $340,000
- Customer's declared occupation (graphic designer) and KYC profile show no indication of cryptocurrency trading as a primary income source
- When the compliance team requests source of funds clarification, the customer states the funds are from "crypto trading profits" but cannot provide trading history from any specific platform

## Investigation Steps

### 1. Blockchain Analytics Deep Dive
Using chain analysis tools, the compliance team traces the originating wallet through several intermediate addresses, confirming a credible (though not 100% certain, given the inherent limitations of attribution) connection to a darknet marketplace known for facilitating illicit goods sales.

### 2. Pattern Analysis
The rapid "deposit → convert → withdraw" pattern with no holding period is inconsistent with genuine trading behavior, where positions are typically held for some period and trading activity would show buy/sell patterns across multiple assets — not simple liquidation.

### 3. Source of Funds Follow-Up
The customer cannot identify which exchange(s) they allegedly traded on, cannot produce trade confirmations, and provides inconsistent explanations when asked for specifics in follow-up communication.

### 4. Network Analysis
Cross-referencing other customers shows two additional accounts receiving funds from wallets with similar exposure patterns (though different specific source addresses), suggesting this may not be an isolated incident.

## Conclusion

The combination of (1) credible darknet marketplace exposure via blockchain analytics, (2) a "pass-through" transaction pattern inconsistent with genuine trading, and (3) an inability to substantiate the claimed source of funds with any verifiable documentation constitutes strong grounds for suspicion of money laundering — likely the customer acting as a "cash-out" intermediary converting darknet marketplace proceeds to fiat.

**Action Taken:**
- Account restricted pending investigation completion
- SAR filed with relevant FIU, referencing blockchain analytics findings and pattern analysis
- Account closure considered following SAR filing and risk committee review
- Broader review initiated of other accounts showing similar exposure patterns

## Key Takeaways

1. **Blockchain analytics provides powerful but probabilistic evidence** — attribution confidence should be clearly caveated in documentation, not overstated as certain
2. **Behavioral pattern (rapid deposit-convert-withdraw) is often as important as the chain analysis itself** in building a suspicion case
3. **Inability to substantiate claimed source of funds** remains a fundamental red flag regardless of the underlying asset class

## Related Pages

- [Cryptocurrency AML Typology](/docs/aml/typologies/crypto)
- [Source of Funds](/docs/edd/source-of-funds)
- [SAR Narrative Writing](/docs/sar/narrative-writing)
