---
sidebar_position: 2
title: Software & AI as a medical device
description: >
  Detailed guidance on software as a medical device (SaMD) and artificial intelligence/machine
  learning (AI/ML) medical devices under the UK MDR 2002 — qualification, classification, technical
  documentation requirements, and MHRA's AI Change Programme.
tags: [uk-mdr, software, ai, samd, special-device-types, pre-market]
---

:::note[Regulatory basis]
Software as a medical device is classified under **Schedule 2, particularly Rule 12** of the UK MDR 2002. MHRA's [Software and AI as a Medical Device Change Programme](https://www.gov.uk/government/publications/software-and-ai-as-a-medical-device-change-programme-roadmap) provides the framework for AI/ML-specific regulatory requirements in the UK.
:::

---

## Qualification: is your software a medical device?

Before applying classification rules, determine whether the software **qualifies** as a medical device. See [Software & SaMD classification](../classification/software-samd-classification) for the full qualification analysis.

In summary: software qualifies if it:
1. Has a medical intended purpose claimed by the manufacturer
2. Acts on data (not merely stores or transfers it)
3. Produces output that informs or influences clinical decisions

---

## Classification: which class?

Software classification under UK MDR 2002 follows **Rule 12** of Schedule 2, interpreted in light of clinical impact:

| Clinical impact of software output | Class |
|---|---|
| Informs decisions with minor or no clinical impact | Not a medical device OR Class IIa |
| Informs decisions with significant but non-critical impact | Class IIa |
| Informs decisions with serious clinical impact | Class IIb |
| Controls life-sustaining therapy; directly interfaces with CNS/cardiovascular | Class III |

See [Software & SaMD classification](../classification/software-samd-classification) for worked examples by software type.

---

## Technical documentation for SaMD

Beyond the standard technical file elements, software medical devices require additional documentation:

### Software Description Document (SDD)

A high-level description of the software including:
- Software architecture overview
- Operating environment (OS, hardware dependencies, cloud vs local)
- Key algorithms and logic
- Data inputs and outputs
- User interface description
- Integration with other systems or devices

### Software Requirements Specification (SRS)

Detailed requirements the software must meet — functional, performance, safety, and regulatory requirements. The SRS is the software design input.

### Software lifecycle documentation (IEC 62304)

**IEC 62304** is the international standard for medical device software lifecycle processes. MHRA expects SaMD manufacturers to comply with IEC 62304, which requires:

- Software development planning
- Software requirements analysis
- Software architectural design
- Software detailed design
- Software unit implementation and verification
- Software integration and integration testing
- Software system testing
- Software release process
- Software configuration management
- Software problem resolution process

IEC 62304 classifies software units into safety classes (A, B, C) based on the severity of harm that could result from a software failure — this determines the rigour of software testing required.

### Cybersecurity documentation

MHRA expects software medical device manufacturers to address **cybersecurity** as part of the risk management process:

- Threat modelling and cybersecurity risk assessment
- Secure development lifecycle practices
- Vulnerability management process
- Incident response plan
- Post-market cybersecurity monitoring
- Software update and patch management
- Encryption, authentication, and access control documentation

MHRA has endorsed the UK NCSC's guidance and MDCG 2019-16 on cybersecurity for medical devices. For internet-connected or networked SaMD, a cybersecurity risk assessment is effectively mandatory.

### Usability engineering (IEC 62366-1)

For SaMD with a user interface, **IEC 62366-1** applies — covering:
- Intended use specification
- User interface design process
- Formative and summative usability testing
- Residual use-related risk documentation

Usability is particularly important for clinical decision support software where user misinterpretation of the software output could lead to patient harm.

---

## AI/ML-specific considerations

Artificial intelligence and machine learning introduce regulatory challenges that traditional medical device frameworks were not designed to address:

### 1. Algorithm opacity ("black box" problem)

Many AI/ML algorithms — particularly deep learning — do not provide human-understandable explanations for their outputs. MHRA expects:
- Documentation of the algorithm type and architecture
- Validation data demonstrating performance across relevant subpopulations
- Transparency to users about the AI-generated nature of outputs
- Limitations documentation (cases where the algorithm may underperform)

### 2. Training and validation data

The technical file must document:
- **Training dataset** — source, size, demographic diversity, labelling methodology
- **Validation dataset** — separation from training data; representativeness
- **Test dataset** — independent from training and validation; used for final performance reporting
- **Bias assessment** — does the algorithm perform consistently across age, sex, ethnicity, disease severity subgroups?
- **Data provenance** — were data collected ethically? With appropriate consent?

### 3. Predetermined change control plans (PCCPs)

Traditional conformity assessment is a point-in-time process — but AI/ML algorithms may continue to learn and change after deployment. MHRA is developing guidance on **Predetermined Change Control Plans (PCCPs)** — documents that:

- Pre-specify the types of changes the manufacturer anticipates making to the algorithm post-market
- Define the conditions and evidence thresholds that must be met before each specified change is implemented
- Set out how the manufacturer will monitor and evaluate post-market performance

A PCCP, approved as part of initial conformity assessment, allows the manufacturer to implement specified algorithm updates without re-initiating the full conformity assessment process — provided they remain within the pre-approved scope.

:::tip[MHRA AI Change Programme]
MHRA's Software and AI as a Medical Device Change Programme is developing UK-specific guidance on PCCPs, AI transparency, and post-market performance monitoring. Check the [What's New](../../whats-new/recent-regulatory-changes) section for the latest published guidance.
:::

### 4. Continuous learning algorithms

Algorithms that update their parameters based on real-world data encountered after deployment ("locked" vs "adaptive" algorithms) present particular challenges. An adaptive algorithm that changes its behaviour post-market must be validated continuously, and each materially significant change may constitute a design change requiring technical file update and potentially UKAB notification.

---

## IVD software

Software that processes in vitro test results to produce a diagnostic output is classified under **Part III** as an IVD. Classification within the IVD framework (List A, B, Self-test, General) depends on the clinical context and analyte.

See [IVD classification](../classification/ivd-classification).

---

## Related pages

- [Software & SaMD classification](../classification/software-samd-classification)
- [What is a medical device?](../../start-here/what-is-a-medical-device) — SaMD in the definition
- [What is not a medical device?](../../start-here/what-is-not-a-medical-device) — wellness apps
- [Technical documentation overview](../technical-documentation/overview)
- [What's New](../../whats-new/recent-regulatory-changes) — MHRA AI Change Programme updates

---

## Official references

| Reference | Description |
|---|---|
| UK MDR 2002, Schedule 2, Rule 12 | Software classification rule |
| MHRA: Software and AI as a Medical Device | MHRA's AI Change Programme |
| IEC 62304:2006+AMD1:2015 | Software lifecycle processes |
| IEC 62366-1:2015 | Usability engineering |
| IEC 82304-1:2016 | Health software — general product safety |
| MDCG 2019-16 | Guidance on cybersecurity (reference — EU guidance, MHRA-endorsed) |
| MDCG 2021-24 (reference) | EU software classification guidance |

Many AI/ML algorithms — particularly deep learning neural networks — do not provide interpretable explanations for individual predictions (the 'black box' problem). MHRA expects manufacturers to address this through: (1) Algorithmic transparency — documenting how the algorithm works, what features it uses, and how outputs are generated; (2) Validation data — comprehensive performance testing on diverse datasets including edge cases; (3) Explainability documentation — explanation of how the algorithm reaches decisions for typical use cases; (4) Residual risk documentation — acknowledging limitations and misclassification risks; (5) Human-in-the-loop processes — ensuring that algorithm outputs are reviewed by qualified humans before clinical decisions are made. For high-risk AI/ML devices (e.g., those making or strongly influencing critical diagnostic or therapeutic decisions), MHRA may require independent validation or third-party audit of the algorithm.

2. Algorithm drift and real-world performance

AI/ML algorithms trained on one dataset may perform poorly when deployed on real-world data that differs from training data (covariate shift or data drift). MHRA expects: (1) Documentation of the training dataset characteristics, size, and diversity; (2) Testing on independent validation datasets that represent expected real-world variation; (3) Post-market performance monitoring to detect algorithm drift; (4) Procedures to retrain or update the algorithm if performance degrades; (5) Documentation of any updates or retraining and evidence that performance remains acceptable after update.

3. Cybersecurity and data integrity

AI/ML medical devices often process or transmit patient data and may be networked. Cybersecurity requirements include: (1) Encryption of data in transit and at rest; (2) Access controls and authentication; (3) Logging and audit trails; (4) Vulnerability assessment and patch management; (5) Data integrity verification; (6) Protection against adversarial attacks (intentional or unintentional manipulation of algorithm inputs to cause incorrect outputs).

4. Clinical validation expectations

For higher-risk AI/ML devices, MHRA expects: (1) Prospective clinical investigation data, not just retrospective dataset analysis; (2) Testing in representative clinical environments with real users; (3) Demonstration of clinical utility — that the algorithm improves patient outcomes compared to standard practice; (4) Quantification of sensitivity, specificity, positive and negative predictive values across clinically relevant subgroups; (5) Assessment of algorithm performance in populations underrepresented in the training data to detect bias.

provide transparent explanatory information about how their outputs are generated. This creates a regulatory challenge: the conformity assessment process depends on understanding how a device works and why it produces a particular output. For a black-box AI/ML algorithm, this understanding may not be available.

MHRA's expectation:
- The manufacturer must be able to explain the algorithm's behaviour sufficiently to perform risk management and design validation
- If an algorithm cannot be adequately understood or explained, MHRA is unlikely to accept it as safe and effective
- Manufacturers should consider using interpretable or explainable AI (XAI) approaches where possible, or provide validation data that demonstrates safe performance despite algorithmic opacity

2. Algorithm modification and real-world performance drift

AI/ML algorithms are often updated or retrained as new data becomes available. This introduces a regulatory challenge: is a retrained algorithm a "new" device? Does it require new conformity assessment?

MHRA's expectation:
- Changes to training data, model weights, or algorithmic parameters are design changes that must be controlled under a design change procedure
- Significant retraining or algorithm modification may require re-validation to demonstrate that performance remains safe and effective
- The manufacturer must have a post-market monitoring and algorithm update policy
- Updates must be validated before deployment to patients

3. Training data provenance and bias

AI/ML algorithms are only as good as the data used to train them. If training data is biased (e.g., underrepresents certain populations or demographic groups), the algorithm may perform differently in real-world use on underrepresented populations.

MHRA's expectation:
- The manufacturer must document the source, representativeness, and limitations of training data
- The technical file must address how the algorithm was validated across different patient populations and use environments
- If the algorithm's performance varies significantly by patient demographic or clinical subgroup, this must be disclosed in the labelling and IFU

4. Cybersecurity for networked AI/ML systems

AI/ML devices that operate in cloud environments or receive algorithm updates over the internet face cybersecurity risks:
- Unauthorised access to the cloud model
- Adversarial attacks on the algorithm input (feeding malicious data to generate false outputs)
- Interception of algorithm updates

MHRA's expectation:
- Manufacturers of cloud-based or networked AI/ML SaMD must perform cybersecurity risk assessments
- Encryption, authentication, and secure update mechanisms are required
- Incident response and post-market cybersecurity monitoring are mandatory
