---
id: risk-management
title: Risk management (ISO 14971)
sidebar_label: Risk management (ISO 14971)
sidebar_position: 5
tags: [mdr, ivdr, technical-documentation, risk-management, iso-14971]
---

# Risk management — ISO 14971

:::note Regulatory basis
Risk management is required by **GSPR §1 and §2 of MDR Annex I** and **IVDR Annex I**. The harmonised standard **EN ISO 14971:2019** provides the implementation framework and creates a presumption of conformity with the relevant GSPR when applied.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Why risk management is central to MDR/IVDR

Risk management is not one element among many in the technical documentation — it is the **structural backbone** of conformity. Almost every other GSPR is demonstrated through the risk management process:

- GSPR §1 (fundamental safety): residual risk must be acceptable
- GSPR §2 (risk management): ISO 14971 process must be followed
- GSPR §6–22 (specific design requirements): each is essentially a risk control arising from identified hazards

A device cannot be CE marked without a complete, current, and credible risk management file.

---

## EN ISO 14971:2019 — the framework

The current version of the standard is **EN ISO 14971:2019** (identical to ISO 14971:2019 with a harmonisation foreword). It replaces EN ISO 14971:2012. Key change: the 2019 version removes the "Z annexes" that previously allowed the standard to deviate from EU Directive requirements — the 2019 version fully aligns with MDR/IVDR.

### The ISO 14971 process at a glance

```
1. Risk management plan
        ↓
2. Hazard identification
        ↓
3. Risk estimation (probability × severity)
        ↓
4. Risk evaluation (against acceptability criteria)
        ↓
5. Risk control (hierarchy: design → protective measures → information)
        ↓
6. Residual risk evaluation
        ↓
7. Benefit-risk analysis (overall residual risk vs. clinical benefit)
        ↓
8. Risk management report
        ↓
9. Production and post-production information (lifecycle monitoring)
```

---

## 1. Risk management plan

The **risk management plan** documents the scope, activities, and criteria for the entire risk management process for a specific device. It must include:

- Scope: which device(s) and lifecycle phases are covered
- Responsibilities: who is accountable for each risk management activity
- Risk acceptability criteria: quantitative or qualitative criteria defining acceptable risk (must be defined before risk estimation begins)
- Methods for estimating probability and severity of harm
- Criteria for determining when a benefit-risk analysis is required

Risk acceptability criteria should be justified — they cannot simply be whatever makes the risks look acceptable. Typically derived from:
- Acceptable risk levels in comparable devices or clinical contexts
- Regulatory standards and guidance
- Clinical literature on acceptable harm rates for the indication

---

## 2. Hazard identification

Systematic identification of all **hazards** associated with the device — anything that could cause harm. Techniques include:

- Preliminary hazard analysis (PHA)
- Failure mode and effects analysis (FMEA) — for hardware, software, and process
- Fault tree analysis (FTA)
- Hazard operability study (HAZOP)

Hazards must cover:
- **Intended use** conditions — normal and reasonably foreseeable
- **Foreseeable misuse** — including use outside instructions, by unintended users, or in unintended environments
- **Reasonably foreseeable sequences or combinations of events** that could lead to harm

---

## 3 & 4. Risk estimation and evaluation

For each hazard, estimate:
- **Probability of occurrence** of the hazardous situation
- **Severity of harm** if the hazardous situation leads to harm

Risk = P(harm occurring) × Severity

Compare the estimated risk against the acceptability criteria in the risk management plan:
- **Acceptable as-is**: no risk control needed (document rationale)
- **Unacceptable**: risk controls must be applied
- **ALARP zone**: risk is acceptable if further reduction is not practicable — must document why

---

## 5. Risk controls — the hierarchy

MDR GSPR §2 specifies a mandatory priority order for risk controls:

| Priority | Control type | Examples |
|---|---|---|
| **1st** | Inherently safe design and manufacture | Eliminate the hazard; change material; redesign |
| **2nd** | Protective measures | Interlocks, alarms, protective barriers |
| **3rd** | Information for safety | Warnings, contraindications, training requirements in IFU |

Manufacturers cannot rely solely on labelling when design solutions are practicable. The selection of lower-priority controls must be justified in the risk management file.

Each risk control must be:
- Implemented
- Verified as effective
- Assessed for introduction of **new hazards** (risk controls can introduce new risks)

---

## 6. Residual risk evaluation

After all risk controls are implemented, evaluate each **residual risk**:
- Is the residual risk within the acceptance criteria?
- Does the overall residual risk benefit from the clinical benefit of the device?

If any residual risk is unacceptable, further risk controls must be sought.

---

## 7. Benefit-risk analysis

The **overall benefit-risk analysis** considers the totality of residual risks against the clinical benefit of the device. This is one of the most challenging aspects of MDR compliance because:

- The clinical benefit must be **based on clinical evidence**, not assumption
- The comparison must be made from the **patient's perspective**
- The analysis must be **quantitative where possible**, otherwise qualitative with justification

The benefit-risk analysis is also a core component of the **clinical evaluation report** — the two documents must be consistent.

---

## 8. Risk management report

At the end of the process (before CE marking), a **risk management report** is prepared confirming:
- The risk management plan was followed
- The overall residual risk is acceptable
- Methods for obtaining production and post-production information are in place

The risk management report is included or referenced in the technical documentation.

---

## 9. Production and post-production — the lifecycle link

Risk management does not end at CE marking. ISO 14971 §10 requires:

- A **system for collecting and reviewing production and post-production information**
- Review of information from: complaints, vigilance reports, PMS data, scientific literature, PMCF/PMPF
- Assessment of whether the information affects the risk management conclusions
- Updating the risk management file when new hazards or risks are identified

This creates the **loop** between pre-market risk management and post-market surveillance — the risk management file is updated as real-world data accumulates.

---

## Risk management file — document structure

The risk management file is typically structured as:

1. Risk management plan
2. Intended use and reasonably foreseeable misuse description
3. Hazard identification records (FMEA, PHA, etc.)
4. Risk estimation and evaluation records
5. Risk control records (implementation and verification)
6. Residual risk evaluation
7. Benefit-risk analysis summary
8. Risk management report
9. Post-production information review records

---

## Common risk management failures in notified body reviews

| Finding | Root cause |
|---|---|
| Risk acceptability criteria defined after risks were estimated | Criteria must be set before estimation |
| "Reasonably foreseeable misuse" not addressed | Only intended use considered |
| Risk controls not verified | FMEA entries without verification evidence |
| New hazards from risk controls not assessed | Secondary hazard analysis missing |
| Benefit-risk not linked to clinical evidence | Benefit stated as assumed, not evidenced |
| Risk management file not updated post-market | Static file not reflecting PMS findings |

---

## Related pages

- [Technical documentation — overview](./technical-documentation-overview)
- [GSPR overview](/pre-market/gspr/gspr-overview)
- [Post-market data in technical documentation](./post-market-data-in-tech-doc)
- [Clinical evaluation](/pre-market/clinical-evidence/clinical-evaluation-overview)
- [Post-market surveillance requirements](/post-market/post-market-surveillance/pms-requirements)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex I §1, §2 | Risk management GSPR |
| EN ISO 14971:2019 | Risk management for medical devices |
| ISO/TR 24971:2020 | Guidance on application of ISO 14971 |
| MDR Annex II, Section 5 | Risk management in technical documentation |
| MDCG 2020-6 | Technical documentation templates |

Complete the risk controls section with: '1. Design changes: modify the design to eliminate or reduce hazards 2. Protective measures: engineering controls that protect the patient/user if hazard cannot be eliminated by design 3. Information for users: warnings, instructions, training, supervision — only when design and protective measures are insufficient 4. Post-production surveillance: monitoring of devices in use to detect unforeseen hazards Each risk must be addressed using the highest applicable priority before moving to the next level. Documentation must justify why a lower priority was chosen if applicable.'
