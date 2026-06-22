---
slug: /
sidebar_position: 1
title: Introduction
description: A practical regulatory reference for medical devices in Malaysia, covering the Medical Device Act 2012 (Act 737), MDA registration, establishment licensing, and post-market obligations.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'MDA definition under the Medical Device Act 2012 — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'MDA Regulatory Framework', sub: 'Medical Device Authority, Medical Device Act 2012, and phased implementation explained.', link: { label: 'View framework', href: '/getting-started/mda-regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Is Your Product a Medical Device?', sub: 'Borderline product guidance — how to determine if MDA rules apply to your product.', link: { label: 'Check product status', href: '/getting-started/is-your-product-a-medical-device' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'ASEAN-aligned', title: 'Classification Overview', sub: 'Class A / B / C / D system — ASEAN AMDD framework as implemented by MDA Malaysia.', link: { label: 'View classification rules', href: '/device-classification/classification-overview' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'In vitro diagnostic classification — specific rules and Class A–D criteria for IVDs in Malaysia.', link: { label: 'View IVD rules', href: '/device-classification/ivd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Device Registration',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'Registration Overview', sub: 'MDA registration process — Class A/B/C/D pathways and MyMDA portal submission.', link: { label: 'View registration overview', href: '/device-registration/registration-overview' } },
      { tag: 'Registration', title: 'MyMDA Portal Registration', sub: 'How to submit a device registration application through the MyMDA online portal.', link: { label: 'View portal guide', href: '/device-registration/mymda-registration' } },
      { tag: 'Registration', title: 'Conformity Assessment Overview', sub: 'What conformity assessment means for MDA registration — QMS and technical file requirements.', link: { label: 'View CA overview', href: '/conformity-assessment/conformity-assessment-overview' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System & Establishment Licence',
    nodes: [
      { tag: 'Quality System', badge: 'Mandatory', title: 'QMS Requirements', sub: 'ISO 13485 / MDSAP recognition requirements for MDA conformity assessment.', link: { label: 'View QMS requirements', href: '/conformity-assessment/quality-management-system' } },
      { tag: 'Establishment', badge: 'Mandatory', title: 'Establishment Licence', sub: 'Manufacturers, importers, and distributors must hold an MDA establishment licence.', link: { label: 'View establishment licence guide', href: '/establishment-licensing/establishment-licence-overview' } },
      { tag: 'Establishment', title: 'Local Authorised Representative', sub: 'Foreign manufacturers must appoint a Malaysian LAR to act as the regulatory contact.', link: { label: 'View LAR requirements', href: '/establishment-licensing/local-authorised-representative' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting', sub: 'What must be reported to MDA — mandatory problem reporting, timeframes, and process.', link: { label: 'View reporting rules', href: '/post-market-requirements/adverse-event-reporting' } },
      { tag: 'Post-Market', title: 'Field Safety Corrective Actions', sub: 'FSCA obligations — MDA notification process and recall coordination requirements.', link: { label: 'View FSCA guide', href: '/post-market-requirements/field-safety-corrective-actions' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'Proactive PMS activities — data collection, periodic reports, and MDA expectations.', link: { label: 'View PMS requirements', href: '/post-market-requirements/post-market-surveillance' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Malaysian labelling rules — mandatory label content and language requirements.', link: { label: 'View labelling rules', href: '/special-topics/labelling-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Topics',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD & Digital Health', sub: 'MDA approach to software as a medical device and digital health products.', link: { label: 'View SaMD guide', href: '/special-topics/samd-digital-health' } },
      { tag: 'ASEAN', title: 'ASEAN Harmonisation', sub: "Malaysia's role in ASEAN AMDD — CSDT, harmonised classification, and regional alignment.", link: { label: 'View ASEAN guide', href: '/special-topics/asean-harmonisation' } },
      { tag: 'Special Access', title: 'Special Access Route', sub: 'Access pathway for unregistered devices for patients with serious or life-threatening conditions.', link: { label: 'View special access guide', href: '/special-topics/special-access-route' } },
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


# Malaysia — Medical Device Regulation

**Regulatory body:** Medical Device Authority (MDA) — *Pihak Berkuasa Peranti Perubatan*  
**Governing legislation:** Medical Device Act 2012 (Act 737) · Medical Device Regulations 2012  
**Registration portal:** [MyMDA](https://mymda.mda.gov.my)  
**Official website:** [www.mda.gov.my](https://www.mda.gov.my)

---


## Regulatory Pathway Map

<PathwayMap />

## What This Site Covers

This reference covers the full lifecycle of a medical device in the Malaysian market:

| Section | Topics |
|---------|--------|
| [Getting Started](./getting-started/intro) | Regulatory framework, MDA overview, product scope, roadmap |
| [Device Classification](./device-classification/classification-overview) | Class A–D rules, IVD classification, worked examples |
| [Establishment Licensing](./establishment-licensing/establishment-licence-overview) | Manufacturer, importer, distributor licences, LAR requirements |
| [Device Registration](./device-registration/registration-overview) | Registration routes per class, IVD, renewal, MyMDA portal guide |
| [Conformity Assessment](./conformity-assessment/conformity-assessment-overview) | QMS (ISO 13485), technical file, CAB review, MDSAP |
| [Post-Market Requirements](./post-market-requirements/post-market-surveillance) | PMS, adverse event reporting, FSCA, MPR, PSUR, change notification |
| [Special Topics](./special-topics/samd-digital-health) | SaMD, IVDs, custom devices, Special Access Route, ASEAN/AMDD, labelling |
| [Reference](./reference/glossary) | Glossary, legislation list, useful links, FAQ |

## Key Facts at a Glance

| Parameter | Detail |
|-----------|--------|
| Device classes | Class A (lowest) → Class D (highest) |
| IVD framework | Annex II List A/B + self-test, GHTF SG5-aligned |
| Registration validity | 5 years |
| Establishment licence validity | 1 year (renewed annually) |
| LAR required? | Yes — mandatory for all foreign manufacturers |
| Submission portal | MyMDA |
| ASEAN harmonisation | AMDD · CSDT accepted |
| IMDRF member | Yes |
| MDSAP recognised | Yes |

## Where to Start

- **New to Malaysian regulation?** → [Is Your Product a Medical Device?](./getting-started/is-your-product-a-medical-device) then the [Regulatory Roadmap](./getting-started/regulatory-roadmap)
- **Ready to register?** → [Classification Overview](./device-classification/classification-overview) → [Establishment Licensing](./establishment-licensing/establishment-licence-overview) → [Device Registration](./device-registration/registration-overview)
- **Already registered?** → [Post-Market Requirements](./post-market-requirements/post-market-surveillance)
- **Foreign manufacturer?** → [Local Authorised Representative (LAR)](./establishment-licensing/local-authorised-representative)

:::info Disclaimer
This site is an independent reference resource and is not affiliated with or endorsed by the Medical Device Authority (MDA) or the Ministry of Health Malaysia. Information is provided for guidance only. Always verify current requirements directly with [MDA](https://www.mda.gov.my) and via the [MyMDA portal](https://mymda.mda.gov.my).
:::

