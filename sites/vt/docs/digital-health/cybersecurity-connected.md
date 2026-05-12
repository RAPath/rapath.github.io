---
sidebar_position: 3
title: Cybersecurity for Connected Devices
description: Cybersecurity requirements and expectations for networked and connected medical devices in Vietnam.
---

# Cybersecurity for Connected Medical Devices

Medical devices that connect to hospital networks, the internet, or other devices — including devices with wireless interfaces, cloud-connected software, and remote monitoring systems — carry cybersecurity risks that manufacturers must address as part of their safety and performance obligations under Decree 98/2021.

## Why cybersecurity matters for medical device regulation

A cybersecurity vulnerability in a medical device is a safety risk. Unauthorised access to a connected device could:
- Alter device settings or therapy delivery (e.g. changing infusion pump parameters)
- Corrupt or falsify diagnostic outputs (e.g. manipulating monitoring alarms)
- Compromise patient data confidentiality
- Disrupt hospital network operations through the device as an entry point

Vietnam does not yet have a dedicated medical device cybersecurity regulation, but the **Essential Principles of Safety and Performance** under Decree 98/2021 — which require devices to be safe and perform as intended throughout their lifecycle — encompass cybersecurity as an element of safety for connected devices.

## What DAV expects for connected devices

For connected medical devices submitted for Type C or D registration, the technical dossier should address cybersecurity through:

### Cybersecurity risk management

- Integration of cybersecurity into the ISO 14971 risk management process
- Identification of cybersecurity threats, vulnerabilities, and threat actors relevant to the device's connectivity profile
- Risk controls implemented (technical and procedural)
- Residual cybersecurity risks assessed as acceptable

### Secure design principles

- Principle of least privilege — software components operate with minimum necessary permissions
- Authentication and access controls for device interfaces
- Encryption of data in transit and at rest (where clinically sensitive data is involved)
- Secure boot and firmware integrity verification
- Audit logging of security-relevant events

### Software bill of materials (SBOM)

Increasingly expected internationally, an SBOM lists all software components — including third-party and open-source libraries — enabling post-market monitoring for newly disclosed vulnerabilities.

### Vulnerability management and patching

The dossier and post-market plan should describe:
- How newly disclosed vulnerabilities (CVEs) will be monitored
- The process for assessing whether a disclosed vulnerability affects the device
- The patch/update release process
- How security patches will be distributed to devices in the field in Vietnam

### Instructions for use — cybersecurity guidance

The IFU for connected devices should include:
- Minimum network security requirements for the deployment environment
- Guidance on secure configuration
- Instructions for applying security updates
- Contact information for reporting cybersecurity incidents

## Post-market cybersecurity

Cybersecurity is not a one-time pre-market exercise. Post-market obligations include:
- Ongoing monitoring for newly disclosed vulnerabilities in device software components
- Coordinated vulnerability disclosure procedures
- Issuing security patches or FSCAs when a cybersecurity vulnerability poses patient safety risk

## National cybersecurity law context

Vietnam's **Law on Cybersecurity 2018** (Luật An ninh mạng) and associated regulations impose obligations on operators of critical information infrastructure — which includes healthcare. Connected medical devices operating within hospital IT networks may be in scope. Coordinate with hospital IT and security teams to understand the applicable requirements in the deployment context.

:::note
International standards IEC 81001-5-1 (Health software cybersecurity) and AAMI TIR57 (Cybersecurity risk management for medical devices) are the most directly applicable technical standards. IMDRF guidance N60 (Cybersecurity for medical devices) is the key international regulatory reference and provides a solid framework for preparing cybersecurity documentation for Vietnamese DAV submissions.
:::
