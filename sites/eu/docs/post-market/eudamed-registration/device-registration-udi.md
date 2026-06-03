---
id: device-registration-udi
title: Device registration & UDI upload
sidebar_label: Device registration & UDI upload
sidebar_position: 3
tags: [mdr, ivdr, eudamed, udi, device-registration]
---

# Device registration & UDI upload

:::note
**Regulatory basis** - **MDR Art. 28–29 / IVDR Art. 25–26**. Manufacturers must register all devices placed on the EU market in EUDAMED, linked to the Basic UDI-DI. Registration is a prerequisite for placing the device on the market within the applicable class timelines.
:::

:::warning
**Disclaimer** - This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Device registration in EUDAMED — Module 2

The **UDI / Device Registration module** (Module 2) of EUDAMED is where manufacturers register each device they place on the EU market. It is the primary repository of device information accessible to competent authorities and — in part — to the public.

---

## What must be registered

For each device, the manufacturer registers the **Basic UDI-DI** and a defined set of device-level data:

| Data element | Description |
|---|---|
| Basic UDI-DI | Core identifier linking all configurations |
| Device name and trade name(s) | As on the label |
| Device description | Concise description (not the full technical documentation) |
| Intended purpose summary | As stated in technical documentation |
| Risk class | MDR I/IIa/IIb/III or IVDR A/B/C/D |
| Classification rule applied | e.g. Rule 11 (software), Rule 8 (long-term implantable) |
| CE certificate reference | Linked to the NB certificate in Module 3 |
| Declaration of Conformity reference | Date and unique identifier |
| Applicable harmonised standards | Standards cited in the Declaration of Conformity |
| Common Specifications | Any CS applied |
| Special device characteristics | Contains: medicinal substance / CMR substance / nanomaterial / human tissue / animal tissue |
| Is it a single-use device? | Yes/No |
| Is it sterile? | Yes/No |
| Does it incorporate software? | Yes/No |
| Is it a companion diagnostic? | Yes/No (IVDR) |
| Maximum number of reuses (if applicable) | For reusable devices |

In addition, the manufacturer must register the **UDI-DI for each packaging configuration** (unit, multipack, case), all linked to the Basic UDI-DI.

---

## Keeping registration current

Device registration is not a one-time event. The manufacturer must update EUDAMED when:
- Any registered data element changes (name, intended purpose, classification)
- A new packaging configuration is introduced
- The CE certificate is updated, suspended, or withdrawn
- The device is withdrawn from the market
- The SSCP is updated (for Class III / Class D)

---

## Certificates & notified body data — Module 3

Module 3 of EUDAMED contains all EU certificates issued by notified bodies — this is maintained primarily by the notified bodies, but manufacturers should understand what is visible:

| Certificate data | Who maintains it |
|---|---|
| NB name and identification number | NB / Commission designation |
| Certificate number | NB |
| Certificate type (Annex IX / X / XI) | NB |
| Scope — devices or QMS covered | NB |
| Certificate validity dates | NB |
| Certificate status (valid / suspended / withdrawn) | NB |
| Manufacturer linked to certificate | NB + manufacturer |

Manufacturers can view their certificates in Module 3 and use the certificate reference when registering devices in Module 2. Certificate data is **publicly accessible** — anyone can look up whether a specific manufacturer's NB certificate is current.

---

## Public-facing modules & timelines

### What the public can see in EUDAMED

The following EUDAMED information is accessible without a login:

| Module | Publicly visible data |
|---|---|
| Module 1 (Actors) | Manufacturer / EU REP name and country; SRN |
| Module 2 (Devices) | Device name, description, intended purpose, class, certificate status |
| Module 3 (Certificates) | Certificate status, NB name, validity dates |
| Module 4 (Clinical investigations) | Registered studies (registration data only, not protocols) |

This public accessibility is a core transparency objective of MDR/IVDR — patients, healthcare professionals, and regulators can verify that a device is properly registered with a valid CE certificate before use.

### SSCP — Summary of Safety and Clinical Performance

For **Class III devices** and **implantable devices** (MDR), and for **Class D IVDs** and certain Class C IVDs (IVDR), the manufacturer must upload a **Summary of Safety and Clinical Performance (SSCP)** to EUDAMED.

The SSCP is publicly accessible and must be written in plain language understandable by the intended users, including lay persons. It must include:
- Device description and intended purpose
- Indications, contraindications, and warnings
- Summary of clinical/performance evidence
- Summary of residual risks and side effects
- Profile of intended users
- Relevant information for patients with implants
- Date of last update

The SSCP is validated by the notified body before publication.

---

## EUDAMED rollout status

EUDAMED implementation has been phased, with mandatory use dates aligned to device class timelines. Some modules became fully mandatory later than originally planned due to system development challenges. The Commission publishes notices when each module transitions from optional to mandatory.

Manufacturers should monitor:
- **Official Journal of the EU** — mandatory use decisions are published here
- **ec.europa.eu/tools/eudamed** — the Commission publishes current module status and user guides

---

## Related pages

- [EUDAMED overview](./overview)
- [Economic operator registration (SRN)](./economic-operator-registration)
- [UDI overview & structure](/pre-market/udi-system/udi-overview)
- [EUDAMED vigilance module](/post-market/adverse-event-reporting/eudamed-vigilance-module)

---

## Official references

| Reference | Description |
|---|---|
| MDR Art. 28–29 | Device registration obligations |
| MDR Art. 32 | Summary of Safety and Clinical Performance (SSCP) |
| MDR Art. 33 | Electronic systems — EUDAMED |
| IVDR Art. 25–26 | IVDR device registration |
| MDCG 2019-9 | SSCP guidance |
| EUDAMED user guides | ec.europa.eu/tools/eudamed |

SSCP — Summary of Safety and Clinical Performance For Class III devices (MDR) and Class D devices (IVDR), manufacturers must register a Summary of Safety and Clinical Performance (SSCP) in EUDAMED Module 2. The SSCP is a summary document synthesising the clinical and safety data supporting the device, and it must be updated whenever the supporting data changes materially.
