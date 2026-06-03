---
sidebar_position: 1
title: How classification works
description: >
  How medical device classification works under the UK Medical Devices Regulations 2002 — the
  rule-based system for general devices (Classes I, IIa, IIb, III), active implantable devices
  (AIMD), and IVDs (List A, List B, Self-test, General) — and why classification determines
  everything else.
tags: [uk-mdr, classification, fundamentals, pre-market]
---

:::note[Regulatory basis]
Classification rules for general medical devices are in **Schedule 2** of the UK MDR 2002 (Part I). AIMD classification is in **Part II**. IVD classification is in **Annex II of Part III**. Classification determines the conformity assessment route, whether a UK Approved Body is required, the depth of clinical evidence needed, and post-market obligations.
:::

:::warning[Disclaimer]
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official legislation text and a qualified regulatory professional before making classification decisions.
:::

---

## Why classification matters

Classification is the **first and most consequential** regulatory decision a manufacturer must make. The device's class determines:

- Which **conformity assessment route** applies
- Whether a **UK Approved Body (UKAB)** must be involved — and in what capacity
- The depth of **clinical or performance evidence** required
- **MHRA registration** details and documentation required
- Post-market obligations including **PSUR frequency** and **PMS requirements**
- The scope of **labelling and IFU requirements**

Getting classification wrong has real consequences. Under-classifying a device risks placing an inadequately assessed product on the GB market. Over-classifying wastes resources and delays patient access. MHRA can challenge classification during market surveillance, and UKABs may challenge it during conformity assessment.

---

## Three separate classification systems

UK MDR 2002 contains three separate classification frameworks, one for each Part:

| System | Classes | Device type | Legal basis |
|---|---|---|---|
| **Part I** | Class I, IIa, IIb, III | General medical devices | Schedule 2, UK MDR 2002 |
| **Part II** | AIMD (single category) | Active implantable medical devices | UK MDR 2002 Part II |
| **Part III** | List A, List B, Self-test, General | IVD medical devices | Annex II, UK MDR 2002 Part III |

These systems are separate — a Class IIa general medical device is not equivalent to a List B IVD, even though both require UKAB involvement.

---

## General medical devices — Classes I, IIa, IIb, III

Classification of general medical devices under Part I of UK MDR 2002 is **rule-based**, applying the classification rules in **Schedule 2**. These rules are organised by the device's interaction with the human body.

### The risk hierarchy

| Class | Risk level | UKAB required? | Examples |
|---|---|---|---|
| **Class I** | Lowest risk | No (except sterile, measuring, or reusable surgical instruments) | Bandages, tongue depressors, non-sterile gloves, wheelchairs |
| **Class IIa** | Low-to-medium risk | Yes | Hearing aids, surgical sutures, dental fillings, short-term surgically invasive devices |
| **Class IIb** | Medium-to-high risk | Yes | Ventilators, infusion pumps, long-term implantable devices (non-cardiac) |
| **Class III** | Highest risk | Yes (full assessment) | Coronary stents, hip implants, spinal disc replacements, heart valves |

### Class I sub-categories

Class I is not monolithic. Three sub-categories of Class I device require UKAB involvement for specific aspects of conformity assessment:

| Sub-category | UKAB involvement |
|---|---|
| **Class I (sterile)** — devices placed on the market in a sterile condition | UKAB assesses the sterility aspects only |
| **Class I (measuring)** — devices with a measuring function | UKAB assesses the metrology aspects only |
| **Class Im** — reusable surgical instruments | UKAB assesses the reprocessing aspects only |

Even within these sub-categories, the manufacturer self-declares conformity for aspects not subject to UKAB assessment.

### How the classification rules work

Schedule 2 of UK MDR 2002 contains 18 classification rules (Rules 1–18). They are applied as follows:

**Step 1 — Determine fundamental characteristics:**
- Is the device **invasive** (penetrates body surface or orifice)?
- Is it **surgically invasive** (introduced through a surgical incision)?
- Is it **active** (depends on energy other than gravity or the human body)?
- What is the **duration of use** — transient (&lt;60 min), short-term (60 min–30 days), long-term (>30 days)?
- Is it **implantable**?

**Step 2 — Apply the relevant rules:**

| Rule group | Scope |
|---|---|
| Rules 1–4 | Non-invasive devices |
| Rules 5–8 | Invasive devices |
| Rules 9–12 | Active devices |
| Rules 13–14 | Special rules (substances administered to the body, devices used with medicines) |
| Rule 15 | Devices used for contraception or prevention of STIs |
| Rule 16 | Devices specifically for disinfecting, cleaning, or rinsing contact lenses |
| Rule 17 | Devices for recording diagnostic images |
| Rule 18 | Devices incorporating non-viable animal tissue or cells |

**Step 3 — Where multiple rules apply:**
If more than one rule results in a different class, the **highest class prevails**.

**Step 4 — Document the rationale:**
The classification rationale, including which rules were applied and why, must be documented in the technical file.

:::tip
Rule 9 to Rule 12 cover active devices — including software. Rule 12 specifically addresses active devices intended to diagnose or monitor vital physiological processes. Many AI/SaMD products fall here. See [Software & AI as a medical device](../special-device-types/software-ai) for the full software classification logic.
:::

---

## Active implantable medical devices (AIMDs)

**Active implantable medical devices** are governed by **Part II** of UK MDR 2002 rather than Part I. AIMDs are devices:

- Intended to be **totally or partially introduced**, surgically or medically, into the human body, or by medical intervention into a natural orifice, and
- Which are intended to **remain after the procedure**, and
- Which **depend for their functioning** on a source of electrical energy or any source of power other than that directly generated by the human body or gravity.

Examples: pacemakers, implantable cardioverter-defibrillators (ICDs), cochlear implants, implantable neurostimulators.

AIMDs have a single risk tier — there are no sub-classes. All AIMDs require full UKAB assessment (equivalent to a Class III conformity assessment process). The Essential Requirements for AIMDs are in **Part II, Schedule 1** of UK MDR 2002.

---

## IVD medical devices — List A, List B, Self-test, General

IVD classification under **Part III** of UK MDR 2002 does not use the same I/IIa/IIb/III class structure. Instead, it uses a list-based system:

| Category | Risk | UKAB required? | Basis |
|---|---|---|---|
| **Annex II List A** | Highest | Yes — design dossier + production QA | Explicitly listed in Annex II List A |
| **Annex II List B** | Significant | Yes — type examination or QA | Explicitly listed in Annex II List B |
| **Self-test** | Variable | Yes — specific to self-test requirements | Intended for use by lay persons |
| **General IVDs** | Lowest (regulated) | No — self-declaration | All IVDs not in Lists A, B, or Self-test |

### Annex II List A — highest-risk IVDs

All devices in List A require a full UKAB assessment including:
- EC Design Examination (design dossier review)
- Production Quality Assurance

Current List A devices include reagents for HIV 1&2, HTLV I&II, Hepatitis B/C/D, ABO blood grouping, Rh (anti-D, anti-C, anti-c, anti-E, anti-e) blood grouping, Kell, Kidd, Duffy systems, and anti-Kell reagents.

### Annex II List B — significant-risk IVDs

List B devices require UKAB involvement, though through a less intensive route than List A.

Current List B devices include reagents for rubella, toxoplasma, CMV, PKU, congenital hypothyroidism, hCG (professional pregnancy testing), PSA, blood glucose (professional use), haemoglobin determination.

### Self-test devices

Any IVD specifically designed for use by **lay persons in a home setting** — regardless of its analyte — is a self-test device and requires specific:
- UKAB assessment
- Lay-person-oriented labelling
- Simplified IFU in plain language
- Usability data demonstrating the device can be correctly used by an untrained person

### General IVDs

All IVDs not listed in Annex II and not intended as self-test devices are "general IVDs." Manufacturers self-declare conformity and affix the UKCA mark without UKAB involvement.

---

## Key difference from EU IVDR classification

Manufacturers accessing both GB and EU markets must manage two separate IVD classification systems:

| Framework | Classification |
|---|---|
| **UK MDR 2002 Part III (GB)** | List A / List B / Self-test / General — derived from IVDD 98/79/EC |
| **EU IVDR 2017/746 (EU + NI)** | Class A / B / C / D — new risk-based system |

Many IVDs that were "General" under IVDD — and remain "General" under UK MDR 2002 Part III — have been upclassified to Class B or Class C under EU IVDR. These devices now require EU Notified Body involvement for the EU/NI market, even though they remain self-declaration products for the GB market.

---

## Manufacturer's responsibility for classification

Classification is the **manufacturer's responsibility**. Unlike the US FDA, there is no pre-submission or pre-market classification determination process in the UK MDR 2002 framework — MHRA does not formally approve classification decisions before market placement.

However:
- **UKABs** review and may challenge classification as part of conformity assessment
- **MHRA** can challenge classification during market surveillance
- Manufacturers can seek informal guidance from MHRA's [pre-submission service](https://www.gov.uk/guidance/pre-submission-meetings-for-medical-devices)

If a UKAB disagrees with a manufacturer's classification, the manufacturer must either revise their classification or provide a substantiated rationale. If disputes persist, MHRA can make a determination.

---

## Related pages

- [Class I · IIa · IIb · III — overview of each class](./uk-mdr-classes)
- [Classification rules — Schedule 2 in detail](./classification-rules)
- [IVD classification — List A · List B · Self-test · General](./ivd-classification)
- [Active & implantable devices](./active-implantable-devices)
- [Software & SaMD classification](./software-samd-classification)
- [Borderline & combination products](./borderline-combination-products)

---

## Official references

| Reference | Description |
|---|---|
| UK MDR 2002, Schedule 2 | Classification rules for general medical devices (Part I) |
| UK MDR 2002, Part II | Active implantable medical devices |
| UK MDR 2002, Part III, Annex II | IVD classification lists A and B |
| MHRA guidance: Classification of medical devices | MHRA guidance on applying the classification rules |
| MHRA guidance: IVD medical devices | IVD-specific classification guidance |
| MDCG 2021-24 (reference) | EU software classification guidance — useful comparative reference |

The page ends with 'Step' and the complete step-by-step guidance for applying classification rules is missing.
