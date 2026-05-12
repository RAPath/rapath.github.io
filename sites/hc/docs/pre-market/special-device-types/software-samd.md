---
title: Software as a Medical Device (SaMD)
sidebar_position: 2
description: Health Canada's regulatory approach to Software as a Medical Device (SaMD), including classification, key standards, cybersecurity, and AI/ML.
---
# Software as a Medical Device (SaMD)

## Definition
**Software as a Medical Device (SaMD)** is software that qualifies as a medical device in its own right — not embedded software that drives a hardware medical device, but standalone software with a medical intended use.

## Is your software a SaMD?
Software is a SaMD if it:
- Has a medical **intended use** (diagnosis, treatment, monitoring, prevention)
- Achieves this purpose **without being part of a hardware medical device**

General wellness apps, administrative software, and software with no medical claims are **not** SaMDs.

## Classification
See [Software & SaMD Classification](/docs/pre-market/classification/samd-classification) for the IMDRF-based classification framework Health Canada applies.

## Key standards

| Standard | Scope |
|---|---|
| IEC 62304 | Software lifecycle processes |
| IEC 62366-1 | Usability engineering |
| ISO 14971 | Risk management |
| IEC 80001-1 | Risk management for IT networks with medical devices |

## Cybersecurity
Connected SaMD must address cybersecurity in the risk management file:
- Threat modelling
- Vulnerability management processes
- Authentication, access control, encryption
- Software Bill of Materials (SBOM)
- Post-market vulnerability monitoring

## AI/ML-based SaMD
AI/ML SaMD presents unique challenges due to adaptive algorithms. Health Canada follows IMDRF guidance on:
- Pre-determined change control plans
- Transparency and explainability
- Bias across populations
- Continuous performance monitoring

## Software updates
Not all software updates require a Device Licence amendment. See [Amending a Device Licence](/docs/post-market/device-licence-maintenance/amending-device-licence) for criteria.

> **Legislative source:** Medical Devices Regulations, SOR/98-282; IMDRF SaMD guidance documents
