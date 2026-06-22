---
title: Introduction
sidebar_position: 1
slug: /
description: Reference guide for Bangladesh medical device regulation under the DGDA — Drug and Cosmetics Act 2023, GHTF-based Class A–D classification, Authorized Representative obligations, quarterly review cycle.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'DGDA definition under the Drug Control Ordinance and Bangladesh medical device rules.', link: { label: 'Read definition', href: 'getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'How DGDA oversees medical devices — legal basis, organisational structure, and key obligations.', link: { label: 'View framework', href: 'getting-started/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Registration and licensing obligations for manufacturers, importers, traders, and distributors.', link: { label: 'Check obligations', href: 'getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'ASEAN-aligned', title: 'Classification Overview', sub: 'Class A / B / C / D — Bangladesh applies the ASEAN AMDD four-tier classification framework.', link: { label: 'View classification rules', href: 'classification/overview' } },
      { tag: 'Classification', title: 'IVD & Software Classification', sub: 'In vitro diagnostics and software as a medical device — specific rules and considerations.', link: { label: 'View IVD rules', href: 'classification/software-ivd' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Device Registration',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'Registration Overview', sub: 'The DGDA device registration process — application pathways, requirements, and timelines.', link: { label: 'View process', href: 'registration/overview' } },
      { tag: 'Registration', title: 'Dossier Requirements', sub: 'Documentation required for a DGDA registration submission.', link: { label: 'View dossier guide', href: 'registration/dossier-requirements' } },
      { tag: 'Registration', title: 'Registration Timelines', sub: 'Typical review periods and how to track your application status with DGDA.', link: { label: 'View timelines', href: 'registration/timeline' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'Clinical data and performance evidence requirements for DGDA registration.', link: { label: 'View requirements', href: 'pre-market/clinical-evidence' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System',
    nodes: [
      { tag: 'Quality System', badge: 'Mandatory', title: 'QMS Requirements', sub: 'ISO 13485-based quality management system requirements under DGDA rules.', link: { label: 'View QMS overview', href: 'quality-system/overview' } },
      { tag: 'Quality System', title: 'DGDA Inspections', sub: 'Manufacturing site inspection process — what auditors assess and how to prepare.', link: { label: 'View inspection guide', href: 'quality-system/dgda-inspections' } },
      { tag: 'Import', title: 'Import & Local Representative', sub: 'Import licences and local representative requirements for foreign manufacturers.', link: { label: 'View import requirements', href: 'import-local-rep/overview' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Vigilance & Adverse Events', sub: 'Incident reporting obligations — what must be reported to DGDA and within what timeframes.', link: { label: 'View reporting rules', href: 'post-market/vigilance' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance Plan', sub: 'Systematic PMS activities, data collection, and DGDA reporting requirements.', link: { label: 'View PMS guide', href: 'post-market/pms-plan' } },
      { tag: 'Post-Market', title: 'Change Notification', sub: 'When and how to notify DGDA of changes to a registered device.', link: { label: 'View change process', href: 'post-market/change-notification' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Mandatory labelling content and language requirements for Bangladesh.', link: { label: 'View labelling rules', href: 'post-market/labelling' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Resources',
    nodes: [
      { tag: 'Digital Health', title: 'Digital Health Framework', sub: 'DGDA approach to software products, mobile health apps, and connected medical devices.', link: { label: 'View framework', href: 'digital-health/framework' } },
      { tag: 'Pre-Market', title: 'Special Device Types', sub: 'IVDs, SaMD, combination products — specific rules and registration pathways.', link: { label: 'View special types', href: 'pre-market/special-device-types' } },
      { tag: 'Resources', title: 'Guidance & Resources', sub: 'DGDA guidance documents, forms, and useful regulatory reference links.', link: { label: 'View resources', href: 'guidance-resources/overview' } },
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


# Bangladesh Medical Device Regulation

> **Regulatory authority:** Directorate General of Drug Administration (DGDA), Ministry of Health & Family Welfare | **Primary law:** Drug and Cosmetics Act, 2023 | **Last reviewed:** May 2026 | *For reference only — not legal advice.*

Bangladesh regulates medical devices through the **Directorate General of Drug Administration (DGDA)**, operating under the Ministry of Health and Family Welfare. The primary legal framework is the **Drug and Cosmetics Act, 2023** (effective 18 September 2023), which replaced the legacy Drugs Act 1940 and significantly modernised Bangladesh's approach — most notably by **explicitly including software within the medical device definition**.


## Regulatory Pathway Map

<PathwayMap />

## Key Facts

| | |
|---|---|
| **Regulatory body** | DGDA, Ministry of Health & Family Welfare |
| **Primary law** | Drug and Cosmetics Act, 2023 (effective 18 Sep 2023) |
| **Classification** | Class A (low) · B · C · D (high) — GHTF-based |
| **Registration required** | Class B, C, D — mandatory · Class A — not required |
| **Local rep required** | Yes — Authorized Representative (local Bangladesh entity must hold the registration) |
| **Registration validity** | Class A: perpetual · Class B/C/D: 5 years |
| **QMS required** | ISO 13485 mandatory for Class B, C, D |
| **Review cycle** | Quarterly completeness review — not rolling |
| **Average timeline** | 4–6 months from submission |

## What This Site Covers

- **[Getting Started](/getting-started/what-is-a-medical-device)** — definitions, DGDA framework, software as a device, who must comply
- **[Classification](/classification/overview)** — GHTF Class A–D rules, IVD classification, software, combination products
- **[Registration Pathway](/registration/overview)** — AR appointment, dossier requirements, quarterly review, timelines, validity
- **[Pre-Market](/pre-market/clinical-evidence)** — clinical evidence by class, special device types (combination, sterile, implantable, IVDs)
- **[Quality System](/quality-system/overview)** — ISO 13485, GMP for local manufacturers, DGDA inspections
- **[Digital Health](/digital-health/framework)** — MDSW/SaMD framework, AI/ML, cybersecurity, IEC 62304
- **[Post-Market](/post-market/overview)** — vigilance, adverse event reporting, recalls, FSCAs, PMS plan, labelling, change notifications
- **[Import Licensing & Local Rep](/import-local-rep/overview)** — AR framework, import licence, manufacturing licence, DGDA certificates, enforcement
- **[Legislation](/legislation/overview)** — Drug and Cosmetics Act 2023, registration guidelines, GHTF instruments
- **[Guidance & Resources](/guidance-resources/overview)** — QMS requirements, essential principles, grouping rules, DGDA documents

:::info Software is a medical device in Bangladesh
The Drug and Cosmetics Act 2023 explicitly classifies **softwa