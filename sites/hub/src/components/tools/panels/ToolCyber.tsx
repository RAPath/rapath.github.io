import React, { useState } from "react";
import { Shield, CheckCircle2 } from "lucide-react";

// Cybersecurity requirements reviewed against:
// EU: MDCG 2019-16 (under revision); EU MDR Annex I GSPR §12a; EU Cyber Resilience Act (in force 2024)
// FDA: Cybersecurity in Medical Devices: Quality System Considerations and Content of Premarket Submissions (Sept 2023)
// UK MHRA: Guidance on cybersecurity for medical devices (Oct 2021)
// Global standards: IEC 81001-5-1:2021, AAMI TIR57:2016, AAMI TIR97:2019, NIST CSF 2.0 (Feb 2024)

type TabId = "premarket" | "postmarket" | "standards";

const PREMARKET = [
  {
    jur:"🇪🇺 EU (MDR + MDCG 2019-16)", color:"#1e40af", bg:"#eff6ff",
    items:[
      "Cybersecurity risk assessment documented as part of GSPR §12a compliance",
      "Software Bill of Materials (SBOM) — list of all software components including third-party libraries",
      "Security architecture description showing trust boundaries, data flows, and authentication mechanisms",
      "Threat model (e.g. STRIDE) covering all attack surfaces and assets",
      "Security controls implementation evidence (access control, encryption, authentication)",
      "Security testing results — vulnerability scan, static analysis (SAST), penetration test report",
      "Patch management and update plan — including update mechanism description",
      "Minimum security requirements for operating environment",
      "Coordinated Vulnerability Disclosure (CVD) policy document",
      "Note: EU Cyber Resilience Act (CRA) applies to connected devices from October 2027",
    ],
  },
  {
    jur:"🇺🇸 FDA (Sept 2023 Guidance)", color:"#166534", bg:"#f0fdf4",
    items:[
      "SBOM in machine-readable format — SPDX 2.x or CycloneDX 1.4+ required",
      "Security architecture diagram with data flows, interfaces, and trust zones",
      "Cybersecurity risk assessment (threat model — STRIDE, PASTA, or equivalent)",
      "Security controls: authentication (MFA recommended), authorisation, encryption (TLS 1.2+ minimum)",
      "Security testing: SAST, DAST, fuzzing, penetration testing results with remediation evidence",
      "Total Product Lifecycle (TPLC) cybersecurity plan covering design through EOL",
      "Coordinated Vulnerability Disclosure (CVD) policy — 24-hour acknowledgement SLA",
      "Patch and update management plan — including critical patch timeline (30 days for critical CVEs)",
      "Cybersecurity section is now mandatory in all 510(k), De Novo, and PMA submissions",
      "FDA may issue Refuse to Accept (RTA) if cybersecurity information is missing or incomplete",
    ],
  },
  {
    jur:"🇬🇧 MHRA (2021 Guidance)", color:"#5b21b6", bg:"#faf5ff",
    items:[
      "Cybersecurity risk assessment as part of general safety and performance requirements",
      "Access control and authentication requirements documented",
      "Encryption for data in transit (TLS) and data at rest where appropriate",
      "Security testing documentation — scope, methodology, and results",
      "Vulnerability management and patch deployment plan",
      "Incident response and disclosure process",
      "Note: MHRA is developing updated cybersecurity guidance aligned with international frameworks",
    ],
  },
];

const POSTMARKET = [
  { req:"Vulnerability monitoring",     desc:"Continuously monitor public CVE databases (NVD, vendor advisories) for vulnerabilities in SBOM components. Document monitoring frequency and process." },
  { req:"Critical patch deployment",    desc:"FDA guidance: critical/high-severity vulnerabilities (CVSS ≥ 7.0) should be patched within 30 days. Document deployment process and customer notification." },
  { req:"Vulnerability disclosure",     desc:"Maintain CVD policy. Coordinate with CISA (US), NCSC (UK), CERT-EU, or equivalent. Acknowledge researcher reports within 24 hours." },
  { req:"SBOM maintenance",             desc:"Update SBOM with each software release. Ensure SBOM reflects current production version at all times." },
  { req:"Incident reporting",           desc:"Cybersecurity incidents that result or could result in patient harm are reportable as vigilance events. Apply standard MDR/FSCA timelines." },
  { req:"EOL / decommissioning plan",   desc:"Document end-of-life cybersecurity plan — notify users, cease security updates timeline, migration guidance." },
  { req:"Customer notification",        desc:"Proactively notify affected customers of critical vulnerabilities and available patches. Document notification timeline and evidence." },
];

const STANDARDS = [
  { std:"IEC 81001-5-1:2021",  scope:"Health software and health IT systems — security activities in the software lifecycle. Primary international standard for medical device software cybersecurity." },
  { std:"AAMI TIR57:2016",     scope:"Principles for medical device security — risk management. Foundational framework widely referenced by FDA and industry." },
  { std:"AAMI TIR97:2019",     scope:"Post-market cybersecurity management for medical devices. Covers vulnerability management, patch management, and EOL planning." },
  { std:"IEC 62443 series",    scope:"Industrial automation and control systems security — applied to connected medical devices and healthcare OT environments." },
  { std:"NIST CSF 2.0 (2024)", scope:"NIST Cybersecurity Framework 2.0 — widely used as supporting framework for medical device cybersecurity risk management." },
  { std:"ISO/IEC 27001:2022",  scope:"Information security management systems. Supporting standard — provides organisational-level security controls." },
  { std:"UL 2900-2-1",         scope:"Standard for software cybersecurity for network-connectable medical devices. Referenced in FDA submissions." },
  { std:"MDCG 2019-16",        scope:"EU MDCG guidance on cybersecurity for medical devices — currently under revision. Key reference for EU MDR GSPR §12a compliance." },
];

export function ToolCyber() {
  const [tab, setTab] = useState<TabId>("premarket");

  return (
    <div>
      <div className="th-info">
        Cybersecurity documentation is now <strong>mandatory</strong> for connected and software-based medical devices
        in the EU, US, and UK. The FDA 2023 guidance and EU MDCG 2019-16 are the primary references.
        Requirements are converging globally around SBOM, threat modelling, and coordinated vulnerability disclosure.
      </div>

      <div className="th-filter-row">
        <button className={`th-filter${tab==="premarket"?" on":""}`}  onClick={()=>setTab("premarket")}>Pre-Market Requirements</button>
        <button className={`th-filter${tab==="postmarket"?" on":""}`} onClick={()=>setTab("postmarket")}>Post-Market Obligations</button>
        <button className={`th-filter${tab==="standards"?" on":""}`}  onClick={()=>setTab("standards")}>Applicable Standards</button>
      </div>

      {tab === "premarket" && (
        <div className="th-cyber-grid">
          {PREMARKET.map(d => (
            <div key={d.jur} className="th-cyber-card">
              <div className="th-cyber-title" style={{ color:d.color }}>{d.jur}</div>
              {d.items.map(item => (
                <div key={item} className="th-cyber-item">
                  <Shield size={12} color={d.color} style={{ marginTop:2, flexShrink:0 }} />
                  <span style={{ fontSize:item.startsWith("Note:") ? 11 : 12, color: item.startsWith("Note:") ? "#92400e" : "#374151", fontStyle: item.startsWith("Note:") ? "italic" : "normal" }}>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {tab === "postmarket" && (
        <div>
          {POSTMARKET.map(r => (
            <div key={r.req} style={{ display:"flex", gap:14, padding:"13px 0", borderBottom:"1px solid #f1f5f9", alignItems:"flex-start" }}>
              <div style={{ width:160, flexShrink:0 }}>
                <span style={{ fontSize:12, fontWeight:700, color:"#0f172a" }}>{r.req}</span>
              </div>
              <div style={{ fontSize:13, color:"#374151", lineHeight:1.6 }}>{r.desc}</div>
            </div>
          ))}
          <div className="th-warn">
            Post-market cybersecurity is an ongoing obligation — not a one-time activity.
            Manufacturers should establish a dedicated vulnerability management process before market entry.
          </div>
        </div>
      )}

      {tab === "standards" && (
        <div>
          {STANDARDS.map(s => (
            <div key={s.std} style={{ display:"flex", gap:14, padding:"12px 0", borderBottom:"1px solid #f1f5f9", alignItems:"flex-start" }}>
              <div style={{ width:170, flexShrink:0 }}>
                <span style={{ fontSize:12, fontWeight:700, color:"#2563eb", fontFamily:"DM Mono, monospace" }}>{s.std}</span>
              </div>
              <div style={{ fontSize:13, color:"#374151", lineHeight:1.55 }}>{s.scope}</div>
            </div>
          ))}
          <div className="th-warn">
            Cybersecurity standards and guidance evolve rapidly. Always check for the most current version
            of each standard and the latest FDA/MHRA/MDCG guidance before preparing your submission.
          </div>
        </div>
      )}
    </div>
  );
}
