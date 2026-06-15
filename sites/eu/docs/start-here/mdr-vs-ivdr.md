---
id: mdr-vs-ivdr
title: MDR vs IVDR — which applies?
sidebar_label: MDR vs IVDR — which applies?
sidebar_position: 4
tags: [mdr, ivdr, fundamentals, borderline]
---

# MDR vs IVDR — which applies?

:::note
**Regulatory basis** - **MDR** = Regulation (EU) 2017/745 | **IVDR** = Regulation (EU) 2017/746. Both regulations are mutually exclusive — a product is governed by one or the other, never both simultaneously.
:::

:::warning
**Disclaimer** - This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## The fundamental split

| Regulation | Covers |
|---|---|
| **MDR 2017/745** | Medical devices, accessories to medical devices, Annex XVI non-medical-purpose devices |
| **IVDR 2017/746** | In vitro diagnostic medical devices and their accessories |

The split is determined entirely by the product's **intended purpose** and **mode of use**: is the examination performed *in vitro* on a human-derived specimen, or is the device used in some other way?

---

## The primary test

Ask this question first:

> **Is the device intended to examine a specimen derived from the human body, outside the body, to provide diagnostic or monitoring information?**

| Answer | Regulation |
|---|---|
| Yes — in vitro examination of human-derived specimens | **IVDR 2017/746** |
| No | **MDR 2017/745** (if it is a medical device at all) |

---

## Decision flowchart

```
Is the product intended for use in human beings?
│
├─ NO → Not an MDR/IVDR medical device
│
└─ YES → Does it act principally by pharmacological/immunological/metabolic means?
          │
          ├─ YES → Medicinal product (Directive 2001/83/EC)
          │
          └─ NO → Is it used in vitro on human-derived specimens
                   to provide diagnostic/monitoring information?
                   │
                   ├─ YES → IVDR 2017/746
                   │
                   └─ NO → MDR 2017/745
```

---

## Common scenarios

### Clearly MDR

| Product | Reason |
|---|---|
| Hip implant | Implanted in the body |
| Insulin pump | Delivers therapy in the body |
| Cardiac monitor (wearable) | Measures in vivo physiological signals |
| MRI scanner | Imaging performed on the body |
| Surgical robot | Used on the body |
| Dermal filler | Injected into the body (Annex XVI) |
| Contact lens (cosmetic) | Used on the body (Annex XVI) |
| Wound dressing | Applied to the body |
| SaMD for radiology image analysis | Analyses in vivo imaging data |

### Clearly IVDR

| Product | Reason |
|---|---|
| Blood glucose test strip | In vitro examination of blood specimen |
| PCR assay for infectious disease | In vitro examination of patient sample |
| BRCA genetic test | In vitro examination of tissue/blood |
| Blood typing reagent | In vitro compatibility testing |
| Urine pregnancy test | In vitro examination of urine specimen |
| Clinical chemistry analyser | Processes in vitro blood/urine samples |
| Companion diagnostic | Identifies patients from specimen |
| Histopathology analysis software | Examines tissue specimens in vitro |

### Borderline — requires careful analysis

| Product | Issue | Resolution |
|---|---|---|
| Point-of-care blood glucose meter | In vitro, but used at bedside | **IVDR** — near-patient testing is still in vitro |
| Continuous glucose monitor (CGM) | Sensor worn on/in body; no specimen extraction | **MDR** — in vivo interstitial measurement |
| NGS sequencing platform | General-purpose instrument with IVD assay kits | **IVDR** for the IVD-intended configuration as a system |
| Smart toilet analysing urine | Wellness vs diagnostic claims | If diagnostic disease claims: **IVDR**; wellness only: likely neither |
| Microbiome analysis kit | Examines stool/saliva | If disease diagnosis/monitoring claims: **IVDR** |

---

## Key pathway differences

| Topic | MDR | IVDR |
|---|---|---|
| Classification | Class I · IIa · IIb · III (Rules 1–22) | Class A · B · C · D (Rules 1–7) |
| Notified body required? | No for Class I (except Is/Im/Ir); Yes for IIa+ | No for Class A; Yes for most B, C, D |
| Clinical/performance evidence | Clinical evaluation (Art. 61, Annex XIV) | Performance evaluation (Art. 56, Annex XIII) |
| Post-market follow-up | PMCF | PMPF |
| PSUR required | Class IIb, III | Class C, D |
| Companion diagnostic rules | N/A | Class C minimum; EMA consultation required |

---

## When you are still unsure

Consult the **MDCG Borderline and Classification Working Group** guidance. Key documents:

- **MDCG 2022-5** — Borderline manual between MDR and other legislation
- **MDCG 2019-11** — Software qualification and classification

National competent authorities can provide formal opinions. These are not binding EU-wide but are a recognised route to regulatory certainty.

---

## Related pages

- [What is a medical device?](./what-is-a-medical-device)
- [What is an IVD?](./what-is-an-ivd)
- [What is not a medical device?](./what-is-not-a-medical-device)
- [Classification — MDR rules 1–22](/pre-market/classification/mdr-classification-rules)
- [Classification — IVDR rules 1–7](/pre-market/classification/ivd-classes)

---

## Official references

| Reference | Description |
|---|---|
| MDR Art. 2(1) | Medical device definition |
| IVDR Art. 2(2) | IVD definition |
| MDR Art. 1(8) | Interaction with medicinal product rules |
| MDCG 2022-5 | Borderline product guidance |
| MDCG 2019-11 | Software qualification guidance |

Complete the guidance list: 'MDCG 2022-5 — Borderline manual between MDR and other legislation; MDCG 2019-11 — Software qualification and classification; MDCG 2022-1 — Borderline between medical devices and biocidal products; MDCG 2021-6 — Borderline between medical devices and cosmetics. For additional clarification, contact your national competent authority or consult a qualified regulatory specialist.'

Complete the sentence: 'National competent authorities can provide binding borderline decisions for their jurisdiction. If you remain uncertain after consulting MDCG guidance, contact your national competent authority or seek formal classification advice from a regulatory consultant.'
