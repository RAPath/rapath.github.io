---
id: software-samd
title: Software as a Medical Device (SaMD)
sidebar_label: Software as a Medical Device (SaMD)
sidebar_position: 2
tags: [mdr, ivdr, software, samd, classification]
---

# Software as a Medical Device (SaMD)

:::note Regulatory basis
**MDR Art. 2(1)** (software included in definition); **MDR Annex VIII Rule 11** (classification); **MDR Annex I §17 and §21** (GSPR for software). MDCG 2019-11 and MDCG 2021-24 provide detailed guidance. For IVD software: **IVDR Annex VIII Rules 1–7**.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and qualified regulatory and software engineering professionals.
:::

---

## What qualifies as SaMD under MDR/IVDR?

Software qualifies as a medical device if it is:
1. **Intended** by the manufacturer for a medical purpose (diagnosis, monitoring, treatment, etc.), and
2. Performs an action that **goes beyond storage, archival, lossless compression, or simple search**

Software that only stores, displays, or transmits data without any processing, interpretation, or transformation of that data into clinically relevant Examples include Electronic Health Record (EHR) systems, picture archiving and communication systems (PACS) used solely for image storage and retrieval, or laboratory information systems (LIS) that route samples without interpreting results. information does **not** qualify as a medical device.

The MDCG 2019-11 qualification checklist is the primary tool for making this determination:

| Software type | Qualification |
|---|---|
| EHR administrative module | Not a medical device |
| EHR clinical decision support giving patient-specific treatment recommendations | Medical device (MDR) |
| PACS image storage and retrieval | Not a medical device |
| AI algorithm reading CT scans for pulmonary nodule detection | Medical device (MDR) |
| LIS routing samples to analysers | Not an IVD |
| Algorithm interpreting CBC to flag possible haematological malignancy | IVD (IVDR) |

---

## Classification — MDR Rule 11 summary

| Device output / clinical consequence | Class |
|---|---|
| Death or irreversible deterioration if decision is wrong | **III** |
| Serious (reversible) deterioration or surgical intervention required | **IIb** |
| Minor deterioration; no serious clinical consequence | **IIa** |
| General wellness; no specific medical decision | **I** |

See [Software & SaMD classification](/pre-market/classification/software-samd-classification) for the full decision tree and worked examples.

---

## Technical documentation requirements for SaMD

Software-specific elements required in the technical documentation (MDR Annex II §6 and related):

### Software description document
- Software architecture diagram
- Identification of SOUP (Software of Unknown Provenance) / OTS components
- Data flows, interfaces, and integration points
- Cybersecurity architecture

### Software development lifecycle (EN 62304)

All Class IIa, IIb, and III software must follow a documented lifecycle per **EN 62304:2006+A1:2015**. The EN 62304 software safety classification (A, B, C) must be determined and documented:

| EN 62304 Software Class | Injury risk | MDR Class approximate mapping |
|---|---|---|
| Class A | No injury or non-serious injury possible | Class I |
| Class B | Non-serious injury possible | Class IIa |
| Class C | Serious injury or death possible | Class IIb or III |

### Software verification and validation (V&V)
- Unit, integration, and system test protocols and reports
- Regression testing records
- Usability testing (IEC 62366-1)
- Performance/stress testing as applicable

### Cybersecurity
MDCG 2019-16 (and its updates) requires manufacturers to:
- Conduct a cybersecurity risk analysis
- Define the Minimum Security Baseline
- Implement security by design (authentication, encryption, secure update mechanisms)
- Plan for post-market cybersecurity monitoring and vulnerability disclosure

---

## Software lifecycle — post-market considerations

Software changes are frequent and must be managed carefully:

- **Bug fixes**: typically non-significant unless they correct a safety-critical defect
- **New features**: assess whether they change the intended purpose or classification
- **Algorithm updates** (for AI/ML): changes to trained models must be assessed — if the change alters the output in a clinically significant way, it may be a significant change requiring NB review
- **Platform updates**: OS, cloud platform, or API changes may affect software performance and safety

MDCG 2020-3 provides guidance on what constitutes a significant change for software devices.

---

## AI and machine learning in SaMD

AI/ML-based SaMD raises specific concerns addressed by MDCG and the EU AI Act:

- **Locked algorithms**: performance is fixed at CE marking; updates are change-controlled
- **Adaptive algorithms**: continuously learn from new data — under current guidance, the performance at time of CE marking must be specified and the learning process bounded
- **EU AI Act**: many medical AI systems will also be regulated as "high-risk AI systems" under Regulation (EU) 2024/1689, creating parallel but overlapping obligations alongside MDR/IVDR

---

## Related pages

- [Software & SaMD classification](/pre-market/classification/software-samd-classification)
- [How classification works](/pre-market/classification/how-classification-works)
- [Technical documentation — design & manufacturing information](/pre-market/technical-documentation/design-manufacturing-information)
- [GSPR Chapter II — Design & construction](/pre-market/gspr/chapter-ii-design-construction)

---

## Official references

| Reference | Description |
|---|---|
| MDR Art. 2(1) | Software in medical device definition |
| MDR Annex VIII Rule 11 | Software classification |
| MDR Annex I §17, §21 | Software GSPR |
| EN 62304:2006+A1:2015 | Software lifecycle |
| IEC 62366-1:2015+A1:2020 | Usability engineering |
| MDCG 2019-11 | Software qualification |
| MDCG 2021-24 | MDR Rule 11 classification |
| MDCG 2019-16 | Cybersecurity guidance |
| EU AI Act (Reg. 2024/1689) | AI system obligations |

The section "AI and machine learning in SaMD" currently ends with "AI/ML-based SaMD raises sp" and is incomplete. This section should include guidance on: Algorithm transparency and explainability requirements; Training data documentation and validation; Algorithm updating procedures and version control; Bias assessment and mitigation; Continuous monitoring of algorithm performance post-market; Reference to MDCG 2023-1 guidance on qualification and classification of AI/ML-based software as a medical device."
