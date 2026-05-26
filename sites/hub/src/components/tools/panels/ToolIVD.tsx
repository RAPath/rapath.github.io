import React, { useState } from "react";

const QUESTIONS = [
  {id:"analyte",q:"What does your IVD detect or measure?",opts:[
    {v:"listA_blood",    l:"Blood group antigens (ABO, Rh) or erythrocyte antibodies",               desc:"EU IVDR Annex II — List A"},
    {v:"listA_hiv",      l:"HIV 1/2, HTLV I/II, HBsAg, HCV, HDV — blood-borne viruses",             desc:"EU IVDR Annex II — List A"},
    {v:"listB_prenatal", l:"Prenatal screening (Down, NTD, trisomy) or rubella/toxoplasma IgM",       desc:"EU IVDR Annex III — List B"},
    {v:"selftest",       l:"Self-test analyte (glucose, hCG pregnancy, cholesterol, INR)",             desc:"Self-test device"},
    {v:"poc",            l:"Near-patient / point-of-care test (HCP use, non-laboratory)",              desc:"PoC / near-patient testing"},
    {v:"general",        l:"General laboratory analyte (not List A or B)",                             desc:"General IVD"},
  ]},
  {id:"user",q:"Who is the intended user?",opts:[
    {v:"lab",   l:"Clinical laboratory or healthcare professional",desc:"Professional / laboratory use"},
    {v:"self",  l:"Patient self-testing at home (lay user)",       desc:"Home / consumer self-test"},
    {v:"poc_p", l:"Near-patient setting, operated by HCP",        desc:"Point-of-care, HCP-operated"},
  ]},
  {id:"risk",q:"What is the clinical consequence of an incorrect result?",opts:[
    {v:"critical",l:"Death or serious irreversible harm (e.g. wrong blood transfusion, missed HIV)",desc:"Critical consequence"},
    {v:"serious", l:"Serious but manageable — significant delay in correct treatment",               desc:"Serious consequence"},
    {v:"low",     l:"Inconvenience, repeated testing, low clinical consequence",                     desc:"Low consequence"},
  ]},
];

interface IVDResult { eu:string; uk:string; us:string; au:string; sg:string; ca:string; jp:string; sa:string; nz:string; note:string; route:string; }

function classify(ans:Record<string,string>): IVDResult {
  const a=ans.analyte??"", u=ans.user??"", r=ans.risk??"";

  if (a==="listA_blood"||a==="listA_hiv") return {
    eu:"Class D (IVDR Annex II — List A)", uk:"Class D (UK IVDR List A)", us:"Class III (PMA)",
    au:"Class 4 IVD", sg:"Class D", ca:"Class IV", jp:"Class III–IV (Shonin)",
    sa:"Class D", nz:"Class 4 (mirrors TGA)",
    note:"Highest risk IVD category. Incorrect results carry direct patient safety implications.",
    route:"EU/UK/NZ: Full NB/AB review + performance study with clinical samples. FDA: PMA or 510(k) with clinical data. AU/NZ: Third-party CAB conformity assessment. SFDA: Full MDNR registration + clinical data.",
  };
  if (a==="listB_prenatal") return {
    eu:"Class C (IVDR Annex III — List B)", uk:"Class C (UK IVDR List B)", us:"Class II (510(k))",
    au:"Class 3 IVD", sg:"Class C", ca:"Class III", jp:"Class II–III (Ninsho/Shonin)",
    sa:"Class C", nz:"Class 3 (mirrors TGA)",
    note:"High-risk IVD. Analytical and clinical performance evaluation across adequate clinical sample sets required.",
    route:"EU/UK: NB/AB involvement required; performance study review mandatory. FDA: 510(k) with clinical data. SFDA: Full MDNR registration. NZ: TGA-equivalent pathway accepted.",
  };
  if (a==="selftest"||u==="self") return {
    eu:"Class C (self-test — IVDR Art. 48(7))", uk:"Class C (UK IVDR self-test)", us:"OTC — Class II 510(k)",
    au:"Class 2–3 IVD", sg:"Class B–C", ca:"Class II–III", jp:"Class II (Ninsho if standard exists)",
    sa:"Class C", nz:"Class 2–3 (mirrors TGA)",
    note:"Self-test devices require extensive lay user usability studies — a frequent cause of regulatory rejection.",
    route:"EU/UK: NB/AB mandatory; lay user study required. FDA: OTC clearance; user comprehension study. SFDA: Full MDNR registration with usability data. NZ: TGA pathway accepted.",
  };
  if (a==="poc"||u==="poc_p") {
    if (r==="critical"||r==="serious") return {
      eu:"Class C (near-patient — higher risk)", uk:"Class C", us:"Class II (510(k))",
      au:"Class 3 IVD", sg:"Class C", ca:"Class III", jp:"Class II–III",
      sa:"Class C", nz:"Class 3 (mirrors TGA)",
      note:"Near-patient testing in higher-risk clinical settings attracts higher classification.",
      route:"EU/UK: NB/AB required for Class C. FDA: 510(k) with clinical data; CLIA waiver if OTC PoC. SFDA: Full MDNR registration.",
    };
    return {
      eu:"Class B (general PoC — lower risk)", uk:"Class B", us:"Class I / II",
      au:"Class 2 IVD", sg:"Class B", ca:"Class II", jp:"Class I–II",
      sa:"Class B", nz:"Class 2 (mirrors TGA)",
      note:"Lower-risk PoC devices — analytical performance validation in clinical setting required.",
      route:"EU/UK: Manufacturer self-certification may be sufficient. FDA: Many Class I IVD analytes are 510(k)-exempt. SFDA: MDNR listing or registration depending on class.",
    };
  }
  if (r==="critical") return {
    eu:"Class C (high consequence)", uk:"Class C", us:"Class II (510(k))",
    au:"Class 3 IVD", sg:"Class C", ca:"Class III", jp:"Class II–III",
    sa:"Class C", nz:"Class 3 (mirrors TGA)",
    note:"Higher consequence of incorrect result elevates classification. Rigorous performance data required.",
    route:"EU/UK: NB/AB likely required. FDA: 510(k) with clinical performance data. SFDA: Full MDNR registration with dossier.",
  };
  if (r==="serious") return {
    eu:"Class B", uk:"Class B", us:"Class I / II",
    au:"Class 2 IVD", sg:"Class B", ca:"Class II", jp:"Class I–II",
    sa:"Class B", nz:"Class 2 (mirrors TGA)",
    note:"Moderate-consequence general IVD. Analytical performance evaluation required.",
    route:"EU/UK: Manufacturer self-certification typically sufficient. FDA: 510(k) or exempt — verify by product code. SFDA: MDNR listing or registration.",
  };
  return {
    eu:"Class A (low risk — laboratory use)", uk:"Class A", us:"Class I (likely exempt)",
    au:"Class 1 IVD", sg:"Class A", ca:"Class I", jp:"Class I (Todokede)",
    sa:"Class A", nz:"Class 1 (mirrors TGA)",
    note:"Low-risk general IVD for professional laboratory use only. Basic performance evaluation required.",
    route:"EU/UK: Manufacturer self-certification. AU/NZ: Self-cert + ARTG/Medsafe listing. FDA: Class I exempt — device listing required. SFDA: MDNR listing.",
  };
}

const JUR_COLS: {key:keyof IVDResult; label:string}[] = [
  {key:"eu",label:"🇪🇺 EU IVDR"},{key:"uk",label:"🇬🇧 UK"},{key:"us",label:"🇺🇸 FDA"},
  {key:"au",label:"🇦🇺 TGA"},{key:"nz",label:"🇳🇿 Medsafe"},{key:"sg",label:"🇸🇬 HSA"},
  {key:"ca",label:"🇨🇦 HC"},{key:"jp",label:"🇯🇵 PMDA"},{key:"sa",label:"🇸🇦 SFDA"},
];

export function ToolIVD() {
  const [ans, setAns] = useState<Record<string,string>>({});
  const answered = Object.keys(ans).length;
  const result = answered===QUESTIONS.length ? classify(ans) : null;
  return (
    <div>
      <div className="th-info">IVDs follow dedicated classification rules in every jurisdiction. Covers EU IVDR, FDA, TGA, HSA, UK, Health Canada, PMDA, SFDA (Saudi Arabia), and Medsafe (New Zealand). Always verify the specific analyte against each jurisdiction's IVD classification catalogue.</div>
      {QUESTIONS.map((q,qi)=>(
        <div key={q.id} style={{marginBottom:20}}>
          <div style={{fontSize:13,fontWeight:700,color:"#0f172a",marginBottom:10}}>{qi+1}. {q.q}</div>
          <div style={{display:"flex",flexDirection:"column",gap:7}}>
            {q.opts.map(opt=>(
              <button key={opt.v} onClick={()=>setAns(p=>({...p,[q.id]:opt.v}))}
                style={{padding:"9px 14px",borderRadius:10,border:`1.5px solid ${ans[q.id]===opt.v?"#2563eb":"#e2e8f0"}`,background:ans[q.id]===opt.v?"#eff6ff":"white",color:ans[q.id]===opt.v?"#2563eb":"#374151",fontSize:13,fontWeight:ans[q.id]===opt.v?700:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center",gap:8}}>
                <span>{opt.l}</span>
                <span style={{fontSize:10,color:ans[q.id]===opt.v?"#2563eb":"#94a3b8",whiteSpace:"nowrap"}}>{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>
      ))}
      {result&&(
        <div style={{background:"#f8fafc",border:"1.5px solid #e2e8f0",borderRadius:14,padding:20}}>
          <div style={{fontSize:11,fontWeight:700,color:"#2563eb",letterSpacing:.8,marginBottom:14}}>INDICATIVE IVD CLASSIFICATION — 9 JURISDICTIONS</div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(140px,1fr))",gap:9,marginBottom:16}}>
            {JUR_COLS.map(col=>(
              <div key={col.key} style={{background:"white",border:"1px solid #e2e8f0",borderRadius:10,padding:12}}>
                <div style={{fontSize:11,color:"#94a3b8",fontWeight:700,marginBottom:5}}>{col.label}</div>
                <div style={{fontSize:12,fontWeight:700,color:"#0f172a",lineHeight:1.4}}>{result[col.key]}</div>
              </div>
            ))}
          </div>
          <div style={{padding:"12px 14px",background:"white",borderRadius:9,fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:12}}><strong>Note:</strong> {result.note}</div>
          <div style={{padding:"12px 14px",background:"#eff6ff",borderRadius:9,fontSize:12,color:"#1e40af",lineHeight:1.6,marginBottom:8}}><strong>Regulatory routes:</strong> {result.route}</div>
          <div className="th-warn" style={{marginTop:8}}>IVD classification is analyte-specific — always verify against each jurisdiction's IVD classification catalogue. MX (COFEPRIS), CN (NMPA), IN (CDSCO), KR (MFDS), BR (ANVISA), MY, ID, VN, RU, HK (MDD/MDACS), TH (Thai FDA), PH (FDA Philippines), BD (DGDA), LK (NMRA) follow similar risk-based frameworks — consult a local IVD specialist for these markets.</div>
        </div>
      )}
    </div>
  );
}
