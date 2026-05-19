import React, { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

const JURS = [
  {code:"AU",label:"🇦🇺 AU",  name:"Australia (TGA)",
   mandatory:["Australian Sponsor must be appointed — must be Australia-incorporated entity","Sponsor submits and holds the ARTG application and entry","Manufacturer must hold ISO 13485 certification or equivalent QMS","EU NB MDR cert, MDSAP, or FDA+MDSAP can support ARTG application via comparable overseas evidence pathway","Sponsor is legally responsible entity for the device in Australia","Label must include Sponsor name and Australian address","Devices subject to TGA risk-based post-market audit program"],
   recommended:["ARTG number — not mandatory on label under TGO 91 (common misconception — Sponsor name/address mandatory, not ARTG number)","Register with TGA portal (TBS) before ARTG application","Plan for 3–15 month ARTG processing time depending on pathway"],
   warn:"ARTG number is NOT a mandatory label element under TGO 91. Sponsor name and Australian address are mandatory. This is a common misconception."},
  {code:"EU",label:"🇪🇺 EU",  name:"European Union (EU MDR)",
   mandatory:["EU Authorised Representative mandatory for all non-EEA manufacturers — must be EEA-established","Importer must place own name, registered trade name, and address on device or outer packaging","Importer must verify manufacturer holds valid CE certificate before placing on market","Importer must verify device is registered in EUDAMED with UDI assigned","CE marking must be affixed before placing on EU market","Labelling in official language(s) of every Member State where marketed","Import records kept for minimum 10 years (15 years for implantables)"],
   recommended:["Register as economic operator in EUDAMED before first supply","Obtain product liability insurance before market entry"]},
  {code:"US",label:"🇺🇸 US",  name:"United States (FDA)",
   mandatory:["FDA device listing mandatory before commercial distribution","Establishment registration required — renewed annually 1 Oct–31 Dec","US Agent required for all foreign manufacturers — must have US physical presence","Initial Importer listed on FDA establishment registration records","510(k)/PMA/De Novo clearance required before import (unless exempt)","UDI on device label (DI) and packaging (DI + PI); submit to GUDID","US Agent receives all FDA correspondence on behalf of foreign manufacturer"],
   recommended:["Apply for Small Business Determination (SBD) for 75% fee reduction if eligible","Verify FDA product code and classification before determining pathway"]},
  {code:"CA",label:"🇨🇦 CA",  name:"Canada (Health Canada)",
   mandatory:["Canadian Importer must hold Medical Device Establishment Licence (MDEL)","Medical Device Licence (MDL) required for Class II–IV devices","MDEL required for all establishments importing or distributing devices in Canada","ISO 13485 certification required for Class II–IV MDL applications","MDSAP accepted by Health Canada in lieu of separate Canadian QMS audit","Labelling must include Canadian Importer name/address in English and French"],
   recommended:["MDEL must be obtained before MDL application can be processed","MDSAP significantly reduces audit burden — consider if targeting AU/JP/BR/US also"]},
  {code:"UK",label:"🇬🇧 UK",  name:"United Kingdom (MHRA)",
   mandatory:["UK Responsible Person (UKRP) mandatory for all non-UK manufacturers since July 2023","UKRP must be UK-established and registered with MHRA","Importer must place own name and UK address on device or packaging","MHRA registration required before placing on Great Britain market","UKCA marking (or CE in transitional period: Jun 2028 / Jun 2030 for high-risk)","Label must include UKRP name and UK address","UK UDI assignment and MHRA database registration required"],
   recommended:["CE marking accepted until June 2028 (most) / June 2030 (high-risk) — plan UKCA transition","UK Approved Body required for Class IIa+ UKCA marking — limited UKAB capacity, engage early"]},
  {code:"SG",label:"🇸🇬 SG",  name:"Singapore (HSA)",
   mandatory:["Local Regulatory Agent (LRA) mandatory — must be Singapore-incorporated company","LRA holds the HSA product registration and is legally responsible local entity","Dealer's Licence required for all importers, wholesalers, and retail dealers","Valid PRISM product registration must be obtained before importation of Class B–D devices","Label must include LRA name and Singapore address","Devices must not be imported before registration is granted (Class B–D)"],
   recommended:["Apply for Dealer's Licence via GoBusiness Licensing portal before product registration","Notified Route (using recognised overseas approval) is faster for Class B/C"]},
  {code:"JP",label:"🇯🇵 JP",  name:"Japan (PMDA / MHLW)",
   mandatory:["Marketing Authorisation Holder (MAH) licence mandatory — must be Japan-incorporated entity","Foreign manufacturers must obtain Foreign Manufacturer Registration (FMR) from PMDA","All Class II–IV devices require MAH to hold Shonin or Ninsho certification","Japanese labels and IFU mandatory for all Class II, III, IV devices","MAH bears full legal responsibility for device safety in Japan","Wholesale distribution business licence required (Yakuji-ho)","QMS conformity assessment by PMDA required for Class III/IV"],
   recommended:["Finding a willing Japanese MAH partner is often the critical path — start early","Check if a JIS certification standard exists (enables Ninsho vs Shonin pathway)"]},
  {code:"CH",label:"🇨🇭 CH",  name:"Switzerland (Swissmedic)",
   mandatory:["Swiss Authorised Representative mandatory for all non-Swiss manufacturers (MedDO Art. 52)","Device must be registered with Swissmedic before placing on Swiss market","CE marking accepted; UKCA not accepted in Switzerland","Conformity assessment must meet Swissmedic / MedDO requirements","Labelling in German, French, and Italian required for consumer-facing devices","Manufacturer and Swiss AR name/address on label"],
   recommended:["Switzerland aligns closely with EU MDR — EU MDR CE marking simplifies Swiss registration","EU-designated NB certificates are accepted by Swissmedic"]},
  {code:"CN",label:"🇨🇳 CN",  name:"China (NMPA)",
   mandatory:["NMPA Agent mandatory — China-incorporated legal entity required","Product must be registered or recorded with NMPA/provincial authority before import","Home-country approval proof required (CE certificate, FDA clearance, etc.)","Chinese-language labels and IFU mandatory","NMPA QMS inspection of manufacturing site required for Class II–III","In-country product testing by NMPA-designated laboratory may be required","NMPA import customs supervision and CIQ clearance required"],
   recommended:["Plan 24–48 months for Class III NMPA review — clinical trials in China may be required","Appoint China agent well before application — due diligence on agent selection is critical"]},
  {code:"IN",label:"🇮🇳 IN",  name:"India (CDSCO)",
   mandatory:["Indian importer/agent required; must hold Import Licence from CDSCO","Import Licence from CDSCO CLA or State Licensing Authority (by class)","Country of origin labelling required","English labelling required; additional Indian languages may be required by state","Periodic batch-level import inspection possible at port of entry"],
   recommended:["Class C/D: expect 18–24 months for CDSCO review; clinical evidence from Indian patients may be required","Apply well in advance — CDSCO timelines vary significantly"]},
  {code:"KR",label:"🇰🇷 KR",  name:"South Korea (MFDS)",
   mandatory:["Korean importer or domestic representative required; holds MFDS marketing authorisation","Device must hold MFDS authorisation (notification, safety inspection, or MFDS review by class)","Korean-language labels and IFU mandatory for Class II–IV","UDIKOREA registration required for applicable device classes","GMP inspection of manufacturing site may be required for Class III/IV"],
   recommended:["Korean product classification database (K-MDR) should be checked to confirm device class","MFDS has bilateral recognition discussions with some authorities — verify current status"]},
  {code:"BR",label:"🇧🇷 BR",  name:"Brazil (ANVISA)",
   mandatory:["Brazil Registration Holder (BRH) mandatory — Brazil-incorporated legal entity","B-GMP (Brazilian GMP) certification required for all device classes (INMETRO-accredited CAB)","Class I/II: Notificação — audit-ready technical file + B-GMP certification + BRH","Class III/IV: Registro — full dossier submitted to ANVISA for technical review + B-GMP + BRH","Portuguese-language labels and IFU mandatory","BRH name and Brazilian address on all labels"],
   recommended:["B-GMP certification is on the critical path — begins 6–12 months before ANVISA application","Class III/IV Registro: plan 18–36 months for ANVISA review"]},
  {code:"MY",label:"🇲🇾 MY",  name:"Malaysia (MDA)",
   mandatory:["MDA Establishment Licence holder required — Malaysia-incorporated entity","Device must be registered with MDA via MeDC@St portal before import and distribution","Recognised overseas approval (CE, TGA, FDA) supports Recognised Route registration","Establishment Licence required for importers, manufacturers, and distributors","Label must include Establishment Licence holder name and Malaysian address"],
   recommended:["Recognised Route (using CE/TGA/FDA approval) significantly reduces review time","MDA Establishment Licence must be obtained before product registration application"]},
  {code:"ID",label:"🇮🇩 ID",  name:"Indonesia (BPOM / Kemenkes)",
   mandatory:["Indonesian importer must hold IT-Alkes (Importation Licence) from Kemenkes","Device must hold valid Izin Edar (market authorisation) before import and distribution","Notifikasi (Class A) or Izin Edar (Class B–D) via e-REGALKES portal","Bahasa Indonesia labels and IFU mandatory","PBF (pharmaceutical/device wholesale) licence required for distributors"],
   recommended:["In-country laboratory testing may be required for some devices","Appoint experienced Indonesian regulatory consultant — BPOM requirements change frequently"]},
  {code:"VN",label:"🇻🇳 VN",  name:"Vietnam (DAV / MOH)",
   mandatory:["Vietnamese importer or distributor required; holds device circulation registration from DAV","Device must hold DAV circulation registration before importation","Class A: self-declaration; Class B–D: DAV registration application required","Vietnamese-language labels and IFU mandatory","Import permit from Ministry of Health may be required per batch for some device types"],
   recommended:["Overseas approval (CE, FDA, TGA) supports Class B/C DAV registration via simplified pathway","DAV review times: Class B ~6–12 months; Class C/D ~12–18 months"]},
  {code:"RU",label:"🇷🇺 RU",  name:"Russia (Roszdravnadzor)",
   mandatory:["Russian Representative (RUS REP) mandatory — Russia-incorporated legal entity","Device must be registered in GRLS before import","GOST R ISO 13485 or equivalent QMS certification required","QMS inspection by Roszdravnadzor mandatory for Class IIa (sterile), IIb, III","Russian-language labels and IFU mandatory","EAEU registration pathway strongly recommended from January 2027"],
   recommended:["EAEU (Eurasian Economic Union) registration covers RU, BY, KZ, AM, KG — consider if relevant","Clinical trials in Russian centres may be required for Class III devices"]},
  {code:"MX",label:"🇲🇽 MX",  name:"Mexico (COFEPRIS)",
   mandatory:["Titular del registro (registration holder) mandatory — must be Mexico-incorporated legal entity","Registro Sanitario required for Class II and III devices via SISFAR portal","NOM-241-SSA1-2012 GMP compliance required — equivalent to ISO 13485","Class I: Aviso de funcionamiento (establishment notice) + product notification for most devices","Spanish-language labels and IFU mandatory for all devices sold in Mexico","Titular name and Mexican address on all labels","COFEPRIS may conduct GMP inspection of manufacturing site for Class III"],
   recommended:["CE marking or FDA 510(k) evidence can support COFEPRIS application and reduce review burden","Plan 12–18 months for Class II Registro Sanitario; 18–30 months for Class III","Appoint Mexican regulatory consultant familiar with SISFAR portal and NOM standards"]},
  {code:"SA",label:"🇸🇦 SA",  name:"Saudi Arabia (SFDA)",
   mandatory:["Saudi Authorised Representative mandatory — Saudi Arabia-registered entity","Saudi AR holds the SFDA MDNR registration and is legally responsible entity","SFDA MDNR registration required before importing or distributing devices in Saudi Arabia","ISO 13485 certification required for Class B–D devices","Class A: SFDA MDNR listing via eGateway; Class B–D: full SFDA registration","Arabic or bilingual (Arabic/English) labelling required depending on device class","SFDA product registration number on label or packaging"],
   recommended:["SFDA Recognised Route available for devices with CE (EU NB), FDA 510(k)/PMA, TGA, HC approval — significantly reduces review time","Plan 6–12 months for Class B Recognised Route; 12–18 months for Class C full dossier","SFDA eGateway portal for all registration submissions"]},
  {code:"NZ",label:"🇳🇿 NZ",  name:"New Zealand (Medsafe)",
   mandatory:["NZ-established entity or agent strongly recommended for all non-NZ manufacturers","Device must be notified/registered with Medsafe before placing on NZ market","Class I: web-based notification to Medsafe; self-declaration of conformity","Class IIa+: conformity assessment body review required; CE marking or TGA approval accepted","CE marking accepted; TGA approval accepted under Trans-Tasman Mutual Recognition","English labelling; same basic labelling standards as Australia apply","Medsafe registration/listing number on device if required"],
   recommended:["TGA Australian Sponsor may cover NZ market under Trans-Tasman arrangements — verify applicability","Therapeutic Products Act 2023 phased implementation — verify current requirements with Medsafe","NZ is closely aligned with Australia — AU TGA sponsor and documentation largely transferable"]},
];

export function ToolImport() {
  const [sel, setSel] = useState("");
  const res = JURS.find(j=>j.code===sel);
  return (
    <div>
      <div className="th-info">
        Mandatory licences, registrations, and legal appointments required before a medical device
        can legally be imported into each of the 19 RAPath jurisdictions.
      </div>
      <div className="th-filter-row" style={{flexWrap:"wrap"}}>
        {JURS.map(j=>(
          <button key={j.code} className={`th-filter${sel===j.code?" on":""}`}
            onClick={()=>setSel(sel===j.code?"":j.code)} style={{fontSize:11}}>
            {j.label}
          </button>
        ))}
      </div>
      {!sel&&<div style={{padding:24,background:"#f8fafc",borderRadius:12,textAlign:"center",color:"#94a3b8",fontSize:13}}>Select a jurisdiction above to see import requirements.</div>}
      {res&&(
        <div>
          <div style={{fontSize:16,fontWeight:700,color:"#0f172a",marginBottom:14}}>{res.name}</div>
          {res.warn&&<div style={{display:"flex",gap:10,padding:"10px 14px",background:"#fffbeb",border:"1px solid #fde68a",borderRadius:9,marginBottom:16,fontSize:12,color:"#92400e",lineHeight:1.6,alignItems:"flex-start"}}><AlertCircle size={15} color="#ca8a04" style={{flexShrink:0,marginTop:2}}/><span><strong>Common misconception:</strong> {res.warn}</span></div>}
          <div style={{fontSize:12,fontWeight:700,color:"#0f172a",marginBottom:10}}>MANDATORY REQUIREMENTS</div>
          {res.mandatory.map((item,i)=>(
            <div key={i} style={{display:"flex",gap:10,marginBottom:9,alignItems:"flex-start"}}>
              <CheckCircle2 size={14} color="#22c55e" style={{marginTop:2,flexShrink:0}}/>
              <span style={{fontSize:13,color:"#374151",lineHeight:1.5}}>{item}</span>
            </div>
          ))}
          {res.recommended&&res.recommended.length>0&&<>
            <div style={{fontSize:12,fontWeight:700,color:"#0f172a",marginBottom:10,marginTop:18}}>RECOMMENDED ACTIONS</div>
            {res.recommended.map((item,i)=>(
              <div key={i} style={{display:"flex",gap:10,marginBottom:9,alignItems:"flex-start"}}>
                <div style={{width:14,height:14,borderRadius:3,background:"#dbeafe",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}><div style={{width:6,height:6,borderRadius:1,background:"#2563eb"}}/></div>
                <span style={{fontSize:13,color:"#64748b",lineHeight:1.5}}>{item}</span>
              </div>
            ))}
          </>}
          <div className="th-warn" style={{marginTop:14}}>Requirements change frequently. Always verify current import obligations with the relevant authority or a qualified local regulatory consultant.</div>
        </div>
      )}
    </div>
  );
}
