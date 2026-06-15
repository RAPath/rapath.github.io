---
title: "AI/ML Medical Device Guidance"
description: "Summary of MFDS AI/ML guidance requirements for medical device applications."
sidebar_position: 3
---

Korea has been at the forefront of **AI/ML medical device regulation**, with MFDS issuing initial guidance in 2017 and updated guidance in 2021 and 2024.

## Core requirements (2024 guidance)

### Pre-market requirements

| Requirement | Details |
|---|---|
| Algorithm description | Full description of the model architecture, training methodology |
| Training data | Characteristics, size, representativeness, labelling quality |
| Validation data | Independent test dataset; performance metrics (sensitivity, specificity, AUC, etc.) |
| Clinical validation | Real-world performance in the intended use population |
| Explainability | Explainability and interpretability: For Grade III–IV AI/ML devices, manufacturers must provide documentation explaining how the model makes diagnostic or treatment decisions, suitable for review by clinicians and regulators. This may include feature importance analysis, decision rules, or other interpretability techniques proportionate to the model's complexity. |
| Intended use statement | Precise statement of what the AI is intended to do and in which setting |

### Post-market requirements

| Requirement | Details |
|---|---|
| Performance monitoring plan | Ongoing monitoring of real-world AI performance |
| Drift detection | Monitoring for algorithm performance degradation over time |
| Re-validation trigger | Define when re-validation is required (performance threshold breach) |
| Reporting | Integrate AI performance data into PMS and periodic safety reports |

## Predetermined Change Control Plan (PCCP)

MFDS has developed or is finalizing PCCP guidance allowing manufacturers to pre-define the scope of future algorithm changes that do not require a new 품목허가 submission. [Note: Verify current status as of 2024 to confirm whether this is still 'developing' or has been released]

## Related pages
- [AI/ML-based medical devices](../pre-market/special-device-types/ai-ml-medical-devices) · [MFDS digital health framework](./mfds-digital-health-framework)

Risk-based explainability requirement: MFDS requires explainability documentation proportionate to the device's risk classification and intended use. For Grade III–IV AI/ML devices or those used in high-stakes clinical decisions (e.g., cancer diagnosis), full model explainability with interpretability techniques is mandatory. Lower-risk Grade I–II applications may satisfy requirements through performance metrics documentation and general algorithm description instead of detailed model architecture explanation.

Risk-based explainability: MFDS requires explainability documentation proportionate to the device's risk classification. For Grade III–IV AI/ML devices or those used in high-stakes clinical decisions (e.g., cancer diagnosis), full model explainability is mandatory. Lower-risk applications may require performance metrics documentation instead of detailed model architecture explanation.
