import React, { useState } from "react";

const ECO = [
  {flag:"🇦🇺",jur:"Australia",     reg:"TGA",              roles:[{n:"Sponsor",          r:"Mandatory — holds ARTG application; must be Australia-incorporated; legally responsible."},{n:"Manufacturer",     r:"Can be foreign; responsible for device conformity and technical file."},{n:"Distributor",     r:"No separate licence required; must deal through the Sponsor."}]},
  {flag:"🇪🇺",jur:"EU",            reg:"EU MDR",           roles:[{n:"EU Auth. Rep",     r:"Mandatory for non-EEA manufacturers; EEA-established; registered in EUDAMED."},{n:"Importer",         r:"Mandatory — must place own name/address on device or outer packaging."},{n:"Distributor",     r:"Must verify CE marking, UDI, and EUDAMED registration before supply."}]},
  {flag:"🇺🇸",jur:"United States",  reg:"FDA",              roles:[{n:"US Agent",         r:"Mandatory for all foreign manufacturers — receives all FDA communications."},{n:"Init. Importer",   r:"Mandatory — must be listed on FDA establishment registration."},{n:"Distributor",     r:"Record retention only; no FDA registration required."}]},
  {flag:"🇨🇦",jur:"Canada",         reg:"Health Canada",   roles:[{n:"Can. Importer",    r:"Holds Medical Device Licence (MDL) and MDEL; legally responsible entity."},{n:"Manufacturer",     r:"May apply directly with Canadian agent; must hold MDEL."},{n:"Distributor",     r:"Must operate through MDEL holder; no separate distributor licence."}]},
  {flag:"🇬🇧",jur:"United Kingdom", reg:"MHRA",            roles:[{n:"UKRP",             r:"Mandatory for non-UK manufacturers since July 2023; UK-established; MHRA-registered."},{n:"Importer",         r:"Must place name/UK address on device; register with MHRA."},{n:"Distributor",     r:"Must verify UKCA/CE marking and registration before supply."}]},
  {flag:"🇸🇬",jur:"Singapore",      reg:"HSA",             roles:[{n:"LRA",              r:"Mandatory — Singapore-incorporated; holds PRISM product registration."},{n:"Dealer",           r:"Dealer's Licence required for importers, wholesalers, and retailers."},{n:"Manufacturer",    r:"Foreign manufacturers must appoint LRA before registration."}]},
  {flag:"🇯🇵",jur:"Japan",          reg:"PMDA / MHLW",    roles:[{n:"MAH",              r:"Mandatory — Japan-incorporated; holds Shonin/Ninsho approval; legally responsible."},{n:"Foreign Mfr.",    r:"Foreign Manufacturer Registration (FMR) required from PMDA."},{n:"Distributor",     r:"Wholesale distribution business licence required (Yakuji-ho)."}]},
  {flag:"🇨🇭",jur:"Switzerland",    reg:"Swissmedic",     roles:[{n:"CH Auth. Rep",     r:"Mandatory for non-Swiss manufacturers under MedDO Art. 52; Swiss-established."},{n:"Importer",         r:"Must register with Swissmedic; responsible for MedDO compliance."},{n:"Distributor",     r:"Must verify conformity assessment and registration before supply."}]},
  {flag:"🇨🇳",jur:"China",          reg:"NMPA",            roles:[{n:"NMPA Agent",       r:"Mandatory for imported devices — China-registered legal entity; holds import registration."},{n:"Reg. Agent",      r:"Foreign manufacturers must appoint China-incorporated regulatory agent."},{n:"Importer",        r:"Import business scope and customs clearance capability required."}]},
  {flag:"🇮🇳",jur:"India",          reg:"CDSCO",           roles:[{n:"Indian Agent",     r:"Indian importer/agent required; must hold Import Licence from CDSCO."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint Indian agent; FMR may be needed."},{n:"Distributor",     r:"State-level licences may apply depending on device type."}]},
  {flag:"🇰🇷",jur:"South Korea",    reg:"MFDS",            roles:[{n:"Korean Importer",  r:"Korean importer or domestic representative holds MFDS marketing authorisation."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint Korean entity; FMR required."},{n:"Distributor",     r:"Must hold appropriate business licence; MFDS records required."}]},
  {flag:"🇧🇷",jur:"Brazil",         reg:"ANVISA",          roles:[{n:"BRH",              r:"Brazil Registration Holder mandatory; Brazilian legal entity; holds Notificação/Registro."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint BRH; B-GMP certification required."},{n:"Distributor",     r:"Must operate through BRH; ANVISA records maintenance required."}]},
  {flag:"🇲🇾",jur:"Malaysia",       reg:"MDA",             roles:[{n:"Establishment",    r:"MDA Establishment Licence holder required; Malaysian-incorporated entity."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint Malaysian establishment licence holder."},{n:"Distributor",     r:"Must hold appropriate Establishment Licence from MDA."}]},
  {flag:"🇮🇩",jur:"Indonesia",      reg:"BPOM / Kemenkes",roles:[{n:"Importer",         r:"Indonesian importer must hold IT-Alkes (Importation Licence) from Kemenkes."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint Indonesian importer/agent."},{n:"Distributor",     r:"Must hold PBF licence (pharmaceutical/device wholesale licence)."}]},
  {flag:"🇻🇳",jur:"Vietnam",        reg:"DAV / MOH",      roles:[{n:"Importer",         r:"Vietnamese importer or distributor holds device circulation registration from DAV."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint Vietnamese importer/legal representative."},{n:"Distributor",     r:"Must operate through authorised importer; business registration required."}]},
  {flag:"🇷🇺",jur:"Russia",         reg:"Roszdravnadzor", roles:[{n:"RUS REP",          r:"Mandatory — Russian legal entity; holds GRLS state registration; legally responsible."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint RUS REP before GRLS registration."},{n:"Distributor",     r:"Must operate through RUS REP; Russian distribution licences may apply."}]},
  {flag:"🇲🇽",jur:"Mexico",         reg:"COFEPRIS",        roles:[{n:"Titular del Reg.", r:"Mandatory — Mexico-incorporated legal entity; holds Registro Sanitario; legally responsible."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint Mexican titular del registro for Class II/III."},{n:"Distributor",     r:"Must operate through titular del registro; COFEPRIS records maintenance required."}]},
  {flag:"🇸🇦",jur:"Saudi Arabia",   reg:"SFDA",            roles:[{n:"Saudi AR",         r:"Mandatory — Saudi Arabia-registered entity; holds SFDA MDNR registration; legally responsible."},{n:"Manufacturer",     r:"Foreign manufacturers must appoint Saudi AR before SFDA registration."},{n:"Distributor",     r:"Must operate through Saudi AR; SFDA records and Dealer's Licence may apply."}]},
  {flag:"🇳🇿",jur:"New Zealand",    reg:"Medsafe",         roles:[{n:"NZ Sponsor/Agent", r:"NZ-established entity strongly recommended; holds Medsafe registration/notification."},{n:"Manufacturer",     r:"Foreign manufacturers should appoint NZ agent; TGA Sponsor may cover Trans-Tasman pathway."},{n:"Distributor",     r:"No formal separate licence required; must deal through registered entity."}]},
];

export function ToolEcomap() {
  const [sel, setSel] = useState<string|null>(null);
  const shown = sel ? ECO.filter(j=>j.jur===sel) : ECO;
  return (
    <div>
      <div className="th-info">
        Every jurisdiction requires a locally-accountable entity to hold the device registration
        and bear legal responsibility. Understanding these roles is essential before planning market entry.
      </div>
      <div className="th-filter-row" style={{flexWrap:"wrap"}}>
        {ECO.map(j=>(
          <button key={j.jur} className={`th-filter${sel===j.jur?" on":""}`}
            onClick={()=>setSel(sel===j.jur?null:j.jur)} style={{fontSize:11}}>
            {j.flag} {j.jur}
          </button>
        ))}
      </div>
      <div className="th-eco-grid">
        {shown.map(j=>(
          <div key={j.jur} className="th-eco-card">
            <div style={{fontSize:22,marginBottom:8}}>{j.flag}</div>
            <div style={{fontSize:13,fontWeight:700,color:"#0f172a",marginBottom:2}}>{j.jur}</div>
            <div style={{fontSize:11,color:"#94a3b8",marginBottom:10}}>{j.reg}</div>
            {j.roles.map(r=>(
              <div key={r.n} className="th-eco-role">
                <div className="th-eco-role-nm">{r.n}</div>
                <div style={{fontSize:12,color:"#64748b",lineHeight:1.4}}>{r.r}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p style={{fontSize:11,color:"#94a3b8",marginTop:14,textAlign:"center"}}>
        All 19 RAPath jurisdictions. Verify current requirements with a local regulatory consultant before appointing representatives.
      </p>
    </div>
  );
}
