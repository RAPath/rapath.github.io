---
id: regulatory-framework-overview
title: Regulatory framework overview
sidebar_label: Regulatory framework overview
sidebar_position: 5
tags: [mdr, ivdr, fundamentals, framework]
---

# Regulatory framework overview

:::note Applies to
Both **MDR 2017/745** and **IVDR 2017/746**
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and qualified regulatory professionals.
:::

---

## From directives to regulations

EU medical device law underwent a fundamental overhaul when the European Commission replaced three directives with two directly applicable regulations:

| Old legislation (directives) | New legislation (regulations) | Date of application |
|---|---|---|
| Medical Devices Directive 93/42/EEC (MDD) | MDR 2017/745 | **26 May 2021** |
| Active Implantable Medical Devices Directive 90/385/EEC (AIMDD) | MDR 2017/745 (AIMDs are now Class III) | **26 May 2021** |
| In Vitro Diagnostic Directive 98/79/EC (IVDD) | IVDR 2017/746 | **26 May 2022** |

Unlike directives, **regulations are directly applicable** in all EU member states without national transposition — a deliberate choice to ensure uniform application across the EU single market.

---

## The regulatory architecture

The regulations sit at the top of a layered legislative framework:

```
Regulation (EU) 2017/745 (MDR) + Regulation (EU) 2017/746 (IVDR)
│
├── Implementing acts (European Commission)
│     ├── EUDAMED implementing regulation
│     ├── UDI implementing regulation
│     └── Other implementing measures
│
├── Delegated acts (European Commission)
│     ├── Annex XVI updates (non-medical purpose devices)
│     └── Classification rule amendments
│
├── Common Specifications (CS)
│     ├── Device-specific technical and clinical requirements
│     └── Substitute for harmonised standards where none exist
│
└── Harmonised European Standards (CEN/CENELEC, ISO, IEC)
      └── Compliance creates a presumption of conformity
          with corresponding MDR/IVDR requirements
```

---

## Key actors in the system

### European Commission (EC)

The EC issues implementing and delegated acts, publishes Common Specifications, chairs the MDCG, and manages EUDAMED — the central EU medical device database.

### Medical Device Coordination Group (MDCG)

The MDCG is composed of representatives from all EU member states and chaired by the European Commission. Its roles include:

- Issuing non-binding guidance documents (the MDCG guidance series)
- Advising on borderline and classification questions
- Designating and monitoring notified bodies
- Coordinating vigilance and post-market activities across member states

MDCG guidance is not legally binding but represents the authoritative interpretation of MDR/IVDR requirements and is followed by notified bodies and competent authorities.

### National Competent Authorities (NCAs)

Each member state has a designated NCA responsible for:

- Authorising clinical investigations
- Receiving and acting on vigilance reports
- Conducting market surveillance and inspections
- Consulting on borderline and classification questions

| Country | Competent Authority |
|---|---|
| Germany | BfArM |
| France | ANSM |
| Netherlands | IGJ |
| Italy | Ministero della Salute |
| Sweden | MPA (Läkemedelsverket) |
| Ireland | HPRA |

A full list is maintained on the European Commission website.

### Notified Bodies (NBs)

Notified bodies are **private, third-party conformity assessment organisations** designated by NCAs and supervised by the MDCG. They are authorised to assess manufacturer conformity for devices that cannot self-declare. They:

- Review technical documentation and quality management systems
- Issue EU certificates that underpin CE marking
- Conduct announced and unannounced audits
- Are listed in the **NANDO database**

The number of MDR/IVDR-designated notified bodies is significantly lower than under the old directives, creating capacity constraints that affect application timelines.

### European Medicines Agency (EMA)

EMA becomes relevant where devices interact with medicinal products:
- Drug-device combination products (integral) — EMA for the drug substance component
- Companion diagnostics under IVDR — EMA provides a mandatory scientific opinion

---

## How CE marking works

EU medical device regulation is a **conformity assessment system**, not a pre-market approval system. The manufacturer — not the regulator — places the CE mark, after satisfying themselves (and in many cases a notified body) that all applicable requirements are met:

1. **Design and manufacture** the device to meet all applicable requirements (GSPR, QMS, technical documentation)
2. **Conduct conformity assessment** — self-declaration for lower-risk classes; notified body involvement for higher-risk classes
3. **Sign an EU Declaration of Conformity** attesting to compliance
4. **Affix the CE mark** — device can be placed on the EU market
5. **Post-market obligations begin** — PMS, vigilance reporting, EUDAMED registration

The CE mark signals regulatory compliance, not product quality or clinical superiority.

:::caution
CE marking under the old MDD/AIMDD/IVDD is **not** equivalent to CE marking under MDR/IVDR. Transitional provisions governed the wind-down of old certificates. See [Transitional provisions & timelines](./transitional-provisions).
:::

---

## EUDAMED

**EUDAMED** (European Database on Medical Devices) is the central information infrastructure underpinning MDR and IVDR. Its six modules cover:

| Module | Key content |
|---|---|
| Actor registration | Economic operators; issues Single Registration Numbers (SRNs) |
| UDI / Device registration | UDI-DI and device characteristics for all placed devices |
| Notified body & certificates | NB designations and all issued, suspended, or withdrawn certificates |
| Clinical investigations | Registration and reporting of clinical investigations and performance studies |
| Vigilance | Serious incidents, field safety corrective actions, trend reports |
| Market surveillance | Competent authority actions, safeguard procedures |

Some modules are publicly accessible; others are restricted to registered economic operators, notified bodies, and competent authorities.

---

## Harmonised standards and Common Specifications

**Harmonised standards** are European standards (EN ISO, EN IEC) developed under a Commission mandate. Compliance with a harmonised standard that covers specific MDR/IVDR requirements creates a **presumption of conformity** with those requirements — reducing the documentation burden for demonstrating compliance.

Key harmonised standards relevant to MDR/IVDR include:

| Standard | Subject |
|---|---|
| EN ISO 13485:2016 | Quality management systems |
| EN ISO 14971:2019 | Risk management |
| EN ISO 10993 series | Biological evaluation |
| EN 62304:2006+A1:2015 | Medical device software lifecycle |
| EN ISO 15223-1 | Symbols for labelling |

Where no harmonised standard exists or is insufficient, the Commission may publish **Common Specifications (CS)** — binding technical or clinical requirements that manufacturers must meet or demonstrably justify departing from.

---

## Relationship with non-EU systems

| Jurisdiction | System | Relationship to MDR/IVDR |
|---|---|---|
| UK | UKCA marking (UK MDR 2002, as amended) | Separate system post-Brexit; MRA not yet updated |
| USA | FDA 21 CFR (510(k), PMA, De Novo) | No mutual recognition; separate pathway |
| Switzerland | MedDO (Medizinprodukteverordnung) | MRA update pending; currently diverging |
| Australia | TGA (Therapeutic Goods Act 1989) | No MRA; separate ARTG inclusion required |

The MDR/IVDR do not have an equivalence approval pathway analogous to FDA's 510(k). The **equivalent device** concept in MDR Art. 61 is a tool for accessing clinical data to support a clinical evaluation — not a route to market in itself.

---

## Related pages

- [Who needs to comply?](./who-needs-to-comply)
- [Lifecycle of a medical device](./lifecycle-of-a-medical-device)
- [Transitional provisions & timelines](./transitional-provisions)
- [Legislation — MDR key articles](/legislation/mdr-key-articles)
- [Legislation — IVDR key articles](/legislation/ivdr-key-articles)
- [Notified bodies](/notified-bodies/what-notified-bodies-do)
- [EUDAMED registration](/post-market/eudamed-registration/overview)

---

## Official references

| Reference | Description |
|---|---|
| MDR Recitals 1–30 | Legislative background and objectives |
| MDR Art. 36–50 | Notified body framework |
| MDR Art. 78–83 | MDCG and competent authorities |
| MDR Art. 100–105 | EUDAMED |
| MDR Art. 8 | Presumption of conformity from harmonised standards |
| MDR Art. 9 | Common Specifications |
| IVDR Arts. 8–9 | Equivalent IVDR provisions |

