import React, { useState } from "react";

const TOPICS = ["Post-Market Surveillance","UDI Requirements","Authorised Representative","Vigilance Reporting","QMS Requirement"];

const DATA: Record<string,{jur:string;cls:string;freq:string;d:string}[]> = {
  "Post-Market Surveillance":[
    {jur:"🇦🇺 AU",  cls:"IIa–III",   freq:"Annual PMSR/PSUR",     d:"PMS plan required; PSUR for Class III; PMSR annually for IIa/IIb. PMCF plan for higher-risk devices."},
    {jur:"🇪🇺 EU",  cls:"All",        freq:"Annual PSUR/PMSR",     d:"PSUR annually for IIa–III; PMSR for Class I. PMCF plan mandatory. NB reviews PSUR for Class IIb/III."},
    {jur:"🇺🇸 US",  cls:"II–III",     freq:"MDR + 522 studies",    d:"MDR reporting ongoing. FDA may order Section 522 PMS studies. Annual PMA reports."},
    {jur:"🇨🇦 CA",  cls:"II–IV",      freq:"Annual review",        d:"PMS plan required; mandatory problem reporting. Annual review of complaint records."},
    {jur:"🇬🇧 UK",  cls:"All",        freq:"Annual PSUR/PMSR",     d:"Mirrors EU MDR. PSUR for IIa–III; PMSR for Class I. PMCF plan required."},
    {jur:"🇸🇬 SG",  cls:"B–D",        freq:"Annual PMS",           d:"PMS plan required at registration; annual review. FSCA reporting within 10–30 days."},
    {jur:"🇯🇵 JP",  cls:"All",        freq:"Re-examination",       d:"Re-examination system for novel devices (6-year period). Periodic safety reports to PMDA."},
    {jur:"🇨🇭 CH",  cls:"All",        freq:"Annual PSUR/PMSR",     d:"Mirrors EU MDR requirements under MedDO. PSUR for IIa–III; PMSR for Class I."},
    {jur:"🇨🇳 CN",  cls:"II–III",     freq:"Annual safety report",  d:"Annual post-market safety assessment report required. NMPA may require post-market studies."},
    {jur:"🇮🇳 IN",  cls:"B–D",        freq:"Periodic reports",     d:"PMS per MDR 2017; adverse event reporting mandatory. Periodic safety updates for Class C/D."},
    {jur:"🇰🇷 KR",  cls:"II–IV",      freq:"Annual PMS",           d:"Annual PMS report for Class II–IV. Re-evaluation system applies for post-market safety data."},
    {jur:"🇧🇷 BR",  cls:"III–IV",     freq:"Periodic reports",     d:"Registro devices (Class III/IV): periodic post-market safety reports to ANVISA."},
    {jur:"🇲🇾 MY",  cls:"C–D",        freq:"Annual PMS",           d:"PMS plan required; annual review for Class C/D. FSCAs and adverse events reported to MDA."},
    {jur:"🇮🇩 ID",  cls:"B–D",        freq:"Annual PMS",           d:"PMS plan required; periodic safety reviews. Adverse events reported to BPOM."},
    {jur:"🇻🇳 VN",  cls:"B–D",        freq:"Annual PMS",           d:"PMS obligations per Circular 46/2017; adverse event reporting to DAV."},
    {jur:"🇷🇺 RU",  cls:"All",        freq:"Annual report",        d:"Annual post-registration monitoring report required. Adverse events to Roszdravnadzor."},
    {jur:"🇲🇽 MX",  cls:"II–III",     freq:"Periodic reports",     d:"Post-market safety reports required for Class II/III. COFEPRIS VUSAR vigilance system."},
    {jur:"🇸🇦 SA",  cls:"B–D",        freq:"Annual PMS",           d:"PMS plan required at SFDA registration; annual review for Class B–D. FSCA reporting mandatory."},
    {jur:"🇳🇿 NZ",  cls:"IIa–III",    freq:"Annual review",        d:"PMS plan expected for higher-class devices; aligned with TGA requirements. FSCA reporting to Medsafe."},

    {jur:"🇭🇰 HK",  cls:"II–III",     freq:"Annual PMS",           d:"PMS plan required; annual review for Class II/III. FSCAs and adverse events reported to MDD/MDACS."},
    {jur:"🇹🇭 TH",  cls:"2–3",         freq:"Annual PMS",           d:"PMS obligations under Medical Device Act B.E. 2562; periodic safety reports to Thai FDA MDCD. Annual review required."},
    {jur:"🇵🇭 PH",  cls:"B–D",         freq:"Annual PMS / CPR renewal", d:"Post-market surveillance required; adverse events reported to FDA Philippines CDRRHR. CPR renewal obligations."},
    {jur:"🇧🇩 BD",  cls:"B–D",         freq:"Periodic reports",     d:"Post-market obligations under DGDA framework; adverse event reporting developing. Annual safety review recommended."},
    {jur:"🇱🇰 LK",  cls:"B–D",         freq:"Annual PMS",           d:"PMS obligations under NMRA Act; adverse event reporting to NMRA. Annual review for Class B–D devices."},
  ],
  "UDI Requirements":[
    {jur:"🇦🇺 AU",  cls:"III (phased)",    freq:"IMDRF aligned",    d:"TGA UDI framework aligning with IMDRF; Class III first. TGA product code as interim identifier."},
    {jur:"🇪🇺 EU",  cls:"All (phased)",   freq:"UDI-DI + UDI-PI",  d:"EUDAMED UDI mandatory; Class III/implantable first, then IIb, IIa, I."},
    {jur:"🇺🇸 US",  cls:"All (phased)",   freq:"GS1/HIBCC/ICCBBA", d:"GUDID submission required; DI + PI structure on label. All device classes now covered."},
    {jur:"🇨🇦 CA",  cls:"II–IV (dev.)",   freq:"IMDRF aligned",    d:"Health Canada UDI framework aligned with IMDRF; phased implementation in progress."},
    {jur:"🇬🇧 UK",  cls:"All (phased)",   freq:"UK UDI system",    d:"MHRA UK UDI mirrors EU MDR; Class III/implantable first. Separate from EUDAMED."},
    {jur:"🇸🇬 SG",  cls:"Selected",       freq:"HSA product code", d:"HSA product code as current identifier. IMDRF-aligned UDI framework under development."},
    {jur:"🇯🇵 JP",  cls:"All",            freq:"GS1 recommended",  d:"MHLW mandating GS1 barcodes. JDAC UDI system. Phased mandatory rollout."},
    {jur:"🇨🇭 CH",  cls:"All (phased)",   freq:"Mirrors EU MDR",   d:"Swissmedic UDI requirements mirror EU MDR; Class III/implantable first."},
    {jur:"🇨🇳 CN",  cls:"II–III",         freq:"National UDI",     d:"NMPA national UDI system; Class III first (2019 pilot), Class II phased rollout."},
    {jur:"🇮🇳 IN",  cls:"In development", freq:"IMDRF aligned",    d:"India UDI framework under development by CDSCO; aligning with IMDRF guidance."},
    {jur:"🇰🇷 KR",  cls:"All (phased)",   freq:"UDIKOREA",         d:"MFDS UDIKOREA system; mandatory for implantables and Class IV first."},
    {jur:"🇧🇷 BR",  cls:"In development", freq:"IMDRF aligned",    d:"ANVISA UDI framework under development. No mandatory system yet."},
    {jur:"🇲🇾 MY",  cls:"In development", freq:"ASEAN aligned",    d:"MDA UDI framework planned; ASEAN harmonisation with IMDRF being developed."},
    {jur:"🇮🇩 ID",  cls:"In development", freq:"ASEAN aligned",    d:"BPOM UDI framework in early development; ASEAN AMDD harmonisation basis."},
    {jur:"🇻🇳 VN",  cls:"In development", freq:"ASEAN aligned",    d:"Vietnam UDI framework under development; DAV aligning with ASEAN AMDD."},
    {jur:"🇷🇺 RU",  cls:"Selected",       freq:"MDLP/Honest SIGN", d:"Russia MDLP track-and-trace system; medical devices phased into mandatory marking."},
    {jur:"🇲🇽 MX",  cls:"In development", freq:"IMDRF aligned",    d:"COFEPRIS UDI framework under development; NOM-241 labelling requirements apply currently."},
    {jur:"🇸🇦 SA",  cls:"All (phased)",   freq:"SFDA UDI system",  d:"SFDA UDI system aligned with IMDRF; Class C/D first, phasing to Class A/B. eGateway submission."},
    {jur:"🇳🇿 NZ",  cls:"Aligning w/ AU", freq:"Mirrors TGA/IMDRF",d:"New Zealand aligning UDI requirements with TGA under Trans-Tasman framework. CE/TGA UDI accepted."},

    {jur:"🇭🇰 HK",  cls:"In development", freq:"IMDRF aligned",    d:"MDD/MDACS UDI framework under development; aligning with IMDRF guidance for mandatory scheme."},
    {jur:"🇹🇭 TH",  cls:"In development", freq:"IMDRF aligned",    d:"Thai FDA UDI framework under development; ASEAN harmonisation basis."},
    {jur:"🇵🇭 PH",  cls:"In development", freq:"ASEAN aligned",    d:"FDA Philippines UDI framework under development; ASEAN AMDD harmonisation."},
    {jur:"🇧🇩 BD",  cls:"In development", freq:"Developing",       d:"DGDA UDI framework not yet established; developing regulatory infrastructure."},
    {jur:"🇱🇰 LK",  cls:"In development", freq:"Developing",       d:"NMRA UDI framework not yet established; aligned with developing ASEAN harmonisation."},
  ],
  "Authorised Representative":[
    {jur:"🇦🇺 AU",  cls:"Foreign mfrs",  freq:"Sponsor",              d:"Australian Sponsor mandatory; holds ARTG application; legally responsible entity in Australia."},
    {jur:"🇪🇺 EU",  cls:"Non-EEA mfrs", freq:"EU Authorised Rep",    d:"EU AR mandatory; EEA-established; registered in EUDAMED; legally responsible."},
    {jur:"🇺🇸 US",  cls:"Foreign mfrs", freq:"US Agent",             d:"US Agent mandatory for FDA correspondence; Initial Importer separately required."},
    {jur:"🇨🇦 CA",  cls:"Foreign mfrs", freq:"Canadian Importer",    d:"Canadian Importer holds MDL for most devices. MDEL required for all establishments."},
    {jur:"🇬🇧 UK",  cls:"Non-UK mfrs",  freq:"UKRP",                 d:"UK Responsible Person required since July 2023; UK-established; MHRA-registered."},
    {jur:"🇸🇬 SG",  cls:"Foreign mfrs", freq:"LRA",                  d:"Local Regulatory Agent mandatory; Singapore-incorporated; holds product registration."},
    {jur:"🇯🇵 JP",  cls:"All mfrs",     freq:"MAH",                  d:"Japanese MAH licence mandatory; Japan-incorporated; holds Shonin approval."},
    {jur:"🇨🇭 CH",  cls:"Non-CH mfrs",  freq:"CH Representative",    d:"Swiss Authorised Representative required for non-Swiss manufacturers under MedDO Art. 52."},
    {jur:"🇨🇳 CN",  cls:"Foreign mfrs", freq:"NMPA Agent",           d:"Chinese agent mandatory; China-registered legal entity; holds import registration."},
    {jur:"🇮🇳 IN",  cls:"Foreign mfrs", freq:"Indian Agent",         d:"Indian importer/agent required; must hold Import Licence from CDSCO."},
    {jur:"🇰🇷 KR",  cls:"Foreign mfrs", freq:"Korean Importer",      d:"Korean importer or domestic representative required; holds MFDS authorisation."},
    {jur:"🇧🇷 BR",  cls:"Foreign mfrs", freq:"BRH",                  d:"Brazil Registration Holder mandatory; Brazilian legal entity; holds Notificação or Registro."},
    {jur:"🇲🇾 MY",  cls:"Foreign mfrs", freq:"Establishment Licence", d:"MDA Establishment Licence holder required; Malaysian-incorporated entity."},
    {jur:"🇮🇩 ID",  cls:"Foreign mfrs", freq:"Indonesian Importer",  d:"Indonesian importer with valid IT-Alkes required."},
    {jur:"🇻🇳 VN",  cls:"Foreign mfrs", freq:"Vietnamese Importer",  d:"Vietnamese importer or distributor holds circulation registration from DAV."},
    {jur:"🇷🇺 RU",  cls:"Foreign mfrs", freq:"RUS REP",              d:"Russian Representative mandatory; Russian legal entity; holds GRLS state registration."},
    {jur:"🇲🇽 MX",  cls:"Foreign mfrs", freq:"Titular del Registro", d:"Mexican titular del registro (registration holder) mandatory — Mexico-incorporated legal entity; holds Registro Sanitario."},
    {jur:"🇸🇦 SA",  cls:"Foreign mfrs", freq:"Saudi AR",             d:"Saudi Authorised Representative mandatory — Saudi Arabia-registered entity; holds SFDA MDNR registration."},
    {jur:"🇳🇿 NZ",  cls:"Foreign mfrs", freq:"NZ Sponsor / Agent",   d:"NZ-established entity or agent strongly recommended; Trans-Tasman arrangements with AU simplify requirements."},

    {jur:"🇭🇰 HK",  cls:"Foreign mfrs",   freq:"LAR",              d:"Local Authorized Representative strongly recommended; MDACS transitioning to mandatory LAR requirement."},
    {jur:"🇹🇭 TH",  cls:"Foreign mfrs",   freq:"Medical Device Establishment Licence", d:"MDEL (importer/distributor licence) mandatory under Medical Device Act B.E. 2562; foreign manufacturers must appoint Thai licensee."},
    {jur:"🇵🇭 PH",  cls:"Foreign mfrs",   freq:"LTO holder",       d:"License to Operate (LTO) holder mandatory; Philippines-registered entity; holds Certificate of Product Registration (CPR)."},
    {jur:"🇧🇩 BD",  cls:"Foreign mfrs",   freq:"DGDA Agent",       d:"Local importer/agent required; must hold DGDA Import Registration Certificate and relevant licences."},
    {jur:"🇱🇰 LK",  cls:"Foreign mfrs",   freq:"NMRA Agent",       d:"Local authorized representative required under NMRA Act; must be Sri Lanka-registered entity."},
  ],
  "Vigilance Reporting":[
    {jur:"🇦🇺 AU",  cls:"All", freq:"48h / 10 / 30 days",    d:"48h for imminent hazard/death. 10 working days for serious. 30 days for other reportable incidents."},
    {jur:"🇪🇺 EU",  cls:"All", freq:"2 / 10 / 15 / 30 days", d:"2 working days for death/imminent hazard. 10 for serious. 15 for non-serious. EUDAMED vigilance module."},
    {jur:"🇺🇸 US",  cls:"All", freq:"5 / 30 days",           d:"5-day report for imminent hazard. 30-day MDR for death/serious injury. eMDR system."},
    {jur:"🇨🇦 CA",  cls:"All", freq:"10 / 30 days",          d:"10 days for serious injury or death. 30 days for unexpected adverse device effects."},
    {jur:"🇬🇧 UK",  cls:"All", freq:"2 / 10 / 15 / 30 days", d:"Mirrors EU MDR timeframes. MHRA Yellow Card scheme + online portal."},
    {jur:"🇸🇬 SG",  cls:"All", freq:"10 / 30 days",          d:"10 calendar days for death/serious. 30 days for other reportable incidents."},
    {jur:"🇯🇵 JP",  cls:"All", freq:"15 / 30 days",          d:"15 days for unexpected deaths. 30 days for serious adverse events. PMDA online reporting."},
    {jur:"🇨🇭 CH",  cls:"All", freq:"2 / 10 / 30 days",      d:"Mirrors EU MDR timeframes under MedDO. Reports submitted to Swissmedic."},
    {jur:"🇨🇳 CN",  cls:"All", freq:"7 / 20 / 30 days",      d:"7 days for death/imminent hazard. 20 days for serious. 30 days for others. NMPA MADR."},
    {jur:"🇮🇳 IN",  cls:"All", freq:"7 / 15 / 30 days",      d:"7 days for death. 15 days for serious injury. 30 days for near-miss. CDSCO MDV portal."},
    {jur:"🇰🇷 KR",  cls:"All", freq:"15 / 30 days",          d:"15 days for death/serious. 30 days for other reportable events. MFDS UDMS system."},
    {jur:"🇧🇷 BR",  cls:"All", freq:"10 / 30 days",          d:"10 business days for death/serious. 30 days for other events. ANVISA VIGIPÓS."},
    {jur:"🇲🇾 MY",  cls:"All", freq:"10 / 30 days",          d:"10 days for serious events. 30 days for others. MDA adverse event reporting portal."},
    {jur:"🇮🇩 ID",  cls:"All", freq:"14 / 30 days",          d:"14 days for serious events. 30 days for others. BPOM e-REGALKES."},
    {jur:"🇻🇳 VN",  cls:"All", freq:"15 / 30 days",          d:"15 days for serious adverse events. 30 days for others. Reports to DAV."},
    {jur:"🇷🇺 RU",  cls:"All", freq:"3 / 15 / 30 days",      d:"3 days for death. 15 days for serious. 30 days for others. Roszdravnadzor Pharm Inspector."},
    {jur:"🇲🇽 MX",  cls:"All", freq:"15 / 30 days",          d:"15 days for serious adverse events or death. 30 days for other reportable incidents. COFEPRIS VUSAR system."},
    {jur:"🇸🇦 SA",  cls:"All", freq:"48h / 10 / 30 days",    d:"48h for death/imminent hazard. 10 calendar days for serious. 30 days for other reportable events. SFDA eGateway."},
    {jur:"🇳🇿 NZ",  cls:"All", freq:"48h / 10 / 30 days",    d:"Mirrors TGA timeframes: 48h for imminent hazard. 10 working days for serious. 30 days for others. Reports to Medsafe."},

    {jur:"🇭🇰 HK",  cls:"All", freq:"15 / 30 days",          d:"15 calendar days for serious adverse events. 30 days for other reportable incidents. MDD/MDACS reporting portal."},
    {jur:"🇹🇭 TH",  cls:"All", freq:"15 / 30 days",          d:"15 days for serious adverse events. 30 days for others. Thai FDA MDCD reporting system. Medical Device Act B.E. 2562."},
    {jur:"🇵🇭 PH",  cls:"All", freq:"10 / 30 days",          d:"10 days for serious adverse events. 30 days for others. FDA Philippines CDRRHR reporting system."},
    {jur:"🇧🇩 BD",  cls:"All", freq:"15 / 30 days",          d:"15 days for serious events. 30 days for others. DGDA adverse event reporting under developing framework."},
    {jur:"🇱🇰 LK",  cls:"All", freq:"15 / 30 days",          d:"15 days for serious adverse events. 30 days for others. NMRA adverse event reporting system."},
  ],
  "QMS Requirement":[
    {jur:"🇦🇺 AU",  cls:"All",    freq:"ISO 13485 / MDSAP",   d:"ISO 13485 required; MDSAP fully accepted as equivalent. TGA may audit CAB-certified sites."},
    {jur:"🇪🇺 EU",  cls:"All",    freq:"ISO 13485 + MDR adds", d:"ISO 13485 + EU MDR-specific additions. NB QMS audit mandatory for Class IIa+."},
    {jur:"🇺🇸 US",  cls:"II–III", freq:"QMSR (21 CFR 820)",   d:"FDA QMSR aligned with ISO 13485 from Feb 2026. MDSAP accepted. Design controls emphasis."},
    {jur:"🇨🇦 CA",  cls:"II–IV",  freq:"ISO 13485 / MDSAP",   d:"ISO 13485 required for Class II–IV. MDSAP fully accepted by Health Canada."},
    {jur:"🇬🇧 UK",  cls:"IIa+",   freq:"ISO 13485",            d:"ISO 13485 required. UK Approved Body QMS audit mandatory for Class IIa+."},
    {jur:"🇸🇬 SG",  cls:"B–D",    freq:"ISO 13485",            d:"ISO 13485 required; HSA accepts overseas QMS certificates for Notified Route."},
    {jur:"🇯🇵 JP",  cls:"All",    freq:"JISQ 13485 / MDSAP",  d:"Japanese QMS Ordinance (JISQ 13485 equivalent). MDSAP accepted by PMDA."},
    {jur:"🇨🇭 CH",  cls:"IIa+",   freq:"ISO 13485",            d:"ISO 13485 required; mirrors EU MDR under MedDO. Swiss DB audit for Class IIa+."},
    {jur:"🇨🇳 CN",  cls:"II–III", freq:"NMPA QMS + GMP",      d:"Chinese QMS Ordinance + GMP inspection by NMPA for all imported devices."},
    {jur:"🇮🇳 IN",  cls:"B–D",    freq:"ISO 13485 / GMP",     d:"ISO 13485 or equivalent required. CDSCO GMP inspection for Class C/D."},
    {jur:"🇰🇷 KR",  cls:"II–IV",  freq:"ISO 13485 / KGMP",    d:"ISO 13485 or Korean GMP required. MFDS GMP inspection for Class II–IV."},
    {jur:"🇧🇷 BR",  cls:"All",    freq:"ISO 13485 + B-GMP",   d:"ISO 13485 + Brazilian B-GMP certification (INMETRO-accredited CAB). All device classes."},
    {jur:"🇲🇾 MY",  cls:"B–D",    freq:"ISO 13485",            d:"ISO 13485 required for Class B–D. MDA CAB audit or recognised overseas certificate."},
    {jur:"🇮🇩 ID",  cls:"B–D",    freq:"ISO 13485",            d:"ISO 13485 required for Class B–D. BPOM may accept overseas certificates."},
    {jur:"🇻🇳 VN",  cls:"B–D",    freq:"ISO 13485",            d:"ISO 13485 required for Class B–D. DAV accepts overseas QMS certificates."},
    {jur:"🇷🇺 RU",  cls:"All",    freq:"GOST R ISO 13485",    d:"GOST R ISO 13485 or equivalent required. QMS inspection mandatory for Class IIa (sterile), IIb, III."},
    {jur:"🇲🇽 MX",  cls:"II–III", freq:"NOM-241-SSA1-2012",   d:"NOM-241-SSA1-2012 (Good Manufacturing Practices — ISO 13485 equivalent) required. COFEPRIS GMP inspection for some Class III."},
    {jur:"🇸🇦 SA",  cls:"B–D",    freq:"ISO 13485",            d:"ISO 13485 certification required for Class B–D. SFDA recognises overseas ISO 13485 certificates. MDSAP supports but not formally recognised."},
    {jur:"🇳🇿 NZ",  cls:"IIa+",   freq:"ISO 13485",            d:"ISO 13485 required for Class IIa+. Medsafe accepts TGA CAB audit and overseas conformity assessment body certificates."},

    {jur:"🇭🇰 HK",  cls:"II–III",   freq:"ISO 13485",            d:"ISO 13485 required for Class II/III MDACS registration. Overseas certificates accepted for most applications."},
    {jur:"🇹🇭 TH",  cls:"2–3",      freq:"ISO 13485 / GMP",     d:"ISO 13485 required under Medical Device Act B.E. 2562. Thai FDA GMP inspection may apply for domestic manufacturers."},
    {jur:"🇵🇭 PH",  cls:"B–D",      freq:"ISO 13485 / GMP",     d:"ISO 13485 or WHO-GMP required for Class B–D CPR applications. FDA Philippines may conduct GMP inspections."},
    {jur:"🇧🇩 BD",  cls:"B–D",      freq:"ISO 13485 / GMP",     d:"ISO 13485 or equivalent GMP required. DGDA may require GMP certificate from competent authority of origin country."},
    {jur:"🇱🇰 LK",  cls:"B–D",      freq:"ISO 13485",            d:"ISO 13485 required for Class B–D NMRA registration. Overseas certificates accepted as supporting evidence."},
  ],
};

export function ToolCompare() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const rows = DATA[topic] ?? [];
  return (
    <div>
      <div className="th-filter-row">
        {TOPICS.map(t=><button key={t} className={`th-filter${topic===t?" on":""}`} onClick={()=>setTopic(t)}>{t}</button>)}
      </div>
      <div className="th-table-wrap">
        <table className="th-table">
          <thead><tr><th>Jurisdiction</th><th>Applies to</th><th>Frequency / Format</th><th>Key Details</th></tr></thead>
          <tbody>{rows.map(r=>(
            <tr key={r.jur}>
              <td style={{fontWeight:600,color:"#0f172a",whiteSpace:"nowrap"}}>{r.jur}</td>
              <td><span style={{background:"#f1f5f9",padding:"2px 8px",borderRadius:6,fontSize:11,fontWeight:600,color:"#475569"}}>{r.cls}</span></td>
              <td style={{fontWeight:600,whiteSpace:"nowrap"}}>{r.freq}</td>
              <td>{r.d}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      <p style={{fontSize:11,color:"#94a3b8",marginTop:10}}>All 24 RAPath jurisdictions. Indicative — verify against current authority publications.</p>
    </div>
  );
}
