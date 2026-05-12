---
id: udi-di-and-pi
title: UDI-DI & UDI-PI explained
sidebar_label: UDI-DI & UDI-PI explained
sidebar_position: 2
tags: [mdr, ivdr, udi]
---

# UDI-DI & UDI-PI explained

:::note
**Regulatory basis** - **MDR Annex VI Part B and C** and **IVDR Annex VI Part B and C**. The UDI consists of a Device Identifier (UDI-DI) and a Production Identifier (UDI-PI). Understanding the distinction is fundamental to UDI system compliance.
:::

:::warning
**Disclaimer** - This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## UDI-DI — Device Identifier

The **UDI-DI** uniquely identifies a specific version or model of a device. It is:
- **Static** — does not change from unit to unit of the same model
- **Configuration-specific** — changes when the device model, labelling, or packaging configuration changes
- **Registered in EUDAMED** — the Basic UDI-DI is the primary registration key

### When does the UDI-DI change?

A new UDI-DI must be assigned whenever there is a change to any of the following:
- Device name or trade name
- Device version or model (if the change affects identification, use, or compatibility)
- Labelling (including IFU changes that affect use)
- Packaging configuration (e.g. a change from a 5-unit pack to a 10-unit pack)
- Sterility (a sterile version and a non-sterile version have different UDI-DIs)
- Any characteristic that could affect compatibility with other devices

Minor changes that do not affect any of the above (e.g. internal process changes with no labelling or product impact) do not require a new UDI-DI.

### Basic UDI-DI

The **Basic UDI-DI** is the principal identifier used in EUDAMED device registration. It is the UDI-DI of the base device (typically the most common or representative configuration) and serves as the umbrella identifier for a device across all its packaging configurations.

In practice:
- A single device model sold in individual unit, 5-pack, and 10-pack configurations has **three UDI-DIs** (one per packaging level)
- But they all link to **one Basic UDI-DI** in EUDAMED

---

## UDI-PI — Production Identifier

The **UDI-PI** identifies the specific production unit. Unlike the UDI-DI, it varies between units or batches. Required elements depend on device type:

| Device type | Required UDI-PI elements |
|---|---|
| Devices with expiry date | Expiry date (mandatory) |
| Devices with a lot number | Lot or batch number |
| Devices with a serial number | Serial number |
| Implantable devices | Serial number (strongly recommended / required for traceability) |
| Software as a device | Software version number |
| Devices without expiry or lot | At minimum manufacturing date |

Multiple UDI-PI elements can be combined in a single UDI carrier.

---

## The complete UDI on the label

The complete UDI appearing on a label combines UDI-DI and UDI-PI in a single carrier. Using GS1 as an example:

```
(01) 05012345678900   ← UDI-DI (GTIN)
(17) 250630           ← Expiry date (UDI-PI)
(10) LOT2024A         ← Lot number (UDI-PI)
(21) SN00123          ← Serial number (UDI-PI)
```

The **Human Readable Interpretation (HRI)** adjacent to the barcode/DataMatrix presents the same information in text.

---

## EUDAMED device registration

The Basic UDI-DI is the anchor of device registration in EUDAMED. For each device, the following information linked to the Basic UDI-DI must be registered:

- Device name and trade name
- Device description
- Intended purpose
- Risk class and applicable classification rule
- CE marking and certificate status (linked to NB certificate)
- Applicable standards and CS
- Previous Basic UDI-DI (where this registration follows a previous version)
- Information on whether the device contains CMR substances, nanomaterials, or medicinal substances
- UDI-DI for each packaging configuration

EUDAMED registration is **mandatory before placing the device on the market** (within the applicable timelines by class).

---

## UDI labelling requirements

### Placement on the label

The UDI carrier must appear on:
- The **label of the device itself** (or the device packaging where the device label is not large enough)
- The **outer packaging** if the outer packaging label differs from the unit label
- The **inner packaging** of sterile devices (to allow UDI scanning in sterile fields without opening)

### Human Readable Interpretation (HRI)

The HRI must appear **adjacent to the carrier** and present the same information in human-readable text. If a device is too small to carry both the carrier and HRI, the HRI may appear only on the outer packaging.

### Implantable devices — additional requirement

For **implantable devices**, the UDI (at minimum the UDI-DI and lot or serial number) must be:
- On the device itself where technically feasible (direct part marking — DPM)
- On the delivery system or packaging
- Transferable to the **patient implant card**

---

## Issuing entities — GS1, HIBCC, ICCBBA

The EU recognises three accredited issuing entities that assign the UDI-DI identifiers:

### GS1

The most widely used globally. GS1 assigns GTINs (Global Trade Item Numbers) as the basis for UDI-DIs.
- Carrier: GS1-128, GS1 DataMatrix, RFID
- Used by: the majority of medical device manufacturers globally
- Registration: via national GS1 member organisations

### HIBCC (Health Industry Business Communications Council)

Widely used in the US and increasingly in Europe.
- Carrier: Code 39, Code 128, DataMatrix (HIBC format)
- Identifier prefix: `+`
- Registration: directly through HIBCC

### ICCBBA (International Council for Commonality in Blood Banking Automation)

Primarily used for blood, tissue, cellular therapy products, and related devices.
- Standard: ISBT 128
- Most commonly used for blood banking IVDs and tissue products

Manufacturers may use any of the three issuing entities. The choice should consider existing global labelling infrastructure, supply chain partner requirements, and issuing entity support.

---

## Related pages

- [UDI overview & structure](./udi-overview)
- [EUDAMED UDI registration](./eudamed-udi-registration)
- [Labelling requirements](/post-market/labelling-advertising/labelling-requirements)
- [Implantable devices](/pre-market/special-device-types/implantable-devices)

---

## Official references

| Reference | Description |
|---|---|
| MDR Annex VI Part B | UDI-DI information requirements |
| MDR Annex VI Part C | UDI-PI information requirements |
| MDR Art. 27(5) | UDI on labels |
| Commission Implementing Regulation (EU) 2017/2185 | Issuing entities designation |
| IMDRF/UDI WG/N48:2019 | UDI application guide |
| GS1 Healthcare Implementation Guide | GS1 UDI application guidance |
