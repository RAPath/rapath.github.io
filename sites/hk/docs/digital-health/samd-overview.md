---
title: Software as a Medical Device (SaMD)
sidebar_position: 1
description: MDD's approach to regulating SaMD under MDACS — classification, documentation, and AI/ML considerations.
---

# Software as a Medical Device (SaMD)

> MDACS · IMDRF SaMD framework · HK approach

## Is Your Software a Medical Device?

Likely yes if: diagnoses disease from patient data · predicts patient risk · recommends treatment · monitors patient condition · controls hardware device parameters

Likely no if: administrative/billing only · general wellness without medical claims · EHR storage/retrieval without clinical decision support

## Classification

SaMD is classified via TR-003 (non-IVD) or TR-004 (IVD SaMD) based on:
- Severity of the clinical condition addressed
- Significance of software output to clinical decision-making
- Whether the software output is integral to (drives) or is one of many informational inputs available to the clinician (informs) a clinical decision

High-risk diagnostic AI → typically Class III or IV. General clinical support tools → may be Class II.

## Key Documentation for SaMD

- IEC 62304 — software lifecycle processes
- IEC 62366-1 — usability engineering
- ISO 14971 — risk management applied to software
- Algorithm validation (for AI/ML) — training data, performance metrics, bias assessment
- Cybersecurity risk management plan

## AI/ML Adaptive Algorithms

For AI/ML that adapts post-deployment:
- Define the learning boundary — what changes are within pre-approved scope
- Significant changes beyond the boundary require MDD change notification
- Consider a Predetermined Change Control Plan approach for anticipated future updates

Add a paragraph after the 'Classification' section: 'SaMD Classification and MDACS Eligibility: Only Class II, III, or IV SaMD (or IVD SaMD Classes B, C, D) are eligible for MDACS listing. Class I or Class A SaMD may still be supplied in Hong Kong provided they comply with general safety standards, but do not require MDACS registration.'
