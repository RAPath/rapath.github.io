---
id: eudamed-udi-registration
title: EUDAMED UDI registration
sidebar_label: EUDAMED UDI registration
sidebar_position: 3
tags: [mdr, ivdr, udi, eudamed]
---

# EUDAMED UDI registration

:::note
**Regulatory basis** - **MDR Art. 27(3)–(4) and Art. 28–29 / IVDR Art. 24(3)–(4) and Art. 25–26**. Manufacturers must register their devices in EUDAMED using the UDI as the primary identifier before placing devices on the EU market.
:::

:::warning
**Disclaimer** - This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## EUDAMED UDI module overview

The **UDI / Device Registration module** of EUDAMED is the central repository for device information in the EU. When a manufacturer registers a device, they are creating a publicly accessible record linking the device's UDI to its key characteristics, regulatory status, and certificate information.

For patients, healthcare professionals, and regulators, EUDAMED provides the ability to look up any CE-marked device by UDI and access:
- Device description and intended purpose
- Manufacturer and EU REP details
- CE certificate status
- Notified body involvement
- Device class and classification

---

## Who registers — the manufacturer's obligation

The **manufacturer** (or the EU REP on their behalf) is responsible for EUDAMED device registration. Importers and distributors do not register devices — they use the UDIs provided by manufacturers in their own distribution records.

For non-EU manufacturers: the **EU authorised representative** can register on the manufacturer's behalf and must have access to do so.

---

## Step-by-step registration process

### Step 1 — Obtain a Single Registration Number (SRN)

Before registering any devices, the manufacturer must register as an **economic operator** in EUDAMED to obtain an **SRN (Single Registration Number)**. This is done once per legal entity.

Required information for SRN registration:
- Legal name and address of the manufacturer
- Contact details
- Country of establishment
- Type of economic operator (manufacturer, EU REP, importer, distributor, etc.)

For non-EU manufacturers: their EU REP must first obtain an SRN, and the manufacturer registers via the EU REP.

### Step 2 — Register the Basic UDI-DI

For each device model, register the **Basic UDI-DI** and associated device-level information:

| Data element | Description |
|---|---|
| Basic UDI-DI | The core device identifier |
| Device name and trade name | As it appears on the label |
| Device description | Concise description of the device type |
| Intended purpose | As stated in the technical documentation |
| Risk class | Class I/IIa/IIb/III (MDR) or Class A/B/C/D (IVDR) |
| Classification rule | Which rule(s) were applied |
| CE certificate reference | Linked to the relevant NB certificate in EUDAMED |
| Applicable standards | Harmonised standards applied |
| Special features | Contains medicinal substance, CMR, nanomaterial, human/animal tissues, etc. |
| SSCP reference | For Class III and implantable devices |

### Step 3 — Register all UDI-DIs (packaging configurations)

For each packaging configuration of the device (individual unit, 5-pack, outer shipping box, etc.), register the corresponding UDI-DI linked to the Basic UDI-DI.

### Step 4 — Keep registration current

EUDAMED registration is **not a one-time event**. The manufacturer must update the registration when:
- Any registered data element changes (device name, intended purpose, certificate)
- A new packaging configuration is introduced
- The device is withdrawn from the market
- The CE certificate is renewed, suspended, or withdrawn

---

## Timing of registration

Registration in EUDAMED must occur **before placing the device on the market**, within the applicable timelines by class:

| Class | EUDAMED registration deadline |
|---|---|
| MDR Class III / IVDR Class D | 26 May 2021 |
| MDR Class IIa, IIb / IVDR Class B, C | 26 May 2023 |
| MDR Class I / IVDR Class A | 26 May 2025 |

---

## Public vs. restricted access in EUDAMED

The UDI/device registration module has both public and restricted elements:

| Information | Access |
|---|---|
| Device name, description, intended purpose | **Public** |
| Basic UDI-DI and class | **Public** |
| Certificate status | **Public** |
| Manufacturer/EU REP contact details | **Public** |
| Detailed device characteristics | **Public** (for most data) |
| Clinical investigation links | **Restricted** to registered users |

The public-facing portion of EUDAMED enables patients, healthcare professionals, and national authorities to look up any CE-marked device.

---

## Related pages

- [UDI overview & structure](./udi-overview)
- [UDI-DI & UDI-PI explained](./udi-di-and-pi)
- [UDI labelling requirements](./udi-labelling-requirements)
- [EUDAMED registration — economic operators](/post-market/eudamed-registration/economic-operator-registration)

---

## Official references

| Reference | Description |
|---|---|
| MDR Art. 28–29 | Device registration in EUDAMED |
| MDR Art. 30 | Economic operator registration |
| IVDR Art. 25–26 | IVDR device registration |
| EUDAMED user guides | Available at ec.europa.eu/tools/eudamed |
