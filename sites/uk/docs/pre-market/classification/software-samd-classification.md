---
sidebar_position: 6
title: Software & SaMD classification
description: >
  How standalone software is classified as a medical device under the UK Medical Devices Regulations
  2002 — the qualification test, applicable classification rules, MHRA guidance on AI and machine
  learning, and comparison with the EU MDR/MDCG approach.
tags: [uk-mdr, software, samd, ai, classification, pre-market]
---

:::note[Regulatory basis]
Software classification under UK MDR 2002 follows the general classification rules in **Schedule 2** (particularly **Rule 12** for software), and MHRA's published guidance on software as a medical device. The EU MDR/MDCG guidance on software (MDCG 2019-16, MDCG 2021-24) is a useful reference for the UK context, though UK MDR 2002 requirements apply in Great Britain.
:::

:::warning[Disclaimer]
This site provides general information only and does not constitute legal or regulatory advice. Software classification can be highly fact-specific. Always consult MHRA guidance and a qualified regulatory professional before finalising software classification decisions.
:::

---

## The two-step test: qualify first, then classify

Before applying the classification rules to software, manufacturers must first determine whether their software **qualifies** as a medical device at all. This is a two-step process:

### Step 1 — Does the software qualify as a medical device?

Software qualifies as a medical device (SaMD) if it meets **all** of the following:

1. It has an **intended purpose** stated by the manufacturer that falls within the medical device definition (diagnosis, prevention, monitoring, prediction, prognosis, treatment, or alleviation of disease, injury, or disability)
2. It **acts on** the data it receives — i.e., it does more than merely store, archive, losslessly compress, or transmit data
3. The output it produces **informs or drives a clinical decision**

Software that only stores, retrieves, or transfers data — without producing clinically meaningful output — is **not** a medical device, regardless of the healthcare setting it is used in.

### Step 2 — What class does it fall into?

Once software qualifies as a medical device, the classification rules in Schedule 2 of UK MDR 2002 apply. Software is primarily covered by **Rule 12**, with Rules 9, 10, and 11 also potentially relevant.

---

## Rule 12 — the primary software classification rule

**Rule 12** of Schedule 2 UK MDR 2002 states:

> All other active devices are in Class IIa unless they are intended to be used in direct contact with the human heart or central circulatory system or central nervous system, in which case they are in Class III; or they are intended to supply energy in the form of ionising radiation, in which case they are in Class IIb.

For **software specifically**, Rule 12 is interpreted in conjunction with MHRA's guidance to produce the following practical classification outcomes:

| Software output and clinical context | Class |
|---|---|
| Software that provides information used to make decisions with no or minor impact on patient management (e.g., educational tools, general wellness apps) | **Not a medical device** |
| Software that provides information used to make decisions with significant impact on patient management, but in non-critical conditions (e.g., chronic disease monitoring, alerting for non-life-threatening conditions) | **Class IIa** |
| Software that provides information used to make decisions with serious impact on patient management (e.g., diagnosis of malignancy, dosage calculation for high-risk drugs, triage of critical conditions) | **Class IIb** |
| Software that provides information used to make decisions that are directly life-sustaining, or that drives therapy in the central circulatory or central nervous system | **Class III** |

This risk-based classification of software based on its **clinical impact** mirrors the approach in MDCG 2021-24 (the EU framework guidance), which MHRA regards as a useful reference even for the UK context.

---

## Additional classification rules relevant to software

Beyond Rule 12, other rules may apply to software:

| Rule | When applicable |
|---|---|
| **Rule 9** | Software that is an active therapeutic device with potential for very dangerous situations (e.g., radiotherapy planning software) — Class IIb or III depending on risk |
| **Rule 10** | Software used for diagnosis and/or monitoring of vital physiological parameters where the nature of variations could result in immediate danger to the patient (e.g., cardiac rhythm monitoring with auto-alert) — Class IIb |
| **Rule 11** | Software intended to administer or exchange energy with the patient — Class IIa unless delivering energy in a potentially hazardous manner (IIb) |
| **Rule 12** | All other active software — Class IIa as default, with escalation to IIb or III for critical applications |

When multiple rules apply, the **highest resulting class prevails**.

---

## MHRA's framework for software and AI

MHRA has published specific guidance on software and AI/ML as medical devices, reflecting the rapid growth of these technologies:

### MHRA AI and Machine Learning guidance (2021)

MHRA published [guidance on software and AI as a medical device](https://www.gov.uk/government/publications/software-and-ai-as-a-medical-device-change-programme-roadmap) setting out its regulatory approach to:

- **Predetermined change control plans** — how manufacturers can pre-specify future software changes and the circumstances under which those changes do not require a new conformity assessment
- **Transparency requirements** — what information should be disclosed to users about AI/ML-based decision support
- **Continuous learning algorithms** — how adaptive algorithms that change their behaviour based on real-world data are treated

### The "Software and AI as a Medical Device Change Programme"

MHRA launched a multi-year programme to develop UK-specific guidance on AI/ML in medical devices, covering:

1. **Intended purpose and indications** — precision in claiming what the software does and for whom
2. **Data management** — training data, validation data, bias considerations
3. **Algorithm transparency** — explainability and the "black box" problem
4. **Lifecycle management** — version control, post-market performance monitoring
5. **Predetermined change control** — managing post-market algorithm updates

This programme has produced [roadmap documents](https://www.gov.uk/government/publications/software-and-ai-as-a-medical-device-change-programme-roadmap) outlining planned guidance publications. Check [What's New](../../whats-new/recent-regulatory-changes) for latest releases.

---

## Common software qualification scenarios

### Clinical decision support (CDS)

Clinical decision support software that **simply presents guidelines, reference information, or pre-existing clinical literature** — without processing patient-specific data to produce a diagnosis or recommendation — is generally **not** a medical device.

CDS software that **processes patient-specific data** (e.g., patient history, test results, imaging) to produce a patient-specific recommendation, alert, or diagnosis **is** a medical device.

### Diagnostic imaging software

Software that:
- Merely displays or archives DICOM images → **not a medical device** (storage/archival only)
- Applies image processing to enhance images for radiologist review → borderline; may be **Class IIa** if the enhancement influences diagnosis
- Detects pathologies in images autonomously (e.g., flags suspected malignancy in CT scans) → typically **Class IIb or III** depending on the condition and clinical context

### Electronic health records (EHR/EPR)

General EHR/EPR systems that store, retrieve, and display patient records without processing data to produce diagnostic output are **not** medical devices. Specific modules within an EHR that calculate drug dosages, flag drug interactions, or generate clinical alerts based on patient data may qualify as medical devices.

### Mobile health apps (mHealth)

The vast majority of consumer wellness apps (step counters, sleep trackers, meditation apps) are **not** medical devices.

Apps that:
- Measure or record vital signs and claim diagnostic utility → may be medical devices
- Alert the user to a possible medical condition → likely medical devices
- Calculate insulin dosages → medical devices (Class IIb or III)
- Provide general guidance on managing a chronic condition → borderline; depends on specificity of claims

### Companion diagnostics software

Software used to identify patients suitable for a specific therapeutic product (companion diagnostics) is typically a medical device. The regulatory treatment of the diagnostic element (as an IVD or general medical device) depends on whether it uses in vitro specimen examination.

---

## IVD software

Software that processes in vitro test results to produce a diagnostic output is subject to **Part III (IVD)** provisions of UK MDR 2002, not Part I. Classification as List A, List B, Self-test, or General IVD depends on the clinical context and analyte.

Examples:
- Software that interprets blood glucose meter readings in a clinical decision support context → IVD considerations (List B analyte)
- Software that integrates multiple IVD results to produce a composite diagnostic score → IVD classification based on the overall diagnostic function

---

## Key classification questions for software

Before finalising classification, work through these questions:

1. **Is there a specific medical intended purpose?** (Not "general wellness" — a precise diagnostic or therapeutic claim)
2. **Does the software process patient-specific data to produce output?** (Or does it merely store/transfer?)
3. **What clinical decisions does the output inform?** (Minor adjustment vs life-sustaining therapy)
4. **What is the severity of the condition being diagnosed/managed?** (Chronic, non-life-threatening vs acute, life-threatening)
5. **What happens if the software output is wrong?** (Consequence of error drives the risk tier)
6. **Is the output in vitro specimen-based?** (→ IVD provisions)
7. **Is the software part of a device system or standalone?** (Standalone SaMD vs embedded software in a device)

---

## Comparison with EU MDR / MDCG approach

| Aspect | UK MDR 2002 (GB) | EU MDR 2017/745 + MDCG guidance (EU/NI) |
|---|---|---|
| Software definition | Included in general medical device definition | Explicitly defined in MDR Art. 2 |
| Primary classification rule | Rule 12 (Schedule 2) | Rule 11 (Annex VIII, Rules 1–22) |
| Qualification guidance | MHRA SaMD guidance | MDCG 2019-16 |
| Classification guidance | MHRA / Rule 12 interpretation | MDCG 2021-24 |
| AI/ML guidance | MHRA AI Change Programme | MDCG 2021-24 (AI considerations) |
| Predetermined change control | MHRA guidance in development | MDCG position in development |

Both frameworks reach similar practical outcomes for most software, but the EU MDCG guidance is more detailed. MHRA explicitly acknowledges EU MDCG guidance as a useful reference for the UK context.

---

## Related pages

- [What is a medical device?](../../start-here/what-is-a-medical-device) — including SaMD in the definition
- [How classification works](./how-classification-works) — applying Schedule 2 rules
- [Class I · IIa · IIb · III](./uk-mdr-classes) — class-by-class requirements
- [IVD classification](./ivd-classification) — for software processing in vitro data
- [What is not a medical device?](../../start-here/what-is-not-a-medical-device) — wellness apps that don't qualify

---

## Official references

| Reference | Description |
|---|---|
| UK MDR 2002, Schedule 2, Rule 12 | Primary software classification rule |
| MHRA: Software and AI as a medical device | MHRA's software/AI guidance and change programme |
| MHRA: AI Change Programme Roadmap | Multi-year programme for AI/ML guidance development |
| MDCG 2019-16 (reference) | EU guidance on software qualification — useful comparative reference |
| MDCG 2021-24 (reference) | EU guidance on software classification — useful comparative reference |
| IEC 62304 | Medical device software — software lifecycle processes (designated UK standard) |
| IEC 82304-1 | Health software — general requirements for product safety |

The page ends with 'Rule 10 Software used for diagnosis and/or monitoring of vital physiological parameters where the nature of variations could result in immediate danger to the patien' which is incomplete.
