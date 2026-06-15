---
sidebar_position: 3
title: Design & construction requirements — ER 7–17
description: >
  The specific design and construction Essential Requirements in Section II of Schedule 1 of the
  UK Medical Devices Regulations 2002 — covering chemical and biological properties, infection
  control, measuring function, radiation, software, and labelling.
tags: [uk-mdr, essential-requirements, design, biocompatibility, pre-market]
---

:::note[Regulatory basis]
Section II Essential Requirements (ER 7–17 and ER 18 for labelling) are in **Schedule 1, Section II** of the UK MDR 2002. They apply in addition to the Section I general requirements where a device has the specific property or feature to which the requirement relates. Not all Section II ERs apply to every device.
:::

:::warning[Disclaimer]
This site provides general information only. Always consult the UK MDR 2002 Schedule 1 text and relevant technical standards.
:::

---

## How Section II requirements work

Section II ERs are **conditional** — each applies only if the device has the property or feature described. The manufacturer must determine which Section II requirements are applicable to their device, document this determination in the technical file, and provide evidence of conformity for all applicable requirements.

For requirements determined to be not applicable, the technical file should state why (e.g., "ER 9 — measuring function: not applicable — this device has no measuring function").

---

## ER 7 — Chemical, physical, and biological properties

ER 7 covers **biocompatibility and materials**. It applies to all devices that come into contact with the patient's body — directly or indirectly.

### Core requirements

- Devices must be designed and manufactured to reduce risks from chemical, physical, and biological hazards
- Materials must be selected for compatibility with biological tissues, cells, and body fluids — taking into account the device's intended purpose and any foreseeable misuse
- Devices must not release leachables or extractables at levels that would compromise safety
- Devices that contact the body must not be made from materials known to cause hypersensitivity or toxic reactions in the intended patient population

### Biocompatibility assessment — ISO 10993

Conformity with ER 7 for body-contacting devices is most commonly demonstrated through a **biological evaluation programme** following **ISO 10993-1:2018** (*Biological evaluation of medical devices — Part 1: Evaluation and testing within a risk management process*).

The ISO 10993-1 framework requires:

1. **Characterisation of materials** — chemical identity of all materials in contact with the body
2. **Risk-based endpoint selection** — which biocompatibility endpoints must be addressed (cytotoxicity, sensitisation, irritation, systemic toxicity, genotoxicity, implantation, haemocompatibility, etc.) based on contact type and duration
3. **Literature review** — existing data on the materials' biological safety
4. **Targeted testing** — only where existing data is insufficient
5. **Biological evaluation report** — summary of the assessment and conclusions

The contact type (surface, implant, blood/tissue contact) and duration (limited &lt;24h, prolonged 24h–30d, permanent >30d) determine which endpoints are relevant.

:::tip
ISO 10993-1:2018 explicitly discourages unnecessary animal testing and promotes a graded approach — manufacturers should exhaust literature and in vitro data before commissioning animal studies, and animal studies should only be performed where scientific gaps cannot be addressed through existing data.
:::

### Physicochemical properties

For devices where physical or chemical properties create risk (e.g., sharp edges, pH extremes, flammable materials, high temperatures), ER 7 also requires these to be addressed through design, materials selection, and testing.

---

## ER 8 — Infection and microbial contamination

ER 8 addresses **sterility, microbiological purity, and infection risk reduction**.

### Key requirements

- Devices and manufacturing processes must be designed to reduce the risk of infection to patients, users, and third parties
- For sterile devices: devices must be manufactured and sterilised by a validated sterilisation method; the packaging must maintain sterility until the point of use
- For tissue/cell-derived components: appropriate measures must be taken to minimise risks from viruses and transmissible agents

### Sterilisation validation

For devices placed on the market in a sterile condition, manufacturers must:

1. Validate the sterilisation process to achieve a **Sterility Assurance Level (SAL) of 10⁻⁶** (one in a million probability of a viable microorganism on any sterilised unit) using methods such as:
   - Ethylene oxide (EO) sterilisation → ISO 11135
   - Radiation sterilisation (gamma, e-beam) → ISO 11137
   - Steam (moist heat) sterilisation → ISO 11134 / EN 285
   - Dry heat sterilisation → ISO 20857
2. Validate that **packaging maintains sterility** until the expiry date (ISO 11607)
3. Demonstrate **bioburden monitoring** as part of ongoing production control (ISO 11737)

### Reprocessing

For devices intended to be reprocessed (cleaned, disinfected, re-sterilised between uses), the manufacturer must validate the reprocessing procedure and provide validated instructions in the IFU. See [Reprocessed single-use devices](../special-device-types/reprocessed-single-use-devices) and the Class Im sub-category for reusable surgical instruments.

---

## ER 9 — Measuring function

Applies to devices **intended to have a measuring function** (e.g., devices that measure physiological parameters and display or record the measured value).

### Requirements

- The device must be designed and manufactured in such a way that the degree of accuracy required by its intended purpose is maintained throughout the device's lifetime
- Accuracy must be expressed in terms of metrological units, with stated tolerances
- Where devices are to be calibrated, instructions for calibration (including frequency and method) must be included in the IFU

### Metrological traceability

Measurements should be traceable to national or international standards (where such standards exist). Calibration materials must themselves be traceable to certified reference materials.

Class I (measuring) devices require UKAB involvement for the measuring function aspects.

---

## ER 10 — Devices connected to or equipped with an energy source

Applies to **active devices** connected to a power supply or containing an internal energy source.

### Electrical safety

- Must be designed and manufactured in such a way that electrical hazards are minimised during normal use and in case of foreseeable failure
- Protection against electric shock (patient and operator) must be appropriate to the device type and use setting

The primary standard for electrical safety of medical devices is **IEC 60601-1** (*Medical electrical equipment — Part 1: General requirements for basic safety and essential performance*). Sub-part standards cover specific device types (e.g., IEC 60601-2-2 for surgical diathermy, IEC 60601-2-25 for ECG equipment).

### EMC (Electromagnetic Compatibility)

Active devices must not cause electromagnetic interference with other devices, and must themselves be immune to electromagnetic interference that could affect their performance. Demonstrated via **IEC 60601-1-2** (EMC standard for medical devices).

### Thermal and mechanical risks from energy

Devices must be designed to prevent dangerous accumulation of heat, fire, explosion risk, or mechanical failure resulting from their energy source.

---

## ER 11 — Protection against radiation

Applies to devices that **emit radiation** (ionising or non-ionising) as part of their intended function, or where unintended radiation emission is a risk.

### Requirements for intended radiation emission (diagnostic/therapeutic)

- The device must be designed to emit only the radiation necessary for its intended purpose
- Doses of ionising radiation must be appropriately controlled
- Controls must allow the operator to monitor and adjust radiation output
- Visual and/or auditory warnings must be provided

### Protection against unintended radiation

- Stray radiation must be minimised
- Electrical and electromagnetic interference that could affect the device's safety must be addressed (overlap with ER 10)

Key standards: IEC 60601-1-3 (radiation protection in X-ray equipment), IEC 60601-1-6 (usability), IEC 60601-2-43 (interventional X-ray).

---

## ER 12 — Requirements for medical devices incorporating software

Applies to **devices incorporating software** — both active devices with embedded software and standalone software as a medical device (SaMD).

### Requirements

- Software must be designed and developed to meet its intended purpose with a level of reliability appropriate for the risk level of the device
- Software must be developed under a defined software lifecycle process
- The software must be validated before release
- Repeatable and reliable performance must be achievable

### Software development standards

The primary standard for medical device software development is **IEC 62304** (*Medical device software — Software life cycle processes*). IEC 62304 defines three software safety classes (A, B, C) and the rigor of software lifecycle processes required for each.

For AI/ML-based software, see [Software & SaMD classification](../classification/software-samd-classification) and MHRA's AI change programme guidance.

---

## ER 13 — Self-testing and near-patient testing IVDs (IFU)

*Note: ER 13 in Schedule 1 relates to requirements for devices intended for self-testing and near-patient testing for Part I devices. For IVD-specific requirements, see [IVD Essential Requirements](./ivd-essential-requirements).*

---

## ER 14 — Requirements for active implantable devices

*Applies to active devices connecting to or containing implantable components.*

Active devices that connect to implanted leads or electrodes must meet specific requirements for electrical compatibility, protection against interference, and long-term material stability at the implant-device interface.

---

## ER 15 — Devices incorporating human blood or plasma derivatives

Devices incorporating, as an integral part, a substance derived from human blood or human plasma are subject to enhanced requirements, including:

- Validation of the purification and inactivation processes for blood-borne pathogens
- Traceability of the blood/plasma source
- UKAB consultation with MHRA regarding the blood/plasma derivative component (for Class III devices)

---

## ER 16 — Devices incorporating tissues of animal origin

Devices incorporating non-viable animal tissue or derivatives must demonstrate:

- Appropriate measures to minimise infectious risks (TSE, viral contamination)
- Appropriate species selection and tissue sourcing
- Validated inactivation or elimination procedures

Key standard: ISO 22442 series (*Medical devices utilising animal tissues and their derivatives*).

---

## ER 17 — Devices intended to administer medicines

Devices intended to administer medicines (e.g., drug delivery devices, infusion pumps, inhalers) must:

- Be compatible with the medicines intended to be administered through them
- Be designed to preserve the quality of the medicine
- Not cause degradation of the medicine through chemical interaction, adsorption, or leaching

The materials used in drug-contacting parts of the device (tubing, chamber, needle) must be validated against the specific medicines to be used with the device.

---

## ER 18 — Labelling and instructions for use

ER 18 specifies the **information to be supplied with every device** — on the label and in the IFU. This is one of the most detailed Essential Requirements in Schedule 1.

### Label requirements include:
- Name or trade name of the device
- Particulars strictly necessary for the user to identify the device and its contents
- The word "sterile" (for sterile devices)
- Batch code, lot number, or serial number
- Year of manufacture (for implantable devices)
- Manufacturer's name, address
- UKRP name and address (for devices placed on market by non-UK manufacturers)
- Any special storage and/or handling conditions
- Expiry date
- UKCA mark and UKAB identification number

### IFU requirements include:
- Manufacturer details and conditions of authorisation
- Device description and intended purpose
- Target patient population and user qualification requirements
- Contraindications, warnings, precautions
- Instructions for use
- Sterilisation or disinfection instructions (if applicable)
- Information on residual risks and side effects
- Storage and disposal instructions

Full labelling requirements are addressed in [Labelling requirements](../../post-market/labelling-advertising/labelling-requirements).

---

## Related pages

- [Essential Requirements — overview](./overview)
- [General requirements — ER 1–6](./general-requirements)
- [IVD Essential Requirements (Schedule 1A)](./ivd-essential-requirements)
- [ER checklist & compliance matrix](./checklist-compliance)
- [Software & SaMD classification](../classification/software-samd-classification)
- [Labelling requirements](../../post-market/labelling-advertising/labelling-requirements)

---

## Official references

| Reference | Description |
|---|---|
| UK MDR 2002, Schedule 1, Section II | ER 7–18 full text |
| ISO 10993-1:2018 | Biocompatibility evaluation (ER 7) |
| ISO 14971:2019 | Risk management |
| IEC 60601-1 | Electrical safety of active medical devices (ER 10) |
| IEC 62304 | Software lifecycle processes (ER 12) |
| ISO 11135 / 11137 / 11607 | Sterilisation and packaging (ER 8) |
| ISO 22442 | Animal tissue devices (ER 16) |
| MHRA: Designated standards | Current UK-designated standard list |

The section should continue with: 'rance Level (SAL) of 10^-6 or better. The sterilisation process validation must demonstrate: (a) the sterilisation method achieves the required SAL; (b) the packaging maintains sterility throughout the claimed shelf-life; (c) the process is suitable for the device design, materials, and any residues; and (d) parameters are monitored and documented in manufacturing. Where appropriate, reference ISO 11135-1 (ethylene oxide) or ISO 14971 (other sterilisation methods).'
