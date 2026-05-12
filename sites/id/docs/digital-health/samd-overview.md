---
title: SaMD Overview
sidebar_position: 1
description: Indonesia's regulatory approach to Software as a Medical Device (SaMD) — current classification principles, GHTF/IMDRF alignment, and the evolving guidance landscape.
---

# Software as a Medical Device (SaMD)

## What Is SaMD?

**Software as a Medical Device (SaMD)** is software intended to be used for one or more medical purposes that performs these purposes without being part of a hardware medical device. Examples include:
- AI-powered diagnostic decision support software
- Software that analyses medical images for diagnostic purposes
- Clinical calculators used to determine treatment dosing
- Software that monitors physiological parameters and alerts clinicians
- Software used to plan surgical procedures

Software that is an **integral part** of a hardware device (device software / embedded software) is regulated as part of that hardware device, not as a separate SaMD.

---

## Current Regulatory Status in Indonesia

Indonesia does not yet have a dedicated, published SaMD-specific regulation. SaMD is currently regulated under the existing medical device framework (Permenkes 62/2017) on a **case-by-case** basis, applying general classification rules to determine whether a particular software product is a medical device and, if so, what class it falls into.

:::note Evolving guidance
The Indonesian SaMD regulatory framework is actively developing. Manufacturers bringing AI/ML-based or complex SaMD products to Indonesia should engage with their LAR and directly with Kemenkes for the current position on specific products.
:::

---

## SaMD Classification Principles

In the absence of Indonesia-specific SaMD guidance, Kemenkes applies general classification criteria to SaMD, informed by:

| Reference | Relevance |
|---|---|
| IMDRF SaMD N10:2013 | Definition and categorisation of SaMD |
| IMDRF SaMD N23:2015 | Quality management system for SaMD |
| IMDRF SaMD N41:2017 | Clinical evaluation for SaMD |
| GHTF/SG5/N6:2012 | Clinical evidence for medical devices |
| ASEAN AMDD classification rules | Applied by analogy for ASEAN-market SaMD submissions |

**Key classification question for SaMD:**
- What is the intended clinical purpose?
- What is the severity of the condition the software is intended to address?
- What is the consequence of an incorrect output from the software?

Higher-severity intended use combined with high consequence of error → higher class.

---

## Practical Considerations for SaMD Registration in Indonesia

1. **Engage early**: Contact your LAR and potentially Kemenkes directly to seek informal guidance on classification before preparing a full dossier
2. **Document the software's medical purpose precisely**: Ambiguous intended use descriptions are a common source of SaMD registration queries
3. **IEC 62304 compliance**: Software lifecycle documentation per IEC 62304 is expected for SaMD
4. **Cybersecurity**: For internet-connected SaMD, a cybersecurity risk assessment is increasingly expected
5. **AI/ML**: For continuously learning or adaptive AI algorithms, document how algorithm updates will be managed and whether updates trigger re-registration
