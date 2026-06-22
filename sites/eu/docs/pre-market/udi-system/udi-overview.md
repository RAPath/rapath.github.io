---
id: udi-overview
title: UDI overview & structure
sidebar_label: UDI overview & structure
sidebar_position: 1
tags: [mdr, ivdr, udi, eudamed, labelling]
---

# UDI system — overview & structure

:::note Applies to
Both **MDR 2017/745** and **IVDR 2017/746**. UDI requirements are set out primarily in **MDR Art. 27 / IVDR Art. 24** and **MDR Annex VI / IVDR Annex VI**.
:::

:::warning Disclaimer
This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## What is the UDI system?

The **Unique Device Identification (UDI)** system is the EU's standardised framework for identifying medical devices throughout their commercial life — from manufacture to disposal. It enables:

- **Traceability**: linking specific manufactured units to the patients who used them
- **Vigilance and recall**: rapidly identifying affected devices and their distribution when safety issues arise
- **Market surveillance**: competent authorities can identify non-compliant devices
- **EUDAMED integration**: UDI data underpins the device registration module of EUDAMED

The EU UDI system is aligned with international frameworks (FDA UDI, IMDRF UDI guidance) to facilitate global harmonisation.

---

## UDI structure — two components

Every device UDI consists of two parts:

### UDI-DI — Device Identifier

The **UDI-DI** is the **static** component that identifies the device model or version. It is specific to:
- A particular manufacturer
- A specific device trade name and model
- A specific labelling version (if labelling changes, the UDI-DI changes)
- A specific packaging configuration (e.g. individual unit vs. 10-pack have different UDI-DIs)

The UDI-DI is assigned by the manufacturer in consultation with an accredited **issuing entity** (GS1, HIBCC, or ICCBBA). Each issuing entity has its own identifier format.

The **Basic UDI-DI** is a specific form of UDI-DI that is the primary key for a device in EUDAMED — it identifies the device at a model/version level across all unit configurations.

### UDI-PI — Production Identifier

The **UDI-PI** is the **dynamic** component that identifies the specific production unit. It may include:
- Lot or batch number
- Serial number
- Manufacturing date
- Expiry date
- Software version (for software devices)

Not all UDI-PI elements are required for all devices — the applicable elements depend on device type, class, and what is required to ensure traceability.

---

## How the UDI appears on the device — carriers

The UDI is communicated on the device label through a **UDI carrier** — a machine-readable representation of the UDI combined with the human-readable interpretation (HRI). The format depends on the issuing entity:

| Issuing entity | Carrier format |
|---|---|
| **GS1** | GS1-128 barcode or GS1 DataMatrix 2D code; RFID |
| **HIBCC** | HIBC barcode (Code 39, Code 128, DataMatrix) |
| **ICCBBA** | ISBT 128 (primarily for blood and tissue products) |

The **Human Readable Interpretation (HRI)** must appear on the label adjacent to the carrier, in a format the user can read if the scanner is unavailable.

---

## UDI application timeline — by device class

UDI requirements apply progressively across device classes:

| Device class | UDI on label required from | EUDAMED registration required from |
|---|---|---|
| MDR Class III, IVDR Class D | 26 May 2021 | 26 May 2021 |
| MDR Class IIa, IIb, IVDR Class B, C | 26 May 2023 | 26 May 2023 |
| MDR Class I, IVDR Class A | 26 May 2025 | 26 May 2025 |

Note: UDI implementation timelines have undergone legislative adjustments via Commission Delegated Regulation (EU) 2022/2493. The timelines listed above represent the current requirements, but always verify current status in the Official Journal and EUDAMED implementation guidance, as future amendments may alter these dates.

---

## UDI obligations — who does what?

| Actor | Obligation |
|---|---|
| **Manufacturer** | Assign UDI; place UDI carrier on label; register Basic UDI-DI and device information in EUDAMED |
| **Importer** | Verify that device has UDI carrier; record UDI in their own systems |
| **Distributor** | Verify UDI carrier is present; record UDI in distribution records |
| **Healthcare institutions** | Keep records of UDIs for implanted devices; store and manage implant cards |

---

## Related pages

- [UDI-DI and UDI-PI explained](./udi-di-and-pi)
- [EUDAMED UDI registration](./eudamed-udi-registration)
- [UDI labelling requirements](./udi-labelling-requirements)
- [UDI issuing entities](./udi-issuing-entities)

---

## Official references

| Reference | Description |
|---|---|
| MDR Art. 27 | UDI system |
| IVDR Art. 24 | IVDR UDI system |
| MDR Annex VI | UDI — information to be submitted |
| Commission Implementing Regulation (EU) 2017/2185 | List of issuing entities |
| IMDRF/UDI WG/N7FINAL:2013 | International UDI guidance |

