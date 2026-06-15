---
id: software-samd-classification
title: Software & SaMD classification
sidebar_label: Software & SaMD classification
sidebar_position: 6
tags: [mdr, ivdr, classification, software, samd]
---

# Software & SaMD classification

:::note Regulatory basis
MDR software classification is governed by Annex VIII, Rule 11 of MDR 2017/745. IVDR software follows the same class assignment rules as other IVDs under IVDR Annex VIII. MDCG 2021-24 provides authoritative guidance on MDR Rule 11 application.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Software qualification and classification requires careful analysis — consult MDCG guidance and a qualified regulatory professional.
:::

---

## Step 1 — Qualification: is it a medical device at all?

Software qualifies as a medical device only if both of the following conditions are met: (1) It is intended by the manufacturer for a medical purpose as evidenced by the labelling, instructions, promotional material, or other representations; and (2) It performs an action that goes beyond mere storage, archival, lossless compression, or simple search and retrieval of data — such as interpretation, calculation, analysis, prediction, or decision support.

1. Is intended by the manufacturer for a medical purpose, and
2. Performs an action that goes beyond storage, archival, lossless compression, or simple search of data

Software that merely stores, archives, or transmits data without interpretation, calculation, analysis, prediction, or decision support does not qualify as a medical device, even if used in a healthcare setting. Examples:

| Software | Qualification |
|---|---|
| PACS (picture archiving and communication system) — storage only | Not a medical device |
| AI algorithm reading ECG and flagging arrhythmias | Medical device (MDR) |
| EHR system — administrative only | Not a medical device |
| Clinical decision support giving individualised treatment recommendation | Medical device (MDR) |
| Laboratory LIMS — routing samples, no interpretation | Not an IVD |
| Algorithm interpreting blood gas values and producing diagnosis | IVD (IVDR) |

---

## Step 2 — MDR Rule 11 classification

Once qualified as an MDR medical device, software is classified under Annex VIII Rule 11 using a tiered approach based on the severity of the condition and reversibility of the impact of an erroneous output.

### Rule 11 class tiers

Class III — software intended to provide information used to make decisions with diagnosis or therapy purposes where those decisions could cause:
- Death, or
- Irreversible deterioration of a person's state of health

Class IIb — software intended to provide information used to make decisions with diagnosis or therapy purposes where those decisions could cause:
- Serious deterioration of a person's state of health (reversible), or
- Surgical intervention

Class IIa — software intended to:
- Provide information used to make decisions with diagnosis or therapy purposes other than the above, or
- Monitor physiological processes

Class I — all other software (e.g. software intended for general health and wellness purposes without a specific medical claim that crosses the qualification threshold)

### MDCG decision tree (MDCG 2021-24)

The MDCG 2021-24 guidance provides a formal decision tree. The key branches are:

1. Is the software driving or influencing clinical decision-making?
2. What is the condition it addresses — life-threatening, serious, or minor?
3. Is the impact of an error reversible with timely intervention?

| Condition / Impact | Class |
|---|---|
| Life-threatening conditions; errors cause death or irreversible harm | III |
| Serious conditions; errors cause reversible serious harm or require surgical intervention | IIb |
| Non-serious conditions; errors cause minor harm or no clinical intervention required | IIa |
| General wellness / non-diagnostic / non-therapeutic | I (if qualified as MD at all) |

### Worked examples — MDR Rule 11

| Software | Reasoning | Class |
|---|---|---|
| AI triage tool flagging potential stroke on CT | Diagnosis of life-threatening condition; delay = irreversible harm | III |
| Automated insulin dosing algorithm (closed-loop pump) | Therapy for chronic condition; overdose → serious reversible harm | IIb |
| Spirometry interpretation software (flags possible COPD) | Diagnosis of serious condition; error → further testing, not immediate harm | IIa |
| BMI calculator in a wellness app | No specific medical diagnostic or therapeutic claim | I (if MD) |
| Radiation therapy planning system | Therapy directly affecting delivery of ionising radiation | IIb or III depending on configuration |
| AI ECG algorithm flagging AF for GP review | Diagnosis of significant arrhythmia; actionable recommendation | IIb |
| Patient-reported outcome (PRO) questionnaire with clinical scoring | Monitoring tool providing clinical information | IIa |

---

## Step 3 — IVDR software classification

Software that qualifies as an IVD under IVDR is classified under the standard IVDR Rules 1–7, not Rule 11. The same risk-based logic applies — what information does the software provide, and what is the consequence of an error?

Examples:
- Algorithm interpreting genomic sequencing to identify cancer mutations → IVDR Class C or D depending on clinical use
- Software calculating eGFR from creatinine result → supports clinical chemistry output → Class B typically
- AI pathology platform reading histology slides for cancer diagnosis → IVDR Class C

---

## Key concepts for software classification

### Intended purpose is everything

Rule 11 classification depends entirely on what the manufacturer states the software is for — not how it might be used. A manufacturer choosing a conservative intended purpose (e.g. "for decision support only, not for diagnosis") may lower the classification, but must ensure all promotional materials, labelling, and IFU are consistent with that stated purpose.

### Off-the-shelf (OTS) software components

Software components that are general-purpose and not specifically intended for medical use do not require MDR/IVDR compliance on their own. However, if they are incorporated into a medical device software system, the overall system must comply. The manufacturer of the integrated device is responsible for ensuring OTS components do not compromise compliance.

### AI/ML-specific considerations

AI and machine learning software in medical devices raises additional questions:
- Adaptive algorithms that change with use may require re-evaluation if the change goes beyond the scope of what was assessed
- Locked algorithms are easier to document and validate
- The MDCG and European Commission are developing further guidance on AI in medical devices (aligned with the EU AI Act, which has separate obligations for high-risk AI systems — many of which overlap with medical device AI)

### Software lifecycle (EN 62304)

Software classified as Class IIa, IIb, or III must follow a documented software development lifecycle. The harmonised standard EN 62304:2006+A1:2015 (Medical device software — software life cycle processes) defines:
- Software safety classification (Class A, B, C under 62304)
- Development, verification, and maintenance requirements proportionate to safety class

---

## Related pages

- [How classification works](./how-classification-works)
- [Classification rules 1–22](./mdr-classification-rules)
- [Borderline & combination products](./borderline-combination-products)
- [Special device types — Software as a Medical Device](/pre-market/special-device-types/software-samd)
- [Technical documentation — design and manufacturing information](/pre-market/technical-documentation/design-manufacturing-information)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex VIII, Rule 11 | Software classification rule |
| MDR Art. 2(1) | Definition including software |
| IVDR Art. 2(2) | IVD definition including software |
| MDCG 2019-11 | Qualification and classification of software |
| MDCG 2021-24 | MDR Rule 11 classification guidance |
| EN 62304:2006+A1:2015 | Software lifecycle processes |
| EU AI Act (Regulation (EU) 2024/1689) | Parallel obligations for AI systems |

| AI ECG algorithm flagging potential atrial fibrillation | Diagnosis of serious arrhythmia; error could cause stroke; reversible with intervention | IIa |

The worked example should be completed as: 'AI ECG algorithm flagging potential atrial fibrillation — Diagnosis of serious arrhythmia; error could cause stroke; reversible with intervention — IIa'
