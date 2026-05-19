import React, { useState } from "react";

const CATS = ["Non-invasive device","Active non-implantable","Software / SaMD","Implantable device","IVD"];

// EU MDR Annex I GSPR — reviewed against current MDR 2017/745 text
// Equivalent AU TGA: Therapeutic Goods (Medical Devices) Regulations 2002, Schedule 1 (Essential Principles)
// Equivalent UK MDR 2002: Schedule 1 (Essential Requirements)
// Equivalent FDA: 21 CFR Part 820 design controls + applicable product standards

const REQS: Record<string, {id:string;req:string;evidence:string;applies:boolean}[]> = {
  "Non-invasive device": [
    { id:"GSPR 1",    req:"General safety and performance requirements",      evidence:"Risk Management File per ISO 14971; benefit-risk determination",                          applies:true  },
    { id:"GSPR 3",    req:"Chemical, physical and biological properties",      evidence:"Biocompatibility evaluation per ISO 10993 series; material characterisation",            applies:true  },
    { id:"GSPR 5",    req:"Infection and microbial contamination",             evidence:"Sterility assurance if applicable; bioburden testing",                                    applies:false },
    { id:"GSPR 10",   req:"Devices with measuring or monitoring function",     evidence:"Verification of measurement accuracy; calibration traceability; uncertainty analysis",    applies:false },
    { id:"GSPR 14.1", req:"Clinical evaluation — diagnostic/monitoring devices",evidence:"Clinical Evaluation Report per MDCG 2020-6; literature search; clinical data",         applies:true  },
    { id:"GSPR 22",   req:"Usability engineering",                             evidence:"Usability Engineering File per IEC 62366-1; human factors study if applicable",          applies:true  },
    { id:"GSPR 23",   req:"Labelling and instructions for use",                evidence:"Label review against MDR Annex I §23; IFU; ISO 15223-1 symbols; language requirements",  applies:true  },
  ],
  "Active non-implantable": [
    { id:"GSPR 1",    req:"General safety and performance requirements",        evidence:"Risk Management File per ISO 14971",                                                     applies:true  },
    { id:"GSPR 8",    req:"Electrically powered active devices",               evidence:"Electrical safety per IEC 60601-1; EMC per IEC 60601-1-2; thermal testing",             applies:true  },
    { id:"GSPR 9",    req:"Protection against radiation",                       evidence:"Radiation risk assessment; shielding if applicable",                                      applies:false },
    { id:"GSPR 10",   req:"Devices with measuring or monitoring function",     evidence:"Accuracy verification; calibration records; uncertainty analysis",                        applies:true  },
    { id:"GSPR 12",   req:"Software requirements",                             evidence:"IEC 62304 software lifecycle documentation; SOUP list",                                   applies:true  },
    { id:"GSPR 14.1", req:"Clinical evaluation",                               evidence:"Clinical Evaluation Report per MDCG 2020-6; performance data",                           applies:true  },
    { id:"GSPR 22",   req:"Usability engineering",                             evidence:"Usability Engineering File per IEC 62366-1",                                              applies:true  },
    { id:"GSPR 23",   req:"Labelling and instructions for use",                evidence:"Label review; IFU; ISO 15223-1 symbols",                                                  applies:true  },
  ],
  "Software / SaMD": [
    { id:"GSPR 1",    req:"General safety and performance requirements",        evidence:"Risk Management File per ISO 14971; hazard and risk analysis",                           applies:true  },
    { id:"GSPR 12",   req:"Software requirements — all SaMD",                  evidence:"IEC 62304 software lifecycle; SOUP list; version control; release documentation",        applies:true  },
    { id:"GSPR 12a",  req:"Cybersecurity requirements",                        evidence:"Cybersecurity risk assessment per MDCG 2019-16; SBOM; patch management plan",           applies:true  },
    { id:"GSPR 14.1", req:"Clinical evaluation / AI algorithm performance",    evidence:"CER per MDCG 2020-6; algorithm validation; sensitivity/specificity data; PMCF plan",   applies:true  },
    { id:"GSPR 17",   req:"Interoperability and connectivity",                 evidence:"Interface specification; data integrity verification; network security testing",          applies:true  },
    { id:"GSPR 22",   req:"Usability engineering",                             evidence:"Usability Engineering File per IEC 62366-1; lay user studies if applicable",             applies:true  },
    { id:"GSPR 23",   req:"Labelling and instructions for use",                evidence:"Intended purpose statement; app store description; user documentation",                  applies:true  },
  ],
  "Implantable device": [
    { id:"GSPR 1",    req:"General safety and performance requirements",        evidence:"Risk Management File per ISO 14971",                                                     applies:true  },
    { id:"GSPR 3",    req:"Chemical, physical and biological properties",      evidence:"ISO 10993 biocompatibility evaluation; extractables & leachables; corrosion testing",  applies:true  },
    { id:"GSPR 5",    req:"Infection and microbial contamination",             evidence:"Sterility validation per ISO 11135/11137; sterile barrier system per ISO 11607",         applies:true  },
    { id:"GSPR 6",    req:"Implantable and long-term contact devices",         evidence:"Fatigue and mechanical testing; in-vivo biocompatibility data",                          applies:true  },
    { id:"GSPR 14.1", req:"Clinical evaluation",                               evidence:"CER + clinical investigation data; PMCF plan; SSCP required for Class III",             applies:true  },
    { id:"GSPR 22",   req:"Usability engineering",                             evidence:"Usability Engineering File; surgical use scenario analysis",                              applies:true  },
    { id:"GSPR 23",   req:"Labelling and instructions for use",                evidence:"Implant card (Annex II); MRI safety labelling if applicable; language requirements",     applies:true  },
  ],
  "IVD": [
    { id:"GSPR 1",    req:"General safety and performance requirements",        evidence:"Risk Management File per ISO 14971",                                                     applies:true  },
    { id:"GSPR 3",    req:"Chemical, physical and biological properties",      evidence:"Reagent characterisation; stability and shelf-life studies",                              applies:true  },
    { id:"GSPR 9",    req:"IVD devices — performance characteristics",         evidence:"Analytical performance (sensitivity, specificity, precision, accuracy); IVDR Annex I",   applies:true  },
    { id:"GSPR 9a",   req:"Clinical performance evaluation",                   evidence:"Clinical performance study; scientific validity data; reference interval studies",        applies:true  },
    { id:"GSPR 20",   req:"Self-test and near-patient testing devices",        evidence:"Lay user usability studies; simplified IFU; near-patient testing validation",            applies:false },
    { id:"GSPR 23",   req:"Labelling and instructions for use",                evidence:"Labelling per IVDR §23; IFU; ISO 15223-1 symbols; language requirements",               applies:true  },
  ],
};

export function ToolGSPR() {
  const [cat, setCat] = useState("Non-invasive device");
  const rows = REQS[cat] ?? REQS["Non-invasive device"];

  return (
    <div>
      <div className="th-info">
        Maps <strong>EU MDR 2017/745 Annex I GSPR</strong> requirements to your device type with evidence guidance.
        Equivalent frameworks: <strong>AU</strong> Essential Principles (Therapeutic Goods Regulations 2002, Schedule 1) ·
        <strong> UK</strong> Essential Requirements (UK MDR 2002, Schedule 1) ·
        <strong> FDA</strong> 21 CFR Part 820 design controls + applicable product standards.
      </div>
      <div className="th-filter-row">
        {CATS.map(c => <button key={c} className={`th-filter${cat === c ? " on" : ""}`} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <div className="th-table-wrap">
        <table className="th-table">
          <thead>
            <tr><th>GSPR Ref.</th><th>Requirement</th><th>Typical Evidence Required</th><th>Applies</th></tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id}>
                <td style={{ fontWeight:700, color:"#2563eb", whiteSpace:"nowrap" }}>{r.id}</td>
                <td style={{ fontWeight:600, color:"#0f172a" }}>{r.req}</td>
                <td style={{ fontSize:11 }}>{r.evidence}</td>
                <td>
                  {r.applies
                    ? <span style={{ color:"#16a34a", fontWeight:700, fontSize:12 }}>✓ Typical</span>
                    : <span style={{ color:"#94a3b8", fontSize:12 }}>Device-specific</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="th-warn" style={{ marginTop:12 }}>
        This is an indicative mapping based on the EU MDR Annex I GSPR structure. The applicability of each GSPR
        to your specific device must be determined based on its intended purpose and design characteristics.
        Always conduct a formal GSPR/Essential Requirements review with a qualified RA professional.
      </div>
    </div>
  );
}
