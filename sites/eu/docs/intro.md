---
title: Introduction
description: RAPath EU — a plain English reference for EU medical device regulation under MDR 2017/745 and IVDR 2017/746. What this site is, who it is for, and how to use it.
sidebar_position: 1
slug: /
---
import React from 'react';

const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'EU MDR / IVDR definitions — Article 2 scope, intended purpose, and borderline products.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'MDR vs. IVDR', sub: 'EU MDR 2017/745 for medical devices and IVDR 2017/746 for IVDs — key differences.', link: { label: 'Compare MDR vs IVDR', href: '/start-here/mdr-vs-ivdr' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Manufacturer, Authorised Representative, importer, and distributor obligations under EU MDR/IVDR.', link: { label: 'Check obligations', href: '/start-here/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Annex VIII', title: 'MDR Classification Rules', sub: 'Class I / IIa / IIb / III — 22 classification rules under MDR 2017/745 Annex VIII.', link: { label: 'View MDR classification', href: '/pre-market/classification/mdr-classification-rules' } },
      { tag: 'Classification', title: 'IVDR Classification Rules', sub: 'Class A / B / C / D — IVD classification rules under IVDR 2017/746.', link: { label: 'View IVDR classification', href: '/pre-market/classification/ivd-classification-rules' } },
      { tag: 'Classification', title: 'SaMD Classification', sub: 'How the EU classifies Software as a Medical Device — MDCG 2019-11 guidance.', link: { label: 'View SaMD classification', href: '/pre-market/classification/software-samd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'CE Marking Pathway',
    nodes: [
      { tag: 'Conformity', badge: 'Key step', title: 'Conformity Assessment Overview', sub: 'CE marking conformity assessment routes — Annex IX QMS, Annex X type examination.', link: { label: 'View conformity assessment', href: '/pre-market/conformity-assessment/conformity-assessment-overview' } },
      { tag: 'Conformity', title: 'Class I Self-Declaration', sub: 'Class I devices (non-sterile, non-measuring) can self-declare without Notified Body involvement.', link: { label: 'View Class I route', href: '/pre-market/conformity-assessment/class-i-self-declaration' } },
      { tag: 'Technical Docs', title: 'Technical Documentation', sub: 'Technical file structure — MDR Annex II/III content requirements.', link: { label: 'View tech doc guide', href: '/pre-market/technical-documentation/device-description-specification' } },
      { tag: 'GSPR', title: 'General Safety & Performance Requirements', sub: 'EU MDR/IVDR GSPR (Annex I) — overview and compliance checklist.', link: { label: 'View GSPR overview', href: '/pre-market/gspr/gspr-overview' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Notified Body & QMS',
    nodes: [
      { tag: 'Notified Body', badge: 'Required Class IIa+', title: 'What Notified Bodies Do', sub: 'Role of EU Notified Bodies in conformity assessment — audit process and certification.', link: { label: 'View NB guide', href: '/notified-bodies/what-notified-bodies-do' } },
      { tag: 'Notified Body', title: 'How to Choose a Notified Body', sub: 'NANDO database, scope of designation, and key factors when selecting your NB.', link: { label: 'View selection guide', href: '/notified-bodies/how-to-choose-nb' } },
      { tag: 'Clinical Evidence', title: 'Clinical Evaluation', sub: 'Clinical evaluation report (CER) requirements — equivalence, clinical data, and PMCF.', link: { label: 'View clinical evaluation guide', href: '/pre-market/clinical-evidence/clinical-evaluation-overview' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'EUDAMED', badge: 'Mandatory', title: 'EUDAMED Registration', sub: 'EU database for medical devices — economic operator and device registration requirements.', link: { label: 'View EUDAMED guide', href: '/post-market/eudamed-registration/overview' } },
      { tag: 'Post-Market', title: 'Vigilance & Adverse Events', sub: 'Serious incident reporting to NCAs — timeframes, EUDAMED vigilance module.', link: { label: 'View reporting guide', href: '/post-market/adverse-event-reporting/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'FSCAs & Field Safety Notices', sub: 'Field safety corrective actions — when required, coordination with NCAs, and FSN content.', link: { label: 'View FSCA guide', href: '/post-market/field-safety-corrective-actions/when-fsca-required' } },
      { tag: 'Post-Market', title: 'PMS / PMCF / PSUR', sub: 'Post-market surveillance plan, PMCF, and Periodic Safety Update Report requirements.', link: { label: 'View PMS requirements', href: '/post-market/post-market-surveillance/pms-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'UDI & Special Topics',
    nodes: [
      { tag: 'UDI', badge: 'Mandatory', title: 'UDI System', sub: 'EU Unique Device Identification system — EUDAMED UDI database, labels, and compliance dates.', link: { label: 'View UDI guide', href: '/pre-market/udi-system/udi-overview' } },
      { tag: 'Special Devices', title: 'Special Device Types', sub: 'Legacy/grandfathered devices, custom-made, combination products, and SaMD — specific EU rules.', link: { label: 'View special devices', href: '/pre-market/special-device-types/software-samd' } },
      { tag: 'Special Access', title: 'Compassionate Use', sub: 'EU compassionate use and humanitarian device access under MDR Article 59.', link: { label: 'View compassionate use', href: '/compassionate-use/compassionate-use-overview' } },
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


# RAPath EU

**EU Medical Device Regulatory Reference — MDR & IVDR**

RAPath EU is a plain English reference for EU medical device regulation under **Regulation (EU) 2017/745 (MDR)** and **Regulation (EU) 2017/746 (IVDR)**. It is designed for regulatory affairs professionals, manufacturers, importers, EU authorised representatives, consultants, and anyone navigating the CE marking framework.

This site does not replace official EU sources and does not constitute legal or regulatory advice. Every page links back to the authoritative legislative text, MDCG guidance, or official Commission publication. Think of RAPath EU as a structured, searchable index that helps you find what you need — then points you to the official source to verify it. Always consult the official regulation text and a qualified regulatory professional before making compliance decisions.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for requirements you navigate daily, with every claim linked to its legislative source.

**Manufacturers (EU and non-EU)** — understand what MDR and IVDR require of you, from classification through to ongoing post-market obligations.

**EU authorised representatives (EU REPs)** — understand your joint liability and obligations under MDR Art. 11 and IVDR Art. 11.

**Importers and distributors** — understand your verification, record-keeping, and co-operation obligations under MDR Art. 13–14.

**Anyone new to EU medical device regulation** — start with [Start Here](/start-here/what-is-a-medical-device) for a guided introduction to the framework.

---

## How to use this site

The site is structured around the regulatory lifecycle of a medical device under MDR and IVDR:

| Section | What it covers |
|---------|---------------|
| [Start Here](/start-here/what-is-a-medical-device) | Definitions, MDR vs. IVDR, regulatory framework, key roles, device lifecycle, transitional provisions, glossary |
| [Pre-Market](/pre-market/classification/how-classification-works) | Classification (MDR Rules 1–22 / IVDR Rules 1–7), GSPR Annex I, technical documentation, conformity assessment (Annexes IX–XI), clinical and performance evaluation, UDI, and 11 special device types |
| [Post-Market](/post-market/post-market-overview) | Post-market surveillance, PSUR, PMCF/PMPF, vigilance reporting, FSCAs and recalls, EUDAMED registration, and labelling and advertising |
| [Legislation](/legislation/mdr-key-articles) | MDR and IVDR key articles, all annexes, implementing and delegated acts, Common Specifications, harmonised standards, and how to read EU legislation |
| [Guidance](/guidance-documents/mdcg-guidance) | Full index of MDCG guidance by topic and device class, MEDDEV reference, EC Blue Guide, and forms and application links |
| [What's New](/whats-new/recent-regulatory-changes) | Recent regulatory changes, open consultations, transitional timeline tracker, EUDAMED rollout status, notified body capacity |
| [Notified Bodies](/notified-bodies/what-notified-bodies-do) | What notified bodies do, how to choose one, NANDO database, audit process and timelines, unannounced audits, Art. 54 scrutiny procedure |
| [Compassionate Use](/compassionate-use/compassionate-use-overview) | MDR Art. 59 compassionate use, named-patient access, hospital exemption, clinical investigation pathways |
| [Market Surveillance](/market-surveillance/market-surveillance-overview) | NCA roles by member state, surveillance activities, safeguard procedures (Art. 95–97), enforcement powers |
| [Non-EU Access](/non-eu-access/non-eu-access) | Requirements for non-EU manufacturers, EU REP obligations, UK UKCA, Switzerland MedDO, MDR vs. FDA 510(k) |

---

## MDR and IVDR — two separate regulations

A key feature of EU medical device law is the existence of two separate but parallel regulations:

- **MDR 2017/745** — covers medical devices, accessories, and Annex XVI non-medical-purpose devices
- **IVDR 2017/746** — covers in vitro diagnostic medical devices and their accessories

They are mutually exclusive — a product is governed by one or the other, never both simultaneously. Where pages apply to both regulations, they are marked accordingly. Where content is regulation-specific, the applicable regulation is noted.

→ Not sure which applies to your product? See [MDR vs IVDR — which applies?](/start-here/mdr-vs-ivdr)

---

## Where to start

**If you are new to EU medical device regulation:**
→ [What is a medical device?](/start-here/what-is-a-medical-device)

**If you need to classify a device under MDR:**
→ [Classification rules 1–22](/pre-market/classification/mdr-classification-rules)

**If you need to classify an IVD under IVDR:**
→ [Classification rules 1–7](/pre-market/classification/ivd-classification-rules)

**If you are preparing for a notified body application:**
→ [Conformity assessment — overview](/pre-market/conformity-assessment/conformity-assessment-overview)

**If you need to understand clinical evaluation requirements:**
→ [Clinical evaluation overview](/pre-market/clinical-evidence/clinical-evaluation-overview)

**If you need to report a serious incident:**
→ [What must be reported](/post-market/adverse-event-reporting/what-must-be-reported)

**If you are a non-EU manufacturer:**
→ [Non-EU & third-country access](/non-eu-access/non-eu-access)

**If a recall may be required:**
→ [When an FSCA is required](/post-market/field-safety-corrective-actions/when-fsca-required)

---

## Questions, corrections and discussions

RAPath EU is a community reference. If you find an error, have a regulatory question, or want to discuss a recent MDR/IVDR development, use GitHub Discussions:

- [Ask a question](https://github.com/orgs/RAPath/discussions/new?category=questions)
- [Report an error](https://github.com/orgs/RAPath/discussions/new?category=corrections)
- [Discuss regulatory updates](https://github.com/orgs/RAPath/discussions/categories/regulatory-updates)

Regulatory affairs professionals who flag inaccuracies are the most valuable contributors to this project.

---

## Disclaimer

Content on this site is written with AI assistance and is intended as a navigation aid only. Always verify against official [EUR-Lex](https://eur-lex.europa.eu), [EC DG SANTE](https://health.ec.europa.eu/medical-devices-sector_en), and [EUDAMED](https://ec.europa.eu/tools/eudamed) sources before making regulatory decisions. This site is not affiliated with the European Commission or any EU institution. Not legal or regulatory advice.
