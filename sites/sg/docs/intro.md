---
slug: /
sidebar_position: 1
title: Introduction
description: RAPath SG — a plain English reference for Singapore medical device regulation under the Health Products Act and HP(MD) Regulations 2010. What this site is, who it is for, and how to use it.
keywords: [HSA, medical devices, Singapore, Health Products Act, HP(MD) Regulations, regulatory affairs, SHARE, dealer's licence]
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'HSA definition under the Health Products Act — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'HSA structure, the Health Products Act, and how Singapore regulates medical devices.', link: { label: 'View framework', href: '/start-here/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Unique to SG', title: 'Dual Obligation Model', sub: "Both the product (registration) and the supply chain (dealer's licence) must comply with HSA rules.", link: { label: 'View dual model', href: '/start-here/dual-obligation-model' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class A–D', title: 'How Classification Works', sub: 'Class A / B / C / D — ASEAN-aligned classification rules applied by HSA.', link: { label: 'View classification rules', href: '/pre-market/classification/how-classification-works' } },
      { tag: 'Classification', title: 'Class A Exemption', sub: 'Many Class A devices are exempt from registration — conditions and requirements.', link: { label: 'View Class A exemption', href: '/start-here/class-a-exemption' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Product Registration',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'Registration Overview (SHARE)', sub: 'HSA MEDICS/PRISM portal registration — Class B/C/D pathways and evaluation routes.', link: { label: 'View registration overview', href: '/pre-market/registration/registration-overview' } },
      { tag: 'Registration', title: 'Evaluation Routes', sub: 'Full evaluation, abridged, and immediate routes — eligibility and documentation requirements.', link: { label: 'View evaluation routes', href: '/pre-market/registration/evaluation-routes' } },
      { tag: 'Registration', title: 'Clinical Evidence', sub: 'Clinical data requirements for HSA registration — what is needed for each route.', link: { label: 'View requirements', href: '/pre-market/registration/clinical-evidence' } },
      { tag: 'International', title: 'Regulatory Reliance', sub: "HSA's reliance programme — how approvals from reference authorities expedite Singapore registration.", link: { label: 'View reliance guide', href: '/international/regulatory-reliance' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: "Dealer's Licence & QMS",
    nodes: [
      { tag: "Dealer's Licence", badge: 'Mandatory', title: "Dealer's Licence Overview", sub: 'Who needs a licence — manufacturers, importers, wholesalers, and retailers.', link: { label: "View licence guide", href: '/dealers-licence/overview' } },
      { tag: "Dealer's Licence", title: 'QMS Requirements', sub: "ISO 13485 (or MDSAP recognition from Jan 2025) mandatory for dealer's licence holders.", link: { label: 'View QMS requirements', href: '/dealers-licence/qms-requirements' } },
      { tag: "Dealer's Licence", title: 'GDP Requirements', sub: 'Good Distribution Practice obligations for licensed medical device dealers in Singapore.', link: { label: 'View GDP requirements', href: '/dealers-licence/gdp-requirements' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Post-Market Overview', sub: 'Overview of ongoing obligations — vigilance, FSCAs, PMS, and registration maintenance.', link: { label: 'View post-market overview', href: '/post-market/overview' } },
      { tag: 'Post-Market', title: 'Adverse Event Reporting', sub: 'What must be reported to HSA, by whom, and within what timeframes under the HPA.', link: { label: 'View reporting rules', href: '/post-market/adverse-event-reporting/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'Field Safety Corrective Actions', sub: 'When FSCAs are required, how to notify HSA, and recall coordination process.', link: { label: 'View FSCA guide', href: '/post-market/field-safety-corrective-actions/when-to-report' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Enforcement & International',
    nodes: [
      { tag: 'Enforcement', title: 'Enforcement Overview', sub: 'HSA enforcement powers under the Health Products Act — penalties and market surveillance.', link: { label: 'View enforcement guide', href: '/enforcement/overview' } },
      { tag: 'International', title: 'ASEAN Harmonisation', sub: "Singapore's role in ASEAN AMDD — CSDT, AMDD classification, and regional alignment.", link: { label: 'View ASEAN guide', href: '/international/asean-amdc' } },
      { tag: 'International', title: 'IMDRF Membership', sub: "Singapore's IMDRF engagement and how international guidance shapes HSA policy.", link: { label: 'View IMDRF guide', href: '/international/imdrf' } },
    ],
  },
];

export const PathwayMap = () => {
  const [openPhase, setOpenPhase] = React.useState(0);
  const toggle = (id) => setOpenPhase(prev => prev === id ? null : id);
  return (
    <div style={{ borderRadius: '12px', border: '1px solid var(--ifm-border-color)', background: 'color-mix(in srgb, var(--ifm-color-primary) 6%, var(--ifm-background-color))', padding: '1.5rem', margin: '2rem 0' }}>
      <p style={{ margin: '0 0 1rem 0', fontSize: '0.85rem', color: 'var(--ifm-font-color-secondary)' }}>Click a phase to expand — each card links to the relevant section of this guide.</p>
      {PHASES.map((phase) => {
        const isOpen = openPhase === phase.id;
        return (
          <div key={phase.id} style={{ borderRadius: '8px', border: `1px solid ${isOpen ? 'var(--ifm-color-primary)' : 'var(--ifm-border-color)'}`, marginBottom: '0.5rem', overflow: 'hidden' }}>
            <button onClick={() => toggle(phase.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.875rem 1rem', background: 'color-mix(in srgb, var(--ifm-color-primary) 8%, var(--ifm-background-color))', cursor: 'pointer', border: 'none', width: '100%', textAlign: 'left', color: 'var(--ifm-font-color-base)', fontFamily: 'inherit' }}>
              <span style={{ fontSize: '1.25rem', minWidth: '1.5rem' }}>{phase.icon}</span>
              <span style={{ flex: 1 }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--ifm-font-color-secondary)', display: 'block', marginBottom: '0.1rem' }}>{phase.label}</span>
                <span style={{ fontWeight: 600, color: 'var(--ifm-font-color-base)' }}>{phase.title}</span>
              </span>
              <span style={{ fontSize: '1.1rem', color: 'var(--ifm-font-color-secondary)', display: 'inline-block', transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.18s' }}>›</span>
            </button>
            {isOpen && (
              <div style={{ position: 'relative', padding: '1rem 1rem 0.5rem 2.5rem' }}>
                <div style={{ position: 'absolute', left: '1.5rem', top: 0, bottom: 0, width: '2px', background: 'var(--ifm-border-color)' }} />
                {phase.nodes.map((node, idx) => (
                  <div key={idx} style={{ position: 'relative', marginBottom: '0.75rem' }}>
                    <div style={{ position: 'absolute', left: '-1rem', top: '1.25rem', width: '1rem', height: '2px', background: 'var(--ifm-border-color)' }} />
                    <div style={{ background: 'var(--ifm-background-color)', border: '1px solid var(--ifm-border-color)', borderLeft: '3px solid var(--ifm-color-primary)', borderRadius: '8px', padding: '0.875rem 1rem' }}>
                      <div style={{ marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '0.7rem', color: 'var(--ifm-font-color-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{node.tag}</span>
                        {node.badge && <span style={{ display: 'inline-block', fontSize: '0.7rem', fontWeight: 600, padding: '0.15rem 0.5rem', borderRadius: '999px', marginLeft: '0.5rem', background: 'color-mix(in srgb, var(--ifm-color-primary) 12%, transparent)', color: 'var(--ifm-color-primary)' }}>{node.badge}</span>}
                      </div>
                      <div style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--ifm-font-color-base)' }}>{node.title}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--ifm-font-color-secondary)', marginBottom: node.link ? '0.5rem' : '0' }}>{node.sub}</div>
                      {node.link && <a href={node.link.href} style={{ fontSize: '0.8rem', color: 'var(--ifm-color-primary)', textDecoration: 'none', fontWeight: 500 }}>{node.link.label} →</a>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};


# RAPath Singapore

**Singapore Medical Device Regulatory Reference**

RAPath SG is a plain English reference for Singapore medical device regulation under the **Health Products Act (Cap. 122D)** and the **Health Products (Medical Devices) Regulations 2010**. It is designed for regulatory affairs professionals, manufacturers, importers, wholesalers, registrants, and consultants navigating the Health Sciences Authority (HSA) framework.

This site does not replace official HSA sources. Every page links back to the authoritative legislative text or official HSA guidance. Think of RAPath SG as a structured, searchable index that helps you find what you need — then points you to the official source to verify it.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for requirements you navigate daily, with every claim linked to its legislative or regulatory source.

**Manufacturers (Singapore and overseas)** — understand what the Singapore regulatory framework requires of you, including product registration and dealer's licensing obligations, and how the framework relates to systems you may already know (TGA, FDA, CE, Health Canada).

**Importers and wholesalers** — understand when and why you need a dealer's licence, what Good Distribution Practice (GDP) means in practice, and how your obligations differ from the product registrant's obligations.

**Registrants** — understand the full registration lifecycle from classification and grouping through to evaluation route selection, SHARE submission, and post-market maintenance.

**Anyone new to Singapore medical device regulation** — start with [Start Here](./start-here/what-is-a-medical-device.md) for a guided introduction to the framework.

---

## What makes Singapore distinctive

Singapore's regulatory framework has several features that frequently surprise practitioners coming from other jurisdictions:

**The dual obligation model.** Unlike most other frameworks, Singapore separates *product registration* (the device's entry on the Singapore Medical Device Register) from *dealer's licensing* (the company's authorisation to manufacture, import, or wholesale). Both are mandatory. A registered device cannot be lawfully supplied without a licensed dealer, and a licensed dealer cannot supply an unregistered device. The [Dealer's Licence](./dealers-licence/overview.md) section covers this in full.

**Class A devices are exempt from registration — but not from notification.** Class A (lowest-risk) devices do not require product registration. However, companies that manufacture or import Class A devices must still submit a product notification via the SHARE portal. Many companies overlook this. See [Class A — Exemption and Notification](./start-here/class-a-exemption.md).

**Registration route depends heavily on overseas approvals.** Whether a Class B, C, or D device goes through Full, Abridged, Expedited, or Immediate evaluation depends on the number and type of approvals already held from HSA's five recognised overseas reference agencies (TGA, EU NB, Health Canada, MHLW, FDA). This is central to Singapore market entry strategy. See [Evaluation Routes](./pre-market/registration/evaluation-routes.md).

**Device grouping is a formal pre-submission decision.** Singapore has specific rules for grouping devices into a single registration application (Family, System, Group, Single, and several IVD variants). Grouping decisions affect fees, timelines, and ongoing change notification obligations. See [Device Grouping](./pre-market/grouping/grouping-overview.md).

---

## How to use this site

The site is structured around the regulatory lifecycle of a medical device in Singapore:

| Section | What it covers |
|---|---|
| [Start Here](./start-here/what-is-a-medical-device.md) | Definitions, regulatory framework, key roles, the dual obligation model, Class A notification, device lifecycle, glossary |
| [Pre-Market](./pre-market/classification/how-classification-works.md) | Classification (A/B/C/D), device grouping, registration via SHARE, evaluation routes, overseas reference agencies, clinical evidence, special device types including SaMD |
| [Post-Market](./post-market/overview.md) | Adverse event reporting, FSCAs, post-market surveillance, change notifications, labelling and advertising, Free Sale Certificates |
| [Dealer's Licence](./dealers-licence/overview.md) | Who needs a licence, manufacturer/importer/wholesaler distinctions, QMS and GDP requirements (ISO 13485 from SAC-accredited CAB or MDSAP required from Jan 2025), applying via SHARE, audit process |
| [Enforcement](./enforcement/overview.md) | HSA enforcement powers, compliance monitoring, penalties under the Health Products Act, responding to enforcement actions |
| [Legislation & Regulations](./legislation/health-products-act.md) | Health Products Act (Cap. 122D), HP(MD) Regulations 2010, related instruments, how to read Singapore legislation |
| [International & ASEAN](./international/overview.md) | Regulatory reliance, IMDRF, ASEAN AMDC, ASEAN CSDT, comparison of Singapore with TGA/FDA/CE/Health Canada |
| [Guidance Documents](./guidance/by-topic.md) | Full index of HSA guidance documents by topic and device class, forms, portals, fees and turnaround times |

---

## Where to start

**If you are new to Singapore medical device regulation:**
→ [What is a Medical Device?](./start-here/what-is-a-medical-device.md)

**If you need to understand the registration vs licensing distinction:**
→ [The Dual Obligation Model](./start-here/dual-obligation-model.md)

**If you need to classify a device:**
→ [How Classification Works](./pre-market/classification/how-classification-works.md)

**If you are working out which registration route applies:**
→ [Evaluation Routes](./pre-market/registration/evaluation-routes.md)

**If you need to apply for a dealer's licence:**
→ [Dealer's Licence — Overview](./dealers-licence/overview.md)

**If you need to report an adverse event:**
→ [Adverse Event Reporting — What Must Be Reported](./post-market/adverse-event-reporting/what-must-be-reported.md)

**If a Field Safety Corrective Action may be required:**
→ [FSCA — When to Report](./post-market/field-safety-corrective-actions/when-to-report.md)

**If you are an overseas manufacturer entering the Singapore market:**
→ [Singapore in the International Regulatory Landscape](./international/overview.md)

---

## Questions, corrections and discussions

RAPath SG is a community reference. If you find an error, have a regulatory question, or want to discuss a recent HSA change, use GitHub Discussions:

- [Ask a question](https://github.com/orgs/RAPath/discussions/new?category=questions)
- [Report an error](https://github.com/orgs/RAPath/discussions/new?category=corrections)
- [Discuss regulatory updates](https://github.com/orgs/RAPath/discussions/categories/regulatory-updates)

Regulatory affairs professionals who flag inaccuracies are the most valuable contributors to this project.

---

## Disclaimer

Content on this site is written with AI assistance and is intended as a navigation aid only. Always verify against official [HSA](https://www.hsa.gov.sg/medical-devices) and [Singapore Statutes Online](https://sso.agc.gov.sg) sources before making regulatory decisions. This site is not affiliated with the Health Sciences Authority or the Singapore Government. Not legal or regulatory advice.
