---
title: Digital Health Framework
sidebar_position: 1
description: Digital health regulatory framework in Bangladesh — DGDA approach to medical device software, SaMD, AI/ML, cybersecurity, and the 2023 Act's software provisions.
---

# Digital Health Framework

> *DGDA · Drug and Cosmetics Act 2023 · BD-Unique software classification · IMDRF SaMD principles*

## Overview

Bangladesh's **Drug and Cosmetics Act 2023** is one of the few regulatory frameworks globally that explicitly names **software** as a medical device. This makes Bangladesh an early mover in formal digital health regulation, even though detailed implementing guidance for software-specific technical requirements is still developing.

## Regulatory Foundation

| Instrument | Relevance |
|---|---|
| Drug and Cosmetics Act 2023 | Explicitly includes software in the medical device definition; categorises MDSW as "Drug" |
| DGDA Registration Guidelines | Applies standard Class A–D framework to software |
| IMDRF SaMD N41 (2017) | International principles adopted by DGDA as framework for software classification |
| IEC 62304 | Expected software lifecycle standard for Class B/C/D MDSW |

## What Is Covered

| Product | Covered Under 2023 Act? |
|---|---|
| AI diagnostic imaging software | Yes — Class C or D |
| Clinical decision support (active intervention) | Yes — Class B, C, or D depending on severity |
| Patient monitoring alert systems | Yes — Class B or C |
| Drug dosing calculators (with clinical output) | Yes — Class B or C |
| Administrative hospital software (EMR, scheduling) | No — not a medical device |
| General wellness/fitness apps | No — not a medical device |
| Telemedicine video platform (no clinical output) | No — not a medical device |

For borderline cases, contact DGDA for a product determination.

## Classification of Digital Health Products

Software classification uses the standard DGDA Class A–D system informed by:
- **Severity** of the health condition addressed
- **Significance** of the software output to clinical decisions
- Whether the software **drives** a treatment/diagnostic action or merely provides background information

See [Software & IVD Classification](/classification/software-ivd) for the full classification matrix and examples.

## Technical Documentation for Digital Health Products

In addition to standard dossier requirements, digital health products must include:

| Document | Standard |
|---|---|
| Software description and intended medical purpose | — |
| Software Development Lifecycle documentation | IEC 62304 |
| Software requirements and architecture | — |
| Verification and validation test reports | — |
| Usability engineering file | IEC 62366-1 |
| Cybersecurity risk assessment | IMDRF N60 / IEC 81001-5-1 |
| Algorithm validation (AI/ML) | IMDRF AI/ML guidance |
| Risk management including software hazards | ISO 14971 |
| Post-market update management plan | — |

## AI and Machine Learning

AI/ML software used for medical purposes is subject to the same registration requirements as other SaMD. Additional considerations:
- **Algorithm training data:** Document the data sets used to train the algorithm — their representativeness of the intended patient population matters for Bangladesh market applications
- **Algorithm validation:** Validate performance on an independent dataset; performance metrics (sensitivity, specificity, AUC) must be reported
- **Adaptive algorithms:** Software that learns or changes its model after deployment may create post-approval change management obligations — define boundaries of acceptable change in the technical documentation
- **Explainability:** For high-risk clinical decisions (Class C/D), DGDA may expect documentation of how the algorithm reaches its output

## Cybersecurity

Connected medical device software (with network, internet, or cloud connectivity) must address cybersecurity risks. DGDA aligns with **IMDRF Principles and Practices for Medical Device Cybersecurity (N60)**. Key requirements:
- Threat modelling — identify attack vectors and adversaries
- Secure architecture — authentication, access control, encryption
- Vulnerability management — process for receiving, assessing, and addressing vulnerability reports
- Software updates — secure delivery mechanism; update plan submitted at registration
- Post-market monitoring — ongoing monitoring for newly discovered vulnerabilities

## Telemedicine and Connected Care

Telemedicine platforms that provide clinical decision support, diagnostic outputs, or therapeutic recommendations cross into medical device territory. Pure communication platforms (video, messaging with no clinical output) are not medical devices. The boundary is whether the software itself generates a clinical output — not whether it is used in a clinical context.

## Current Regulatory Maturity

Bangladesh DGDA is actively building its digital health regulatory capacity. Manufacturers should:
- Engage DGDA early for novel or complex digital health products
- Prepare documentation aligned with IMDRF and IEC standards — these are the reference frameworks DGDA uses
- Monitor DGDA for publication of detailed SaMD-specific guidelines
- The AR must have the technical capacity to engage DGDA on software-related questions
