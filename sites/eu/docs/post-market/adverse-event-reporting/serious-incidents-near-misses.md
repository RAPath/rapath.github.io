---
id: serious-incidents-near-misses
title: Serious incidents & near-misses
sidebar_label: Serious incidents & near-misses
sidebar_position: 2
tags: [mdr, ivdr, vigilance, serious-incidents]
---

# Serious incidents & near-misses

:::note
**Regulatory basis** - **MDR Art. 2(65) and Art. 87 / IVDR Art. 2(67) and Art. 82**. The definitions of serious incident and near-miss determine the scope of mandatory vigilance reporting.
:::

:::warning
**Disclaimer** - This site provides general information only and does not constitute legal or regulatory advice. Always consult the official regulation text and a qualified regulatory professional.
:::

---

## Anatomy of a serious incident determination

When a device-related event occurs, the manufacturer must work through a structured assessment to determine whether a serious incident report is required. The determination has two elements:

**Element 1 — Is there a device malfunction, deterioration, or inadequacy?**

| Type | Examples |
|---|---|
| Malfunction or deterioration of characteristics or performance | Device fails to deliver medication, implant fractures, software crashes |
| Inadequacy in manufacturer-supplied information | IFU does not warn of a known risk; contraindication omitted from labelling |
| Use error attributable to ergonomic features | Confusing interface leading to incorrect dose selection |

**Element 2 — Did it (or could it) lead to a serious outcome?**

| Outcome | Threshold |
|---|---|
| Death | Directly or indirectly caused or contributed |
| Serious deterioration of health | Temporary or permanent; includes life-threatening illness, permanent impairment, foetal distress |
| Serious public health threat | As defined by MDR Art. 2(65)(c) |

Both elements must be present for an incident to qualify as serious. A device malfunction or inadequacy that poses no plausible pathway to serious harm is not a serious incident and does not require vigilance reporting (though it should still be documented in the PMS system and complaints database).

---

## The "might have led to" standard — practical application

The most challenging aspect of serious incident determination is the **counterfactual**: events where serious harm did *not* occur but might have.

### Worked examples

**Example 1 — Reportable near-miss**
An infusion pump software error causes the pump to display a "pump occluded" alarm when it is actually delivering medication at double the programmed rate. A nurse catches the error before the patient receives the full double dose. No patient harm occurred.

Assessment: The malfunction might have led to a life-threatening overdose. The double-delivery rate could have been fatal in a critically ill patient. **Reportable** — serious incident.

**Example 2 — Not reportable**
A blood pressure cuff's velcro fastener degrades and the cuff becomes difficult to apply. A nurse records a blood pressure using a different cuff. No measurement impact.

Assessment: Device deterioration occurred, but there is no plausible pathway to serious harm — the device was simply replaced. **Not reportable** as a serious incident; managed through complaints/PMS.

**Example 3 — Reportable IVD incident**
An IVD lot is found to have false-negative results for a blood-borne pathogen at low viral loads due to a reagent manufacturing error. Some units have already been used in clinical testing.

Assessment: False-negative results for a serious infectious disease might have led to untreated infection with serious health consequences. **Reportable** — serious incident; and likely triggers an FSCA for the affected lot.

---

## Near-misses — when to report

A **near-miss** is an event where:
- A device malfunction or inadequacy occurred, and
- Serious harm would have occurred but for:
  - Intervention by a healthcare professional or patient
  - Chance (the patient was not connected at that moment)
  - Redundant safety systems

Near-misses are **reportable** under MDR/IVDR if the malfunction "might have led" to death or serious deterioration. The fact that harm was averted does not remove the reporting obligation.

:::tip
Near-miss reporting is one of the most valuable inputs to the vigilance system — near-misses reveal potential failure modes before they become actual patient harm events. NCAs actively encourage thorough near-miss reporting.
:::

---

## Use errors and ergonomic deficiencies

MDR Art. 2(65) explicitly includes **use errors due to ergonomic features** within the definition of serious incident. This is a significant expansion from older frameworks:

- If a healthcare professional makes a dosing error because a device's interface is confusing or counterintuitive, and that error leads to or might have led to serious harm, this is a **serious incident attributable to the device** — not solely a user error
- The manufacturer must assess whether the ergonomic feature is a contributing cause
- This is assessed as part of the risk management process and usability engineering requirements

---

## Investigating a potential serious incident

When a potentially reportable event is identified, the manufacturer must:

1. **Log and triage**: capture the event in the complaints/vigilance management system and assess urgency
2. **Initiate preliminary assessment**: determine within 24 hours whether an immediate safety action or urgent reporting is needed
3. **Submit initial report**: within the applicable timeframe (see [Reporting timeframes](./reporting-timeframes))
4. **Conduct full investigation**: root cause analysis, device analysis (if device returned), assessment of event sequence
5. **Submit final report**: with investigation conclusions and any corrective actions
6. **Update PMS and risk management files**: incorporate findings

---

## Related pages

- [What must be reported](./what-must-be-reported)
- [Reporting timeframes](./reporting-timeframes)
- [How to report — NCAs](./how-to-report-ncas)
- [When an FSCA is required](/post-market/field-safety-corrective-actions/when-fsca-required)

---

## Official references

| Reference | Description |
|---|---|
| MDR Art. 2(65) | Serious incident definition |
| IVDR Art. 2(67) | IVDR serious incident definition |
| MDR Art. 87(1) | Reporting obligation |
| MDCG 2023-3 | Serious incident reporting guidance |
| MDCG 2019-14 | Vigilance reporting worked examples |

MDR Art. 2(65) explicitly includes use errors due to ergonomic features within the definition of serious incident. This is a significant expansion beyond traditional adverse event reporting — it places responsibility on manufacturers to evaluate whether design or ergonomic features of the device could lead users to make mistakes that result in serious harm. Examples include confusing button layouts, unclear labelling, or inadequate visual/audio feedback that causes a user to operate the device incorrectly.
