---
sidebar_position: 0
slug: /
title: Introduction
description: RAPath BR — a plain English reference for ANVISA medical device regulation in Brazil. What this site is, who it is for, and how to use it.
keywords: [ANVISA, medical devices, Brazil, regulatory, RDC 751, CBPF, regulatory affairs]
---
import React from 'react';

const PHASES = [
  { id: 0, icon: '🧭', label: 'Phase 1', title: 'Understand the Framework',
    nodes: [
      { tag: 'Getting Started', title: 'What is a Medical Device?', sub: 'ANVISA definition under RDC 751/2022 — scope, exclusions, and product categories.', link: { label: 'Read definition', href: '/start-here/what-is-a-medical-device' } },
      { tag: 'Getting Started', title: 'Regulatory Framework', sub: 'ANVISA structure, RDC 751/752/753/754/755 (2022 reform), and SNVS state-level bodies.', link: { label: 'View framework', href: '/start-here/regulatory-framework' } },
      { tag: 'Getting Started', badge: 'Key step', title: 'Key Roles', sub: 'Brazilian manufacturer, importer, Responsável Técnico, AFE, and Responsável pelo Registro.', link: { label: 'View key roles', href: '/start-here/key-roles' } },
    ],
  },
  { id: 1, icon: '🔬', label: 'Phase 2', title: 'Classify Your Device',
    nodes: [
      { tag: 'Classification', badge: 'Class I–IV', title: 'How Classification Works', sub: 'Risk-based four-class system (I / II / III / IV) under RDC 751/2022 — classification rules.', link: { label: 'View classification rules', href: '/pre-market/classification/how-classification-works' } },
      { tag: 'Classification', title: 'IVD Classification', sub: 'IVD classification in Brazil — specific rules and risk categories under ANVISA regulations.', link: { label: 'View IVD classification', href: '/pre-market/classification/ivd-classification' } },
      { tag: 'Classification', title: 'SaMD Classification', sub: 'Software as a medical device classification and ANVISA's digital health approach.', link: { label: 'View SaMD classification', href: '/pre-market/classification/samd-classification' } },
    ],
  },
  { id: 2, icon: '📋', label: 'Phase 3', title: 'Pre-Market Registration',
    nodes: [
      { tag: 'Registration', badge: 'Key step', title: 'Notificação / Cadastro / Registro', sub: 'Three-tier authorisation: Notification (low risk), Cadastro (medium risk), Registro (high risk).', link: { label: 'View authorisation overview', href: '/pre-market/registration/notificacao-cadastro-registro' } },
      { tag: 'Registration', title: 'Registro (Full Registration)', sub: 'Full registration pathway for Class III/IV devices — dossier, peticionamento, and ANVISA review.', link: { label: 'View Registro guide', href: '/pre-market/registration/registro' } },
      { tag: 'Registration', title: 'Technical Documentation', sub: 'ANVISA technical file requirements — essential requirements, risk management, clinical evidence.', link: { label: 'View tech doc guide', href: '/pre-market/registration/technical-file' } },
      { tag: 'Pre-Market', title: 'Clinical Evidence', sub: 'Clinical data requirements for ANVISA registration — Brazilian clinical investigations and foreign data.', link: { label: 'View evidence requirements', href: '/pre-market/clinical-evidence/overview' } },
    ],
  },
  { id: 3, icon: '✅', label: 'Phase 4', title: 'GMP (CBPF) & AFE',
    nodes: [
      { tag: 'GMP', badge: 'Mandatory', title: 'Brazilian GMP (CBPF) Overview', sub: 'ANVISA's Good Manufacturing Practices for medical devices — RDC 665/2022 requirements.', link: { label: 'View GMP overview', href: '/gmp/overview' } },
      { tag: 'GMP', title: 'CBPF Certificate', sub: 'Certificado de Boas Práticas de Fabricação — how to obtain and maintain GMP certification.', link: { label: 'View CBPF certificate guide', href: '/gmp/cbpf-certificate' } },
      { tag: 'Establishment', badge: 'Required', title: 'AFE — Authorisation to Operate', sub: 'Autorização de Funcionamento de Empresa — required for manufacturers, importers, and distributors.', link: { label: 'View AFE guide', href: '/post-market/establishment/afe' } },
    ],
  },
  { id: 4, icon: '📊', label: 'Phase 5', title: 'Post-Market Obligations',
    nodes: [
      { tag: 'Post-Market', badge: 'Ongoing', title: 'Adverse Events (NOTIVISA)', sub: 'Tecnovigilância reporting via NOTIVISA — what to report, who must report, and timeframes.', link: { label: 'View reporting guide', href: '/post-market/adverse-events/what-must-be-reported' } },
      { tag: 'Post-Market', title: 'Recalls & FSCAs', sub: 'ANVISA recall classification, mandatory notification, and Interdição/seizure provisions.', link: { label: 'View recall guide', href: '/post-market/recalls/when-required' } },
      { tag: 'Post-Market', title: 'Post-Market Surveillance Plan', sub: 'PMS plan requirements — PMCF for Class III/IV, IVD PMPF, and periodic reporting.', link: { label: 'View PMS guide', href: '/post-market/pms/pms-plan' } },
      { tag: 'Post-Market', title: 'Labelling Requirements', sub: 'ANVISA labelling rules — Portuguese-language requirements and mandatory label content.', link: { label: 'View labelling guide', href: '/post-market/labelling/requirements' } },
    ],
  },
  { id: 5, icon: '💡', label: 'Phase 6', title: 'Digital Health & Special Access',
    nodes: [
      { tag: 'Digital Health', title: 'SaMD & AI/ML', sub: 'ANVISA framework for software as a medical device, AI/ML devices, and mobile health apps.', link: { label: 'View SaMD guide', href: '/digital-health/samd-brazil' } },
      { tag: 'Special Access', title: 'Uso Compassivo (Compassionate Use)', sub: 'Access pathway for unregistered devices for patients with serious conditions and unmet needs.', link: { label: 'View compassionate use guide', href: '/special-access/uso-compassivo' } },
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


# RAPath Brazil

**ANVISA Medical Device Regulatory Reference**

RAPath BR is a plain English reference for medical device regulation in Brazil under **ANVISA** (Agência Nacional de Vigilância Sanitária). It is designed for regulatory affairs professionals, manufacturers, importers, distributors, and consultants who need to find and understand Brazilian requirements quickly — especially those already familiar with the EU MDR, FDA, TGA, or Health Canada frameworks.

This site does not replace official ANVISA sources. Every page links back to the authoritative legislative text or official ANVISA guidance. Think of RAPath BR as a structured, searchable reference that helps you locate and understand ANVISA requirements — then verify the specific details against the official source before making regulatory decisions.

---


## Regulatory Pathway Map

<PathwayMap />

## Who this site is for

**Regulatory affairs professionals and consultants** — a well-structured reference for ANVISA requirements you navigate daily, with every claim linked to its legislative source.

**Manufacturers (domestic and overseas)** — understand what ANVISA requires of you, and how it relates to frameworks you may already know (EU MDR, FDA 21 CFR, TGA, Health Canada).

**Importers and distributors** — understand your AFE (Autorização de Funcionamento de Empresa), Responsável Técnico obligations, and NOTIVISA reporting duties.

**Anyone new to Brazilian medical device regulation** — start with [Start Here](/docs/start-here/what-is-a-medical-device) for a guided introduction to the ANVISA framework.

---

## How to use this site

The site is structured around the regulatory lifecycle of a medical device in Brazil:

| Section | What it covers |
|---|---|
| [Start Here](/docs/start-here/what-is-a-medical-device) | Definitions, ANVISA framework overview, who needs to comply, device lifecycle |
| [Pre-Market](/docs/pre-market/classification/how-classification-works) | Classification (Class I–IV), Notificação/Cadastro/Registro, clinical evidence, special device types |
| [Post-Market](/docs/post-market/overview) | Tecnovigilância, NOTIVISA, recalls, PMS, labelling, establishment authorisation |
| [GMP & Quality (CBPF)](/docs/gmp/overview) | RDC 752/2022, CBPF certificate, ANVISA inspections, CAPA, ISO 13485 alignment |
| [Importers, Distributors & Traceability](/docs/importers-distributors/importer-role) | AFE, Responsável Técnico, SISCOMEX, NCM codes, FSC, UDI/rastreamento |
| [Legislation & Regulations](/docs/legislation/primary-legislation) | Key RDCs, Leis, MERCOSUL resolutions, ABNT standards |
| [Guidance Documents](/docs/guidance/by-topic) | ANVISA Notas Técnicas, Q&As, Peticionamento guides, forms |
| [Special Access & Programmes](/docs/special-access/uso-compassivo) | Uso Compassivo, Acesso Ampliado, PDP, BNDES/FINEP |
| [International & Comparison](/docs/international/overview) | IMDRF, ANVISA vs FDA/TGA/CE/HC, CFG, multi-market strategy |
| [Enforcement & Compliance](/docs/enforcement/inspections) | ANVISA inspections, VISA overlap, fines, interdição, registration cancellation |
| [Digital Health & SaMD](/docs/digital-health/framework) | SaMD, AI/ML, mobile apps, cybersecurity, LGPD |
| [What's New](/docs/whats-new/regulatory-changes) | Recent RDC changes, draft regulations, open audiências públicas |

---

## What this site is not

- **Not legal or regulatory advice.** Always consult qualified regulatory counsel before making submission or compliance decisions.
- **Not affiliated with ANVISA.** This site is not produced by or on behalf of ANVISA or the Brazilian Government.
- **Not a substitute for official sources.** Every page links to the relevant ANVISA guidance, RDC, or legislation — always verify there.

---

## Content currency

This site was last reviewed in **May 2026**. ANVISA regulations change frequently — particularly following the landmark **RDC 751/2022** framework that replaced the older RDC 185/2001. Check [What's New](/docs/whats-new/regulatory-changes) for recent updates.

:::note Disclaimer
Content on this site is written with AI assistance and is intended as a navigation aid only. Always verify against official [ANVISA](https://www.gov.br/anvisa) sources before making regulatory decisions.
:::
