---
slug: /
sidebar_position: 1
title: Introduction
description: Reference guide for medical device regulation in Russia — Roszdravnadzor registration (national and EAEU), classification, QMS, Chestny ZNAK marking, and post-market obligations.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'Definition under Federal Law No. 323-FZ and Roszdravnadzor regulatory rules.', link: { label: 'Read definition', href: 'getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'Roszdravnadzor, the MOH, and the dual national/EAEU registration tracks explained.', link: { label: 'View framework', href: 'getting-started/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Obligations for manufacturers, authorised representatives, importers, and distributors.', link: { label: 'Check obligations', href: 'getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I–III', title: 'How Classification Works', sub: 'Russia uses a three-tier system (Class I / IIa / IIb / III) aligned with EAEU rules.', link: { label: 'View classification rules', href: 'device-classification/how-classification-works' } },
      { tag: 'Classification', title: 'SaMD Classification', sub: 'Software as a medical device — how Russian rules apply to standalone software products.', link: { label: 'View SaMD classification', href: 'device-classification/samd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Registration Routes',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'National vs. EAEU Registration', sub: 'Two tracks: Russian national registration (for Russia only) and EAEU registration (valid across EAEU states).', link: { label: 'View route comparison', href: 'registration-routes/overview-national-vs-eaeu' } },
      { tag: 'Registration', title: 'National Registration Pathway', sub: 'Step-by-step national registration — dossier, GRLS submission, and Roszdravnadzor review.', link: { label: 'View national route', href: 'registration-routes/national-registration' } },
      { tag: 'Registration', title: 'EAEU Registration Pathway', sub: 'EAEU single-window registration for devices to be sold across member states.', link: { label: 'View EAEU route', href: 'registration-routes/eaeu-registration' } },
      { tag: 'Technical Docs', title: 'Dossier Requirements', sub: 'Technical documentation structure — what must be included in a Russian/EAEU dossier.', link: { label: 'View dossier guide', href: 'technical-documentation/dossier-requirements' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System & AR',
    nodes: [
      { tag: 'Quality System', badge: 'Mandatory Class IIb/III', title: 'QMS Overview', sub: 'ISO 13485 or GOST R ISO 13485 mandatory for sterile Class IIa, IIb, and Class III devices.', link: { label: 'View QMS requirements', href: 'quality-management/qms-overview' } },
      { tag: 'Quality System', title: 'Manufacturing Site Inspections', sub: 'Roszdravnadzor inspection process — types of inspections and how to prepare.', link: { label: 'View inspection guide', href: 'quality-management/manufacturing-site-inspections' } },
      { tag: 'AR', badge: 'Mandatory', title: 'Authorised Representative', sub: 'Foreign manufacturers must appoint a Russian authorised representative for all registrations.', link: { label: 'View AR requirements', href: 'eaeu-and-authorized-rep/authorized-representative' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting', sub: 'Vigilance obligations — what to report to Roszdravnadzor and within what timeframes.', link: { label: 'View reporting rules', href: 'post-market/adverse-event-reporting' } },
      { tag: 'Post-Market', title: 'FSCAs & Recalls', sub: 'Field safety corrective actions — Roszdravnadzor notification and recall procedures.', link: { label: 'View FSCA guide', href: 'post-market/fsca-and-recalls' } },
      { tag: 'Post-Market', title: 'Registration Maintenance', sub: 'Renewal, re-registration obligations, and maintaining valid market authorisation.', link: { label: 'View maintenance guide', href: 'post-market/registration-maintenance' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Marking & Special Topics',
    nodes: [
      { tag: 'UDI', badge: 'Mandatory', title: 'Digital Marking (Chestny ZNAK)', sub: "Russia's mandatory Data Matrix marking system for medical devices via the Honest Sign platform.", link: { label: 'View digital marking guide', href: 'udi-and-marking/digital-marking' } },
      { tag: 'Enforcement', title: 'Enforcement & Penalties', sub: 'Roszdravnadzor enforcement powers, inspection types, and KoAP administrative penalties.', link: { label: 'View enforcement guide', href: 'enforcement/overview' } },
      { tag: 'Digital Health', title: 'Software as a Medical Device', sub: 'How Russia regulates standalone software — classification and registration requirements.', link: { label: 'View SaMD guide', href: 'digital-health/software-as-a-medical-device' } },
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


# Russia Medical Device Regulation

> **Regulatory authority:** Roszdravnadzor (RZN) | **Register:** GRLS | **Legislation:** Federal Law 323-FZ · Decree No. 1684 | **Last reviewed:** May 2026 | *For reference only — not legal advice.*

Russia regulates medical devices through **Roszdravnadzor (RZN)** — the Federal Service for Surveillance in Healthcare, operating under the Ministry of Health. Russia operates two parallel registration systems: a **national route** valid only in Russia, and an **EAEU route** valid across all five Eurasian Economic Union member states. From **1 January 2027**, new device registrations must use the EAEU pathway only.


## Regulatory Pathway Map

<PathwayMap />

## Key Facts

| | |
|---|---|
| **Regulatory authority** | Roszdravnadzor (RZN) |
| **Legislation** | Federal Law No. 323-FZ · Government Decree No. 1684 (March 2025) |
| **Device classes** | Class I · IIa · IIb · III |
| **Registration routes** | National (Russia only) · EAEU (5 countries) |
| **State register** | GRLS — grls.rosminzdrav.ru |
| **RUS REP required** | Yes — mandatory for all foreign manufacturers |
| **QMS inspection** | Mandatory from January 2024 for Class IIa (sterile), IIb, and III |
| **Language** | Russian — all documents, labelling and IFU must be in Russian Cyrillic |
| **Digital marking** | Chestny ZNAK mandatory for specified device categories (from September 2023) |
| **EAEU-only deadline** | 1 January 2027 — national-only new registrations will no longer be accepted |

## What This Site Covers

- **[Getting Started](/getting-started/regulatory-framework-overview)** — regulatory framework, definitions, who must comply
- **[Device Classification](/device-classification/how-classification-works)** — four-class system, OKPD-2 codes, IVD classification, SaMD
- **[Registration Routes](/registration-routes/overview-national-vs-eaeu)** — national vs EAEU pathway, dossier requirements, timelines
- **[Technical Documentation](/technical-documentation/dossier-requirements)** — dossier requirements, labelling (Russian/Cyrillic), risk management
- **[Clinical Evaluation](/clinical-evaluation/clinical-evaluation-requirements)** — when local Russian clinical testing is required
- **[Quality Management](/quality-management/qms-overview)** — ISO 13485, GOST standards, manufacturing site inspections
- **[EAEU & Authorized Representative](/eaeu-and-authorized-rep/eaeu-overview)** — RUS REP role, EAEU framework, importer and distributor obligations
- **[Digital Marking (Chestny ZNAK)](/udi-and-marking/digital-marking)** — mandatory Data Matrix marking for specified device categories
- **[Post-Market](/post-market/overview)** — adverse event reporting, FSCAs, recalls, registration maintenance
- **[Enforcement](/enforcement/overview)** — Roszdravnadzor enforcement powers, inspection types, penalties
- **[Legislation](/legislation/federal-law-323)** — Federal Law 323-FZ, Decree No. 1684, EAEU instruments, MOH Orders

---
*Part of the [RAPath](https://rapath.org/) suite — medical device regulatory reference.*
