---
id: what-is-an-ivd
title: What is an IVD?
sidebar_label: What is an IVD?
sidebar_position: 2
tags: [ivdr, definition, fundamentals]
---

# What is an in vitro diagnostic medical device?

:::note
Regulatory basis - This page is based on Article 2(2) of Regulation (EU) 2017/746 (IVDR). The IVD definition determines whether a product is governed by IVDR rather than MDR.
:::

:::warning
Disclaimer - This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and, where appropriate, a qualified regulatory professional.
:::

---

## The legal definition

The legal definition: Under Article 2(2) of the IVDR, an in vitro diagnostic medical device (IVD) is any medical device that is a reagent, reagent product, calibrator, control material, kit, instrument, apparatus, piece of equipment, software, or system—used alone or in combination—and that is:

1. Intended by the manufacturer for in vitro use (outside the living body), and
2. Applied to specimens derived from the human body (including blood, tissue, organ donations, etc.), and
3. Intended solely or principally to provide information on one or more of the following:

| Information type | Examples |
|---|---|
| Physiological or pathological process or state | Blood glucose level, haemoglobin count, inflammatory markers |
| Congenital physical or mental impairments | NIPT for trisomy, newborn screening panels |
| Predisposition to a medical condition or disease | BRCA1/2 genetic testing, HLA typing |
| Safety and compatibility with potential recipients | Blood group typing, cross-matching, donor compatibility |
| Treatment response or reactions | Pharmacogenomics, companion diagnostic testing |
| Defining or monitoring therapeutic measures | Therapeutic drug monitoring, INR for anticoagulation |

### Specimen receptacles

Specimen receptacles — containers or materials specifically intended to receive and preserve specimens derived from the human body for diagnostic examination — are also regulated as IVDs. This includes vacutainers, specimen tubes, and urine cups designed to preserve specimen integrity.

### Accessories to IVDs

An accessory to an IVD is an article intended by its manufacturer to be used together with one or more specific IVDs, specifically enabling or assisting the IVD to be used according to its intended purpose, or solely or primarily assisting the safety or performance of the IVD.

---

## The "in vitro" requirement

"In vitro" means the examination takes place outside the living human body, on a specimen that has been derived from it. This distinguishes IVDs from:

- In vivo devices (e.g. implantable sensors, endoscopes) → these are medical devices under MDR
- In vivo diagnostic imaging (e.g. MRI, ultrasound) → MDR

The specimen must be derived from a human being. Tests performed exclusively on animal specimens are not within IVDR scope (they fall under veterinary legislation).

---

## What IVDR covers that MDR does not

IVDR introduces several elements not present under the old IVDD 98/79/EC:

| Area | Change under IVDR |
|---|---|
| Classification | 4 risk classes (A, B, C, D) replacing the old List A / List B / General system |
| Notified body involvement | Now required for most Class B, C, and D devices (previously only List A and B) |
| Performance evaluation | Structured, lifecycle approach — not just analytical performance |
| EUDAMED | Registration and UDI obligations now apply to IVDs |
| PMS and PMPF | Formal post-market performance follow-up required |
| Common specifications | EC can issue CSs for specific IVD categories |

---

## Software as an IVD

Software is explicitly included in the IVDR definition as a potential IVD. IVD software qualification follows similar principles to MDR software (qualification, verification, validation, cybersecurity), but the scope assessment differs — the critical question is whether the software examines specimens or interprets data derived from specimens.

- Does the software examine specimens derived from the human body?
- Is the output intended to provide diagnostic or monitoring information from those specimens?

Key examples:
- An algorithm that interprets sequencing data from a tissue biopsy to identify mutations → IVD software
- A laboratory information management system (LIMS) that routes samples but does not interpret results → likely not an IVD
- AI-based image analysis of histopathology slides → may be borderline — assess against intended purpose carefully

See the MDCG 2019-11 guidance on software qualification for detailed worked examples.

---

## Companion diagnostics

A companion diagnostic (CDx) is an IVD device essential for the safe and effective use of a corresponding medicinal product. Under IVDR:

- CDx devices are always classified as Class C (at minimum)
- The conformity assessment procedure requires coordination with the competent authority evaluating the medicinal product (EMA or national)
- The notified body is required to seek a scientific opinion from EMA or a national medicines authority as part of the conformity assessment

This creates a mandatory interaction between the IVDR pathway and the pharmaceutical regulatory pathway. See [Companion diagnostics](/pre-market/special-device-types/companion-diagnostics) for a detailed walkthrough.

---

## The "intended purpose" principle

As with MDR, the IVDR definition turns on manufacturer intent. The intended purpose is established through:

- Labelling and instructions for use
- Promotional materials
- Technical documentation
- Any other communication from the manufacturer about what the device is for

A laboratory instrument sold as a general-purpose photometer is not an IVD. The same instrument sold with a claim to measure haemoglobin concentration in blood is an IVD.

---

## Key questions to ask

1. Is the examination in vitro? The test must be performed on a specimen outside the body.
2. Is the specimen from a human being? Veterinary IVDs are out of scope.
3. What information does it provide? Does the output fit one of the six categories listed in Art. 2(2)?
4. Is it software? If so, does it interpret specimen-derived data, or merely process/store it?
5. Is it also used on the body? If a device has both in vitro and in vivo functions, assess each function separately.
6. Could it be MDR instead? See [MDR vs IVDR — which applies?](./mdr-vs-ivdr).

---

## Related pages

- [What is a medical device?](./what-is-a-medical-device) — MDR equivalent definition
- [What is not a medical device?](./what-is-not-a-medical-device)
- [MDR vs IVDR — which applies?](./mdr-vs-ivdr)
- [Classification — Class A · B · C · D](/pre-market/classification/ivd-classes)
- [Performance evaluation](/pre-market/clinical-evidence/performance-evaluation)
- [Companion diagnostics](/pre-market/special-device-types/companion-diagnostics)

---

## Official references

| Reference | Description |
|---|---|
| IVDR Art. 2(2) | Definition of IVD |
| IVDR Art. 2(4) | Definition of accessory to an IVD |
| IVDR Art. 2(12) | Definition of intended purpose |
| IVDR Art. 48(3) | Companion diagnostic conformity assessment |
| IVDR Annex VIII | Classification rules for IVDs |
| MDCG 2019-11 | Qualification and classification of software |
| MDCG 2020-16 | Guidance on companion diagnostics |

Complete the software section with: 'AI-based image analysis of histopathology slides → may be borderline — assess against whether the software examines specimens or processes pre-examined images. A mobile app that tracks specimen handoff but does not interpret results → not an IVD. Key principle: if the software output is intended to provide diagnostic, prognostic, or monitoring information directly from specimens, it is likely an IVD software regardless of the underlying technology.'
