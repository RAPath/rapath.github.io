---
sidebar_position: 4
title: Risk management (ISO 14971)
description: >
  How to apply ISO 14971 risk management to satisfy Essential Requirement 2 of the UK MDR 2002 —
  the risk management plan, hazard identification, risk estimation, risk controls, residual risk
  evaluation, and the lifecycle requirement to keep the risk file updated.
tags: [uk-mdr, risk-management, iso-14971, technical-file, pre-market]
---

:::note[Regulatory basis]
Risk management is mandated by **ER 2 of Schedule 1** (and the equivalent in Schedule 1A for IVDs) of the UK MDR 2002. ISO 14971:2019 is a UK-designated standard whose application provides a presumption of conformity with ER 2. The risk management file forms a core section of the technical file.
:::

---

## Why risk management is foundational

Under UK MDR 2002, there is no separate risk assessment requirement — risk management is woven into the Essential Requirements. ER 2 mandates the three-level risk hierarchy (design out, guard, warn), ER 1 requires acceptable benefit-risk balance, and ER 6 requires acceptable side effects. **ISO 14971 provides the systematic process** to satisfy all of these.

A risk management file that is superficial, undated, or disconnected from design and post-market data is one of the most common UKAB and MHRA findings. Robust risk management is not bureaucracy — it is the evidentiary backbone of every conformity assessment.

---

## ISO 14971:2019 — the standard

**ISO 14971:2019** (*Medical devices — Application of risk management to medical devices*) defines the risk management process that manufacturers must apply. It is supported by **ISO/TR 24971:2020** (guidance on the application of ISO 14971) and **IEC 62366-1** (usability engineering — addresses use-related risks).

ISO 14971 applies throughout the **entire device lifecycle** — from design through post-market.

---

## The risk management process

### Step 1: Risk management plan

Before any risk management activity begins, the manufacturer establishes a **Risk Management Plan** that defines:

- Scope of risk management (what device, what uses, what lifecycle phases)
- Responsibilities and authorities
- Risk management activities and their timing
- Methods for risk estimation (qualitative, semi-quantitative, quantitative)
- Criteria for risk acceptability — what is the threshold for acceptable probability and severity?
- How to evaluate the overall residual risk
- How post-market information will feed back into the risk management process

### Step 2: Intended use and intended users

The risk management process begins with a precise definition of:

- The device's **intended use** and **intended purpose**
- The **intended users** (medical professionals, lay persons, trained operators)
- The **use environment** (hospital ICU, home use, ambulance, etc.)
- The **patient population** (including vulnerable groups — paediatric, elderly, immunocompromised)
- **Reasonably foreseeable misuse** — uses beyond the intended purpose that are foreseeable given the device type and context

### Step 3: Hazard identification

A **hazard** is a potential source of harm. Hazard identification systematically catalogues all hazards associated with the device, covering:

- **Energy hazards** (electrical, thermal, ionising radiation, mechanical)
- **Biological hazards** (biocompatibility, infection, contamination, sterility failure)
- **Environmental hazards** (EMI, temperature sensitivity, vibration)
- **Usability hazards** (use errors — see IEC 62366-1)
- **Software hazards** (software failures — see IEC 62304)
- **Chemical hazards** (leachables, toxic materials, degradation products)
- **Failure mode hazards** (what happens when the device fails in foreseeable ways?)

Tools commonly used: Fault Tree Analysis (FTA), Failure Mode and Effects Analysis (FMEA), Hazard and Operability Study (HAZOP).

### Step 4: Risk estimation

For each hazard and hazardous situation, estimate:

- **Probability of harm** — how likely is it that the hazard leads to harm?
- **Severity of harm** — how serious is the harm if it occurs? (Often scored: negligible, minor, serious, critical, catastrophic)
- **Risk** = f(probability, severity)

Risk estimation may be qualitative (high/medium/low), semi-quantitative (numeric scores), or quantitative (numeric probabilities and severities). The method chosen must be defined in the Risk Management Plan and applied consistently.

### Step 5: Risk evaluation

Each estimated risk is evaluated against the **risk acceptability criteria** defined in the Risk Management Plan:

- **Acceptable** — risk is within tolerable limits; no further action required beyond monitoring
- **ALARP region** — risk is as low as reasonably practicable; consider whether further reduction is practicable
- **Unacceptable** — risk exceeds acceptability threshold; risk controls are mandatory

### Step 6: Risk control

For unacceptable and ALARP risks, implement **risk control measures** following the ER 2 hierarchy:

1. **Inherent safe design** — eliminate or reduce the hazard through design
2. **Protective measures** — guards, alarms, interlocks
3. **Information for safety** — warnings in IFU, training requirements

After implementing each risk control:
- Verify it was correctly implemented
- Estimate the residual risk after control
- Assess whether the control itself introduces new hazards (risk control secondary risks)

### Step 7: Residual risk evaluation

After all risk controls are applied, evaluate the **residual risk** for each hazard:

- Is the residual risk acceptable against the acceptability criteria?
- If not, are further risk controls feasible?
- If residual risk cannot be reduced below the threshold, can it be outweighed by the medical benefit?

### Step 8: Overall residual risk evaluation

Evaluate the **aggregate residual risk** from all sources:

- Is the overall residual risk acceptable?
- Does the device's medical benefit outweigh the aggregate residual risk?
- Does the clinical evaluation data support the benefit-risk conclusion?

This is where the risk management file formally connects to the clinical evaluation report — the benefit-risk balance must be supported by clinical evidence, not just risk estimation.

### Step 9: Risk management report

The **Risk Management Report** summarises:

- Scope of risk management activities
- Confirmation that the Risk Management Plan was followed
- Confirmation that overall residual risk is acceptable
- Conclusion on overall benefit-risk balance

The report must be signed off by an authorised person within the manufacturer's organisation.

---

## Post-market updates to the risk file

ISO 14971 is explicit: risk management is a **lifecycle activity**. The risk management file must be updated when:

- Post-market surveillance data reveals new hazards or higher-than-estimated risk probabilities
- Vigilance reports indicate a harm that was not anticipated or underestimated
- PMCF/PMPF data reveals new safety concerns
- A field safety corrective action is taken (the FSCA root cause should feed back into the hazard analysis)
- A design change is made (the change must be assessed for new hazards)

An undated risk management file that has not been updated since market launch is a major UKAB and MHRA finding.

---

## Usability and use-related risks (IEC 62366-1)

**Use errors** — the most common cause of device-related adverse events in practice — are addressed through **usability engineering** per **IEC 62366-1**. The usability engineering file feeds into the risk management file:

- Use-related hazards are identified through task analysis and contextual inquiry
- Mitigation through interface design, labelling, and training
- Residual use-related risks evaluated through formative and summative usability studies

For devices intended for lay users (self-test IVDs, home-use devices), usability engineering is especially critical.

---

## Risk management for software (IEC 62304)

Software risks are managed through the integration of IEC 62304 (software lifecycle) with ISO 14971. The software hazardous situations identified in the risk management file drive the software safety classification under IEC 62304 (Class A, B, or C), which in turn determines the rigour of software lifecycle processes required.

---

## Common risk management failures identified by UKABs

1. **Generic hazard lists** — copied from templates, not specific to the device
2. **No justification for risk acceptability criteria** — arbitrary thresholds without rationale
3. **Risk controls not verified** — controls listed but not confirmed as implemented and effective
4. **No post-market update** — risk file frozen at the pre-market stage
5. **Disconnected from clinical evaluation** — benefit-risk conclusion in the CER contradicts the risk file
6. **Use-related risks not addressed** — no usability data; no reference to IEC 62366-1
7. **Software hazards missing** — software FMEA absent or superficial

---

## Related pages

- [Essential Requirements — overview](../essential-requirements/overview)
- [General requirements — ER 1–6](../essential-requirements/general-requirements)
- [Technical documentation overview](./overview)
- [Clinical / performance evaluation summary](./clinical-evaluation-summary)
- [Post-market data in the technical file](./post-market-data)

---

## Official references

| Reference | Description |
|---|---|
| UK MDR 2002, Schedule 1, ER 2 | Risk management Essential Requirement |
| ISO 14971:2019 | Risk management for medical devices |
| ISO/TR 24971:2020 | Guidance on application of ISO 14971 |
| IEC 62366-1:2015 + A1:2020 | Usability engineering — use-related risk |
| IEC 62304:2006 + A1:2015 | Software lifecycle — software risks |
| MHRA: Designated standards | ISO 14971 is a UK-designated standard |
