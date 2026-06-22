---
title: Digital Health Framework
sidebar_position: 1
description: Philippines FDA digital health regulatory framework — MDSW circular status, ASEAN alignment, classification of software, and CDRRHR approach to digital health products.
---

# Digital Health Framework

> *FDA Philippines · CDRRHR · Draft MDSW Circular 2025 · ASEAN AMDD*

## Overview

The Philippines is in the process of establishing a formal regulatory framework for **Medical Device Software (MDSW)**, including Software as a Medical Device (SaMD). As of mid-2025, the primary instrument is a **draft FDA circular** released for public comment.

## Current Regulatory Status

| Product Type | Current Status |
|---|---|
| SaMD (standalone software with medical purpose) | Draft MDSW circular — pending finalisation (as of 2025) |
| SiMD (software embedded in hardware device) | Regulated as part of the hardware device dossier |
| Mobile medical applications | Assessed case-by-case pending MDSW finalisation |
| IVD software | Excluded from MDSW scope — separate IVD framework pending |
| Administrative / workflow software with no medical purpose | Not a medical device |

Until the MDSW circular is formally in force, **contact CDRRHR directly** for guidance on software-based device applications.

## Draft MDSW Circular — Key Provisions

The draft circular (released May 2025, public comment deadline July 2025) proposes:

### Definitions

- **MDSW (Medical Device Software):** Software intended to be used, alone or in combination, for a purpose as defined for a medical device
- **SaMD:** Software that is itself a medical device — not embedded in hardware
- **SiMD:** Software that is part of a hardware medical device and controls or interacts with the hardware

### Classification

MDSW is classified using the standard ASEAN AMDD Class A–D framework, with classification driven by:
- The **significance of information** the software provides (drives clinical decision vs. displays information)
- The **patient population** (critical care, life-sustaining vs. general wellness)
- The **severity of harm** if the software malfunctions or provides incorrect output

### Application Process

| MDSW Class | Application Type |
|---|---|
| Class A | CMDN via FDA eServices Portal |
| Class B, C, D | CMDR — full ASEAN CSDT submission |

The technical documentation requirements for MDSW submissions include:
- Software description and intended medical purpose
- Software architecture and design documentation
- Software development lifecycle (SDLC) documentation — IEC 62304 alignment
- Verification and validation (V&V) test reports
- Cybersecurity risk assessment
- Post-market surveillance plan for software (including update management)

## AI/ML-Based Devices

AI and machine learning software that can adapt or change its behaviour after deployment (sometimes called "adaptive AI") receives additional scrutiny:
- The draft circular notes that adaptive AI requires consideration of how continuous learning affects safety and performance
- Changes to the algorithm through learning may constitute a significant change requiring variation approval
- Manufacturers of adaptive AI software should define boundaries of acceptable algorithm change in their technical documentation

## ASEAN Alignment

Philippines MDSW regulation is being developed in alignment with the **ASEAN Medical Device Directive** and IMDRF principles for SaMD. This means:
- ASEAN NRA reliance pathway will apply to approved MDSW — a device approved by another ASEAN NRA can use the abridged 30-day pathway
- ASEAN CSDT format applies to Class B/C/D MDSW

## Cybersecurity

Cybersecurity requirements are expected to be included in the finalised MDSW circular. Manufacturers of connected software devices should prepare:
- Threat modelling documentation
- Secure design architecture description
- Vulnerability management and patch/update procedures
- Post-market cybersecurity monitoring plan

## Preparing for MDSW Regulation

For companies with SaMD or MDSW products targeting the Philippines market:
1. Monitor CDRRHR announcements for finalisation of the MDSW circular
2. Subscribe to FDA Philippines circulars at fda.gov.ph
3. Prepare software documentation (IEC 62304, risk management, V&V) in advance — these will be required regardless of the final circular text
4. For current applications, engage CDRRHR for case-specific guidance on how to handle software components
