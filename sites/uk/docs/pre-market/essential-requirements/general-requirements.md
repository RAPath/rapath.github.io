---
sidebar_position: 2
title: General requirements — ER 1–6
description: >
  A detailed examination of the six general Essential Requirements in Section I of Schedule 1 of
  the UK Medical Devices Regulations 2002 — the safety, performance, risk management, and design
  principles that apply to every medical device placed on the GB market.
tags: [uk-mdr, essential-requirements, risk-management, pre-market]
---

:::note[Regulatory basis]
The six general Essential Requirements are in **Section I of Schedule 1** of the UK MDR 2002. They apply to **all** medical devices — there are no exceptions based on class. The requirements in Section II (ER 7–18) apply additionally for devices with specific properties. AIMDs have their own Schedule 1 under Part II, but the Section I principles apply equally.
:::

:::warning[Disclaimer]
This site provides general information only and does not constitute legal or regulatory advice. Always consult the UK MDR 2002 Schedule 1 text and MHRA guidance before preparing Essential Requirements documentation.
:::

---

## ER 1 — No compromise to patient or user safety

**The requirement:**

> Devices must be designed and manufactured in such a way that, when used under the conditions and for the purposes intended, they will not compromise the clinical condition or the safety of patients, or the safety and health of users or, where applicable, other persons, provided that any risks which may be associated with their use constitute acceptable risks when weighed against the benefits to the patient and are compatible with a high level of protection of health and safety.

### What this means in practice

ER 1 is the foundational safety requirement — every other Essential Requirement flows from it. It establishes that:

1. Safety is assessed **in the context of normal conditions of use** — not worst-case misuse scenarios beyond reasonable foreseeability
2. Safety is assessed **relative to the intended purpose** — a cardiac stent must be safer than the untreated disease, not absolutely risk-free
3. **Residual risks must be acceptable** — there is no zero-risk standard; the test is whether risks are outweighed by benefits at a population level

### Evidence of conformity

Evidence for ER 1 is assembled across the entire technical file rather than in a single document. The key contributions are:
- **Risk management file** (ISO 14971) — demonstrating systematic identification and reduction of all risks
- **Clinical evaluation report** — demonstrating the clinical benefit-risk balance
- **Design and testing data** — demonstrating the device behaves as intended in normal use
- **Post-market data** — confirming the benefit-risk balance in real-world use

---

## ER 2 — Risk reduction and the risk management process

**The requirement:**

> The solutions adopted by the manufacturer for the design and construction of the devices must conform to safety principles, taking account of the generally acknowledged state of the art. In selecting the most appropriate solutions, the manufacturer must apply the following principles in the following order:
> - eliminate or reduce risks as far as possible (inherently safe design and construction);
> - where appropriate, take adequate protection measures, including alarms if necessary, in relation to risks that cannot be eliminated;
> - inform users of the residual risks due to any shortcomings of the protection measures adopted.

### The risk hierarchy

ER 2 mandates a **three-level risk management hierarchy** — known internationally as the "safe design hierarchy":

**Level 1 — Inherent safety (design out the risk)**
The first response to any identified risk must be to eliminate it through design. Example: removing a sharp edge from a device handle, eliminating a toxic material from device construction.

**Level 2 — Protective measures**
Where risk cannot be eliminated by design, build in protection: guards, shields, interlocks, alarms, warnings. Example: an automated alarm on a ventilator for patient disconnection; a needle guard that deploys automatically.

**Level 3 — Information for safety**
Only after Levels 1 and 2 are exhausted does warning the user become an acceptable risk control measure. Residual risks that cannot be designed out or guarded against must be documented in the IFU. Example: "Do not use in patients with known allergy to silicone."

### ISO 14971 — the risk management standard

Conformity with ER 2 is most effectively demonstrated through a **risk management file** prepared in accordance with **ISO 14971:2019** (*Medical devices — Application of risk management to medical devices*). ISO 14971 is a UK-designated standard for this purpose.

The ISO 14971 risk management process includes:
1. **Risk management plan** — scope, responsibilities, risk acceptability criteria
2. **Hazard identification** — all foreseeable hazards and hazardous situations
3. **Risk estimation** — probability of harm and severity
4. **Risk evaluation** — is the risk acceptable against the criteria?
5. **Risk control** — selection and implementation of risk control measures (applying the Level 1-2-3 hierarchy)
6. **Residual risk evaluation** — are remaining risks acceptable?
7. **Overall residual risk evaluation** — is the aggregate residual risk acceptable given the medical benefit?
8. **Risk management report** — summary of the process and conclusions
9. **Post-market review** — feeding real-world data back into the risk management file

:::tip
The risk management file is a living document — it must be updated throughout the device's market life as new information becomes available from post-market surveillance, vigilance reports, and literature monitoring.
:::

---

## ER 3 — Performance as intended

**The requirement:**

> The devices must achieve the performances intended by the manufacturer and be designed, manufactured and packaged in such a way that they are suitable for one or more of the functions referred to in the definition of a medical device.

### What this means in practice

ER 3 is a performance guarantee — the device must actually do what the manufacturer claims it does. Conformity requires:

- **Analytical and functional testing** demonstrating the device meets its specifications
- **Preclinical testing** (bench testing, animal studies where appropriate)
- **Clinical evaluation** (for general devices) or **performance evaluation** (for IVDs) demonstrating real-world performance in the intended patient population
- **Packaging validation** confirming the device reaches the user in a condition capable of performing as intended

For IVDs, ER 3 is particularly critical — the device must achieve the claimed analytical sensitivity, specificity, precision, and accuracy in the hands of the intended user population using the specified specimen types.

---

## ER 4 — Long-term stability of characteristics

**The requirement:**

> The characteristics and performances referred to in ERs 1, 2, and 3 must be maintained throughout the lifetime of the device as indicated by the manufacturer, when the device is subjected to the stresses which can occur during normal conditions of use.

### What this means in practice

The device must not degrade below its specified performance over its intended life. Evidence of conformity requires:

- **Accelerated ageing studies** — demonstrating that sterility, mechanical integrity, and performance are maintained over the claimed shelf life (typically for sterile devices)
- **Shelf-life validation** — real-time and accelerated ageing data supporting the expiry date or use-by period
- **Fatigue testing** — for devices subject to repeated mechanical stress (implants, instruments)
- **Material stability data** — demonstrating resistance to sterilisation, cleaning, and storage conditions
- **Sterilisation validation** (if applicable) — ensuring sterility is maintained throughout the claimed shelf life

---

## ER 5 — Transport and storage

**The requirement:**

> Devices must be designed, manufactured and packed in such a way that their characteristics and performances during their intended use will not be adversely affected during transport and storage taking account of the instructions and information provided by the manufacturer.

### What this means in practice

ER 5 focuses on **packaging and transport conditions**. The manufacturer must:

- Define **environmental storage conditions** (temperature range, humidity, light exposure) in the IFU
- Validate that packaging maintains device integrity and (where applicable) sterility under the stated storage conditions
- Validate that packaging withstands the stresses of normal distribution (vibration, shock, compression, climate variation) without compromising device performance

Key standards relevant to ER 5:
- **ISO 11607** — packaging for terminally sterilised medical devices
- **ASTM D4169 / ISTA 2A** — distribution simulation testing
- **EN 868 series** — packaging materials for terminally sterilised medical devices

---

## ER 6 — Acceptable undesirable side effects

**The requirement:**

> Any undesirable side effect must constitute an acceptable risk when weighed against the performances intended.

### What this means in practice

ER 6 acknowledges that **no medical device is without side effects or undesirable effects**. The requirement is not that side effects are eliminated, but that they are:

1. **Identified** — through pre-clinical testing, clinical evaluation, and post-market surveillance
2. **Evaluated** — assessed for frequency and severity relative to the intended benefit
3. **Acceptable** — the benefit-risk balance is favourable

Examples:
- A hip implant may cause local tissue irritation in a subset of patients — this is acceptable if documented and managed in the IFU, and if the benefit to the patient exceeds the risk
- A wound dressing may cause minor skin sensitivity in rare cases — acceptable if it effectively manages the wound

Side effects that are not disclosed in the IFU, or that are disproportionate to the clinical benefit, would not satisfy ER 6.

The clinical evaluation report is the primary document where the benefit-risk assessment addressing ER 6 is made explicit.

---

## How the general ERs work together

The six general ERs are not independent — they form a coherent framework:

| ER | Question answered |
|---|---|
| ER 1 | Is the device safe for its intended purpose? |
| ER 2 | Have all risks been systematically identified, reduced, and managed? |
| ER 3 | Does the device actually work as claimed? |
| ER 4 | Will it continue to work throughout its intended life? |
| ER 5 | Will it reach the user in working condition? |
| ER 6 | Are the side effects proportionate to the benefits? |

Together, they define the minimum standard of safety and performance that justifies allowing a device onto the GB market.

---

## Related pages

- [Essential Requirements — overview](./overview)
- [Design and construction — ER 7–17](./design-construction-requirements)
- [IVD Essential Requirements (Schedule 1A)](./ivd-essential-requirements)
- [Technical documentation overview](../technical-documentation/overview)
- [Clinical evidence — what is required](../clinical-evidence/what-is-required)

---

## Official references

| Reference | Description |
|---|---|
| UK MDR 2002, Schedule 1, Section I | ER 1–6 full text |
| ISO 14971:2019 | Risk management for medical devices (ER 2) |
| ISO 11607 | Packaging for terminally sterilised devices (ER 5) |
| MHRA: Guidance on the UK MDR 2002 | Overarching MHRA guidance |
