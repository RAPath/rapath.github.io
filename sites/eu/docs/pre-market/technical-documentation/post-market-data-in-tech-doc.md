---
id: post-market-data-in-tech-doc
title: Post-market data in technical documentation
sidebar_label: Post-market data in Tech Doc
sidebar_position: 6
tags: [mdr, ivdr, technical-documentation, pms, pmcf, pmpf, psur]
---

# Post-market data in technical documentation

:::note Regulatory basis
MDR Annex III and IVDR Annex III define the post-market technical documentation requirements. Key documents are the PMS plan, PMS report / PSUR, and PMCF plan and evaluation report (MDR) or PMPF plan and evaluation report (IVDR).
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Why post-market data belongs in technical documentation

Under MDR and IVDR, technical documentation is not static — it evolves throughout the device lifecycle as real-world evidence accumulates. Annex III makes this explicit by requiring a dedicated post-market section of the technical file covering:

1. The plan for gathering post-market data (PMS plan)
2. The results of that data gathering (PMS report or PSUR)
3. The clinical/performance follow-up plan and its evaluation (PMCF/PMPF)

Critically, post-market data must feed back into pre-market documentation: the clinical evaluation report, risk management file, and benefit-risk analysis must be updated or supplemented when significant post-market information emerges, and updates must be documented in the post-market surveillance reports (PMS/PSUR), ensuring the technical file remains current and justified throughout the device lifecycle.

---

## Post-market surveillance plan (PMS plan)

The PMS plan is a proactive document setting out how the manufacturer will systematically collect and analyse post-market information. It must address:

| Data source | Examples |
|---|---|
| Complaints and feedback | Customer complaints, user feedback, help desk queries |
| Vigilance data | Serious incidents, near-misses (own device and competitor devices) |
| Peer-reviewed literature | Systematic literature searches for the device type and clinical area |
| Registries | National implant registers, disease registries, device databases |
| PMCF/PMPF studies | Structured post-market clinical or performance follow-up activities |
| EUDAMED data | Vigilance reports for similar devices |
| Regulatory authority communications | Field safety notices, market surveillance actions |

The PMS plan must specify:
- The post-market objectives (what the manufacturer is monitoring for)
- The data sources and search methodology
- The frequency of data review and report update
- Thresholds and criteria for triggering a reactive response (e.g. CAPA, FSCA)
- Linkage to risk management (how PMS data updates the risk file)

---

## PMS report vs. PSUR

| Document | When required | Frequency |
|---|---|---|
| PMS report | Class I, IIa, IIb (MDR); Class A, B (IVDR) | Updated when necessary; at minimum when significant new information available |
| Periodic Safety Update Report (PSUR) | Class IIb (implantable), III, AIMD (MDR); Class C, D (IVDR) | At minimum annually for Class III/D; at minimum every 2 years for Class IIb/C implantable devices; annually for non-implantable Class IIb/C |

### PSUR content requirements (MDR Annex III §2)

A PSUR must include:

1. Device identification: name, models, basic UDI-DI, ARTG/EUDAMED reference
2. Intended purpose: statement of intended use as CE marked
3. Lifecycle production data: cumulative devices placed on market; estimated number in use; geographic distribution
4. Summary of PMS activities and results: outcome of literature searches, complaint trends, vigilance reports, registry data, PMCF findings
5. Main findings: what the PMS data shows about safety and performance
6. Benefit-risk analysis conclusions: whether the benefit-risk remains positive based on accumulated evidence
7. Conclusions: overall conclusions on safety, performance, and need for any actions
8. Actions taken: any preventive or corrective actions arising from PMS data

PSURs are submitted to the notified body and uploaded to EUDAMED.

---

## Post-Market Clinical Follow-up (PMCF) — MDR

PMCF is the ongoing process of proactively collecting clinical data on CE-marked devices to confirm their continued safety and performance. It is required for all MDR devices (Class I–III) and must be justified if concluded not necessary.

### PMCF plan

The PMCF plan must define:
- The general methods for PMCF (literature, registries, surveys, studies)
- Specific methods: PMCF studies or surveys, if needed
- The rationale for the chosen methods relative to the device's risk class and clinical evidence gaps
- Timelines and milestones

### PMCF evaluation report

The PMCF evaluation report records the outcomes of PMCF activities, including:
- Results of literature searches
- Outcomes of PMCF studies (if conducted)
- Registry data findings
- Any new safety signals or performance deviations
- Whether PMCF findings require updating the clinical evaluation report or risk management file

The PMCF evaluation report is a key input to the clinical evaluation report — PMCF data must be reflected in the CER's conclusions.

---

## Post-Market Performance Follow-up (PMPF) — IVDR

PMPF is the IVDR equivalent of PMCF — the ongoing process of collecting and evaluating post-market performance data for IVDs. Comparable structure:

- PMPF plan: proactive plan for data collection methods (literature, proficiency testing, registries, field studies)
- PMPF evaluation report: results of PMPF activities, fed back into the performance evaluation report

PMPF is particularly important for:
- IVDs where analytical performance may drift (reagent lots, platform updates)
- IVDs where clinical performance data was limited at time of CE marking
- Companion diagnostics where the drug-device therapeutic context evolves

---

## The feedback loop: post-market to pre-market documents

```
PMS data / PMCF / PMPF results
           ↓
  PSUR / PMS report conclusions
           ↓
  ┌────────────────────────────────┐
  │                                │
  ↓                                ↓
Clinical Evaluation Report    Risk Management File
(update safety/performance    (update hazard estimates,
 conclusions if needed)        residual risks, B/R analysis)
           ↓                                ↓
  ┌────────────────────────────────┘
  ↓
GSPR cross-reference table
(update if new evidence affects GSPR compliance)
```

This loop is what makes MDR/IVDR a lifecycle regulatory framework rather than a one-time certification. The technical documentation must reflect the device as it is, based on current evidence — not just as it was at initial certification.

---

## Notified body review of Annex III documents

For Class IIb, III, and IVDR Class C and D devices, notified bodies review the PSUR and PMCF/PMPF evaluation reports as part of their surveillance activities. They look for:

- Consistency between PSUR conclusions and clinical evaluation report
- Evidence that PMS data has genuinely informed risk management
- Completeness of the literature search methodology
- Whether PMCF/PMPF methods are adequate for the device's risk and evidence gaps
- Timely escalation of safety signals through the vigilance system

---

## Related pages

- [Technical documentation — overview](./technical-documentation-overview)
- [Risk management](./risk-management)
- [Clinical evaluation](/pre-market/clinical-evidence/clinical-evaluation-overview)
- [PMS requirements](/post-market/post-market-surveillance/pms-requirements)
- [PSUR by class and frequency](/post-market/post-market-surveillance/psur)
- [PMCF plan and evaluation report](/post-market/post-market-surveillance/pmcf)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex III | Post-market technical documentation |
| IVDR Annex III | IVDR equivalent |
| MDR Art. 83–86 | PMS system requirements |
| MDR Art. 85 | PSUR requirements |
| MDR Art. 61(11) | PMCF requirements |
| MDCG 2020-7 | PMCF plan and evaluation report templates |
| MDCG 2022-21 | PSUR guidance |

