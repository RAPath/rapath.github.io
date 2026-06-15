---
sidebar_position: 4
description: Cybersecurity requirements for medical devices in Switzerland — IEC 81001-5-1, MDCG 2019-16, pre-market technical documentation, and post-market vulnerability management.
keywords: [cybersecurity, medical device, IEC 81001-5-1, MedDO, Switzerland, MDCG 2019-16]
---
# Cybersecurity Requirements

## Overview
MedDO Annex I § 17.2 requires software-based devices to achieve a level of IT security appropriate to their intended purpose, protecting against unauthorised access that could affect device operation or safety. These requirements apply both pre-market (in technical documentation) and post-market (through PMS and patch management).

## Key Standard — IEC 81001-5-1
**IEC 81001-5-1:2021** (Health software security activities in the product lifecycle) is the primary harmonised standard. It provides: security risk management integrated with ISO 14971; threat modelling and vulnerability management; security testing requirements; secure communication guidance; post-market monitoring and patch management.

## Pre-Market Technical Documentation Requirements
Technical documentation must include: cybersecurity risk assessment integrated with the risk management file; threat modelling outputs; security controls implemented (encryption, authentication, access controls); minimum hardware/software environment description; penetration test results (for connected devices); software bill of materials (SBOM).

## Post-Market Cybersecurity
Post-market obligations include: establishing and monitoring a documented process to track CVE databases and vendor security advisories for vulnerabilities affecting third-party components and dependencies; developing and issuing security patches or updates through the Post-Market Surveillance (PMS) system with documented patch management timelines; reporting cybersecurity incidents that constitute serious incidents (those affecting device safety or function) to Swissmedic via eVigilance within the required timeframe; maintaining records of all cybersecurity-related post-market activities for inspection.


Software Composition Analysis and Vulnerability Scanning
​
Manufacturers should implement automated software composition analysis (SCA) tools to identify third-party components and open-source libraries in the device's software. Conduct vulnerability scanning against CVE databases (NVD, GitHub Security Advisory, vendor-specific advisories) during development and before release. Document all identified vulnerabilities and the remediation or risk acceptance decisions. For connected devices and those with internet-facing components, annual vulnerability rescans are recommended as part of post-market surveillance.

## Official Sources
- [MedDO Annex I § 17 (SR 812.213)](https://www.fedlex.admin.ch/eli/cc/2021/205/en)
- [MDCG 2019-16 — Cybersecurity for medical devices](https://health.ec.europa.eu/medical-devices-sector/new-regulations/guidance-mdcg-endorsed-documents-and-other-guidance_en)

:::warning Disclaimer
AI-assisted content for navigation only. Always verify against official [Swissmedic](https://www.swissmedic.ch) and [Fedlex](https://www.fedlex.admin.ch) sources. Not legal or regulatory advice.
:::

Patch Management Timeline Expectations
​
While MedDO does not prescribe specific timelines for patch deployment, Swissmedic expects manufacturers to establish and document a patch management process that prioritises critical and high-severity vulnerabilities. MDCG 2019-16 recommends a risk-based approach where critical cybersecurity patches should be available to users within 30–90 days of discovery, depending on exploit likelihood and device accessibility. The patching strategy must be documented in the Post-Market Surveillance Plan.
