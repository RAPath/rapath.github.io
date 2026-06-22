---
title: Introduction
description: RAPath AU — a plain English reference for Australian medical device regulation. What this site is, who it is for, and how to use it.
sidebar_position: 1
slug: /
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'TGA definition under the Therapeutic Goods Act 1989 — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'TGA, Therapeutic Goods Act 1989, Medical Devices Regulations 2002, and sponsor model.', link: { label: 'View framework', href: '/start-here/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Manufacturer, sponsor, importer, and distributor obligations under Australian law.', link: { label: 'Check obligations', href: '/start-here/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I–III + AIMD', title: 'How Classification Works', sub: 'Australian classification — Class I, IIa, IIb, III, and AIMD (Active Implantable Medical Devices).', link: { label: 'View classification rules', href: '/pre-market/classification/how-classification-works' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'IVD devices have a separate Class 1–4 classification system in Australia.', link: { label: 'View IVD classification', href: '/pre-market/classification/ivd-class-1-2-3-4' } },
      { tag: 'Classification', title: 'Software & AI Devices', sub: 'How the TGA classifies software as a medical device and AI/ML devices.', link: { label: 'View software classification', href: '/pre-market/classification/active-and-software-devices' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'ARTG Inclusion',
    nodes: [
      { tag: 'ARTG', badge: 'Key step', title: 'ARTG Inclusion Overview', sub: 'The Australian Register of Therapeutic Goods (ARTG) — inclusion process by device class.', link: { label: 'View ARTG overview', href: '/pre-market/artg-inclusion/overview' } },
      { tag: 'ARTG', title: 'Conformity Assessment', sub: 'Manufacturer's evidence (declaration) vs. TGA conformity assessment certification.', link: { label: 'View CA overview', href: '/pre-market/conformity-assessment/overview' } },
      { tag: 'ARTG', title: 'Essential Principles', sub: 'Essential Principles of safety and performance — checklist and compliance requirements.', link: { label: 'View EP overview', href: '/pre-market/essential-principles/overview' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'TGA clinical evidence requirements — when Australian trials are needed vs. international data.', link: { label: 'View evidence requirements', href: '/pre-market/clinical-evidence/what-is-required' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Manufacturer & Sponsor Obligations',
    nodes: [
      { tag: 'Manufacturer', title: 'Manufacturer Obligations', sub: 'What TGA requires of manufacturers — conformity assessment, QMS, and declaration requirements.', link: { label: 'View manufacturer guide', href: '/start-here/manufacturers' } },
      { tag: 'Sponsor', badge: 'Mandatory', title: 'Sponsor Obligations', sub: 'Australian Sponsor is legally responsible for the device — obligations and responsibilities.', link: { label: 'View sponsor guide', href: '/start-here/sponsors' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting (IRIS)', sub: 'Mandatory reporting to TGA via IRIS — what to report and within what timeframes.', link: { label: 'View reporting guide', href: '/post-market/adverse-event-reporting/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'Recalls & Field Safety', sub: 'TGA recall classification system and mandatory FSCA notification requirements.', link: { label: 'View recall guide', href: '/post-market/recalls-and-field-safety/when-a-recall-is-required' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'Proactive PMS requirements — annual reports, distribution records, and trend analysis.', link: { label: 'View PMS requirements', href: '/post-market/post-market-surveillance/pms-requirements' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'TGA labelling rules — mandatory fields, English language requirements, and advertising rules.', link: { label: 'View labelling rules', href: '/post-market/labelling-and-advertising/labelling-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Special Access & Unapproved Devices',
    nodes: [
      { tag: 'Special Access', title: 'Special Access Scheme (SAS)', sub: 'TGA pathway for patient access to unapproved devices under clinical justification.', link: { label: 'View SAS guide', href: '/unapproved-access/special-access-scheme' } },
      { tag: 'Special Access', title: 'Clinical Trial Pathways', sub: 'How to access unapproved devices for clinical investigations in Australia.', link: { label: 'View clinical trial guide', href: '/unapproved-access/clinical-trial-pathways' } },
      { tag: 'Special Access', title: 'Authorised Prescriber', sub: 'Mechanism for individual clinicians to prescribe specific unapproved devices to patients.', link: { label: 'View AP guide', href: '/unapproved-access/authorised-prescribers' } },
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


# RAPath Australia

**Australian Medical Device Regulatory Reference**

:::info

Content is AI-assisted and intended as a navigation aid only — not legal or 
regulatory advice, and not affiliated with the TGA or the Australian Government. 
Always verify against official [TGA](https://www.tga.gov.au) and 
[legislation.gov.au](https://www.legislation.gov.au) sources before making any 
regulatory decision.

:::


RAPath AU is a plain English reference for Australian medical device regulation. It is designed to help regulatory affairs professionals, sponsors, manufacturers, importers, and consultants quickly find and understand TGA requirements.

This site does not replace official TGA sources. Every page links back to the authoritative legislative text or official TGA guidance. RAPath AU is a structured, searchable navigation tool designed to help you quickly locate what you need, then directs you to the official source for verification and final decision-making.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for requirements you navigate daily, with every claim linked to its legislative source.

**Sponsors** — understand your obligations from ARTG application through to ongoing post-market compliance.

**Manufacturers (Australian and overseas)** — understand what the Australian regulatory framework requires of you, and how it relates to frameworks you may already know (EU MDR, FDA, Health Canada).

**Importers and distributors** — understand when importing makes you the sponsor, and what that means.

**Anyone new to Australian medical device regulation** — start with [Start Here](/start-here/what-is-a-medical-device) for a guided introduction to the framework.

---

## How to use this site

The site is organized around the regulatory lifecycle of a medical device, from initial classification through post-market surveillance:

| Section | What it covers |
|---------|---------------|
| [Start Here](/start-here/what-is-a-medical-device) | Definitions, regulatory framework, key roles, device lifecycle, glossary |
| [Pre-Market](/pre-market/classification/how-classification-works) | Classification, Essential Principles, conformity assessment, ARTG inclusion, clinical evidence, special device types |
| [Post-Market](/post-market/overview) | Adverse event reporting, recalls and PRAC, post-market surveillance, ARTG maintenance, labelling and advertising |
| [Legislation](/legislation/therapeutic-goods-act) | The Therapeutic Goods Act, MD Regulations, related instruments, how to read legislation |
| [Guidance](/guidance/by-topic) | Full index of TGA guidance documents by topic and device class, forms and application links |
| [What's New](/whats-new/regulatory-changes) | Recent regulatory changes, open consultations, upcoming changes, reforms tracker |
| [Unapproved Device Access](/unapproved-access/special-access-scheme) | SAS, authorised prescribers, clinical trials, personal importation |
| [Other Therapeutic Goods](/other-therapeutic-goods/disinfectants-and-sterilants) | Disinfectants and sterilants, tampons and menstrual cups, unapproved medicines |

---

## Where to start

**If you are new to Australian medical device regulation:**
→ [What is a Medical Device?](/start-here/what-is-a-medical-device)

**If you need to classify a device:**
→ [How Classification Works](/pre-market/classification/how-classification-works)

**If you are preparing an ARTG application:**
→ [ARTG Inclusion — Overview](/pre-market/artg-inclusion/overview)

**If you need to report an adverse event:**
→ [Adverse Event Reporting](/post-market/adverse-event-reporting/what-must-be-reported)

**If a recall may be required:**
→ [When a Recall is Required](/post-market/recalls-and-field-safety/when-a-recall-is-required)

---

### Questions or corrections

If you spot an error or have a question, visit 
[GitHub Discussions](https://github.com/orgs/RAPath/discussions).

---

Consider adding a note in the Introduction section: 'This reference reflects TGA requirements as of [DATE]. Recent regulatory changes include [specific updates]. See What's New section for the latest TGA reforms and implementation timelines.'

