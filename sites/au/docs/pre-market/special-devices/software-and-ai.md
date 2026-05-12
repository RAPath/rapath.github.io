---
title: Software & AI
description: Regulatory requirements for software as a medical device (SaMD) and AI-based medical devices in Australia, including the November 2024 changes.
sidebar_position: 2
last_reviewed: 2026-04-30
---

## Overview

Software is regulated as a medical device in Australia if it meets the definition in Section 41BD of the Therapeutic Goods Act 1989. This includes standalone software (apps, clinical decision support tools, AI diagnostic tools) and software that is integral to a hardware medical device. From 1 November 2024, all software that meets the medical device definition must be included in the ARTG or covered by a valid exemption.

---

## Is Your Software a Medical Device?

Software is a medical device if its intended purpose — as declared by the manufacturer through labelling, promotional materials, and technical documentation — falls within the medical device definition. Key questions:

- Is the software intended to be used for a medical purpose (diagnosis, monitoring, treatment, etc.)?
- Does it generate or process data for direct clinical decision-making?
- Is it intended for use in a clinical population rather than the general public for wellness purposes?

The TGA has published guidance for several categories of software that are **excluded** from regulation:

- Administrative software (patient scheduling, billing)
- Software for storing or transmitting medical images (without analysis)
- Consumer wellness apps (without specific medical claims)
- Certain clinical decision support software that only provides recommendations to clinicians without replacing clinical judgement

👉 [Software exclusion guidance — TGA](https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai)

---

## Software Classification

Software classification follows the active device rules in Schedule 2, Part 2, and is based on the potential severity of harm from an incorrect output:

| Severity of potential harm | Classification |
|---------------------------|----------------|
| Death or severe deterioration / high public health risk | Class III |
| Serious condition / moderate public health risk | Class IIb |
| Non-serious condition / no public health risk | Class IIa |

**One class lower** applies where the software only provides a recommendation to a health professional and does not replace clinical judgement.

---

## Artificial Intelligence (AI) and Machine Learning

AI and machine learning-based software that meets the medical device definition is subject to the same framework as other SaMD. Additional regulatory considerations include:

- **Adaptive algorithms** — AI that learns and changes over time may require additional post-market controls to ensure performance remains within validated parameters
- **Cybersecurity** — AI models may be vulnerable to adversarial inputs; cybersecurity planning is required under EP 12.1
- **Transparency and explainability** — clinical evidence should address the clinical validation of AI outputs, not just technical performance metrics
- **Post-market surveillance** — monitoring AI performance in real-world use is particularly important given the potential for performance drift

The TGA is aligned with the IMDRF guidance on AI/ML-based SaMD (IMDRF/SaMD WG/N23).

---

## Essential Principle 12.1 — Software Requirements

EP 12.1 requires that software-based medical devices be developed, validated, and maintained in accordance with the state of the art. This includes:

- Software lifecycle requirements (IEC 62304)
- Cybersecurity by design — unauthorised access prevention, data integrity, software update controls
- Usability and human factors (IEC 60601-1-6 / IEC 62366)
- Version control and change management
- Clear version and build number identification (EP 13B)

---

## Official Sources

- [Software and AI as medical devices — TGA](https://www.tga.gov.au/products/medical-devices/software-and-artificial-intelligence-ai)
- [Classifying active and software medical devices — TGA](https://www.tga.gov.au/resources/guidance/classifying-active-medical-devices-australia-including-software-based-medical-devices)
- [EP 12.1 — Complying with Essential Principles — TGA](https://www.tga.gov.au/resources/guidance/complying-essential-principles-safety-and-performance-medical-devices)

---

## Related Pages

- [Active & Software Devices (Classification)](../classification/active-and-software-devices)
- [Active Medical Devices](./active-medical-devices)
- [EP 12.1 Software](../essential-principles/ep-7-15-design-and-construction)
