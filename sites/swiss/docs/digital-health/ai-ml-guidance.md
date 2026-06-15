---
sidebar_position: 3
description: AI/ML medical device regulatory guidance in Switzerland — Swissmedic's expectations, algorithm lifecycle management, predetermined change control plans, and MDCG 2020-1 applicability.
keywords: [AI ML medical device, algorithm, machine learning, MedDO, Switzerland, Swissmedic, MDCG 2020-1]
---
# AI/ML Medical Device Guidance

## Overview
Artificial intelligence (AI) and machine learning (ML)-based medical devices are regulated as medical devices in Switzerland where they meet the MedDO intended purpose criteria. Switzerland follows EU MDR/IVDR and MDCG guidance (particularly MDCG 2020-1) for AI/ML medical devices, with no separate Swiss AI/ML regulatory framework.

## AI/ML Device Qualification
An AI/ML system is regulated as a medical device if its output is intended to drive clinical decisions (diagnosis, treatment planning, patient monitoring). An AI/ML system used purely for administrative or operational purposes (e.g. scheduling, billing optimisation) is not a medical device. The qualification analysis follows the same MDCG 2019-11 framework as other SaMD.

## AI/ML-Specific Technical Documentation Requirements

**Training data documentation**
The technical documentation must include: description of the datasets used for training, validation, and testing; data preprocessing steps; demographic and clinical representativeness of the training data; data quality assurance measures.

**Model description and performance**
Required: model architecture; performance metrics on the test dataset; performance stratified by relevant subgroups (where applicable); statistical uncertainty in performance estimates.

**Algorithm change management**
AI/ML algorithms may change over time (learning, retraining, updates). The technical documentation must address: how algorithm changes are managed and validated before deployment; what constitutes a "significant change" requiring new conformity assessment; how performance drift is detected and managed post-market.

**Predetermined Change Control Plan (PCCP)**
A PCCP describes the types of algorithm changes the manufacturer anticipates post-market and the associated evidence standards that will be applied before implementing those changes. A well-developed PCCP can reduce the regulatory burden of iterative algorithm improvements by pre-agreeing the change management framework with the NB.

## Post-Market Performance Monitoring
AI/ML devices require specific post-market performance monitoring:
- Real-world performance metrics collected from deployed systems
- Monitoring for performance drift (degradation of algorithm performance over time due to population or data distribution shifts)
- Processes for detecting and responding to unexpected algorithm outputs
- Regular comparison of real-world performance against performance claims in the technical documentation

## EU AI Act Implications
The EU AI Act (entered into force August 2024) classifies high-risk AI systems, including AI used as or in medical devices. While the EU AI Act applies directly only within the EU, Swiss manufacturers or manufacturers accessing both EU and Swiss markets must consider EU AI Act compliance for medical device AI systems. Swissmedic is monitoring EU AI Act implementation for potential alignment implications.


Add a new subsection under 'AI/ML-Specific Technical Documentation Requirements' titled:

**Algorithmic Transparency and Explainability**

The technical documentation should include: explanation of how the model produces its output (especially for high-risk applications such as diagnosis or patient stratification); limitations of the model's interpretability; any known failure modes or situations where the model is less reliable; documentation of how clinicians can understand and validate the model's recommendations; where applicable, methods to provide feature importance or decision reasoning to users.

## Official Sources
- [MDCG 2020-1 — AI and ML in medical devices](https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en)
- [Swissmedic — Digital health and SaMD](https://www.swissmedic.ch/swissmedic/en/home/medical-devices.html)
- [EU AI Act](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)

:::warning Disclaimer
AI-assisted navigation aid only. Always verify against official [Swissmedic](https://www.swissmedic.ch) and [Fedlex](https://www.fedlex.admin.ch) sources. Not legal or regulatory advice.
:::

## AI/ML-Specific Technical Documentation Requirements
