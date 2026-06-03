---
title: Software as a Medical Device (SaMD) — Overview
sidebar_position: 1
description: SFDA regulatory framework for Software as a Medical Device (SaMD) — when software is a medical device, classification, and registration.
---

# Software as a Medical Device (SaMD)

## When is software a medical device in Saudi Arabia?

Software qualifies as a medical device under the SFDA framework when it has a **medical intended purpose** — for example:
- Software that analyses ECG data to detect arrhythmias
- AI algorithms that screen radiological images for pathology
- Mobile apps that calculate insulin dosing for diabetes management
- Software that monitors and alerts for patient deterioration

Software used solely to support device hardware (device operating software with no independent medical function) is generally **not** a separate medical (Medical Device Marketing Authorization) (Technical File Application) through the GHAD portal, device, unless it qualifies for an export-only exemption.

## Classification of SaMD

SaMD is classified using the same general classification rules as physical medical devices (MDS-REQ 1), informed by IMDRF SaMD classification principles. Classification depends on:
- Seriousness of the disease or condition addressed
- Significance of information to clinical decision-making
- Intended user (professional vs. lay)

SaMD with high clinical significance for serious conditions will typically be Class C or D; low-risk informational software may be Class A or B.

## MDMA for SaMD

SaMD requires MDMA via TFA like any other medical device. The technical file for software must address:
- Intended purpose and use scenarios
- Software lifecycle documentation (IEC 62304)
- Cybersecurity risk assessment
- Usability engineering (IEC 62366-1)
- Algorithm validation and verification
- Version management plan

## Further reading

- [Software & SaMD Classification](../device-classification/software-samd-classification)
- [AI/ML Guidance](./ai-ml-guidance)
- [SFDA Digital Health Framework](./sfda-digital-health)

SaMD in Combination Products

When software is integral to the operation of a physical medical device (e.g., firmware for a pacemaker programmer or software controlling an infusion pump), the software and hardware are classified and reviewed as a single combination product. The classification of the combination product follows MDS-REQ 1, and the technical file must address both hardware and software components. Software-only components of a combination product are not separately classified.
