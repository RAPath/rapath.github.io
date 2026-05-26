import React from "react";

const DATA = [
  // Full recognition — MDSAP founding/core members
  {flag:"🇦🇺",c:"Australia",      lv:"Full Recognition",  lc:"#166534",lb:"#dcfce7",note:"TGA accepts MDSAP audit as comparable overseas evidence for Class IIa–III. Reduces audit burden significantly."},
  {flag:"🇨🇦",c:"Canada",         lv:"Full Recognition",  lc:"#166534",lb:"#dcfce7",note:"Health Canada accepts MDSAP certificate in lieu of a separate Canadian QMS inspection."},
  {flag:"🇧🇷",c:"Brazil",         lv:"Full Recognition",  lc:"#166534",lb:"#dcfce7",note:"ANVISA accepts MDSAP as QMS evidence. B-GMP certification is still required separately."},
  {flag:"🇯🇵",c:"Japan",          lv:"Full Recognition",  lc:"#166534",lb:"#dcfce7",note:"PMDA accepts MDSAP in lieu of a separate Japanese QMS inspection for Class II–IV."},
  {flag:"🇺🇸",c:"United States",  lv:"Full Recognition",  lc:"#166534",lb:"#dcfce7",note:"FDA accepts MDSAP audit; FDA inspection still possible but MDSAP is strongly preferred."},
  // Partial credit
  {flag:"🇳🇿",c:"New Zealand",    lv:"Partial Credit",    lc:"#854d0e",lb:"#fef9c3",note:"Medsafe accepts TGA conformity assessment outcomes; MDSAP supports via TGA pathway. Trans-Tasman mutual recognition applies."},
  {flag:"🇸🇬",c:"Singapore",      lv:"Partial Credit",    lc:"#854d0e",lb:"#fef9c3",note:"HSA accepts ISO 13485 overseas certificates; MDSAP not formally recognised but supports applications."},
  {flag:"🇪🇺",c:"European Union", lv:"Partial Credit",    lc:"#854d0e",lb:"#fef9c3",note:"EU MDR requires Notified Body audit; MDSAP supports QMS evidence but does not replace NB audit."},
  {flag:"🇬🇧",c:"United Kingdom", lv:"Partial Credit",    lc:"#854d0e",lb:"#fef9c3",note:"MHRA considers MDSAP as supporting evidence; UKAB audit still required for Class IIa+."},
  {flag:"🇨🇭",c:"Switzerland",    lv:"Partial Credit",    lc:"#854d0e",lb:"#fef9c3",note:"Swissmedic accepts EU MDR NB certificates; MDSAP supports but does not replace Swiss DB audit."},
  {flag:"🇲🇾",c:"Malaysia",       lv:"Partial Credit",    lc:"#854d0e",lb:"#fef9c3",note:"MDA accepts ISO 13485 overseas certificates; MDSAP not formally recognised but provides useful evidence."},
  {flag:"🇸🇦",c:"Saudi Arabia",   lv:"Partial Credit",    lc:"#854d0e",lb:"#fef9c3",note:"SFDA recognises ISO 13485 overseas certificates; MDSAP not formally recognised but supports SFDA applications."},
  // No direct benefit
  {flag:"🇲🇽",c:"Mexico",         lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"COFEPRIS requires NOM-241-SSA1-2012 GMP compliance. MDSAP not recognised; ISO 13485 overseas cert may support application."},
  {flag:"🇨🇳",c:"China",          lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"NMPA requires separate Chinese QMS Ordinance + GMP inspection. MDSAP not recognised."},
  {flag:"🇮🇳",c:"India",          lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"CDSCO requires separate GMP inspection for Class C/D sites. MDSAP not recognised."},
  {flag:"🇰🇷",c:"South Korea",    lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"MFDS requires separate Korean GMP (KGMP) inspection. MDSAP not formally recognised."},
  {flag:"🇮🇩",c:"Indonesia",      lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"BPOM requires separate QMS verification. ISO 13485 overseas cert may help."},
  {flag:"🇻🇳",c:"Vietnam",        lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"DAV/MOH accepts overseas ISO 13485 certificates but MDSAP is not formally recognised."},
  {flag:"🇷🇺",c:"Russia",         lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"Roszdravnadzor requires GOST R ISO 13485 or separate Russian QMS inspection. MDSAP not recognised."},
  {flag:"🇭🇰",c:"Hong Kong",      lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"MDD/MDACS does not formally recognise MDSAP. ISO 13485 overseas certificates accepted as supporting evidence for MDACS applications."},
  {flag:"🇹🇭",c:"Thailand",        lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"Thai FDA MDCD does not formally recognise MDSAP. ISO 13485 certificate required; Thai GMP inspection may apply for domestic manufacturers."},
  {flag:"🇵🇭",c:"Philippines",     lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"FDA Philippines CDRRHR does not formally recognise MDSAP. ISO 13485 or WHO-GMP required; overseas certificates accepted as supporting evidence."},
  {flag:"🇧🇩",c:"Bangladesh",      lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"DGDA does not formally recognise MDSAP. GMP certificate from competent authority of origin country required; developing regulatory framework."},
  {flag:"🇱🇰",c:"Sri Lanka",       lv:"No Direct Benefit", lc:"#991b1b",lb:"#fee2e2",note:"NMRA does not formally recognise MDSAP. ISO 13485 overseas certificates accepted as supporting evidence for NMRA registration applications."},
];

const LEGEND = [
  {bg:"#dcfce7",c:"#166534",l:"Full Recognition — MDSAP replaces separate QMS audit"},
  {bg:"#fef9c3",c:"#854d0e",l:"Partial Credit — MDSAP supports but does not replace local audit"},
  {bg:"#fee2e2",c:"#991b1b",l:"No Direct Benefit — separate local QMS inspection required"},
];

export function ToolMDSAP() {
  return (
    <div>
      <div className="th-info">
        MDSAP allows one QMS audit to satisfy requirements for Australia, Canada, Brazil, Japan, and the USA.
        Understanding its value in each of the 19 RAPath jurisdictions helps prioritise certification strategy.
      </div>
      <div style={{display:"flex",gap:12,marginBottom:20,flexWrap:"wrap"}}>
        {LEGEND.map(l=>(
          <span key={l.l} style={{display:"inline-flex",alignItems:"center",gap:7,fontSize:12,fontWeight:600,color:l.c}}>
            <div style={{width:11,height:11,borderRadius:2,background:l.bg,border:`1.5px solid ${l.c}40`,flexShrink:0}}/>{l.l}
          </span>
        ))}
      </div>
      <div className="th-mdsap-grid">
        {DATA.map(d=>(
          <div key={d.c} className="th-mdsap-card">
            <div style={{fontSize:26,marginBottom:7}}>{d.flag}</div>
            <div style={{fontSize:13,fontWeight:700,color:"#0f172a",marginBottom:3}}>{d.c}</div>
            <div className="th-mdsap-lv" style={{background:d.lb,color:d.lc}}>{d.lv}</div>
            <div style={{fontSize:11,color:"#64748b",lineHeight:1.5}}>{d.note}</div>
          </div>
        ))}
      </div>
      <p style={{fontSize:11,color:"#94a3b8",marginTop:14,textAlign:"center"}}>
        All 24 RAPath jurisdictions. Verify current recognition status directly with each authority before planning certification strategy.
      </p>
    </div>
  );
}
