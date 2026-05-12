---
sidebar_position: 3
description: Software as a Medical Device (SaMD) in Switzerland — qualification (MDCG 2019-11), classification, IEC 62304 lifecycle requirements, and AI/ML guidance under MedDO.
keywords: [SaMD, software medical device, IEC 62304, AI ML, MedDO, MDCG 2019-11, Switzerland]
---
# Software as a Medical Device (SaMD)

## Overview
Software is explicitly included in the MedDO definition. Standalone software intended for a medical purpose is regulated as a medical device in its own right. Qualification guidance **MDCG 2019-11** applies in Switzerland.

## Qualification — Does This Software Qualify as a Medical Device?
Key qualification tests (MDCG 2019-11):
- Does the software perform an action on data beyond storage/archival/communication/search? → Potentially a medical device
- Does its output drive clinical management or treatment decisions? → Likely a medical device
- Is its output solely for administrative purposes? → Generally not a medical device

## Classification of SaMD
Apply the 22 MedDO classification rules, especially Rule 11 and Rule 22. Software IVDs use IVDO Annex VIII Rule 7. Typical classes: Class I (low-risk information to professionals), IIa (medium-risk decision support), IIb (high-risk diagnostic decisions), III (life-critical closed-loop control).

## IEC 62304 — Software Lifecycle
MedDO Annex I § 17 requires software to be developed in accordance with the state of the art. **IEC 62304** defines software safety classes A/B/C and development, maintenance, and change management requirements for each class.

## AI and Machine Learning
Swissmedic follows MDCG guidance on AI/ML. Key points: AI/ML software with medical intended purpose is regulated as a medical device; training/validation datasets must be documented; algorithm updates may constitute significant changes requiring new conformity assessment.

## Official Sources
- [MDCG 2019-11 — Software qualification and classification](https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en)
- [MDCG 2020-1 — AI and ML in medical devices](https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en)

:::warning Disclaimer
AI-assisted content for navigation only. Always verify against official [Swissmedic](https://www.swissmedic.ch) and [Fedlex](https://www.fedlex.admin.ch) sources. Not legal or regulatory advice.
:::
