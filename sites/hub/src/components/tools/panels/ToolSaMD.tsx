import React, { useState } from "react";

// SaMD Decision Tree — FDA Classification Only
// Based on:
//   IMDRF SaMD N41: Software as a Medical Device: Possible Framework for Risk Categorisation
//   FDA: Software as a Medical Device (SaMD): Clinical Evaluation (IMDRF N41 adopted by FDA)
//   FDA: Artificial Intelligence/Machine Learning (AI/ML)-Based Software as a Medical Device Action Plan
//   FDA: Digital Health Center of Excellence guidance documents
//   21 CFR product code database for SaMD-specific classification

// IMDRF N41 matrix: Rows = significance of information; Columns = state of healthcare situation
const MATRIX_ROWS = [
  "Treat or diagnose",
  "Drive clinical management",
  "Inform clinical management",
];
const MATRIX_COLS = [
  "Critical situation or condition",
  "Serious situation or condition",
  "Non-serious situation or condition",
];

// IMDRF N41 Category grid [row][col]
const IMDRF_CATS: string[][] = [
  ["Category IV", "Category III", "Category II"],
  ["Category III", "Category II", "Category I"],
  ["Category II",  "Category I",  "Category I"],
];

// FDA classification mapping per IMDRF category
const FDA_MAP: Record<string, {
  fdaClass: string;
  pathway:  string;
  controls: string;
  examples: string[];
  note:     string;
}> = {
  "Category I": {
    fdaClass: "Class I (typically exempt from 510(k))",
    pathway:  "General controls only — many are 510(k)-exempt",
    controls: "General controls: labelling, QSR/QMSR, registration and listing, prohibited acts",
    examples: ["Administrative software supporting clinical workflow","Patient education software","General wellness apps (if non-device)","Low-risk clinical decision support informing clinicians"],
    note:     "FDA enforcement discretion may apply if software is intended to inform (not direct) clinical decision-making and the clinician can independently review the basis for recommendations (21st Century Cures Act §3060).",
  },
  "Category II": {
    fdaClass: "Class II — 510(k) clearance or De Novo",
    pathway:  "510(k) premarket notification (substantial equivalence to a predicate) OR De Novo if novel with no predicate",
    controls: "General controls + special controls (device-specific performance standards, post-market surveillance)",
    examples: ["Computer-aided detection (CADe) software","Clinical decision support for non-critical diagnoses","Remote patient monitoring software with alerts","SaMD for triaging non-emergency conditions"],
    note:     "510(k) requires demonstration of substantial equivalence to a legally marketed predicate device. De Novo creates a new device type with special controls and can then serve as a predicate for future 510(k)s.",
  },
  "Category III": {
    fdaClass: "Class II — 510(k) with special controls or De Novo",
    pathway:  "510(k) or De Novo; clinical performance data typically required",
    controls: "General controls + rigorous special controls; clinical validation data expected",
    examples: ["Computer-aided diagnosis (CADx) software","AI/ML-based diagnostic imaging interpretation","SaMD for treatment planning in serious conditions","Closed-loop therapy control support software"],
    note:     "FDA typically expects clinical performance data (sensitivity, specificity, AUC) for Category III SaMD. If the output drives clinical management in a serious condition, clinical validation across the intended-use population is required.",
  },
  "Category IV": {
    fdaClass: "Class III — PMA (Premarket Approval)",
    pathway:  "PMA — Premarket Approval Application; most rigorous FDA pathway",
    controls: "General controls + special controls + premarket approval with valid scientific evidence of safety and effectiveness",
    examples: ["Autonomous AI diagnostic systems (no clinician review)","SaMD providing sole basis for treatment of critical conditions","Closed-loop device control SaMD (e.g. automated insulin delivery)","AI/ML software replacing specialist judgment in life-threatening conditions"],
    note:     "PMA requires valid scientific evidence demonstrating reasonable assurance of safety and effectiveness — typically from well-controlled clinical trials. Advisory panel review may be required. PMA supplements needed for post-approval changes.",
  },
};

const SAMD_SCREENER = [
  { q:"Does your software have a medical purpose?",         yes:"Continue",          no:"Not a medical device (general wellness / administrative software)" },
  { q:"Is it intended for use in the diagnosis, treatment, cure, mitigation, or prevention of disease?", yes:"Continue", no:"Likely not a device — but verify against FDA's clinical decision support guidance" },
  { q:"Does it produce an output that drives or informs a clinical action?", yes:"Likely a medical device SaMD — proceed to classify", no:"Enforcement discretion may apply if clinician can independently review the basis" },
];

const AI_NOTES = [
  { title:"Predetermined Change Control Plan (PCCP)", desc:"For AI/ML SaMD that will adapt or retrain after marketing, FDA allows a PCCP to be submitted with the initial 510(k) or PMA. The PCCP describes planned modifications, the assessment methodology, and performance monitoring. Without a PCCP, any algorithm change triggering a predicate deviation may require a new 510(k)." },
  { title:"Locked vs Adaptive Algorithms", desc:"Locked algorithms (output does not change once deployed) follow standard 510(k)/PMA pathway. Adaptive algorithms (output changes with new data) require additional considerations including the PCCP, performance monitoring, and clear change management protocols." },
  { title:"Training / Testing Data Requirements", desc:"FDA expects transparency about training datasets: size, demographics, inclusion/exclusion criteria, labelling methodology. Separate training, tuning (validation), and test datasets required. Performance on subgroups (age, sex, race, site) should be evaluated." },
  { title:"Real-World Performance Monitoring", desc:"Post-market performance monitoring for AI/ML SaMD should include tracking of clinical outcomes, algorithm drift detection, and feedback loops. FDA recommends establishing performance thresholds before market entry." },
];

export function ToolSaMD() {
  const [selRow, setSelRow] = useState<number|null>(null);
  const [selCol, setSelCol] = useState<number|null>(null);
  const [tab, setTab] = useState<"matrix"|"screener"|"ai">("matrix");

  const selCat  = selRow !== null && selCol !== null ? IMDRF_CATS[selRow][selCol] : null;
  const fdaInfo = selCat ? FDA_MAP[selCat] : null;

  const catColors: Record<string, { bg:string; c:string }> = {
    "Category I":   { bg:"#dcfce7", c:"#166534" },
    "Category II":  { bg:"#fef9c3", c:"#854d0e" },
    "Category III": { bg:"#ffedd5", c:"#9a3412" },
    "Category IV":  { bg:"#fee2e2", c:"#991b1b" },
  };

  return (
    <div>
      <div className="th-info">
        SaMD classification based on the <strong>IMDRF N41 risk categorisation framework</strong>,
        mapped to <strong>FDA regulatory pathways</strong> (510(k), De Novo, PMA).
        Includes AI/ML-specific considerations per FDA's 2021 AI/ML Action Plan and September 2023 guidance.
      </div>

      <div className="th-filter-row">
        <button className={`th-filter${tab==="matrix"?"   on":""}`}   onClick={() => setTab("matrix")}>IMDRF N41 Matrix → FDA</button>
        <button className={`th-filter${tab==="screener"?" on":""}`} onClick={() => setTab("screener")}>Is My Software a Medical Device?</button>
        <button className={`th-filter${tab==="ai"?"       on":""}`}   onClick={() => setTab("ai")}>AI/ML Considerations</button>
      </div>

      {tab === "matrix" && (
        <div>
          <p style={{ fontSize:13, color:"#64748b", marginBottom:16, lineHeight:1.6 }}>
            Select the row that best describes <em>what your SaMD does</em> and the column that describes
            <em> the clinical situation</em> it operates in. The resulting IMDRF category maps to an FDA pathway.
          </p>

          {/* Matrix */}
          <div style={{ overflowX:"auto", marginBottom:20 }}>
            <div style={{ display:"grid", gridTemplateColumns:"160px repeat(3,1fr)", gap:6, minWidth:520 }}>
              {/* Column headers */}
              <div />
              {MATRIX_COLS.map(c => (
                <div key={c} style={{ fontSize:11, fontWeight:700, color:"#64748b", textAlign:"center", padding:"5px 4px", lineHeight:1.4 }}>{c}</div>
              ))}

              {/* Data rows */}
              {MATRIX_ROWS.map((row, ri) => (
                <React.Fragment key={ri}>
                  <div style={{ fontSize:12, fontWeight:600, color:"#374151", display:"flex", alignItems:"center", paddingRight:8, lineHeight:1.4 }}>{row}</div>
                  {MATRIX_COLS.map((_, ci) => {
                    const cat  = IMDRF_CATS[ri][ci];
                    const meta = catColors[cat];
                    const isActive = selRow === ri && selCol === ci;
                    return (
                      <div key={ci}
                        onClick={() => { setSelRow(ri); setSelCol(ci); }}
                        style={{ padding:"12px 8px", borderRadius:9, background:meta.bg, color:meta.c, fontSize:12, fontWeight:700, textAlign:"center", cursor:"pointer", border:`2px solid ${isActive ? meta.c : "transparent"}`, boxShadow: isActive ? `0 0 0 3px ${meta.bg}` : "none", transition:"all .15s" }}>
                        {cat}
                      </div>
                    );
                  })}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* FDA detail */}
          {fdaInfo && selCat && (
            <div style={{ background: catColors[selCat].bg, border:`1.5px solid ${catColors[selCat].c}40`, borderRadius:14, padding:20 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                <div>
                  <div style={{ fontSize:11, fontWeight:700, color:catColors[selCat].c, letterSpacing:.8, marginBottom:4 }}>
                    IMDRF {selCat} → FDA CLASSIFICATION
                  </div>
                  <div style={{ fontSize:17, fontWeight:700, color:"#0f172a" }}>{fdaInfo.fdaClass}</div>
                </div>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginBottom:14 }}>
                <div style={{ background:"white", borderRadius:9, padding:13 }}>
                  <div style={{ fontSize:10, color:"#94a3b8", fontWeight:700, marginBottom:5 }}>FDA PATHWAY</div>
                  <div style={{ fontSize:13, fontWeight:600, color:"#0f172a" }}>{fdaInfo.pathway}</div>
                </div>
                <div style={{ background:"white", borderRadius:9, padding:13 }}>
                  <div style={{ fontSize:10, color:"#94a3b8", fontWeight:700, marginBottom:5 }}>CONTROLS APPLIED</div>
                  <div style={{ fontSize:12, color:"#374151", lineHeight:1.5 }}>{fdaInfo.controls}</div>
                </div>
              </div>

              <div style={{ fontSize:11, fontWeight:700, color:"#94a3b8", letterSpacing:.8, marginBottom:8 }}>TYPICAL EXAMPLES</div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:6, marginBottom:14 }}>
                {fdaInfo.examples.map(ex => (
                  <div key={ex} style={{ display:"flex", gap:6, alignItems:"flex-start" }}>
                    <div style={{ width:6, height:6, borderRadius:50, background:catColors[selCat].c, flexShrink:0, marginTop:5 }} />
                    <span style={{ fontSize:12, color:"#374151", lineHeight:1.45 }}>{ex}</span>
                  </div>
                ))}
              </div>

              <div style={{ background:"white", borderRadius:9, padding:13, fontSize:12, color:"#374151", lineHeight:1.6 }}>
                <strong>FDA note:</strong> {fdaInfo.note}
              </div>
            </div>
          )}

          {!selCat && (
            <div style={{ padding:24, background:"#f8fafc", borderRadius:12, textAlign:"center", color:"#94a3b8", fontSize:13 }}>
              Click any cell in the matrix above to see the corresponding FDA regulatory pathway.
            </div>
          )}
        </div>
      )}

      {tab === "screener" && (
        <div>
          <p style={{ fontSize:13, color:"#64748b", marginBottom:20, lineHeight:1.7 }}>
            Use these questions to determine whether your software product is subject to FDA medical device regulation.
            Based on FDA's guidance on Clinical Decision Support Software and the 21st Century Cures Act §3060.
          </p>
          {SAMD_SCREENER.map((s, i) => (
            <div key={i} style={{ marginBottom:16 }}>
              <div style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                <div style={{ width:28, height:28, borderRadius:"50%", background:"#2563eb", color:"white", fontSize:13, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>{i+1}</div>
                <div>
                  <div style={{ fontSize:14, fontWeight:700, color:"#0f172a", marginBottom:10 }}>{s.q}</div>
                  <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                    <div style={{ padding:"8px 14px", background:"#f0fdf4", border:"1px solid #86efac", borderRadius:9, fontSize:12, color:"#166534", fontWeight:600 }}>
                      ✓ Yes → {s.yes}
                    </div>
                    <div style={{ padding:"8px 14px", background:"#fef2f2", border:"1px solid #fca5a5", borderRadius:9, fontSize:12, color:"#991b1b", fontWeight:600 }}>
                      ✗ No → {s.no}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ marginTop:20, padding:"14px 16px", background:"#fffbeb", border:"1px solid #fde68a", borderRadius:10, fontSize:12, color:"#92400e", lineHeight:1.65 }}>
            <strong>FDA enforcement discretion:</strong> Software that meets the CDS exemption criteria under the 21st Century Cures Act may be excluded from FDA device regulation. The four criteria are: (1) not intended to acquire, process, or analyse medical images/signals, (2) displays, analyses, or prints medical information, (3) supports/provides recommendations to a clinician rather than replacing clinical judgment, and (4) a clinician can independently review the basis for the recommendation. All four criteria must be met.
          </div>
        </div>
      )}

      {tab === "ai" && (
        <div>
          <p style={{ fontSize:13, color:"#64748b", marginBottom:20, lineHeight:1.7 }}>
            Key FDA considerations for AI/ML-based Software as a Medical Device, based on the FDA
            AI/ML Action Plan (January 2021) and the Total Product Lifecycle (TPLC) approach.
          </p>
          {AI_NOTES.map(n => (
            <div key={n.title} style={{ marginBottom:14, background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:12, padding:16 }}>
              <div style={{ fontSize:14, fontWeight:700, color:"#0f172a", marginBottom:8 }}>{n.title}</div>
              <div style={{ fontSize:13, color:"#374151", lineHeight:1.65 }}>{n.desc}</div>
            </div>
          ))}
          <div className="th-warn">
            FDA AI/ML guidance is evolving rapidly. The Predetermined Change Control Plan (PCCP) framework
            was finalised in 2023. Always check the FDA Digital Health Center of Excellence website
            for the latest guidance documents before preparing your submission.
          </div>
        </div>
      )}
    </div>
  );
}
