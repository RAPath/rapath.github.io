---
id: chapter-ii-design-construction
title: Chapter II — Design & construction
sidebar_label: Chapter II · Design & construction
sidebar_position: 3
tags: [mdr, ivdr, gspr, annex-i, design]
---

# GSPR Chapter II — Requirements regarding design and manufacture

:::note Regulatory basis
**MDR 2017/745, Annex I, Chapter II** (GSPR 6–22) and equivalent provisions in **IVDR 2017/746, Annex I, Chapter II**. These are specific technical requirements for how devices must be designed and manufactured.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Overview

Chapter II translates the general principles of Chapter I into specific technical requirements. The applicable GSPR will vary significantly by device type — a passive wound dressing has far fewer applicable Chapter II requirements than an active implantable device.

---

## GSPR 6 — Chemical, physical, and biological properties

Devices must be designed and manufactured such that:
- The choice of materials considers **toxicity, biocompatibility**, and suitability for function
- Materials are compatible with **biological tissues, cells, and body fluids** they contact
- **Leachables and extractables** are minimised and within acceptable limits
- **Nanomaterials** are specifically addressed where used

The key harmonised standard is the **EN ISO 10993 series** (Biological evaluation of medical devices), which includes:
- ISO 10993-1: Evaluation and testing within a risk management process
- ISO 10993-3: Tests for genotoxicity
- ISO 10993-5: Tests for in vitro cytotoxicity
- ISO 10993-10: Tests for skin sensitisation
- ISO 10993-12: Sample preparation and reference materials

For devices with medicinal substance components, additional pharmaceutical standards apply.

---

## GSPR 7 — Infection and microbial contamination

Devices and their manufacturing processes must be designed to:
- **Reduce the risk of infection** to the patient, user, and third parties
- Facilitate **handling of contaminated devices** safely (e.g. sharps)
- Clearly state the **intended microbial state** (sterile, clean, or unspecified)

For **sterile devices**:
- Must be manufactured and sterilised by an appropriate validated method
- The validated sterility assurance level (SAL) must be ≤ 10⁻⁶ for implantable devices
- Packaging must maintain sterility until point of use

Key standards: EN ISO 11135 (sterilisation by EtO), EN ISO 11137 (radiation sterilisation), EN ISO 17665 (steam sterilisation), EN ISO 11607 (sterile packaging).

---

## GSPR 8 — Devices incorporating a medicinal substance

Where a device incorporates a medicinal substance (drug-device combination under MDR Rule 14):
- The **safety, quality, and usefulness** of the incorporated substance must be verified
- A **consultation** with EMA or a national medicines authority is required as part of notified body assessment
- The substance must comply with applicable pharmaceutical requirements

See [Devices incorporating a medicinal substance](/pre-market/special-device-types/devices-incorporating-medicine) for full detail.

---

## GSPR 9 — Devices with human/animal tissues

Where a device incorporates non-viable tissues or cells of human or animal origin:
- **Viral inactivation** and **TSE risk reduction** must be demonstrated
- For animal-derived materials: species, source, and processing must be justified
- Specific standards apply: **EN ISO 22442 series** (use of animal tissues in medical devices), **Ph. Eur. chapter 5.2.8** (minimising TSE risk)

See [Devices with human/animal tissues](/pre-market/special-device-types/devices-human-animal-tissues).

---

## GSPR 10 — CMR substances and endocrine disruptors

Devices must not incorporate **carcinogenic, mutagenic, or reprotoxic (CMR)** substances (categories 1A or 1B per Regulation (EC) 1272/2008) or **endocrine disrupting substances** unless:
- Their presence is technically unavoidable, and
- The manufacturer justifies that patient/user risk is acceptable, and
- No suitable alternatives exist

MDCG 2020-10 provides guidance on this requirement. Specific restrictions apply to phthalates, BPA, and other substances in devices contacting patients.

---

## GSPR 11 — Interaction with the environment

Devices must be designed to minimise risks from:
- **Electromagnetic interference** (both susceptibility and emission)
- **Environmental conditions** (temperature, pressure, humidity) affecting performance
- Compatibility with other devices or equipment used in combination

---

## GSPR 12 — Devices with a measuring function

Where a device incorporates a measuring function (clinical relevance):
- Must be designed to provide **sufficient accuracy, precision, and stability**
- Measurement uncertainty must be **clearly stated** in the IFU
- Calibration and traceability to **SI units** (or appropriate reference standards) must be established
- Verification and calibration intervals must be specified

---

## GSPR 13 — Protection against radiation

Devices that emit radiation (ionising or non-ionising) intended for diagnostic or therapeutic purposes:
- Must emit **only radiation necessary** for the intended purpose
- Exposure must be **measurable and controllable**
- Protection from stray radiation for patients, users, and third parties
- Compliance with applicable radiation protection legislation

For ionising radiation devices: specific requirements on dose display, dose reduction features, and protection modes.

---

## GSPR 14 — Active devices: energy sources

Devices that depend on an external energy source must:
- Continue to function **safely during power failure** where a sudden stop would be dangerous
- Indicate when power is insufficient to maintain safe operation
- Be protected against foreseeable interference with power supplies

---

## GSPR 15 & 16 — Mechanical and thermal risks

Devices must be designed to reduce risk from:
- **Mechanical hazards**: fracture, sharp edges, moving parts, vibration, noise
- **Thermal hazards**: burns from contact with hot surfaces or inappropriate temperature output
- Risks must be addressed within the risk management process under EN ISO 14971

---

## GSPR 17 — Devices for self-testing or near-patient testing

Where devices are intended for use by lay persons (self-test) or near-patient settings:
- Designed to be **as simple as possible** to use correctly
- Instructions must be **clear and understandable** for the intended user (including those with no medical training)
- Results must be **interpretable** by the intended user
- Risk of **incorrect use must be minimised** through design (error detection, clear interfaces)
- Usability studies are required — typically following **IEC 62366-1** (Usability engineering)

---

## GSPR 18 — Electromagnetic compatibility (EMC)

Devices must be designed and manufactured to:
- Achieve adequate **immunity** to electromagnetic disturbance
- Limit **electromagnetic emission** to not interfere with other equipment or infrastructure
- Be safe in the electromagnetic environment in which they are intended to operate

Key standard: **EN 60601-1-2** (Electromagnetic disturbance requirements for medical electrical equipment).

---

## GSPR 19–22 — Active and implantable devices

Higher-level requirements for:
- Protection against risks from **connected or networked devices** (interoperability)
- **Implantable device** specific requirements including battery life, fixation, and degradation
- **Software requirements** (covered separately in GSPR 17 for software-as-device)
- **Active implantable device** specific requirements for longevity and in-situ function

---

## Documenting Chapter II compliance

In the technical documentation's **GSPR cross-reference table**, each applicable Chapter II GSPR must be linked to:

1. The **harmonised standard, CS, or other solution** used
2. The **evidence of compliance** (test reports, analysis, calculations)
3. Any **deviations** from harmonised standards and their justification

---

## Related pages

- [GSPR overview — Annex I](./gspr-overview)
- [Chapter I — General requirements](./chapter-i-general-requirements)
- [Chapter III — IFU & labelling](./chapter-iii-ifu-labelling)
- [GSPR checklist](./gspr-checklist)
- [Risk management](/pre-market/technical-documentation/risk-management)
- [Technical documentation — GSPR cross-reference](/pre-market/technical-documentation/gspr-cross-reference)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex I, Chapter II | GSPR 6–22 full text |
| EN ISO 14971:2019 | Risk management |
| EN ISO 10993-1:2018 | Biological evaluation |
| EN 60601-1:2006+A1:2013 | Medical electrical equipment |
| IEC 62366-1:2015+A1:2020 | Usability engineering |
| EN 62304:2006+A1:2015 | Software lifecycle |
| MDCG 2020-10 | CMR and endocrine disruptors guidance |

The page content cuts off at 'Environmental conditions (temperatu...' and needs to be completed with the full text of GSPR 11 and all subsequent GSPR (12-22) requirements including measuring functions, radiation protection, energy sources, mechanical risks, self-testing, EMC, implantable devices, and software requirements.
