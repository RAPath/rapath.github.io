---
title: Introduction
sidebar_position: 1
slug: /
description: Reference guide for Sri Lanka medical device regulation under the NMRA — NMRA Act No. 5 of 2015, two-step market entry, MAH obligations, reliance pathway, and MDEC review process.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'NMRA definition under the National Medicines Regulatory Authority Act — scope and key terms.', link: { label: 'Read definition', href: '/getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'NMRA structure, the two-step market entry process, and applicable Sri Lankan law.', link: { label: 'View framework', href: '/getting-started/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Obligations for MAHs, importers, and local representatives under NMRA rules.', link: { label: 'Check obligations', href: '/getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'EU-derived', title: 'Classification Overview', sub: 'Sri Lanka uses an EU-derived four-class system — classification rules and criteria.', link: { label: 'View classification rules', href: '/classification/overview' } },
      { tag: 'Classification', title: 'SaMD & Borderline Products', sub: 'Software as a medical device and borderline product classification considerations.', link: { label: 'View SaMD rules', href: '/classification/samd-borderline' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Market Registration',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'Registration Overview', sub: 'NMRA two-step process: Import Licence then Registration Certificate — pathway summary.', link: { label: 'View registration process', href: '/registration/overview' } },
      { tag: 'Registration', title: 'Reliance Pathway', sub: 'Expedited review via reliance on reference authority approvals (TGA, FDA, CE, etc.).', link: { label: 'View reliance route', href: '/registration/reliance-pathway' } },
      { tag: 'Registration', title: 'Consolidated Dossier', sub: 'What documentation is required for an NMRA registration dossier.', link: { label: 'View dossier guide', href: '/registration/consolidated-dossier' } },
      { tag: 'Pre-Market', title: 'Technical Documentation', sub: 'Technical file requirements — risk management, performance data, and labelling.', link: { label: 'View requirements', href: '/pre-market/technical-documentation' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'Clinical data requirements — when clinical investigation data vs. literature is sufficient.', link: { label: 'View requirements', href: '/pre-market/clinical-evidence' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System',
    nodes: [
      { tag: 'Quality System', badge: 'Required', title: 'QMS Requirements', sub: 'NMRA quality system requirements — ISO 13485 or equivalent GMP evidence.', link: { label: 'View QMS requirements', href: '/quality-system/overview' } },
      { tag: 'MAH', title: 'MAH Role & Obligations', sub: 'Marketing Authorisation Holder responsibilities — regulatory contact, vigilance, recalls.', link: { label: 'View MAH guide', href: '/mah-facility/mah-role' } },
      { tag: 'MAH', title: 'Foreign Facility Requirements', sub: 'Overseas manufacturing site documentation and inspection requirements for NMRA.', link: { label: 'View foreign facility guide', href: '/mah-facility/foreign-facility' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Vigilance & Adverse Events', sub: 'Incident reporting obligations to NMRA — timeframes and notification requirements.', link: { label: 'View reporting rules', href: '/post-market/vigilance' } },
      { tag: 'Post-Market', title: 'Registration Maintenance', sub: 'Renewal timelines, fee obligations, and maintaining your NMRA registration.', link: { label: 'View maintenance guide', href: '/post-market/registration-maintenance' } },
      { tag: 'Post-Market', title: 'Labelling & Advertising', sub: 'Sri Lanka labelling rules — mandatory fields, language, and advertising restrictions.', link: { label: 'View labelling rules', href: '/post-market/labelling-advertising' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Topics',
    nodes: [
      { tag: 'Digital Health', title: 'Digital Health Framework', sub: 'NMRA approach to software, mobile health, and digital medical device products.', link: { label: 'View framework', href: '/digital-health/framework' } },
      { tag: 'Enforcement', title: 'Enforcement & Compliance', sub: 'NMRA enforcement powers, penalties, and post-market compliance obligations.', link: { label: 'View enforcement guide', href: '/enforcement/overview' } },
      { tag: 'Special Access', title: 'Special Access & Exemptions', sub: 'Exemptions for unregistered devices — radiation emitting devices and special provisions.', link: { label: 'View special access', href: '/special-access/exemptions' } },
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


# Sri Lanka Medical Device Regulation

> **Regulatory authority:** National Medicines Regulatory Authority (NMRA) | **Legislation:** NMRA Act No. 5 of 2015 | **Last reviewed:** May 2026 | *For reference only — not legal advice.*

Sri Lanka regulates medical devices through the **National Medicines Regulatory Authority (NMRA)**, an independent statutory body under the Ministry of Health established by the NMRA Act No. 5 of 2015. Sri Lanka's framework is distinctive in requiring **two separate regulatory steps** before commercial supply: first a **Registration Certificate**, then a separate **Import Licence**. All foreign manufacturers must appoint a Sri Lanka-based **Marketing Authorization Holder (MAH)** who carries full regulatory accountability.


## Regulatory Pathway Map

<PathwayMap />

## Key Facts

| | |
|---|---|
| **Regulatory body** | NMRA, Ministry of Health |
| **Legislation** | NMRA Act No. 5 of 2015 |
| **Classification** | General: Listed / Class I / IIa / IIb / III (EU-derived) · IVD: Class A / B / C / D |
| **Two-step entry** | Step 1: Registration Certificate → Step 2: Import Licence |
| **MAH required** | Yes — Sri Lanka-based MAH holds all registrations |
| **Foreign facility** | Mandatory NMRA site registration before product application |
| **Reliance pathway** | Yes — from October 2025 (US · UK · AU · CA · JP · EU · SG · NO · CH) |
| **Min. timeline** | 6 months (full) · Shorter via reliance for Class I/IIa/IIb |
| **Advertising** | Prior written NMRA approval mandatory — monthly committee review |

## What This Site Covers

- **[Getting Started](/getting-started/what-is-a-medical-device)** — definitions, NMRA structure, MAH model, two-step market entry
- **[Classification](/classification/overview)** — EU-derived general classes + IVD A–D, SaMD, borderline
- **[Registration Pathway](/registration/overview)** — MAH, consolidated dossier, MDEC review, reliance, foreign facility, import licence
- **[Pre-Market Requirements](/pre-market/technical-documentation)** — technical docs, clinical evidence, special device types
- **[Quality System](/quality-system/overview)** — ISO 13485, manufacturing site registration, GMP inspection / waiver, GDP
- **[Digital Health](/digital-health/framework)** — SaMD framework, AI/ML, cybersecurity, IEC 62304
- **[Post-Market](/post-market/overview)** — vigilance, FSCAs, PMS, advertising controls, annual fees
- **[MAH & Facility Oversight](/mah-facility/mah-role)** — MAH obligations, NMRA site registration, GDP, MDEC, price regulation
- **[Enforcement](/enforcement/overview)** — Market Control Division, enforcement actions, penalties, import interception
- **[Legislation](/legislation/nmra-act)** — NMRA Act, classification guidelines, F-MDR-035, reliance guidelines
- **[Special Access](/special-access/exemptions)** — WOR, radiation devices, custom-made devices

---
*Part of the [RAPath](https://rapath.org/) suite.*

Post-Market Requirements

After Registration Certificate issuance, the MAH is responsible for: (1) reporting all adverse events to NMRA within speci