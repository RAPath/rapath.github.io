---
slug: /
sidebar_position: 1
title: Introduction
description: A practical regulatory reference for medical devices in Vietnam, covering Decree 98/2021/ND-CP, DAV registration, import licensing, and post-market obligations.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'DAV/MOH definition under Decree 98/2021/ND-CP — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'DAV, MOH, Decree 98/2021, and the Vietnamese medical device regulatory structure.', link: { label: 'View framework', href: '/getting-started/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Obligations for Vietnamese authorised representatives, importers, and foreign manufacturers.', link: { label: 'Check obligations', href: '/getting-started/who-must-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'ASEAN-aligned', title: 'Classification Overview', sub: 'Type A / B / C / D system — ASEAN-aligned classification applied by DAV.', link: { label: 'View classification rules', href: '/device-classification/classification-overview' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'In vitro diagnostic classification — specific rules and Type A–D criteria for IVDs.', link: { label: 'View IVD rules', href: '/device-classification/ivd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Market Access Pathway',
    nodes: [
      { tag: 'Market Access', badge: 'Key step', title: 'Overview: Declaration vs. Registration', sub: 'Type A/B → Declaration (Công bố); Type C/D → Marketing Authorisation (Đăng ký lưu hành).', link: { label: 'View pathway overview', href: '/market-access/overview' } },
      { tag: 'Market Access', title: 'Declaration — Type A & B', sub: 'Công bố pathway for lower-risk devices — process, documents, and DMEC submission.', link: { label: 'View declaration guide', href: '/market-access/declaration-type-a-b' } },
      { tag: 'Market Access', title: 'Marketing Authorisation — Type C & D', sub: 'Đăng ký lưu hành pathway for higher-risk devices — CSDT dossier and DAV review.', link: { label: 'View registration guide', href: '/market-access/marketing-authorisation-type-c-d' } },
      { tag: 'Market Access', title: 'Clinical Evidence', sub: 'Clinical data requirements for Type C/D registration under DAV rules.', link: { label: 'View requirements', href: '/market-access/clinical-evidence' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System & Local Rep',
    nodes: [
      { tag: 'Quality System', badge: 'Required', title: 'QMS Overview', sub: 'ISO 13485 / GMP evidence required for Type C/D registration dossiers.', link: { label: 'View QMS requirements', href: '/quality-management/qms-overview' } },
      { tag: 'Local Rep', badge: 'Mandatory', title: 'Authorised Representative', sub: 'Vietnamese authorised representative — legal obligations, DMEC account, and responsibilities.', link: { label: 'View AR requirements', href: '/import-customs-distribution/authorised-representative' } },
      { tag: 'Portal', title: 'DMEC Portal', sub: 'National Medical Device Information System — how to submit declarations and registrations online.', link: { label: 'View DMEC guide', href: '/import-customs-distribution/dmec-portal' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Incident Reporting', sub: 'Adverse event and incident reporting obligations to DAV — timeframes and process.', link: { label: 'View reporting rules', href: '/post-market/incident-reporting' } },
      { tag: 'Post-Market', title: 'FSCAs & Recalls', sub: 'Field safety corrective actions — DAV notification process and recall coordination.', link: { label: 'View FSCA guide', href: '/post-market/fsca-recalls' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Vietnamese labelling rules — Vietnamese language requirements and mandatory label content.', link: { label: 'View labelling rules', href: '/post-market/labelling' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'Proactive PMS activities and data collection obligations under Decree 98/2021.', link: { label: 'View PMS requirements', href: '/post-market/post-market-surveillance' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Access',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD & Digital Health', sub: 'DAV approach to software as a medical device, AI/ML devices, and connected products.', link: { label: 'View SaMD guide', href: '/digital-health/samd-overview' } },
      { tag: 'ASEAN', title: 'ASEAN CSDT Alignment', sub: "Vietnam's role in ASEAN AMDD and CSDT common dossier format.", link: { label: 'View ASEAN guide', href: '/asean-international/asean-csdt' } },
      { tag: 'Special Access', title: 'Emergency Import', sub: 'Emergency import provisions for unregistered devices in urgent situations.', link: { label: 'View emergency import guide', href: '/special-access/emergency-import' } },
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


# Vietnam Medical Device Regulation

Welcome to the RAPath guide for **Vietnam** — a plain-English reference for manufacturers, importers, distributors, and regulatory professionals navigating the Vietnamese medical device regulatory framework.


## Regulatory Pathway Map

<PathwayMap />

## Who regulates medical devices in Vietnam?

Medical devices in Vietnam are governed by the **Ministry of Health (MOH)** through the **Drug Administration of Vietnam (DAV)**. Provincial-level health departments also play an active role in local enforcement and market surveillance.

## The core legislation

The primary law is **Decree 98/2021/ND-CP** on medical device management, which came into force on **1 January 2022**. It replaced the earlier Decree 36/2016/ND-CP and introduced a streamlined dual-track system:

- **Declaration (Công bố)** — for lower-risk Type A and Type B devices
- **Marketing Authorisation (Đăng ký lưu hành)** — for higher-risk Type C and Type D devices

Decree 03/2023/ND-CP introduced further amendments, and several MOH Circulars provide procedural detail on import, clinical trials, and classification.

## What this site covers

| Section | What you'll find |
|---|---|
| [Getting Started](getting-started/what-is-a-medical-device) | Definitions, framework overview, who must comply |
| [Device Classification](device-classification/classification-overview) | Type A–D rules, IVD classification, borderline devices |
| [Market Access](market-access/overview) | Declaration and registration pathways, DMEC portal, clinical evidence |
| [Import, Customs & Distribution](import-customs-distribution/authorised-representative) | Authorised representative, import permits, GDP |
| [Post-Market](post-market/overview) | Vigilance, FSCA, labelling, change notification |
| [Quality Management](quality-management/qms-overview) | ISO 13485, GMP, inspections |
| [Legislation](legislation/decree-98-2021) | Decree 98/2021, key circulars, procurement law |
| [ASEAN & International](asean-international/vietnam-asean-landscape) | AMDD, CSDT, international comparison |
| [Digital Health & SaMD](digital-health/samd-overview) | Software devices, AI/ML, cybersecurity |
| [Special Access](special-access/emergency-import) | Emergency import, compassionate use, donations |
| [Resources](resources/glossary) | Glossary, legislation list, useful links |

## Important disclaimer

:::warning Legal disclaimer
This site is a **regulatory reference resource only** — it is not legal advice. Regulations change frequently. Always verify current requirements directly with the [Drug Administration of Vietnam (DAV)](https://dav.gov.vn) or consult a qualified regulatory professional before making compliance decisions.
:::

## Questions or corrections?

Found an error or want to discuss a regulatory question? Use **GitHub Discussions** on the [RAPath hub repository](https://github.com/orgs/RAPath/discussions/new?category=questions).
