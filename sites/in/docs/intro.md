---
id: intro
slug: /
sidebar_position: 1
title: Introduction
description: RAPath IN — a plain English reference for India medical device regulation under CDSCO. What this site is, who it is for, and how to use it.
keywords: [CDSCO, medical devices, India, regulatory, MDR 2017, D&C Act, SUGAM]
---
import React from 'react';

const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'CDSCO definition under the Drugs and Cosmetics Act (Section 3b) and MDR 2017.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'CDSCO national oversight and State Licensing Authorities (SLAs) — who regulates what.', link: { label: 'View framework', href: '/start-here/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'CDSCO vs. State Licensing Authorities', sub: 'Which devices require central CDSCO approval vs. state-level SLA licence — a critical distinction.', link: { label: 'View CDSCO vs SLA guide', href: '/start-here/cdsco-vs-sla' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class A–D', title: 'How Classification Works', sub: 'CDSCO Class A / B / C / D system under MDR 2017 — classification rules and criteria.', link: { label: 'View classification rules', href: '/pre-market/classification/how-classification-works' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Import Registration & Licence',
    nodes: [
      { tag: 'Pre-Market', badge: 'Key step', title: 'Import Licence (Form MD-15)', sub: 'Import registration (Form MD-14/15) — the CDSCO pathway for imported devices.', link: { label: 'View import licence guide', href: '/pre-market/import-registration' } },
      { tag: 'Pre-Market', title: 'Manufacturing Licence', sub: 'Domestic manufacturer licence requirements — Class A/B (SLA) and Class C/D (CDSCO).', link: { label: 'View manufacturing licence guide', href: '/pre-market/manufacturing-licence' } },
      { tag: 'Pre-Market', title: 'Technical Documentation', sub: 'CDSCO technical file requirements — essential principles, risk management, clinical evidence.', link: { label: 'View tech doc guide', href: '/pre-market/technical-documentation/sted-overview' } },
      { tag: 'Pre-Market', title: 'Clinical Investigation', sub: 'When clinical investigations in India are required — ClinicalTrials.in, ICMR, and CDSCO approval.', link: { label: 'View clinical investigation guide', href: '/pre-market/clinical-investigation/when-clinical-data-required' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System & GMP',
    nodes: [
      { tag: 'QMS', badge: 'Schedule 5 GMP', title: 'QMS Overview', sub: 'Schedule 5 (MDR 2017) GMP requirements — India-specific QMS aligned with ISO 13485.', link: { label: 'View QMS overview', href: '/qms/overview' } },
      { tag: 'QMS', title: 'CDSCO Inspections (SLA Audits)', sub: 'How CDSCO and State Licensing Authorities conduct GMP inspections and what is assessed.', link: { label: 'View inspection guide', href: '/qms/sla-audits' } },
      { tag: 'QMS', title: 'ICMED Scheme', sub: 'NABL-accredited certification scheme for Indian medical device QMS — optional but recognised.', link: { label: 'View ICMED guide', href: '/qms/icmed-scheme' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Medical Device Vigilance', sub: 'CDSCO vigilance reporting — adverse event reporting obligations and SUGAM portal submission.', link: { label: 'View vigilance guide', href: '/post-market/vigilance/mdvp-overview' } },
      { tag: 'Post-Market', title: 'Recalls & FSCAs', sub: 'Recall obligations under MDR 2017 — CDSCO notification process and execution requirements.', link: { label: 'View recall guide', href: '/post-market/recalls/voluntary-vs-directed' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'PMS plan requirements under CDSCO guidance — data collection and periodic reporting.', link: { label: 'View PMS guide', href: '/post-market/post-market-surveillance/pms-plan' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'CDSCO labelling rules — Hindi/English mandatory fields, IFU, and UDI requirements.', link: { label: 'View labelling guide', href: '/post-market/labelling/schedule-3-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Access',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD & Digital Health', sub: 'CDSCO approach to software as a medical device, AI/ML devices, and mobile medical apps.', link: { label: 'View digital health guide', href: '/digital-health/framework' } },
      { tag: 'Special Access', title: 'Compassionate Use', sub: 'Access pathway for unregistered devices for patients with serious or life-threatening conditions.', link: { label: 'View compassionate use guide', href: '/special-access/compassionate-use' } },
      { tag: 'Special Access', title: 'Emergency Authorisation', sub: 'Emergency use authorisation pathway for unregistered devices during public health crises.', link: { label: 'View emergency authorisation guide', href: '/special-access/emergency-authorisation' } },
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


# RAPath India

**India Medical Device Regulatory Reference**

RAPath IN is a plain English reference for medical device regulation in India under the **Drugs and Cosmetics Act 1940 (D&C Act)** and the **Medical Devices Rules 2017 (MDR 2017)**. It is designed for regulatory affairs professionals, manufacturers, importers, distributors, and consultants who need to find and understand CDSCO requirements quickly.

This site does not replace official CDSCO sources and is not a substitute for obtaining independent legal or regulatory advice. Every page links back to the authoritative legislative text or official guidance. Think of RAPath IN as a structured, searchable index that helps you find what you need — then points you to the official source to verify it before implementation.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for requirements you navigate daily, with every claim linked to its legislative source.

**Manufacturers (Indian and overseas)** — understand what CDSCO requires of you, and how it relates to frameworks you may already know (EU MDR, TGA, FDA, HSA).

**Importers and distributors** — understand your import licence, Indian Authorised Representative (IAR) obligations, SUGAM portal workflow, and post-market responsibilities.

**Anyone new to India medical device regulation** — start with [Start Here](/start-here/what-is-a-medical-device) for a guided introduction to the framework.

---

## How to use this site

The site is structured around the regulatory lifecycle of a medical device in India:

| Section | What it covers |
|---|---|
| [Start Here](/start-here/what-is-a-medical-device) | Definitions, D&C Act, CDSCO vs SLA split, framework overview, device lifecycle |
| [Pre-Market](/pre-market/classification/how-classification-works) | Classification, import registration (MD-14/15), manufacturing licence, technical docs, clinical investigation |
| [Post-Market](/post-market/vigilance/mdvp-overview) | MDVP vigilance, PMS, recalls, labelling, UDI |
| [Quality System (GMP)](/qms/overview) | Schedule 5 GMP, ICMED, ISO 13485, inspections, PLI scheme |
| [Import, Export & SUGAM](/import-export-sugam/import-licence/class-b-c-d-md-14) | Import licence, IAR, SUGAM portal, export certificates |
| [Legislation & Regulations](/legislation/dc-act) | D&C Act, MDR 2017 all chapters & schedules, ND&CT Rules, amendments |
| [Guidance Documents](/guidance/by-topic) | CDSCO guidance, BIS standards, SUGAM forms (MD-1 to MD-48), fee schedule |
| [Special Access & Designations](/special-access/compassionate-use) | Compassionate use, emergency authorisation, AYUSH borderline devices |
| [International & Comparison](/international/overview) | IMDRF, India vs FDA/TGA/EU, MRA status, multi-market strategy |
| [Enforcement & Compliance](/enforcement/inspections) | CDSCO inspections, show-cause notices, suspension, appeals |
| [Digital Health & SaMD](/digital-health/framework) | SaMD, AI/ML devices, telemedicine, NDHM interface |
| [What's New](/whats-new/regulatory-changes) | Recent changes, new circulars, draft rules, UDI & PLI tracker |

---

## What this site is not

- **Not legal or regulatory advice.** Always consult a qualified regulatory professional before making submission or compliance decisions.
- **Not affiliated with CDSCO or the Government of India.** This site is not produced by or on behalf of the Central Drugs Standard Control Organisation.
- **Not a substitute for official sources.** Every page links to the relevant CDSCO guidance, MDR 2017 rule, or D&C Act provision — always verify there.

---

## Content currency

This site was last reviewed in **May 2026**. CDSCO guidance and regulations change frequently. Check [What's New](/whats-new/regulatory-changes) for recent updates.

:::warning Disclaimer
Content on this site is written with AI assistance and is intended as a navigation aid only. Always verify against official [CDSCO](https://cdsco.gov.in) sources before making regulatory decisio

