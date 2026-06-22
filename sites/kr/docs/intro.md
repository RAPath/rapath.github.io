---
slug: /
title: "Korean Medical Device Regulation"
description: "Overview of the Korean medical device regulatory system and how to use this site."
sidebar_position: 1
---
import React from 'react';

const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'MFDS definition under the Medical Devices Act — scope, exclusions, and key terms.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'MFDS structure, Medical Devices Act vs. In Vitro Diagnostics Act, and regulatory lifecycle.', link: { label: 'View framework', href: '/start-here/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Medical Devices Act vs. IVD Act', sub: 'Korea has separate laws for general medical devices and IVDs — know which applies to your device.', link: { label: 'View law comparison', href: '/start-here/medical-devices-act-vs-ivd-act' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I–IV', title: 'How Classification Works', sub: 'Class I / II / III / IV based on risk — MFDS classification rules and product code system.', link: { label: 'View classification rules', href: '/pre-market/classification/how-classification-works' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Pre-Market Approval',
    nodes: [
      { tag: 'Pre-Market', badge: 'Class II/III/IV', title: 'Marketing Authorization', sub: 'MFDS product approval (Heo-ga) pathway — application, review process, and timelines.', link: { label: 'View approval guide', href: '/pre-market/marketing-authorization' } },
      { tag: 'Pre-Market', badge: 'Class I', title: 'Notification Pathway', sub: 'Class I device notification (Sin-go) — self-declaration submission to MFDS.', link: { label: 'View notification guide', href: '/pre-market/notification' } },
      { tag: 'Pre-Market', title: 'Technical Documentation (STED)', sub: 'Korea STED technical documentation requirements and clinical evidence standards.', link: { label: 'View STED guide', href: '/pre-market/technical-documentation/overview-and-required-contents' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'MFDS clinical evidence requirements — Korean clinical trials vs. international data.', link: { label: 'View evidence requirements', href: '/pre-market/clinical-evidence/clinical-data-requirements-by-grade' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'GMP & Quality System',
    nodes: [
      { tag: 'GMP', badge: 'KGMP required', title: 'Korean GMP (KGMP) Overview', sub: 'Who must obtain KGMP certification — domestic and foreign manufacturers.', link: { label: 'View KGMP overview', href: '/gmp-quality-system/overview-kgmp' } },
      { tag: 'GMP', title: 'MFDS GMP Inspections', sub: 'How MFDS conducts GMP inspections and what triggers a manufacturing site audit.', link: { label: 'View inspection guide', href: '/gmp-quality-system/mfds-inspections-and-actions' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting', sub: 'MFDS incident reporting obligations — what to report and within what timeframes.', link: { label: 'View reporting guide', href: '/post-market/adverse-event-reporting/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'Recalls & FSCAs', sub: 'Voluntary and mandatory recalls — MFDS notification process and recall execution.', link: { label: 'View recall guide', href: '/post-market/recalls-and-fsca/when-recall-or-fsca-required' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'Proactive PMS obligations — data collection, periodic reports, and MFDS requirements.', link: { label: 'View PMS guide', href: '/post-market/post-market-surveillance/pms-plan-and-report' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'Korean labelling rules — Korean-language mandatory fields and IFU requirements.', link: { label: 'View labelling guide', href: '/post-market/labelling/labelling-requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Access',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD & Digital Health', sub: 'MFDS digital health framework — SaMD, AI/ML, mobile medical apps, and digital therapeutics.', link: { label: 'View digital health guide', href: '/digital-health-samd/software-as-a-medical-device' } },
      { tag: 'Special Access', title: 'Innovative Device Designation', sub: 'Expedited review pathway for novel innovative medical devices in Korea.', link: { label: 'View innovative device guide', href: '/special-access/innovative-medical-device-designation' } },
      { tag: 'Special Access', title: 'Conditional Marketing Authorisation', sub: 'Conditional approval pathway for devices addressing serious unmet medical needs.', link: { label: 'View conditional MA guide', href: '/special-access/conditional-marketing-authorization' } },
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


Welcome to **RAPath Korea** — your plain-English guide to the Korean medical device regulatory system overseen by the **Ministry of Food and Drug Safety (MFDS, 식품의약품안전처)**.


## Regulatory Pathway Map

<PathwayMap />

## What this site covers

Korea operates two primary statutes for medical devices:

- **Medical Devices Act (의료기기법)** — medical devices classified as Grades I–IV
- **In Vitro Diagnostics Medical Devices Act (체외진단의료기기법)** — IVD devices (effective May 2021)

## Quick navigation

| Goal | Start here |
|---|---|
| New to Korean regulation | [Start Here → What is a medical device?](./start-here/what-is-a-medical-device) |
| Getting a product to market | [Pre-Market → Classification](./pre-market/classification/how-classification-works) |
| Foreign manufacturer | [GMP → Foreign Manufacturers](./gmp-quality-system/foreign-manufacturers/foreign-gmp-certificate-requirement) |
| Post-market obligations | [Post-Market → Overview](./post-market/overview) |
| UDI registration | [UDI-K Overview](./udi-registration-licensing/udi-k/udi-k-overview) |

:::warning ## Disclaimer

This website is provided for informational purposes only and does not constitute legal, regulatory, or professional advice. Regulations and requirements change frequently. For the most current and authoritative information, always consult:
- Official MFDS publications and guidance documents
- The Korean Ministry of Food and Drug Safety website (www.mfds.go.kr)
- Qualified regulatory professionals or consultants familiar with Korean medical device law
:::

## Regulatory Pathways and Timelines

Korea offers several pathways for medical device approval depending on device classification and risk profile:

- **Standard Review**: Typical timeframe of 6–12 months for Grade II and III devices
- **Expedited Review**: Available for priority devices, innovative technologies, and breakthrough devices
- **Conditional Approval**: For devices meeting unmet clinical needs
- **Mutual Recognition**: Products approved by recognized overseas regulators (FDA, CE mark) may follow streamlined processes

Review timelines vary based on completeness of submission, device complexity, and whether additional clinical data is required.

## Regulatory Costs

Manufacturers should budget for:
- Application fees (vary by device classification and review pathway)
- GMP certification and inspection fees
- Post-market surveillance and adverse event reporting fees
- Annual registration and renewal fees

Fees are updated annually by MFDS. Consult the official MFDS fee schedule or a qualified regulatory professional for current costs.

## Key Regulatory Distinctions

**Domestic vs. Foreign Manufacturers**: Foreign manufacturers must appoint a local importer/representative in Korea responsible for compliance, pharmacovigilance, and adverse event reporting. Domestic manufacturers retain direct responsibility with MFDS.

Key Timelines and Deadlines
​
Manufacturers should be aware of important regulatory timelines:
• Standard review period: typically 6 months for Grade II–III devices
• Expedited review available for priority devices and products addressing unmet medical needs
• Post-market surveillance reports due annually
• UDI registration must be completed before product launch

Official Resources
​
For the most current regulatory guidance and official information:
• MFDS Official Website: www.mfds.go.kr
• Medical Device Division contact information and inquiry procedures
• Online submission portal for pre-market and post-market notifications
