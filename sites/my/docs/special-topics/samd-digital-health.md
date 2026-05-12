---
title: SaMD & Digital Health
sidebar_position: 1
description: MDA's regulatory approach to Software as a Medical Device (SaMD), AI/ML-driven software, mobile medical apps, and cybersecurity expectations in Malaysia.
---

# SaMD & Digital Health

## What is SaMD?

**Software as a Medical Device (SaMD)** is software intended to be used for one or more medical purposes without being part of a hardware medical device. Malaysia's MDA has adopted the **IMDRF SaMD framework** (IMDRF/SaMD WG/N10FINAL:2013) for the regulation of SaMD.

SaMD is regulated as a medical device under **Act 737** when it meets the definition of a medical device by virtue of its intended purpose (diagnosis, prevention, monitoring, treatment, or alleviation of disease).

## Is Your Software a Medical Device?

### Software that IS regulated as a medical device (SaMD)
- Software that analyses ECG data to detect arrhythmias
- Diagnostic imaging software that detects lesions
- Software that calculates medication doses based on patient parameters
- Clinical decision support software that directly drives clinical decisions
- Software that monitors glucose levels from a sensor and issues alerts

### Software that is NOT a medical device
- Administrative or operational hospital software (scheduling, billing)
- General wellness apps (step counters, calorie trackers) without medical claims
- Software that provides general health information without specific diagnostic claims
- Software for clinician education or training

The key question: **Does the software have a medical intended purpose as defined in Act 737?**

## SaMD Classification

SaMD is classified using the standard Class A–D framework, but the **IMDRF SaMD risk categorisation** also informs the classification decision:

| IMDRF State of Healthcare Situation | Drive / Inform / Treat or Diagnose | Significance of Information |
|-------------------------------------|-----------------------------------|---------------------------|
| Critical | III | II | I |
| Serious | II | II | I |
| Non-serious | II | I | I |

This matrix maps to Malaysian Class A–D through the standard classification rules.

SaMD that:
- **Drives** clinical decisions in **critical** situations → Class D
- **Informs** clinical decisions in **serious** situations → Class C/D
- **Provides information** for non-serious situations → Class A/B

## AI/ML-Based SaMD

Artificial intelligence and machine learning (AI/ML) features in SaMD present specific regulatory challenges due to:

- Evolving algorithms that may change performance over time (adaptive algorithms)
- Validation complexity — training data requirements, bias, generalisability
- Transparency and explainability requirements

MDA expects AI/ML-based SaMD to address:

1. **Algorithm validation** — performance testing on representative Malaysian/regional datasets where available
2. **Bias assessment** — evaluation of algorithmic bias across relevant patient populations
3. **Transparency** — description of how the algorithm makes decisions
4. **Performance monitoring** — ongoing monitoring of algorithm performance post-deployment
5. **Change management** — how significant algorithm updates are managed (as device changes)

## Mobile Medical Apps

Mobile apps intended for use on smartphones or tablets can be SaMD if they have a medical intended purpose. The platform (iOS/Android) does not exempt them from regulation.

App-specific documentation requirements:
- Platform and operating system requirements
- App version control and update management
- Data security and privacy
- Usability testing on target devices

## Cybersecurity Requirements

MDA aligns with **IMDRF/CYBER WG/N60** (*Principles and Practices for Medical Device Cybersecurity*) for cybersecurity requirements.

Key cybersecurity documentation expected:

| Document | Content |
|----------|---------|
| Cybersecurity risk assessment | Threats, vulnerabilities, risks for networked/connected devices |
| Security architecture | Description of security controls implemented |
| Vulnerability management plan | Process for monitoring and addressing new vulnerabilities |
| Software Bill of Materials (SBOM) | List of software components and known vulnerabilities |
| Incident response plan | How cybersecurity incidents are detected and responded to |

:::note Networked Devices
Any SaMD or hardware device with network connectivity (Wi-Fi, Bluetooth, cellular, USB) should include a cybersecurity assessment in the technical file.
:::

## Practical Recommendations

1. Determine if your software meets the SaMD definition early
2. Apply IMDRF SaMD categorisation alongside the standard classification rules
3. Engage MDA for a pre-submission meeting if the SaMD classification is uncertain
4. For AI/ML SaMD: document training data provenance, validation datasets, and performance metrics comprehensively
5. Plan for post-market software update management from the outset
