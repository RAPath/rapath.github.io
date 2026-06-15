---
id: design-manufacturing-information
title: Design & manufacturing information
sidebar_label: Design & manufacturing information
sidebar_position: 3
tags: [mdr, ivdr, technical-documentation, manufacturing, qms]
---

# Design & manufacturing information

:::note Regulatory basis
MDR Annex II, Section 3 and IVDR Annex II, Section 3. This section of the technical documentation covers how the device was designed and how it is manufactured — the information necessary to ensure reproducibility and traceability.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Overview

Section 3 of Annex II provides regulators and notified bodies with sufficient information to understand:

- How the device was designed — the design process, stages, decisions, and verifications
- Where and how the device is manufactured — manufacturing sites, processes, critical operations
- How quality is maintained — the quality management system that governs all of the above

This section bridges the device description (what it is) and the GSPR evidence (that it meets requirements) by documenting the design and manufacturing reality.

---

## 3.1 Design information

### Design stages and outputs

The technical documentation must include information on the key design stages — from initial concept through to final device — and the outputs of each stage. This does not need to be a chronological narrative but must demonstrate a structured development process.

Key design information to document:
- Design inputs: requirements derived from intended purpose, user needs, regulatory requirements, and risk analysis
- Design outputs: specifications, drawings, software architecture documents, material selections
- Design verification: evidence that outputs meet inputs (e.g. test results against specifications)
- Design validation: evidence that the final device meets user needs and intended purpose (including usability testing and clinical evaluation)
- Design reviews: documented decisions at key stages

The harmonised standard EN ISO 13485:2016 (QMS for medical devices) provides the framework for design and development controls, referenced in Section 7.3 of that standard.

### Software design documentation

For software-including devices:
- Software architecture document
- Functional specification
- Software module descriptions
- Software verification and validation protocols and reports (per EN 62304)
- Cybersecurity risk analysis and controls (per MDCG 2019-16 on cybersecurity)

### Design changes

Any significant changes to the design after CE marking must be assessed, documented, and — depending on materiality — may require new notified body review before implementation.

---

## 3.2 Manufacturing information

### Manufacturing sites

The technical documentation must identify all sites involved in the manufacture of the device, including:
- Final assembly
- Critical component manufacture (if performed by the manufacturer or a contract manufacturer)
- Sterilisation (if performed off-site)
- Software development (if considered part of manufacture)

For each site: name, address, and description of activities performed.

### Manufacturing processes

A description — at sufficient level of detail for assessment — of the manufacturing processes used:
- Assembly processes
- Forming, machining, welding, moulding, etc.
- Cleaning and decontamination processes
- Sterilisation processes (method, equipment, cycle parameters, validation status)
- Inspection and testing processes integrated into manufacturing

For sterile devices: a full sterilisation validation summary is required, referencing the relevant sterilisation standard (EN ISO 11135 for ethylene oxide, EN ISO 11137 for radiation, EN ISO 17665 for steam, or other applicable standards). The summary must document sterilisation method, cycle parameters, validation studies, and the achieved Sterility Assurance Level (SAL).

### Critical suppliers and subcontractors

Information on critical components and the suppliers who provide them:
- Critical component specifications
- Qualification and approval status of suppliers
- Incoming inspection or supplier qualification arrangements

Under EN ISO 13485:2016, Section 7.4, suppliers of critical components must be evaluated and selected based on their ability to meet requirements.

---

## 3.3 Quality management system overview

The technical documentation must include or reference the QMS framework under which the device is designed and manufactured. For most device classes, the QMS must meet EN ISO 13485:2016.

Key QMS elements relevant to manufacturing:
- Document control: procedures under document management, version control, and change control
- Production and service provision controls: manufacturing SOPs, in-process controls, and inspection criteria
- Monitoring and measurement: calibration of equipment used in manufacturing and testing
- Non-conforming product control: how defective materials or devices are identified and handled
- Corrective and preventive action (CAPA): how manufacturing problems are investigated and resolved
- Supplier management: qualification, monitoring, and control of external suppliers

For devices where a notified body is involved under Annex IX (QMS-based assessment), the QMS itself is subject to detailed assessment and periodic surveillance audits.

---

## Manufacturing for different device classes

| Class | Manufacturing documentation depth |
|---|---|
| Class I (standard) | Simplified — but QMS and process control still required |
| Class Is / Im / Ir | Sterility, metrological, or reprocessing processes must be validated and documented |
| Class IIa / IIb | Full manufacturing documentation; NB may inspect the site |
| Class III | Full manufacturing documentation; NB conducts periodic unannounced audits (Art. 93) |
| IVDR Class A | Simplified — but quality system still required |
| IVDR Class B / C / D | Full manufacturing documentation; NB involved in conformity assessment |

---

## Change control — keeping the technical documentation current

Manufacturing changes — whether to processes, materials, sites, or equipment — must be assessed under the change control process to determine:

1. Whether the change is significant (may affect safety, performance, or conformity)
2. Whether the technical documentation needs updating
3. Whether the notified body must be notified before implementation
4. Whether a new conformity assessment is required

MDCG 2020-3 provides guidance on significant changes to medical devices.

---

## Related pages

- [Technical documentation — overview](./technical-documentation-overview)
- [Device description & specification](./device-description-specification)
- [GSPR cross-reference](./gspr-cross-reference)
- [Risk management](./risk-management)
- [Conformity assessment — Annex IX (QMS)](/pre-market/conformity-assessment/annex-ix-qms-tech-doc)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex II, Section 3 | Design and manufacturing information requirements |
| IVDR Annex II, Section 3 | IVDR equivalent |
| EN ISO 13485:2016 | QMS for medical devices |
| EN 62304:2006+A1:2015 | Software lifecycle |
| MDR Art. 10(9) | QMS requirements |
| MDCG 2020-3 | Guidance on significant changes |

Add content to Section 3.3: "The technical documentation must provide an overview of the quality management system (QMS) that governs design, manufacturing, and post-market activities. Per EN ISO 13485:2016, this includes: Quality policy and objectives; Organizational structure and responsibility assignments; Design and development controls; Supplier and subcontractor management; Manufacturing process controls; Inspection, testing, and acceptance criteria; Document and record control; Complaint handling and corrective action procedures; Post-market surveillance and vigilance reporting. The QMS overview should demonstrate that the processes documented in Sections 3.1 and 3.2 (design and manufacturing) are controlled and monitored systematically."
