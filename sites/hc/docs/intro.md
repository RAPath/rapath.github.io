---
slug: /
title: Introduction
sidebar_position: 1
description: RAPath CA — a plain English reference for Health Canada medical device regulation. What this site is, who it is for, and how to use it.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'Health Canada definition under the Food and Drugs Act — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'Health Canada, Medical Devices Regulations (MDR), and the medical device lifecycle overview.', link: { label: 'View framework', href: '/start-here/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'MDL, MDEL, and importer obligations — who needs a licence and for what.', link: { label: 'Check obligations', href: '/start-here/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I–IV', title: 'How Classification Works', sub: 'Class I / II / III / IV — Canadian Medical Devices Regulations classification rules.', link: { label: 'View classification rules', href: '/pre-market/classification/how-classification-works' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Medical Device Licence',
    nodes: [
      { tag: 'Pre-Market', badge: 'Class II/III/IV', title: 'Device Licence Application', sub: 'Medical Device Licence (MDL) — Class II/III/IV application process, safety and effectiveness data.', link: { label: 'View MDL guide', href: '/pre-market/device-licence-application' } },
      { tag: 'Pre-Market', title: 'Safety & Effectiveness Requirements', sub: 'What evidence Health Canada requires — clinical data, test reports, and labelling standards.', link: { label: 'View evidence requirements', href: '/pre-market/safety-effectiveness-requirements' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'Canadian clinical evidence standards — when Canadian trials are needed vs. international data.', link: { label: 'View clinical evidence guide', href: '/pre-market/clinical-evidence/what-is-required' } },
      { tag: 'Pre-Market', title: 'Special Device Types', sub: 'IVDs, SaMD, combination products, and custom-made devices — specific Canadian requirements.', link: { label: 'View special types guide', href: '/pre-market/special-device-types/software-samd' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'QMS & Establishment Licence',
    nodes: [
      { tag: 'QMS', badge: 'ISO 13485 / MDSAP', title: 'MDSAP Recognition', sub: 'Medical Device Single Audit Program — Health Canada accepts MDSAP in lieu of HC inspections.', link: { label: 'View MDSAP guide', href: '/international/mdsap-in-depth' } },
      { tag: 'Establishment', badge: 'Mandatory', title: 'MDEL (Establishment Licence)', sub: 'Medical Device Establishment Licence — required for manufacturers, importers, and distributors.', link: { label: 'View MDEL guide', href: '/pre-market/establishment-licence' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Mandatory Problem Reporting', sub: 'What must be reported to Health Canada — incident types, timeframes, and reporting system.', link: { label: 'View reporting guide', href: '/post-market/mandatory-problem-reporting/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'Recalls & Field Safety', sub: 'Voluntary and mandatory recalls — Health Canada notification and recall execution obligations.', link: { label: 'View recall guide', href: '/post-market/recalls-field-safety/when-recall-required' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'Proactive PMS activities — data collection, complaint handling, and periodic reporting.', link: { label: 'View PMS guide', href: '/post-market/post-market-surveillance/pms-by-class' } },
      { tag: 'Post-Market', title: 'Labelling & Advertising', sub: 'Health Canada labelling rules — bilingual (English/French) requirements and advertising rules.', link: { label: 'View labelling guide', href: '/post-market/labelling-advertising/labelling-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Special Access & International',
    nodes: [
      { tag: 'Special Access', title: 'Special Access Program (SAP)', sub: 'Health Canada SAP — access to unlicensed devices for patients with serious conditions.', link: { label: 'View SAP guide', href: '/special-access/special-access-program' } },
      { tag: 'Special Access', title: 'Clinical Trial Authorization (ITA)', sub: 'Investigational Testing Authorization for clinical investigations of unlicensed devices in Canada.', link: { label: 'View ITA guide', href: '/special-access/investigational-testing-authorization' } },
      { tag: 'International', title: 'UDI Framework', sub: "Canada's UDI regulatory framework — proposed requirements and alignment with international UDI.", link: { label: 'View UDI guide', href: '/international/udi-framework' } },
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


# RAPath Health Canada

**Health Canada Medical Device Regulatory Reference**

RAPath CA is a plain English reference for Health Canada medical device regulation under the **Food and Drugs Act (FDA)** and **Medical Devices Regulations (MDR, SOR/98-282)**. It is designed for regulatory affairs professionals, manufacturers, importers, distributors, and consultants who need to find and understand Health Canada requirements quickly.

This site does not replace official Health Canada sources. Every page links back to the authoritative legislative text or official Health Canada guidance. Think of RAPath CA as a structured, searchable index that helps you find what you need — then points you to the official source to verify it.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for requirements you navigate daily, with every claim linked to its legislative source.

**Manufacturers (Canadian and overseas)** — understand what the Canadian regulatory framework requires of you, and how it relates to frameworks you may already know (EU MDR, FDA, TGA).

**Importers and distributors** — understand your MDEL obligations, QMS requirements, and post-market responsibilities in Canada.

**Anyone new to Health Canada medical device regulation** — start with [Start Here](/start-here/what-is-a-medical-device) for a guided introduction to the framework.

---

## How to use this site

The site is structured around the regulatory lifecycle of a medical device in Canada:

| Section | What it covers |
|---|---|
| [Start Here](/start-here/what-is-a-medical-device) | Definitions, regulatory framework, key roles, device lifecycle, glossary |
| [Pre-Market](/pre-market/classification/how-classification-works) | Classification (Class I–IV), Safety & Effectiveness Requirements (Schedule 1), Device Licence applications, clinical evidence, MDEL, and 10 special device types |
| [Post-Market](/post-market/overview) | Mandatory problem reporting, recalls and FSCAs, post-market surveillance, Device Licence maintenance, labelling and advertising |
| [Legislation](/legislation/food-and-drugs-act) | Food and Drugs Act, Medical Devices Regulations (SOR/98-282), Radiation Emitting Devices Act, related instruments, how to read Canadian legislation |
| [Guidance](/guidance/by-topic) | Full index of Health Canada guidance documents by topic and device class, forms and application links |
| [What's New](/whats-new/recent-regulatory-changes) | Recent regulatory changes, open consultations, upcoming changes, reforms tracker |
| [Special Access](/special-access/special-access-program) | SAP, Investigational Testing Authorization (ITA), clinical trial pathways, personal importation |
| [Market Surveillance](/market-surveillance/overview) | Health Canada inspection program, compliance and enforcement tools, non-compliant device actions |
| [International & MDSAP](/international/exporting-to-canada) | Exporting to Canada, MDSAP audit program, UDI framework, Canada vs FDA/TGA/EU comparison |

---

## Where to start

**If you are new to Health Canada medical device regulation:**
→ [What is a Medical Device?](/start-here/what-is-a-medical-device)

**If you need to classify a device:**
→ [How Classification Works](/pre-market/classification/how-classification-works)

**If you are preparing a Device Licence application:**
→ [Device Licence Application — Overview](/pre-market/device-licence-application/overview)

**If you need an establishment licence:**
→ [Establishment Licence (MDEL)](/pre-market/establishment-licence/overview)

**If you need to report an adverse event:**
→ [What Must Be Reported](/post-market/mandatory-problem-reporting/what-must-be-reported)

**If a recall may be required:**
→ [When a Recall is Required](/post-market/recalls-field-safety/when-recall-required)

**If you are a non-Canadian manufacturer:**
→ [Exporting to Canada](/international/exporting-to-canada)

**If you need to understand MDSAP:**
→ [MDSAP in Depth](/international/mdsap-in-depth)

---

## Questions, corrections and discussions

RAPath CA is a community reference. If you find an error, have a regulatory question, or want to discuss a recent Health Canada change, use GitHub Discussions:

- [Ask a question](https://github.com/orgs/RAPath/ca/discussions/new?category=questions)
- [Report an error](https://github.com/orgs/RAPath/ca/discussions/new?category=corrections)
- [Discuss regulatory updates](https://github.com/orgs/RAPath/ca/discussions/categories/regulatory-updates)

Regulatory affairs professionals who flag inaccuracies are the most valuable contributors to this project.

---

## Disclaimer

Content on this site is written with AI assistance and is reviewed by regulatory professionals; it is intended as a navigation aid only. All claims link to authoritative sources and should be verified before use in regulatory decisions. Always verify against official [Health Canada](https://www.canada.ca/en/health-canada/services/drugs-health-products/medical-devices.html) and [laws-lois.justice.gc.ca](https://laws-lois.justice.gc.ca) sources before making regulatory decisions. This site is not affiliated with Health Canada or the Government of Canada. Not legal or regulatory 