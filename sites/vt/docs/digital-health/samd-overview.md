---
sidebar_position: 1
title: Software & SaMD Overview
description: How Vietnam regulates Software as a Medical Device (SaMD) — DAV's approach, classification, and key obligations under Decree 98/2021.
---

# Software & SaMD Overview

Software as a Medical Device (SaMD) — software intended to be used for a medical purpose without being part of a hardware medical device — is regulated under Decree 98/2021/ND-CP when it meets the definition of a medical device.

## Is your software a medical device?

Software is a medical device in Vietnam if it meets the general device definition: it is intended by the manufacturer to be used on humans for a diagnostic, preventive, monitoring, or therapeutic purpose, and its principal action is not achieved by pharmacological, immunological, or metabolic means.

Examples of software likely regulated as medical devices:
- Software that analyses ECG data and outputs a clinical diagnosis
- AI-powered diagnostic imaging software (e.g. screening chest X-rays for abnormalities)
- Software that calculates drug dosing based on patient parameters
- Software that monitors vital signs and generates clinical alerts for ICU patients
- Glucose management software that adjusts insulin pump delivery

Examples of software generally NOT regulated as medical devices:
- Administrative hospital information systems (HIS/EMR) with no diagnostic/therapeutic function
- Generic communication tools (e.g. telehealth video platforms without clinical decision support)
- Software for general wellness and lifestyle (e.g. step counters, sleep trackers without medical claims)
- Software used solely for research or educational purposes

:::note
The boundary between SaMD and non-device software is context and claim-dependent. The manufacturer's intended purpose — as expressed in labelling and promotional materials — is the primary determinant.
:::

## SaMD classification

SaMD is classified under the same Type A–D framework as hardware devices, based on:
- The severity of condition the software is intended to diagnose or treat
- The significance of the output to clinical decision making (informing vs. driving a clinical decision)
- Whether the software drives or replaces clinical judgement

Vietnam is developing dedicated SaMD classification guidance aligned with the IMDRF SaMD framework (N12, N23, N41). Until formal Vietnamese guidance is published, manufacturers should apply the IMDRF risk categorisation framework to structure their classification rationale and consult DAV early (via written opinion or pre-submission meeting) for formal classification confirmation on novel or high-risk SaMD.

## Market access for SaMD

The market access pathway follows the standard type-based approach:
- Type A/B SaMD → Declaration (Công bố) via DMEC
- Type C/D SaMD → Marketing Authorisation (Đăng ký lưu hành) via DMEC

The technical dossier for SaMD registration should follow the CSDT structure with particular attention to:
- Software description and intended purpose
- Software lifecycle documentation (IEC 62304)
- Usability engineering (IEC 62366-1)
- Algorithm and AI/ML model description (where applicable)
- Cybersecurity documentation (see [Cybersecurity](cybersecurity-connected))
- Clinical performance validation

## Software updates and change control

A significant update to SaMD — particularly one that changes the intended purpose, alters the clinical algorithm, or introduces new safety-relevant features — may require a change notification or new registration. Apply your change control procedure and assess the regulatory impact before releasing any software update for a registered device.

→ See [Change Notification](../post-market/change-notification)

## Vietnam's National Digital Health Strategy

Vietnam's National Digital Health Strategy (Decision 749/QD-TTg, 2020) sets goals for widespread health digitisation. DAV and MOH are actively developing regulatory capacity to address the growing volume of digital health products entering the market. Expect SaMD guidance to continue evolving.

Add a new subsection: 'IMDRF SaMD Risk Categorisation Examples

Under the IMDRF framework (which DAV references), SaMD risk depends on:

• Type 1: SaMD intended to treat or prevent a serious condition, or provide an interpretation or recommendation without independent care judgment (higher risk)
• Type 2: SaMD for management of a serious condition with clinical decision support functionality
• Type 3: SaMD intended to support decision-making or provide recommendations
• Type 4: SaMD intended to record, display, or transmit patient data (lower risk)

For novel SaMD, DAV recommends consulting the IMDRF N12, N23, and N41 framework documents and seeking early engagement with DAV for classification confirmation.'
