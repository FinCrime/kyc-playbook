---
id: business-registries
title: Business Registries
sidebar_label: Business Registries
---

# Business Registries for OSINT

## Overview

Official business/corporate registries are the primary source for verifying entity registration, status, directors, and ownership filings. Understanding which registry to use for which jurisdiction is a core OSINT skill.

## Major Business Registries by Jurisdiction

| Jurisdiction | Registry | Access |
|---|---|---|
| United Kingdom | Companies House | Free, comprehensive (companieshouse.gov.uk) |
| United States | Varies by state (Secretary of State databases) | Free, varies in detail by state |
| United States (aggregator) | OpenCorporates | Free aggregator covering multiple jurisdictions |
| India | MCA (Ministry of Corporate Affairs) | Free basic info, paid for detailed filings |
| Singapore | ACRA | Paid for detailed reports, some free search |
| UAE | DED (per Emirate), DIFC, ADGM | Varies, often requires direct inquiry |
| European Union | National registries; BRIS | Varies by member state |
| Hong Kong | Companies Registry | Paid for detailed searches |
| Australia | ASIC | Free basic search, paid detailed reports |
| Cayman Islands | General Registry | Limited public access |
| BVI | Limited public registry access | Often requires registered agent inquiry |

## Information Typically Available

- Registration/incorporation date
- Current status (active, dissolved, struck off)
- Registered address
- Directors (current and historical)
- Shareholders (varies significantly by jurisdiction — many don't disclose publicly)
- Filing history (annual returns, accounts)
- SIC/business activity codes

## UBO/Beneficial Ownership Registries

Some jurisdictions maintain specific beneficial ownership registries:
- **UK PSC Register** (Persons with Significant Control) — part of Companies House
- **EU member state UBO registries** (varying access levels per 5AMLD requirements)
- **US Corporate Transparency Act** — FinCEN beneficial ownership database (access restricted primarily to law enforcement/financial institutions, not fully public)

## Aggregator Tools

- **OpenCorporates** — Aggregates data from multiple jurisdictions' registries
- **Orbis (Bureau van Dijk)** — Commercial corporate database with ownership linkage data
- Commercial KYC platforms (often integrate registry data directly)

## Verification Best Practices

1. Always verify directly with the official registry, not just secondary sources
2. Check the entity's current status — don't assume registration means "active and in good standing"
3. Cross-reference director/shareholder names against screening databases
4. Note the registry's last update date — some registries have filing lag

## Interview Questions

1. **What is the UK PSC Register and what information does it provide?**
2. **Why might a registry search not reveal the true beneficial owner?**
3. **What is OpenCorporates and how does it help with multi-jurisdiction research?**

## Related Pages

- [OSINT Overview](/docs/screening/osint/overview)
- [Business Verification](/docs/kyb/business-verification)
- [UBO Overview](/docs/kyb/ubo/overview)
