---
title: Classification Overview
sidebar_position: 1
description: Medical device classification under DGDA — GHTF-based Class A to D rules, risk factors, examples, and registration eligibility.
---

# Classification Overview

> *DGDA · GHTF-based · Class A · B · C · D*

## Risk-Based Classification System

Bangladesh uses a **GHTF-derived four-class risk classification** system. Classification determines whether registration is mandatory and what documentation is required.

## Risk Classes at a Glance

| Class | Risk Level | Registration Required | ISO 13485 | Examples |
|-------|-----------|----------------------|-----------|---------|
| **A** | Low | ❌ Not required | Not required | Tongue depressors, bandages, non-sterile gauze, examination gloves (non-sterile), wooden spatulas |
| **B** | Low-moderate | ✅ Mandatory (5 yr) | ✅ Required | Hypodermic needles, suction equipment, blood pressure cuffs, non-implantable patient monitoring devices |
| **C** | Moderate-high | ✅ Mandatory (5 yr) | ✅ Required | Lung ventilators, infusion pumps, bone fixation plates, dialysis equipment |
| **D** | High | ✅ Mandatory (5 yr) | ✅ Required | Heart valves, implantable defibrillators, total joint replacements, coronary stents |

## Classification Rules (GHTF-Based)

Classification is determined using **Annexure 1** of the DGDA Registration Guidelines, which applies GHTF principles based on:

### 1. Invasiveness
- **Non-invasive** — does not penetrate the skin or body → generally lower class
- **Invasive into orifice** — enters natural body openings → moderate class
- **Invasive into body cavity** (surgically or otherwise) → higher class
- **Implantable** — fully absorbed/placed inside the body → Class D (high risk)

### 2. Duration of Contact
| Duration | Definition | Risk Impact |
|----------|-----------|-------------|
| Transient | < 60 minutes | Lower |
| Short-term | 60 min–30 days | Moderate |
| Long-term | >30 days | Higher |

### 3. Active vs Non-Active
- **Active devices** depend on an energy source (electrical, hydraulic, pneumatic). Active devices used to diagnose, monitor, or treat critical conditions carry higher risk.
- **Non-active devices** rely on gravity or the body's own energy.

### 4. Intended Purpose
The manufacturer's stated intended purpose is primary. Classification follows the riskiest intended use where multiple uses apply.

### 5. Anatomical Location
Devices in contact with the central nervous system, cardiovascular system, or used in blood transfusion carry higher risk.

## Multiple Rules — Highest Class Applies

If a device falls under multiple classification rules simultaneously, the **highest resulting class applies**.

## Classification Process

1. **Define the intended purpose** as stated by the manufacturer — this is the starting point
2. **Apply Annexure 1 rules** from the DGDA Registration Guidelines
3. **Identify all applicable rules** — a device may trigger multiple rules
4. **Assign the highest class** indicated by any applicable rule
5. **Document the classification rationale** — this must be included in the registration dossier

:::tip When in Doubt, Classify Higher

DGDA guidance supports a conservative approach. If a device could fall in Class B or C under different interpretations, classify as Class C. The rationale:
- Registering a higher-class device as lower class = compliance violation and enforcement risk
- Registering a lower-class device as higher class = wasted registration resources but no regulatory risk

Document your classification rationale clearly in the dossier to support the classification chosen.
:::

## IVD Classification

IVD devices follow separate classification rules within the same A–D framework, based on:
- **User type** — professional laboratory use vs lay/self-testing
- **Clinical impact** — consequence of an incorrect test result for individual patient
- **Public health significance** — whether an incorrect result could have population-level consequences (e.g., blood screening)

| IVD Class | Typical Examples |
|-----------|----------------|
| A | General lab instruments (centrifuges, pipettes), culture media, general staining reagents |
| B | Pregnancy tests, blood glucose self-test meters, urine test strips |
| C | HIV confirmatory tests, hepatitis B surface antigen, PSA tests, rubella IgG |
| D | Blood donor screening for HIV, hepatitis C, West Nile virus, syphilis |

## Special Cases

- **Combination products**: Classified based on the principal action component. If uncertain, seek DGDA determination.
- **Software**: Classified within A–D framework based on clinical function and risk of the software's output. See [Software & IVD Classification](/classification/software-ivd).
- **Accessories**: Classified independently based on their own risk profile, not necessarily the same class as the device they accompany.
- **Systems and procedure packs**: May be eligible for grouped registration. See [Guidance & Resources](/guidance-resources/overview) for grouping rules.

Accessories: Classified independently based on their own risk profile. If an accessory is critical to a device's essential function, it may be classified in the same class as the principal device or higher, depending on the risk assessment.

Example: A sterile introducer sheath for a Class D catheter may itself be classified as Class C or D if its failure could compromise the device's safety.
