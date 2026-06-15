---
sidebar_position: 4
title: CDS Software — When FDA Regulates
description: When clinical decision support (CDS) software is regulated by FDA — the four criteria from FDA's 2022 CDS guidance and the § 520(o) exclusion from the FD&C Act.
keywords: [CDS software, clinical decision support FDA, Section 520o, FDA CDS guidance, regulated CDS, non-device CDS]
---

# CDS Software — When FDA Regulates

## The § 520(o) CDS exclusion

The **21st Century Cures Act (2016)** added **FD&C Act § 520(o)(1)(E)**, which excludes certain clinical decision support (CDS) software from the definition of a medical device. CDS software is excluded if it meets **all four** of the following criteria:

---

## The four criteria for exclusion

### Criterion 1 — Not intended to acquire, process, or analyse medical images or signals
The software is not intended to acquire, process, or analyse medical images or signals from in vitro diagnostic devices or pattern recognition hardware.

### Criterion 2 — Displays, analyses, or prints information from an EHR
The software is intended for displaying, analysing, or printing medical information about a patient or other medical information (such as peer-reviewed clinical studies and clinical practice guidelines).

### Criterion 3 — Supports or provides recommendations to a clinician
The software is intended to support or provide recommendations to a healthcare professional about prevention, diagnosis, or treatment of a disease or condition.

### Criterion 4 — The clinician can independently review the basis for the recommendation
**This is the most consequential criterion.** The software must be intended for use by a healthcare professional who is expected to independently review the basis for the recommendation — meaning the clinician is not simply following the software's output but can verify the reasoning.

If the software is **intended to be the primary basis** for clinical decision-making (where the clinician simply follows the recommendation without independent review), it does **not** qualify for the exclusion and **is** a regulated device.

---

## Examples from FDA's 2022 CDS guidance

| Software | Regulated device? |
|---|---|
| Software that retrieves relevant clinical guidelines and displays them to a physician | **No** — meets all four criteria |
| Software that analyses an ECG and displays an interpretation for a cardiologist to review | **Depends** — if the cardiologist is expected to independently review the ECG tracing, likely not a device. If the cardiologist simply follows the output, likely a device |
| AI software that detects diabetic retinopathy from retinal images autonomously (without physician review of images) | **Yes** — regulated device (acquires/processes medical images; primary basis for decision) |
| Drug-drug interaction checker that flags interactions for a pharmacist | **No** — meets criteria; pharmacist independently reviews |
| Sepsis prediction algorithm that triggers an alert | **Yes** — intended as primary basis for urgent clinical action |

---

## Official resources
- [FDA — CDS Software Guidance (2022)](https://www.fda.gov/media/133650/download)
- [FD&C Act § 520(o)](https://www.law.cornell.edu/uscode/text/21/360j)
- [FDA — Digital Health Center of Excellence](https://www.fda.gov/medical-devices/digital-health-center-excellence)

Documentation requirements

Manufacturers should document their § 520(o) exclusion analysis as part of premarket submissions or device master record maintenance. FDA recommends including: (1) a detailed assessment of how the software meets each of the four criteria, (2) evidence that independent clinical review is feasible and expected, and (3) labelling or training materials that reinforce the clinician's independent review obligation.

Add a new section after the examples table: 'Documentation requirements

Manufacturers should document their § 520(o) exclusion analysis as part of premarket submissions or device master record maintenance. FDA recommends including: (1) a detailed assessment of how the software meets each of the four criteria, (2) evidence that independent clinical review is feasible and expected, and (3) labelling or training materials that reinforce the clinician's independent review obligation.'
