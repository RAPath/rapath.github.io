---
id: ivd-classification-rules
title: Classification rules 1–7
sidebar_label: Classification rules 1–7
sidebar_position: 5
tags: [ivdr, classification, annex-viii]
---

# IVDR classification rules 1–7

:::note Regulatory basis
**IVDR 2017/746, Annex VIII**. Seven rules classify IVDs based on the risk posed by the diagnostic information they generate, the severity of conditions they detect, and the vulnerability of the populations they serve.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## The IVDR classification logic

Unlike MDR's 22 rules — which focus heavily on physical device characteristics — IVDR classification focuses on **what information the test provides** and **what happens if it is wrong**. The key factors are:

- **Severity of the condition** being diagnosed or monitored
- **Risk of transmission** (for infectious disease tests)
- **Vulnerability of the intended population** (self-test users, blood donors, etc.)
- **Impact on individual clinical decisions** vs. population-level screening
- Whether the device is a **companion diagnostic**

As with MDR, where more than one rule applies, the **highest resulting class** prevails.

---

## Rule 1 — Class D (highest risk)

**Class D** IVDs are those whose failure could cause **life-threatening harm** directly, or could allow life-threatening conditions to go undetected in circumstances where timely detection is critical.

Rule 1 classifies as **Class D** any IVD intended to be used for:

- Detection or confirmation of the presence of, or exposure to, an agent of a **transmissible spongiform encephalopathy (TSE)** such as CJD
- Detection or confirmation of the presence of, or exposure to, **HIV-1, HIV-2, HTLV-I, HTLV-II** (confirmation / supplemental assay)
- **Nucleic acid amplification testing (NAT)** for HIV, HBV, HCV, HTLV, when used in blood, blood component, cell, tissue, or organ donation screening
- Detection of **hepatitis B, hepatitis C, HTLV** where used as a primary screen in donation settings
- Blood **grouping** (ABO system, Rh system, Kell, Duffy, Kidd) and other red cell antigen and antibody testing used prior to transfusion or for compatibility testing

### Why Class D for blood group typing?

A transfusion of incompatible blood can be rapidly fatal. ABO/Rh errors in donor or patient testing carry catastrophic consequences. The EU reference laboratory review requirement for Class D provides an additional verification layer for these critical assays.

---

## Rule 2 — Class C (medium-to-high risk)

**Class C** covers IVDs where errors could lead to **dangerous clinical decisions** for individual patients, though not necessarily with the immediate life-threatening consequences of Class D.

Rule 2 classifies as **Class C** IVDs intended for:

- Detection of **sexually transmitted infections** (e.g. syphilis, chlamydia, gonorrhoea, HSV)
- Detection of **infectious agents** such as rubella, toxoplasma, CMV, EBV — particularly relevant in pregnancy
- Testing for **oncology markers** directly influencing treatment decisions (e.g. PSA, CEA, CA-125, HER2 status)
- **HLA typing** (human leukocyte antigen) for histocompatibility in transplantation
- **Companion diagnostics** — IVDs that identify patients eligible for a specific targeted therapy
- Testing to determine nutritional or metabolic status with clinical significance (e.g. folate, vitamin B12 in clinical contexts)
- **Blood glucose monitoring** devices (including self-monitoring blood glucose / SMBG)
- **HbA1c** assays
- **Troponin** and other cardiac biomarkers
- **Near-patient coagulation** (e.g. INR / PT for anticoagulation monitoring)
- Screening tests for **infectious disease** not covered by Rule 1
- **Genetic testing** used to predict disease predisposition or hereditary conditions
- Prenatal screening tests for genetic conditions
- **Self-test** versions of any Class D IVD (a self-test format of a Class D analyte is Class C, not D)

---

## Rule 3 — Class B (low-to-medium risk)

**Class B** covers IVDs that support clinical decisions, but where the consequences of errors — while clinically significant — are unlikely to cause life-threatening harm in most circumstances.

Rule 3 classifies as **Class B** IVDs that are not covered by Rules 1, 2, 4, 5, 6, or 7, and which provide information that is clinically meaningful.

Most **routine diagnostic tests** fall here:
- Routine **haematology** (FBC, differential, coagulation screening for non-near-patient use)
- Routine **clinical chemistry** (liver function, kidney function, thyroid function, lipid panels)
- **General serology** not covered by Class C or D
- **Urinalysis** (dipstick, microscopy)
- **Allergy testing** panels (general IgE)
- **Tumour markers** used for monitoring (not diagnosis of therapy-linked targets)
- **Drug of abuse testing** in clinical (not forensic) settings
- Most **microbiology culture media** and identification systems

---

## Rule 4 — Class A (lowest risk)

**Class A** covers IVDs where errors are **unlikely to directly affect clinical decision-making** about individual patients — typically because the output is not a direct patient result, or is so far upstream in the testing process that multiple other checks exist.

Rule 4 classifies as **Class A** any IVD that is:

- Intended only for **quality control purposes** without a specific quantitative or qualitative claim related to patient diagnosis
- A **general laboratory instrument or equipment** (not specifically an IVD by itself)
- A **specimen receptacle** (blood collection tubes, urine cups, swabs — unless they contain additives that specifically affect the analyte)
- A **buffer, diluent, or wash solution** of a general nature
- A **general histological stain** not specific to a diagnostic target
- A **calibrator or control material** for use with Class A devices only

---

## Rule 5 — Instruments: assigned to Class A

Instruments — hardware components of IVD systems — that are not specific to any particular analyte and are used for general IVD purposes are **Class A** unless the instrument is specifically designed and used exclusively with a Class B, C, or D assay, in which case it takes the class of the highest-class assay it is intended to be used with.

---

## Rule 6 — Self-tests

**Self-tests** are IVDs intended to be used by laypersons, without the interpretation of a healthcare professional. The classification of a self-test is:

- If the analyte would be **Class D** when used professionally → **Class C** as a self-test
- If the analyte would be **Class C** → remains **Class C** as a self-test
- If the analyte would be **Class B** → elevated to **Class C** as a self-test (due to increased risk of user error and misinterpretation)
- If the analyte would be **Class A** → **Class B** as a self-test

This upward reclassification reflects the greater inherent risk when tests are performed by lay users without professional oversight.

Self-test examples: home pregnancy tests (Class C), home glucose monitors (Class C), OTC HIV tests (Class C as self-test, vs Class D for blood bank screening).

---

## Rule 7 — Near-patient testing

**Near-patient testing (NPT)** — also called point-of-care testing (POCT) — is IVD testing performed outside a traditional laboratory, typically at or near the site of patient care. Under Rule 7:

- Near-patient tests are classified according to the **same rules as laboratory tests** for that analyte
- There is no automatic upward reclassification for near-patient format alone

However, near-patient tests may still be Class C (e.g. bedside troponin, near-patient INR) based on the analyte under Rule 2.

---

## Applying the rules: worked examples

| Device | Applicable rule | Class |
|---|---|---|
| Blood collection tube (EDTA) | Rule 4 | A |
| Clinical chemistry analyser (multi-parameter) | Rule 5 | A (instrument) / B (assay) |
| Urine dipstick (general urinalysis) | Rule 3 | B |
| CRP point-of-care test at clinical threshold | Rule 2 | C |
| Blood glucose self-monitoring kit | Rules 2 + 6 | C |
| Home HIV screening test (self-test) | Rules 1 + 6 | C (self-test version of D analyte) |
| HIV confirmation (Western blot) | Rule 1 | D |
| ABO blood group typing reagent | Rule 1 | D |
| BRCA companion diagnostic | Rule 2 | C |
| NAT HIV blood screening | Rule 1 | D |

---

## Related pages

- [How classification works](./how-classification-works)
- [Class A · B · C · D — IVDR classes](./ivd-classes)
- [Near-patient & self-test IVDs](/pre-market/special-device-types/near-patient-self-test-ivds)
- [Companion diagnostics](/pre-market/special-device-types/companion-diagnostics)
- [Performance evaluation](/pre-market/clinical-evidence/performance-evaluation)

---

## Official references

| Reference | Description |
|---|---|
| IVDR Annex VIII | Classification rules 1–7 (full text) |
| IVDR Art. 47 | Classification procedure |
| IVDR Art. 5(5) | Self-test and near-patient testing definitions |
| IVDR Art. 100 | EU reference laboratories |
| MDCG 2020-16 | Companion diagnostics guidance |
