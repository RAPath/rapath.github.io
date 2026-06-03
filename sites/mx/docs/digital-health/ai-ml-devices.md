---
title: AI/ML Devices
sidebar_position: 2
description: Regulatory considerations for artificial intelligence and machine learning-based medical devices in Mexico under the evolving COFEPRIS framework.
---

# AI/ML Devices

**Artificial intelligence (AI) and machine learning (ML)** based medical devices represent one of the fastest-growing and most complex areas of medical device regulation globally. In Mexico, COFEPRIS is beginning to address AI/ML devices within its evolving **SaMD framework**, drawing on IMDRF and FDA guidance.

## How AI/ML devices are currently regulated in Mexico

There is no dedicated AI/ML device regulation in Mexico as of early 2026. AI/ML devices are regulated as **software as a medical device (SaMD)** where they meet the general medical device definition. COFEPRIS applies the standard three-class risk framework.

Key classification considerations for AI/ML devices:

- **What does the AI/ML software do?** Diagnosis, treatment recommendation, monitoring, or administrative function?
- **How significant is its output** in the clinical decision pathway?
- **What is the state of the patient** if the AI/ML output is wrong?

High-risk AI/ML devices (e.g., autonomous diagnostic AI for serious conditions) are likely Class III. Lower-risk clinical decision support with physician override may be Class I or II.

## Predetermined Change Control Plans (PCCPs)

One of the key challenges with AI/ML devices is **continuous learning** — algorithms that evolve after market deployment. The FDA has developed a **Predetermined Change Control Plan (PCCP)** framework for this. COFEPRIS has not yet published equivalent an PCCP framework specific to AI/ML devices, or continuously learning but manufacturers with adaptive AI/ML devices should:

- Document planned algorithm changes and their anticipated impact on safety and performance.
- Assess whether post-deployment changes require a modification application to COFEPRIS.
- Monitor COFEPRIS publications for emerging AI/ML guidance.

## Clinical evidence for AI/ML devices

AI/ML devices require clinical validation demonstrating the algorithm performs as intended for the specific intended use and patient population:

- Algorithm training and validation datasets should be described.
- Performance metrics (sensitivity, specificity, AUC) should be provided.
- Subgroup performance (sex, age, ethnicity) should be addressed where relevant.
- Real-world performance monitoring post-deployment is expected.

## Equivalency route for AI/ML devices

If an AI/ML device has FDA 510(k)/De Novo/PMA clearance or CE Mark under EU MDR, the **equivalency route** may apply, potentially with a 30-working-day review. The device must be **identical** to the approved version — which for adaptive AI/ML devices may create complexity if the algorithm has evolved since the foreign approval.

## Related pages

- [SaMD in Mexico — overview](samd-overview)
- [Software & SaMD classification](../device-classification/software-samd-classification)
- [Equivalency Route](../premarket/equivalency-route)
- [IMDRF membership](../international/imdrf-membership)

Manufacturers of AI/ML devices should establish a plan for monitoring real-world performance post-deployment. This includes tracking algorithm accuracy, identifying subgroup performance issues, and reporting significant deviations to COFEPRIS via the technovigilance system (NOM-240). For adaptive AI/ML systems, document how model retraining is governed and whether retraining triggers a modification application.
