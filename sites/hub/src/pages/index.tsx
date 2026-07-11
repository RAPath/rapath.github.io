import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// ─── Jurisdiction data ────────────────────────────────────────────────────────
const jurisdictions = [
  {
    code: 'au', name: 'Australia', reg: 'TGA',
    live: true, path: '/au/',
    desc: 'ARTG inclusion, Essential Principles, conformity assessment under the Therapeutic Goods Act.',
  },
  {
    code: 'eu', name: 'European Union', reg: 'MDR & IVDR',
    live: true, path: '/eu/',
    desc: 'CE marking, Notified Bodies, UDI and EUDAMED under MDR 2017/745 and IVDR 2017/746.',
  },
  {
    code: 'hc', name: 'Canada', reg: 'Health Canada',
    live: true, path: '/hc/',
    desc: 'Medical Device Licence, Class I–IV classification, MDSAP recognition.',
  },
  {
    code: 'sg', name: 'Singapore', reg: 'HSA',
    live: true, path: '/sg/',
    desc: 'Product registration via SHARE, Class A–D framework, Dealer\'s Licence.',
  },
  {
    code: 'uk', name: 'United Kingdom', reg: 'MHRA',
    live: true, path: '/uk/',
    desc: 'UKCA marking, UK Approved Bodies, post-Brexit regulatory framework.',
  },
  {
    code: 'us', name: 'United States', reg: 'FDA',
    live: true, path: '/us/',
    desc: '510(k), PMA, De Novo pathways, quality system (QMSR), and UDI under 21 CFR.',
  },
  {
    code: 'jp', name: 'Japan', reg: 'PMDA',
    live: true, path: '/jp/',
    desc: 'Shonin approval, MAH licensing requirements, PMD Act classification.',
  },
  {
    code: 'swiss', name: 'Switzerland', reg: 'Swissmedic',
    live: true, path: '/swiss/',
    desc: 'MedDO regulatory framework, conformity assessment, mutual recognition with EU.',
  },
  {
    code: 'cn', name: 'China', reg: 'NMPA',
    live: true, path: '/cn/',
    desc: 'Registration pathways, Class I–III framework, CIMDN nomenclature.',
  },
  {
    code: 'in', name: 'India', reg: 'CDSCO',
    live: true, path: '/in/',
    desc: 'Medical Devices Rules 2017, SUGAM portal registration, Class A–D.',
  },
  {
    code: 'kr', name: 'South Korea', reg: 'MFDS',
    live: true, path: '/kr/',
    desc: 'Medical Devices Act, Class I–IV classification, UDIKOREA registration.',
  },
  {
    code: 'br', name: 'Brazil', reg: 'ANVISA',
    live: true, path: '/br/',
    desc: 'RDC registration framework, Class I–IV, STED technical documentation.',
  },
  {
    code: 'my', name: 'Malaysia', reg: 'MDA',
    live: true, path: '/my/',
    desc: 'Medical Device Act 2012, MeDC@St registration, ASEAN harmonisation.',
  },
  {
    code: 'id', name: 'Indonesia', reg: 'BPOM',
    live: true, path: '/id/',
    desc: 'REGALKES registration, Class A–D framework, Kemenkes regulatory overview.',
  },
  {
    code: 'vt', name: 'Vietnam', reg: 'DAV / MOH',
    live: true, path: '/vt/',
    desc: 'Circular 46 registration, Class A–D classification, Ministry of Health.',
  },
  {
    code: 'ru', name: 'Russia', reg: 'Roszdravnadzor',
    live: true, path: '/ru/',
    desc: 'GRLS state register, Class 1–3 framework, Federal Law 323-FZ.',
  },
  {
    code: 'nz', name: 'New Zealand', reg: 'Medsafe',
    live: true, path: '/nz/',
    desc: 'WAND database registration, Class I–IV classification',
  },
  {
    code: 'sa', name: 'Saudi Arabia', reg: 'SFDA',
    live: true, path: '/sa/',
    desc: 'Medical device registration via the SFDA portal, Class A–D risk classification',
  },
  {
    code: 'mx', name: 'Mexico', reg: 'COFEPRIS',
    live: true, path: '/mx/',
    desc: 'Registro Sanitario via COFEPRIS, Class I–III classification, NOM standards',
  },
  {
    code: 'hk', name: 'Hong Kong', reg: 'MDD / MDACS',
    live: true, path: '/hk/',
    desc: 'MDACS product registration, Class I–III framework, Department of Health.',
  },
  {
    code: 'th', name: 'Thailand', reg: 'Thai FDA / MDCD',
    live: true, path: '/th/',
    desc: 'Medical Device Act B.E. 2562, Class 1–3 classification, MDCD registration.',
  },
  {
    code: 'ph', name: 'Philippines', reg: 'FDA Philippines / CDRRHR',
    live: true, path: '/ph/',
    desc: 'Certificate of Product Registration (CPR), Class A–D, License to Operate.',
  },
  {
    code: 'bd', name: 'Bangladesh', reg: 'DGDA',
    live: true, path: '/bd/',
    desc: 'DGDA Import Registration Certificate, developing medical device regulatory framework.',
  },
  {
    code: 'lk', name: 'Sri Lanka', reg: 'NMRA',
    live: true, path: '/lk/',
    desc: 'NMRA registration, Class A–D framework, NMRA Act No. 5 of 2015.',
  },
];

// ─── Trust bar — most-recognised primary regulators, shown first ──────────────
const trustBarRegulators = [
  'FDA', 'MHRA', 'EU MDR', 'NMPA', 'PMDA', 'TGA', 'Health Canada', 'ANVISA', 'MFDS', 'HSA',
];

// ─── Editorial process — makes the sourcing method visible ────────────────────
const process = [
  {
    title: 'Primary legislation and guidance',
    desc: 'Every page traces back to the regulator\'s own published legislation, guidance document, or official portal.',
  },
  {
    title: 'Rewritten in plain English',
    desc: 'Legal and technical text is distilled for regulatory professionals — accurate, but not written like a statute.',
  },
  {
    title: 'Reviewed as rules change',
    desc: 'Pages are re-verified against current publications on a rolling basis as legislation and guidance evolve.',
  },
];

// ─── Featured tools ───────────────────────────────────────────────────────────
const featuredTools = [
  { label: 'CLASSIFIER', name: 'Device Classification Wizard', path: '/tools/classifier', desc: 'Indicative classification, documentation checklist, and pathway timelines across all 24 jurisdictions.' },
  { label: 'VISUAL', name: 'Regulatory Process Flow', path: '/tools#flow', desc: 'Interactive 7-phase flowchart with jurisdiction-specific notes and per-phase checklists.' },
  { label: 'ANALYSIS', name: 'Jurisdiction Comparison Tables', path: '/tools#compare', desc: 'Side-by-side comparison of PMS, UDI, authorised reps, vigilance, and QMS across 24 markets.' },
  { label: 'PLANNING', name: 'Regulatory Timeline Planner', path: '/tools#gantt', desc: 'Gantt-style view of overlapping regulatory phases, adjustable by device class.' },
  { label: 'TECHNICAL', name: 'GSPR / Essential Req. Mapper', path: '/tools#gspr', desc: 'Map applicable General Safety & Performance Requirements to your device type with evidence guidance.' },
  { label: 'ACTION', name: 'Submission Readiness Checklist', path: '/tools#checklist', desc: 'Track submission readiness across 24 items with a live progress bar.' },
];

const scopePoints = [
  { title: 'Publicly sourced', desc: 'Legislation, official guidance, and public regulatory publications only.' },
  { title: 'Not legal advice', desc: 'A navigation aid, not a substitute for legal interpretation.' },
  { title: 'Verify before deciding', desc: 'Always confirm critical requirements against current authority publications.' },
  { title: 'AI-assisted, reviewed', desc: 'Written with AI assistance; changes reviewed as rules evolve.' },
];

const audiencePills = [
  'Regulatory affairs professionals',
  'Sponsors and manufacturers',
  'Importers and distributors',
  'Newcomers to the field',
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const liveCount = jurisdictions.filter((j) => j.live).length;

  return (
    <Layout
      title={siteConfig.title}
      description="Plain English medical device regulatory reference across 24 jurisdictions — sourced directly from primary regulators, openly available, community-maintained."
    >
      <header className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>Medical device regulatory reference</p>
          <Heading as="h1" className={styles.heroTitle}>
            Plain-English regulatory guidance, sourced directly from {jurisdictions.length} national authorities
          </Heading>
          <p className={styles.heroSubtitle}>
            Every page links back to the legislation, guidance document, or official publication it&apos;s
            drawn from — so you can verify it yourself in seconds. RAPath is an open,
            community-maintained reference, free to use for anyone navigating medical device regulation.
          </p>

          <div className={styles.heroStats}>
            <div>
              <span className={styles.heroStatValue}>2,480+</span>
              <div className={styles.heroStatLabel}>source citations</div>
            </div>
            <div>
              <span className={styles.heroStatValue}>{liveCount}</span>
              <div className={styles.heroStatLabel}>jurisdictions covered</div>
            </div>
            <div>
              <span className={styles.heroStatValue}>19</span>
              <div className={styles.heroStatLabel}>free tools</div>
            </div>
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.ctaPrimary} to="#jurisdictions">
              Browse jurisdictions
            </Link>
            <Link className={styles.ctaSecondary} to="/tools">
              Regulatory tools
            </Link>
            <Link
              className={styles.ctaSecondary}
              href="https://github.com/RAPath/rapath.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.trustBar}>
        <div className="container">
          <p className={styles.trustBarLabel}>Sourced directly from</p>
          <div className={styles.trustBarRow}>
            {trustBarRegulators.map((r) => (
              <span key={r} className={styles.trustBarItem}>{r}</span>
            ))}
          </div>
        </div>
      </section>

      <main className="container margin-vert--xl">
        <section className="margin-bottom--xl">
          <p className={styles.sectionLabel}>How content is sourced</p>
          <div className={styles.processGrid}>
            {process.map((step, i) => (
              <div key={step.title}>
                <div className={styles.processNum}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.processTitle}>{step.title}</div>
                <div className={styles.processDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="jurisdictions" className="margin-bottom--xl">
          <Heading as="h2">Jurisdiction reference sites</Heading>
          <p>
            Each jurisdiction site covers classification, pre-market pathways, post-market
            obligations, and source-linked legislation and guidance.
          </p>

          <div className="row">
            {jurisdictions.map((j) => (
              <div key={j.code} className="col col--4 margin-bottom--lg">
                <Link to={j.path} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}>
                  <div className={styles.jCard}>
                    <div className={styles.jCardHead}>
                      <span className={styles.jName}>{j.name}</span>
                      <span className={styles.jReg}>{j.reg}</span>
                    </div>
                    <p className={styles.jDesc}>{j.desc}</p>
                    <span className={styles.jLink}>Visit site →</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="tools" className="margin-bottom--xl">
          <div className="row" style={{ alignItems: 'baseline', marginBottom: '0.5rem' }}>
            <div className="col">
              <Heading as="h2" style={{ marginBottom: '0.25rem' }}>Regulatory tools</Heading>
              <p style={{ marginBottom: '1rem' }}>
                19 free, interactive tools — classification wizards, comparison tables, timeline
                planners, checklists, and more. No account required.
              </p>
            </div>
            <div className="col col--2 text--right">
              <Link className="button button--outline button--primary button--sm" to="/tools">
                All tools →
              </Link>
            </div>
          </div>

          <div className="row">
            {featuredTools.map((tool) => (
              <div key={tool.name} className="col col--4 margin-bottom--md">
                <Link to={tool.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className={styles.jCard}>
                    <div style={{ marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.05em', color: 'var(--ifm-color-emphasis-500)' }}>
                        {tool.label}
                      </span>
                    </div>
                    <div className={styles.jName} style={{ display: 'block', marginBottom: '0.4rem' }}>
                      {tool.name}
                    </div>
                    <p className={styles.jDesc} style={{ marginBottom: 0 }}>
                      {tool.desc}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '0.75rem' }}>
            <Link className="button button--primary button--md" to="/tools">
              Browse all 19 tools →
            </Link>
          </div>
        </section>

        <section id="about" className="margin-bottom--xl">
          <p className={styles.sectionLabel}>Scope and limitations</p>
          <Heading as="h2" style={{ marginBottom: '0.5rem' }}>A navigation aid, not a replacement</Heading>
          <p className={styles.heroSubtitle} style={{ marginBottom: '1.75rem' }}>
            RAPath helps teams navigate complex regulatory frameworks faster. It&apos;s not a
            substitute for official sources, legal interpretation, or regulatory advice — use it
            to orient quickly, then verify before deciding.
          </p>

          <div className={styles.scopeGrid}>
            {scopePoints.map((point) => (
              <div key={point.title} className={styles.scopeCell}>
                <p className={styles.scopeTitle}>{point.title}</p>
                <p className={styles.scopeDesc}>{point.desc}</p>
              </div>
            ))}
          </div>

          <p className={styles.sectionLabel} style={{ marginTop: '2rem' }}>Who it&apos;s for</p>
          <div className={styles.pillRow}>
            {audiencePills.map((a) => (
              <span key={a} className={styles.pill}>{a}</span>
            ))}
          </div>
        </section>

        <section className={styles.ctaBanner}>
          <div>
            <p className={styles.ctaTitle}>Spot an error? Have a question?</p>
            <p className={styles.ctaDesc}>
              RAPath is a community reference — open a discussion on GitHub to correct, ask, or
              suggest content.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className={styles.ctaPrimary} href="https://github.com/orgs/RAPath/discussions">
              Open a discussion
            </Link>
            <Link className={styles.ctaSecondary} href="https://github.com/RAPath/rapath.github.io">
              GitHub org ↗
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
