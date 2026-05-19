---
title: AI/ML-Enabled Devices
sidebar_position: 3
description: SFDA's current approach to AI and machine learning-enabled medical devices — classification, technical file requirements, and Predetermined Change Control Plans.
---

# AI/ML-Enabled Medical Devices

## SFDA approach to AI/ML devices

The SFDA regulates AI and machine learning-enabled medical devices under the existing **Medical Devices Law** and **MDS-REQ 1** framework. There is no separate AI-specific regulation (unlike the EU AI Act), but the SFDA follows IMDRF and international guidance on AI/ML SaMD.

## Classification of AI/ML devices

Classification follows the standard SFDA rules, based on:
- The intended purpose of the AI function (diagnostic, therapeutic, monitoring)
- Seriousness of the condition the device addresses
- Whether the output drives independent clinical decisions or is reviewed by a clinician

High-risk AI/ML devices (e.g. autonomous diagnostic systems for life-threatening conditions) are likely Class C or D and require the most comprehensive technical files.

## Technical file requirements for AI/ML devices

In addition to standard SaMD requirements, AI/ML devices should address in the technical file:
- **Algorithm description** — training data, model architecture, intended population
- **Validation and verification** — test dataset performance, generalisability across populations
- **Transparency and explainability** — how clinicians can interpret model outputs
- **Bias and fairness assessment** — performance across demographic subgroups
- **Cybersecurity risk** — specific to AI model integrity and adversarial attacks
- **Version and change management** — how algorithm updates are controlled

## Predetermined Change Control Plans (PCCPs)

For **adaptive AI/ML algorithms** (those that learn or update after deployment), the SFDA is expected to align with IMDRF guidance on **Predetermined Change Control Plans (PCCPs)** — pre-agreed protocols describing the types of changes the algorithm may undergo without requiring a new MDMA submission. This is an emerging area and manufacturers should monitor SFDA guidance updates.

## Further reading

- [SaMD Overview](./samd-overview)
- [SFDA Digital Health Framework](./sfda-digital-health)
- [Software & SaMD Classification](../device-classification/software-samd-classification)
