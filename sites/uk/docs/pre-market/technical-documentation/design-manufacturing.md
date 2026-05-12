---
sidebar_position: 3
title: Design & manufacturing information
description: >
  The design and manufacturing information required in a medical device technical file under
  the UK MDR 2002 — design inputs and outputs, verification and validation, manufacturing
  process documentation, and quality system records.
tags: [uk-mdr, technical-documentation, design, manufacturing, pre-market]
---

:::note[Regulatory basis]
Design and manufacturing information requirements derive from the conformity assessment procedures in **Schedule 3, UK MDR 2002** and the QMS requirements of **ISO 13485**. For Class III devices and AIMDs, the design dossier submitted to the UKAB must contain comprehensive design information.
:::

---

## Design controls: the ISO 13485 framework

Under ISO 13485 (the QMS standard MHRA expects manufacturers to use), design and development is controlled through a systematic process:

```
Design Planning → Design Inputs → Design Outputs
       │                │               │
       │                │               ▼
       │                │        Design Verification
       │                │               │
       │                │               ▼
       │                │        Design Validation
       │                │               │
       │                └───────────────┘
       │                        │
       ▼                        ▼
Design Transfer               Design Review
(to manufacturing)      (at key stage gates)
       │
       ▼
Design Changes (controlled throughout lifecycle)
```

All stages must be documented and retained as part of the design history file (DHF), which forms the core of the technical documentation.

---

## Design inputs

Design inputs are the **requirements** the device must meet. They include:

- Functional requirements (what the device must do)
- Performance requirements (how well it must do it)
- Safety requirements (what hazards must be controlled)
- Regulatory requirements (Essential Requirements, applicable standards)
- User requirements (usability, intended user environment)
- Interface requirements (compatibility with other devices, accessories, infrastructure)

Design inputs must be **documented, reviewed, and approved** before design work begins. Ambiguous or incomplete design inputs are a leading cause of later design deficiencies.

---

## Design outputs

Design outputs are the **deliverables** that result from the design process — documents and records that define the final device:

- Engineering drawings and specifications
- Software design specifications
- Bill of materials (BoM)
- Manufacturing instructions
- Inspection and test specifications
- Packaging specifications
- Labelling specifications
- Sterilisation specifications

Design outputs must demonstrate that all design inputs have been addressed.

---

## Design verification

**Verification** answers: *Did we build the device right?* — i.e., does the design output meet the design input requirements?

Verification activities typically include:
- Bench testing against performance specifications
- Environmental testing (temperature, humidity, vibration, shock)
- Electrical safety testing (IEC 60601 series for active devices)
- Electromagnetic compatibility (EMC) testing
- Software testing (IEC 62304 — unit, integration, system testing)
- Dimensional and material inspection
- Sterility testing and bioburden testing

All verification test reports must be retained in the technical file.

---

## Design validation

**Validation** answers: *Did we build the right device?* — i.e., does the device meet user needs and the intended purpose when used in actual or simulated conditions?

Validation activities include:
- Usability/human factors engineering studies (IEC 62366)
- Simulated use testing (in a representative clinical environment)
- Clinical evaluation (for the clinical performance claim)
- Performance evaluation (for IVDs)
- Animal studies or cadaveric studies (where applicable for implants)

Validation must demonstrate that the device performs as intended by real users in the intended use environment.

---

## Manufacturing process documentation

The technical file must contain sufficient information about the manufacturing process to demonstrate that the production method consistently produces devices conforming to the design specifications:

- **Process flow diagrams** — overview of manufacturing steps
- **Manufacturing instructions** — step-by-step procedures for critical processes
- **Critical process parameters** — defined limits for temperature, pressure, time, speed, etc. that affect product quality
- **In-process controls** — inspection or testing steps within the manufacturing process
- **Special processes** — processes whose outputs cannot be fully verified by subsequent inspection (e.g., welding, sterilisation, injection moulding) must be validated (process validation records)
- **Manufacturing site information** — address of each manufacturing site; relevant regulatory status

### Sterilisation documentation

For sterile devices, the technical file must include:
- Sterilisation method and rationale
- Sterilisation validation records (e.g., ISO 11135 for EO, ISO 11137 for radiation)
- Sterility Assurance Level achieved (typically SAL 10⁻⁶)
- Revalidation schedule and records
- Packaging validation (ISO 11607)

---

## Pre-clinical test reports

All pre-clinical testing that contributes to demonstrating Essential Requirements conformity must be documented in the technical file:

| Test category | Applicable standards | ER addressed |
|---|---|---|
| Biocompatibility | ISO 10993 series | ER 7 |
| Sterilisation validation | ISO 11135, 11137, 11138 | ER 8 |
| Electrical safety | IEC 60601-1 and applicable collateral/particular standards | ER 13 |
| EMC | IEC 60601-1-2 | ER 13 |
| Mechanical performance | Device-specific standards (ISO, EN, ASTM) | ER 3, 4 |
| Software | IEC 62304, IEC 82304 | ER 14 |
| Usability | IEC 62366-1 | ER 1, 2 |
| Shelf life / stability | ASTM F1980 (accelerated ageing) | ER 4, 5 |
| Packaging | ISO 11607 | ER 5, 8 |
| Animal studies | GLP requirements where applicable | ER 2, 3 |

Test reports from accredited test laboratories carry more weight but are not mandatory — in-house testing to applicable standards is acceptable if the in-house laboratory is appropriately qualified and documented.

---

## Design changes and change control

Any changes to the device design — materials, components, manufacturing process, software, labelling — must go through a documented **change control process**:

1. Identify the change and its scope
2. Assess the potential impact on Essential Requirements conformity
3. Determine if re-verification, re-validation, or UKAB notification is required
4. Implement the change with appropriate documentation
5. Update the technical file (including ER checklist, risk file, clinical evaluation if affected)
6. Issue a revised Declaration of Conformity if the change affects the DoC
7. Notify the UKAB if the change affects a certified element (QMS certificate scope, Design Examination Certificate)

---

## Related pages

- [Technical documentation overview](./overview)
- [Device description & specifications](./device-description)
- [Risk management (ISO 14971)](./risk-management)
- [Clinical evaluation summary](./clinical-evaluation-summary)
- [Essential Requirements overview](../essential-requirements/overview)

---

## Official references

| Reference | Description |
|---|---|
| ISO 13485:2016, Clause 7.3 | Design and development requirements |
| ISO 14971:2019 | Risk management — integrated with design process |
| IEC 62366-1:2015 | Usability engineering for medical devices |
| IEC 62304:2006+AMD1:2015 | Software lifecycle processes |
| EU MDR 2017/745, Annex II | EU technical documentation requirements (detailed reference) |
| MHRA: Guidance on the UK MDR 2002 | General technical file guidance |
