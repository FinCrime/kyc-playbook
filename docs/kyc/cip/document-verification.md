---
id: document-verification
title: Document Verification
sidebar_label: Document Verification
---

# Document Verification

## Overview

Document verification is the process of confirming that identity and address documents are authentic, current, and belong to the individual presenting them.

## Types of Documents

### Primary Identity Documents
- Passport
- National ID Card
- Driver's License
- Residence Permit

### Proof of Address Documents
- Utility bills (electricity, water, gas) — typically within 3 months
- Bank or credit card statements
- Government correspondence (tax notices, etc.)
- Tenancy/lease agreements

### Business Documents
- Certificate of Incorporation
- Articles of Association / Memorandum
- Register of Directors and Shareholders
- Good Standing Certificate
- Business Licenses

## Document Authenticity Checks

### Physical Security Features (for in-person verification)
- Holograms and watermarks
- Microprinting
- UV-reactive ink
- Tactile features (raised print)

### Digital Verification
- MRZ checksum validation
- Document template matching against known formats per issuing country
- Font and layout consistency checks
- Metadata analysis for digital submissions (detecting screenshot/edited images)

## Common Document Fraud Indicators

- Mismatched fonts or spacing inconsistent with official templates
- Photo that appears digitally altered or doesn't match security features
- Document number format inconsistent with issuing country/authority
- Expiry date inconsistent with issuance date and document validity period
- Visible signs of digital editing (pixel irregularities, inconsistent shadows)
- Document quality inconsistent with claimed issuing authority standards

## Document Verification Workflow

1. **Collection** — Customer submits document (upload, scan, photo)
2. **Quality check** — Ensure image quality is sufficient for verification
3. **Format validation** — Confirm document matches known templates for issuing country
4. **Data extraction** — OCR/MRZ extraction of key data fields
5. **Cross-validation** — Compare extracted data against customer-provided information
6. **Authenticity scoring** — Automated or manual assessment of fraud indicators
7. **Decision** — Pass, fail, or escalate for manual review

## Interview Questions

1. **What document authenticity checks would you perform during onboarding?**
2. **What are common signs of document fraud?**
3. **How would you handle a document that fails automated verification but appears genuine on manual review?**

## Related Pages

- [CIP Overview](/docs/kyc/cip/overview)
- [Identity Verification](/docs/kyc/cip/identity-verification)
- [Biometric Verification](/docs/kyc/cip/biometric-verification)
