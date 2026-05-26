// ToolLabel.tsx - all 19 jurisdictions
import React, { useState } from "react";
import { Tag, CheckCircle2 } from "lucide-react";

const DATA = [
  {jur:"🇦🇺 TGA",            color:"#854d0e",bg:"#fefce8",items:["Sponsor name and Australian address — mandatory","Device/product name","Batch, lot, or serial number","Expiry date (if applicable)","Storage conditions","Instructions for use (or reference to IFU)","Country of manufacture","English language required","ARTG number — NOT mandatory (common misconception; TGO 91 requires Sponsor name/address)","Sterility statement if sterile device","Single-use indication if applicable"]},
  {jur:"🇪🇺 EU MDR",         color:"#1e40af",bg:"#eff6ff",items:["Device name / trade name / model","Intended purpose (where not obvious)","Manufacturer name and registered address","EU Authorised Representative name and address","EUDAMED UDI-DI on device label","Batch/lot/serial number","Manufacturing date and expiry date (if applicable)","CE marking with Notified Body number (Class IIa+)","ISO 15223-1 symbols","Sterility statement / sterilisation method","Single-use indication symbol if applicable","All EU official languages in each Member State where marketed","eIFU: permitted for professional-use devices under Regulation 207/2012"]},
  {jur:"🇺🇸 FDA",            color:"#166534",bg:"#f0fdf4",items:["Device name / established name","Intended use / indications for use","Manufacturer name and US or foreign address","UDI-DI on label; UDI-DI + PI on packaging","Quantity of contents","Adequate directions for use (21 CFR Part 801)","'Rx only' symbol if prescription device","Sterilization lot / expiry date","Single-use labelling if applicable","English required; other languages permitted additionally","eIFU: file for exemption under 21 CFR 801.109"]},
  {jur:"🇨🇦 Health Canada",  color:"#0891b2",bg:"#ecfeff",items:["Device name","Manufacturer name and address","Canadian Importer name and address (if imported)","Medical Device Licence number (Class II–IV)","Batch / lot number","Expiry date (if applicable)","English and French — both official languages required","Sterility statement if applicable","Storage and handling conditions"]},
  {jur:"🇬🇧 MHRA",           color:"#5b21b6",bg:"#faf5ff",items:["Device name","Manufacturer name and registered address","UK Responsible Person (UKRP) name and UK address","UKCA marking (or CE if in transitional period)","UK UDI number","Batch / lot number","Expiry date (if applicable)","English required for Great Britain market","Sterility statement if applicable"]},
  {jur:"🇸🇬 HSA",            color:"#9a3412",bg:"#fff7ed",items:["Device name","Manufacturer name and address","Local Regulatory Agent (LRA) name and Singapore address","HSA registration / listing number","Batch / lot number","Expiry date (if applicable)","Storage conditions","English required","Single-use indication if applicable"]},
  {jur:"🇯🇵 PMDA",           color:"#0c4a6e",bg:"#e0f2fe",items:["Device name (Japanese required for Class II–IV)","MAH name and Japanese address","Manufacturing site information","Approval / certification number","Manufacturing date / expiry date","Batch / lot number","Japanese language mandatory for Class II, III, IV labels and IFU","Sterility statement if applicable"]},
  {jur:"🇨🇭 Swissmedic",    color:"#166534",bg:"#f0fdf4",items:["Device name","Manufacturer name and address","Swiss Authorised Representative name and address","CE marking (accepted); UKCA not accepted in Switzerland","Batch / lot number","Expiry date (if applicable)","German, French, and Italian — all three official languages required for consumer devices","ISO 15223-1 symbols"]},
  {jur:"🇨🇳 NMPA",           color:"#991b1b",bg:"#fef2f2",items:["Device name (in Chinese)","NMPA registration / record number","Manufacturer name and address (Chinese)","NMPA Agent name and Chinese address","Production date and expiry date","Batch / production lot number","Storage conditions","Chinese language mandatory for all labels and IFU"]},
  {jur:"🇮🇳 CDSCO",          color:"#854d0e",bg:"#fefce8",items:["Device name","Manufacturer name and address","Indian importer/agent name and address","CDSCO Import Licence / Approval number","Batch / lot number","Date of manufacture and expiry date","MRP (Maximum Retail Price) if required","English required; additional Indian languages may apply","Country of origin"]},
  {jur:"🇰🇷 MFDS",           color:"#1e40af",bg:"#eff6ff",items:["Device name (Korean required for Class II–IV)","MFDS authorisation number","Manufacturer name and address","Korean importer / domestic representative name and address","Batch / lot number","Date of manufacture and expiry date","Korean language mandatory for labels and IFU","UDIKOREA number (where required)"]},
  {jur:"🇧🇷 ANVISA",         color:"#7c3aed",bg:"#faf5ff",items:["Device name (Portuguese)","BRH (Brazil Registration Holder) name and Brazilian address","Manufacturer name and country","ANVISA Notificação / Registro number","Batch / lot number","Manufacturing and expiry dates","Portuguese language mandatory for all labels and IFU in Brazil","Storage conditions"]},
  {jur:"🇲🇾 MDA",            color:"#166534",bg:"#f0fdf4",items:["Device name","Manufacturer name and address","Malaysian Establishment Licence holder name and address","MDA registration number","Batch / lot number","Expiry date (if applicable)","Bahasa Malaysia or English accepted","Storage conditions"]},
  {jur:"🇮🇩 BPOM",           color:"#0891b2",bg:"#ecfeff",items:["Device name","Manufacturer name and address","Indonesian importer name and address","BPOM Izin Edar number","Batch / lot number","Date of manufacture and expiry date","Indonesian (Bahasa Indonesia) required for labels and IFU","Storage conditions"]},
  {jur:"🇻🇳 DAV",            color:"#854d0e",bg:"#fefce8",items:["Device name","Manufacturer name and country","Vietnamese importer / representative name and address","DAV circulation registration number","Batch / lot number","Manufacturing and expiry dates","Vietnamese language required for labels and IFU","Storage conditions"]},
  {jur:"🇷🇺 Roszdravnadzor", color:"#991b1b",bg:"#fef2f2",items:["Device name (Russian required)","Russian Representative (RUS REP) name and address","Manufacturer name and country","GRLS state registration number","Batch / lot number","Manufacturing and expiry dates","Russian language mandatory for all labels and IFU","Storage conditions"]},
  {jur:"🇲🇽 COFEPRIS",       color:"#166534",bg:"#f0fdf4",items:["Device name (Spanish)","Titular del registro name and Mexican address","Manufacturer name and country of origin","Registro Sanitario number (Class II/III) or notification number (Class I)","Batch / lot number","Date of manufacture and expiry date","Spanish language mandatory for all labels and IFU in Mexico","Storage conditions","Compliance with NOM-137-SSA1-2008 (labelling) if applicable for IVDs"]},
  {jur:"🇸🇦 SFDA",           color:"#0891b2",bg:"#ecfeff",items:["Device name","Manufacturer name and address","Saudi Authorised Representative name and Saudi address","SFDA MDNR registration number","Batch / lot number","Date of manufacture and expiry date","Arabic labelling required (or bilingual Arabic/English for professional-use devices)","Storage conditions","SFDA-assigned product code"]},
  {jur:"🇳🇿 Medsafe",        color:"#854d0e",bg:"#fefce8",items:["Device name","Manufacturer name and address","NZ sponsor / agent name and New Zealand address (if applicable)","Medsafe notification/registration number","Batch / lot number","Expiry date (if applicable)","English required","Storage conditions","Labelling standards largely align with TGA (Australia) requirements"]},,
  {jur:"🇭🇰 MDD/MDACS",       color:"#8a1515",bg:"#fef2f2",items:[
    "Device name",
    "Manufacturer name and address",
    "Local Authorized Representative (LAR) name and Hong Kong address (when LAR appointed)",
    "MDACS registration number (Class II/III)",
    "Batch / lot number",
    "Date of manufacture and expiry date",
    "English or Traditional Chinese — bilingual labelling recommended for consumer devices",
    "Storage conditions",
    "Country of manufacture",
  ]},
  {jur:"🇹🇭 Thai FDA",         color:"#1a2c7a",bg:"#eff6ff",items:[
    "Device name (Thai language mandatory for devices marketed in Thailand)",
    "Thai FDA MDCD registration/notification number",
    "Manufacturer name and address",
    "MDEL holder (importer/distributor) name and Thai address",
    "Batch / lot number",
    "Date of manufacture and expiry date",
    "Thai language mandatory for all labels and IFU in Thailand",
    "Storage conditions",
  ]},
  {jur:"🇵🇭 FDA Philippines",  color:"#0038a8",bg:"#eff6ff",items:[
    "Device name",
    "FDA Philippines CPR (Certificate of Product Registration) number",
    "Manufacturer name and address",
    "LTO holder (importer/distributor) name and Philippine address",
    "Batch / lot number",
    "Date of manufacture and expiry date",
    "English accepted for professional-use devices; Filipino/bilingual may be required for consumer devices",
    "Storage conditions",
    "Country of origin",
  ]},
  {jur:"🇧🇩 DGDA",             color:"#006a4e",bg:"#f0fdf4",items:[
    "Device name",
    "Manufacturer name and country of origin",
    "DGDA-registered importer/agent name and Bangladeshi address",
    "DGDA Import Registration Certificate number",
    "Batch / lot number",
    "Date of manufacture and expiry date",
    "English or Bangla labelling — English accepted for professional-use devices",
    "Storage conditions",
  ]},
  {jur:"🇱🇰 NMRA",             color:"#8d153a",bg:"#fdf2f8",items:[
    "Device name",
    "Manufacturer name and address",
    "NMRA-registered local representative name and Sri Lankan address",
    "NMRA registration number",
    "Batch / lot number",
    "Date of manufacture and expiry date",
    "English accepted; Sinhala and/or Tamil may be required for consumer-facing products",
    "Storage conditions",
  ]}
];

export function ToolLabel() {
  const [sel, setSel] = useState<string|null>(null);
  const shown = sel ? DATA.filter(d=>d.jur===sel) : DATA;
  return (
    <div>
      <div className="th-info">Labelling non-compliance is among the top reasons for regulatory rejection. Select a jurisdiction to filter, or scroll to compare all 19 markets.</div>
      <div className="th-filter-row" style={{flexWrap:"wrap"}}>
        {DATA.map(d=><button key={d.jur} className={`th-filter${sel===d.jur?" on":""}`} onClick={()=>setSel(sel===d.jur?null:d.jur)} style={{fontSize:11}}>{d.jur.split(" ")[0]}</button>)}
      </div>
      {shown.map(d=>(
        <div key={d.jur} className="th-label-card" style={{background:d.bg,borderColor:d.color+"30"}}>
          <div className="th-label-hd" style={{color:d.color}}><Tag size={14}/>{d.jur}</div>
          {d.items.map(item=>(
            <div key={item} className="th-label-item">
              <CheckCircle2 size={13} color={item.includes("NOT mandatory")||item.includes("common misconception")?"#ca8a04":"#22c55e"} style={{marginTop:2,flexShrink:0}}/>
              <span style={{color:item.includes("NOT mandatory")||item.includes("common misconception")?"#92400e":"#374151"}}>{item}</span>
            </div>
          ))}
        </div>
      ))}
      <div className="th-warn" style={{marginTop:8}}>Japanese, Chinese, Korean, Portuguese, Russian, Spanish, and Arabic labels must be professionally translated and reviewed by a local regulatory specialist. Always verify against the current version of each jurisdiction's labelling regulation.</div>
    </div>
  );
}
