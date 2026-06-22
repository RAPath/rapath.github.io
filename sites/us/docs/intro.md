---
slug: /
sidebar_position: 1
title: Introduction
description: RAPath US — a plain English reference for FDA medical device regulation. What this site is, who it is for, and how to use it.
keywords: [FDA, medical devices, regulatory, 510k, PMA, CDRH, regulatory affairs]
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'FDA definition under section 201(h) of the FD&C Act — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'FDA CDRH structure, the FD&C Act, 21 CFR regulations, and overview of the device lifecycle.', link: { label: 'View framework', href: '/start-here/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'CDRH vs. CBER', sub: 'Some devices are regulated by CBER (biologics) rather than CDRH — know which centre applies.', link: { label: 'View CDRH vs CBER guide', href: '/start-here/cdrh-vs-cber' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I / II / III', title: 'How Classification Works', sub: 'FDA three-class system — 21 CFR product codes, intended use, and risk-based classification.', link: { label: 'View classification rules', href: '/pre-market/classification/how-classification-works' } },
      { tag: 'Classification', title: 'SaMD & Software Classification', sub: 'Digital health, SaMD, and CDS software — FDA's policy and classification framework.', link: { label: 'View digital health guide', href: '/digital-health/samd' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Pre-Market Pathway',
    nodes: [
      { tag: 'Pre-Market', badge: 'Class II', title: '510(k) Premarket Notification', sub: 'Substantial equivalence pathway — predicate device, comparison, and FDA review process.', link: { label: 'View 510(k) guide', href: '/pre-market/510k' } },
      { tag: 'Pre-Market', badge: 'Class III', title: 'Premarket Approval (PMA)', sub: 'PMA pathway for highest-risk Class III devices — valid scientific evidence of safety and effectiveness.', link: { label: 'View PMA guide', href: '/pre-market/pma' } },
      { tag: 'Pre-Market', title: 'De Novo Classification', sub: 'Novel low-to-moderate risk devices with no predicate — De Novo request process.', link: { label: 'View De Novo guide', href: '/pre-market/de-novo' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'When IDE trials are needed, foreign clinical data acceptability, and evidence standards.', link: { label: 'View evidence requirements', href: '/pre-market/clinical-evidence/what-is-required' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System (QMSR)',
    nodes: [
      { tag: 'QMS', badge: 'Feb 2026 transition', title: 'QMS Regulation (21 CFR Part 820)', sub: 'FDA QMSR aligns 21 CFR Part 820 with ISO 13485 — transition requirements and key changes.', link: { label: 'View QMSR overview', href: '/qms/overview' } },
      { tag: 'QMS', title: 'FDA Inspections (483 Observations)', sub: 'How FDA conducts inspections — 483 observations, warning letters, and consent decrees.', link: { label: 'View inspection guide', href: '/qms/fda-inspections' } },
      { tag: 'Establishment', title: 'Establishment Registration & Device Listing', sub: 'Annual establishment registration (FEI) and device listing requirements — 21 CFR Part 807.', link: { label: 'View registration guide', href: '/establishment-udi/registration-overview' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'MDR — Medical Device Reporting', sub: 'Mandatory Device Reports (MDRs) — what events must be reported to FDA and in what timeframe.', link: { label: 'View MDR guide', href: '/post-market/mdr/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'Recalls & Corrections', sub: 'FDA recall classification (Class I/II/III), mandatory reporting under 21 CFR Part 806.', link: { label: 'View recall guide', href: '/post-market/recalls/when-required' } },
      { tag: 'UDI', badge: 'Required', title: 'UDI System (GUDID)', sub: 'Unique Device Identification — labelling requirements, GUDID database, and compliance dates.', link: { label: 'View UDI guide', href: '/establishment-udi/udi-overview' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'FDA labelling rules — 21 CFR Part 801 mandatory fields and English language requirements.', link: { label: 'View labelling rules', href: '/establishment-udi/labelling-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Access',
    nodes: [
      { tag: 'Digital Health', title: 'Digital Health Framework', sub: 'FDA digital health policy — Software as a Medical Device, AI/ML, and PCCP guidance.', link: { label: 'View digital health guide', href: '/digital-health/framework' } },
      { tag: 'Special Access', title: 'Breakthrough Device Designation', sub: 'Expedited review pathway for novel devices addressing serious conditions with unmet needs.', link: { label: 'View breakthrough guide', href: '/special-access/breakthrough-device' } },
      { tag: 'Special Access', title: 'Emergency Use Authorization (EUA)', sub: 'EUA pathway for unapproved devices during public health emergencies.', link: { label: 'View EUA guide', href: '/special-access/eua' } },
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


# RAPath USA

**FDA Medical Device Regulatory Reference**

RAPath US is a plain English reference for FDA medical device regulation under the **Federal Food, Drug, and Cosmetic Act (FD&C Act)** and **21 CFR**. It is designed for regulatory affairs professionals, manufacturers, importers, distributors, and consultants who need to find and understand FDA requirements quickly.

This site does not replace official FDA sources. Every page links back to the authoritative legislative text or official FDA guidance. Think of RAPath US as a structured, searchable index that helps you find what you need — then points you to the official source to verify it.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for requirements you navigate daily, with every claim linked to its legislative source.

**Manufacturers (US and overseas)** — understand what the FDA requires of you, and how it relates to frameworks you may already know (EU MDR, TGA, Health Canada).

**Importers and distributors** — understand your establishment registration, device listing, and post-market obligations in the US.

**Anyone new to FDA medical device regulation** — start with [Start Here](/start-here/what-is-a-medical-device) for a guided introduction to the framework.

---

## How to use this site

The site is structured around the regulatory lifecycle of a medical device in the USA:

| Section | What it covers |
|---------|---------------|
| [Start Here](/start-here/what-is-a-medical-device) | Definitions, framework overview, who needs to comply, device lifecycle |
| [Pre-Market](/pre-market/classification/how-classification-works) | Classification, 510(k), De Novo, PMA, clinical evidence, special device types |
| [Post-Market](/post-market/overview) | MDR, recalls, 522 studies, labelling and advertising |
| [Quality System (QMSR)](/qms/overview) | 21 CFR Part 820, design controls, CAPA, FDA inspections |
| [Establishment, Listing & UDI](/establishment-udi/registration-overview) | Annual registration, device listing, foreign establishments, UDI |
| [Legislation & Regulations](/legislation/fdc-act) | FD&C Act, 21 CFR parts, FDASIA, MDUFA |
| [Guidance Documents](/guidance/by-topic) | FDA guidance index, eSTAR templates, MDUFA timelines |
| [Special Access & Designations](/special-access/breakthrough-device) | Breakthrough, HDE, EUA, Expanded Access |
| [International & Comparison](/international/overview) | IMDRF, FDA vs TGA/EU/HC/HSA, multi-market strategy |
| [Enforcement & Compliance](/enforcement/inspections) | Warning letters, 483s, consent decrees |
| [Digital Health & SaMD](/digital-health/framework) | SaMD, AI/ML, CDS policy, PCCPs |
| [What's New](/whats-new/regulatory-changes) | Recent changes, draft guidance, open dockets |

---

## What this site is not

- **Not legal or regulatory advice.** Always consult qualified regulatory counsel before making submission or compliance decisions.
- **Not affiliated with FDA.** This site is not produced by or on behalf of the U.S. Food and Drug Administration.
- **Not a substitute for official sources.** Every page links to the relevant FDA guidance, 21 CFR section, or FD&C Act provision — always verify there.

---

## Content currency

This site was last reviewed in **May 2026**. FDA guidance and regulations change frequently. Check [What's New](/whats-new/regulatory-changes) for recent updates.

:::warning Disclaimer
Content on this site is written with AI assistance and is intended as a navigation aid only. Always verify against official [FDA](https://www.fda.gov/medical-devices) sources before making regulatory decisio