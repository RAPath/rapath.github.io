---
title: "Device Identifier (DI) and Production Identifier (PI)"
description: "Explanation of the UDI-K DI and PI components."
sidebar_position: 2
---

## Device Identifier (DI) — 기기식별자

- Identifies the **specific version or model** of a device
- Issued by an **authorised issuing agency** (GS1 Korea or HIBCC)
- Must be registered in **KIMS** with the device's key attributes
- The same for every unit of a given device model/variant

## Production Identifier (PI) — 생산식별자

Variable portion that includes one or more of:
- **Lot / batch number** — for most devices
- **Serial number** — mandatory for implantable and high-risk devices
- **Expiry date** — for devices with limited shelf life (e.g., sterile devices)
- **Manufacturing date** — where required

## Label requirements by device type

| Device type | DI | Lot/Batch | Serial | Expiry |
|---|---|---|---|---|
| Non-sterile, non-implantable | ✓ | ✓ | Optional | Optional |
| Sterile devices | ✓ | ✓ | Optional | ✓ |
| Implantable devices | ✓ | ✓ | ✓ | ✓ (if applicable) |

## Related pages
- [UDI-K overview](./udi-k-overview) · [KIMS database registration](./kims-database-registration) · [UDI labelling requirements](./udi-labelling-requirements)

Add a new subsection under "Device Identifier (DI) — 기기식별자": "UDI-K Format: The DI follows either GS1 format (typically 01 + GTIN-14) or HIBCC format. Both are accepted by MFDS. Confirm the required format with your issuing agency (GS1 Korea or HIBCC) before application."
