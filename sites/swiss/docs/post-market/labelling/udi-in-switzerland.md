---
sidebar_position: 2
description: Unique Device Identification (UDI) in Switzerland — UDI-DI and UDI-PI components, GS1/HIBCC issuing agencies, DAPI UDI registration, and IVD UDI requirements.
keywords: [UDI, unique device identification, DAPI, Switzerland, GS1, HIBCC, Swissmedic]
---
# UDI in Switzerland

## Overview
The Swiss UDI system mirrors the EU MDR/IVDR UDI requirements. All medical devices (with limited exceptions) placed on the Swiss market must carry a **Unique Device Identifier (UDI)**. The UDI system is implemented through the DAPI database rather than EUDAMED.

## UDI Structure

**UDI-DI (Device Identifier)** — Fixed component specific to the device model (labelled item). Identifies the specific version or model of the device. The BASIC UDI-DI identifies a device group.

**UDI-PI (Production Identifier)** — Variable component identifying specific production units. Includes: lot/batch number, serial number (where applicable), manufacturing date, expiry date, software version (for software devices).

## Issuing Agencies
Manufacturers must use an accredited UDI issuing agency to obtain a UDI-DI:
- **GS1** — Uses GTIN (Global Trade Item Number) structure
- **HIBCC** — Health Industry Business Communications Council
- **ICCBBA** — For blood, tissues, cellular therapy products

## DAPI UDI Registration
The BASIC UDI-DI (and device-specific UDI-DIs) must be registered in **DAPI** before placing the device on the Swiss market. DAPI registration requires: device description; intended purpose; device class; manufacturer and CH REP details; UDI-DI data.

## Carrier and Labelling
The UDI carrier (barcode or RFID) must appear on the device label. The carrier type (linear barcode, 2D DataMatrix, RFID) depends on device type and class. The human-readable interpretation of the UDI must accompany the barcode.

## IVD UDI Requirements
IVDs under IVDO are subject to equivalent UDI requirements. The UDI-DI for IVDs is registered in DAPI. Performance studies conducted under ClinO-MD may be exempt from UDI labelling requirements.

## Official Sources
- [MedDO Art. 29–32 — UDI (SR 812.213)](https://www.fedlex.admin.ch/eli/cc/2021/205/en)
- [DAPI portal](https://www.dapi.ch)
- [MDCG 2021-17 — UDI guidance (applicable in Switzerland)](https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en)

:::warning Disclaimer
AI-assisted content for navigation only. Always verify against official [Swissmedic](https://www.swissmedic.ch) and [Fedlex](https://www.fedlex.admin.ch) sources. Not legal or regulatory advice.
:::
