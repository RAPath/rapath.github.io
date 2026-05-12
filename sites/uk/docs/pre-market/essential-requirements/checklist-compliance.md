---
sidebar_position: 5
title: Checklist & compliance matrix
description: >
  How to structure an Essential Requirements checklist and traceability matrix for a UK MDR 2002
  technical file — with a worked example framework, common pitfalls, and guidance on maintaining
  the checklist throughout the device lifecycle.
tags: [uk-mdr, essential-requirements, checklist, technical-file, pre-market]
---

:::note[Regulatory basis]
The UK MDR 2002 does not specify a mandatory format for the Essential Requirements checklist, but UKABs and MHRA expect all technical files to include a systematic demonstration of conformity with all applicable Essential Requirements in Schedule 1 (or Schedule 1A for IVDs). The checklist structure described here is consistent with best practice and UKAB expectations.
:::

---

## What is the ER checklist?

The **Essential Requirements checklist** (also called a compliance matrix or traceability matrix) is a document within the technical file that:

1. Lists every Essential Requirement in Schedule 1 (or Schedule 1A)
2. States whether each requirement is **applicable** to the device (and if not, why not)
3. Identifies the **method of demonstration** — which standard, test, or evidence shows conformity
4. Provides a **technical file cross-reference** — exactly where in the technical file the evidence can be found

The checklist is reviewed by UKABs during conformity assessment and by MHRA during audits. A well-structured checklist significantly reduces assessment time and demonstrates regulatory competence.

---

## Structure of the checklist

### Recommended columns

| Column | Content |
|---|---|
| **ER reference** | Specific ER number and title (e.g., "ER 2 — Risk reduction") |
| **Applicable?** | Yes / No / Partially |
| **Justification if N/A** | Where not applicable, state the reason (e.g., "device has no measuring function") |
| **Method of demonstration** | Standard applied, test performed, or other evidence type |
| **Document / section reference** | Exact location in the technical file (e.g., "Section 5 — Risk Management File, ISO 14971 Report, Rev 3") |
| **Status** | Conformant / In progress / Gap identified |

---

## Worked example framework — Class IIb active general device

Below is an illustrative framework for a Class IIb active non-implantable device (e.g., a patient monitoring system with therapeutic alarming).

| ER | Applicable? | Method | TF Reference |
|---|---|---|---|
| ER 1 — Safety in intended use | Yes | Risk management per ISO 14971; clinical evaluation report | TF-05; TF-08 |
| ER 2 — Risk reduction hierarchy | Yes | ISO 14971 risk management file; design FMEA | TF-05 |
| ER 3 — Performance as intended | Yes | Bench performance testing; clinical evaluation | TF-06; TF-08 |
| ER 4 — Long-term stability | Yes | Accelerated ageing study; shelf-life data | TF-06.3 |
| ER 5 — Transport and storage | Yes | Distribution simulation testing (ASTM D4169); packaging validation | TF-06.4 |
| ER 6 — Acceptable side effects | Yes | Clinical evaluation — benefit-risk assessment | TF-08 |
| ER 7 — Chemical/biological properties | Yes — body contact surfaces | ISO 10993-1 biological evaluation; biocompatibility report | TF-06.1 |
| ER 8 — Infection / contamination | Partial — device not sterile; cleaning validated | Cleaning and disinfection validation report; reprocessing IFU | TF-06.5 |
| ER 9 — Measuring function | Yes — displays physiological parameters | Accuracy validation; comparison against reference standard | TF-06.2 |
| ER 10 — Energy source (electrical safety) | Yes — mains powered active device | IEC 60601-1 test report; IEC 60601-1-2 EMC test report | TF-07.1; TF-07.2 |
| ER 11 — Radiation | Not applicable — no ionising or non-ionising radiation emission intended | N/A | — |
| ER 12 — Software | Yes — embedded software | IEC 62304 software lifecycle documentation; software validation | TF-09 |
| ER 13 — Self-test/NPT | Not applicable — professional use only | N/A | — |
| ER 14 — Active implantable connection | Not applicable — no implanted components | N/A | — |
| ER 15 — Human blood/plasma | Not applicable — no human blood/plasma derivatives | N/A | — |
| ER 16 — Animal tissue | Not applicable — no animal tissue components | N/A | — |
| ER 17 — Administers medicines | Not applicable — does not administer medicines | N/A | — |
| ER 18 — Labelling and IFU | Yes | Labelling per Schedule 1 ER 18; IFU reviewed against requirements | TF-04.1; TF-04.2 |

---

## Worked example framework — General IVD (self-declaration)

| ER (Schedule 1A) | Applicable? | Method | TF Reference |
|---|---|---|---|
| ER 1 — Safety | Yes | Performance evaluation; risk management file | PEV-01; RM-01 |
| ER 2 — Risk management | Yes | ISO 14971 risk management file | RM-01 |
| ER 3 — Performance | Yes | Analytical performance studies (precision, accuracy, linearity) | PEV-02 |
| ER 4 — Stability | Yes | Reagent stability studies; closed-vial/open-vial stability | PEV-03 |
| ER 5 — Transport | Yes | Freeze-thaw stability; shipping validation | PEV-04 |
| ER 6 — Side effects | Yes | Clinical performance evaluation; false rate analysis | PEV-02 |
| Schedule 1A — Analytical performance | Yes | EP studies per CLSI protocols | PEV-02 |
| Schedule 1A — Clinical performance | Yes | Clinical study / literature review; diagnostic sensitivity/specificity | PEV-05 |
| Schedule 1A — Calibration traceability | Yes | ISO 17511 traceability chain documentation | CALIB-01 |
| Schedule 1A — IFU requirements | Yes | IFU reviewed against Schedule 1A checklist | LABEL-01 |
| Schedule 1A — Labelling | Yes | Label design file; regulatory review checklist | LABEL-02 |

---

## Common pitfalls

### 1. Treating N/A as a get-out-of-jail card

Marking an ER as "not applicable" without justification is a red flag for UKABs. Every N/A must have a device-specific rationale. "Not applicable — device has no measuring function" is acceptable. "Not applicable" with no reason is not.

### 2. Generic evidence references

Citing "ISO 14971" without specifying the document reference in the technical file is insufficient. Reference the specific report, section, and revision: "Risk Management File v2.1, Section 4: Risk Control Measures."

### 3. Static checklists

The checklist must be **kept current**. If the technical file is updated (new test data, design changes, post-market surveillance trigger), the checklist must reflect the change. Outdated cross-references undermine the entire conformity demonstration.

### 4. Conflating UK MDR 2002 and EU MDR GSPR

EU MDR GSPR (Annex I) has different numbering and more sub-requirements than UK MDR 2002 Schedule 1. A checklist prepared for EU MDR GSPR is not automatically compliant with UK MDR 2002 Schedule 1 (though it will typically exceed it). Check the specific numbering of requirements against the correct legal text for the market.

### 5. Missing applicable standards

If a UK-designated standard addresses your device type but you are not applying it, you must explain in the checklist why your alternative approach provides at least equivalent conformity. Not applying a relevant designated standard without explanation is an automatic challenge point.

---

## Maintaining the checklist through the device lifecycle

The ER checklist is part of the technical file and must be maintained as a living document. Triggers for checklist review:

- **Design change** — any change that affects a device characteristic addressed by an ER
- **New post-market data** — adverse events, complaints, or PMS findings that challenge any ER
- **Standard update** — when a UK-designated standard is revised, the conformity method may need updating
- **UKAB surveillance audit** — the UKAB will typically review the checklist at surveillance audits
- **MHRA inspection** — MHRA may review the technical file and checklist during market surveillance

---

## Related pages

- [Essential Requirements — overview](./overview)
- [General requirements — ER 1–6](./general-requirements)
- [Design and construction — ER 7–17](./design-construction-requirements)
- [IVD Essential Requirements (Schedule 1A)](./ivd-essential-requirements)
- [Technical documentation overview](../technical-documentation/overview)
- [UK-designated standards](./uk-designated-standards)

---

## Official references

| Reference | Description |
|---|---|
| UK MDR 2002, Schedule 1 | General device ERs |
| UK MDR 2002, Part III, Schedule 1A | IVD ERs |
| MHRA: Designated standards | Current list of UK-designated standards |
| ISO 14971:2019 | Risk management |
| IEC 60601-1 | Electrical safety |
| IEC 62304 | Software lifecycle |
