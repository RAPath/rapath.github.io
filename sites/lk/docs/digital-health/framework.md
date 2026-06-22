---
title: Digital Health Framework
sidebar_position: 1
description: Digital health and SaMD regulatory framework in Sri Lanka — NMRA approach to software as a medical device, AI/ML, cybersecurity, and IEC 62304 requirements.
---

# Digital Health Framework

> *NMRA · NMRA Act No. 5 of 2015 · SaMD · IEC 62304*

## Overview

Sri Lanka's NMRA regulates **Software as a Medical Device (SaMD)** under the same legal framework as physical devices — the **NMRA Act No. 5 of 2015**. Software that meets the medical device definition must be registered before being marketed or supplied in Sri Lanka.

Classification of SaMD follows the NMRA's EU-derived classification framework. See [SaMD, Borderline & Combination Products](/classification/samd-borderline) for classification rules.

## Regulatory Basis

| Instrument | Relevance |
|---|---|
| NMRA Act No. 5 of 2015 | Medical device definition includes software |
| NMRA Classification Guidelines | Apply EU-derived risk rules to SaMD |
| IEC 62304 | Expected software lifecycle standard in technical dossier |
| ISO 14971 | Risk management including software hazards |
| IMDRF SaMD N41 | International principles informing NMRA approach |

## What Qualifies as SaMD in Sri Lanka

Software is a medical device when its **intended purpose** is to diagnose, prevent, monitor, treat, or alleviate a disease, injury, or disability. Classification follows the general device classification framework with software-specific considerations for:
- The severity of the disease or condition addressed
- Whether the software drives a clinical decision or merely provides information

| Software Type | Medical Device? |
|---|---|
| AI diagnostic imaging analysis | Yes |
| Clinical decision support driving treatment | Yes |
| Remote patient monitoring with clinical alerts | Yes |
| Drug dosing calculator with clinical output | Yes |
| General wellness / fitness tracking | No |
| Administrative EMR (no clinical output) | No |

## Technical Documentation for SaMD

SaMD submissions in the F-MDR-035 consolidated dossier must include software-specific documentation in addition to standard requirements:

| Document | Standard |
|---|---|
| Software description and intended medical purpose | — |
| Software Development Lifecycle documentation | IEC 62304 |
| Software requirements and architecture | — |
| Verification and validation test reports | — |
| Usability engineering | IEC 62366-1 |
| Cybersecurity risk assessment | IMDRF N60 / IEC 81001-5-1 |
| Algorithm validation (AI/ML) | IMDRF AI/ML guidance |
| Risk management including software hazards | ISO 14971 |
| Post-market update management plan | — |

## Registration Pathway for SaMD

SaMD follows the standard NMRA two-step registration pathway:
1. Manufacturing site registration (for the software developer's facility)
2. Device registration — full dossier or reliance pathway where applicable

For the **reliance pathway**, if the SaMD has been approved by a recognised Reference NRA (Australia, Canada, EU, Japan, US, UK, Switzerland), the NMRA may rely on that assessment. This is the fastest route for SaMD with existing major-market approvals.

## AI and Machine Learning

AI/ML-based SaMD is regulated as a medical device where it meets the intended purpose criterion. Key considerations:
- **Training data:** Document representativeness of training data for the intended patient population
- **Algorithm validation:** Validate on independent datasets; provide performance metrics (sensitivity, specificity, AUC or equivalent)
- **Adaptive algorithms:** Post-deployment learning that changes clinical output may create change notification obligations
- **Clinical evidence:** High-risk AI tools require clinical validation demonstrating diagnostic accuracy

## Cybersecurity

Connected SaMD (with network or cloud connectivity) must address cybersecurity risks:
- Threat modelling — identify attack vectors
- Secure architecture — authentication, access control, encryption
- Vulnerability management — process for receiving and responding to security vulnerabilities
- Software update mechanism — how security patches and feature updates are managed
- Post-market cybersecurity monitoring plan

## Post-Approval Software Updates

Changes to SaMD post-approval must be managed:
- **Safety-critical updates** addressing a known risk: follow FSCA procedures — notify NMRA before releasing the update if it addresses a safety issue
- **Changes to intended purpose or significant new features:** Submit a change notification or variation application before release
- **Minor bug fixes** with no clinical or safety impact: Document and maintain records; no variation typically required

Engage NMRA for guidance on specific updates, as the boundary between notifiable and non-notifiable changes in SaMD is not yet codified in detailed NMRA guidance.
