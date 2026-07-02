---
id: contributing
title: Contributing to KYC Playbook
sidebar_label: Contributing
---

# Contributing to KYC Playbook

KYC Playbook is open source and community-driven. Contributions from working practitioners make this platform more accurate, comprehensive, and useful.

## Ways to Contribute

### 📝 Content Contributions
- Write new topic guides or expand existing ones
- Add real-world examples and case studies (anonymized)
- Contribute interview questions and model answers
- Add quiz questions or flashcards

### 🐛 Bug Reports & Corrections
- Report factual errors (regulatory details, process descriptions)
- Flag outdated information (regulations change frequently)
- Report broken links or navigation issues

### 🌍 Regional Content
- Add jurisdiction-specific regulatory guidance
- Contribute country risk profiles
- Add regional typology examples

## How to Contribute

### Option 1: Edit This Page (Easy)
Every page has an "Edit this page" link at the bottom. Click it to open the file directly in GitHub's editor. Make your changes and submit a pull request.

### Option 2: GitHub Fork & PR (Full)

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/kyc-playbook.git
cd kyc-playbook

# 3. Install dependencies
npm install

# 4. Start local development
npm run start

# 5. Create a branch for your contribution
git checkout -b add/pep-rca-guide

# 6. Make your changes
# Edit or create files in /docs/

# 7. Run the build to check for errors
npm run build

# 8. Commit and push
git add .
git commit -m "Add: PEP RCA investigation guide"
git push origin add/pep-rca-guide

# 9. Open a pull request on GitHub
```

## Content Guidelines

### Quality Standards
- Write in clear, professional English
- Be specific and actionable — avoid vague statements
- Use real examples (anonymized if needed)
- Include red flags, checklists, and decision points where relevant
- Link to related topics within the platform

### Page Structure
Every new topic page should include:
1. Overview / Definition
2. Why It Matters
3. Process / Workflow
4. Red Flags or Risk Indicators
5. Checklist
6. Interview Questions
7. Related Pages

### Regulatory Accuracy
- Always cite the specific regulation or guidance document
- Note when regulations differ by jurisdiction
- Flag when information may be jurisdiction-specific

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). All contributors are expected to uphold these standards.

## Questions?

Open a [GitHub Discussion](https://github.com/kidddoo12/kyc-playbook/discussions) or [Issue](https://github.com/kidddoo12/kyc-playbook/issues) if you have questions about contributing.

Thank you for helping build a better resource for the AML/KYC community! 🙏
