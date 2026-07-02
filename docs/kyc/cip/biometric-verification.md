---
id: biometric-verification
title: Biometric Verification
sidebar_label: Biometric Verification
---

# Biometric Verification

## Overview

Biometric verification uses unique physical or behavioral characteristics to confirm identity, adding a strong layer of assurance beyond document checks alone. It has become standard in digital onboarding (eKYC) flows.

## Common Biometric Methods

### Facial Recognition
Compares a live selfie/video to the photo on a government ID document. Uses facial geometry mapping to calculate a similarity score.

### Liveness Detection
Confirms the person presenting is physically present (not a photo, video, or deepfake). Methods include:
- Active liveness (asking the user to blink, turn head, smile)
- Passive liveness (analyzing micro-movements and texture without prompting)

### Voice Recognition
Used in call-center or voice-based verification flows, comparing voiceprint patterns.

### Fingerprint / Iris Scanning
Common in jurisdictions with national biometric ID systems (e.g., India's Aadhaar) or high-security applications.

## Why Biometrics Strengthen KYC

| Risk | How Biometrics Mitigates It |
|---|---|
| Stolen/synthetic identity | Confirms the live person matches the claimed identity |
| Deepfake/photo spoofing | Liveness detection identifies non-live presentations |
| Document forgery | Cross-validates document photo against live capture |
| Account takeover | Re-verification at high-risk transaction points |

## Limitations and Risks

- **False rejections** — Legitimate customers may fail due to poor lighting, camera quality, or aging since document issuance
- **Deepfake sophistication** — Advanced deepfakes increasingly challenge liveness detection
- **Privacy concerns** — Biometric data is highly sensitive; requires strict data protection (GDPR Article 9, special category data)
- **Bias** — Facial recognition algorithms have historically shown accuracy disparities across demographic groups

## Regulatory Considerations

- **GDPR (EU)** — Biometric data is "special category" data requiring explicit consent and additional safeguards
- **BIPA (Illinois, USA)** — Biometric Information Privacy Act imposes strict consent and retention requirements
- **India DPDP Act 2023** — Governs biometric data processing

## Interview Questions

1. **What is liveness detection and why is it important?**
2. **What are the limitations of facial recognition in KYC?**
3. **What special data protection considerations apply to biometric data?**

## Related Pages

- [CIP Overview](/docs/kyc/cip/overview)
- [Identity Verification](/docs/kyc/cip/identity-verification)
- [Document Verification](/docs/kyc/cip/document-verification)
