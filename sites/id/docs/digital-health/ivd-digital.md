---
title: IVD Digital Platforms
sidebar_position: 2
description: Regulatory considerations for AI/ML-driven IVD platforms, laboratory information systems (LIS), and molecular diagnostic software in the Indonesian regulatory framework.
---

# IVD Digital Platforms

## Overview

The intersection of digital technology and in-vitro diagnostics is one of the most rapidly evolving areas of medical device regulation globally. In Indonesia, digital IVD platforms fall within the general medical device and IVD regulatory framework, with specific considerations applying to software-driven diagnostic systems.

---

## Types of IVD Digital Platforms

| Platform Type | Description | Regulatory Consideration |
|---|---|---|
| Standalone IVD analyser software | Software controlling an IVD analyser; integral to the instrument | Regulated as part of the hardware device |
| AI/ML diagnostic interpretation software | Software analysing raw assay data to produce diagnostic output | Likely SaMD; class depends on clinical application |
| Laboratory Information System (LIS) | Software managing laboratory workflow and result reporting | Generally not a medical device unless it performs diagnostic analysis |
| POCT connectivity platforms | Software connecting point-of-care devices to networks/EMRs | May be a medical device if it performs diagnostic functions |
| Companion diagnostics software | Software determining treatment eligibility based on IVD results | High class; critical regulatory scrutiny |
| NGS analysis pipelines | Bioinformatics software for next-generation sequencing data interpretation | SaMD; classification by clinical use |

---

## Key Regulatory Questions for IVD Digital Platforms

**1. Is it a medical device at all?**
Software that merely displays, archives, or transmits IVD results without performing any analytical or interpretive function is generally **not** a medical device. Software that performs algorithmic analysis, pattern recognition, or clinical decision support using IVD data is likely a medical device (SaMD).

**2. What class?**
Apply IVD classification rules: public health risk + individual patient risk + consequence of error. AI-driven IVDs for cancer diagnosis or infectious disease confirmation will typically be Class C or D.

**3. Clinical performance validation**
For AI/ML IVDs, analytical and clinical performance validation must demonstrate:
- Performance across the intended user population
- Validation dataset characteristics (demographics, disease prevalence, reference method)
- Performance equivalence to or superiority over predicate/comparator

**4. Cybersecurity**
Network-connected IVD platforms must address cybersecurity risks — data integrity, access control, auditability, vulnerability management.

---

## Data Privacy Considerations

Medical data processed by IVD digital platforms is subject to Indonesia's **Personal Data Protection Law** (Undang-Undang Perlindungan Data Pribadi — UU PDP), which came into force in 2024. Data localisation and patient consent requirements may interact with cloud-hosted IVD platform architectures.

