import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

// ============================================================
// DATA
// ============================================================
const STATS = [
  { number: '50+', label: 'Learning Modules' },
  { number: '200+', label: 'Pages of Content' },
  { number: '15+', label: 'Practice Labs' },
  { number: '500+', label: 'Interview Q&As' },
  { number: '100%', label: 'Free Forever' },
];

const TOPICS = [
  {
    icon: '💰',
    title: 'AML Fundamentals',
    desc: 'Understand money laundering stages, predicate crimes, and the global AML regulatory framework.',
    link: '/docs/aml/money-laundering/overview',
    level: 'beginner',
    time: '2 hrs',
  },
  {
    icon: '🪪',
    title: 'KYC & CDD',
    desc: 'Master customer identification, due diligence processes, and risk-based approaches.',
    link: '/docs/kyc/overview',
    level: 'beginner',
    time: '3 hrs',
  },
  {
    icon: '🔍',
    title: 'EDD Investigations',
    desc: 'Conduct Enhanced Due Diligence for high-risk customers, PEPs, and complex structures.',
    link: '/docs/edd/overview',
    level: 'intermediate',
    time: '4 hrs',
  },
  {
    icon: '🏢',
    title: 'KYB & Merchant Risk',
    desc: 'Verify businesses, map ownership structures, and assess merchant risk comprehensively.',
    link: '/docs/kyb/overview',
    level: 'intermediate',
    time: '3 hrs',
  },
  {
    icon: '⚖️',
    title: 'Sanctions Screening',
    desc: 'Navigate OFAC, UN, EU, and UK sanctions lists. Master hit resolution and the 50% Rule.',
    link: '/docs/screening/sanctions/overview',
    level: 'intermediate',
    time: '3 hrs',
  },
  {
    icon: '🎯',
    title: 'PEP & Adverse Media',
    desc: 'Identify politically exposed persons, their associates, and adverse media findings.',
    link: '/docs/screening/pep/overview',
    level: 'intermediate',
    time: '2 hrs',
  },
  {
    icon: '🌐',
    title: 'OSINT Techniques',
    desc: 'Use open-source intelligence to investigate individuals, businesses, and complex networks.',
    link: '/docs/screening/osint/overview',
    level: 'advanced',
    time: '3 hrs',
  },
  {
    icon: '📊',
    title: 'Transaction Monitoring',
    desc: 'Analyze transaction patterns, investigate alerts, and identify suspicious activity.',
    link: '/docs/transaction-monitoring/overview',
    level: 'intermediate',
    time: '3 hrs',
  },
  {
    icon: '📋',
    title: 'SAR/STR Filing',
    desc: 'Write compelling SAR narratives and meet multi-jurisdiction filing requirements.',
    link: '/docs/sar/overview',
    level: 'advanced',
    time: '2 hrs',
  },
  {
    icon: '🔎',
    title: 'Source of Funds & Wealth',
    desc: 'Investigate and verify the origin of funds and wealth for high-risk customers.',
    link: '/docs/edd/source-of-funds',
    level: 'advanced',
    time: '2 hrs',
  },
  {
    icon: '🏗️',
    title: 'UBO & Ownership Structures',
    desc: 'Identify ultimate beneficial owners through complex corporate and trust structures.',
    link: '/docs/kyb/ubo/overview',
    level: 'advanced',
    time: '2 hrs',
  },
  {
    icon: '💼',
    title: 'Career & Interview Prep',
    desc: 'Prepare for AML/KYC interviews with 500+ curated questions and model answers.',
    link: '/docs/career/overview',
    level: 'beginner',
    time: '5 hrs',
  },
];

const LEARNING_PATHS = [
  {
    level: 'beginner',
    label: 'Beginner',
    title: '🌱 AML/KYC Foundation',
    desc: 'New to compliance? Start here. Build a solid foundation in AML principles, KYC processes, and regulatory frameworks.',
    topics: ['What is Money Laundering?', 'KYC Fundamentals', 'CDD Process', 'Basic Screening', 'AML Regulations'],
    link: '/docs/introduction/learning-paths',
    duration: '2–3 weeks',
  },
  {
    level: 'intermediate',
    label: 'Intermediate',
    title: '⚡ Investigation Analyst',
    desc: 'Deepen your skills. Master EDD investigations, sanctions screening, transaction monitoring, and SAR filing.',
    topics: ['EDD Investigations', 'Sanctions & PEP', 'Transaction Monitoring', 'SAR Narrative Writing', 'Source of Funds'],
    link: '/docs/introduction/learning-paths',
    duration: '4–6 weeks',
  },
  {
    level: 'advanced',
    label: 'Advanced',
    title: '🚀 Senior Analyst & QA',
    desc: 'Elevate to senior level. Master complex typologies, KYB/UBO, QC methodology, and governance frameworks.',
    topics: ['UBO & Complex Structures', 'Trade-Based ML', 'Crypto AML', 'QC/QA Methodology', 'Three Lines of Defence'],
    link: '/docs/introduction/learning-paths',
    duration: '6–8 weeks',
  },
  {
    level: 'expert',
    label: 'Expert',
    title: '🏆 CAMS Preparation',
    desc: 'Prepare for the CAMS certification. Comprehensive exam prep with practice questions, study guides, and flashcards.',
    topics: ['CAMS Exam Structure', 'FATF 40 Recommendations', 'Global Regulatory Frameworks', 'Practice Exams', 'Flashcards'],
    link: '/docs/career/certifications/cams',
    duration: '8–12 weeks',
  },
];

const WHY_ITEMS = [
  {
    icon: '🎓',
    title: 'Practitioner-Written Content',
    desc: 'Every guide is written by working AML/KYC professionals with real-world investigative experience — not just theory.',
  },
  {
    icon: '🧪',
    title: 'Interactive Practice Labs',
    desc: 'Apply what you learn through hands-on labs simulating real merchant investigations, EDD reviews, and SAR drafting.',
  },
  {
    icon: '🌍',
    title: 'Multi-Jurisdiction Coverage',
    desc: 'Covers regulations across APAC, EMEA, UK, Americas — FATF, BSA, MLR 2017, POCA 2002, and more.',
  },
  {
    icon: '💡',
    title: 'Interview-Ready Content',
    desc: 'Structured interview Q&As with STAR-format answers for AML Analyst, KYC Analyst, EDD, and Compliance QA roles.',
  },
  {
    icon: '🔓',
    title: '100% Free & Open Source',
    desc: 'No paywalls. No subscriptions. The complete platform is open-source on GitHub and free forever.',
  },
  {
    icon: '🔄',
    title: 'Continuously Updated',
    desc: 'Regulatory changes, new typologies, and updated case studies — the platform evolves with the industry.',
  },
];

// ============================================================
// COMPONENTS
// ============================================================
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-badges">
        <span className="hero-badge">🆓 Free Forever</span>
        <span className="hero-badge">📚 Open Source</span>
        <span className="hero-badge">🌍 Multi-Jurisdiction</span>
        <span className="hero-badge">🏆 CAMS Prep</span>
      </div>
      <h1 className="hero-title">
        The Complete AML/KYC<br />Learning Platform
      </h1>
      <p className="hero-subtitle">
        From beginner to certified expert — master AML, KYC, EDD, sanctions screening, and financial crime investigation through structured learning paths, practice labs, and real case studies.
      </p>
      <div className="hero-cta-group">
        <Link href="/docs/introduction/welcome" className="hero-cta-primary">
          Start Learning →
        </Link>
        <Link href="/docs/introduction/learning-paths" className="hero-cta-secondary">
          View Learning Paths
        </Link>
        <Link href="https://github.com/kidddoo12/kyc-playbook" className="hero-cta-secondary">
          ⭐ Star on GitHub
        </Link>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-grid">
        {STATS.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TopicsSection() {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Core Topics</span>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-desc">
            Comprehensive coverage of every AML/KYC/EDD topic — from foundational concepts to advanced investigative techniques.
          </p>
        </div>
        <div className="card-grid">
          {TOPICS.map((topic) => (
            <Link key={topic.title} href={topic.link} className="topic-card">
              <div className="topic-card-icon">{topic.icon}</div>
              <h3 className="topic-card-title">{topic.title}</h3>
              <p className="topic-card-desc">{topic.desc}</p>
              <div className="topic-card-meta">
                <span className={`topic-badge ${topic.level}`}>{topic.level}</span>
                <span className="topic-badge reading-time">⏱ {topic.time}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LearningPathsSection() {
  return (
    <section className="learning-path-section">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Learning Paths</span>
          <h2 className="section-title">Choose Your Path</h2>
          <p className="section-desc">
            Structured learning journeys tailored to your experience level — whether you're just starting out or preparing for certification.
          </p>
        </div>
        <div className="path-grid">
          {LEARNING_PATHS.map((path) => (
            <div className={`path-card ${path.level}`} key={path.title}>
              <div className="path-level">{path.label} · {path.duration}</div>
              <h3 className="path-title">{path.title}</h3>
              <p className="path-desc">{path.desc}</p>
              <ul className="path-topics">
                {path.topics.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <Link href={path.link} className="path-link">
                Start Path →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="section">
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Why KYC Playbook</span>
          <h2 className="section-title">Built by Practitioners, for Practitioners</h2>
          <p className="section-desc">
            Unlike generic compliance courses, KYC Playbook is built by working investigators who understand what it takes to do this job well.
          </p>
        </div>
        <div className="card-grid">
          {WHY_ITEMS.map((item) => (
            <div className="topic-card" key={item.title} style={{ cursor: 'default' }}>
              <div className="topic-card-icon">{item.icon}</div>
              <h3 className="topic-card-title">{item.title}</h3>
              <p className="topic-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LabsCallout() {
  return (
    <section style={{ background: 'var(--kyc-gradient-primary)', padding: '5rem 2rem' }}>
      <div className="container-xl text-center">
        <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>
          🧪 Learn by Doing — Practice Labs
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
          Simulate real-world investigations. Merchant risk reviews, EDD cases, PEP screening, SAR drafting — all in a guided lab environment with hints and model solutions.
        </p>
        <div className="hero-cta-group">
          <Link href="/docs/labs/overview" className="hero-cta-primary">
            Explore Labs →
          </Link>
          <Link href="/docs/labs/merchant-investigation" className="hero-cta-secondary">
            Try Merchant Investigation
          </Link>
        </div>
      </div>
    </section>
  );
}

function CommunitySection() {
  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container-xl">
        <div className="section-header">
          <span className="section-tag">Community</span>
          <h2 className="section-title">Open Source & Community-Driven</h2>
          <p className="section-desc">
            KYC Playbook is built by the compliance community, for the compliance community. Every contribution makes it better.
          </p>
        </div>
        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {[
            { icon: '⭐', title: 'Star on GitHub', desc: 'Show your support and help others discover the platform.', link: 'https://github.com/kidddoo12/kyc-playbook', cta: 'Star Repository' },
            { icon: '✍️', title: 'Contribute Content', desc: 'Share your expertise. Submit guides, case studies, or corrections.', link: '/docs/introduction/contributing', cta: 'Contribution Guide' },
            { icon: '🐛', title: 'Report Issues', desc: 'Found an error or outdated information? Open an issue on GitHub.', link: 'https://github.com/kidddoo12/kyc-playbook/issues', cta: 'Open Issue' },
            { icon: '📣', title: 'Share the Platform', desc: 'Help students and career-switchers discover free AML/KYC education.', link: 'https://www.linkedin.com/in/amlwithvikas', cta: 'Share on LinkedIn' },
          ].map((item) => (
            <Link href={item.link} className="topic-card" key={item.title}>
              <div className="topic-card-icon">{item.icon}</div>
              <h3 className="topic-card-title">{item.title}</h3>
              <p className="topic-card-desc">{item.desc}</p>
              <span style={{ color: 'var(--kyc-brand-blue)', fontWeight: 600, fontSize: '0.9rem' }}>{item.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PAGE
// ============================================================
export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Free AML/KYC Learning Platform"
      description="The world's most comprehensive free learning platform for AML, KYC, EDD, sanctions screening, and financial crime compliance. From beginner to CAMS-certified expert."
    >
      <HeroSection />
      <StatsSection />
      <TopicsSection />
      <LearningPathsSection />
      <WhySection />
      <LabsCallout />
      <CommunitySection />
    </Layout>
  );
}
