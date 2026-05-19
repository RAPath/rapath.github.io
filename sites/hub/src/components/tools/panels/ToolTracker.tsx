import React from "react";
import { RefreshCw, Clock, Globe, FileText } from "lucide-react";
import type { ComponentType } from "react";

interface Change {
  date: string; jur: string; tag: string;
  tc: string; tbg: string; ic: string; ibg: string;
  Icon: ComponentType<{size?:number;color?:string}>;
  t: string; d: string;
}

const CHANGES: Change[] = [
  {date:"May 2026",jur:"🇦🇺 AU",tag:"TGA",tc:"#166534",tbg:"#dcfce7",ic:"#16a34a",ibg:"#f0fdf4",Icon:RefreshCw,t:"TGA updates MDSAP + FDA 510(k) pathway for Class III",d:"Manufacturers holding MDSAP + FDA 510(k) can now use combined evidence for TGA Class III ARTG assessment."},
  {date:"Apr 2026",jur:"🇪🇺 EU",tag:"MDR",tc:"#1e40af",tbg:"#dbeafe",ic:"#2563eb",ibg:"#eff6ff",Icon:Clock,t:"EUDAMED actor registration mandatory for all manufacturers",d:"EUDAMED actor module became mandatory for all economic operators placing devices on the EU market."},
  {date:"Mar 2026",jur:"🇷🇺 RU",tag:"RZN",tc:"#9a3412",tbg:"#ffedd5",ic:"#ea580c",ibg:"#fff7ed",Icon:Globe,t:"Government Decree 1684 fully in force — QMS inspections mandatory",d:"Mandatory QMS inspections for Class IIa (sterile), IIb, and III now fully in force."},
  {date:"Feb 2026",jur:"🇧🇷 BR",tag:"ANVISA",tc:"#9a3412",tbg:"#ffedd5",ic:"#ea580c",ibg:"#fff7ed",Icon:FileText,t:"ANVISA confirms RDC 751/2022 enforcement — Notificação fully live",d:"B-GMP certification and BRH appointment are actively inspected. Transition period has ended."},
  {date:"Jan 2026",jur:"🇬🇧 UK",tag:"MHRA",tc:"#1e40af",tbg:"#dbeafe",ic:"#2563eb",ibg:"#eff6ff",Icon:Clock,t:"MHRA confirms CE marking acceptance extended to June 2028 / 2030",d:"CE marking accepted for most devices until June 2028; high-risk until June 2030."},
  {date:"Dec 2025",jur:"🇺🇸 US",tag:"FDA",tc:"#166534",tbg:"#dcfce7",ic:"#16a34a",ibg:"#f0fdf4",Icon:FileText,t:"FDA finalises AI/ML Predetermined Change Control Plan guidance",d:"Manufacturers can now submit PCCPs with initial 510(k) or PMA submissions."},
];

export function ToolTracker() {
  return (
    <div>
      {CHANGES.map(c => (
        <div key={c.t} className="th-change">
          <div className="th-change-ico" style={{background:c.ibg}}>
            <c.Icon size={17} color={c.ic} />
          </div>
          <div style={{flex:1}}>
            <div style={{display:"flex",gap:7,alignItems:"center",marginBottom:4,flexWrap:"wrap"}}>
              <span style={{fontSize:10,color:"#94a3b8",fontWeight:600}}>{c.date}</span>
              <span style={{background:c.tbg,color:c.tc,fontSize:10,fontWeight:700,padding:"2px 7px",borderRadius:10}}>{c.jur} · {c.tag}</span>
            </div>
            <div style={{fontSize:13,fontWeight:600,color:"#0f172a",marginBottom:4}}>{c.t}</div>
            <div style={{fontSize:12,color:"#64748b",lineHeight:1.55}}>{c.d}</div>
          </div>
        </div>
      ))}
      <p style={{fontSize:11,color:"#94a3b8",textAlign:"center",marginTop:12}}>Showing latest updates across all 16 jurisdictions. Full tracker includes source links.</p>
    </div>
  );
}
