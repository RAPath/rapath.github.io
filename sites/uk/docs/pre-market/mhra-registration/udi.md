---
sidebar_position: 6
title: UDI — Unique Device Identification (UK)
description: >
  The Unique Device Identification (UDI) system for medical devices in Great Britain — current
  requirements, MHRA's implementation timeline, UDI structure (DI and PI), and how UK UDI
  relates to EU UDI requirements.
tags: [uk-mdr, udi, mhra-registration, pre-market, uk-unique]
---

:::note[Regulatory basis]
UDI requirements for medical devices in Great Britain are being implemented by MHRA under the **UK MDR 2002 as amended** and MHRA guidance. The UDI system is being phased in by device class. UDI requirements in Northern Ireland follow the EU MDR/IVDR timeline and EUDAMED.
:::

---

## What is UDI?

A **Unique Device Identifier (UDI)** is a series of numeric or alphanumeric characters created through internationally accepted device identification standards. It allows unambiguous identification of specific medical devices on the market. Every UDI has two components:

| Component | Definition | Example purpose |
|---|---|---|
| **Device Identifier (DI)** | Identifies the specific device version/model (manufacturer + device type) | Identifies "what" the device is |
| **Production Identifier (PI)** | Identifies the specific production unit (lot/batch number, serial number, manufacture/expiry date) | Identifies "which specific unit" |

---

## UK UDI implementation

MHRA is phasing in UDI requirements for GB. Unlike the EU MDR/IVDR (which has a fully operational EUDAMED UDI database), the UK's UDI infrastructure is still being developed.

**Current status (as of May 2026):**
- MHRA requires manufacturers to include UDI on device labels for higher-risk device classes (Class III, AIMD, and certain Class IIb devices) from specified dates
- MHRA has indicated its intention to implement a full UK UDI database (separate from EUDAMED)
- Specific implementation dates by class are published in MHRA guidance — always check the current position

**For manufacturers with EU MDR/IVDR UDI compliance:** MHRA has indicated it will accept international UDI standards (GS1, HIBCC, ICCBBA) that are also accepted in the EU. Manufacturers with EU-compliant UDI on their devices will largely satisfy the UK UDI labelling requirements for the GB market.

---

## UDI on the label

Where UDI is required, it must appear on:
- The device label (or outermost packaging)
- Higher levels of packaging where applicable
- Implant cards (for implantable devices)

UDI must be in both **human-readable interpretation (HRI)** and **AIDC** (Automatic Identification and Data Capture) format — typically a barcode or QR code using GS1, HIBCC, or ICCBBA standards.

---

## UK UDI vs EU EUDAMED UDI

| Aspect | UK (GB market) | EU/NI market |
|---|---|---|
| Database | UK UDI database (in development) | EUDAMED |
| Who submits | Manufacturer or UKRP | Manufacturer or EU REP |
| Standards accepted | GS1, HIBCC, ICCBBA | GS1, HIBCC, ICCBBA |
| Labelling requirement | By class, phased | By class, phased under EU MDR/IVDR |

---

## Related pages

- [MHRA registration overview](./who-must-register)
- [Device-level registration requirements](./device-registration)
- [Labelling requirements](../../post-market/labelling-advertising/labelling-requirements)
- [What's New](../../whats-new/recent-regulatory-changes) — for latest UDI implementation updates

---

## Official references

| Reference | Description |
|---|---|
| MHRA: Unique device identification | MHRA's UDI guidance and implementation timeline |
| GS1 UK | GS1 UDI standards |
| EU MDR 2017/745, Art. 27 | EU UDI requirements (applies in NI — comparative reference) |
