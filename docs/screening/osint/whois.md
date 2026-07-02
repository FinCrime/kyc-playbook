---
id: whois
title: WHOIS Lookups
sidebar_label: WHOIS
---

# WHOIS Lookups for OSINT

## What Is WHOIS?

**WHOIS** is a protocol/database that provides registration information for internet domain names, including registrant details, registration dates, and hosting information.

## AML/KYC Applications of WHOIS

### Merchant Website Verification
- Confirm domain registration date — does it align with claimed business history?
- Check registrant name/organization — does it match the claimed business entity?
- Identify hosting provider/location — may indicate jurisdiction risk

### Red Flags from WHOIS Data
- Domain registered very recently relative to claimed years in business
- Registrant uses privacy protection services hiding all identifying information (not inherently suspicious alone, but worth noting in context)
- Registrant location inconsistent with claimed business location
- Domain registered to a different entity than the claimed business owner

## GDPR Impact on WHOIS Data

Since GDPR implementation, much WHOIS data for domains with EU-based registrants has been redacted from public WHOIS lookups, limiting the information available. This has somewhat reduced WHOIS's utility but it remains valuable, especially for non-EU domains or where registrants haven't enabled privacy protection.

## Practical WHOIS Tools

- ICANN Lookup (official, free)
- Various commercial WHOIS history tools (showing historical registration changes)
- Domain registrar lookup tools

## Complementary Techniques

WHOIS is most powerful combined with:
- **Wayback Machine** (web.archive.org) — Historical snapshots of a website, useful to verify how long a business has genuinely operated and what it has claimed to sell over time
- **SSL certificate inspection** — Certificate registration details can sometimes provide additional verification points
- **DNS history tools** — Track hosting changes over time

## Interview Questions

1. **What information does a WHOIS lookup provide, and how is it useful in merchant verification?**
2. **How has GDPR affected the utility of WHOIS lookups?**
3. **How would you use the Wayback Machine alongside WHOIS data in an investigation?**

## Related Pages

- [OSINT Overview](/docs/screening/osint/overview)
- [Merchant Due Diligence](/docs/kyb/merchant-due-diligence/overview)
- [Merchant Red Flags](/docs/kyb/merchant-due-diligence/red-flags)
