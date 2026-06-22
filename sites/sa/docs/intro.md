---
title: Introduction
sidebar_position: 1
slug: /
description: RAPath Saudi Arabia — your open reference guide to medical device regulation under the Saudi Food and Drug Authority (SFDA).
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'SFDA definition under the Medical Devices and Supplies Regulation — scope and key terms.', link: { label: 'Read definition', href: '/getting-started/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'SFDA Medical Devices Sector, Medical Devices Law (2017), and MDS-REQ guidance series.', link: { label: 'View framework', href: '/getting-started/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Who Must Comply?', sub: 'MDMA, MDEL, and AR/LAR obligations for manufacturers, importers, and distributors.', link: { label: 'Check obligations', href: '/getting-started/who-needs-to-comply' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'EU MDR-aligned', title: 'How Classification Works', sub: 'Class A / B / C / D system based on risk — MDS-G008 classification guidance.', link: { label: 'View classification rules', href: '/device-classification/how-classification-works' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'In vitro diagnostic classification — separate Class A–D framework for IVDs.', link: { label: 'View IVD classification', href: '/device-classification/ivd-classification' } },
      { tag: 'Classification', title: 'SaMD Classification', sub: 'Software as a medical device classification under SFDA rules and MDS-G guidance.', link: { label: 'View SaMD classification', href: '/device-classification/software-samd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'MDMA Registration (TFA)',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'MDMA Overview', sub: 'Medical Device Marketing Authorization — the mandatory product licence for all devices in KSA.', link: { label: 'View MDMA overview', href: '/mdma-registration/mdma-overview' } },
      { tag: 'Registration', title: 'Technical File Assessment (TFA)', sub: 'Single registration route since 2022 — TFA pathway process and review timelines.', link: { label: 'View TFA route', href: '/mdma-registration/tfa-route' } },
      { tag: 'Registration', title: 'GHAD Portal Submission', sub: "SFDA's unified electronic platform for all MDMA applications and communications.", link: { label: 'View GHAD guide', href: '/mdma-registration/ghad-portal' } },
      { tag: 'Technical Docs', title: 'Technical File Overview', sub: 'Structure and content of the SFDA technical file — Essential Principles and clinical evaluation.', link: { label: 'View technical file guide', href: '/technical-documentation/technical-file-overview' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Quality System & AR/LAR',
    nodes: [
      { tag: 'Quality System', badge: 'ISO 13485 required', title: 'ISO 13485 Overview', sub: 'SFDA requires ISO 13485 certification from a recognised Conformity Assessment Body (CAB).', link: { label: 'View QMS requirements', href: '/quality-system/iso-13485-overview' } },
      { tag: 'Quality System', title: 'Inspections & Audits', sub: 'SFDA CAB audit process and how manufacturing site inspections are conducted.', link: { label: 'View inspection guide', href: '/quality-system/inspections-audits' } },
      { tag: 'AR/LAR', badge: 'Mandatory', title: 'Authorised Representative', sub: 'AR and LAR (Local AR) obligations — mandatory in-country contact for foreign manufacturers.', link: { label: 'View AR requirements', href: '/authorized-representative/ar-overview' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting', sub: 'NCMDR reporting obligations — what to report, timeframes, and SFDA process.', link: { label: 'View reporting rules', href: '/post-market/adverse-event-reporting' } },
      { tag: 'Post-Market', title: 'FSCAs & Recalls', sub: 'Field safety corrective actions — SFDA notification process and recall coordination.', link: { label: 'View FSCA guide', href: '/post-market/fsca-recalls' } },
      { tag: 'Post-Market', title: 'PMS & PSUR', sub: 'Post-market surveillance plan and Periodic Safety Update Report requirements.', link: { label: 'View PMS/PSUR guide', href: '/post-market/pms-psur' } },
      { tag: 'Post-Market', title: 'Labelling & Advertising', sub: 'SFDA labelling rules — Arabic language requirements and advertising restrictions.', link: { label: 'View labelling rules', href: '/post-market/labelling-advertising' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & UDI',
    nodes: [
      { tag: 'UDI', badge: 'Mandatory', title: 'UDI Requirements', sub: 'Unique Device Identification — MDS-REQ 7 implementation timeline and labelling requirements.', link: { label: 'View UDI guide', href: '/udi/udi-overview' } },
      { tag: 'Digital Health', title: 'SaMD Overview', sub: 'SFDA approach to software as a medical device, AI/ML, and connected health products.', link: { label: 'View SaMD guide', href: '/digital-health/samd-overview' } },
      { tag: 'Digital Health', title: 'AI/ML Device Guidance', sub: 'SFDA guidance on artificial intelligence and machine learning in medical devices.', link: { label: 'View AI/ML guide', href: '/digital-health/ai-ml-guidance' } },
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


# RAPath · Saudi Arabia (SFDA)

Welcome to the RAPath guide for **medical device regulation in the Kingdom of Saudi Arabia (KSA)**. This site covers the full lifecycle of a medical device — from classification and market authorization through to post-market surveillance and establishment licensing — under the framework administered by the **Saudi Food and Drug Authority (SFDA)**.

:::info Regulatory reference only
This site is a plain-language reference resource. It is not legal or regulatory advice. Always verify requirements against current SFDA guidance and consult a qualified regulatory professional for your specific device.
:::


## Regulatory Pathway Map

<PathwayMap />

## What you will find here

| Section | What it covers |
|---|---|
| **Getting Started** | Definitions, who must comply, lifecycle overview |
| **Device Classification** | Class A / B / C / D rules, IVD classification, MDS-G008 |
| **MDMA Registration** | Marketing Authorization, TFA route, GHAD portal, timelines |
| **Technical Documentation** | Technical file structure, Essential Principles, clinical evaluation |
| **Authorized Representative & MDEL** | AR / LAR obligations, establishment licensing |
| **Quality System** | ISO 13485, SFDA CABs, inspections |
| **Post-Market** | Adverse events, FSCAs, PSUR, labelling, MDMA renewal |
| **UDI** | Unique Device Identification — MDS-REQ 7 |
| **Legislation & Regulations** | Medical Devices Law, Implementing Regulation, MDS-REQ series |
| **GCC & International** | GCC harmonisation, IMDRF, multi-market strategy |
| **Digital Health & SaMD** | Software, AI/ML, connected devices |
| **Special Access & Enforcement** | Novel devices, compassionate use, SFDA enforcement |
| **Resources** | Glossary, useful links, official SFDA portals |

## The regulator

The **Saudi Food and Drug Authority (SFDA)** is the national regulatory body responsible for overseeing the safety, quality, and efficacy of medical devices in the Kingdom of Saudi Arabia. Its Medical Devices Sector administers all aspects of device regulation, from pre-market authorization to post-market surveillance, in accordance with the **Medical Devices and Supplies Regulation (Medical Devices Law)** and its Implementing Regulation (2021).

The SFDA is a member of the **International Medical Device Regulators Forum (IMDRF)** and has aligned its regulatory framework closely with international best practice — particularly the **EU MDR 2017/745** — while maintaining distinct Saudi-specific requirements, procedures, and the GHAD electronic submission system.

## Key concepts at a glance

- **MDMA** — Medical Device Marketing Authorization: required for all devices before they may be marketed in KSA
- **TFA** — Technical File Assessment: the single registration pathway since 2022
- **GHAD** — SFDA's unified electronic system for all submissions
- **AR / LAR** — Authorized Representative / Local Authorized Representative: mandatory in-country contact for foreign manufacturers
- **MDEL** — Medical Device Establishment License: required for manufacturers, importers, distributors, and ARs
- **NCMDR** — National Centre for Medical Device Reporting: handles adverse event and vigilance submissions
- **MDS-REQ series** — SFDA's primary guidance documents covering classification, technical files, QMS, UDI, advertising, and more

## Part of the RAPath suite

RAPath provides free, open regulatory reference guides for multiple jurisdictions:

- [Australia (TGA)](https://rapath.org/au/)
- [European Union (EU MDR / IVDR)](https://rapath.org/eu/)
- [Canada (Health Canada)](https://rapath.org/hc/)
- [Singapore (HSA)](https://rapath.org/sg/)
- [United Kingdom (MHRA)](https://rapath.org/uk/)
- [United States (FDA)](https://rapath.org/us/)
- **Saudi Arabia (SFDA)** — you are here

Questions, corrections, or contributions? Visit the [RAPath hub](https://rapath.org/) or open an issue in the [GitHub repository](https://github.com/rapath).
                                                                                                                                                   