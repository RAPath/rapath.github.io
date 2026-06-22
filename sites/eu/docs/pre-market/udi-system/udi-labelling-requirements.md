---
id: udi-labelling-requirements
title: UDI labelling requirements
sidebar_label: UDI labelling requirements
sidebar_position: 4
tags: [mdr, ivdr, udi, labelling]
---

# UDI labelling requirements

:::note
Regulatory basis - MDR Art. 27(4)–(6) / IVDR Art. 24(4)–(6) and MDR Annex VI Part C / IVDR Annex VI Part C. These provisions specify where and how the UDI carrier must appear on device labelling.
:::

:::warning
Disclaimer - This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Where the UDI carrier must appear

The UDI carrier (barcode, DataMatrix, or RFID) must appear on the label of the device or on its packaging. Where the same information is required at multiple packaging levels, a carrier must appear at each level:

| Packaging level | UDI requirement |
|---|---|
| Unit of use / retail package | UDI carrier mandatory (UDI-DI + applicable UDI-PI) |
| Higher packaging levels (multipack, case) | UDI carrier required (different UDI-DI for this packaging configuration) |
| Sterile barrier packaging (inner) | UDI carrier required — enables scanning without opening sterile packaging |
| Device itself (direct part marking) | Required for implantable devices where technically feasible |

---

## Human Readable Interpretation (HRI)

The HRI is the text version of the UDI, which must appear adjacent to the UDI carrier. Format requirements:
- Must contain the same information as the carrier
- Must be legible without magnification aids
- Where the device or packaging is too small to accommodate the HRI legibly, the HRI may appear on the next outer packaging level, on a folded leaflet attached to the package, or within the product documentation provided to users

The HRI presents the UDI components as text — e.g.:
- `(01) 05012345678900` — UDI-DI (GTIN format)
- `(17) 250630` — Expiry date
- `(10) LOT2024A` — Lot number

---

## UDI-PI elements — by device type

| Device type | Required UDI-PI elements on label |
|---|---|
| General devices | Lot or batch number AND/OR serial number AND/OR manufacturing date AND/OR expiry date (as applicable to the device) |
| Sterile devices | Expiry date mandatory |
| Single-use devices | Lot number |
| Reusable devices | Serial number |
| Software as a device | Software version |
| Implantable devices | Serial number (for individual traceability) |

---

## Direct Part Marking (DPM) for implantable devices

For implantable devices, direct part marking (DPM) of the UDI-DI on the device itself is required where technically and clinically feasible to ensure individual traceability. DPM methods include laser engraving, electrochemical etching, and biocompatible ink marking. The marking must remain durable, biocompatible, and legible throughout the device's expected lifespan. Where DPM is genuinely not feasible, the UDI may appear on packaging only, provided the rationale is documented and justified in the technical file.

DPM must be durable, biocompatible, and legible under expected use conditions. If DPM is not feasible, the UDI appears on the packaging only, with justification documented.

---

## Implant card — UDI link

For implantable devices, the UDI information must be transferable to the patient's implant card — the document given to the patient listing the implanted device's identification details. The implant card must include at minimum the UDI-DI. See [Implantable devices](/pre-market/special-device-types/implantable-devices) for implant card requirements.

---

## Issuing entities — GS1, HIBCC, ICCBBA

The three EU-recognised issuing entities each have specific carrier format requirements:

### GS1

- UDI-DI format: GTIN (14-digit number, prefixed by company GS1 prefix)
- Carrier formats: GS1-128 linear barcode, GS1 DataMatrix (2D), GS1 QR code, GS1 RFID
- Application identifiers (AIs): standardised prefixes encode each data element (AI 01 = GTIN, AI 17 = expiry, AI 10 = lot, AI 21 = serial)
- Registration: via national GS1 member organisations (e.g. GS1 UK, GS1 Germany)

### HIBCC (Health Industry Business Communications Council)

- UDI-DI format: LIC (Labeler Identification Code) assigned by HIBCC + product number
- Carrier formats: Code 39, Code 128, DataMatrix (all in HIBC format)
- Identifier prefix: `+` (plus sign prefix on all HIBC encoded labels)
- Registration: directly via HIBCC (hibcc.org)

### ICCBBA

- Standard: ISBT 128
- Primary use: blood and blood components, tissues, cellular therapy products and associated devices
- Registration: via ICCBBA membership

---

## Choosing an issuing entity

Considerations when selecting an issuing entity:
- Existing infrastructure: if already using GS1 barcodes for product traceability, extending to GS1 UDI is efficient
- Supply chain compatibility: some hospital purchasing systems and pharmacy systems prefer specific carrier formats
- Global harmonisation: GS1 is the predominant global standard; facilitates FDA UDI and other regulatory compliance simultaneously
- Product type: ICCBBA is purpose-built for blood/tissue/cellular products

A manufacturer may use different issuing entities for different product lines — but consistency within a product line is recommended.

---

## Related pages

- [UDI overview & structure](./udi-overview)
- [UDI-DI & UDI-PI explained](./udi-di-and-pi)
- [EUDAMED UDI registration](./eudamed-udi-registration)
- [Labelling requirements](/post-market/labelling-advertising/labelling-requirements)
- [Implantable devices](/pre-market/special-device-types/implantable-devices)

---

## Official references

| Reference | Description |
|---|---|
| MDR Art. 27(4)–(6) | UDI labelling requirements |
| MDR Annex VI | UDI data elements |
| Commission Implementing Regulation (EU) 2017/2185 | Issuing entities |
| GS1 Healthcare UDI Implementation Guide | GS1 UDI application guidance |
| HIBCC HIBC standard | HIBCC UDI specification |

