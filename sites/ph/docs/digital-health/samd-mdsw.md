---
title: SaMD & MDSW Regulation
sidebar_position: 2
description: Software as a Medical Device (SaMD) and Medical Device Software (MDSW) regulation in the Philippines — classification, technical documentation, IEC 62304, and cybersecurity requirements.
---

# SaMD & MDSW Regulation

> *Draft MDSW Circular 2025 · CDRRHR · IEC 62304 · ASEAN AMDD*

## Scope — What Is MDSW Under the Philippines Framework?

The draft Philippines MDSW circular covers software intended to be used for a **medical purpose** — diagnosis, prevention, monitoring, treatment, or alleviation of disease or injury. Two categories apply:

| Category | Definition | Example |
|---|---|---|
| **SaMD** | Software that is itself a medical device, not embedded in hardware | AI diagnostic imaging analysis app, ECG interpretation software |
| **SiMD** | Software embedded in or controlling a hardware medical device | Infusion pump controller firmware, pacemaker programming software |

**Out of scope:**
- Software with no medical purpose (hospital administration, scheduling)
- IVD software (separate framework pending)
- Software used for manufacturing or quality management of devices

## Classification of SaMD

SaMD classification uses ASEAN AMDD Class A–D, informed by two dimensions:

**1. Significance of the information provided:**
- Drives treatment/diagnosis (highest significance)
- Informs clinical management (moderate significance)
- Informs lifestyle decisions / not life-critical (lower significance)

**2. State of the healthcare situation:**
- Critical — life-threatening or irreversible harm possible if wrong
- Serious — significant deterioration possible
- Non-serious — appropriate management, no significant change expected

The intersection of these determines class. A SaMD that drives a treatment decision in a critical condition is likely **Class D**; one that informs a lifestyle decision in a non-serious condition may be **Class A**.

## Technical Documentation for MDSW

In addition to the standard CSDT sections, MDSW submissions must include software-specific documentation:

### Software Documentation Requirements

| Document | Description |
|---|---|
| **Software description** | Overview of software functions, architecture, operating environment (OS, hardware dependencies) |
| **Intended medical purpose** | Clear statement of what the software does clinically and for whom |
| **Software Development Lifecycle (SDLC)** | Alignment with IEC 62304 — software development, maintenance, problem resolution |
| **Software requirements specification** | Functional and safety requirements |
| **Software architecture** | Description of software items and their interactions |
| **V&V test documentation** | Unit testing, integration testing, system testing records |
| **Known anomalies** | List of known software defects and risk mitigation |
| **Revision history** | Version history and change management records |
| **Cybersecurity documentation** | Threat model, security controls, vulnerability management plan |
| **Post-market update plan** | How software updates will be managed and submitted post-approval |

## IEC 62304 — Software Lifecycle Standard

**IEC 62304** is the recognised international standard for medical device software lifecycle processes. Compliance with IEC 62304 is expected for MDSW submissions.

IEC 62304 defines three software safety classes:
- **Class A:** No injury or damage to health possible
- **Class B:** Non-serious injury possible
- **Class C:** Death or serious injury possible

Requirements scale with the safety class — Class C requires the most rigorous development documentation.

## Cybersecurity for Connected MDSW

Connected MDSW (software with network connectivity, data sharing, or remote update capability) must address cybersecurity risks:

| Cybersecurity Requirement | Detail |
|---|---|
| Threat modelling | Identify potential attack vectors and threat actors |
| Secure architecture | Defence in depth, principle of least privilege |
| Authentication and access control | User authentication, role-based access |
| Data integrity | Protection against unauthorised modification of data |
| Encryption | Encryption of data in transit and at rest where appropriate |
| Vulnerability disclosure | Process for receiving and responding to vulnerability reports |
| Update management | Secure delivery and installation of software updates |

Post-market cybersecurity monitoring must be part of the PMS plan.

## Post-Approval Software Updates

Software updates after CMDN/CMDR approval need careful management:
- **Minor bug fixes** with no change to intended purpose or safety profile: likely no variation required but document and maintain records
- **New features or expanded intended purpose:** likely require a variation application before release
- **Safety-critical updates / patches:** notify CDRRHR promptly and follow FSCA procedures if the update addresses a safety issue

The draft circular is expected to provide more specific criteria for which updates require regulatory notification. Until finalised, adopt a conservative approach and consult CDRRHR for significant updates.

## Preparing Now

While the MDSW circular is pending finalisation, manufacturers can prepare:
- Complete IEC 62304-aligned SDLC documentation
- Prepare a comprehensive V&V test report
- Conduct a cybersecurity threat modelling exercise
- Draft a post-market update management procedure
- Classify the software under the ASEAN AMDD Class A–D framework

These documents will be required regardless of the final circular text and can be adapted when requirements are confirmed.
