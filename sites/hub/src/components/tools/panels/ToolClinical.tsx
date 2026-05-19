import React, { useState } from "react";

// Clinical evidence requirements based on:
// EU MDR Article 61 + MDCG 2020-6 Rev 1 (primary reference)
// TGA: Clinical Evidence Guidelines (March 2021) + TGA conformity assessment requirements
// FDA: 21 CFR 860.7; FDA guidance on 510(k) and PMA clinical evidence
// MHRA: MHRA guidance on clinical evaluation (broadly mirrors EU MDR post-Brexit)
// Health Canada: Guidance on clinical evidence requirements (March 2021)

interface ClinicalResult {
  level:   string;
  color:   string;
  bg:      string;
  steps:   string[];
  jurNotes: { jur: string; note: string }[];
}

function getResult(cls: string, novel: string, equiv: string, sw: string): ClinicalResult {
  // Class III — novel or no equivalence access
  if (cls === "III" && (novel === "yes" || equiv === "no")) return {
    level:  "Clinical Investigation Required",
    color:  "#dc2626", bg: "#fef2f2",
    steps:  [
      "Design Clinical Investigation Plan (CIP) per ISO 14155",
      "Obtain Ethics Committee / IRB / HREC approval",
      "Submit IDE (FDA), CIV notification (EU), or equivalent",
      "Conduct prospective interventional clinical study",
      "Statistical analysis and clinical report",
      "Submit clinical data package with marketing application",
    ],
    jurNotes: [
      { jur:"EU MDR",  note:"Article 61(4): Class III implantables and Class IIb active devices that administer/remove substances — clinical investigation required unless equivalence demonstrated with full data access." },
      { jur:"FDA",     note:"PMA requires valid scientific evidence — typically RCT or well-controlled clinical study. IDE required before US clinical investigation begins." },
      { jur:"TGA",     note:"Class III requires clinical evidence; nature depends on device type. TGA accepts overseas clinical data from recognised countries." },
      { jur:"MHRA",    note:"Mirrors EU MDR; clinical investigation required unless equivalence with data access is demonstrated." },
    ],
  };

  // Class III with equivalence and full data access
  if (cls === "III" && novel === "no" && equiv === "yes") return {
    level:  "Equivalence Approach + Literature + PMCF Plan",
    color:  "#ea580c", bg: "#fff7ed",
    steps:  [
      "Demonstrate equivalence per MDCG 2020-5 (technical, biological, clinical characteristics)",
      "Obtain contractual access to equivalent device's full technical documentation",
      "Conduct systematic literature search and critical appraisal",
      "Write Clinical Evaluation Report (CER) with equivalence justification",
      "Define Post-Market Clinical Follow-up (PMCF) plan to confirm ongoing safety/performance",
      "Note: For implantables, equivalence is very difficult to demonstrate under EU MDR",
    ],
    jurNotes: [
      { jur:"EU MDR",  note:"Article 61(5): Equivalence permitted for Class III only if contractual access to equivalent device's technical documentation is obtained. NB scrutinises equivalence claims rigorously." },
      { jur:"FDA",     note:"510(k) substantial equivalence — predicate not required to be identical; intended use and technological characteristics compared." },
      { jur:"TGA",     note:"Comparable overseas evidence (CE certificate + NB assessment) can support TGA application and reduce clinical data burden." },
    ],
  };

  // Class IIb
  if (cls === "IIb") return {
    level:  "Literature Review + Clinical Data + PMCF Plan",
    color:  "#ca8a04", bg: "#fefce8",
    steps:  [
      "Systematic literature search (PubMed, EMBASE, Cochrane; document search strategy)",
      "Critical appraisal of identified clinical data per MEDDEV 2.7/1 Rev 4 methodology",
      "Clinical data from equivalent devices where equivalence is demonstrable",
      "Benefit-risk analysis and clinical evaluation conclusion",
      "Establish PMCF plan with explicit data collection schedule and thresholds",
      "Periodic Safety Update Report (PSUR) — annually for Class IIb",
    ],
    jurNotes: [
      { jur:"EU MDR",  note:"MDCG 2020-6: CER required. PMCF plan mandatory. Annual PSUR. NB reviews CER as part of conformity assessment for Class IIb." },
      { jur:"FDA",     note:"510(k): clinical data required if performance data alone is insufficient. May require clinical study data for novel or higher-risk Class II." },
      { jur:"TGA",     note:"Clinical evidence must support Essential Principles compliance. Level of evidence depends on device type, novelty, and risk." },
    ],
  };

  // Class IIa
  if (cls === "IIa") return {
    level:  "Literature Review + Basic Clinical Data",
    color:  "#ca8a04", bg: "#fefce8",
    steps:  [
      "Targeted systematic literature search (document scope and search strategy)",
      "Clinical data from equivalent devices — equivalence assessment required",
      "Basic benefit-risk analysis and clinical evaluation conclusion",
      "Post-Market Surveillance plan with complaint monitoring and thresholds",
      "Annual Post-Market Surveillance Report (PMSR) review",
      "PMCF plan if literature is insufficient or gaps identified",
    ],
    jurNotes: [
      { jur:"EU MDR",  note:"CER required. PMSR annually. PMCF plan if pre-clinical data or literature is insufficient. NB may review CER for Class IIa." },
      { jur:"FDA",     note:"510(k): clinical data typically required to demonstrate substantial equivalence for moderate-risk Class II devices." },
      { jur:"TGA",     note:"Clinical evidence appropriate to the risk class. Literature review often sufficient for well-established Class IIa device types." },
    ],
  };

  // Class I
  if (sw === "yes") return {
    level:  "Performance Data + Literature (SaMD — Class I)",
    color:  "#16a34a", bg: "#f0fdf4",
    steps:  [
      "Document intended purpose and IMDRF N41 SaMD risk category",
      "Algorithm performance validation on representative dataset",
      "Literature review on underlying clinical basis / clinical need",
      "Basic benefit-risk analysis",
      "Post-Market Surveillance plan",
    ],
    jurNotes: [
      { jur:"EU MDR / IVDR", note:"Even Class I SaMD requires clinical evaluation — literature review and algorithm performance data typically sufficient." },
      { jur:"FDA",            note:"Class I SaMD often 510(k)-exempt but still requires basic performance demonstration." },
    ],
  };

  return {
    level:  "Literature Review Typically Sufficient",
    color:  "#16a34a", bg: "#f0fdf4",
    steps:  [
      "Targeted literature search scoped to device type and intended use",
      "Manufacturer's historical performance and complaint data",
      "Basic benefit-risk conclusion in technical file",
      "Post-Market Surveillance plan with complaint handling procedures",
      "Annual Post-Market Surveillance Report (PMSR) review",
    ],
    jurNotes: [
      { jur:"EU MDR",  note:"Class I devices require a CER but literature review is typically sufficient. NB review of CER not required for standard Class I." },
      { jur:"FDA",     note:"Class I devices (many 510(k)-exempt) require general controls only; no mandatory clinical submission for most device types." },
      { jur:"TGA",     note:"Class I: manufacturer declaration of conformity. Clinical evidence appropriate to the device type and intended use." },
    ],
  };
}

export function ToolClinical() {
  const [cls,   setCls]   = useState("");
  const [novel, setNovel] = useState("");
  const [equiv, setEquiv] = useState("");
  const [sw,    setSw]    = useState("");
  const ready = cls && novel && equiv;
  const res   = ready ? getResult(cls, novel, equiv, sw) : null;

  return (
    <div>
      <div className="th-info">
        Determines clinical evidence requirements based on <strong>EU MDR Article 61 + MDCG 2020-6</strong> (primary framework),
        with jurisdiction notes for TGA, FDA, and MHRA. Evidence requirements are always device and context specific.
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:14 }}>
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:"#0f172a", marginBottom:9 }}>Device Class (EU MDR)</div>
          {[["I","Class I — low risk"],["IIa","Class IIa — low-medium risk"],["IIb","Class IIb — medium-high risk"],["III","Class III — high risk"]].map(([v,l]) => (
            <button key={v} onClick={() => setCls(v)} style={{ display:"block", width:"100%", marginBottom:7, padding:"9px 13px", borderRadius:10, border:`1.5px solid ${cls===v?"#2563eb":"#e2e8f0"}`, background:cls===v?"#eff6ff":"white", color:cls===v?"#2563eb":"#374151", fontSize:13, fontWeight:cls===v?700:500, cursor:"pointer", fontFamily:"inherit", textAlign:"left" }}>{l}</button>
          ))}
        </div>
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:"#0f172a", marginBottom:9 }}>Novel device / no predicate?</div>
          {[["yes","Yes — novel design, first-of-kind"],["no","No — similar devices exist on market"]].map(([v,l]) => (
            <button key={v} onClick={() => setNovel(v)} style={{ display:"block", width:"100%", marginBottom:7, padding:"9px 13px", borderRadius:10, border:`1.5px solid ${novel===v?"#2563eb":"#e2e8f0"}`, background:novel===v?"#eff6ff":"white", color:novel===v?"#2563eb":"#374151", fontSize:13, fontWeight:novel===v?700:500, cursor:"pointer", fontFamily:"inherit", textAlign:"left" }}>{l}</button>
          ))}
          <div style={{ fontSize:12, fontWeight:700, color:"#0f172a", marginBottom:9, marginTop:12 }}>Contractual access to equivalent device's clinical data?</div>
          {[["yes","Yes — full documented access"],["no","No / limited / not applicable"]].map(([v,l]) => (
            <button key={v} onClick={() => setEquiv(v)} style={{ display:"block", width:"100%", marginBottom:7, padding:"9px 13px", borderRadius:10, border:`1.5px solid ${equiv===v?"#2563eb":"#e2e8f0"}`, background:equiv===v?"#eff6ff":"white", color:equiv===v?"#2563eb":"#374151", fontSize:13, fontWeight:equiv===v?700:500, cursor:"pointer", fontFamily:"inherit", textAlign:"left" }}>{l}</button>
          ))}
          {cls === "I" && (
            <>
              <div style={{ fontSize:12, fontWeight:700, color:"#0f172a", marginBottom:9, marginTop:12 }}>Is this a software device (SaMD)?</div>
              {[["yes","Yes — software / app / algorithm"],["no","No — hardware device"]].map(([v,l]) => (
                <button key={v} onClick={() => setSw(v)} style={{ display:"block", width:"100%", marginBottom:7, padding:"9px 13px", borderRadius:10, border:`1.5px solid ${sw===v?"#2563eb":"#e2e8f0"}`, background:sw===v?"#eff6ff":"white", color:sw===v?"#2563eb":"#374151", fontSize:13, fontWeight:sw===v?700:500, cursor:"pointer", fontFamily:"inherit", textAlign:"left" }}>{l}</button>
              ))}
            </>
          )}
        </div>
      </div>

      {res && (
        <div style={{ background:res.bg, border:`1.5px solid ${res.color}40`, borderRadius:14, padding:20 }}>
          <div style={{ fontSize:11, fontWeight:700, color:res.color, letterSpacing:.8, marginBottom:6 }}>RECOMMENDED CLINICAL EVIDENCE APPROACH</div>
          <div style={{ fontSize:17, fontWeight:700, color:"#0f172a", marginBottom:16 }}>{res.level}</div>

          <div style={{ fontSize:11, fontWeight:700, color:"#94a3b8", letterSpacing:.8, marginBottom:10 }}>REQUIRED STEPS</div>
          {res.steps.map((s, i) => (
            <div key={i} style={{ display:"flex", gap:10, marginBottom:9, alignItems:"flex-start" }}>
              <div style={{ width:22, height:22, borderRadius:"50%", background:res.color, color:"white", fontSize:11, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{i+1}</div>
              <span style={{ fontSize:13, color:"#374151", lineHeight:1.5 }}>{s}</span>
            </div>
          ))}

          <div style={{ borderTop:"1px solid #e2e8f0", marginTop:16, paddingTop:14 }}>
            <div style={{ fontSize:11, fontWeight:700, color:"#94a3b8", letterSpacing:.8, marginBottom:10 }}>JURISDICTION NOTES</div>
            {res.jurNotes.map(n => (
              <div key={n.jur} style={{ marginBottom:9 }}>
                <span style={{ fontSize:11, fontWeight:700, color:"#374151" }}>{n.jur}: </span>
                <span style={{ fontSize:12, color:"#64748b", lineHeight:1.55 }}>{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="th-warn" style={{ marginTop:12 }}>
        Clinical evidence requirements are always device-specific and context-dependent.
        This tool provides directional guidance only — always engage a clinical affairs professional
        and verify against current MDCG guidance, FDA guidance documents, and TGA clinical evidence requirements.
      </div>
    </div>
  );
}
