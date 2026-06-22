---
title: Introduction
sidebar_position: 1
slug: /
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'PMD Act (Pharmaceuticals and Medical Devices Act) definition — scope and key terms.', link: { label: 'Read definition', href: 'start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'PMDA vs. MHLW', sub: "How PMDA (review) and MHLW (regulation/approval) work together in Japan's system.", link: { label: 'View PMDA vs MHLW guide', href: 'start-here/pmda-vs-mhlw' } },
      { tag: 'Getting Started', badge: 'Japan-specific', title: 'Approval vs. Certification vs. Notification', sub: 'Three pathways: Shonin (approval), Ninsho (certification), Todokede (notification) — key differences.', link: { label: 'View pathway comparison', href: 'start-here/approval-vs-certification-vs-notification' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I–IV', title: 'JMDN Classification', sub: 'Class I / II / III / IV based on risk — Japan Medical Device Nomenclature (JMDN) codes.', link: { label: 'View classification guide', href: 'pre-market/classification/how-classification-works' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Pre-Market Pathway',
    nodes: [
      { tag: 'Pre-Market', badge: 'Class III/IV', title: 'Approval (Shonin)', sub: 'PMDA review pathway for highest-risk devices — clinical data, STED documentation, and review process.', link: { label: 'View Shonin guide', href: 'pre-market/approval-shonin' } },
      { tag: 'Pre-Market', badge: 'Class II/III', title: 'Certification (Ninsho)', sub: 'Third-party certification by a Registered Certification Body for devices with recognised standards.', link: { label: 'View Ninsho guide', href: 'pre-market/certification-ninsho' } },
      { tag: 'Pre-Market', badge: 'Class I', title: 'Notification (Todokede)', sub: 'Self-declaration pathway for lowest-risk Class I devices.', link: { label: 'View Todokede guide', href: 'pre-market/notification-todokede' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'PMDA clinical evidence requirements — when Japanese clinical trials are needed vs. foreign data.', link: { label: 'View evidence requirements', href: 'pre-market/clinical-evidence/clinical-evaluation-report' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'QMS & MAH Licence',
    nodes: [
      { tag: 'QMS', badge: 'QMS Ordinance', title: 'QMS Ordinance Overview', sub: 'Japan QMS Ordinance (Ministerial Ordinance No. 169) — aligned with ISO 13485 since 2021.', link: { label: 'View QMS overview', href: 'quality-management/qms-ordinance-overview' } },
      { tag: 'QMS', title: 'PMDA & Prefectural Inspections', sub: 'How QMS inspections are conducted by PMDA and prefectural authorities in Japan.', link: { label: 'View inspection guide', href: 'quality-management/pmda-prefectural-inspections' } },
      { tag: 'MAH', badge: 'Japan domicile required', title: 'MAH Licence', sub: 'Marketing Authorization Holder (MAH/Seizo-Hanbai-Gyosha) — licence types and domicile requirement.', link: { label: 'View MAH licence guide', href: 'mah-licences/what-is-a-mah' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting', sub: 'MAH reporting obligations to PMDA and MHLW — timeframes and reporting system.', link: { label: 'View reporting guide', href: 'post-market/adverse-event-reporting/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'Recalls & Field Safety', sub: 'Recall notification process — MHLW reporting and recall execution obligations.', link: { label: 'View recall guide', href: 'post-market/recalls-field-safety/when-a-recall-is-required' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance (GPSP)', sub: 'Good Post-Marketing Study Practice — GPSP ordinance requirements for clinical data collection.', link: { label: 'View GPSP guide', href: 'post-market/post-market-surveillance/re-examination-re-evaluation' } },
      { tag: 'Post-Market', title: 'Labelling & IFU', sub: 'Japanese labelling rules — mandatory Japanese-language fields and IFU requirements.', link: { label: 'View labelling guide', href: 'post-market/labelling-ifu/japanese-labelling-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Foreign Manufacturer & Special Access',
    nodes: [
      { tag: 'Foreign Manufacturer', badge: 'Mandatory', title: 'Foreign Manufacturer Registration', sub: 'All foreign manufacturers must register with MHLW before devices can be approved or certified.', link: { label: 'View registration guide', href: 'mah-licences/foreign-manufacturer-registration' } },
      { tag: 'MAH', title: 'Appointing a Japan-based MAH', sub: 'How foreign manufacturers appoint a licensed Japanese MAH to hold approvals on their behalf.', link: { label: 'View appointment guide', href: 'mah-licences/appointing-japan-based-mah' } },
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


# RAPath Japan

**Japan Medical Device Regulatory Reference — PMDA · MHLW · PMD Act**

RAPath JP is a plain English reference for Japanese medical device regulation. It covers the full lifecycle — from device classification and the three pre-market pathways (Approval, Certification, and Notification) through to post-market surveillance, quality management, and the unique Marketing Authorization Holder (MAH) system.

:::warning Disclaimer
This site is a navigation aid written with AI assistance. Always verify requirements against official [PMDA](https://www.pmda.go.jp/english/) and [MHLW](https://www.mhlw.go.jp/english/) sources before making regulatory decisions. Not affiliated with PMDA, MHLW, or the Japanese Government. Not legal or regulatory advice.
:::

---


## Regulatory Pathway Map

<PathwayMap />

## Why Japan is different

Japan's regulatory framework for medical devices has several features that have no direct parallel in the EU, US, or Australian systems:

**Three pre-market pathways.** Depending on device class, a manufacturer must choose between Approval (*Shonin* — for Class III and IV), Certification (*Ninsho* — for Class II and some Class III), or Notification (*Todokede* — for Class I). The choice of pathway is determined by device classification and whether a recognised standard exists for the device type.

**The MAH requirement.** No overseas manufacturer can hold a Japanese approval directly. Every device approval or certification must be held by a Japan-domiciled Marketing Authorization Holder (MAH). This single requirement shapes the market entry strategy for every foreign manufacturer.

**QMS Ordinance 169.** Japan has its own QMS standard — Ministerial Ordinance 169 — which aligns closely with ISO 13485 but contains Japan-specific additions. Compliance with MO 169 is mandatory and is verified through PMDA and prefectural government inspections.

**PMDA and MHLW.** Scientific review is conducted by PMDA (the Pharmaceuticals and Medical Devices Agency), but formal approval decisions are issued by MHLW (the Ministry of Health, Labour and Welfare). Understanding how these two bodies interact is essential for navigating the approval process.

---

## How to use this site

| Section | What it covers |
| --- | --- |
| [Start Here](/start-here) | PMD Act definition of a medical device, PMDA vs MHLW roles, the three-pathway system, key stakeholders, device lifecycle, glossary |
| [Pre-Market](/pre-market) | Classification (Classes I–IV), Shonin approval, Ninsho certification, Todokede notification, clinical evidence, technical documentation |
| [Post-Market](/post-market) | Adverse event reporting, recalls, GPSP surveillance, re-examination, labelling requirements, approval changes |
| [Quality Management](/quality-management) | QMS Ordinance (MO 169), manufacturing licences, Foreign Manufacturer Registration, PMDA inspections |
| [MAH & Licences](/mah-licences) | Marketing Authorization Holder system, Japan domicile requirement, overseas manufacturer pathways, licence maintenance |
| [Legislation](/legislation) | PMD Act, Ministerial Ordinances, Cabinet Orders, MHLW notifications, JMDN |
| [Guidance](/guidance) | PMDA and MHLW guidance index, recognised standards, forms and portals |

---

## Where to start

- **New to Japan regulation?** → [What is a Medical Device?](/start-here/what-is-a-medical-device)
- **Need the right pathway?** → [Approval vs Certification vs Notification](/start-here/approval-vs-certification-vs-notification)
- **Classifying a device?** → [How Classification Works](/pre-market/classification/how-classification-works)
- **Overseas manufacturer?** → [What is an MAH?](/mah-licences/what-is-a-mah)
- **Reporting an adverse event?** → [What Must Be Reported](/post-market/adverse-event-reporting/what-must-be-reported)
