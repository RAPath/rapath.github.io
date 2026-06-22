---
title: Introduction
slug: /
sidebar_position: 1
description: Reference guide for New Zealand medical device regulation under Medsafe — WAND notification system, Sponsor model, Medicines Act 1981, and the upcoming Medical Products Bill.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'Definition under the Medicines Act 1981 and WAND Regulations 2003 — scope and key terms.', link: { label: 'Read definition', href: '/getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework Overview', sub: 'Medsafe, WAND notification system, and how NZ differs from other markets.', link: { label: 'View framework', href: '/getting-started/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Unique to NZ', title: 'Who Must Comply? (Sponsor Model)', sub: 'In New Zealand, a local Sponsor must notify and take responsibility for devices.', link: { label: 'Check obligations', href: '/getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: '22 rules', title: 'How Classification Works', sub: 'New Zealand uses 22 classification rules across five device classes (I, IIa, IIb, III, AIMD).', link: { label: 'View classification rules', href: '/device-classification/how-classification-works' } },
      { tag: 'Classification', title: 'The 22 Classification Rules', sub: 'Detailed walkthrough of all 22 rules used to determine device class.', link: { label: 'View all 22 rules', href: '/device-classification/the-22-rules' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'Separate classification approach for in vitro diagnostic devices in New Zealand.', link: { label: 'View IVD rules', href: '/device-classification/ivd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Market Notification (WAND)',
    nodes: [
      { tag: 'Market Entry', badge: 'Key step', title: 'WAND Notification Overview', sub: 'WAND is a notification (not approval) system — understanding what it is and what it is not.', link: { label: 'View WAND overview', href: '/market-entry/wand-overview' } },
      { tag: 'Market Entry', title: 'WAND Submission Process', sub: 'Step-by-step guide to completing a WAND notification via the Medsafe online system.', link: { label: 'View submission guide', href: '/market-entry/wand-submission-process' } },
      { tag: 'Market Entry', title: 'Conformity Evidence', sub: 'What conformity evidence is required — CE marking, TGA clearance, or ISO 13485 certificates.', link: { label: 'View evidence requirements', href: '/market-entry/conformity-evidence' } },
      { tag: 'Market Entry', title: 'Exempt Devices', sub: 'Devices that do not require WAND notification — categories and conditions.', link: { label: 'View exemptions', href: '/market-entry/exempt-devices' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System & Sponsor',
    nodes: [
      { tag: 'Quality System', title: 'Quality System Overview', sub: 'NZ does not mandate ISO 13485 but requires conformity evidence demonstrating QMS compliance.', link: { label: 'View QMS guide', href: '/quality-system/overview' } },
      { tag: 'Sponsor', badge: 'Mandatory', title: 'What is a Sponsor?', sub: 'The local Sponsor is the legal entity responsible for the device in New Zealand.', link: { label: 'View sponsor guide', href: '/sponsor-obligations/what-is-a-sponsor' } },
      { tag: 'Sponsor', title: 'Appointing a Sponsor', sub: 'How foreign manufacturers appoint and work with a New Zealand Sponsor.', link: { label: 'View appointment guide', href: '/sponsor-obligations/appointing-a-sponsor' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting', sub: 'When and how to report adverse events and near-misses to Medsafe.', link: { label: 'View reporting guide', href: '/post-market/adverse-event-reporting' } },
      { tag: 'Post-Market', title: 'Recalls & FSCAs', sub: 'Recall initiation, Medsafe notification, and WAND update requirements.', link: { label: 'View recall process', href: '/post-market/recalls-and-fscas' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'Proactive PMS activities and data collection obligations for Sponsors.', link: { label: 'View PMS requirements', href: '/post-market/post-market-surveillance' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Topics',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD & Digital Health', sub: 'Medsafe approach to Software as a Medical Device and mobile health products.', link: { label: 'View SaMD guide', href: '/special-topics/samd-digital-health' } },
      { tag: 'Compliance', title: 'Enforcement & Compliance', sub: 'Medsafe enforcement powers, penalties, and compliance expectations for Sponsors.', link: { label: 'View enforcement guide', href: '/special-topics/enforcement-compliance' } },
      { tag: 'Legislation', title: 'Medical Products Bill', sub: 'New Zealand's upcoming reform — what the Medical Products Bill means for device regulation.', link: { label: 'View bill overview', href: '/legislation/medical-products-bill' } },
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


# New Zealand Medical Device Regulation

> **Regulatory authority:** Medsafe (Ministry of Health) | **System:** WAND notification | **Legislation:** Medicines Act 1981 | **Last reviewed:** May 2026 | *For reference only — not legal advice.*

New Zealand regulates medical devices through **Medsafe** (New Zealand Medicines and Medical Devices Safety Authority), an agency within the Ministry of Health. The system is built on **notification, not approval** — most devices must be registered in the WAND database before supply, but there is no pre-market approval process comparable to the EU, US, UK, or Australia.


## Regulatory Pathway Map

<PathwayMap />

## Key Facts

| | |
|---|---|
| **Regulatory body** | Medsafe, Ministry of Health |
| **Legislation** | Medicines Act 1981 · WAND Regulations 2003 |
| **Market entry** | WAND notification (not approval) |
| **Local rep required** | Yes — New Zealand Sponsor carries full regulatory accountability |
| **ISO 13485 required?** | No mandatory requirement — but strongly expected by good practice |
| **UDI required?** | No — NZ has no UDI framework |
| **Upcoming reform** | Medical Products Bill (expected to introduce formal approval pathways) |

## What This Site Covers

- **[Getting Started](/getting-started/what-is-a-medical-device)** — definitions, who must comply, lifecycle, regulatory framework overview
- **[Device Classification](/device-classification/how-classification-works)** — the 22 classification rules, IVD classification, special device types
- **[Market Entry (WAND)](/market-entry/wand-overview)** — WAND database, submission process, exempt devices, conformity evidence, changing sponsors
- **[Sponsor Obligations](/sponsor-obligations/what-is-a-sponsor)** — Sponsor role, appointing a Sponsor, technical documentation
- **[Quality System](/quality-system/overview)** — NZ's conformity evidence approach, sponsor quality obligations, GDP, Medical Products Bill changes
- **[Post-Market](/post-market/adverse-event-reporting)** — adverse event reporting, recalls and FSCAs, labelling and advertising, post-market surveillance
- **[Special Topics](/special-topics/enforcement-compliance)** — enforcement and compliance, SaMD and digital health, TTMRA and Australia, NZ in the global landscape
- **[Legislation](/legislation/medicines-act-1981)** — Medicines Act 1981, WAND Regulations 2003, related legislation, Medical Products Bill
- **[Resources](/resources/medsafe-guidance)** — Medsafe guidance documents, useful links

## What Makes New Zealand Unique

New Zealand's model is built around three pillars — **notification, Sponsor accountability, and post-market oversight** — rather than pre-market approval. This creates important practical differences:

- **No pre-market approval** for most devices — WAND notification is required, not an application reviewed by Medsafe
- **No ISO 13485 mandate** — Medsafe does not require QMS certification upfront, but expects it can be demonstrated on request
- **Sponsor model** — a NZ-based Sponsor holds all legal responsibility; the overseas manufacturer is not directly regulated by Medsafe
- **No UDI framework** — NZ has no UDI requirement; the labelling standard is GHTF/SG1/N43:2005
- **Medical Products Bill** — major reform underway to introduce formal approva