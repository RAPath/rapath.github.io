---
sidebar_position: 2
title: Software as a Medical Device (SaMD)
description: FDA's regulatory approach to Software as a Medical Device (SaMD) — definition, classification, risk framework, and how to determine if your software is a regulated device.
keywords: [SaMD, software as a medical device, FDA software, software device, IMDRF SaMD, software classification]
---

# Software as a Medical Device (SaMD)

## Definition

**Software as a Medical Device (SaMD)** is software intended to be used for one or more medical purposes that perform these purposes without being part of a hardware medical device. FDA adopted this definition from the **IMDRF SaMD Key Definitions (N12)** document.

A SaMD must:
- Perform a medical purpose (diagnosis, monitoring, treatment, prevention of a disease or condition)
- Do so **without being part of a hardware device** (software embedded in or controlling a hardware device is not SaMD — it is device software functions or a part of the hardware device)

---

## Is my software a medical device?

FDA's **Software Functions Guidance (2023)** establishes a three-category framework:

| Category | Description | FDA regulated? |
|---|---|---|
| **Device software functions** | Software that meets the FD&C Act § 201(h) device definition | **Yes** |
| **Non-device software functions** | Software excluded from the device definition (administrative, general wellness, EHR, data transfer only) | **No** |
| **Exempt CDS** | Clinical decision support that is not the primary basis for a clinical decision and whose basis can be independently reviewed | **No** (excluded by § 520(o)) |

---

## SaMD risk framework

FDA applies a risk-based approach to SaMD, aligned with the **IMDRF SaMD Risk Categorisation Framework (N23)**:

| SaMD Risk | State of healthcare situation | Significance of information |
|---|---|---|
| **IV (highest)** | Critical | Driving clinical management |
| **III** | Serious | Driving clinical management |
| **II** | Non-serious | Driving clinical management |
| **I (lowest)** | Any | Informing clinical management |

Higher-risk SaMD typically requires a more rigorous premarket review (PMA or De Novo) and more extensive clinical evidence.

---

## SaMD classification

SaMD is classified under the same Class I/II/III system as all other devices, using the same product codes and classification regulations. Common SaMD classifications:

| SaMD type | Typical class | Typical pathway |
|---|---|---|
| AI-based diagnostic imaging software | II or III | 510(k) or De Novo |
| Glucose monitoring app (CGM companion) | II | 510(k) |
| AI/ML-based ECG interpretation | II | De Novo or 510(k) |
| High-risk diagnostic AI (novel) | III | PMA |
| CDS software meeting § 520(o) exemption | Not a device | No submission |

---

## Key FDA guidance for SaMD

| Document | Year | Key content |
|---|---|---|
| Software Functions: Device vs Non-Device | 2023 | Determines if software is a device under § 520(o) |
| Clinical Decision Support Software | 2022 | Boundaries of exempt CDS |
| Artificial Intelligence/Machine Learning Action Plan | 2021 | FDA's approach to AI/ML-based devices |
| Predetermined Change Control Plans | 2024 | Framework for managing AI/ML algorithm changes |
| Software as a Medical Device: Clinical Evaluation | 2017 | Aligns with IMDRF N41 |

---

## Official resources
- [FDA — Software as a Medical Device](https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd)
- [FDA — Software Functions Guidance (2023)](https://www.fda.gov/media/117683/download)
- [IMDRF SaMD Documents](https://www.imdrf.org/documents?field_document_type_target_id%5B%5D=22)
