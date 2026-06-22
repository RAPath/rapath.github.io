---
sidebar_position: 2
title: AI/ML-Based Devices
description: Regulatory considerations for artificial intelligence and machine learning medical devices in Vietnam.
---

# AI/ML-Based Medical Devices

Artificial intelligence (AI) and machine learning (ML) technologies are increasingly embedded in medical devices — from diagnostic imaging algorithms to predictive monitoring systems. Vietnam does not yet have a dedicated regulatory framework for AI/ML devices, but the general Decree 98/2021 framework applies, and DAV is monitoring international developments closely.

## Current regulatory position

There is no separate AI/ML-specific pathway in Vietnam. AI/ML-based medical devices are regulated under the standard framework:
- If the AI/ML software meets the medical device definition → it is regulated as Software as a Medical Device (SaMD) and follows the standard classification and market access pathways.
- Classification follows the standard Type A–D risk-based approach
- Market access requires Declaration or Marketing Authorisation depending on class

The **IMDRF SaMD framework** — which Vietnam references — applies to AI/ML SaMD in the same way as other software-based devices.

## Key regulatory considerations for AI/ML devices

### Algorithm transparency and documentation

The registration dossier for an AI/ML device should include:
- A clear description of the AI/ML model — what it does, how it was trained, and its intended clinical application
- The training and validation dataset characteristics (size, population, labelling methodology)
- Performance metrics on the validation dataset (sensitivity, specificity, AUC, etc.) with confidence intervals
- Sub-group analyses to identify performance variability across patient populations

### Intended use boundaries

The intended use statement must define:
- The specific clinical task (e.g. "detection of diabetic retinopathy from fundus photographs")
- The target patient population and clinical setting
- The intended user (clinician, radiologist, patient)
- Whether the output is intended to **inform** clinical decisions (lower risk) or **drive/replace** clinical decisions (higher risk — likely Type C or D)

### Explainability

For high-risk AI/ML devices (Type C/D), DAV expects documentation of how clinicians can understand, validate, and appropriately trust or distrust the AI output. Explainability approaches vary by application and may include: saliency maps or feature importance visualisations for imaging AI; confidence or uncertainty scores; decision trees or rule-based explanations where applicable; and user interface design that makes model limitations transparent. The level of explainability required is proportionate to the device's clinical risk and the extent to which the output directly drives clinical decisions.

### Continuous learning / adaptive AI

AI/ML algorithms that continue to learn and update their model after deployment (adaptive algorithms) pose particular regulatory challenges:
- If the algorithm can change in a way that affects clinical performance without a software update → this requires a **Predetermined Change Control Plan** approach
- Vietnam does not yet have a formal PCCP framework, but documenting planned adaptation boundaries and revalidation thresholds in the dossier is good practice and aligns with international expectations

### Cybersecurity

AI/ML devices connected to hospital networks or cloud processing raise specific cybersecurity considerations. See [Cybersecurity](cybersecurity-connected).

## International reference frameworks

While Vietnam has not formally adopted them, the following international frameworks are the most relevant references for preparing AI/ML device dossiers for Vietnam:
- **IMDRF N12/N23/N41** — SaMD definition, risk categorisation, and clinical evaluation framework
- **FDA AI/ML Action Plan** — practical approach to adaptive algorithms and PCCP
- **EU MDR + MDCG 2021-6** — AI/ML in the context of CE marking; clinical evaluation requirements

Using these frameworks to structure your technical documentation demonstrates regulatory maturity and is consistent with DAV's developing approach.

:::tip Engage DAV early for novel AI/ML devices
For genuinely novel AI/ML applications — particularly those that drive clinical decisions in high-risk settings — consider seeking a pre-submission meeting or written opinion from DAV before investing in a full dossier. This is becoming standard practice in more mature regulatory markets and is advisable in Vietnam for complex cases.
:::

