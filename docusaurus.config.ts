import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KYC Playbook',
  tagline: "The world's most comprehensive free learning platform for AML, KYC, EDD, and Financial Crime Compliance.",
  favicon: 'img/favicon.svg',
  url: 'https://kidddoo12.github.io',
  baseUrl: '/kyc-playbook/',
  organizationName: 'kidddoo12',
  projectName: 'kyc-playbook',
  onBrokenLinks: 'warn',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/kidddoo12/kyc-playbook/tree/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/kidddoo12/kyc-playbook/tree/main/',
          blogTitle: 'KYC Playbook Blog',
          blogDescription: 'Latest updates, case studies, and compliance insights.',
          postsPerPage: 10,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    announcementBar: {
      id: 'launch_v1',
      content:
        '🚀 KYC Playbook v1.0 is live! Free, open-source AML/KYC learning platform. <a href="/kyc-playbook/docs/introduction/welcome">Start Learning →</a>',
      backgroundColor: '#1e40af',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'KYC Playbook',
      logo: {
        alt: 'KYC Playbook',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learn',
        },
        { to: '/docs/career/overview', label: 'Career', position: 'left' },
        { to: '/docs/labs/overview', label: 'Labs', position: 'left' },
        { to: '/docs/glossary', label: 'Glossary', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/kidddoo12/kyc-playbook',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Welcome', to: '/docs/introduction/welcome' },
            { label: 'AML Fundamentals', to: '/docs/aml/money-laundering/overview' },
            { label: 'KYC & CDD', to: '/docs/kyc/overview' },
            { label: 'EDD', to: '/docs/edd/overview' },
            { label: 'Sanctions', to: '/docs/screening/sanctions/overview' },
          ],
        },
        {
          title: 'Tools',
          items: [
            { label: 'Practice Labs', to: '/docs/labs/overview' },
            { label: 'AML Quiz', to: '/docs/labs/quizzes/aml-basics' },
            { label: 'SAR Builder', to: '/docs/labs/sar-narrative-builder' },
            { label: 'Risk Calculator', to: '/docs/labs/risk-rating-calculator' },
            { label: 'Cheat Sheets', to: '/docs/cheat-sheets/overview' },
          ],
        },
        {
          title: 'Career',
          items: [
            { label: 'Career Overview', to: '/docs/career/overview' },
            { label: 'AML Analyst Prep', to: '/docs/career/interview/aml-analyst' },
            { label: 'CAMS Guide', to: '/docs/career/certifications/cams' },
            { label: 'Templates', to: '/docs/templates/overview' },
            { label: 'Glossary', to: '/docs/glossary' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/kidddoo12/kyc-playbook' },
            { label: 'Contributing', to: '/docs/introduction/contributing' },
            { label: 'Blog', to: '/blog' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amlwithvikas' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KYC Playbook. Open-source under MIT License. Built for the AML/KYC community.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'sql'],
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
