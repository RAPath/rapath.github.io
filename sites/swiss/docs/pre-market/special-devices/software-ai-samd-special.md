---
sidebar_position: 7
description: Software as a Medical Device and AI/ML devices in Switzerland — qualification, classification, IEC 62304, lifecycle management, and Swissmedic expectations.
---
# Software & AI as Medical Device

## Overview
This page covers advanced considerations for software medical devices and AI/ML-based devices. For foundational qualification and IEC 62304 requirements, see [Software as a Medical Device](../gspr/software-samd) and [Cybersecurity](../gspr/cybersecurity).

## AI/ML Device Lifecycle Considerations
AI/ML-based medical devices in Switzerland present unique regulatory challenges because the algorithm may continue to learn, be updated, or adapt post-market. These changes must be managed through a Predetermined Change Control Plan (PCCP) to avoid triggering new conformity assessments for routine updates.
- **Predetermined Change Control Plan (PCCP)** — describes planned algorithm changes and the associated risk management and performance monitoring framework; reduces the need for new conformity assessment for every update
- **Algorithm transparency** — training data sources, data preprocessing, model architecture, and validation methodology must be documented in technical documentation
- **Performance monitoring post-market** — real-world performance monitoring is integral to the PMS plan for AI/ML devices; distribution shift and model drift must be detected and managed

## Swissmedic Expectations
Swissmedic aligns with MDCG guidance and is monitoring the EU AI Act's implications for high-risk AI systems. For AI/ML medical devices, Swissmedic expects: comprehensive intended use and intended user specification; full documentation of the training/validation/test data split; an ongoing performance monitoring plan integrated with PMS.


Clinical Evaluation for AI/ML Devices

AI/ML-based medical devices require a robust clinical evaluation that demonstrates safety and performance in real-world conditions. The clinical evaluation plan must address: validation of the algorithm's clinical utility; evaluation of performance across different patient populations and data scenarios; assessment of potential failure modes and their clinical consequences; post-market surveillance plan to detect performance degradation or unexpected clinical outcomes.

## Related Pages
- [Software as a Medical Device (SaMD)](../gspr/software-samd)
- [Cybersecurity Requirements](../gspr/cybersecurity)


:::warning Disclaimer
AI-assisted content for navigation only. Always verify against official [Swissmedic](https://www.swissmedic.ch) and [Fedlex](https://www.fedlex.admin.ch) sources. Not legal or regulatory advice.
:::

Regulatory Basis

AI/ML-based medical devices in Switzerland must comply with MedDO and IEC 62304 (Medical device software lifecycle processes). The Predetermined Change Control Plan (PCCP) is a critical component of the technical documentation for devices with planned post-market algorithm updates and must be validated by the Notified Body as part of the conformity assessment.
