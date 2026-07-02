import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🚀 Introduction',
      collapsed: false,
      items: [
        'introduction/welcome',
        'introduction/how-to-use',
        'introduction/learning-paths',
        'introduction/contributing',
      ],
    },
    {
      type: 'category',
      label: '💰 AML Fundamentals',
      items: [
        {
          type: 'category',
          label: 'Money Laundering',
          items: [
            'aml/money-laundering/overview',
            'aml/money-laundering/placement',
            'aml/money-laundering/layering',
            'aml/money-laundering/integration',
            'aml/money-laundering/predicate-crimes',
          ],
        },
        {
          type: 'category',
          label: 'Terrorist Financing',
          items: [
            'aml/terrorist-financing/overview',
            'aml/terrorist-financing/methods',
            'aml/terrorist-financing/red-flags',
          ],
        },
        {
          type: 'category',
          label: 'Typologies',
          items: [
            'aml/typologies/shell-companies',
            'aml/typologies/trade-based-ml',
            'aml/typologies/smurfing',
            'aml/typologies/real-estate',
            'aml/typologies/crypto',
            'aml/typologies/transaction-laundering',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🪪 KYC / CIP',
      items: [
        'kyc/overview',
        {
          type: 'category',
          label: 'Customer Identification',
          items: [
            'kyc/cip/overview',
            'kyc/cip/identity-verification',
            'kyc/cip/document-verification',
            'kyc/cip/biometric-verification',
          ],
        },
        {
          type: 'category',
          label: 'CDD',
          items: [
            'kyc/cdd/overview',
            'kyc/cdd/customer-risk-rating',
            'kyc/cdd/simplified-due-diligence',
            'kyc/cdd/ongoing-monitoring',
          ],
        },
        {
          type: 'category',
          label: 'EDD',
          items: [
            'edd/overview',
            'edd/triggers',
            'edd/investigation-process',
            'edd/source-of-funds',
            'edd/source-of-wealth',
            'edd/narrative-writing',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🏢 KYB / Business',
      items: [
        'kyb/overview',
        'kyb/business-verification',
        'kyb/ubo/overview',
        'kyb/ubo/ownership-structures',
        'kyb/ubo/beneficial-owner-identification',
        'kyb/merchant-due-diligence/overview',
        'kyb/merchant-due-diligence/investigation-process',
        'kyb/merchant-due-diligence/red-flags',
        'kyb/merchant-due-diligence/payment-processors',
      ],
    },
    {
      type: 'category',
      label: '⚖️ Risk Assessment',
      items: [
        'risk-assessment/overview',
        'risk-assessment/customer-risk',
        'risk-assessment/country-risk',
        'risk-assessment/industry-risk',
        'risk-assessment/product-risk',
        'risk-assessment/transaction-risk',
        'risk-assessment/risk-rating-methodology',
      ],
    },
    {
      type: 'category',
      label: '🎯 Screening',
      items: [
        {
          type: 'category',
          label: 'Sanctions',
          items: [
            'screening/sanctions/overview',
            'screening/sanctions/ofac',
            'screening/sanctions/un-sanctions',
            'screening/sanctions/eu-sanctions',
            'screening/sanctions/uk-sanctions',
            'screening/sanctions/50-percent-rule',
            'screening/sanctions/hit-resolution',
          ],
        },
        {
          type: 'category',
          label: 'PEP',
          items: [
            'screening/pep/overview',
            'screening/pep/categories',
            'screening/pep/investigation',
            'screening/pep/rca',
          ],
        },
        {
          type: 'category',
          label: 'Adverse Media',
          items: [
            'screening/adverse-media/overview',
            'screening/adverse-media/investigation',
            'screening/adverse-media/red-flags',
          ],
        },
        {
          type: 'category',
          label: 'OSINT',
          items: [
            'screening/osint/overview',
            'screening/osint/google-dorks',
            'screening/osint/business-registries',
            'screening/osint/whois',
            'screening/osint/court-records',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📊 Transaction Monitoring',
      items: [
        'transaction-monitoring/overview',
        'transaction-monitoring/alert-management',
        'transaction-monitoring/rules-and-scenarios',
        'transaction-monitoring/investigation-process',
        'transaction-monitoring/red-flags',
      ],
    },
    {
      type: 'category',
      label: '📋 SAR / STR',
      items: [
        'sar/overview',
        'sar/filing-requirements',
        'sar/narrative-writing',
        'sar/multi-jurisdiction',
        'sar/case-documentation',
      ],
    },
    {
      type: 'category',
      label: '🔍 Case Studies',
      items: [
        'case-studies/overview',
        'case-studies/merchant-fraud',
        'case-studies/trade-based-ml',
        'case-studies/crypto-laundering',
        'case-studies/pep-investigation',
      ],
    },
    {
      type: 'category',
      label: '🧪 Labs & Tools',
      items: [
        'labs/overview',
        'labs/merchant-investigation',
        'labs/edd-investigation',
        'labs/kyc-review',
        'labs/pep-screening',
        'labs/sanctions-screening',
        'labs/sar-narrative-builder',
        'labs/risk-rating-calculator',
        {
          type: 'category',
          label: 'Quizzes',
          items: [
            'labs/quizzes/aml-basics',
            'labs/quizzes/kyc-fundamentals',
            'labs/quizzes/sanctions-screening',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📝 QA & Governance',
      items: [
        'qa/overview',
        'qa/qc-process',
        'qa/audit-checklist',
        'governance/three-lines-of-defence',
        'governance/aml-program',
      ],
    },
    {
      type: 'category',
      label: '💼 Career',
      items: [
        'career/overview',
        {
          type: 'category',
          label: 'Interview Prep',
          items: [
            'career/interview/aml-analyst',
            'career/interview/kyc-analyst',
            'career/interview/edd-analyst',
            'career/interview/compliance-qa',
          ],
        },
        {
          type: 'category',
          label: 'Certifications',
          items: [
            'career/certifications/cams',
            'career/certifications/cfcs',
            'career/certifications/cgss',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📚 Reference',
      items: [
        'glossary',
        'cheat-sheets/overview',
        'cheat-sheets/aml-red-flags',
        'cheat-sheets/kyc-checklist',
        'cheat-sheets/sanctions-quick-ref',
        'templates/overview',
      ],
    },
  ],
};

export default sidebars;
