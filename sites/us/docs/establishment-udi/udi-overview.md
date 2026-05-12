---
sidebar_position: 6
title: UDI Overview & Two-Component Structure
description: Introduction to the FDA Unique Device Identification (UDI) system — what UDI is, the two-component structure (DI and PI), and why it matters.
keywords: [UDI, unique device identification, device identifier, production identifier, 21 CFR Part 830, GUDID]
---

# UDI Overview & Two-Component Structure

:::tip US-unique
While UDI has become an international standard (via IMDRF), the US FDA UDI system under 21 CFR Part 830 was one of the first and most comprehensive implementations globally.
:::

## What is UDI?

The **Unique Device Identification (UDI)** system requires device labels to bear a unique identifier that allows traceability through the distribution chain and supports post-market safety activities. Regulated under **21 CFR Part 830** and FD&C Act § 519(f).

## Two-component UDI structure

Each UDI consists of two components:

### 1. Device Identifier (DI)
- Identifies the specific **version or model** of the device
- Remains constant for all units of the same version/model
- Issued by an FDA-accredited **issuing agency** (GS1, HIBCC, or ICCBBA)
- Must be submitted to the GUDID database

### 2. Production Identifier (PI)
- Contains variable production information — one or more of:
  - Lot or batch number
  - Serial number
  - Manufacturing date
  - Expiration/use-by date
- Changes with each production unit (for serialised devices) or production lot

## UDI on the label

The UDI must appear on the device label in:
- **Human-readable format** (Plain text)
- **Automatic identification and data capture (AIDC)** format — typically a barcode (GS1-128, GS1 DataMatrix, or equivalent per the issuing agency)

## Official resources
- [21 CFR Part 830 — UDI](https://www.ecfr.gov/current/title-21/chapter-I/subchapter-H/part-830)
- [FDA — UDI System](https://www.fda.gov/medical-devices/unique-device-identification-system-udi-system)
