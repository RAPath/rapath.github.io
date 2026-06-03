---
id: device-description-specification
title: Device description & specification
sidebar_label: Device description & specification
sidebar_position: 2
tags: [mdr, ivdr, technical-documentation]
---

# Device description & specification

:::note Regulatory basis
**MDR Annex II, Section 1** and **IVDR Annex II, Section 1**. The device description and specification is the foundational section of technical documentation — it defines what the device is, what it does, and for whom.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Overview

The device description and specification section establishes the **scope and identity** of the technical documentation. Every other section — GSPR, risk management, clinical evaluation — flows from the statements made here. Getting the device description right is critical: an imprecise intended purpose creates ambiguity in every downstream document.

---

## Required content — MDR Annex II §1

### 1.1 Device identity

- **Device name**: trade name, common name, and generic device group name
- **Basic UDI-DI**: the reference number that links all documentation to the specific device
- **Model and type designations**: all variants, configurations, and accessories within scope of the technical documentation
- **Intended patient population**: age range, gender, health status, conditions being treated or diagnosed
- **Intended users**: healthcare professionals (which specialty), lay users, or both
- **Intended use environment**: hospital, home, ambulance, laboratory, etc.

### 1.2 Intended purpose

This is the **most critical element** of the device description. The intended purpose must:
- Clearly state what the device **does** and for **whom**
- Specify the **medical condition(s)** it addresses
- Identify any **contraindications** or patient populations excluded from use
- Align exactly with the labelling, IFU, and promotional materials

:::tip
The intended purpose drives classification, conformity assessment route, clinical evidence strategy, and GSPR applicability. Invest time in getting it precisely right. Vague intended purposes create regulatory problems downstream — and overly broad intended purposes require more extensive clinical evidence.
:::

### 1.3 Principle of operation

A description of how the device works — its mechanism of action, the physical, chemical, mechanical, or other principles by which it achieves its intended purpose. For:
- **Active devices**: description of the energy source, conversion, and delivery mechanism
- **Software**: description of the algorithm, input data, output, and decision logic
- **IVDs**: description of the analytical principle (immunoassay, PCR, enzymatic, etc.) and how the signal is generated and quantified

### 1.4 Technical specifications

- Dimensions, weight, materials of construction
- Performance specifications (output parameters, accuracy, range, resolution)
- Electrical specifications (for active devices)
- Sterilisation method and sterility assurance level (for sterile devices)
- Shelf life and storage conditions
- Reuse information (single-use designation or maximum number of reuses with reprocessing instructions)

### 1.5 Accessories, combination devices, and systems

List of:
- **Accessories** specifically intended for use with the device
- Other devices or equipment the device is **intended to be used in combination with**
- Medicinal products or other substances the device is intended to be used with (for combination products)

### 1.6 Variants and generations

- Description of **previous generations** of the device (if applicable)
- Reference to the **equivalent device** (if used in the clinical evaluation)
- Description of **variants or configurations** included in this technical documentation

---

## Required content — IVDR Annex II §1 additions

For IVDs, the device description must additionally include:

- The **analyte(s)** measured or detected
- **Type of specimen(s)** required (whole blood, serum, plasma, urine, etc.)
- **Measurement range** and units
- **Intended use setting** (laboratory, point of care, home use)
- For **companion diagnostics**: the therapeutic product and patient selection indication

---

## Common mistakes to avoid

| Mistake | Consequence |
|---|---|
| Intended purpose is too vague (e.g. "for diagnosis of disease") | Inadequate — must specify the condition, population, and setting |
| Intended purpose differs between documents | Inconsistency is a critical finding in notified body reviews |
| Variants not listed | Undocumented variants may not legally benefit from the CE certificate |
| No clear statement of contraindications | GSPR and clinical evaluation gaps |
| Principal of operation is superficial | Notified bodies require enough detail to assess GSPR compliance independently |

---

## Relationship to other technical documentation sections

The device description forms the reference framework for:

- **GSPR table** — applicability of each GSPR is determined by the device type and intended purpose stated here
- **Risk management** — hazard identification begins with the device description
- **Clinical evaluation / performance evaluation** — the clinical claims must align precisely with the intended purpose
- **IFU and labelling** — must be consistent with the intended purpose in the technical documentation
- **Classification rationale** — classification rules are applied to the intended purpose and device type

If the intended purpose changes — even slightly — a formal change control process must be initiated, and all affected technical documentation sections reviewed.

---

## Related pages

- [Technical documentation — overview](./technical-documentation-overview)
- [GSPR cross-reference](./gspr-cross-reference)
- [Risk management](./risk-management)
- [Clinical evaluation](/pre-market/clinical-evidence/clinical-evaluation-overview)
- [UDI overview](/pre-market/udi-system/udi-overview)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex II, Section 1 | Device description and specification |
| IVDR Annex II, Section 1 | IVD equivalent |
| MDR Art. 2(24) | Definition of intended purpose |
| MDCG 2020-6 | Technical documentation templates |
| MDCG 2022-2 | Guidance on intended purpose |

The section "Common mistakes to avoid" shows a table header with 'Mistake' and 'Consequence' columns but no rows are visible. Add completed table rows such as: "Vague intended purpose (e.g. 'for diagnostic use') | Leads to unclear GSPR applicability and classification disputes"; "Overly broad patient population | Requires extensive clinical evidence and may trigger higher classification"; "Omitting contraindications | Notified body will reject technical documentation; creates liability"; "Listing accessories without specifying intended use | Confusion about what is and is not part of the device scope"; "Not aligning intended purpose with labelling | Product labelling and IFU must match the stated intended purpose exactly."
