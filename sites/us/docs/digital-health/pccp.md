---
sidebar_position: 5
title: Predetermined Change Control Plans (PCCP)
description: FDA's PCCP framework for AI/ML-based SaMD — what a PCCP is, what it must contain, which submission types accept PCCPs, and how it enables post-deployment algorithm updates without new 510(k)s.
keywords: [PCCP, predetermined change control plan, AI ML SaMD changes, algorithm change protocol, FDA PCCP guidance]
---

# Predetermined Change Control Plans (PCCP)

## What is a PCCP?

A **Predetermined Change Control Plan (PCCP)** is a plan submitted as part of a premarket submission (510(k), De Novo, or PMA) that:

1. **Describes the types of modifications** the manufacturer anticipates making to the device
2. **Specifies the algorithm change protocol** — the methods that will be used to implement and validate each type of change
3. **Describes the performance monitoring** that will detect when changes are needed and verify that implemented changes perform as expected

A device with an **approved/cleared PCCP** can implement pre-specified modifications **without submitting a new 510(k)** for each change — as long as the modifications stay within the bounds of the approved plan.

---

## Why PCCPs matter for AI/ML

Traditional medical devices are static after clearance/approval. AI/ML-based SaMD, however:
- Learns from new data and can change its outputs over time ("adaptive AI")
- May need algorithm retraining to maintain performance as data distributions shift
- Benefits from incorporating new clinical evidence as it emerges

Without a PCCP, every meaningful algorithm update would require a new 510(k) — making adaptive AI impractical. PCCPs solve this.

---

## PCCP submission types

PCCPs can be included in:
- **510(k)** submissions (most common for Class II AI/ML SaMD)
- **De Novo** requests
- **PMA** applications (and PMA supplements)

---

## Required PCCP content (per 2024 FDA guidance)

### 1. Description of Modifications

Clearly describe the **types of modifications** anticipated:
- Inputs to the algorithm (new data types, expanded patient populations)
- Outputs (new predictions, risk scores, confidence levels)
- Performance specifications (new performance thresholds)
- Algorithm architecture or training methodology

### 2. Algorithm Change Protocol (ACP)

For each type of modification, describe:
- **Data management practices** — training and test dataset requirements, data quality, representativeness
- **Re-training practices** — frequency, methods, validation approach
- **Performance evaluation protocol** — metrics, reference standards, acceptance criteria
- **Transparency and documentation** — what records are maintained

### 3. Impact Assessment

A pre-specified method to assess whether a contemplated modification:
- Falls within the scope of the PCCP
- Requires a new premarket submission (if it exceeds PCCP scope)

---

## What a PCCP does NOT cover

A PCCP does not authorise:
- Changes to the device's **intended use** (new indications always require a new submission)
- Changes that exceed the scope described in the approved PCCP
- Changes that raise new questions of safety or effectiveness not addressed in the PCCP

---

## Official resources
- [FDA — PCCP Guidance (2024)](https://www.fda.gov/media/166704/download)
- [FD&C Act § 515C — PCCP statutory basis](https://www.law.cornell.edu/uscode/text/21/360e-4)
- [FDA — AI/ML-Enabled Devices](https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-and-machine-learning-aiml-enabled-medical-devices)

If an implemented modification results in unexpected performance degradation, safety signals, or adverse events, the manufacturer must immediately notify FDA and may be required to submit a new premarket submission or seek modification of the approved PCCP. Failure to report performance issues discovered during real-world use can trigger FDA enforcement action.
