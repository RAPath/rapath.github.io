---
title: SaMD and digital health
sidebar_position: 1
description: Software as a Medical Device in New Zealand — how Medsafe currently approaches SaMD, AI/ML-based software, classification, and what the Medical Products Bill will change.
---

# Software as a Medical Device (SaMD) and digital health

## Current NZ position

New Zealand does **not yet have a dedicated regulatory framework** for Software as a Medical Device. The Medicines Act 1981 was enacted decades before modern health software existed. However, Medsafe applies the existing device definition and classification rules to software, referencing IMDRF guidance.

---

## Is your software a medical device?

Apply the same test as for any other device — is the software intended by its manufacturer to be used for a medical purpose (diagnosis, monitoring, treatment, alleviation of disease, etc.)? The IMDRF definition of SaMD is the reference Medsafe uses:

> Software intended to be used for one or more medical purposes that perform these purposes without being part of a hardware medical device.

**Examples that are likely medical devices:**
- Diagnostic software that analyses ECG traces to detect arrhythmias
- AI software that screens mammography images for cancer
- Apps that analyse patient-reported symptoms to suggest diagnoses
- Software that monitors chronic conditions and adjusts medication recommendations

**Examples that are generally not medical devices:**
- Electronic health record (EHR) systems
- General administrative software for clinics
- General wellness and fitness trackers
- Apps that provide general health information without diagnostic function

---

## Classification of SaMD

Under Schedule 2, **Rule 11** is the primary classification rule for software:

- Software intended to provide information used for decisions with **diagnosis or therapy** purposes is at minimum **Class IIa**
- Software where failure could result in **death or irreversible deterioration** of health is **Class IIb or III**

The IMDRF SaMD Framework (which groups SaMD by state of healthcare situation × significance of information provided) provides a useful cross-check against NZ classification, though Medsafe has not formally adopted the IMDRF tiered framework.

---

## AI and ML-based software

AI/ML-based software is treated the same as other SaMD for classification purposes under the current framework. The key questions are:
- What is the intended purpose?
- What are the consequences if the software fails or provides incorrect output?
- Is it intended to be used as a standalone diagnostic or therapeutic tool?

Software that uses AI for general-purpose purposes (e.g., scheduling, administrative efficiency) is not a medical device. Software that uses AI to detect disease, guide treatment, or monitor patient health is likely to be.

---

## Medical Products Bill — SaMD provisions

The upcoming **Medical Products Bill** will for the first time explicitly regulate SaMD in New Zealand. Cabinet agreed (with the effective date to be confirmed) that:

- The Bill will regulate SaMD (including AI used for a therapeutic purpose)
- The SaMD definition will be **internationally aligned** (IMDRF-based)
- **General clinical software** and **general-use AI** will be excluded
- The Bill will include measures for **timely approval of novel and innovative products**, including flexible pathways for AI

This will significantly change how software developers must approach the NZ market once the Bill is enacted.

---

## mHealth and wearables

Mobile health apps and consumer wearables sit on the device/non-device borderline. A fitness tracker that records general activity is not a device. The same hardware running clinical-grade cardiac monitoring software intended for diagnosis may be. Always assess based on the specific intended purpose claimed by the manufacturer.

---

:::tip Borderline software products
Use Medsafe's categorisation service (devices@health.govt.nz) to get an advisory opinion on whether your software is a medical device in New Zealand before investing in WAND notification or technical documentation.
:::

Until the Bill is enacted, SaMD classification and notification follow the existing Medicines Act 1981 framework and Schedule 2 classification rules. Once the Bill comes into effect, a dedicated SaMD regulatory pathway will apply — manufacturers should monitor Medsafe's guidance for implementation timelines and transitional arrangements.
