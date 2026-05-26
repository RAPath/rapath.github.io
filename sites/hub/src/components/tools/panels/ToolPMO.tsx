import React, { useState } from "react";

type TabId = "obligations"|"vigilance"|"renewal";

const VIGILANCE = [
  {jur:"🇦🇺 TGA",            death:"48 hours",         serious:"10 working days",other:"30 calendar days",  trend:"Six-monthly trend reports if applicable"},
  {jur:"🇪🇺 EU MDR",         death:"2 working days",   serious:"10 working days",other:"15 working days",   trend:"Quarterly trend analysis; EUDAMED vigilance module"},
  {jur:"🇺🇸 FDA",            death:"30 calendar days", serious:"30 calendar days",other:"N/A (complaint)",   trend:"5-day report for imminent hazard to health"},
  {jur:"🇨🇦 HC",             death:"10 calendar days", serious:"10 calendar days",other:"30 calendar days",  trend:"Annual mandatory problem reporting"},
  {jur:"🇬🇧 MHRA",           death:"2 working days",   serious:"10 working days",other:"15 working days",   trend:"Mirrors EU MDR; Yellow Card + MHRA portal"},
  {jur:"🇸🇬 HSA",            death:"10 calendar days", serious:"10 calendar days",other:"30 calendar days",  trend:"Annual trend review; report if threshold exceeded"},
  {jur:"🇯🇵 PMDA",           death:"15 calendar days", serious:"30 calendar days",other:"Specified period",  trend:"Periodic safety reports per PMDA schedule"},
  {jur:"🇨🇭 Swissmedic",    death:"2 working days",   serious:"10 working days",other:"15 working days",   trend:"Mirrors EU MDR timeframes under MedDO"},
  {jur:"🇨🇳 NMPA",           death:"7 calendar days",  serious:"20 calendar days",other:"30 calendar days",  trend:"Annual post-market safety assessment report"},
  {jur:"🇮🇳 CDSCO",          death:"7 calendar days",  serious:"15 calendar days",other:"30 calendar days",  trend:"Periodic updates for Class C/D; CDSCO MDV portal"},
  {jur:"🇰🇷 MFDS",           death:"15 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"Annual PMS report; MFDS UDMS system"},
  {jur:"🇧🇷 ANVISA",         death:"10 business days", serious:"30 calendar days",other:"30 calendar days",  trend:"Periodic reporting per RDC 67/2009; VIGIPÓS"},
  {jur:"🇲🇾 MDA",            death:"10 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"Annual trend review; MDA reporting portal"},
  {jur:"🇮🇩 BPOM",           death:"14 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"Annual PMS review; BPOM e-REGALKES"},
  {jur:"🇻🇳 DAV",            death:"15 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"Annual review; DAV adverse event reporting"},
  {jur:"🇷🇺 Roszdravnadzor", death:"3 calendar days",  serious:"15 calendar days",other:"30 calendar days",  trend:"Annual post-registration monitoring report"},
  {jur:"🇲🇽 COFEPRIS",       death:"15 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"COFEPRIS VUSAR vigilance system; periodic trend reports"},
  {jur:"🇸🇦 SFDA",           death:"48 hours",         serious:"10 calendar days",other:"30 calendar days",  trend:"Annual PMS review; SFDA eGateway vigilance module"},
  {jur:"🇭🇰 MDD/MDACS",    death:"15 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"Annual PMS review; MDD/MDACS adverse event reporting system"},{jur:"🇹🇭 Thai FDA",      death:"15 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"Thai FDA MDCD reporting; annual PMS review under Medical Device Act B.E. 2562"},{jur:"🇵🇭 FDA Philippines",death:"10 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"FDA Philippines CDRRHR reporting; annual post-market review"},{jur:"🇧🇩 DGDA",          death:"15 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"DGDA adverse event reporting; developing PMS framework"},{jur:"🇱🇰 NMRA",          death:"15 calendar days", serious:"30 calendar days",other:"30 calendar days",  trend:"NMRA adverse event reporting under NMRA Act No. 5 of 2015"},{jur:"🇳🇿 Medsafe",        death:"48 hours",         serious:"10 working days",other:"30 calendar days",  trend:"Mirrors TGA timeframes; reports to Medsafe"},
];

const RENEWALS = [
  {jur:"🇦🇺 AU",  reg:"TGA",              freq:"Annual ARTG charge",         notes:"Annual fee applies. No formal re-registration unless significant device changes. Sponsor must notify TGA of changes."},
  {jur:"🇪🇺 EU",  reg:"MDR / EUDAMED",   freq:"NB certificate validity",     notes:"NB certificates typically valid 3–5 years; surveillance audits annually. EUDAMED records must stay current."},
  {jur:"🇺🇸 US",  reg:"FDA",              freq:"Annual establishment reg.",   notes:"Annual establishment registration and device listing renewal required by 12 October each year."},
  {jur:"🇨🇦 CA",  reg:"Health Canada",   freq:"MDEL annual renewal",        notes:"MDEL renewed annually. MDL does not expire but must be updated for significant changes."},
  {jur:"🇬🇧 UK",  reg:"MHRA",            freq:"Annual registration",         notes:"Annual MHRA registration renewal required. UKAB certificates typically 3–5 year validity."},
  {jur:"🇸🇬 SG",  reg:"HSA",             freq:"5-year registration",         notes:"Product registration valid 5 years. Annual retention fee. Renewal application 6 months before expiry."},
  {jur:"🇯🇵 JP",  reg:"PMDA",            freq:"Variable by approval type",   notes:"Renewal periods vary. Re-examination system applies to novel devices (typically 6 years)."},
  {jur:"🇨🇭 CH",  reg:"Swissmedic",      freq:"Varies",                      notes:"Registration renewal periods vary by device class; annual maintenance fees apply."},
  {jur:"🇨🇳 CN",  reg:"NMPA",            freq:"5-year registration",         notes:"Product registration valid 5 years. Renewal application submitted before expiry."},
  {jur:"🇮🇳 IN",  reg:"CDSCO",           freq:"Varies by class",             notes:"Import/manufacturing licences typically renewed annually. Product registration conditions vary by class."},
  {jur:"🇰🇷 KR",  reg:"MFDS",            freq:"5-year registration",         notes:"Device approval valid 5 years; renewal required before expiry."},
  {jur:"🇧🇷 BR",  reg:"ANVISA",          freq:"10-year Registro",            notes:"Registro valid 10 years; Notificação (Class I/II) has no fixed expiry but annual fee applies."},
  {jur:"🇲🇾 MY",  reg:"MDA",             freq:"5-year registration",         notes:"Product registration valid 5 years. Establishment Licence requires annual renewal."},
  {jur:"🇮🇩 ID",  reg:"BPOM",            freq:"5-year Izin Edar",            notes:"Izin Edar valid 5 years. IT-Alkes import licence renewed annually."},
  {jur:"🇻🇳 VN",  reg:"DAV / MOH",      freq:"5-year registration",         notes:"Circulation registration valid 5 years. Annual maintenance fee required."},
  {jur:"🇷🇺 RU",  reg:"Roszdravnadzor", freq:"Indefinite (monitoring)",     notes:"GRLS registration does not expire but annual post-registration monitoring report is mandatory."},
  {jur:"🇲🇽 MX",  reg:"COFEPRIS",        freq:"5-year Registro Sanitario",   notes:"Registro Sanitario valid 5 years for Class II/III; renewal required before expiry. Annual establishment notice renewal."},
  {jur:"🇸🇦 SA",  reg:"SFDA",            freq:"3–5 year registration",       notes:"SFDA MDNR registration valid 3–5 years depending on class; annual fee applies; renewal 6 months before expiry."},
  {jur:"🇭🇰 HK",  reg:"MDD / MDACS",      freq:"Varies",               notes:"MDACS registration renewal periods vary; annual maintenance fees apply. Scheme transitioning from voluntary to mandatory."},{jur:"🇹🇭 TH",  reg:"Thai FDA / MDCD",  freq:"5-year registration",   notes:"Thai FDA registration valid 5 years; renewal required before expiry. MDEL (Medical Device Establishment Licence) renewed annually."},{jur:"🇵🇭 PH",  reg:"FDA Philippines",  freq:"3-year CPR",            notes:"Certificate of Product Registration (CPR) valid 3 years. LTO (License to Operate) renewed annually."},{jur:"🇧🇩 BD",  reg:"DGDA",             freq:"Annual renewal",         notes:"DGDA Import Registration Certificate and product registrations typically renewed annually."},{jur:"🇱🇰 LK",  reg:"NMRA",             freq:"5-year registration",    notes:"NMRA product registration valid 5 years; annual maintenance fee required. Renewal application before expiry."},{jur:"🇳🇿 NZ",  reg:"Medsafe",         freq:"Ongoing / annual review",     notes:"Medsafe registration/notification requires annual review or update. Therapeutic Products Act 2023 phased implementation."},
];

const BY_CLASS = [
  {cls:"Class I / A (Low Risk)",freq:"Annual",color:"#16a34a",bg:"#dcfce7",items:["Review PMS data and complaint records","Update Post-Market Surveillance Report (PMSR) — EU MDR, UK MHRA","Confirm compliance with applicable standards","Review labelling and IFU for currency","Update technical file if design, intended use, or standards change","Annual establishment/licence renewal (AU, US, UK, SG, JP, CN, KR, MX, SA)"]},
  {cls:"Class IIa / B (Low-Medium Risk)",freq:"Annual",color:"#ca8a04",bg:"#fef9c3",items:["Compile Post-Market Surveillance Report (PMSR)","Update Clinical Evaluation Report as needed","Implement PMCF plan — data collection and review (EU MDR, MHRA)","NB / Approved Body surveillance audit (typically annual)","Annual ARTG charge (AU), establishment registration (US)","Registration retention fee (SG, MY, ID, VN); 5-year renewal planning (CN, KR, MX, SA)"]},
  {cls:"Class IIb / C (Medium-High Risk)",freq:"Annual/Periodic",color:"#ea580c",bg:"#ffedd5",items:["Prepare Periodic Safety Update Report (PSUR) — EU MDR, UK MHRA","Update Clinical Evaluation Report","PMCF study data collection and analysis","NB / Approved Body surveillance audit","Vigilance trend analysis — report to authority if threshold exceeded","TGA risk-based audit may apply; MHRA, HSA, SFDA annual registration renewal"]},
  {cls:"Class III / D (High Risk)",freq:"Annual (mandatory)",color:"#dc2626",bg:"#fee2e2",items:["Prepare and submit PSUR to Notified Body — annually (EU MDR, UK, CH)","Update Clinical Evaluation Report annually (EU MDR Art. 61)","PMCF — active prospective data collection required","NB / AB full surveillance audit + possible unannounced audit","Update Summary of Safety & Clinical Performance (SSCP) — EU MDR, MHRA","PMDA re-examination reports if applicable (JP); SFDA and COFEPRIS ongoing compliance monitoring"]},
  {cls:"All Classes — Triggered Obligations",freq:"Event-driven",color:"#2563eb",bg:"#dbeafe",items:["Report serious incidents within jurisdiction timeframes (see Vigilance Timeframes tab)","Submit FSCA reports to all affected markets within required windows","Issue Field Safety Notices (FSNs) to customers and distributors","Notify authority of significant design, manufacturing, or intended use changes","Update EUDAMED / GUDID / ARTG / PRISM / SFDA MDNR / COFEPRIS SISFAR records when changes made","Annual registration renewal across all 19 jurisdictions where applicable"]},
];

export function ToolPMO() {
  const [tab, setTab] = useState<TabId>("obligations");
  return (
    <div>
      <div className="th-info">Post-market obligations are the most commonly missed compliance area after product launch. Non-compliance can result in warning letters, suspension of registration, or market withdrawal.</div>
      <div className="th-filter-row">
        <button className={`th-filter${tab==="obligations"?" on":""}`} onClick={()=>setTab("obligations")}>By Risk Class</button>
        <button className={`th-filter${tab==="vigilance"?"  on":""}`} onClick={()=>setTab("vigilance")}>Vigilance Timeframes</button>
        <button className={`th-filter${tab==="renewal"?"    on":""}`} onClick={()=>setTab("renewal")}>Registration Renewals</button>
      </div>

      {tab==="obligations"&&<div className="th-pmo-grid">{BY_CLASS.map(d=>(
        <div key={d.cls} className="th-pmo-card">
          <div className="th-pmo-title">{d.cls}</div>
          <div className="th-pmo-freq" style={{background:d.bg,color:d.color}}>{d.freq}</div>
          {d.items.map(item=><div key={item} className="th-pmo-item">{item}</div>)}
        </div>
      ))}</div>}

      {tab==="vigilance"&&<div>
        <div className="th-table-wrap">
          <table className="th-table">
            <thead><tr><th>Jurisdiction</th><th>Death / Imminent Hazard</th><th>Serious Injury</th><th>Other Reportable</th><th>Trend Reporting</th></tr></thead>
            <tbody>{VIGILANCE.map(r=>(
              <tr key={r.jur}>
                <td style={{fontWeight:600,color:"#0f172a",whiteSpace:"nowrap"}}>{r.jur}</td>
                <td style={{color:"#dc2626",fontWeight:600}}>{r.death}</td>
                <td style={{color:"#ea580c",fontWeight:600}}>{r.serious}</td>
                <td>{r.other}</td>
                <td style={{fontSize:11}}>{r.trend}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <div className="th-warn">Timeframes are from the date the manufacturer becomes aware of the incident. Verify current requirements directly with each authority — timeframes can change.</div>
      </div>}

      {tab==="renewal"&&<div>
        <div className="th-table-wrap">
          <table className="th-table">
            <thead><tr><th>Jurisdiction</th><th>Authority</th><th>Renewal Frequency</th><th>Key Notes</th></tr></thead>
            <tbody>{RENEWALS.map(r=>(
              <tr key={r.jur}>
                <td style={{fontWeight:600,color:"#0f172a"}}>{r.jur}</td>
                <td style={{color:"#64748b"}}>{r.reg}</td>
                <td style={{fontWeight:600}}>{r.freq}</td>
                <td style={{fontSize:11}}>{r.notes}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
        <p style={{fontSize:11,color:"#94a3b8",marginTop:10}}>All 19 RAPath jurisdictions. Initiate renewal well ahead of expiry — set calendar reminders 6–12 months before expiry dates.</p>
      </div>}
    </div>
  );
}
