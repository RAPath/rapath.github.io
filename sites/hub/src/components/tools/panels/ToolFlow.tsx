import React, { useState } from "react";
import { ChevronRight, CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";

type JurId = "eu"|"fda"|"tga"|"hsa"|"mhra"|"hc";

const JURS: { id: JurId; label: string }[] = [
  { id:"eu",   label:"EU MDR" },
  { id:"fda",  label:"FDA" },
  { id:"tga",  label:"TGA" },
  { id:"hsa",  label:"HSA" },
  { id:"mhra", label:"MHRA" },
  { id:"hc",   label:"Health Canada" },
];

// Phase checklist items are common; jurisdiction notes vary per phase
const BASE_STEPS = [
  { n:1, t:"Define Intended Use",   time:"Week 1–2",    c:"#2563eb", desc:"Draft the intended use statement — the single most important regulatory document. It determines classification, clinical evidence requirements, and labelling." },
  { n:2, t:"Classify Device",       time:"Week 2–4",    c:"#7c3aed", desc:"Determine device class using the rules of each target jurisdiction. Classification drives the entire regulatory pathway." },
  { n:3, t:"Select Markets",        time:"Week 3–5",    c:"#0891b2", desc:"Decide which markets to enter and in what sequence. Consider regulatory complexity, recognition pathways, and market size." },
  { n:4, t:"Build Technical File",  time:"Month 1–6",   c:"#ca8a04", desc:"Compile technical documentation including risk management file, design records, clinical evaluation, labelling, and PMS plan." },
  { n:5, t:"Establish QMS",         time:"Month 3–12",  c:"#16a34a", desc:"Implement ISO 13485 and obtain certification. This is typically the longest lead-time item. MDSAP covers AU/CA/BR/JP/US in one audit." },
  { n:6, t:"Conformity Assessment", time:"Month 6–18",  c:"#ea580c", desc:"Engage a Notified/Approved Body or submit to the regulatory authority depending on device class. Resolve deficiencies and obtain approval." },
  { n:7, t:"Register & Launch",     time:"Month 12–24", c:"#dc2626", desc:"Submit country-specific applications, pay regulatory fees, appoint local authorised representatives, and activate post-market obligations." },
];

// Jurisdiction-specific notes per phase index (0-based)
const JUR_NOTES: Record<JurId, string[]> = {
  eu: [
    "EU MDR: Intended use drives classification under Annex VIII Rules 1–22. Document in technical file.",
    "EU MDR: Class I self-cert; Class IIa+ requires Notified Body. Check Rule 11 for SaMD; Rule 21 for combination products.",
    "Consider EUDAMED registration timing. MDSAP reduces audit burden for non-EU QMS sites.",
    "EU MDR requires GSPR (Annex I) checklist, CER per MEDDEV 2.7/1 Rev 4 / MDCG 2020-6, and UDI assignment.",
    "ISO 13485 required; NB will audit QMS for Class IIa+. MDR-specific additions beyond ISO 13485 apply.",
    "Notified Body required for Class IIa+. EU NB wait times currently 12–18 months — engage early.",
    "EUDAMED actor and device registration mandatory. CE mark + DoC required. UDI in EUDAMED.",
  ],
  fda: [
    "FDA: Intended use drives 510(k) predicate selection and PMA clinical evidence requirements.",
    "FDA: Class I (~47% exempt), Class II (510(k) or De Novo), Class III (PMA). Check 21 CFR product code.",
    "FDA MDUFA timelines: 510(k) ~90 days clock; De Novo ~150 days; PMA ~180 days. No parallel with EU NB.",
    "Technical file = 510(k) or PMA submission. No separate 'technical file' concept; all submitted to FDA.",
    "FDA QMSR (21 CFR Part 820, aligned with ISO 13485 from Feb 2026). MDSAP audit accepted by FDA.",
    "No Notified Body — submit 510(k)/PMA directly to FDA CDRH. eSTAR electronic submission required.",
    "FDA device listing + establishment registration required. UDI in GUDID. DUNS number needed.",
  ],
  tga: [
    "TGA: Intended purpose defines the Essential Principles that apply (Schedule 1, Therapeutic Goods Act).",
    "TGA: Class I–III for general devices. Classification follows EU MDR-aligned rules. SaMD: check DISO guidance.",
    "TGA accepts comparable overseas evidence (EU NB cert, MDSAP, FDA + MDSAP) to streamline Class II/III.",
    "Technical file aligns with EU MDR format. Essential Principles checklist required. Sponsor holds ARTG.",
    "ISO 13485 required; TGA CAB audit for some Class III. MDSAP accepted for Class IIa/IIb. Sponsor must be AU-based.",
    "Class I: self-cert + sponsor ARTG application. Class IIa/IIb/III: comparable overseas evidence or CAB audit.",
    "ARTG inclusion number issued. Sponsor name/address on label. Ongoing ARTG maintenance obligations.",
  ],
  hsa: [
    "HSA: Intended purpose drives classification under Class A–D framework (ASEAN harmonised).",
    "HSA: Class A (low risk) to Class D (high risk). SaMD: HSA SaMD guidance applies. IVDs classified separately.",
    "HSA accepts overseas evidence via Notified Route (TGA, EU, US approvals reduce review burden).",
    "Technical dossier per HSA requirements. LRA holds registration. Dealer's Licence required for importer.",
    "ISO 13485 required; HSA accepts overseas QMS certificates for Notified Route. MDSAP not formally recognised.",
    "PRISM portal registration. Notified Route (recognised approval) or Restricted Route (full dossier review).",
    "HSA product registration number issued. LRA name/address on label. Annual registration renewal required.",
  ],
  mhra: [
    "MHRA: Intended purpose drives classification under UK MDR 2002 (as amended) — mirrors EU MDR structure.",
    "MHRA: Class I–III + AIMD. Classification rules align with EU MDR. CE marking accepted until Jun 2028/2030.",
    "MHRA registration required in addition to CE/UKCA conformity assessment. UK Responsible Person mandatory.",
    "Technical file mirrors EU MDR format. Essential Requirements (UK MDR 2002 Schedule 1) checklist required.",
    "ISO 13485 required; UK Approved Body for Class IIa+. MDSAP supports but does not replace UKAB audit.",
    "UK Approved Body required for Class IIa+. CE mark from EU NB accepted until June 2028 (most) / June 2030 (high-risk).",
    "MHRA registration via online portal. UKRP name/address on label. Annual MHRA registration renewal required.",
  ],
  hc: [
    "Health Canada: Intended purpose determines Class I–IV under Medical Devices Regulations (SOR/98-282).",
    "HC: Class I (MDEL only), Class II–IV (Medical Device Licence). Classification primarily based on intended use and risk.",
    "Canada accepts MDSAP in lieu of separate Canadian QMS inspection. Reduces audit burden significantly.",
    "Technical documentation per Health Canada requirements. Canadian Importer or manufacturer holds MDL.",
    "ISO 13485 required for Class II–IV. MDSAP accepted by Health Canada. MDEL required for all establishments.",
    "Class I: MDEL only. Class II–IV: submit MDL application to HC with Declaration of Conformity + technical summary.",
    "MDL issued with registration number. Canadian importer/agent details on label. No annual device renewal but MDEL annual.",
  ],
};

const BASE_CHECKLISTS: string[][] = [
  ["Intended purpose statement","Target patient population","Clinical indication","User profile (lay vs professional)","Environment of use"],
  ["Run RAPath Classifier","Verify per jurisdiction rules","Check IVD/SaMD overlays","Document classification rationale"],
  ["Prioritise jurisdictions","Assess MDSAP recognition value","Identify parallel submission opportunities","Check local rep requirements"],
  ["Risk Management File (ISO 14971)","Design & development records","Clinical Evaluation Report","Labelling & IFU","Software docs if applicable (IEC 62304)"],
  ["ISO 13485 gap analysis","QMS documentation","Internal audits","Certification body selection","MDSAP if applicable"],
  ["Conformity assessment body selection","Technical file submission","QMS audit","Deficiency resolution","Certificate/approval receipt"],
  ["Submit applications","Pay regulatory fees","Appoint authorised reps","Activate PMS obligations","Set up vigilance reporting"],
];

export function ToolFlow() {
  const [sel,   setSel]   = useState(0);
  const [jur,   setJur]   = useState<JurId>("eu");
  const s = BASE_STEPS[sel];

  return (
    <div>
      {/* Jurisdiction selector */}
      <div className="th-filter-row">
        {JURS.map(j => (
          <button key={j.id} className={`th-filter${jur === j.id ? " on" : ""}`} onClick={() => setJur(j.id)}>
            {j.label}
          </button>
        ))}
      </div>

      {/* Phase steps */}
      <div className="th-flow-wrap">
        <div className="th-flow">
          {BASE_STEPS.map((st, i) => (
            <React.Fragment key={st.n}>
              <div className={`th-flow-step${sel === i ? " sel" : ""}`} onClick={() => setSel(i)}>
                <div className="th-flow-n" style={{ background: st.c }}>{st.n}</div>
                <div className="th-flow-title">{st.t}</div>
                <div className="th-flow-time">{st.time}</div>
                <div className="th-flow-desc">{st.desc.substring(0, 55)}…</div>
              </div>
              {i < BASE_STEPS.length - 1 && <div className="th-flow-arr"><ChevronRight size={16} /></div>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      {s && (
        <div style={{ background:"#f8fafc", border:`1.5px solid ${s.c}40`, borderLeft:`4px solid ${s.c}`, borderRadius:12, padding:20, marginTop:14 }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
            <div style={{ fontSize:16, fontWeight:700, color:"#0f172a" }}>{s.t}</div>
            <span style={{ background:`${s.c}18`, color:s.c, fontSize:10, fontWeight:700, padding:"3px 9px", borderRadius:20 }}>{s.time}</span>
          </div>
          <p style={{ fontSize:13, color:"#374151", lineHeight:1.65, marginBottom:12 }}>{s.desc}</p>

          {/* Jurisdiction-specific note */}
          <div style={{ background:"white", border:"1px solid #e2e8f0", borderRadius:9, padding:"10px 13px", marginBottom:14, fontSize:12, color:"#1e40af", lineHeight:1.6 }}>
            <strong>{JURS.find(j => j.id === jur)?.label}:</strong> {JUR_NOTES[jur][sel]}
          </div>

          <div style={{ fontSize:11, fontWeight:700, color:"#94a3b8", letterSpacing:.8, marginBottom:9 }}>CHECKLIST FOR THIS PHASE</div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:7 }}>
            {BASE_CHECKLISTS[sel].map(c => (
              <div key={c} style={{ display:"flex", gap:6, alignItems:"flex-start" }}>
                <CheckCircle2 size={13} color="#22c55e" style={{ marginTop:2, flexShrink:0 }} />
                <span style={{ fontSize:12, color:"#374151", lineHeight:1.4 }}>{c}</span>
              </div>
            ))}
          </div>
          <div style={{ display:"flex", gap:8, marginTop:14 }}>
            <button className="th-btn th-btn-o" onClick={() => sel > 0 && setSel(sel - 1)} style={{ opacity: sel === 0 ? .4 : 1 }}>
              <ArrowLeft size={13} /> Prev
            </button>
            <button className="th-btn th-btn-p" onClick={() => sel < BASE_STEPS.length - 1 && setSel(sel + 1)} style={{ opacity: sel === BASE_STEPS.length - 1 ? .4 : 1 }}>
              Next <ArrowRight size={13} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
