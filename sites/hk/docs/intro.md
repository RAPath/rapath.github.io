---
title: Introduction
sidebar_position: 1
slug: /
description: Reference guide for Hong Kong's Medical Device Administrative Control System (MDACS), managed by the Medical Device Division (MDD) of the Department of Health.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'Hong Kong definition under the Medical Device Ordinance — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'MDACS, Medical Device Division of DOH, and the Medical Device Ordinance explained.', link: { label: 'View framework', href: '/getting-started/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Obligations for manufacturers, importers, distributors, and Local Responsible Persons (LRPs).', link: { label: 'Check obligations', href: '/getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Four classes', title: 'How Classification Works', sub: 'Class I / II / III / IV for general devices — classification rules and criteria.', link: { label: 'View classification rules', href: '/classification/how-classification-works' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'In vitro diagnostic classification — Class A / B / C / D under the IVD sub-framework.', link: { label: 'View IVD classification', href: '/classification/ivd-classes' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'MDACS Listing',
    nodes: [
      { tag: 'MDACS', badge: 'Key step', title: 'MDACS Listing Overview', sub: 'Medical Device Administrative Control System — voluntary listing process and benefits.', link: { label: 'View listing overview', href: '/mdacs-listing/overview' } },
      { tag: 'MDACS', title: 'MDIS Portal Submission', sub: 'How to submit through the Medical Device Information System (MDIS) online portal.', link: { label: 'View portal guide', href: '/mdacs-listing/mdis-portal' } },
      { tag: 'MDACS', title: 'Expedited Reliance Route', sub: 'Fast-track listing based on approval by a recognised reference authority.', link: { label: 'View expedited route', href: '/mdacs-listing/expedited-reliance' } },
      { tag: 'Pre-Market', title: 'Technical Documentation', sub: 'Technical file requirements — device description, risk management, clinical evidence.', link: { label: 'View requirements', href: '/pre-market/technical-documentation' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System & LRP',
    nodes: [
      { tag: 'Quality System', badge: 'Required', title: 'QMS Requirements', sub: 'ISO 13485 or equivalent quality management system evidence required for MDACS listing.', link: { label: 'View QMS requirements', href: '/quality-system/overview' } },
      { tag: 'LRP', badge: 'Mandatory', title: 'Local Responsible Person Role', sub: 'Every listed device needs an LRP — responsibilities, eligibility, and appointment process.', link: { label: 'View LRP guide', href: '/lrp-market-access/lrp-role' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting', sub: 'What incidents must be reported to DOH, by whom, and within what timeframes.', link: { label: 'View reporting rules', href: '/post-market/adverse-event-reporting' } },
      { tag: 'Post-Market', title: 'FSCAs & Recalls', sub: 'Field safety corrective actions — when required, how to notify DOH, and recall process.', link: { label: 'View FSCA guide', href: '/post-market/fsca-recalls' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance Plan', sub: 'Proactive PMS plan requirements for MDACS-listed devices.', link: { label: 'View PMS requirements', href: '/post-market/pms-plan' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Hong Kong labelling rules — language, mandatory fields, and IFU requirements.', link: { label: 'View labelling rules', href: '/post-market/labelling' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Topics',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD & Digital Health', sub: 'How DOH approaches Software as a Medical Device, AI/ML tools, and connected devices.', link: { label: 'View SaMD guide', href: '/digital-health/samd-overview' } },
      { tag: 'Special Access', title: 'Special Device Exemptions', sub: 'Custom-made devices, clinical investigation exemptions, and other special provisions.', link: { label: 'View exemptions', href: '/special-access/exemptions' } },
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


# Hong Kong Medical Device Regulation

> **Regulatory authority:** Medical Device Division (MDD), Department of Health | **System:** MDACS | **Last reviewed:** May 2026 | *For reference only — not legal advice.*

Hong Kong regulates medical devices through the **Medical Device Administrative Control System (MDACS)**, an administrative framework that is technically voluntary but de facto mandatory for public procurement and broad market access. The **Medical Device Division (MDD)** of the Department of Health manages MDACS.


## Regulatory Pathway Map

<PathwayMap />

## Key Facts

| | |
|---|---|
| **Regulatory body** | Medical Device Division (MDD), Department of Health |
| **System** | MDACS (administrative, not statutory) |
| **Classification** | Class I–IV (general) · Class A–D (IVD) — IMDRF-aligned |
| **Local rep required** | Yes — Local Responsible Person (LRP) for foreign manufacturers |
| **Application fee** | None (MDD charges no fee) |
| **Procurement mandate** | Stage C from 23 March 2026 — mandatory listing for public DH tenders |

## What This Site Covers

- **[Getting Started](/getting-started/what-is-a-medical-device)** — definitions, who must comply, lifecycle overview
- **[Classification](/classification/how-classification-works)** — Class I–IV (TR-003) and Class A–D IVD (TR-004)
- **[MDACS Listing](/mdacs-listing/overview)** — standard and expedited reliance pathways, MDIS system
- **[Pre-Market](/pre-market/technical-documentation)** — technical documentation, essential principles, clinical evidence, special device types
- **[Quality System](/quality-system/overview)** — ISO 13485 requirements for manufacturers, LRP QMS obligations, GDP
- **[Post-Market](/post-market/overview)** — adverse event reporting, FSCAs, recalls, PMS plan, PMCF, labelling
- **[LRP & Market Access](/lrp-market-access/lrp-role)** — Local Responsible Person obligations, procurement strategy
- **[Legislation](/legislation/framework)** — MDACS Technical References, applicable ordinances
- **[Digital Health & SaMD](/digital-health/samd-overview)** — MDD approach to software and AI/ML, cybersecurity

:::info No standalone Medical Device Ordinance yet
Hong Kong does not yet have a statutory medical device law. A proposed Medical Devices Ordinance is under development. See [What's New](/whats-new/recent-changes) for the latest.
:::

---
*Part of the [RAPath](https://rapath.org/) suite — medical device regulatory reference.*
