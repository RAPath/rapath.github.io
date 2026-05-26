import React, { useState } from "react";

const MARKETS = ["EU MDR","FDA","TGA","HSA","MHRA","Health Canada","PMDA","ANVISA","Swissmedic","NMPA","CDSCO","MFDS","MDA","BPOM","DAV","Roszdravnadzor","COFEPRIS","SFDA","Medsafe","MDD/MDACS","Thai FDA","FDA Philippines","DGDA","NMRA"];

interface Gap { sev:"high"|"med"|"low"; t:string; d:string; }

// Comprehensive gap data for all market combinations
// Structure: "FROM→TO": [gap array]
// Common gap categories: clinical evidence, QMS, labelling, UDI, local rep, registration process, PMS

function buildGaps(from: string, to: string): Gap[] {
  // Clinical evidence gaps
  const clinEU: Gap  = {sev:"high",t:"Clinical Evaluation Report (CER)",    d:"EU MDR requires a formal CER per MDCG 2020-6 with systematic literature review, equivalence assessment, and PMCF plan. This is more extensive than most other jurisdictions require."};
  const clinFDA: Gap = {sev:"high",t:"Clinical Evidence Format — FDA",        d:"FDA requires clinical data formatted as a 510(k) clinical section or PMA clinical module. EU/AU/UK CER format is not accepted directly by FDA — data must be restructured."};
  const clinTGA: Gap = {sev:"med", t:"Clinical Evidence — TGA",               d:"TGA accepts clinical evidence from overseas (CE certificate or equivalent). A TGA-format clinical evaluation summary may be required if comparable overseas evidence is used."};
  const clinGen: Gap = {sev:"med", t:"Clinical Evidence Format",              d:`${to} has its own clinical evidence format and review process. Evidence accepted by ${from} may require reformatting or supplementation.`};

  // QMS gaps
  const qmsFDA: Gap  = {sev:"high",t:"QMS — FDA QMSR (21 CFR Part 820)",    d:"FDA QMSR (aligned with ISO 13485 from Feb 2026) requires US-specific design control documentation. A gap analysis against QMSR is needed even with ISO 13485 certification."};
  const qmsJP: Gap   = {sev:"high",t:"QMS — Japanese QMS Ordinance",         d:"Japan's QMS Ordinance (JISQ 13485 equivalent) requires separate PMDA QMS conformity assessment for Class III/IV devices. MDSAP audit partially accepted."};
  const qmsGen: Gap  = {sev:"low", t:"QMS — documentation review",           d:`${to} accepts ISO 13485 certification but may require jurisdiction-specific QMS additions or a local quality management system inspection.`};

  // UDI gaps
  const udiFDA: Gap  = {sev:"med", t:"UDI — FDA GUDID Registration",         d:"GUDID (FDA) registration is separate from EUDAMED (EU) and other UDI databases. A new UDI must be issued by an FDA-accredited issuing agency (GS1, HIBCC, or ICCBBA) and registered in GUDID."};
  const udiEU: Gap   = {sev:"med", t:"UDI — EUDAMED Registration",           d:"EUDAMED (EU) UDI registration is separate from GUDID and other databases. UDI-DI must be assigned and registered in EUDAMED before EU market entry."};
  const udiGen: Gap  = {sev:"low", t:"UDI — Jurisdiction Database",          d:`${to} maintains its own UDI database or device registry. UDI registration in ${from}'s system does not transfer — separate registration required.`};

  // Local rep gaps
  const repEU: Gap   = {sev:"high",t:"EU Authorised Representative",         d:"Non-EEA manufacturers must appoint an EU AR established in the EEA. The EU AR is registered in EUDAMED and bears legal responsibilities under EU MDR. This is a separate appointment from any other jurisdiction's representative."};
  const repFDA: Gap  = {sev:"med", t:"US Agent & Initial Importer",          d:"Foreign manufacturers must appoint a US Agent with US physical address for FDA correspondence. Initial Importer is separately required and listed on FDA records."};
  const repTGA: Gap  = {sev:"med", t:"Australian Sponsor",                   d:"An Australian Sponsor must be appointed — must be Australia-based. The Sponsor holds the ARTG entry and is the legally responsible entity. This is not equivalent to an EU AR."};
  const repHSA: Gap  = {sev:"med", t:"Singapore Local Regulatory Agent",     d:"A Singapore-incorporated LRA must be appointed. The LRA holds the PRISM product registration and bears local legal responsibility. A Dealer's Licence is also required."};
  const repUK: Gap   = {sev:"med", t:"UK Responsible Person (UKRP)",         d:"Non-UK manufacturers must appoint a UKRP established in the UK (since July 2023). The UKRP is registered with MHRA and must be named on the label."};
  const repJP: Gap   = {sev:"high",t:"Japanese Marketing Authorisation Holder (MAH)", d:"A Japan-incorporated MAH must be appointed and licensed. The MAH holds the Shonin approval and bears full regulatory responsibility in Japan. Finding a willing MAH is often the critical path item."};
  const repHC: Gap   = {sev:"med", t:"Canadian Importer / Regulatory Agent",d:"The Canadian Importer holds the Medical Device Licence (MDL) for most devices. Foreign manufacturers can apply directly with a Canadian regulatory agent but typically the importer holds the MDL."};
  const repBR: Gap   = {sev:"med", t:"Brazil Registration Holder (BRH)",     d:"A BRH must be appointed for all imported devices. The BRH holds the Notificação or Registro and is legally responsible. Brazilian B-GMP certification is also required for all device classes."};

  // Labelling gaps
  const labelFDA: Gap = {sev:"med",t:"Labelling — FDA Specific Requirements", d:"FDA label must include 'Rx only' (if applicable), adequate directions for use per 21 CFR Part 801, and GUDID UDI format. Existing EU/AU labels are typically insufficient without modification."};
  const labelTGA: Gap = {sev:"low",t:"Labelling — TGA / Australian Requirements",d:"Australian labels must include Sponsor name and Australian address. The ARTG number is NOT a mandatory label element (common misconception). Verify against TGO 91."};
  const labelJP: Gap  = {sev:"high",t:"Labelling — Japanese Language Requirement",d:"All Class II, III, IV device labels must be in Japanese. Full Japanese-language IFU is required. Translation and local Japanese review is a significant effort and cost."};
  const labelCN: Gap  = {sev:"high",t:"Labelling — Chinese Language Requirement",d:"All labels and IFU must be in simplified Chinese. Translation and in-country labelling testing may be required. Chinese-language IFU must be submitted with NMPA application."};
  const labelGen: Gap = {sev:"low",t:"Labelling — Language & Format",         d:`${to} has specific language and labelling format requirements. Current ${from}-approved labels will need review and modification for the ${to} market.`};

  // Registration process gaps
  const regEU: Gap   = {sev:"high",t:"EU Notified Body Engagement",          d:"EU MDR requires a Notified Body for Class IIa+ devices. There is no equivalent of a Notified Body in FDA, TGA, or HSA systems. NB engagement should begin 12–18 months ahead of target date — EU NB capacity is limited."};
  const regFDA: Gap  = {sev:"med", t:"FDA Submission System",                d:"FDA uses eSTAR electronic submission format for 510(k), De Novo, and PMA applications. FURLS for establishment registration. These are separate from all other jurisdictions' portals."};
  const regTGA: Gap  = {sev:"low", t:"ARTG Application — Comparable Evidence",d:"TGA comparable overseas evidence pathway (using CE, MDSAP, or FDA evidence) streamlines Class II/III applications. Specific TGA application requirements differ from other jurisdictions."};
  const regJP: Gap   = {sev:"high",t:"PMDA Registration Process — Shonin / Ninsho",d:"Japan's Shonin (PMDA pre-market approval) or Ninsho (RCB certification) pathway has no parallel in other jurisdictions. Pre-submission consultation with PMDA is strongly recommended before formal submission."};
  const regCN: Gap   = {sev:"high",t:"NMPA — In-Country Testing & Clinical Trials",d:"NMPA may require in-country product testing and, for Class III devices, clinical trials conducted in China. Proof of home-country approval is required. The process typically takes 2–4 years for novel Class III devices."};
  const regHC: Gap   = {sev:"low", t:"Health Canada MDL Application",        d:"The MDL application requires a Declaration of Conformity and safety/effectiveness summary. MDSAP certification significantly reduces the burden compared to a standalone Canadian QMS submission."};

  // PMS gaps
  const pmsCN: Gap   = {sev:"med", t:"Post-Market — Chinese PMS Requirements",d:"NMPA requires post-market clinical studies for some Class III devices. Annual safety reports and re-registration every 5 years are required."};
  const pmsBR: Gap   = {sev:"low", t:"Post-Market — Brazilian ANVISA Requirements",d:"ANVISA requires B-GMP certification and ongoing BRH maintenance. Registro (Class III/IV) valid for 10 years; renewal required."};

  // Build gap list by transition
  const key = `${from}→${to}`;

  const SPECIFIC: Record<string, Gap[]> = {
    "EU MDR→FDA":      [clinFDA, qmsFDA, udiFDA, repFDA, labelFDA, regFDA],
    "EU MDR→TGA":      [repTGA, {sev:"low",t:"ARTG Application",d:"EU CE certificate supports TGA comparable overseas evidence pathway — relatively streamlined. Sponsor appointment is the critical first step."}, labelTGA, qmsGen, udiGen],
    "EU MDR→HSA":      [repHSA, {sev:"low",t:"PRISM Registration",d:"HSA Notified Route accepts EU MDR approval as comparable overseas evidence, simplifying Class B/C applications. LRA appointment is mandatory."}, labelGen, udiGen],
    "EU MDR→MHRA":     [repUK, {sev:"low",t:"MHRA Registration",d:"CE marking accepted until June 2028 (most devices) / June 2030 (high-risk). MHRA registration required in addition to CE marking."}, {sev:"low",t:"UK UDI System",d:"UK UDI registration is separate from EUDAMED; required for MHRA registration."}],
    "EU MDR→Health Canada": [repHC, qmsGen, {sev:"low",t:"MDL Application Format",d:"Canadian MDL requires Declaration of Conformity referencing Canadian standards. MDSAP accepted by Health Canada."}, labelGen],
    "EU MDR→PMDA":     [repJP, regJP, labelJP, {sev:"high",t:"Foreign Manufacturer Registration (FMR)",d:"PMDA FMR is required for all foreign manufacturers; separate from CE marking and any other overseas registration."}, qmsJP],
    "EU MDR→ANVISA":   [repBR, {sev:"high",t:"B-GMP Certification",d:"Brazilian Good Manufacturing Practice (B-GMP) certification is required for all device classes — separate from ISO 13485. INMETRO-accredited CAB audit required."}, labelGen, pmsBR],

    "FDA→EU MDR":      [clinEU, repEU, udiEU, regEU, {sev:"med",t:"GSPR Documentation",d:"EU MDR Annex I GSPR checklist requires formal documentation of compliance for each applicable requirement. FDA design controls partially overlap but the GSPR is more extensive."}, labelGen],
    "FDA→TGA":         [repTGA, {sev:"low",t:"TGA Comparable Evidence",d:"FDA clearance/approval can support TGA comparable overseas evidence pathway for Class IIa–III. Sponsor appointment is the critical first step."}, labelTGA, udiGen],
    "FDA→HSA":         [repHSA, clinGen, labelGen, {sev:"low",t:"PRISM Registration",d:"HSA Notified Route accepts FDA 510(k) / PMA as comparable overseas evidence for streamlined registration."}],
    "FDA→MHRA":        [repUK, clinEU, udiEU, {sev:"med",t:"MHRA Registration & UKCA",d:"MHRA registration required. UKCA marking required (CE accepted until 2028/2030). UK Approved Body needed for Class IIa+."}, labelGen],
    "FDA→Health Canada":[repHC, qmsGen, {sev:"low",t:"MDL Application",d:"Health Canada MDL requires Declaration of Conformity. FDA 510(k) evidence can support Canadian application."}, labelGen],
    "FDA→PMDA":        [repJP, regJP, labelJP, qmsJP, {sev:"med",t:"Clinical Evidence — PMDA",d:"PMDA may require clinical data from Japanese patients for Class III/IV devices not previously approved in Japan."}],
    "FDA→ANVISA":      [repBR, {sev:"high",t:"B-GMP Certification",d:"B-GMP certification required separately from FDA QS/QMSR — INMETRO-accredited audit needed."}, clinGen, labelGen],

    "TGA→EU MDR":      [clinEU, repEU, udiEU, regEU, {sev:"med",t:"GSPR Documentation — EU MDR",d:"TGA technical file aligns broadly with EU MDR but GSPR Annex I checklist requires formal documentation. EU NB will scrutinise CER and PMCF plan."}, labelGen],
    "TGA→FDA":         [clinFDA, repFDA, udiFDA, regFDA, labelFDA, qmsFDA],
    "TGA→HSA":         [repHSA, {sev:"low",t:"PRISM Registration",d:"TGA approval supports HSA Notified Route. LRA appointment is the critical first step."}, labelGen],
    "TGA→MHRA":        [repUK, {sev:"low",t:"MHRA Registration",d:"TGA approval supports MHRA international reliance pathway (under development). UKRP appointment required."}, udiGen, labelGen],
    "TGA→Health Canada":[repHC, qmsGen, labelGen, {sev:"low",t:"MDL Application",d:"Health Canada MDL requires Declaration of Conformity. TGA comparable evidence may support application."}],
    "TGA→PMDA":        [repJP, regJP, labelJP, qmsJP, clinGen],
    "TGA→ANVISA":      [repBR, {sev:"high",t:"B-GMP Certification",d:"ANVISA requires B-GMP certification separate from TGA/ISO 13485 — INMETRO-accredited CAB audit needed."}, clinGen, labelGen],

    "HSA→EU MDR":      [clinEU, repEU, udiEU, regEU, {sev:"med",t:"Technical File — EU MDR format",d:"EU MDR technical file requires GSPR checklist, MDCG 2020-6 CER, and PMCF plan. HSA technical dossier format differs."}, labelGen],
    "HSA→FDA":         [clinFDA, repFDA, udiFDA, regFDA, labelFDA, qmsFDA],
    "HSA→TGA":         [repTGA, {sev:"low",t:"ARTG Application",d:"HSA registration can support TGA comparable overseas evidence pathway. Sponsor appointment required."}, labelTGA],
    "HSA→MHRA":        [repUK, clinGen, udiGen, labelGen, {sev:"med",t:"UK Approved Body",d:"UK AB required for Class IIa+ UKCA marking. UKRP appointment mandatory."}],
    "HSA→Health Canada":[repHC, qmsGen, clinGen, labelGen],
    "HSA→PMDA":        [repJP, regJP, labelJP, qmsJP, clinGen],
    "HSA→ANVISA":      [repBR, {sev:"high",t:"B-GMP Certification",d:"ANVISA requires B-GMP certification — INMETRO-accredited audit needed. BRH appointment mandatory."}, clinGen, labelGen],

    "MHRA→EU MDR":     [repEU, {sev:"low",t:"EUDAMED Registration",d:"EUDAMED actor and device registration required for EU market. UK MHRA registration does not transfer."}, udiEU, {sev:"low",t:"EU Notified Body",d:"UKAB certification does not substitute for EU NB certification post-Brexit. EU-designated NB required for Class IIa+."}],
    "MHRA→FDA":        [clinFDA, repFDA, udiFDA, regFDA, labelFDA, qmsFDA],
    "MHRA→TGA":        [repTGA, {sev:"low",t:"ARTG Application",d:"MHRA registration / CE mark can support TGA comparable overseas evidence pathway. Sponsor appointment required."}, labelTGA],
    "MHRA→HSA":        [repHSA, {sev:"low",t:"PRISM Registration",d:"UK MHRA or CE approval supports HSA Notified Route. LRA appointment required."}, labelGen],
    "MHRA→Health Canada":[repHC, qmsGen, clinGen, labelGen],
    "MHRA→PMDA":       [repJP, regJP, labelJP, qmsJP, clinGen],
    "MHRA→ANVISA":     [repBR, {sev:"high",t:"B-GMP Certification",d:"ANVISA requires B-GMP certification — separate from UKCA/ISO 13485. BRH appointment mandatory."}, clinGen, labelGen],

    "Health Canada→EU MDR":   [clinEU, repEU, udiEU, regEU, labelGen, qmsGen],
    "Health Canada→FDA":      [clinFDA, repFDA, udiFDA, regFDA, labelFDA, qmsFDA],
    "Health Canada→TGA":      [repTGA, {sev:"low",t:"ARTG Application",d:"Canadian MDL can support TGA comparable overseas evidence pathway. Sponsor appointment required."}, labelTGA],
    "Health Canada→HSA":      [repHSA, clinGen, labelGen, {sev:"low",t:"PRISM Registration",d:"Health Canada approval supports HSA Notified Route."}],
    "Health Canada→MHRA":     [repUK, clinGen, udiGen, labelGen],
    "Health Canada→PMDA":     [repJP, regJP, labelJP, qmsJP, clinGen],
    "Health Canada→ANVISA":   [repBR, {sev:"high",t:"B-GMP Certification",d:"B-GMP required separately from ISO 13485 / MDSAP. BRH appointment mandatory."}, clinGen, labelGen],

    "PMDA→EU MDR":    [clinEU, repEU, udiEU, regEU, {sev:"med",t:"Technical File — EU MDR format",d:"Japanese Shonin dossier format differs from EU MDR technical file. GSPR checklist and MDCG-compliant CER required."}, labelGen],
    "PMDA→FDA":       [clinFDA, repFDA, udiFDA, regFDA, labelFDA, qmsFDA],
    "PMDA→TGA":       [repTGA, {sev:"low",t:"ARTG Application",d:"PMDA approval and MDSAP (if held) can support TGA comparable overseas evidence pathway."}, labelTGA],
    "PMDA→HSA":       [repHSA, {sev:"low",t:"PRISM Registration",d:"PMDA approval supports HSA Notified Route."}, labelGen],
    "PMDA→MHRA":      [repUK, clinGen, udiGen, labelGen],
    "PMDA→Health Canada":[repHC, qmsGen, clinGen, labelGen],
    "PMDA→ANVISA":    [repBR, {sev:"high",t:"B-GMP Certification",d:"ANVISA requires B-GMP certification separately from Japanese QMS Ordinance / MDSAP. BRH appointment mandatory."}, clinGen, labelGen],

    "ANVISA→EU MDR":  [clinEU, repEU, udiEU, regEU, {sev:"med",t:"Technical File — EU MDR format",d:"Brazilian ANVISA dossier format differs from EU MDR. GSPR checklist and MDCG-compliant CER required."}, labelGen],
    "ANVISA→FDA":     [clinFDA, repFDA, udiFDA, regFDA, labelFDA, qmsFDA],
    "ANVISA→TGA":     [repTGA, clinGen, labelTGA, {sev:"low",t:"ARTG Application",d:"Australian Sponsor appointment required. ANVISA approval may support TGA comparable evidence pathway."}],
    "ANVISA→HSA":     [repHSA, clinGen, labelGen],
    "ANVISA→MHRA":    [repUK, clinGen, udiGen, labelGen],
    "ANVISA→Health Canada":[repHC, qmsGen, clinGen, labelGen],
    "ANVISA→PMDA":    [repJP, regJP, labelJP, qmsJP, clinGen],
  };

  return SPECIFIC[key] ?? [
    {sev:"med", t:"Clinical Evidence Format",  d:`Verify how ${from} clinical evidence can be used to support ${to} application. Reformatting or supplementation may be required.`},
    {sev:"med", t:"Local Representative",      d:`${to} requires a locally-appointed regulatory representative. The ${from} representative does not transfer to ${to}.`},
    {sev:"low", t:"UDI / Device Registration", d:`${to} maintains its own device registry or UDI database. Separate registration required.`},
    {sev:"low", t:"Labelling Requirements",    d:`${to} has specific labelling requirements including language, mandatory elements, and symbol standards. Review labels before market entry.`},
    {sev:"low", t:"Registration Process",      d:`${to} has its own submission portal, fee schedule, and review process. Consult a local regulatory consultant familiar with ${to} requirements.`},
  ];
}

const SEV = {
  high: { c:"#dc2626", bg:"#fee2e2", l:"High effort" },
  med:  { c:"#ca8a04", bg:"#fef9c3", l:"Medium effort" },
  low:  { c:"#16a34a", bg:"#dcfce7", l:"Low effort" },
};

export function ToolGap() {
  const [from, setFrom] = useState("EU MDR");
  const [to,   setTo]   = useState("FDA");

  const gaps = buildGaps(from, to);

  return (
    <div>
      <div className="th-info">
        Select your existing market approval and target new market to see the regulatory gaps and
        additional effort required. All 56 market-to-market combinations are covered.
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:20 }}>
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:"#0f172a", marginBottom:9 }}>Existing Approval</div>
          <div className="th-filter-row" style={{ flexDirection:"column", gap:6 }}>
            {MARKETS.map(m => (
              <button key={m} className={`th-filter${from===m?" on":""}`} onClick={() => setFrom(m)} style={{ textAlign:"left" }}>{m}</button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:"#0f172a", marginBottom:9 }}>Target Market</div>
          <div className="th-filter-row" style={{ flexDirection:"column", gap:6 }}>
            {MARKETS.filter(m => m !== from).map(m => (
              <button key={m} className={`th-filter${to===m?" on":""}`} onClick={() => setTo(m)} style={{ textAlign:"left" }}>{m}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ fontSize:15, fontWeight:700, color:"#0f172a", marginBottom:6 }}>
        Gap Analysis: {from} → {to}
      </div>
      <div style={{ fontSize:12, color:"#64748b", marginBottom:16 }}>
        {gaps.length} gap areas identified — additional effort required beyond existing {from} compliance.
      </div>

      {/* Legend */}
      <div style={{ display:"flex", gap:12, marginBottom:16, flexWrap:"wrap" }}>
        {Object.entries(SEV).map(([k,s]) => (
          <span key={k} style={{ display:"inline-flex", alignItems:"center", gap:5, fontSize:12, fontWeight:600, color:s.c }}>
            <div style={{ width:10, height:10, borderRadius:2, background:s.bg, border:`1.5px solid ${s.c}40` }} />
            {s.l}
          </span>
        ))}
      </div>

      {gaps.map((g, i) => {
        const s = SEV[g.sev];
        return (
          <div key={i} className="th-gap-item" style={{ background:s.bg, border:`1px solid ${s.c}30` }}>
            <div style={{ width:8, minWidth:8, borderRadius:4, background:s.c, alignSelf:"stretch" }} />
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:4 }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#0f172a" }}>{g.t}</div>
                <span style={{ background:s.bg, color:s.c, border:`1px solid ${s.c}40`, fontSize:10, fontWeight:700, padding:"2px 8px", borderRadius:10, whiteSpace:"nowrap", marginLeft:8, flexShrink:0 }}>{s.l}</span>
              </div>
              <div style={{ fontSize:12, color:"#64748b", lineHeight:1.55 }}>{g.d}</div>
            </div>
          </div>
        );
      })}

      <div className="th-warn" style={{ marginTop:8 }}>
        Gap analysis is indicative only — actual additional effort depends on your specific device class,
        existing documentation quality, and the target jurisdiction's current requirements.
        Always engage a local regulatory consultant for each target market.
      </div>
    </div>
  );
}
