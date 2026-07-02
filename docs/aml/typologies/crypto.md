---
id: crypto
title: Cryptocurrency & AML
sidebar_label: Cryptocurrency AML
---

# Cryptocurrency and Money Laundering

## Overview

Cryptocurrencies present both challenges and opportunities for AML compliance. Their pseudonymous nature, borderless transfer capability, and in some cases built-in privacy features make them attractive to money launderers. However, blockchain's immutable, public ledger also enables powerful forensic analysis capabilities that traditional finance lacks.

## Key Characteristics of Crypto from an AML Perspective

| Feature | AML Risk | AML Opportunity |
|---|---|---|
| Pseudonymity | Addresses aren't directly tied to identities | Chain analysis can link addresses to entities |
| Borderless | No jurisdiction controls on transfer | Global traceability on-chain |
| Speed | Instant, irreversible transfers | Real-time monitoring possible |
| Privacy coins | Monero, Zcash obscure transaction details | Limited chain analysis capability |
| Decentralization | No central authority | Regulator pressure on exchanges |

## Common Cryptocurrency Money Laundering Methods

### Chain-Hopping
Converting between multiple cryptocurrencies across multiple blockchains to obscure the trail. BTC → ETH → XMR → BTC across multiple exchanges.

### Mixing / Tumbling
Mixing services pool funds from multiple users and return equivalent but different coins, breaking the transaction chain. Now heavily sanctioned by OFAC (e.g., Tornado Cash designation).

### DeFi Exploitation
Decentralized protocols with no KYC requirements used to swap, lend, and bridge funds across chains.

### P2P Exchanges
Person-to-person crypto trading platforms with weak or no KYC allow conversion between crypto and fiat outside regulated exchange infrastructure.

### Layering via Exchanges
Using multiple centralized exchanges in different jurisdictions (exploiting varying KYC standards) to convert and move funds.

## FATF Virtual Asset Framework

FATF Recommendation 15 (Revised 2019) extends AML/CFT obligations to **Virtual Asset Service Providers (VASPs)**:
- Crypto exchanges
- Crypto wallet providers
- Cryptocurrency ATM operators
- Some DeFi platforms (where applicable)

**Travel Rule** — VASPs must share originator and beneficiary information for transfers above $1,000/€1,000 (similar to wire transfer rules).

## Blockchain Analytics Tools

Professional AML analysts in crypto-adjacent roles use blockchain analytics platforms to:
- Trace transaction flows across addresses and entities
- Identify links to sanctioned wallets or known illicit addresses
- Cluster addresses belonging to the same entity
- Calculate exposure to high-risk transaction histories

Major blockchain analytics providers: Chainalysis, Elliptic, TRM Labs, CipherTrace

## Red Flags

- Customer deposits or withdraws cryptocurrency with no verifiable source
- Transactions linked to known mixer addresses
- Funds traced to sanctioned wallets or darknet markets
- Customer uses privacy coins (Monero, Zcash) without plausible legitimate purpose
- Large amounts converted between crypto and fiat with no commercial rationale
- Customer declines to provide source of funds for crypto transactions

## Interview Questions

1. **What is chain-hopping and why is it used in crypto ML?**
2. **What is the FATF Travel Rule for virtual assets?**
3. **What are blockchain analytics tools and how are they used in AML?**
4. **Why did OFAC sanction Tornado Cash and what are the implications?**

## Related Pages

- [Layering Stage](/docs/aml/money-laundering/layering)
- [Sanctions Screening](/docs/screening/sanctions/overview)
- [OFAC Sanctions](/docs/screening/sanctions/ofac)
- [Transaction Monitoring](/docs/transaction-monitoring/overview)
