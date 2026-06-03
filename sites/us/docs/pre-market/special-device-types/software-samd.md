---
sidebar_position: 1
title: Software & AI/ML — FDA Policy (SaMD)
description: FDA's regulatory framework for Software as a Medical Device (SaMD) and AI/ML-based devices — classification, oversight levels, and the Predetermined Change Control Plan.
keywords: [SaMD, software as a medical device, AI ML device, FDA software, PCCP, digital health]
---

# Software & AI/ML — FDA Policy (SaMD)

## What is SaMD?

**Software as a Medical Device (SaMD)** is software that performs a medical device function without being part of a hardware medical device. The definition is aligned with the IMDRF SaMD framework.

Examples:
- Software that analyses medical images to detect pathology
- AI-powered ECG interpretation software
- Clinical decision support software that drives clinical decision-making

## FDA's regulatory framework for software

FDA uses three categories:

| Category | Description | Regulatory status |
|---|---|---|
| **Device software functions** | Software that meets the SaMD definition | Subject to FDA oversight |
| **Non-device software functions** | Administrative, general wellness, non-clinical decision support | Outside FDA oversight |
| **Exempt CDS software** | Clinical decision support that is not the primary basis for clinical decision | Not a device (under 21st Century Cures Act) |

## SaMD classification

SaMD is classified using the same Class I/II/III framework. FDA's **Digital Health Software Precertification Program** (2019–2022) explored an alternative approach but did not result in a permanent regulatory pathway.

Key guidance documents:
- FDA Software Functions Guidance (2023) — determines if software is a device
- Clinical Decision Support Software Guidance (2022)
- AI/ML Action Plan (2021)
- Predetermined Change Control Plan (PCCP) Guidance (2024)

## Predetermined Change Control Plan (PCCP)

For AI/ML-based SaMD that is intended to learn and change, FDA has established the **PCCP framework**:

- Submitted as part of a 510(k), De Novo, or PMA
- Specifies the types of modifications anticipated
- Describes the algorithm change protocol
- Specifies performance monitoring requirements

A device with an approved PCCP can implement pre-specified changes **without submitting a new 510(k)** for each change.

## Official resources
- [FDA — Digital Health Center of Excellence](https://www.fda.gov/medical-devices/digital-health-center-excellence)
- [FDA — Software as a Medical Device](https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd)
- [FDA — PCCP Guidance (2024)](https://www.fda.gov/media/166704/download)

510(k) Submission for SaMD

Most SaMD products follow the 510(k) pathway and must:

Identify an appropriate predicate device — the predicate may be another SaMD product, a cleared medical device software component, or a substantially equivalent hardware device with the same intended use

Demonstrate substantial equivalence — show that the SaMD is as safe and effective as the predicate device in terms of performance, indications for use, and technological characteristics

Submit software documentation — including software specifications, algorithm descriptions, cybersecurity documentation, and clinical/analytical validation data

Note: Identifying a predicate device is more challenging for novel AI/ML algorithms; sponsors may pursue De Novo classification if no suitable predicate exists.
