---
slug: /
sidebar_position: 0
title: Introduction
description: RAPath Swissmedic — plain English Swiss medical device regulatory reference for MedDO, IVDO, Swissmedic, CH REP, and DAPI.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'Swissmedic definition under the MedDO (Medical Devices Ordinance) — scope and key terms.', link: { label: 'Read definition', href: 'start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'MedDO vs. IvDO', sub: 'Switzerland has two ordinances: MedDO for general devices and IvDO for IVDs — key differences.', link: { label: 'View MedDO vs IvDO comparison', href: 'start-here/medo-vs-ivdo' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'Manufacturer, CH-REP, importer, and distributor obligations under Swiss law.', link: { label: 'Check obligations', href: 'start-here/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'EU-aligned', title: 'How Classification Works', sub: 'Swiss classification mirrors EU MDR/IVDR — Class I / IIa / IIb / III and AIMD.', link: { label: 'View classification rules', href: 'pre-market/classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Swiss Market Access',
    nodes: [
      { tag: 'Pre-Market', badge: 'Key step', title: 'Swissmedic Registration', sub: 'Swiss market access options — CE marking recognition via MRA, and Swiss national requirements.', link: { label: 'View market access guide', href: 'pre-market/swissmedic-registration' } },
      { tag: 'Pre-Market', title: 'Conformity Assessment', sub: 'Conformity assessment routes — CE marking (via EU NB) + MRA recognition, or Swiss-only path.', link: { label: 'View conformity assessment guide', href: 'pre-market/conformity-assessment' } },
      { tag: 'Pre-Market', title: 'GSPR (Swiss)', sub: 'General Safety and Performance Requirements under Swiss MedDO — mirroring EU MDR Annex I.', link: { label: 'View GSPR guide', href: 'pre-market/gspr' } },
      { tag: 'Pre-Market', title: 'Technical Documentation', sub: 'Technical file requirements — same structure as EU MDR Annex II/III for Swiss market.', link: { label: 'View tech doc guide', href: 'pre-market/technical-documentation' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'QMS & Conformity Assessment Bodies',
    nodes: [
      { tag: 'QMS', badge: 'ISO 13485 required', title: 'QMS in Switzerland', sub: 'ISO 13485 requirements — Swiss-specific QMS audit approach and Swissmedic expectations.', link: { label: 'View QMS requirements', href: 'qms/qms-requirements' } },
      { tag: 'CAB', title: 'Swiss Conformity Assessment Bodies', sub: 'EU Notified Bodies cover Switzerland via MRA — how to select a CAB for the Swiss market.', link: { label: 'View CAB guide', href: 'conformity-assessment-bodies/what-cabs-do' } },
      { tag: 'CH-REP', badge: 'Mandatory', title: 'CH-REP (Swiss Representative)', sub: 'Non-Swiss manufacturers must appoint a Swiss Representative (CH-REP) — obligations and eligibility.', link: { label: 'View CH-REP guide', href: 'start-here/ch-reps' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Vigilance Reporting', sub: 'Swissmedic vigilance — incident reporting obligations, timeframes, and EUDAMED alignment.', link: { label: 'View reporting guide', href: 'post-market/vigilance' } },
      { tag: 'Post-Market', title: 'FSCAs & Recalls', sub: 'Field safety corrective actions — Swissmedic notification and coordination with EU NCAs.', link: { label: 'View FSCA guide', href: 'post-market/fsca' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'PMS plan, PMCF, and PSUR requirements — mirroring EU MDR obligations for Swiss market.', link: { label: 'View PMS guide', href: 'post-market/pms' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Swiss labelling rules — multi-language (DE/FR/IT/EN) requirements and Swiss-specific additions.', link: { label: 'View labelling guide', href: 'post-market/labelling' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Access',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD Overview', sub: 'Swissmedic approach to software as a medical device — MDCG 2019-11 applicability in Switzerland.', link: { label: 'View SaMD guide', href: 'digital-health/samd-overview' } },
      { tag: 'Special Access', title: 'Hospital Exemption', sub: 'Custom-made devices manufactured in Swiss hospitals — hospital exemption provisions under MedDO.', link: { label: 'View hospital exemption guide', href: 'special-access/hospital-exemption' } },
      { tag: 'International', title: 'MRA with EU', sub: 'Switzerland-EU Mutual Recognition Agreement for medical devices — current status and practical impact.', link: { label: 'View MRA guide', href: 'legislation/mra-with-eu' } },
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

# Introduction
**Swiss Medical Device Regulatory Reference** — plain English guidance for [MedDO (SR 812.213)](https://www.fedlex.admin.ch/eli/cc/2021/205/en), [IVDO (SR 812.219)](https://www.fedlex.admin.ch/eli/cc/2022/103/en), and the [Therapeutic Products Act](https://www.fedlex.admin.ch/eli/cc/2001/422/en).

| Section | Scope |
|---|---|
| [Start Here](./start-here/what-is-a-medical-device) | Definitions, MedDO vs IVDO, roles, lifecycle, glossary |
| [Pre-Market](./pre-market/classification/how-classification-works) | Classification, GSPRs, tech docs, conformity, Swissmedic registration, clinical evidence |
| [Post-Market](./post-market/index.md) | Vigilance, PMS, PSUR, FSCA, labelling (DE/FR/IT), UDI, advertising |
| [Legislation](./legislation/index.md) | TPA, MedDO, IVDO, ClinO-MD, MRA with EU, how to read Swiss law |
| [Guidance](./guidance/index.md) | Swissmedic guidance index, MDCG applicability, forms |
| [What's New](./whats-new/index.md) | Regulatory changes, MRA updates, consultations, transitional tracker |
| [Conformity Assessment Bodies](./conformity-assessment-bodies/index.md) | EU NBs in Switzerland, NANDO, audit process |
| [Special Access](./special-access/index.md) | Compassionate use, hospital exemption, named-patient |
| [Market Surveillance](./market-surveillance/index.md) | Swissmedic enforcement, safeguard procedures, cantons |
| [Non-Swiss Manufacturer Access](./non-swiss-access/index.md) | CH REP obligations, MRA impact, CH vs EU vs FDA |

**New to Swiss regulation?** → [What is a Medical Device?](./start-here/what-is-a-medical-device)
**Not sure which ordinance applies?** → [MedDO vs IVDO](./start-here/medo-vs-ivdo)
**Non-Swiss manufacturer?** → [Requirements for Non-Swiss Manufacturers](./non-swiss-access/requirements-for-non-swiss)

:::warning Disclaimer
Content is AI-assisted and intended as a navigation aid only. Always verify against official [Swissmedic](https://www.swissmedic.ch) and [Fedlex](https://www.fedlex.admin.ch) sources. Not legal or regulatory advice.
:::

## Regulatory Pathway Map

<PathwayMap />
