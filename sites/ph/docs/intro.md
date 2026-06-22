---
title: Introduction
sidebar_position: 1
slug: /
description: Reference guide for Philippines medical device regulation — RA 9711, CDRRHR / FDA Philippines, CMDN/CMDR framework, ASEAN AMDD Class A–D, LTO requirements, and abridged ASEAN reliance pathway.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'Legal definition under RA 9711 and the FDA Act of 2009 — scope, exclusions, and key terms.', link: { label: 'Read definition', href: 'getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'How CDRRHR and FDA Philippines are structured and which laws govern medical devices.', link: { label: 'View framework', href: 'getting-started/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'LTO and CDN/CDR obligations for manufacturers, importers, traders, and distributors.', link: { label: 'Check obligations', href: 'getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'ASEAN-aligned', title: 'How Classification Works', sub: 'Class A / B / C / D — four-tier ASEAN framework as applied by CDRRHR.', link: { label: 'View classification rules', href: 'classification/overview' } },
      { tag: 'Pre-Market', title: 'Special Device Types', sub: 'IVDs, SaMD, combination products — specific classification and pathway considerations.', link: { label: 'View special types', href: 'pre-market/special-device-types' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Pre-Market Registration',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'CMDN — Class A Notification', sub: 'Certificate of Medical Device Notification pathway for lowest-risk devices.', link: { label: 'View CMDN guide', href: 'cmdn-cmdr/cmdn-class-a' } },
      { tag: 'Registration', title: 'CMDR — Class B / C / D Registration', sub: 'Certificate of Medical Device Registration for higher-risk devices — full dossier submission.', link: { label: 'View CMDR guide', href: 'cmdn-cmdr/cmdr-class-b-c-d' } },
      { tag: 'Pre-Market', title: 'Technical Documentation', sub: 'What goes into a CDRRHR technical file: labelling, risk management, clinical evidence.', link: { label: 'View requirements', href: 'pre-market/technical-documentation' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'When clinical trials are needed vs. literature or equivalence — CDRRHR expectations.', link: { label: 'View requirements', href: 'pre-market/clinical-evidence' } },
      { tag: 'Registration', title: 'Abridged Pathway', sub: 'Expedited route for devices already registered with a recognised reference NRA.', link: { label: 'View abridged route', href: 'cmdn-cmdr/abridged-pathway' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System',
    nodes: [
      { tag: 'Quality System', badge: 'Mandatory B/C/D', title: 'ISO 13485 Requirements', sub: 'CDRRHR mandates ISO 13485 QMS certification for Class B, C, and D devices.', link: { label: 'View QMS requirements', href: 'quality-system/iso-13485-requirements' } },
      { tag: 'Quality System', title: 'CDRRHR Inspections', sub: 'Manufacturing site inspection process — what auditors assess and how to prepare.', link: { label: 'View inspection guide', href: 'quality-system/cdrrhr-inspections' } },
      { tag: 'CDRRHR', title: 'Establishment License (LTO)', sub: 'Licence to Operate — who needs it, how to apply, and renewal cycle.', link: { label: 'View LTO guide', href: 'cdrrhr-operations/establishment-license' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Vigilance & Adverse Events', sub: 'Mandatory reporting obligations — what to report, timeframes, and CDRRHR notification.', link: { label: 'View reporting rules', href: 'post-market/vigilance' } },
      { tag: 'Post-Market', title: 'Recalls & Field Safety', sub: 'How to initiate a voluntary or CDRRHR-mandated recall and FSCA notification process.', link: { label: 'View recall process', href: 'post-market/recalls' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance Plan', sub: 'Proactive PMS requirements — data collection, trend analysis, and PMCF obligations.', link: { label: 'View PMS requirements', href: 'post-market/pms-plan' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Philippine labelling rules — mandatory fields, language requirements, and IFU standards.', link: { label: 'View labelling rules', href: 'post-market/labelling' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Resources',
    nodes: [
      { tag: 'Digital Health', title: 'Digital Health Framework', sub: 'FDA Philippines approach to mobile health, connected devices, and software products.', link: { label: 'View framework', href: 'digital-health/framework' } },
      { tag: 'Digital Health', title: 'SaMD & Medical Device Software', sub: 'Classification and registration requirements for Software as a Medical Device.', link: { label: 'View SaMD guide', href: 'digital-health/samd-mdsw' } },
      { tag: 'Resources', title: 'eServices Portal', sub: 'How to use the FDA Philippines online portal for CMDN/CMDR and LTO submissions.', link: { label: 'View portal guide', href: 'guidance-resources/eservices-portal' } },
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


# Philippines Medical Device Regulation

> **Regulatory authority:** FDA Philippines / Center for Device Regulation, Radiation Health and Research (CDRRHR) | **Legislation:** RA 9711 (FDA Act of 2009), DOH Administrative Orders | **Last reviewed:** May 2026 | *For reference only — not legal advice.*

The Philippines regulates medical devices through the **Center for Device Regulation, Radiation Health and Research (CDRRHR)** — a center within **FDA Philippines** under the **Department of Health (DoH)**. The framework combines the **FDA Act of 2009 (RA 9711)** with Administrative Orders, and is aligned with the **ASEAN Medical Device Directive (AMDD)**.


## Regulatory Pathway Map

<PathwayMap />

## Key Facts

| | |
|---|---|
| **Regulatory body** | FDA Philippines / CDRRHR (under DoH) |
| **Primary law** | RA 9711 — Food and Drug Administration Act of 2009; DOH AO 2018-002 |
| **Classification** | Class A (low) · B · C · D (high) — ASEAN AMDD |
| **Class A pathway** | CMDN — Certificate of Medical Device Notification |
| **Class B/C/D pathway** | CMDR — Certificate of Medical Device Registration |
| **Abridged route** | FDA Circular 2022-008 — 30 working days via ASEAN NRA reliance |
| **IVDs** | Currently NOT required to register — upcoming regulation pending |
| **LTO** | License to Operate — mandatory for all manufacturers, importers, distributors |
| **Deficiency period** | 90 calendar days to address application deficiencies |
| **ASEAN alignment** | Full ASEAN AMDD + CSDT participant |

## What This Site Covers

- **[Getting Started](/getting-started/what-is-a-medical-device)** — definitions, CDRRHR/FDA structure, ASEAN alignment, IVD status, who must comply
- **[Classification](/classification/overview)** — ASEAN AMDD Class A–D, IVD exception, product classification inquiry
- **[CMDN & CMDR](/cmdn-cmdr/cmdn-class-a)** — Class A notification, Class B/C/D registration, abridged pathway, technical documentation
- **[Pre-Market](/pre-market/overview)** — technical documentation, CSDT structure, clinical evidence by class, special device types
- **[CDRRHR Operations](/cdrrhr-operations/establishment-license)** — LTO, compliance and enforcement, emergency provisions
- **[Quality System](/quality-system/overview)** — ISO 13485 requirements, GDP, CDRRHR inspections
- **[Post-Market](/post-market/overview)** — vigilance, recalls, PMS plan, CMDN/CMDR maintenance, labelling
- **[Digital Health](/digital-health/framework)** — MDSW/SaMD framework, IEC 62304, cybersecurity (draft circular 2025)
- **[Legislation](/legislation/overview)** — RA 9711, RA 3720, Administrative Orders, FDA Circulars, ASEAN instruments
- **[Guidance & Resources](/guidance-resources/overview)** — eServices portal, CSDT templates, fee schedule, administrative orders index

---
*Part of the [RAPath](https://rapath.org/) suite.*
