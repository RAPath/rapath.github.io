---
title: Digital Health Framework
sidebar_position: 1
description: Digital health regulatory framework in Thailand — Thai FDA approach to SaMD, AI/ML, cybersecurity, and ASEAN AMDD software classification under the Medical Device Act B.E. 2562.
---

# Digital Health Framework

> *Thai FDA · MDCD · Medical Device Act B.E. 2562 · ASEAN AMDD SaMD*

## Overview

Thailand's **Medical Device Act B.E. 2562 (2019)** explicitly includes software within the medical device definition. Thai FDA/MDCD applies the **ASEAN AMDD** framework to classify and regulate software, aligned with IMDRF principles for Software as a Medical Device (SaMD).

## Regulatory Basis

| Instrument | Relevance |
|---|---|
| Medical Device Act B.E. 2562 (2019) | Software included in medical device definition |
| ASEAN AMDD | SaMD classification framework adopted |
| IMDRF SaMD N41 (2017) | International SaMD classification principles |
| IEC 62304 | Software lifecycle standard expected in CSDT |
| MoPH Notifications | Specific classification and labelling rules |

## What Is a Medical Device Software in Thailand?

Software qualifies as a medical device when it has a **medical purpose** — diagnosis, prevention, monitoring, prediction, prognosis, treatment, or alleviation of disease or injury. Classification of SaMD in Thailand follows the ASEAN AMDD four-class framework. See [SaMD, Combination Products & Special Classifications](/classification/combination-samd) for the full classification matrix.

| Software Type | Medical Device? | Typical Class |
|---|---|---|
| AI diagnostic imaging analysis | Yes | Class 3 or 4 |
| Clinical decision support (drives treatment) | Yes | Class 2–4 depending on severity |
| Remote patient monitoring with alerts | Yes | Class 2 or 3 |
| Drug dosing calculation (clinical output) | Yes | Class 2 or 3 |
| General wellness / fitness apps | No | — |
| Hospital administrative software (EMR, scheduling) | No | — |
| Telemedicine video platform (no clinical output) | No | — |

## Approval Pathways for SaMD

SaMD follows the standard Thai FDA pathway based on its class:

| SaMD Class | Pathway | Key Requirement |
|---|---|---|
| Class 1 | Listing | Simple notification; auto-approved since January 2025 |
| Class 2–3 | Notification | Full CSDT with software documentation (IEC 62304, V&V) |
| Class 4 | License | Comprehensive CSDT; most stringent clinical and software evidence |

## Technical Documentation for SaMD

In addition to standard CSDT sections, SaMD submissions must include software-specific documentation:

| Document | Standard/Reference |
|---|---|
| Software description and intended medical purpose | — |
| Software Development Lifecycle documentation | IEC 62304 |
| Software requirements specification | — |
| Software architecture documentation | — |
| Verification and validation test reports | — |
| Usability engineering file | IEC 62366-1 |
| Cybersecurity documentation | IMDRF N60 / IEC 81001-5-1 |
| Algorithm validation (AI/ML) | IMDRF AI/ML guidance |
| Risk management (software hazards) | ISO 14971 |
| Post-market software update management plan | — |

## AI and Machine Learning

AI/ML software for medical purposes in Thailand is regulated as SaMD. Key considerations:
- **Training data transparency:** Document data sets used — representativeness of Thai and Southeast Asian patient populations is relevant
- **Algorithm validation:** Validate on independent datasets; report sensitivity, specificity, and applicable performance metrics
- **Adaptive algorithms:** Software that learns post-deployment may create change management obligations — define acceptable performance boundaries in the technical documentation
- **Clinical evidence:** High-risk AI tools (Class 3–4) require clinical validation data

## Cybersecurity Requirements

Connected SaMD must address cybersecurity risks aligned with **IMDRF N60 — Principles and Practices for Medical Device Cybersecurity**:

| Requirement | Description |
|---|---|
| Threat modelling | Identify attack vectors and adversaries |
| Secure architecture | Authentication, access control, encryption |
| Vulnerability management | Process for receiving, assessing, and responding to vulnerabilities |
| Software update mechanism | Secure delivery and installation of updates |
| Post-market monitoring | Ongoing monitoring for newly discovered vulnerabilities |

## Wireless Devices — NBTC Approval

SaMD that communicates wirelessly (Wi-Fi, Bluetooth, LTE/5G, NFC) requires **NBTC (National Broadcasting and Telecommunications Commission) type approval** in addition to Thai FDA registration. These are separate processes — ensure NBTC approval is obtained before commercial distribution. See [NBTC Approval for Wireless Devices](/establishment-licensing/nbtc).

## Post-Market Update Management

Software updates after Thai FDA approval require careful management:
- **Critical safety patches:** Notify MDCD and follow FSCA procedures where the update addresses a safety issue
- **Significant changes** (new indications, new features that extend intended use): Submit a variation application before release
- **Minor bug fixes** with no change to safety or performance: Document and maintain records; no variation typically required

Monitor MDCD guidance for specific update notification thresholds, which are expected to be clarified as Thailand's SaMD framework matures.
