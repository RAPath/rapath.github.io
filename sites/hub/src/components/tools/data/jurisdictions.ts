// 19 RAPath jurisdictions — classifier data
// cls[], route[], time[] indexed by riskLevel-1 (0=low, 1=low-med, 2=med-high, 3=high)
//
// Sources reviewed May 2026:
//   AU:  TGA (updated Jan 2025), Oct 2024 FDA-exemption + MDSAP pathway
//   EU:  MDR 2017/745 Annex VIII Rules 1–22, MDCG 2019-11, MDCG 2021-24
//   US:  FDA 21 CFR, FDA device classification database
//   CA:  Health Canada Medical Devices Regulations (SOR/98-282)
//   UK:  UK MDR 2002 (as amended); CE accepted until Jun 2028/2030
//   SG:  HSA Medical Devices Branch, SHARE/PRISM portal guidance
//   JP:  PMDA/MHLW PMD Act; Todokede/Ninsho/Shonin pathways
//   CH:  MedDO (SR 812.213), Swissmedic guidance, mirrors EU MDR
//   CN:  State Council Order 739 (2021), NMPA Classification Catalogue
//   IN:  Medical Devices Rules 2017 (amended 2020), CDSCO
//   KR:  Medical Devices Act, MFDS 2024
//   BR:  ANVISA RDC 751/2022
//   MY:  Medical Device Act 2012 & Regulations 2012
//   ID:  Permenkes 20/2017 & BPOM/REGALKES framework
//   VN:  Circular 46/2017 (MOH/DAV)
//   RU:  Government Decree 1684; EAEU-only from Jan 2027
//   MX:  NOM-241-SSA1-2012; COFEPRIS SISFAR portal
//   SA:  SFDA MDNR; eGateway portal; IMDRF-aligned A–D classification
//   NZ:  Medicines Act 1981; Medsafe; TTA 2023 (phased implementation)

export interface Jurisdiction {
  id:    string;
  name:  string;
  reg:   string;
  flag:  string;
  url:   string;
  cls:   [string, string, string, string];
  route: [string, string, string, string];
  time:  [string, string, string, string];
}

export const JURISDICTIONS: Jurisdiction[] = [
  {
    id:"au", name:"Australia", reg:"TGA", flag:"🇦🇺", url:"https://rapath.github.io/au",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:[
      "Manufacturer declaration of conformity + Sponsor ARTG application — no mandatory audit for standard Class I",
      "Comparable overseas evidence (EU NB MDR cert, MDSAP, or FDA+MDSAP eff. Oct 2024) OR Australian CAB audit + ARTG inclusion",
      "Comparable overseas evidence (EU NB MDR cert or MDSAP) OR Australian CAB audit + ARTG inclusion; risk-based audit may apply",
      "TGA-issued CA certificate OR EU NB cert (MDR only) OR MDSAP + FDA 510(k) + ARTG inclusion; mandatory audit applies for some pathways",
    ],
    time: ["3–6 mo","9–15 mo","15–24 mo","24–36 mo"],
  },
  {
    id:"eu", name:"European Union", reg:"EU MDR / IVDR", flag:"🇪🇺", url:"https://rapath.github.io/eu",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:[
      "Manufacturer self-certification — Notified Body only for sterile, measuring, or reusable surgical Class I",
      "Notified Body QMS audit + technical documentation assessment (Annex IX) OR type examination + QA (Annex X + VIII)",
      "Notified Body full QMS audit + EU-type examination; stricter for implantables",
      "Notified Body full QMS & design examination (Annex IX Ch I + II); EUDAMED registration required",
    ],
    time: ["6–12 mo","12–24 mo","18–30 mo","24–42 mo"],
  },
  {
    id:"us", name:"United States", reg:"FDA", flag:"🇺🇸", url:"https://rapath.github.io/us",
    cls:  ["Class I","Class II","Class II","Class III"],
    route:[
      "510(k) exempt — general controls only; FDA device listing required; ~47% of Class I devices are exempt",
      "510(k) premarket notification — substantial equivalence to a predicate; special controls apply",
      "510(k) with special controls OR De Novo classification request for novel low-to-moderate risk devices",
      "PMA — Premarket Approval Application; valid scientific evidence of safety & effectiveness; clinical data required",
    ],
    time: ["3–6 mo","12–18 mo","18–30 mo","36–60 mo"],
  },
  {
    id:"ca", name:"Canada", reg:"Health Canada", flag:"🇨🇦", url:"https://rapath.github.io/hc",
    cls:  ["Class I","Class II","Class III","Class IV"],
    route:[
      "MDEL (Medical Device Establishment Licence) only — no device licence required; manufacturer declaration of conformity",
      "Medical Device Licence — Declaration of Conformity + safety & effectiveness summary; MDEL required",
      "Medical Device Licence — safety and effectiveness evidence including clinical data; MDEL required",
      "Medical Device Licence — comprehensive clinical investigation data; full safety & effectiveness dossier; MDEL required",
    ],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–36 mo"],
  },
  {
    id:"uk", name:"United Kingdom", reg:"MHRA", flag:"🇬🇧", url:"https://rapath.github.io/uk",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:[
      "UKCA self-certification + MHRA registration; CE marking accepted until June 2028; UKRP required for non-UK manufacturers",
      "UK Approved Body conformity assessment + UKCA marking + MHRA registration; CE accepted until June 2028; UKRP required",
      "UK Approved Body QMS audit + type examination + MHRA registration; CE accepted until June 2030 (high-risk); UKRP required",
      "UK AB full QMS + design examination + MHRA registration; UKRP required",
    ],
    time: ["6–9 mo","12–18 mo","18–24 mo","24–36 mo"],
  },
  {
    id:"sg", name:"Singapore", reg:"HSA", flag:"🇸🇬", url:"https://rapath.github.io/sg",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:[
      "PRISM product listing; many Class A devices exempt under the Product Registration Exemption (PRE) order",
      "PRISM registration — Notified Route (recognised overseas approval) or Restricted Route; Dealer's Licence required",
      "PRISM full registration + complete technical dossier; HSA in-depth evaluation; Dealer's Licence required",
      "PRISM full registration + pre-market evaluation by HSA; clinical evaluation report required; Dealer's Licence required",
    ],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"jp", name:"Japan", reg:"PMDA / MHLW", flag:"🇯🇵", url:"https://rapath.github.io/jp",
    cls:  ["Class I","Class II","Class III","Class IV"],
    route:[
      "Todokede — self-notification to PMDA; no technical review; MAH licence and Foreign Manufacturer Registration (FMR) required",
      "Ninsho — third-party certification by Registered Certification Body (RCB) if JIS standard exists; OR PMDA Shonin if no standard",
      "Shonin (PMDA pre-market approval) for most Class III; RCB Ninsho if certification standard exists; clinical evidence often required",
      "Shonin — full PMDA pre-market approval; comprehensive clinical data required; QMS conformity assessment by PMDA",
    ],
    time: ["3–6 mo","12–18 mo","18–30 mo","24–36 mo"],
  },
  {
    id:"ch", name:"Switzerland", reg:"Swissmedic", flag:"🇨🇭", url:"https://rapath.github.io/swiss",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:[
      "Manufacturer self-certification + Swissmedic product registration (MedDO Art. 9); mirrors EU MDR Class I requirements",
      "Swiss Designated Body (DB) conformity declaration + Swissmedic registration; aligned with EU MDR Annex IX",
      "DB QMS audit + EU-type examination + Swissmedic registration",
      "DB full QMS + design examination + Swissmedic registration; EU MDR CE certificate may support Swiss registration",
    ],
    time: ["6–12 mo","12–24 mo","18–30 mo","24–36 mo"],
  },
  {
    id:"cn", name:"China", reg:"NMPA", flag:"🇨🇳", url:"https://rapath.github.io/cn",
    cls:  ["Class I","Class II","Class II","Class III"],
    route:[
      "Product record filing (备案) — provincial drug authority; no technical review; NMPA agent in China required",
      "NMPA registration (注册) — provincial authority for domestic; national CMDE review for all imported Class II; home country approval proof required",
      "NMPA registration — national CMDE comprehensive review; clinical data often required; in-country testing may be needed",
      "NMPA Class III registration — CMDE full technical review; clinical trials in China often required; mandatory QMS inspection",
    ],
    time: ["3–6 mo","12–24 mo","18–30 mo","24–48 mo"],
  },
  {
    id:"in", name:"India", reg:"CDSCO", flag:"🇮🇳", url:"https://rapath.github.io/in",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:[
      "SUGAM portal registration via State Licensing Authority (SLA); importer/manufacturer licence required",
      "CDSCO Central Licensing Authority (CLA) registration + import/manufacturing licence; test reports and performance data required",
      "CDSCO CLA registration + clinical performance data; detailed technical file; import or manufacturing licence required",
      "CDSCO CLA registration + full clinical investigation data; may require local clinical trial data; import or manufacturing licence required",
    ],
    time: ["3–6 mo","12–18 mo","18–24 mo","24–36 mo"],
  },
  {
    id:"kr", name:"South Korea", reg:"MFDS", flag:"🇰🇷", url:"https://rapath.github.io/kr",
    cls:  ["Class I","Class II","Class III","Class IV"],
    route:[
      "MFDS notification (신고) — low-risk; Korean Importer or Domestic Responsible Person required",
      "MFDS safety inspection or designated third-party review; technical dossier required; UDIKOREA registration",
      "MFDS technical review + comprehensive dossier; clinical performance data required; GMP inspection possible",
      "Full MFDS pre-market review + clinical investigation data; GMP inspection; highest regulatory scrutiny",
    ],
    time: ["3–6 mo","6–12 mo","12–24 mo","24–36 mo"],
  },
  {
    id:"br", name:"Brazil", reg:"ANVISA", flag:"🇧🇷", url:"https://rapath.github.io/br",
    cls:  ["Class I","Class II","Class III","Class IV"],
    route:[
      "Notificação (Class I) — no dossier submission to ANVISA; audit-ready technical file + B-GMP certification + BRH required (RDC 751/2022)",
      "Notificação (Class II) — no dossier submission to ANVISA; audit-ready technical file + B-GMP certification + BRH required",
      "Registro (Class III) — full dossier submitted to ANVISA for technical review; B-GMP audit + BRH required",
      "Registro (Class IV) — full registration + comprehensive ANVISA technical review + B-GMP audit; BRH mandatory",
    ],
    time: ["3–9 mo","6–18 mo","18–36 mo","24–42 mo"],
  },
  {
    id:"my", name:"Malaysia", reg:"MDA", flag:"🇲🇾", url:"https://rapath.github.io/my",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:[
      "MDA product listing via MeDC@St portal; Establishment Licence required for importers/manufacturers",
      "MDA registration — Recognised Route (overseas approval) or Standard Route; Establishment Licence required",
      "MDA registration — Standard Route with conformity assessment body (CAB) audit; full technical dossier required",
      "MDA full registration + comprehensive technical review + CAB audit; clinical evaluation required",
    ],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"id", name:"Indonesia", reg:"BPOM / Kemenkes", flag:"🇮🇩", url:"https://rapath.github.io/id",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:[
      "REGALKES notification (Notifikasi Alat Kesehatan) via e-REGALKES; Import Licence (IT-Alkes) required",
      "REGALKES standard Izin Edar registration via e-REGALKES; technical documentation + import licence required",
      "REGALKES full Izin Edar registration + technical dossier review; clinical data and test reports required",
      "REGALKES full Izin Edar registration + comprehensive clinical evaluation; highest scrutiny; import licence required",
    ],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"vn", name:"Vietnam", reg:"DAV / MOH", flag:"🇻🇳", url:"https://rapath.github.io/vt",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:[
      "MOH declaration (công bố tiêu chuẩn áp dụng) — Class A self-declaration via DAV portal",
      "DAV simplified registration (đăng ký lưu hành) — Class B; abbreviated pathway with recognised overseas certificate",
      "DAV full registration (đăng ký lưu hành) — Class C with complete technical file review",
      "DAV full registration + clinical evidence review — Class D; comprehensive dossier; local clinical data may be required",
    ],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"ru", name:"Russia", reg:"Roszdravnadzor (RZN)", flag:"🇷🇺", url:"https://rapath.github.io/ru",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:[
      "GRLS state registration — simplified procedure (~50 working days); RUS REP required; EAEU pathway also valid",
      "GRLS full state registration; QMS inspection mandatory for sterile Class IIa from Jan 2024; RUS REP required",
      "GRLS full registration + mandatory QMS inspection; clinical trials may be required; RUS REP required",
      "GRLS full registration + mandatory clinical trials (Russian centres) + QMS inspection; EAEU-only from Jan 2027",
    ],
    time: ["2–6 mo","6–12 mo","12–24 mo","18–30 mo"],
  },
  {
    id:"mx", name:"Mexico", reg:"COFEPRIS", flag:"🇲🇽", url:"https://rapath.github.io/mx",
    cls:  ["Class I","Class II","Class II","Class III"],
    route:[
      "Aviso de funcionamiento (establishment notice) + product notification via SISFAR; Mexican titular del registro required for some Class I; NOM-241 compliance",
      "Registro Sanitario via SISFAR portal; technical dossier; NOM-241-SSA1-2012 GMP compliance; Mexican titular required; CE or FDA evidence may support",
      "Registro Sanitario — full COFEPRIS technical review; clinical evidence required; NOM-241 GMP compliance; titular del registro mandatory",
      "Registro Sanitario — comprehensive COFEPRIS review + clinical data; GMP inspection of manufacturing site; highest scrutiny; titular del registro mandatory",
    ],
    time: ["3–6 mo","12–18 mo","18–30 mo","24–42 mo"],
  },
  {
    id:"sa", name:"Saudi Arabia", reg:"SFDA", flag:"🇸🇦", url:"https://rapath.github.io/sa",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:[
      "SFDA MDNR listing via eGateway — Class A low-risk listing; Saudi Authorised Representative required; ISO 13485 recommended",
      "SFDA MDNR registration — Recognised Route (CE, FDA, TGA, HC approval) or Standard Route; Saudi AR mandatory; ISO 13485 required",
      "SFDA full registration — comprehensive technical dossier review; Recognised Route streamlines for CE/FDA/TGA holders; Saudi AR mandatory",
      "SFDA full registration + clinical data; highest scrutiny; SFDA pre-submission meeting recommended; Saudi AR mandatory; ISO 13485 required",
    ],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"nz", name:"New Zealand", reg:"Medsafe", flag:"🇳🇿", url:"https://rapath.github.io/nz",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:[
      "Medsafe notification/web listing; self-declaration; CE marking or TGA approval widely accepted; NZ-established entity recommended",
      "Conformity assessment body review required; CE marking or TGA approval accepted as equivalent evidence; Medsafe registration",
      "Full conformity assessment; CE marking or TGA approval accepted; Medsafe registration; Trans-Tasman Mutual Recognition applies",
      "Full conformity assessment with clinical data; CE/TGA approval strongly supported; Medsafe registration; clinical evidence review",
    ],
    time: ["1–3 mo","6–12 mo","9–18 mo","12–24 mo"],
  },
];

// ── Region groupings for results display ──────────────────────────────────
export const REGIONS = [
  { label:"Americas",       ids:["us","ca","br","mx"] },
  { label:"Europe",         ids:["eu","uk","ch","ru"] },
  { label:"Middle East",    ids:["sa"] },
  { label:"Asia Pacific",   ids:["au","nz","sg","jp","cn","in","kr","my","id","vn"] },
];
