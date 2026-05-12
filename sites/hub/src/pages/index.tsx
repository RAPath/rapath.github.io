import React, { type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// ─── Jurisdiction data ────────────────────────────────────────────────────────
const jurisdictions = [
  {
    code: 'au', flag: '🇦🇺', name: 'Australia', reg: 'TGA',
    live: true, path: '/au/',
    desc: 'ARTG inclusion, Essential Principles, conformity assessment under the Therapeutic Goods Act.',
  },
  {
    code: 'eu', flag: '🇪🇺', name: 'European Union', reg: 'MDR & IVDR',
    live: true, path: '/eu/',
    desc: 'CE marking, Notified Bodies, UDI and EUDAMED under MDR 2017/745 and IVDR 2017/746.',
  },
  {
    code: 'hc', flag: '🇨🇦', name: 'Canada', reg: 'Health Canada',
    live: true, path: '/hc/',
    desc: 'Medical Device Licence, Class I–IV classification, MDSAP recognition.',
  },
  {
    code: 'sg', flag: '🇸🇬', name: 'Singapore', reg: 'HSA',
    live: true, path: '/sg/',
    desc: 'Product registration via SHARE, Class A–D framework, Dealer\'s Licence.',
  },
  {
    code: 'uk', flag: '🇬🇧', name: 'United Kingdom', reg: 'MHRA',
    live: true, path: '/uk/',
    desc: 'UKCA marking, UK Approved Bodies, post-Brexit regulatory framework.',
  },
  {
    code: 'us', flag: '🇺🇸', name: 'United States', reg: 'FDA',
    live: true, path: '/us/',
    desc: '510(k), PMA, De Novo pathways, quality system (QMSR), and UDI under 21 CFR.',
  },
  {
    code: 'jp', flag: '🇯🇵', name: 'Japan', reg: 'PMDA',
    live: true, path: '/jp/',
    desc: 'Shonin approval, MAH licensing requirements, PMD Act classification.',
  },
  {
    code: 'swiss', flag: '🇨🇭', name: 'Switzerland', reg: 'Swissmedic',
    live: true, path: '/swiss/',
    desc: 'MedDO regulatory framework, conformity assessment, mutual recognition with EU.',
  },
  {
    code: 'cn', flag: '🇨🇳', name: 'China', reg: 'NMPA',
    live: true, path: '/cn/',
    desc: 'Registration pathways, Class I–III framework, CIMDN nomenclature.',
  },
  {
    code: 'in', flag: '🇮🇳', name: 'India', reg: 'CDSCO',
    live: true, path: '/in/',
    desc: 'Medical Devices Rules 2017, SUGAM portal registration, Class A–D.',
  },
  {
    code: 'kr', flag: '🇰🇷', name: 'South Korea', reg: 'MFDS',
    live: true, path: '/kr/',
    desc: 'Medical Devices Act, Class I–IV classification, UDIKOREA registration.',
  },
  {
    code: 'br', flag: '🇧🇷', name: 'Brazil', reg: 'ANVISA',
    live: true, path: '/br/',
    desc: 'RDC registration framework, Class I–IV, STED technical documentation.',
  },
  {
    code: 'my', flag: '🇲🇾', name: 'Malaysia', reg: 'MDA',
    live: true, path: '/my/',
    desc: 'Medical Device Act 2012, MeDC@St registration, ASEAN harmonisation.',
  },
  {
    code: 'id', flag: '🇮🇩', name: 'Indonesia', reg: 'BPOM',
    live: true, path: '/id/',
    desc: 'REGALKES registration, Class A–D framework, Kemenkes regulatory overview.',
  },
  {
    code: 'vt', flag: '🇻🇳', name: 'Vietnam', reg: 'DAV / MOH',
    live: true, path: '/vt/',
    desc: 'Circular 46 registration, Class A–D classification, Ministry of Health.',
  },
  {
    code: 'ru', flag: '🇷🇺', name: 'Russia', reg: 'Roszdravnadzor',
    live: false, path: '/ru/',
    desc: 'GRLS state register, Class 1–3 framework, Federal Law 323-FZ.',
  },
];

const aboutPoints = [
  'Regulatory affairs professionals and consultants',
  'Sponsors and manufacturers entering new markets',
  'Importers and distributors',
  'Anyone new to medical device regulation',
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const liveCount = jurisdictions.filter((j) => j.live).length;
  const plannedCount = jurisdictions.length - liveCount;
  const stats = [
    { label: 'Jurisdictions', value: jurisdictions.length },
    { label: 'Live sites', value: liveCount },
    { label: 'Planned sites', value: plannedCount },
  ];

  return (
    <Layout
      title={siteConfig.title}
      description="Plain English medical device regulatory reference across 16+ jurisdictions — openly available, community-maintained, properly sourced."
    >

      <header className="hero hero--primary">
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            Medical device regulatory frameworks across {jurisdictions.length} jurisdictions,
            written in plain English and linked to official sources.</p>
          <p>RAPath is an open, community-maintained reference for medical device regulation across multiple jurisdictions. Every page is written in plain English, links back to the authoritative legislative or regulatory source, and is openly available to anyone who needs it.
          </p>
          <div>
            <Link
              className="button button--secondary button--lg margin-right--sm margin-bottom--sm"
              to="#jurisdictions"
            >
              Browse Jurisdictions
            </Link>
            <Link
              className="button button--outline button--secondary button--lg margin-bottom--sm"
              href="https://github.com/RAPath"
            >
              GitHub ↗
            </Link>
          </div>
        </div>
      </header>

      <main className="container margin-vert--xl">
        <section className="margin-bottom--xl">
          <div className="row">
            {stats.map((stat) => (
              <div key={stat.label} className="col col--4 margin-bottom--md">
                <div className="card">
                  <div className="card__body text--center">
                    <Heading as="h3" className="margin-bottom--none">{stat.value}</Heading>
                    <small>{stat.label}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="jurisdictions" className="margin-bottom--xl">
          <Heading as="h2">Live and Planned Sites</Heading>
          <p>
            Each jurisdiction site covers classification, pre-market pathways, post-market
            obligations, and source-linked legislation and guidance.
          </p>

          <div className="row">
            {jurisdictions.map((j) => (
              <div key={j.code} className="col col--4 margin-bottom--lg">
                <div className="card">
                  <div className="card__header">
                    <div className="row">
                      <div className="col col--8">
                        <strong>{j.flag} {j.name}</strong>
                      </div>
                      <div className="col col--4 text--right">
                        <span className={`badge ${j.live ? 'badge--success' : 'badge--warning'}`}>
                          {j.live ? 'Live' : 'Planned'}
                        </span>
                      </div>
                    </div>
                    <small>{j.reg}</small>
                  </div>
                  <div className="card__body">
                    <p className="margin-bottom--none">{j.desc}</p>
                  </div>
                  <div className="card__footer">
                    <Link className="button button--primary button--sm" to={j.path}>
                      Visit site
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="margin-bottom--xl">
          <div className="row">
            <div className="col col--8">
              <Heading as="h2">A navigation aid, not a replacement</Heading>
              <p>
                RAPath helps teams navigate complex regulatory frameworks faster, but it is not
                a substitute for official sources, legal interpretation, or regulator advice.
              </p>
              <p>
                Use RAPath to orient quickly, then verify critical requirements against current
                authority publications before making regulatory decisions.
              </p>
              <p>
                Content is written with AI assistance and reviewed continuously as legislation
                and guidance evolve.
              </p>
            </div>
            <div className="col col--4">
              <div className="card">
                <div className="card__header">
                  <Heading as="h3">RAPath is for</Heading>
                </div>
                <div className="card__body">
                  <ul>
                    {aboutPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <Heading as="h2">Questions? Corrections? Discussions?</Heading>
          <p>
            RAPath is a community reference. If you spot an error, have a regulatory question,
            or want to suggest content — use GitHub Discussions.
          </p>
          <div>
            <Link
              className="button button--primary button--lg margin-right--sm margin-bottom--sm"
              href="https://github.com/orgs/RAPath/discussions"
            >
              Open a Discussion
            </Link>
            <Link
              className="button button--secondary button--lg margin-bottom--sm"
              href="https://github.com/RAPath"
            >
              GitHub Organisation ↗
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
