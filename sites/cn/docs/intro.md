---
slug: /
title: Introduction
sidebar_position: 1
description: "RAPath CN — a plain English reference for China medical device regulation under the NMPA. What this site is, who it is for, and how to use it."
keywords: [NMPA,medical devices,China,MDSAR,regulatory affairs]
tags: [introduction]
---
import React from 'react';

export const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'NMPA definition under the Medical Device Supervision and Administration Regulation (MDSAR 2021).', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'NMPA, MDSAR 2021, provincial vs. national registration, and China Agent requirement.', link: { label: 'View framework', href: '/start-here/regulatory-framework-overview' } },
      { tag: 'Getting Started', badge: 'Mandatory', title: 'China Agent Requirement', sub: 'All foreign manufacturers must appoint a China Agent (境内责任人) to register and represent them.', link: { label: 'View China Agent guide', href: '/start-here/china-agent' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I / II / III', title: 'How Classification Works', sub: 'NMPA three-class system — NMDC classification catalogue and classification rules.', link: { label: 'View classification rules', href: '/pre-market/classification/how-classification-works' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'IVD classification rules under NMPA — separate classification system for in vitro diagnostics.', link: { label: 'View IVD classification', href: '/pre-market/classification/classification-rules-ivds' } },
      { tag: 'Classification', title: 'SaMD Classification', sub: "Software as a medical device — NMPA's AI/ML guidance and SaMD classification approach.", link: { label: 'View SaMD classification', href: '/pre-market/special-types/samd' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Registration Pathway',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'Registration Overview', sub: 'Class I filing (provincial), Class II registration (provincial), Class III registration (national NMPA).', link: { label: 'View registration overview', href: '/pre-market/registration/overview' } },
      { tag: 'Registration', title: 'Imported Device Registration', sub: 'National NMPA registration process for imported Class II and III devices.', link: { label: 'View import registration guide', href: '/pre-market/registration/imported-device-registration' } },
      { tag: 'Registration', title: 'Dossier Requirements', sub: 'NMPA registration dossier structure — technical documentation and administrative file.', link: { label: 'View dossier guide', href: '/pre-market/registration/dossier-requirements' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'When Chinese clinical trials are required vs. clinical evaluation and equivalence.', link: { label: 'View evidence requirements', href: '/pre-market/clinical/clinical-evaluation-overview' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'GMP & Quality System',
    nodes: [
      { tag: 'GMP', badge: 'Mandatory', title: 'GMP Requirements', sub: 'NMPA GMP (YY/T 0287 — equivalent to ISO 13485) mandatory for all manufacturers.', link: { label: 'View GMP requirements', href: '/qms/gmp-requirements' } },
      { tag: 'GMP', title: 'NMPA Inspections', sub: 'NMPA GMP inspection process — types, triggers, and how to prepare.', link: { label: 'View inspection guide', href: '/qms/nmpa-inspections' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Event Reporting', sub: 'ADR reporting to NMPA — what must be reported, timeframes, and National MDV Centre.', link: { label: 'View reporting guide', href: '/post-market/adverse-event-reporting' } },
      { tag: 'Post-Market', title: 'Recalls & FSCAs', sub: 'China recall classification and NMPA mandatory recall notification process.', link: { label: 'View recall guide', href: '/post-market/recalls-fsca' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance', sub: 'Proactive PMS — annual reporting, trend analysis, and NMPA requirements.', link: { label: 'View PMS guide', href: '/post-market/post-market-surveillance' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'NMPA labelling rules — mandatory Chinese-language fields, IFU, and UDI requirements.', link: { label: 'View labelling guide', href: '/post-market/labelling' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'UDI & Digital Health',
    nodes: [
      { tag: 'UDI', badge: 'Mandatory', title: 'UDI System (NMPA UDID)', sub: 'China UDI implementation — NMPA UDI Database, Data Carrier requirements, and compliance dates.', link: { label: 'View UDI guide', href: '/udi/udi-overview' } },
      { tag: 'Digital Health', title: 'SaMD & AI/ML Policy', sub: 'NMPA guidance on software as a medical device and artificial intelligence applications.', link: { label: 'View AI/ML guide', href: '/digital-health/ai-ml-policy' } },
      { tag: 'Special Access', title: 'Priority Review & Innovation', sub: 'Innovative device designation, priority review, and Pilot Zone programmes for novel devices.', link: { label: 'View priority review guide', href: '/special-access/priority-review' } },
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


# RAPath China

**China Medical Device Regulatory Reference — NMPA & MDSAR 2021**

RAPath CN is a plain English reference for China medical device regulation under the **Medical Device Supervision and Administration Regulations 2021 (MDSAR 2021 — 医疗器械监督管理条例, State Council Order No. 739)** and its implementing measures. It is designed for regulatory affairs professionals, manufacturers, importers, China Agents, distributors, and consultants navigating the National Medical Products Administration (NMPA — 国家药品监督管理局) framework.

This site does not replace official NMPA sources. Every page links back to the authoritative legislative text or official NMPA guidance. RAPath CN is a structured, searchable index designed to help you locate relevant requirements quickly — but it is always your responsibility to verify against the official source before making regulatory decisions.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for requirements you navigate daily, with every claim linked to its legislative or regulatory source.

**Manufacturers (China and overseas)** — understand what MDSAR 2021 requires of you, including product registration or filing obligations, GMP compliance, and post-market surveillance.

**Importers and their China Agents (代理人)** — understand the mandatory China Agent role, joint liability obligations, and how the agent framework differs from EU Authorised Representatives or FDA US Agents.

**Distributors and hospitals** — understand distribution traceability, dealer obligations, and implantable device tracking requirements.

**Anyone new to China medical device regulation** — start with [Start Here](/cn/docs/start-here/what-is-a-medical-device) for a guided introduction to the framework.

---

## How to use this site

The site is structured around the regulatory lifecycle of a medical device in China:

| Section | What it covers |
|---|---|
| [Start Here](/cn/docs/start-here/what-is-a-medical-device) | Definitions, three-tier authority structure, China Agent introduction, lifecycle, glossary |
| [Pre-Market](/cn/docs/pre-market/classification/how-classification-works) | Classification (Class I–III, IVD), registration vs filing, CMDE review, clinical evidence, special device types |
| [Post-Market](/cn/docs/post-market/overview) | Adverse event reporting, annual reports, PMS, recalls, labelling, re-registration |
| [Quality System (GMP/QMS)](/cn/docs/qms/overview) | MDSAR 2021 GMP, YY/T 0287 (ISO 13485 equivalent), design controls, CAPA, NMPA inspections |
| [China Agent (代理人)](/cn/docs/china-agent/what-is-a-china-agent) | Mandatory agent role for imported devices — obligations, selection, liability, comparison with other frameworks |
| [UDI](/cn/docs/udi/udi-overview) | China UDI system, NMPA UDI database (UDID), encoding rules, phased implementation timeline |
| [Legislation & Regulations](/cn/docs/legislation/mdsar-2021) | MDSAR 2021, NMPA implementing measures, YY/T standards, key announcements |
| [Guidance Documents](/cn/docs/guidance/by-topic) | NMPA and CMDE technical guidance indexed by topic |
| [International & Comparison](/cn/docs/international/overview) | IMDRF alignment, China vs FDA/EU/TGA/HSA, multi-market strategy |
| [Digital Health & SaMD](/cn/docs/digital-health/framework) | SaMD classification, AI/ML NMPA policy, cybersecurity |
| [Special Access](/cn/docs/special-access/priority-review) | Priority review, innovative device designation, emergency use, Hainan FTP pilot |
| [Enforcement & Compliance](/cn/docs/enforcement/inspections) | NMPA inspections, penalties, market surveillance, blacklist |
| [What's New](/cn/docs/whats-new/regulatory-changes) | Recent regulatory changes, draft guidance, upcoming deadlines |

---

## What this site is not

- **Not legal or regulatory advice.** Always consult qualified regulatory counsel before making submission or compliance decisions.
- **Not affiliated with NMPA.** This site is not produced by or on behalf of the National Medical Products Administration.
- **Not a substitute for official sources.** Every page links to the relevant NMPA guidance or MDSAR provision — always verify there.

---

## Content currency

This site was last reviewed in **May 2026**. NMPA regulations and guidance change frequently. Check [What's New](/cn/docs/whats-new/regulatory-changes) for recent updates.

:::note Disclaimer
Content on this site is written with AI assistance and is intended as a navigation aid only. Always verify against official [NMPA](https://www.nmpa.gov.cn/) sources before making regulatory decisions. Not affiliated with NMPA or any Chinese Government body. Not legal or regulatory advice.
:::

