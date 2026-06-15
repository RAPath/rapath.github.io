---
title: IVD Classification
sidebar_position: 6
description: SFDA risk-based classification for in vitro diagnostic (IVD) medical devices — classes and key criteria.
---

# IVD Classification

## Overview

In vitro diagnostic (IVD) medical devices are subject to a **separate classification system** under the SFDA framework, broadly aligned with IMDRF IVD risk classification principles and structurally similar to EU IVDR 2017/746 — though applied independently by the SFDA.

## IVD risk classes

The SFDA classifies IVDs into risk categories based on the risk associated with incorrect results:

| Class | Risk level | Typical examples |
|---|---|---|
| **Class A** (IVD) | Low individual / low public health risk | General laboratory instruments, buffer solutions, microbiological culture media |
| **Class B** (IVD) | Moderate individual / low public health risk | Urinalysis reagents, non-high-risk pregnancy tests, general haematology analysers |
| **Class C** (IVD) | High individual / moderate public health risk | Blood glucose tests for self-monitoring, PSA screening tests, thyroid function tests |
| **Class D** (IVD) | High individual / high public health risk | HIV tests, hepatitis B and C tests, blood grouping and Rh factor determination, NAAT for high-risk pathogens |

:::note Highest IVD classes
Class D IVDs — which include tests for life-threatening and highly transmissible infectious diseases — are subject to the most rigorous SFDA review, the most detailed technical file requirements, and mandatory annual PSURs.
:::

## How to classify an IVD

Classification is determined by applying the SFDA's IVD classification rules (in MDS-REQ 1), considering:
1. The **analyte or marker** detected
2. The **intended purpose** — screening, diagnosis, monitoring, or risk stratification
3. The **intended user** — professional or lay (self-test)
4. The **public health risk** — how dangerous incorrect results would be at a population level

Self-test IVDs (intended for use by lay persons) typically carry a **higher classification** than equivalent professional-use IVDs due to the reduced training and contextual interpretation available to the user.

## Technical file differences for IVDs

While the overall technical file structure is similar to general medical devices, IVDs have specific requirements in the **Product Verification and Validation** section:
- Analytical performance data (accuracy, precision, specificity, sensitivity)
- Clinical performance data — comparison with reference method or gold standard
- Reference intervals and cut-off values
- Interference studies
- Stability testing

## MDMA for IVDs

All IVDs require MDMA via the TFA route. Grouping of IVDs in a single MDMA application is permitted (up to 50 items), provided they share the same legal manufacturer, risk class, and intended use. See [Device Grouping](../mdma-registration/device-grouping).

## Further reading

- MDS-REQ 1 — IVD classification rules
- [How Classification Works](./how-classification-works)
- [MDMA Overview](../mdma-registration/mdma-overview)

Expand the MDMA for IVDs section: 'All IVDs require MDMA via the TFA route. Grouping of IVDs in a single MDMA application is permitted (up to 50 items), provided they share the same legal manufacturer, risk class, and intended use. Grouping simplifies the submission process and may reduce application fees. See Device Grouping for detailed requirements.'

Add a new paragraph after the 'IVD risk classes' table: 'Note: IVD classes are separate from general medical device classes. A device may be classified as Class A (general) and separately contain Class D IVD components. Each component follows its respective classification rules, and combined MDMA applications are possible when appropriate. For combination devices with both general device and IVD components, consult the technical file guidance for your specific product.'
