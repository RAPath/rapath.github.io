---
title: Software & SaMD Classification
sidebar_position: 7
description: How the SFDA classifies Software as a Medical Device (SaMD) — IMDRF principles, version management, and AI/ML considerations.
---

# Software & SaMD Classification

## What is SaMD in Saudi Arabia?

**Software as a Medical Device (SaMD)** is software intended to be used for one or more medical purposes without being part of a hardware medical device. Under the SFDA framework, SaMD is regulated as a medical device and must be classified and registered via MDMA if it meets the medical device definition.

## Classification of SaMD

The SFDA applies the general classification rules of MDS-REQ 1 to software, informed by **IMDRF SaMD classification principles**. The classification depends on:

- The **seriousness of the disease or condition** the software is intended to diagnose, monitor, or treat
- The **significance of the information provided** — whether it is the basis for final clinical decisions or merely informs a clinician
- The **intended user** — healthcare professional vs. lay person

Software that directly drives clinical decisions for life-threatening conditions is likely Class C or D (e.g. autonomous diagnostic systems with no clinician review). Software that is reviewed by a clinician before use providing low-risk informational support may be Class A or B.

## Software version management in MDMA

The SFDA requests a clear explanation of the version numbering scheme in the MDMA application for software devices:
- Which digit/increment represents a **major (significant) change** — typically triggering re-submission or change notification
- Which represents a **minor (non-significant) change** — typically managed through internal change control

Document your software version management policy in the technical file.

## AI/ML-enabled devices

The SFDA is developing its approach to AI and machine learning-enabled medical devices, broadly following IMDRF and international regulatory guidance. Key considerations include:
- The basis of the algorithm's intended purpose and risk classification
- Algorithm validation and performance testing
- Transparency and explainability requirements
- Predetermined Change Control Plans (PCCPs) for adaptive algorithms

→ [AI/ML-Enabled Devices](../digital-health/ai-ml-guidance)

## Further reading

- MDS-REQ 1 — Classification rules applied to software
- IMDRF SaMD guidance documents
- [Digital Health & SaMD Overview](../digital-health/samd-overview)
- [Borderline & Combination Products](./borderline-products)

Submission Timeline and Pathways

The SFDA reviews SaMD applications through the standard MDMA pathway via GHAD. Standard review timelines typically range from 3–12 months depending on device complexity and classification. No expedited or accelerated pathways are currently available for SaMD. Manufacturers should budget for substantive pre-market review, particularly for Class C and D devices.

