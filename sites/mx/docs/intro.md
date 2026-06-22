---
title: Introduction
sidebar_position: 1
slug: /
description: RAPath Mexico — your plain-English reference guide to medical device regulation under COFEPRIS, the Ley General de Salud, the Reglamento de Insumos para la Salud, and the Official Mexican Standards (NOMs).
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'COFEPRIS definition under the Ley General de Salud — scope, exclusions, and key terms.', link: { label: 'Read definition', href: 'getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'COFEPRIS structure, DISA, and the legal framework under Ley General de Salud and Reglamento de Insumos.', link: { label: 'View framework', href: 'getting-started/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Sanitary Licence, MRH obligations, and import permit requirements for manufacturers and importers.', link: { label: 'Check obligations', href: 'getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I–III', title: 'How Classification Works', sub: 'Three-class system (Class I / II / III) based on risk — classification rules and criteria.', link: { label: 'View classification rules', href: 'device-classification/how-classification-works' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'In vitro diagnostic classification in Mexico — specific rules and risk categories.', link: { label: 'View IVD rules', href: 'device-classification/ivd-classification' } },
      { tag: 'Classification', title: 'SaMD Classification', sub: 'Software as a medical device classification under COFEPRIS rules.', link: { label: 'View SaMD rules', href: 'device-classification/software-samd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Pre-Market Registration',
    nodes: [
      { tag: 'Pre-Market', badge: 'Key step', title: 'Registration Overview', sub: 'COFEPRIS registration process — standard and equivalency routes, DIGIEPRIS portal.', link: { label: 'View process overview', href: 'premarket/overview' } },
      { tag: 'Pre-Market', title: 'Standard Route', sub: 'Full dossier submission pathway — required for devices without a recognised reference approval.', link: { label: 'View standard route', href: 'premarket/standard-route' } },
      { tag: 'Pre-Market', title: 'Equivalency Route (Sept 2025)', sub: 'Abbreviated pathway using an approval from a recognised reference authority (FDA, CE, TGA).', link: { label: 'View equivalency route', href: 'premarket/equivalency-route' } },
      { tag: 'Pre-Market', title: 'Technical Dossier', sub: 'COFEPRIS technical file structure — contents and documentation requirements.', link: { label: 'View dossier guide', href: 'premarket/technical-dossier' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System & MRH',
    nodes: [
      { tag: 'Quality System', badge: 'NOM-241', title: 'GMP Requirements (NOM-241)', sub: 'NOM-241-SSA1-2012 sets GMP standards for medical device manufacturers in Mexico.', link: { label: 'View NOM-241 guide', href: 'quality-system/nom-241-overview' } },
      { tag: 'Quality System', title: 'GMP Documentation', sub: 'What documentation demonstrates NOM-241 compliance for COFEPRIS review.', link: { label: 'View GMP requirements', href: 'quality-system/gmp-requirements' } },
      { tag: 'MRH', badge: 'Mandatory', title: 'Mexico Registration Holder (MRH)', sub: 'Every device must have an MRH — a Mexican legal entity responsible for the registration.', link: { label: 'View MRH guide', href: 'mexico-registration-holder/what-is-mrh' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Technovigilance (NOM-240)', sub: "Mexico's adverse event reporting system under NOM-240 — obligations and timeframes.", link: { label: 'View technovigilance guide', href: 'postmarket/technovigilance-overview' } },
      { tag: 'Post-Market', title: 'Adverse Event Reporting', sub: 'What must be reported to COFEPRIS, by whom, and within what timeframes.', link: { label: 'View reporting rules', href: 'postmarket/adverse-event-reporting' } },
      { tag: 'Post-Market', title: 'Labelling (NOM-137-SSA1-2025)', sub: 'Revised labelling standard — Spanish language mandatory fields, effective May 2027.', link: { label: 'View labelling rules', href: 'postmarket/labelling-nom-137' } },
      { tag: 'Post-Market', title: 'FSCAs & Recalls', sub: 'Field safety corrective actions — COFEPRIS notification process and recall requirements.', link: { label: 'View FSCA guide', href: 'postmarket/fsca-recalls' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Access',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD & Digital Health', sub: 'COFEPRIS approach to software as a medical device, AI/ML, and connected devices.', link: { label: 'View SaMD guide', href: 'digital-health/samd-overview' } },
      { tag: 'Special Access', title: 'Clinical Investigations', sub: 'How to conduct clinical investigations in Mexico under COFEPRIS requirements.', link: { label: 'View clinical investigation guide', href: 'special-access/clinical-investigations' } },
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


# Mexico Medical Device Regulation

**RAPath Mexico** is a plain-English reference guide to medical device regulation in Mexico, covering the full device lifecycle under **COFEPRIS** (Comisión Federal para la Protección contra Riesgos Sanitarios) — Mexico's federal health authority.

:::info Regulatory authority
**COFEPRIS** operates as a division of Mexico's Ministry of Health (Secretaría de Salud / SSA). It governs device classification, market authorisation, quality system requirements, post-market surveillance, and enforcement for all medical devices placed on the Mexican market.
:::


## Regulatory Pathway Map

<PathwayMap />

## What this site covers

| Section | What you'll find |
|---|---|
| [Getting Started](getting-started/what-is-a-medical-device) | Framework overview, who needs to comply, DIGIPRiS portal |
| [Device Classification](device-classification/how-classification-works) | Class I · II · III, exemption annexes, IVD & SaMD |
| [Pre-Market](premarket/overview) | Standard route, equivalency route, dossier, timelines |
| [Mexico Registration Holder](mexico-registration-holder/what-is-mrh) | MRH obligations, appointing, changing holders |
| [Post-Market](postmarket/overview) | Technovigilance, NOM-240, renewals, labelling |
| [Quality System (NOM-241)](quality-system/nom-241-overview) | GMP requirements, ISO 13485 equivalency, inspections |
| [Legislation & NOMs](legislation/ley-general-de-salud) | Ley General de Salud, Reglamento Insumos, NOM tracker |
| [Digital Health & SaMD](digital-health/samd-overview) | Software, AI/ML, mobile health apps |
| [Special Access](special-access/compassionate-use) | Compassionate use, clinical investigations |
| [International](international/imdrf-membership) | IMDRF, PANDRH, MDSAP, multi-market strategy |
| [Resources](resources/useful-links) | Links, DIGIPRiS guide, fees, forms |

## The regulatory framework at a glance

Mexico's medical device regulatory system rests on three tiers:

1. **Ley General de Salud** (General Health Law) — the primary federal legislation establishing COFEPRIS's mandate and the requirement for sanitary registration.
2. **Reglamento de Insumos para la Salud** (Health Supplies Regulation) — detailed requirements for classification, registration, GMP, and post-market obligations.
3. **Normas Oficiales Mexicanas (NOMs)** — mandatory technical standards covering GMP (NOM-241), labelling (NOM-137), and technovigilance (NOM-240).

## Key 2024–2025 reforms

Mexico's regulatory framework has undergone significant modernisation:

- **September 2025** — Abbreviated (Equivalency) Route formally expanded to all IMDRF and MDSAP member authority approvals (FDA, Health Canada, CE Mark, TGA and more), with a 30-working-day target review. This expansion simplifies market entry for devices already approved by recognized international authorities, reducing local dossier requirements and review timelines. See [Equivalency Route](/premarket/equivalency-route).
- **May 2025** — NOM-137-SSA1-2025 (labelling) published; enters force May 2027. Introduces updated label elements including intended use, manufacturing date, and adverse incident instructions. See [Labelling — NOM-137](/postmarket/labelling-nom-137).
- **July 2025** — New classification decree replaces 2011/2014 exemption agreements, introducing updated Annexes 1–3. See [Device Classification](/device-classification/how-classification-works).
- **April 2025** — NOM-241-SSA1-2025 (GMP) entered into effect, replacing the 2021 version. See [NOM-241 Overview](/quality-system/nom-241-overview).
- **January 2026** — Subsequent registration renewals now eligible for periods of up to 10 years.

## How to use this site

Each section follows the same structure: an **overview page** explains the concept and its legal basis, followed by **topic pages** with practical detail. Every page links back to the relevant NOM, Ley General de Salud article, or COFEPRIS decree.

:::caution Disclaimer
This site is a regulatory reference resource, not legal or regulatory affairs advice. Regulations change. Always verify requirements against the current text of the relevant NOM or COFEPRIS decree. For device-specific guidance, consult a qualified regulatory affairs professional.
:::

---

*Part of the [RAPath](https://rapath.org/) suite — medical device regulatory reference.*
