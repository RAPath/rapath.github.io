---
slug: /
sidebar_position: 1
title: Introduction
description: A practical English-language reference for navigating Indonesia's medical device regulatory framework under Kemenkes and BPOM.
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Overview', title: 'What is a Medical Device?', sub: 'Definition under Permenkes 62/2017 and the broader Kemenkes regulatory framework.', link: { label: 'Read definition', href: '/overview/what-is-a-medical-device' } },
      { tag: 'Overview', title: 'Regulatory Landscape', sub: 'Kemenkes, BPOM, and the Directorate of Medical Devices — who does what in Indonesia.', link: { label: 'View regulatory landscape', href: '/overview/regulatory-landscape' } },
      { tag: 'Overview', badge: 'Key step', title: 'Kemenkes & BPOM Roles', sub: 'How authority is divided between the Ministry of Health and BPOM for different device categories.', link: { label: 'View authority guide', href: '/regulatory-authority/kemenkes' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'ASEAN-aligned', title: 'Classification System', sub: 'Class A / B / C / D system — Indonesian application of the ASEAN AMDD framework.', link: { label: 'View classification rules', href: '/device-classification/classification-system' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'In vitro diagnostic classification — specific rules and Class A–D criteria for IVDs.', link: { label: 'View IVD classification', href: '/device-classification/ivd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Market Authorisation (NIE)',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'Registration Pathways', sub: 'Overview of NIE registration pathways — full, variation, and reliance routes.', link: { label: 'View pathway overview', href: '/market-access/registration-pathways' } },
      { tag: 'Registration', title: 'NIE Registration', sub: 'Nomor Izin Edar — the product authorisation number required to market devices in Indonesia.', link: { label: 'View NIE guide', href: '/market-access/nie-registration' } },
      { tag: 'Technical Docs', title: 'ASEAN CSDT Dossier', sub: 'Common Submission Dossier Template — structure and content requirements for NIE application.', link: { label: 'View CSDT guide', href: '/technical-dossier/asean-csdt' } },
      { tag: 'Local Rep', badge: 'Mandatory', title: 'Local Authorised Representative', sub: 'Indonesian PAK holder or importer as mandatory local representative for foreign manufacturers.', link: { label: 'View LAR requirements', href: '/local-representation/local-authorized-representative' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'Distribution Licence & QMS',
    nodes: [
      { tag: 'Licence', badge: 'Mandatory', title: 'CDAKB Distribution Licence', sub: 'Izin Penyalur Alat Kesehatan — distribution authorisation required for all medical device distributors.', link: { label: 'View CDAKB guide', href: '/market-access/cdakb-gdp' } },
      { tag: 'Portal', title: 'Regalkes Portal', sub: 'Ministry of Health online system — NIE registration and distribution licence submissions.', link: { label: 'View portal guide', href: '/regalkes-portal/regalkes-overview' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'PMS Overview', sub: 'Post-market surveillance obligations — data collection, trend analysis, and reporting.', link: { label: 'View PMS guide', href: '/post-market-surveillance/pms-overview' } },
      { tag: 'Post-Market', title: 'Adverse Event Reporting', sub: 'What must be reported to Kemenkes — timeframes and notification process.', link: { label: 'View reporting rules', href: '/post-market-surveillance/adverse-event-reporting' } },
      { tag: 'Post-Market', title: 'Field Safety Corrective Actions', sub: 'FSCA obligations — Kemenkes notification process and recall coordination in Indonesia.', link: { label: 'View FSCA guide', href: '/post-market-surveillance/field-safety-corrective-actions' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Indonesian labelling rules — Bahasa Indonesia requirements and mandatory label content.', link: { label: 'View labelling rules', href: '/labeling/labeling-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Access',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD Overview', sub: 'Kemenkes approach to software as a medical device and digital health products.', link: { label: 'View SaMD guide', href: '/digital-health/samd-overview' } },
      { tag: 'ASEAN', title: 'ASEAN AMDD Harmonisation', sub: "Indonesia's participation in ASEAN Medical Device Directive alignment and CSDT adoption.", link: { label: 'View ASEAN guide', href: '/asean-harmonisation/amdd-overview' } },
      { tag: 'Special Access', title: 'Compassionate Use', sub: 'Access pathway for unregistered devices for patients with serious unmet medical needs.', link: { label: 'View compassionate use guide', href: '/special-access/compassionate-use' } },
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


# Indonesia Medical Device Regulation

Indonesia is Southeast Asia's largest healthcare market, with over 270 million people and a rapidly expanding medical technology sector. For medical device manufacturers seeking market access, Indonesia operates a **dual-authority system**: the **Ministry of Health (Kemenkes)** regulates medical devices and issues the mandatory marketing authorisation (NIE), while **BPOM** (the National Agency of Drug and Food Control) oversees pharmaceuticals, cosmetics, and shares responsibility for GMP inspections.

This site provides a practical English-language reference for foreign and domestic manufacturers navigating Indonesia's regulatory requirements.

---


## Regulatory Pathway Map

<PathwayMap />

## What You Need to Know First

:::info Key principle: local representation is mandatory
Foreign manufacturers **cannot register directly** with Kemenkes or BPOM. You must appoint an Indonesian legal entity as your **Local Authorised Representative (LAR)** — a company holding an IDAK (distribution licence) and CDAKB (Good Distribution Practice certificate). That entity becomes the holder of your product registration (NIE).
:::

:::tip Dual-authority system
- **Kemenkes (Ministry of Health)** → medical device registration (NIE), Regalkes portal, market surveillance
- **BPOM/NADFC** → GMP inspections, pharmaceutical products, cosmetics, some overlap on device oversight

If you're registering a **medical device**, your primary regulator is **Kemenkes**, not BPOM.
:::

---

## Site Overview

| Section | What It Covers |
|---|---|
| [Overview](./overview/what-is-a-medical-device) | Device definition, regulatory landscape, key legislation |
| [Regulatory Authority](./regulatory-authority/kemenkes) | Kemenkes, BPOM/NADFC, Directorate of Medical Devices |
| [Device Classification](./device-classification/classification-system) | Class A–D risk-based system, IVD classification |
| [Market Access — NIE](./market-access/nie-registration) | NIE registration, IDAK, CDAKB, pathways, timelines |
| [Local Representation](./local-representation/local-authorized-representative) | LAR, PT PMA, neutral licence holder, LoA |
| [Regalkes Portal](./regalkes-portal/regalkes-overview) | Online registration system, submission steps |
| [Technical Dossier](./technical-dossier/asean-csdt) | ASEAN CSDT, administrative and technical documents |
| [Labeling](./labeling/labeling-requirements) | Bahasa Indonesia rules, Halal labeling, e-labeling |
| [Post-Market Surveillance](./post-market-surveillance/pms-overview) | Adverse events, NIE renewal, change notifications |
| [Special Access](./special-access/emergency-use-authorization) | Emergency use, compassionate use, research imports |
| [Digital Health & SaMD](./digital-health/samd-overview) | Software as a Medical Device, connected devices |
| [ASEAN Harmonisation](./asean-harmonisation/amdd-overview) | AMDD, CSDT alignment, mutual recognition |
| [Resources](./resources/glossary) | Glossary, key regulations, useful links |

---

## Key Facts at a Glance

| Item | Detail |
|---|---|
| Primary regulator | Kemenkes (Ministry of Health) |
| Secondary regulator | BPOM / NADFC |
| Registration number | NIE — *Nomor Izin Edar* |
| NIE validity | 5 years (renewable) |
| Registration system | Regalkes portal (regalkes.kemkes.go.id) |
| Classification system | Class A (lowest) to Class D (highest) |
| Framework alignment | ASEAN AMDD / GHTF |
| Dossier format | ASEAN CSDT |
| Key legislation | Permenkes No. 62/2017 |
| Foreign manufacturer | Must appoint local LAR (IDAK + CDAKB holder) |
| Language requirement | Bahasa Indonesia mandatory for all safety information |

---

## Quick Navigation by Role

**If you are a foreign manufacturer:**
Start with [Local Representation](./local-representation/local-authorized-representative) → then [Market Access — NIE](./market-access/nie-registration) → then [Technical Dossier](./technical-dossier/asean-csdt).

**If you are an Indonesian distributor or LAR:**
Start with [Market Access — NIE](./market-access/nie-registration) → [Regalkes Portal](./regalkes-portal/regalkes-overview) → [Post-Market Surveillance](./post-market-surveillance/pms-overview).

**If you are classifying a device:**
Start with [Device Classification](./device-classification/classification-system).

---

:::caution Disclaimer
This site is a reference guide for educational purposes only. It does not constitute legal or regulatory advice. Regulations change frequently — always verify requirements with Kemenkes, BPOM, or a qualified Indonesian regulatory affairs professional before making compliance decisions.
:::

