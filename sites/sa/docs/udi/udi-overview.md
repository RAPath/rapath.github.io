---
title: UDI Overview
sidebar_position: 1
description: SFDA Unique Device Identification (UDI) requirements under MDS-REQ 7 — structure, obligations, and differences from US FDA and EU MDR UDI.
---

# UDI — Unique Device Identification

## What is UDI?

**Unique Device Identification (UDI)** is a system for labelling and tracking medical devices through the distribution and use chain. The SFDA's UDI requirements are set out in **MDS-REQ 7** and require manufacturers to assign a UDI to each device and submit UDI data to the SFDA system.

## UDI structure

A UDI consists of two components:

| Component | Description |
|---|---|
| **Device Identifier (DI)** | Fixed portion — identifies the device model, version, and packaging configuration; same for all units of the same device |
| **Production Identifier (PI)** | Variable portion — identifies the specific unit or batch (lot number, serial number, expiry date, manufacturing date) |

Both the DI and PI must appear on the device label in human-readable format. Machine-readable format (barcode or RFID) is also required for most device classes.

## SFDA UDI vs. US FDA and EU UDI — key differences

The SFDA's UDI requirements are aligned with international UDI principles but have **Saudi-specific implementation details** that differ from US FDA (21 CFR Part 830) and EU MDR/IVDR UDI:
- SFDA uses its own **GHAD UDI submission portal** (not GUDID or EUDAMED)
- Compliance timelines and phasing differ from US and EU schedules
- Specific data fields required for SFDA UDI submission may differ from FDA/EU requirements

Manufacturers who have already implemented UDI for US or EU markets should carefully review MDS-REQ 7 to identify SFDA-specific differences.

## Who must comply?

All medical device manufacturers holding an MDMA are subject to SFDA UDI requirements. UDI compliance is phased — see [UDI Compliance Timeline](./udi-data-submission).

## Further reading

- MDS-REQ 7 — UDI requirements
- [UDI Data Submission](./udi-data-submission)
- [UDI Labelling Requirements](./udi-labelling)

Manufacturers must first obtain a valid MDMA certificate and register with the GHAD portal before submitting UDI data. UDI assignment cannot occur prior to MDMA approval. Ensure your Authorized Representative has active GHAD portal access before initiating UDI data submission.

UDI assignment timing

Manufacturers must assign and submit UDI data to GHAD after MDMA certificate approval is granted and before the device is first placed on the Saudi market. UDI cannot be assigned prior to MDMA approval. The Device Identifier (DI) is fixed upon initial assignment and should not change unless the device undergoes a significant modification requiring a new MDMA certificate.
