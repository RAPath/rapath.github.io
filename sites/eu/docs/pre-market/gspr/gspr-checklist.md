---
id: gspr-checklist
title: GSPR checklist & compliance
sidebar_label: Checklist & compliance
sidebar_position: 5
tags: [mdr, ivdr, gspr, checklist, technical-documentation]
---

# GSPR checklist & compliance

:::note Applies to
Both **MDR 2017/745** and **IVDR 2017/746**. The GSPR checklist (cross-reference table) is a mandatory component of the technical documentation under Annex II of both regulations.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## The GSPR cross-reference table

Manufacturers must prepare a **GSPR cross-reference table** — a structured document that maps each applicable GSPR to the evidence of compliance. This is required by MDR Annex II, Section 4, and is a key document reviewed by notified bodies.

The table must show, for each GSPR:

| Column | Content |
|---|---|
| GSPR number | e.g. GSPR 1, GSPR 6, GSPR 23.2(a) |
| Applicability | Applicable / Not applicable |
| Justification if not applicable | Brief rationale (e.g. "Device is not sterile — GSPR 7 on sterility not applicable") |
| Method of demonstration | Harmonised standard / Common Specification / Other means |
| Standard or CS reference | e.g. EN ISO 14971:2019, EN ISO 10993-1:2018 |
| Document reference | Internal document number or reference to test report, clinical evidence, etc. |

---

## Checklist — MDR Annex I GSPR applicability by device type

Use this table as a starting point. Applicability depends on the specific device — confirm for each product individually.

### Chapter I — General requirements

| GSPR | Requirement summary | Passive device | Active device | Implantable | Software | IVD (IVDR) |
|---|---|---|---|---|---|---|
| 1 | Fundamental safety and performance | ✅ | ✅ | ✅ | ✅ | ✅ |
| 2 | Risk management | ✅ | ✅ | ✅ | ✅ | ✅ |
| 3 | Performance under transport/storage conditions | ✅ | ✅ | ✅ | ✅ | ✅ |
| 4 | Design, manufacture, packaging | ✅ | ✅ | ✅ | ✅ | ✅ |
| 5 | State of the art | ✅ | ✅ | ✅ | ✅ | ✅ |

### Chapter II — Design & manufacture

| GSPR | Requirement summary | Passive device | Active device | Implantable | Software | IVD (IVDR) |
|---|---|---|---|---|---|---|
| 6 | Chemical, physical, biological properties | ✅ | ✅ | ✅ | ❌ | ✅ |
| 7 | Infection and microbial contamination | Depends on sterility | ✅ | ✅ | ❌ | ✅ |
| 8 | Devices with medicinal substance | Only if applicable | Only if applicable | Only if applicable | ❌ | ❌ |
| 9 | Devices with human/animal tissue | Only if applicable | Only if applicable | Only if applicable | ❌ | Only if applicable |
| 10 | CMR substances and endocrine disruptors | Depends on materials | Depends on materials | ✅ | ❌ | Depends on materials |
| 11 | Interaction with the environment | ✅ | ✅ | ✅ | ✅ | ✅ |
| 12 | Measuring function | Only if measuring function | Only if measuring function | Only if measuring function | Only if measuring function | ✅ |
| 13 | Protection against radiation | Only if radiation-emitting | ✅ if radiation | Only if radiation | ❌ | ❌ |
| 14 | Active devices — energy sources | ❌ | ✅ | ✅ if active | ✅ if energy source | ❌ |
| 15 | Mechanical risks | ✅ | ✅ | ✅ | ❌ | ✅ |
| 16 | Energy supplied or emitted | ❌ | ✅ | ✅ if active | ❌ | ❌ |
| 17 | Self-test / near-patient testing | ❌ | Only if self-test | ❌ | Only if self-test | ✅ if POCT/self-test |
| 18 | Electromagnetic compatibility | Only if electrical | ✅ | ✅ if active | ✅ | Only if electrical |
| 19–22 | Active and implantable device requirements | ❌ | ✅ | ✅ | ✅ | ❌ |

### Chapter III — Information supplied

| GSPR | Requirement summary | Applies to |
|---|---|---|
| 23.2 | Label requirements | All devices |
| 23.3 | IFU on packaging | All devices |
| 23.4 | IFU content requirements | All devices |

---

## Demonstrating compliance — choosing the right approach

### Priority 1 — Harmonised standards (presumption of conformity)

If a harmonised standard covers the GSPR, use it. The presumption of conformity significantly simplifies notified body assessment. Check the **Official Journal list of harmonised standards** for MDR — not all ISO standards have been harmonised under MDR yet.

:::caution
Not all relevant ISO standards have been formally harmonised under MDR/IVDR. An ISO standard without harmonised status under MDR does **not** create a presumption of conformity — it is still useful as evidence but must be supplemented with additional justification.
:::

### Priority 2 — Common Specifications (CS)

Where the Commission has published CS, compliance is mandatory unless the manufacturer can justify an equivalent or better approach. Check the Official Journal for CS published for your device category.

### Priority 3 — Alternative means

Any scientifically valid approach may be used. Document:
- The rationale for not using a harmonised standard or CS
- The alternative method or test applied
- The results and interpretation
- Why this approach is at least as rigorous as the standard approach

---

## Practical tips for building the GSPR table

1. **Start with the GSPR text** — read every requirement in Annex I before assessing applicability
2. **Work with the intended purpose** — applicability depends entirely on what the device does and for whom
3. **Involve subject matter experts** — biocompatibility (GSPR 6), EMC (GSPR 18), software (GSPR 17/21) require specialist input
4. **Link to actual documents** — the table should reference specific test reports, risk management outputs, and technical files by document number
5. **Keep it current** — the GSPR table must be reviewed and updated when the device changes or when post-market data triggers a review
6. **Version control** — the table is part of the technical documentation and must be under document control

---

## What notified bodies look for

Notified bodies assess the GSPR table as a core part of their technical documentation review. Common findings include:

- GSPR marked "not applicable" without adequate justification
- Non-harmonised standards cited without supplementary justification
- References to outdated versions of standards
- Test reports that do not cover the actual device (wrong specimen, wrong configuration)
- Missing GSPR — especially GSPR 10 (CMR) and GSPR 18 (EMC) for relevant devices
- No update after significant device change

---

## Related pages

- [GSPR overview — Annex I](./gspr-overview)
- [Chapter I — General requirements](./chapter-i-general-requirements)
- [Chapter II — Design & construction](./chapter-ii-design-construction)
- [Chapter III — IFU & labelling](./chapter-iii-ifu-labelling)
- [Technical documentation — GSPR cross-reference](/pre-market/technical-documentation/gspr-cross-reference)
- [Conformity assessment — overview](/pre-market/conformity-assessment/conformity-assessment-overview)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex I | Full GSPR text |
| MDR Annex II, Section 4 | GSPR cross-reference table requirement |
| IVDR Annex I | IVDR GSPR |
| Official Journal of EU | List of harmonised standards under MDR/IVDR |
| MDCG 2022-14 | GSPR guidance |
| MDCG 2019-9 | Summary of safety and clinical performance guidance |

