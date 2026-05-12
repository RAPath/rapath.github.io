---
sidebar_position: 7
title: Device Identifier (DI) & Production Identifier (PI)
description: Detailed explanation of the two UDI components — Device Identifier and Production Identifier — and what each must contain.
keywords: [device identifier DI, production identifier PI, UDI components, lot number, serial number, expiration date]
---

# Device Identifier (DI) & Production Identifier (PI)

## Device Identifier (DI)

The **Device Identifier (DI)** is the mandatory, fixed portion of the UDI that identifies the specific version or model of a device. A unique DI must be obtained for each:
- Device labeller (not just manufacturer)
- Version or model of the device
- Level of packaging (individual unit, case, pallet)

The DI for the base package (individual unit) is called the **Primary DI** — this is the DI submitted to the GUDID database.

## Production Identifier (PI)

The **Production Identifier (PI)** is the conditional, variable portion of the UDI. It must include one or more of the following if they appear on the label:

| PI element | Required when |
|---|---|
| Lot or batch number | Device is assigned a lot/batch number |
| Serial number | Device is assigned a serial number |
| Manufacturing date | Date appears on the label |
| Expiration/use-by date | Date appears on the label |
| Distinct identification code (for HCT/Ps) | For human cells, tissues, and cellular/tissue-based products |

## Devices exempt from PI

Some devices are exempt from displaying the PI on the label:
- Class I devices exempt from UDI labelling requirements
- Small devices where space limitations make the full UDI impractical (alternative compliance methods apply)

## Official resources
- [21 CFR § 830.3](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-830/subpart-A/section-830.3)
- [FDA — UDI Basics](https://www.fda.gov/medical-devices/unique-device-identification-system-udi-system/udi-basics)
