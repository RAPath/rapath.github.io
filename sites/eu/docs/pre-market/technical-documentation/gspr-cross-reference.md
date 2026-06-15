---
id: gspr-cross-reference
title: GSPR cross-reference
sidebar_label: GSPR cross-reference
sidebar_position: 4
tags: [mdr, ivdr, technical-documentation, gspr]
---

# GSPR cross-reference table

:::note Regulatory basis
**MDR Annex II, Section 4** and **IVDR Annex II, Section 4**. The GSPR cross-reference table is a mandatory component of technical documentation linking each applicable general safety and performance requirement to the evidence of conformity.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Purpose of the GSPR cross-reference table

The GSPR cross-reference table (sometimes called the GSPR matrix or GSPR checklist) is the **navigation document** of the technical file. It answers, for each of the GSPR in Annex I:

1. Does this requirement apply to this device?
2. If not, why not?
3. If yes, how has the manufacturer demonstrated conformity?
4. What is the documentary evidence?

It allows notified bodies and competent authorities to quickly locate the evidence supporting each GSPR claim without reading the entire technical file.

---

## Required columns

At minimum, the GSPR cross-reference table should contain:

| Column | Description |
|---|---|
| **GSPR reference** | Annex I section number (e.g. §1, §6.1(a), §23.2(b)) |
| **GSPR summary** | Brief description of the requirement |
| **Applicable?** | Yes / No |
| **Justification if N/A** | Brief reason the requirement does not apply (omit if applicable) |
| **Method of demonstration** | How conformity is demonstrated: harmonised standard, CS, or other means |
| **Standard/CS reference** | Specific standard and clause, or CS reference (e.g. EN ISO 14971:2019 §4–9) |
| **Document reference** | Internal document number(s) providing the evidence |

---

## Worked example — partial GSPR table

| GSPR | Summary | Applicable | Method | Standard | Document ref |
|---|---|---|---|---|---|
| §1 | Fundamental safety and performance | Yes | EN ISO 14971:2019 | Risk management | RM-001 Rev C |
| §2 | Risk management | Yes | EN ISO 14971:2019 | Risk management | RM-001 Rev C |
| §6.1 | Material biocompatibility | Yes | EN ISO 10993-1:2018 | Biological evaluation | BE-002 Rev A |
| §7 | Infection / microbial contamination | Yes (sterile device) | EN ISO 11135:2014 | EtO sterilisation validation | STER-003 Rev B |
| §8 | Medicinal substance incorporated | No | N/A — no incorporated medicinal substance | — | — |
| §12 | Measuring function | No | N/A — device has no measuring function | — | — |
| §17 | Self-test / POCT design | Yes | IEC 62366-1:2015+A1:2020 | Usability engineering | USE-007 Rev A |
| §18 | EMC | Yes | EN 60601-1-2:2015 | EMC testing | EMC-010 Rev A |
| §23.2 | Labelling requirements | Yes | EN ISO 15223-1:2021 | Labelling standard | LBL-001 Rev D |

---

## Handling partial applicability

Some GSPR have multiple sub-sections — not all may apply. Document at the **appropriate level of granularity**:

- If an entire GSPR is not applicable: mark the GSPR as N/A with a brief justification
- If only some sub-sections of a GSPR apply: document each sub-section separately
- Avoid blanket "N/A" without justification — this is a common deficiency finding in notified body conformity assessment reviews and can delay the assessment process.

---

## Non-harmonised standards

If using a **non-harmonised standard** (an ISO standard not listed in the Official Journal of the EU as harmonised under MDR/IVDR):

- Note the standard clearly in the table
- Supplement with a justification explaining how the standard adequately addresses the GSPR requirement
- A non-harmonised standard does not create a presumption of conformity — the manufacturer bears the full burden of demonstrating GSPR compliance

---

## Alternative methods (no standard available)

Where no standard covers the GSPR requirement for the specific device:

- Describe the alternative method used (test protocol, analysis, literature review, etc.)
- Reference the specific test report or analysis document
- Explain why this method is at least as rigorous as the standard approach

---

## Maintaining the GSPR table

The GSPR cross-reference table is a **living document**. It must be reviewed and updated:

- When the **device design changes** (even minor changes may affect GSPR applicability)
- When **new or revised harmonised standards** are published
- When **post-market data** (complaints, vigilance reports, PMCF/PMPF data) suggests a GSPR has not been fully met
- On a **periodic basis** as part of the broader technical documentation review

All updates must go through the change control process and be recorded in the document revision history.

---

## Related pages

- [GSPR overview — Annex I](/pre-market/gspr/gspr-overview)
- [GSPR checklist](/pre-market/gspr/gspr-checklist)
- [Technical documentation — overview](./technical-documentation-overview)
- [Risk management](./risk-management)
- [Post-market data in technical documentation](./post-market-data-in-tech-doc)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex II, Section 4 | GSPR cross-reference requirement |
| IVDR Annex II, Section 4 | IVDR equivalent |
| MDR Annex I | Full GSPR text |
| MDR Art. 8 | Presumption of conformity — harmonised standards |
| Official Journal of the EU | List of harmonised standards under MDR |
| MDCG 2020-6 | Technical documentation template guidance |
