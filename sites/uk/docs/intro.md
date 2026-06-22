---
sidebar_position: 0
slug: /
title: Introduction
description: >
  RAPath UK — a plain English reference for UK medical device regulation under the UK MDR
  2002, MHRA, UKCA marking, UK Approved Bodies, and the Northern Ireland / Windsor Framework.
  What this site is, who it is for, and how to use it.
tags: [uk-mdr, introduction]
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'UK definition under the UK MDR 2002 (as amended) — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'MHRA, UK MDR 2002, and the post-Brexit Great Britain / Northern Ireland regulatory landscape.', link: { label: 'View framework', href: '/start-here/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Post-Brexit', title: 'Great Britain vs. Northern Ireland', sub: 'Northern Ireland follows EU MDR/IVDR under the Windsor Framework — key difference for compliance.', link: { label: 'View GB vs NI guide', href: '/start-here/great-britain-vs-northern-ireland' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'UK MDR Schedule 2', title: 'Classification Rules', sub: 'UK classification rules (Schedule 2 of UK MDR 2002) — Class I / IIa / IIb / III and AIMD.', link: { label: 'View classification rules', href: '/legislation/schedule-2-classification-rules' } },
      { tag: 'Classification', title: 'What is an IVD?', sub: 'IVD scope and classification under UK MDR 2002 — List A, List B, and self-test devices.', link: { label: 'View IVD guide', href: '/start-here/what-is-an-ivd' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'UKCA Marking & MHRA Registration',
    nodes: [
      { tag: 'Pre-Market', badge: 'Key step', title: 'Conformity Assessment', sub: 'UKCA marking pathway — UK Approved Body involvement, conformity assessment routes.', link: { label: 'View conformity assessment', href: '/pre-market/conformity-assessment' } },
      { tag: 'Pre-Market', title: 'Essential Requirements', sub: 'Schedule 1 Essential Requirements — safety and performance standards for UKCA marking.', link: { label: 'View essential requirements', href: '/pre-market/essential-requirements' } },
      { tag: 'Pre-Market', title: 'MHRA Registration', sub: 'Mandatory MHRA registration for all devices placed on the Great Britain market.', link: { label: 'View registration guide', href: '/pre-market/mhra-registration/device-registration' } },
      { tag: 'Pre-Market', title: 'Technical Documentation', sub: 'Technical file requirements for UKCA marking — content and structure.', link: { label: 'View tech doc guide', href: '/pre-market/technical-documentation' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'UK Approved Bodies',
    nodes: [
      { tag: 'Approved Body', badge: 'Required Class IIa+', title: 'What are Approved Bodies?', sub: 'UK Approved Bodies (UKABs) carry out conformity assessment for Class IIa and above.', link: { label: 'View UKAB guide', href: '/approved-bodies/what-are-approved-bodies' } },
      { tag: 'Approved Body', title: 'Finding a UK Approved Body', sub: 'How to find a designated UKAB for your device type — MHRA register.', link: { label: 'View UKAB directory', href: '/approved-bodies/finding-a-ukab' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'MHRA clinical evidence requirements — when UK clinical investigations are needed.', link: { label: 'View evidence requirements', href: '/pre-market/clinical-evidence/clinical-evaluation' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Vigilance Reporting', sub: 'MHRA Yellow Card reporting — serious incidents, FSCAs, and periodic safety reports.', link: { label: 'View reporting guide', href: '/post-market/vigilance/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'Field Safety Corrective Actions', sub: 'When FSCAs are required, MHRA notification process, and field safety notice requirements.', link: { label: 'View FSCA guide', href: '/post-market/field-safety/when-fsca-required' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'PMS plan requirements and MHRA expectations for ongoing device surveillance.', link: { label: 'View PMS requirements', href: '/post-market/post-market-surveillance/pms-requirements-by-class' } },
      { tag: 'Post-Market', title: 'Labelling & Advertising', sub: 'UK labelling requirements — English language, UKCA mark, and MHRA registration details.', link: { label: 'View labelling rules', href: '/post-market/labelling-advertising/labelling-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Special Access & Northern Ireland',
    nodes: [
      { tag: 'Special Access', title: 'Approved for Use (AfU)', sub: "MHRA's Approved for Use route — access to novel or innovative devices outside standard pathways.", link: { label: 'View AfU guide', href: '/special-access/approved-for-use' } },
      { tag: 'Northern Ireland', title: 'Northern Ireland Rules', sub: 'Windsor Framework 2023 — how EU MDR/IVDR applies in Northern Ireland.', link: { label: 'View NI compliance guide', href: '/northern-ireland/rules-applying-in-ni' } },
      { tag: 'Northern Ireland', title: 'Practical Multi-Market Compliance', sub: 'How to comply with both UKCA (GB) and CE/MDR (NI) requirements simultaneously.', link: { label: 'View multi-market guide', href: '/northern-ireland/practical-compliance-multi-market' } },
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


# RAPath UK

**UK Medical Device Regulatory Reference — MHRA & UK MDR 2002**

RAPath UK is a plain English reference for UK medical device regulation under the **UK Medical Devices Regulations 2002 (SI 2002/618, as amended)** and associated legislation. It is designed for regulatory affairs professionals, manufacturers, UK Responsible Persons (UKRPs), importers, consultants, and anyone navigating the UK framework.

This site does not replace official sources and should not be relied upon as legal advice. Every page links back to the authoritative legislation text, MHRA guidance, or official Government publication. RAPath UK is a structured, searchable index to help you navigate the framework — always verify findings against the official source before making compliance decisions.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for requirements you navigate daily, with every claim linked to its legislative source.

**Manufacturers (UK and non-UK)** — understand what UK MDR 2002 requires of you, from classification through to ongoing post-market obligations, for both the GB and NI markets.

**UK Responsible Persons (UKRPs)** — understand your joint responsibility with overseas manufacturers under the post-Brexit GB framework.

**Importers and distributors** — understand your verification, record-keeping, and cooperation obligations.

**Anyone new to UK medical device regulation** — start with [Start Here](/start-here/what-is-a-medical-device) for a guided introduction to the framework.

---

## How to use this site

The site is structured around the regulatory lifecycle of a medical device under UK MDR 2002:

| Section | What it covers |
|---|---|
| [Start Here](/start-here/what-is-a-medical-device) | Definitions, the GB vs NI dual-market position, regulatory framework, key roles (including UKRP), device lifecycle, post-Brexit transition timeline, glossary |
| [Pre-Market](/pre-market/classification/how-classification-works) | Classification (Schedule 2 Rules 1–18), Essential Requirements, technical documentation, conformity assessment routes (self-declaration, UKAB routes), MHRA registration, clinical evidence, and 8 special device types |
| [Post-Market](/post-market/post-market-overview) | Post-market surveillance, PSURs, PMCF, vigilance reporting to MHRA, FSCAs and recalls, MHRA registration maintenance, and labelling and advertising |
| [Legislation](/legislation/uk-mdr-2002-overview) | UK MDR 2002 structure, all Schedules, post-Brexit amending instruments, Medical Devices Act 2021, UK-designated standards, and how to read UK legislation |
| [UK Approved Bodies](/approved-bodies/what-are-approved-bodies) | What UKABs are, how to find one, the audit and certification process, certificate types, and transitioning from EU Notified Body certificates |
| [Northern Ireland](/northern-ireland/overview) | NI's dual-market position — EU MDR/IVDR in NI vs UK MDR 2002 in GB, Windsor Framework, UKCA vs CE vs UKNI, practical multi-market compliance |
| [Guidance Documents](/guidance-documents/all-mhra-guidance) | MHRA guidance indexed by topic, the Submissions portal how-to, forms, fees, and timelines |
| [What's New](/whats-new/recent-regulatory-changes) | Recent regulatory changes, open consultations, upcoming changes, UKCA/CE deadline tracker |
| [Special Access](/special-access/exceptional-use-authorisations) | Exceptional Use Authorisations, Approved for Use, clinical investigation access, custom-made device exemption |

---

## A UK-unique regulatory landscape

RAPath UK addresses regulatory features that have no parallel in the EU, Australian, Canadian, or Singapore frameworks:

- **GB vs NI dual-market position** — two regulatory regimes (UK MDR 2002 / EU MDR-IVDR) operating simultaneously within one political territory
- **The Windsor Framework** — the 2023 UK-EU agreement governing NI's continued EU alignment
- **UK Responsible Persons (UKRPs)** — the post-Brexit legal representative role for non-UK manufacturers accessing the GB market
- **CE marking transitional acceptance** — CE marking valid on the GB market until 31 December 2027
- **UKCA marking** — the UK conformity mark, replacing CE marking for GB from 2030

Pages covering UK-unique content are marked with a **UK-unique** badge throughout the site.

---

## Where to start

**If you are new to UK medical device regulation:**
→ [What is a medical device?](/start-here/what-is-a-medical-device)

**If you need to understand the GB vs NI split:**
→ [Great Britain vs Northern Ireland](/start-here/great-britain-vs-northern-ireland)

**If you need to classify a device:**
→ [How classification works](/pre-market/classification/how-classification-works)

**If you are a non-UK manufacturer entering the GB market:**
→ [Who needs to comply?](/start-here/who-needs-to-comply)

**If you are planning UKCA transition:**
→ [Post-Brexit transition timeline](/start-here/post-brexit-transition-timeline)

**If you need to report a serious incident:**
→ [What must be reported to MHRA](/post-market/vigilance/what-must-be-reported)

**If a recall may be required:**
→ [When an FSCA is required](/post-market/field-safety/when-fsca-required)

---

## Questions, corrections and discussions

RAPath UK is a community reference. If you find an error, have a regulatory question, or want to discuss a recent UK MDR development, use GitHub Discussions:

- [Ask a question](https://github.com/orgs/RAPath/discussions/new?category=questions)
- [Report an error](https://github.com/orgs/RAPath/discussions/new?category=corrections)
- [Discuss regulatory updates](https://github.com/orgs/RAPath/discussions)

Regulatory affairs professionals who flag inaccuracies are the most valuable contributors to this project.

---

## Disclaimer

Content on this site is written with AI assistance and is intended as a navigation aid only. Always verify against official [legislation.gov.uk](https://www.legislation.gov.uk/uksi/2002/618/contents/made) and [MHRA](https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency) sources before making regulatory decisions. This site is not affiliated with MHRA or any UK Government body. Not legal or regulatory advice.

If you are a non-UK manufacturer
— understand UK Responsible Person requirements and how to appoint a UKRP to represent you on the GB market.

Special pathways
— emergency use, temporary authorisations, and exceptional pathways for devices addressing urgent public health needs.

Getting help
— how to contact MHRA, submission support contacts, and guidance on where to direct specific regulatory questions.

nufacturer:
→ UK Responsible Persons (UKRPs)

If you need to understand post-market obligations:
→ Post-Market Surveillance

If you need to find a UK Approved Body:
→ UK Approved Bodies

If you are navigating the Northern Ireland dual-market:
→ Northern Ireland Medical Device Regulation

The Medicines and Healthcare products Regulatory Agency (MHRA) is the UK Competent Authority responsible for enforcing UK MDR 2002, registering medical devices, designating UK Approved Bodies, and investigating adverse events and recalls.

From 1 January 2024, only UKCA marking (not CE marking) is accepted for newly CE-marked devices placed on the GB market. CE-marked devices placed on the GB market before this date remain valid until 30 June 2030. From 1 July 2030, all devices on the GB market must bear UKCA marking or be subject to MHRA enforcement action.
