---
sidebar_position: 2
description: Software as a Medical Device (SaMD) in Switzerland — an end-to-end overview of qualification, classification, conformity assessment, and post-market obligations under MedDO.
keywords: [SaMD, software medical device, MedDO, Switzerland, qualification, classification, IEC 62304]
---
# Software as a Medical Device — Overview

## Overview
This page provides an end-to-end overview of regulating standalone software as a medical device (SaMD) in Switzerland under MedDO. For detailed coverage of specific topics, see the linked pages.

## Step 1 — Qualification: Is This Software a Medical Device?
Not all health-related software is a medical device. The key question is whether the software has a **medical intended purpose** — specifically whether it is intended to perform an action on data beyond storage, communication, or search, and whether its output is intended to drive clinical decisions. Use MDCG 2019-11 (applicable in Switzerland) as the qualification framework. See [MDCG 2019-11 Applicability](./mdcg-2019-11).

## Step 2 — Classification: Which Class?
Once qualified as a medical device, SaMD is classified using MedDO Annex VIII. Key rules for software:
- **Rule 11**: Active devices for administering/removing medicines or providing therapy — Class IIb or III
- **Rule 22**: Closed-loop systems for serious conditions — Class III
- Software IVDs: IVDO Annex VIII Rule 7
Most clinical decision support SaMD falls into Class IIa or IIb; closed-loop therapeutic control systems are Class III.

## Step 3 — Technical Documentation
SaMD-specific documentation requirements include:
- **Software description**: architecture, modules, programming languages, third-party components (SBOM)
- **IEC 62304 compliance evidence**: software lifecycle documentation, software safety class determination, development and testing records
- **Cybersecurity documentation**: threat model, security testing results, minimum system requirements
- **Usability evaluation**: IEC 62366-1 usability file
- **AI/ML documentation** (where applicable): dataset description, training/validation/test split, performance metrics, algorithm change management plan

## Step 4 — Conformity Assessment
SaMD follows standard MedDO conformity assessment routes by class. For Class IIa+ SaMD, an EU-designated NB must assess QMS compliance under ISO 13485 (including IEC 62304 scope) and review technical documentation.

## Step 5 — Post-Market Obligations
SaMD post-market surveillance has specific features:
- **Performance monitoring**: real-world performance metrics must be collected and compared against the performance claims in the technical documentation
- **Software updates**: security patches and feature updates must be managed through a documented change control process; significant algorithm changes may require new conformity assessment
- **Cybersecurity incidents**: security vulnerabilities that could lead to patient harm must be reported to Swissmedic via eVigilance

## Official Sources
- [MedDO (SR 812.213)](https://www.fedlex.admin.ch/eli/cc/2021/205/en)
- [MDCG 2019-11 — Software qualification and classification](https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en)
- [IEC 62304 — Software lifecycle](https://www.iec.ch)

:::warning Disclaimer
AI-assisted navigation aid only. Always verify against official [Swissmedic](https://www.swissmedic.ch) and [Fedlex](https://www.fedlex.admin.ch) sources. Not legal or regulatory advice.
:::
