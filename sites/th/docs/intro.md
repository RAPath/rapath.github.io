---
title: Introduction
sidebar_position: 1
slug: /
description: Reference guide for Thailand medical device regulation — Medical Device Act B.E. 2562 (2019), Thai FDA / MDCD, Class 1–4 framework, three approval pathways, CSDT dossier, Establishment License requirements.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'Definition under the Thai Medical Device Act B.E. 2562 (2019) — scope and exclusions.', link: { label: 'Read definition', href: 'getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'Thai FDA / MDCD structure, the Medical Device Act, and overview of licensing obligations.', link: { label: 'View framework', href: 'getting-started/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Import licence and establishment licensing obligations for manufacturers, importers, and distributors.', link: { label: 'Check obligations', href: 'getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'ASEAN-aligned', title: 'Classification Overview', sub: 'Thai FDA Class 1 / 2 / 3 system (aligned with ASEAN AMDD) — rules and criteria.', link: { label: 'View classification rules', href: 'classification/overview' } },
      { tag: 'Classification', title: 'Combination & SaMD Classification', sub: 'Combination products, software as a medical device, and borderline product rules.', link: { label: 'View SaMD rules', href: 'classification/combination-samd' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Pre-Market Licensing',
    nodes: [
      { tag: 'Pre-Market', badge: 'Key step', title: 'Three Licensing Pathways', sub: 'Overview of the standard licence, notification, and reliance (expedited) pathways for medical devices.', link: { label: 'View pathway overview', href: 'three-pathways/overview' } },
      { tag: 'Pre-Market', title: 'Expedited Routes', sub: 'ASEAN reliance and reference-country recognition — how to leverage prior approvals.', link: { label: 'View expedited routes', href: 'three-pathways/expedited-routes' } },
      { tag: 'Pre-Market', title: 'CSDT Technical Documentation', sub: 'Common Submission Dossier Template — structure and content requirements.', link: { label: 'View CSDT guide', href: 'csdt-documentation/overview' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System',
    nodes: [
      { tag: 'Quality System', badge: 'Mandatory from Jul 2024', title: 'QMS Requirements', sub: 'ISO 13485 is now mandatory for all licensed medical device manufacturers in Thailand.', link: { label: 'View QMS requirements', href: 'quality-system/overview' } },
      { tag: 'Quality System', title: 'MDCD Inspections', sub: 'How Thai FDA / MDCD conducts manufacturing site inspections and what is assessed.', link: { label: 'View inspection guide', href: 'quality-system/mdcd-inspections' } },
      { tag: 'Licensing', title: 'Establishment Licensing', sub: 'Importer and distributor licensing requirements — NBTC for wireless devices.', link: { label: 'View licensing guide', href: 'establishment-licensing/overview' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Vigilance & Adverse Events', sub: 'What must be reported to Thai FDA, reporting forms, and timeframe requirements.', link: { label: 'View reporting rules', href: 'post-market/vigilance' } },
      { tag: 'Post-Market', title: 'Recalls & FSCAs', sub: 'Thai FDA recall classification, mandatory recall process, and FSCA notification.', link: { label: 'View recall process', href: 'post-market/recalls' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance Plan', sub: 'PMS plan requirements — data collection, trend reporting, and renewal obligations.', link: { label: 'View PMS requirements', href: 'post-market/pms-plan' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Thai labelling rules — Thai language requirements, mandatory fields, and IFU rules.', link: { label: 'View labelling rules', href: 'post-market/labelling' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Topics',
    nodes: [
      { tag: 'Digital Health', title: 'Digital Health Framework', sub: 'Thai FDA approach to software, mobile health, AI/ML devices, and connected products.', link: { label: 'View framework', href: 'digital-health/framework' } },
      { tag: 'UDI', title: 'UDI Requirements', sub: 'Thailand UDI implementation timeline and labelling requirements for applicable devices.', link: { label: 'View UDI guide', href: 'udi/overview' } },
      { tag: 'Special Access', title: 'Special Access & Exemptions', sub: 'Compassionate use, clinical trial devices, and emergency access pathways in Thailand.', link: { label: 'View special access', href: 'special-access/overview' } },
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


# Thailand Medical Device Regulation

> **Regulatory authority:** Thai FDA / Medical Device Control Division (MDCD) | **Legislation:** Medical Device Act B.E. 2562 (2019), in force 15 February 2021 | **Last reviewed:** May 2026 | *For reference only — not legal advice.*

Thailand regulates medical devices through the **Medical Device Control Division (MDCD)** of the **Thai Food and Drug Administration (Thai FDA)**, under the Ministry of Public Health. The current legal framework — the **Medical Device Act B.E. 2562 (2019)** — came into full effect on **15 February 2021**, replacing the former framework and bringing Thailand into alignment with the **ASEAN Medical Device Directive (AMDD)**.


## Regulatory Pathway Map

<PathwayMap />

## Key Facts

| | |
|---|---|
| **Regulatory body** | Thai FDA / Medical Device Control Division (MDCD) |
| **Primary law** | Medical Device Act B.E. 2562 (2019) — in force 15 Feb 2021 |
| **Classification** | Class 1 (low) · 2 · 3 · 4 (high) — ASEAN AMDD |
| **Three pathways** | Listing (Class 1) · Notification (Class 2–3) · License (Class 4) |
| **Approval validity** | 5 years — all approval types |
| **Establishment License** | Mandatory for all manufacturers and importers |
| **AR required** | Yes — Thai Authorized Representative for foreign manufacturers |
| **CSDT dossier** | Common Submission Dossier Template (Full for Class 2–4) |
| **NBTC review** | Separate NBTC approval required for wireless/Bluetooth/Wi-Fi devices |
| **B.E. year system** | Thai calendar adds 543 to CE year (2021 CE = B.E. 2564) |

## What This Site Covers

- **[Getting Started](/getting-started/what-is-a-medical-device)** — definitions, Thai FDA/MDCD structure, B.E. year guide, ASEAN alignment, who must comply
- **[Classification](/classification/overview)** — ASEAN AMDD Class 1–4, IVD rules, Positive List, SaMD, combination products
- **[Three Approval Pathways](/three-pathways/overview)** — Listing / Notification / License, 5-year validity, expedited/reliance route
- **[CSDT & Documentation](/csdt-documentation/overview)** — Full CSDT format, grouping rules, QMS, essential principles, clinical evidence
- **[Establishment Licensing](/establishment-licensing/overview)** — mandatory Establishment License, Thai AR, e-submission, NBTC
- **[Quality System](/quality-system/overview)** — ISO 13485, Thai GMP, MDCD inspections
- **[Digital Health](/digital-health/framework)** — SaMD framework, AI/ML, cybersecurity, IEC 62304
- **[Post-Market](/post-market/overview)** — vigilance & AE reporting, recalls, PMS plan, labelling, Thai language, renewal
- **[UDI](/udi/overview)** — UDI requirements for Class 2–4 (draft guidance March 2025, 2-year transition)
- **[Special Access](/special-access/overview)** — emergency authorisation, compassiona