import React, { useState } from "react";
import { CheckCircle2, X } from "lucide-react";

const ITEMS: Record<string, string[]> = {
  "Core Technical File": [
    "Draft and approve Intended Use & Indications for Use statement",
    "Identify device classification and applicable rules per each target jurisdiction",
    "Prepare device description, specifications, and design overview",
    "Compile design & development records (design history file)",
    "Complete GSPR / Essential Principles / Essential Requirements checklist",
    "Prepare labelling artwork and Instructions for Use (IFU)",
    "Assign UDI Device Identifier (DI) and register with issuing agency",
  ],
  "Risk Management": [
    "Initiate Risk Management File per ISO 14971",
    "Define risk management scope, team, and criteria",
    "Complete hazard identification and risk estimation",
    "Define and implement risk control measures",
    "Verify effectiveness of risk control measures",
    "Evaluate residual risk acceptability against benefit-risk criteria",
    "Compile Risk Management Report and obtain sign-off",
  ],
  "Clinical Evidence": [
    "Plan literature search strategy (PICO; document databases and date range)",
    "Execute systematic literature search and document results",
    "Critically appraise clinical data per MEDDEV 2.7/1 Rev 4 / MDCG 2020-6",
    "Demonstrate device equivalence (if applicable) per MDCG 2020-5",
    "Write Clinical Evaluation Report (CER) with benefit-risk conclusion",
    "Define Post-Market Clinical Follow-up (PMCF) plan with explicit data collection schedule",
    "Prepare Summary of Safety and Clinical Performance (SSCP) if Class III / implantable",
  ],
  "Quality System": [
    "Conduct gap analysis against ISO 13485 (and QMSR 21 CFR Part 820 if targeting USA)",
    "Develop or update QMS documentation (Quality Manual, SOPs, forms)",
    "Implement and document design controls process",
    "Conduct internal audits and management review",
    "Select, contract, and prepare for ISO 13485 certification audit",
    "Obtain ISO 13485 certificate (and MDSAP if targeting AU/CA/BR/JP/US)",
    "Appoint and qualify local Authorised Representatives / LRA in target markets",
  ],
  "Registration Readiness": [
    "Confirm target jurisdiction list and conformity assessment routes per class",
    "Engage Notified Body / CAB / Approved Body (Class IIa+ in EU/UK/AU)",
    "Prepare and submit conformity assessment dossier",
    "Resolve assessment body deficiencies",
    "Obtain certificates (CE, UKCA, TGA CA certificate, etc.)",
    "Submit registration applications in each target jurisdiction",
    "Pay government registration fees and await decisions",
  ],
  "Post-Market Setup": [
    "Finalise Post-Market Surveillance (PMS) plan with thresholds and data sources",
    "Set up vigilance reporting processes and timelines per each jurisdiction",
    "Establish complaint handling procedure and tracking system",
    "Configure EUDAMED / GUDID / ARTG / PRISM records as required",
    "Set calendar reminders for PSUR / PMSR due dates, renewal deadlines",
    "Brief distributors and authorised representatives on FSCA reporting obligations",
  ],
};

export function ToolChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const all   = Object.values(ITEMS).flat();
  const done  = all.filter(i => checked[i]).length;
  const pct   = Math.round((done / all.length) * 100);
  const toggle = (item: string) => setChecked(p => ({ ...p, [item]: !p[item] }));

  const color = pct === 100 ? "#16a34a" : pct >= 60 ? "#ca8a04" : "#2563eb";

  return (
    <div>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
        <span style={{ fontSize:14, fontWeight:700, color:"#0f172a" }}>{done} of {all.length} items complete</span>
        <span style={{ fontSize:14, fontWeight:700, color }}>{pct}%</span>
      </div>
      <div className="th-prog-bar">
        <div className="th-prog-fill" style={{ width:`${pct}%`, background:color }} />
      </div>

      {pct === 100 && (
        <div style={{ padding:"10px 14px", background:"#f0fdf4", border:"1px solid #86efac", borderRadius:9, marginBottom:14, fontSize:13, color:"#166534", fontWeight:600 }}>
          ✓ All items complete — ensure all documentation is reviewed and approved before submission.
        </div>
      )}

      <div style={{ display:"flex", gap:8, marginBottom:18 }}>
        <button className="th-btn th-btn-o" onClick={() => setChecked({})} style={{ fontSize:12, padding:"6px 13px" }}>
          <X size={13} /> Clear all
        </button>
        <button className="th-btn th-btn-o" onClick={() => { const a: Record<string,boolean> = {}; all.forEach(i => a[i]=true); setChecked(a); }} style={{ fontSize:12, padding:"6px 13px" }}>
          <CheckCircle2 size={13} /> Mark all done
        </button>
      </div>

      <div className="th-check-grid">
        {Object.entries(ITEMS).map(([grp, its]) => (
          <div key={grp} className="th-check-grp">
            <div className="th-check-grp-title">
              {grp}
              <span style={{ fontSize:11, color:"#94a3b8", fontWeight:500, marginLeft:8 }}>
                ({its.filter(i => checked[i]).length}/{its.length})
              </span>
            </div>
            {its.map(item => (
              <div key={item} className="th-check-item" onClick={() => toggle(item)}>
                {checked[item]
                  ? <CheckCircle2 size={15} color="#22c55e" style={{ flexShrink:0 }} />
                  : <div style={{ width:15, height:15, border:"2px solid #cbd5e1", borderRadius:3, flexShrink:0 }} />}
                <span className={`th-check-txt${checked[item] ? " done" : ""}`}>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <p style={{ fontSize:11, color:"#94a3b8", marginTop:16, lineHeight:1.7 }}>
        This checklist covers general requirements applicable to most medical device submissions.
        Jurisdiction-specific requirements may add further items depending on device class and target market.
      </p>
    </div>
  );
}
