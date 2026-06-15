---
id: distribution-records
title: Distribution records
sidebar_label: Distribution records
sidebar_position: 3
tags: [mdr, ivdr, distribution, traceability, pms]
---

# Distribution records

:::note
**Regulatory basis** - **MDR Art. 10(8) / IVDR Art. 10(8)** — manufacturers must maintain records that allow identification of all customers who received a device, enabling effective recalls and FSCAs. Importers and distributors have parallel obligations under MDR Art. 13(5) and Art. 14(5).
:::

:::warning
**Disclaimer** - This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Why distribution records matter

Distribution records are the backbone of **recall effectiveness**. Without the ability to identify who received affected devices and in what quantities, an FSCA cannot reach all affected parties. Distribution records also support:

- **Post-market surveillance**: identifying device utilisation patterns and populations
- **Vigilance investigations**: tracing specific lots to patient use locations
- **Regulatory inspections**: demonstrating supply chain traceability to NCAs
- **EUDAMED compliance**: UDI-linked distribution data

---

## What must be recorded

### Manufacturer — outbound distribution records

Manufacturers must maintain records sufficient to identify the **destination of every device placed on the market**, linked to the UDI:

| Data element | Description |
|---|---|
| UDI-DI | Device model identifier |
| UDI-PI (lot/serial/expiry) | Specific production unit or batch |
| Quantity | Number of devices in each shipment |
| Customer identity | Name and address of each direct customer (distributor, hospital, etc.) |
| Dispatch date | Date the devices were shipped |
| Delivery confirmation | Evidence of receipt where available |

For **implantable devices**, the UDI-PI (including serial number) must be traceable to individual patients where possible, through healthcare institution records.

### Importer — records

Importers must keep records of:
- The devices they have imported (UDI, lot numbers, quantities)
- The EU customers they have supplied to
- Any complaints received relating to devices they have imported

### Distributor — records

Distributors must maintain records of:
- Devices received (UDI, lots, quantities, supplier)
- Devices supplied onwards (UDI, lots, quantities, customer identities)
- Any complaints received

These records enable the **recall chain** to function — if a manufacturer initiates a recall, it can identify importers; the importers can identify distributors; the distributors can identify the hospitals or end users.

---

## Retention periods

Distribution records must be retained for:
- **15 years** after the last device was placed on the market — for all devices non-implantable These retention periods begin from the date the final device in a batch or production run was placed on the market. Manufacturers must plan for secure, accessible archival systems to meet these extended retention obligations.
- **30 years** after the last device was placed on the market — for implantable devices

These retention periods are among the longest in any industry and must be planned for in document management and IT systems.

---

## Format — paper vs. electronic

MDR/IVDR does not mandate electronic records, but the practical requirements (volume of data, retrieval speed needed for recalls, EUDAMED integration) make electronic records the only viable approach for most manufacturers.

Records must be:
- **Accessible within a reasonable time** when requested by an NCA
- **Protected against loss or corruption** — backup and disaster recovery required
- **Exportable in a usable format** — NCA inspections require readable records

---

## UDI and distribution records — the link

The UDI system is designed to underpin distribution traceability. Distribution records must be linked to the UDI of each device dispatched:
- The **UDI-DI** identifies the device model
- The **UDI-PI** (lot or serial number) identifies the specific production unit

For **Class IIb and above** (MDR) and **Class C and D** (IVDR), the granularity of distribution records should enable tracing of individual lots to specific customers.

---

## Healthcare institution records

Healthcare institutions have their own obligation to keep records of UDIs for **implanted devices** in patient records. This creates a chain:

```
Manufacturer distribution records → lot/serial number at hospital
Hospital implant records → UDI linked to specific patient
Patient implant card → patient-held record of device UDI
```

This chain enables identification of all patients with a specific affected device lot in the event of an implant recall — a capability that was poorly developed under the old MDD system.

---

## Related pages

- [PMS requirements by class](./pms-requirements)
- [When an FSCA is required](/post-market/field-safety-corrective-actions/when-fsca-required)
- [UDI overview](/pre-market/udi-system/udi-overview)
- [EUDAMED UDI registration](/pre-market/udi-system/eudamed-udi-registration)

---

## Official references

| Reference | Description |
|---|---|
| MDR Art. 10(8) | Manufacturer record-keeping obligations |
| MDR Art. 13(5) | Importer record-keeping |
| MDR Art. 14(5) | Distributor record-keeping |
| MDR Art. 27(9) | Healthcare institution UDI storage obligation |
| MDR Art. 87(1) | Distribution data in vigilance reports |
| IVDR Art. 10(8) | IVDR equivalent obligations |

Complete the sentence and section with: 'Hospital records of UDIs → patient medical records. This chain allows regulators or manufacturers to trace from population-level concerns down to individual patients if needed. For implantable devices, where long-term safety monitoring is critical, this full traceability from manufacturer through to patient is essential for post-market surveillance and vigilance investigations.'

Complete the sentence. It should read: 'Healthcare institutions must be able to link implanted devices to individual patients through the UDI-PI (serial number), enabling direct patient notification in the event of a recall or FSCA.'
