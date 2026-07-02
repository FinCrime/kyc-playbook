---
id: google-dorks
title: Google Dorks for OSINT
sidebar_label: Google Dorks
---

# Google Dorks for OSINT Investigation

## What Are Google Dorks?

**Google dorks** are advanced search query operators that allow precise filtering of search results — narrowing searches to specific file types, websites, or content patterns. They are a powerful free tool for AML/KYC OSINT research.

## Key Search Operators

| Operator | Function | Example |
|---|---|---|
| `site:` | Restrict to a specific website/domain | `site:sec.gov "John Smith"` |
| `filetype:` | Restrict to a specific file type | `filetype:pdf "annual report" "Company X"` |
| `"exact phrase"` | Exact phrase matching | `"John Smith" "fraud"` |
| `-exclude` | Exclude a term | `John Smith -actor` |
| `intitle:` | Term must appear in page title | `intitle:"press release" "Company X"` |
| `inurl:` | Term must appear in URL | `inurl:investigation "Company X"` |
| `OR` | Match either term | `"money laundering" OR "fraud" "Company X"` |
| `*` | Wildcard | `"John * Smith"` |
| `..` | Number range | `site:sec.gov 2020..2023` |

## Practical AML/KYC Applications

### Verifying a Business
```
"Company Name" site:linkedin.com
"Company Name" -site:companywebsite.com
intitle:"Company Name" review OR complaint
```

### Finding Regulatory Actions
```
"Individual Name" site:sec.gov
"Company Name" filetype:pdf "consent order"
"Individual Name" intitle:"enforcement action"
```

### Investigating Adverse Media
```
"Individual Name" "fraud" OR "investigation" OR "charged"
"Individual Name" -site:linkedin.com -site:facebook.com
```

### Finding Court Records
```
"Individual Name" site:courtlistener.com
"Company Name" intitle:"v." filetype:pdf
```

### Verifying Website Legitimacy
```
site:companywebsite.com -inurl:blog
"Company Name" site:trustpilot.com
"Company Name" "scam" OR "review"
```

## Limitations

- Search engines index only a portion of the web; some relevant content may not appear
- Results can be manipulated through SEO techniques
- Some jurisdictions/languages have limited search engine coverage
- Always cross-verify findings through independent sources

## Interview Questions

1. **What is a Google dork and how is it useful in OSINT research?**
2. **How would you use search operators to find regulatory actions against an individual?**
3. **What are the limitations of relying solely on search engine OSINT?**

## Related Pages

- [OSINT Overview](/docs/screening/osint/overview)
- [Business Registries](/docs/screening/osint/business-registries)
- [Adverse Media Investigation](/docs/screening/adverse-media/investigation)
