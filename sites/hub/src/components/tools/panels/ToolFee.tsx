import React, { useState } from "react";

// Government regulatory fees only — reviewed May 2026
// Excludes: NB/CAB audit costs, ISO 13485 certification, consultancy, translation, in-country testing
const DATA = [
  {flag:"🇦🇺",jur:"Australia",     reg:"TGA",
   fees:[{l:"ARTG application — Class I",v:"AUD ~690–1,200",n:"Self-cert pathway"},{l:"ARTG application — Class IIa",v:"AUD ~2,900–5,500",n:"Comparable overseas evidence pathway"},{l:"ARTG application — Class IIb/III",v:"AUD ~14,000–50,000+",n:"Higher for full TGA conformity assessment"},{l:"ARTG annual charge — Class IIa",v:"AUD ~1,120",n:"Per ARTG entry; paid annually"},{l:"ARTG annual charge — Class III",v:"AUD ~2,240",n:"Per ARTG entry; paid annually"}]},
  {flag:"🇪🇺",jur:"European Union", reg:"EU MDR / EUDAMED",
   fees:[{l:"EUDAMED registration",v:"Free",n:"No government fee; NB fees separate"},{l:"Notified Body — application",v:"€3,000–25,000",n:"Varies by NB and device complexity"},{l:"Notified Body — annual surveillance",v:"€2,000–12,000",n:"Ongoing NB relationship cost"},{l:"Notified Body — Class IIb/III cert",v:"€20,000–80,000+",n:"Initial full certification"}]},
  {flag:"🇺🇸",jur:"United States",  reg:"FDA",
   fees:[{l:"510(k) — standard (FY2025)",v:"USD 22,248",n:"Small business: USD 5,562 (75% reduction)"},{l:"PMA — standard (FY2025)",v:"USD 444,779",n:"Small business: USD 111,195 (75% reduction)"},{l:"De Novo — standard (FY2025)",v:"USD 22,248",n:"Same as 510(k) for standard establishments"},{l:"Annual establishment registration",v:"USD 7,653",n:"FY2025; renewed annually 1 Oct–31 Dec"}]},
  {flag:"🇨🇦",jur:"Canada",         reg:"Health Canada",
   fees:[{l:"MDL — Class II",v:"CAD 303",n:"Per SOR/2019-348 fee schedule (2024)"},{l:"MDL — Class III",v:"CAD 3,056",n:"Per SOR/2019-348 fee schedule (2024)"},{l:"MDL — Class IV",v:"CAD 7,647",n:"Per SOR/2019-348 fee schedule (2024)"},{l:"MDEL annual fee",v:"CAD 1,790",n:"Medical Device Establishment Licence; annual"}]},
  {flag:"🇬🇧",jur:"United Kingdom", reg:"MHRA",
   fees:[{l:"MHRA registration — Class I",v:"£400",n:"Per device family; annual renewal"},{l:"MHRA registration — Class IIa",v:"£1,200",n:"Per device family; annual renewal"},{l:"MHRA registration — Class IIb/III",v:"£2,000–3,000",n:"Per device family; annual renewal"},{l:"UK Approved Body fees",v:"£5,000–40,000+",n:"Separate from MHRA government fees"}]},
  {flag:"🇸🇬",jur:"Singapore",      reg:"HSA",
   fees:[{l:"Class A listing",v:"SGD 390",n:"Product listing fee"},{l:"Class B registration",v:"SGD 1,300",n:"Full registration fee"},{l:"Class C registration",v:"SGD 1,950",n:"Full registration fee"},{l:"Class D registration",v:"SGD 3,900",n:"Full registration fee"},{l:"Dealer's Licence",v:"SGD 600/yr",n:"Required for importers, wholesalers, retailers"}]},
  {flag:"🇯🇵",jur:"Japan",          reg:"PMDA / MHLW",
   fees:[{l:"Ninsho (RCB) — Class II",v:"JPY 150,000–400,000",n:"≈ USD 1,000–2,700; via Registered Certification Body"},{l:"Shonin application — Class III",v:"JPY 2,200,000–4,800,000",n:"≈ USD 14,000–32,000; varies by device type"},{l:"Shonin application — Class IV",v:"JPY 4,800,000–8,000,000+",n:"≈ USD 32,000–54,000"},{l:"QMS conformity assessment",v:"JPY 400,000–1,200,000",n:"PMDA audit for Class III/IV"}]},
  {flag:"🇨🇭",jur:"Switzerland",    reg:"Swissmedic",
   fees:[{l:"Device registration — Class I",v:"CHF 200–500",n:"Self-certification; government fee"},{l:"Device registration — Class IIa",v:"CHF 500–2,000",n:"Varies by product type"},{l:"Device registration — Class IIb/III",v:"CHF 2,000–10,000",n:"Full evaluation; Swiss DB fees separate"},{l:"Annual maintenance fee",v:"CHF 200–1,000",n:"Per registered device; annually"}]},
  {flag:"🇨🇳",jur:"China",          reg:"NMPA",
   fees:[{l:"Product record (Class I)",v:"CNY 500–2,000",n:"Provincial authority filing fee"},{l:"Registration — Class II (imported)",v:"CNY 10,000–30,000",n:"NMPA national technical review"},{l:"Registration — Class III (imported)",v:"CNY 30,000–80,000",n:"NMPA full review"},{l:"QMS inspection fee",v:"CNY 20,000–50,000",n:"Separate GMP inspection"}]},
  {flag:"🇮🇳",jur:"India",          reg:"CDSCO",
   fees:[{l:"Import Licence — Class A/B",v:"INR 1,000–5,000",n:"State Licensing Authority (SLA)"},{l:"Import Licence — Class C",v:"INR 10,000–25,000",n:"CDSCO Central Licensing Authority"},{l:"Import Licence — Class D",v:"INR 25,000–50,000",n:"CDSCO CLA; high-risk"},{l:"Annual renewal",v:"INR 1,000–10,000",n:"Varies by device class"}]},
  {flag:"🇰🇷",jur:"South Korea",    reg:"MFDS",
   fees:[{l:"Notification (Class I)",v:"KRW 100,000–300,000",n:"≈ USD 70–220"},{l:"Safety inspection — Class II",v:"KRW 500,000–1,500,000",n:"≈ USD 375–1,125"},{l:"MFDS review — Class III",v:"KRW 1,500,000–5,000,000",n:"≈ USD 1,125–3,750"},{l:"MFDS review — Class IV",v:"KRW 5,000,000–15,000,000",n:"≈ USD 3,750–11,250"}]},
  {flag:"🇧🇷",jur:"Brazil",         reg:"ANVISA",
   fees:[{l:"Notificação — Class I annual fee",v:"BRL 810",n:"No dossier submission required"},{l:"Notificação — Class II annual fee",v:"BRL 1,620",n:"No dossier submission required"},{l:"Registro — Class III",v:"BRL 7,800–15,600",n:"Application + annual fee"},{l:"Registro — Class IV",v:"BRL 15,600–31,200",n:"Application + annual fee"}]},
  {flag:"🇲🇾",jur:"Malaysia",       reg:"MDA",
   fees:[{l:"Registration — Class A",v:"MYR 200–500",n:"Product listing fee"},{l:"Registration — Class B",v:"MYR 500–1,500",n:"Standard route registration"},{l:"Registration — Class C/D",v:"MYR 1,500–5,000",n:"Full technical evaluation"},{l:"Establishment Licence annual",v:"MYR 500–2,000",n:"MDA Establishment Licence renewal"}]},
  {flag:"🇮🇩",jur:"Indonesia",      reg:"BPOM / Kemenkes",
   fees:[{l:"Notifikasi (Class A)",v:"IDR 500,000–2,000,000",n:"≈ USD 30–125"},{l:"Izin Edar — Class B",v:"IDR 2,000,000–5,000,000",n:"≈ USD 125–315"},{l:"Izin Edar — Class C/D",v:"IDR 5,000,000–15,000,000",n:"≈ USD 315–940"},{l:"IT-Alkes (import licence)",v:"IDR 1,000,000–3,000,000",n:"Import permit; annual"}]},
  {flag:"🇻🇳",jur:"Vietnam",        reg:"DAV / MOH",
   fees:[{l:"Class A declaration",v:"VND 500,000–1,000,000",n:"≈ USD 20–40"},{l:"Class B registration",v:"VND 1,000,000–3,000,000",n:"≈ USD 40–120"},{l:"Class C/D registration",v:"VND 3,000,000–8,000,000",n:"≈ USD 120–315"},{l:"Annual maintenance",v:"VND 500,000–2,000,000",n:"Annual maintenance fee"}]},
  {flag:"🇷🇺",jur:"Russia",         reg:"Roszdravnadzor",
   fees:[{l:"GRLS registration — Class I",v:"RUB 15,000–30,000",n:"≈ USD 170–340"},{l:"GRLS registration — Class IIa/IIb",v:"RUB 50,000–150,000",n:"≈ USD 565–1,700"},{l:"GRLS registration — Class III",v:"RUB 150,000–300,000",n:"≈ USD 1,700–3,400"},{l:"Annual maintenance",v:"RUB 10,000–30,000",n:"Annual state fee"}]},
  {flag:"🇲🇽",jur:"Mexico",         reg:"COFEPRIS",
   fees:[{l:"Registro Sanitario — Class II",v:"MXN 5,000–15,000",n:"≈ USD 270–800; SISFAR application fee"},{l:"Registro Sanitario — Class III",v:"MXN 15,000–40,000",n:"≈ USD 800–2,100; full COFEPRIS review"},{l:"Annual establishment notice",v:"MXN 2,000–5,000",n:"Aviso de funcionamiento; annual renewal"},{l:"GMP inspection fee",v:"MXN 10,000–25,000",n:"If COFEPRIS inspection required for Class III"}]},
  {flag:"🇸🇦",jur:"Saudi Arabia",   reg:"SFDA",
   fees:[{l:"MDNR listing — Class A",v:"SAR 500–1,500",n:"≈ USD 133–400; eGateway listing fee"},{l:"MDNR registration — Class B",v:"SAR 1,500–5,000",n:"≈ USD 400–1,333; standard registration"},{l:"MDNR registration — Class C",v:"SAR 5,000–15,000",n:"≈ USD 1,333–4,000; full dossier review"},{l:"MDNR registration — Class D",v:"SAR 15,000–30,000",n:"≈ USD 4,000–8,000; comprehensive review"},{l:"Annual renewal fee",v:"SAR 500–3,000",n:"Varies by device class"}]},
  {flag:"🇳🇿",jur:"New Zealand",    reg:"Medsafe",
   fees:[{l:"Device notification — Class I",v:"NZD 200–500",n:"Web notification / listing fee"},{l:"Conformity assessment — Class IIa",v:"NZD 500–2,000",n:"Medsafe assessment fee"},{l:"Conformity assessment — Class IIb/III",v:"NZD 2,000–8,000",n:"Full review; TGA pathway may reduce"},{l:"Annual retention",v:"NZD 200–1,000",n:"Annual maintenance; varies by class"}]},
];

export function ToolFee() {
  const [sel, setSel] = useState<string|null>(null);
  const shown = sel ? DATA.filter(d=>d.jur===sel) : DATA;
  return (
    <div>
      <div className="th-warn" style={{marginBottom:16}}>
        ⚠️ <strong>Government fees only — planning purposes only.</strong> Excludes NB / CAB audit costs,
        ISO 13485 certification, consultancy, translation, and in-country testing. All fees are approximate
        and change annually — verify directly with the relevant authority before budgeting.
        Small business reductions may apply (notably FDA 75%, PMDA, NMPA).
      </div>
      <div className="th-filter-row" style={{flexWrap:"wrap"}}>
        {DATA.map(d=>(
          <button key={d.jur} className={`th-filter${sel===d.jur?" on":""}`}
            onClick={()=>setSel(sel===d.jur?null:d.jur)} style={{fontSize:11}}>
            {d.flag} {d.jur}
          </button>
        ))}
      </div>
      <div className="th-fee-grid">
        {shown.map(d=>(
          <div key={d.jur} className="th-fee-card">
            <div style={{fontSize:22,marginBottom:6}}>{d.flag}</div>
            <div style={{fontSize:13,fontWeight:700,color:"#0f172a",marginBottom:2}}>{d.jur}</div>
            <div style={{fontSize:11,color:"#94a3b8",marginBottom:10}}>{d.reg}</div>
            {d.fees.map(f=>(
              <div key={f.l} style={{borderBottom:"1px solid #f1f5f9",paddingBottom:8,marginBottom:8}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:6}}>
                  <span style={{color:"#64748b",fontSize:12,flex:1}}>{f.l}</span>
                  <span style={{fontWeight:700,color:"#0f172a",fontSize:12,flexShrink:0}}>{f.v}</span>
                </div>
                {f.n&&<div style={{fontSize:10,color:"#94a3b8",marginTop:2}}>{f.n}</div>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
