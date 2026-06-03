---
title: Cybersecurity Requirements for Connected Devices
sidebar_position: 4
description: SFDA cybersecurity expectations for networked and connected medical devices — risk management, technical controls, and the regulatory framework.
---

# Cybersecurity Requirements for Connected Devices

## Why cybersecurity matters for medical devices

Connected medical devices — those with network connectivity, Bluetooth, Wi-Fi, or data exchange capabilities — introduce cybersecurity risks that can affect patient safety. A cybersecurity vulnerability that allows unauthorised access to a pacemaker programmer, insulin pump, or diagnostic imaging system could directly harm patients.

The SFDA addresses cybersecurity for connected medical devices within its existing regulatory framework, drawing on international guidance from the IMDRF, FDA, and other regulators.

## SFDA regulatory approach

The SFDA has not yet issued a standalone cybersecurity-specific guidance document, although it references IMDRF N60 and IEC standards in regulatory practice. The FDA's Cybersecurity Guidance for Medical Devices and IMDRF N60 serve as de facto reference frameworks. Instead, cybersecurity requirements for connected devices are addressed through:

- **Essential Principles of Safety and Performance** — connected devices must not introduce unacceptable risks to patients or users, including cybersecurity risks
- **Risk management (ISO 14971)** — cybersecurity threats must be identified and addressed within the risk management process
- **Software lifecycle (IEC 62304)** — cybersecurity is part of software development lifecycle requirements
- **IMDRF cybersecurity guidance** — the SFDA, as an IMDRF member, applies IMDRF principles including the **IMDRF N60 document** (Principles and Practices for Medical Device Cybersecurity)

## What the technical file should address for connected devices

For any device with connectivity features, the technical file should include:

### Cybersecurity risk management
- Identification of cybersecurity hazards (threat modelling)
- Assessment of impact and likelihood for identified threats
- Risk controls implemented (encryption, authentication, access controls, secure boot)
- Residual risk assessment

### Security architecture
- Description of communication interfaces (network, Bluetooth, USB, etc.)
- Authentication and access control mechanisms
- Data encryption in transit and at rest
- Secure software update mechanism

### Software development security
- Secure coding practices implemented
- Penetration testing or vulnerability scanning conducted
- Known vulnerability (CVE) assessment for software components
- Software Bill of Materials (SBOM) — list of software components

### Post-market cybersecurity
- Process for monitoring for newly discovered vulnerabilities (post-market cybersecurity surveillance)
- Mechanism for issuing security patches or software updates
- Coordinated vulnerability disclosure policy
- Plan for end-of-support lifecycle management

## Applicable standards

| Standard / Guidance | Scope |
|---|---|
| IMDRF N60 | Principles and practices for medical device cybersecurity |
| IEC 62443 series | Industrial and medical device cybersecurity |
| IEC 81001-5-1 | Health software and health IT cybersecurity |
| NIST Cybersecurity Framework | Referenced in international guidance |
| IEC 62304:2006+A1:2015 | Software lifecycle (includes security in development) |

## Cybersecurity for AI/ML devices

AI-enabled connected devices face additional cybersecurity considerations including:
- **Model integrity** — protection against adversarial attacks that manipulate AI model outputs
- **Data poisoning** — protection of training data pipelines
- **Explainability audits** — ensuring transparency in AI decision-making cannot be subverted

→ See [AI/ML-Enabled Devices](./ai-ml-guidance)

## Practical recommendation

Manufacturers of connected devices should:
1. Conduct a **threat model** during design — use STRIDE or similar methodology
2. Document cybersecurity controls in the technical file under Essential Principles compliance
3. Include cybersecurity as a **risk management input** in the ISO 14971 process
4. Develop a post-market **cybersecurity update/patch policy**
5. Monitor SFDA and IMDRF for emerging cybersecurity-specific guidance

## Further reading

- IMDRF N60 — Principles and Practices for Medical Device Cybersecurity
- IEC 62304 — Software lifecycle
- [SaMD Overview](./samd-overview)
- [AI/ML Guidance](./ai-ml-guidance)
- [Essential Principles](../technical-documentation/essential-principles)
- [Risk Management](../technical-documentation/risk-management)

Post-Market Cybersecurity Incident Reporting

Manufacturers of connected medical devices must report cybersecurity incidents that could reasonably affect patient safety or device functionality to the SFDA via the Vigilance system. Incidents should be reported without undue delay; the SFDA expects notification of confirmed security breaches, zero-day exploits affecting deployed devices, and any security updates issued to users. Coordinate with the SFDA on the appropriate severity classification and reporting timeline.
