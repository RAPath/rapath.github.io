---
title: "SaMD — MFDS Policy"
description: "MFDS regulatory policy for Software as a Medical Device (SaMD) in Korea."
sidebar_position: 1
---

MFDS has developed a comprehensive SaMD framework aligned with the IMDRF SaMD N10, N12, and N23 documents.

## Classification

SaMD grade determined by:
1. **Significance of information** provided (critical → serious → non-serious)
2. **Healthcare situation** (critical → serious → non-serious)

## Not regulated

- Administrative software (EHR scheduling, billing)
- General wellness apps with no medical purpose
- Simple communication tools

## Predetermined Change Control Plan (PCCP)

MFDS is developing PCCP guidance for AI/ML SaMD — allowing manufacturers to pre-define future algorithm changes that do not require a new submission.

## Related pages
- [AI/ML medical devices](./ai-ml-medical-devices) · [MFDS digital health framework](../../digital-health-samd/mfds-digital-health-framework)

Classification matrix
​
SaMD grade is determined by combining two dimensions:
​
• Significance of information: critical (treatment/diagnosis decisions) → serious (patient safety impacts) → non-serious (supportive information)
• Healthcare situation: critical (life-threatening) → serious (serious illness) → non-serious (routine care)
​
Critical/critical combinations typically result in Grade III or IV; serious/serious in Grade II or III; non-serious/non-serious in Grade I or exempt.

AI/ML SaMD examples
​
Example use cases for PCCP:
• Diagnostic imaging algorithms: pre-defined algorithm retraining based on validation datasets
• Patient monitoring apps: predetermined updates to risk stratification models
• Clinical decision support: pre-approved modifications to evidence-based scoring systems
​
PCCP is not applicable to fundamental algorithm changes in mechanism of action, new intended uses, or expansion to new patient populations, which require new submissions.
