import React, { useState } from "react";
import { FileText, Shield, TrendingUp, ClipboardCheck, BarChart3, Layers, AlertCircle, Download, CheckCircle2 } from "lucide-react";
import type { ComponentType } from "react";

interface Template { name:string; desc:string; pages:string; ic:string; bg:string; Icon:ComponentType<{size?:number;color?:string}>; }

const TEMPLATES: Template[] = [
  {name:"Intended Use Statement",    desc:"Structured template for intended medical purpose, target population, and clinical indication.",          pages:"2 pages", ic:"#2563eb",bg:"#eff6ff",Icon:FileText},
  {name:"Risk Management Plan",      desc:"ISO 14971 aligned plan outline covering hazard identification through residual risk.",                    pages:"8 pages", ic:"#ea580c",bg:"#fff7ed",Icon:Shield},
  {name:"Clinical Evaluation Report",desc:"CER framework covering literature search, clinical data analysis, and benefit-risk conclusion.",          pages:"12 pages",ic:"#16a34a",bg:"#f0fdf4",Icon:FileText},
  {name:"PMS Plan Template",         desc:"Post-market surveillance plan covering data sources, thresholds, and reporting obligations.",              pages:"5 pages", ic:"#7c3aed",bg:"#faf5ff",Icon:TrendingUp},
  {name:"UDI Registration Checklist",desc:"Step-by-step for registering in GUDID (US), EUDAMED (EU), and other databases.",                         pages:"3 pages", ic:"#ca8a04",bg:"#fefce8",Icon:ClipboardCheck},
  {name:"PSUR Outline",              desc:"Periodic Safety Update Report structure with all required sections per EU MDR.",                          pages:"6 pages", ic:"#0891b2",bg:"#ecfeff",Icon:BarChart3},
  {name:"Technical File Checklist",  desc:"Master checklist of all required documents for a complete technical file / design dossier.",              pages:"4 pages", ic:"#db2777",bg:"#fdf2f8",Icon:Layers},
  {name:"FSCA Report Template",      desc:"Field Safety Corrective Action reporting template covering all major jurisdiction requirements.",           pages:"3 pages", ic:"#dc2626",bg:"#fef2f2",Icon:AlertCircle},
];

export function ToolTemplates() {
  const [dl, setDl] = useState<string|null>(null);
  return (
    <div>
      <div className="th-warn" style={{marginBottom:16}}>ℹ️ Templates provide structural starting points only. All content must be completed and reviewed by a qualified regulatory professional before submission.</div>
      <div className="th-tmpl-grid">
        {TEMPLATES.map(t=>(
          <div key={t.name} className="th-tmpl-card" onClick={()=>setDl(t.name)}>
            <div style={{width:38,height:38,borderRadius:9,background:t.bg,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:11}}>
              <t.Icon size={19} color={t.ic}/>
            </div>
            <div style={{fontSize:13,fontWeight:700,color:"#0f172a",marginBottom:5}}>{t.name}</div>
            <div style={{fontSize:12,color:"#64748b",lineHeight:1.5}}>{t.desc}</div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:12}}>
              <span style={{fontSize:11,color:"#94a3b8"}}>{t.pages}</span>
              <span style={{display:"flex",alignItems:"center",gap:5,fontSize:12,color:"#2563eb",fontWeight:600}}>
                <Download size={13}/> Download
              </span>
            </div>
          </div>
        ))}
      </div>
      {dl && (
        <div style={{position:"fixed",inset:0,background:"rgba(0,0,0,.4)",zIndex:500,display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>setDl(null)}>
          <div style={{background:"white",borderRadius:16,padding:26,maxWidth:360,width:"90%",textAlign:"center"}} onClick={e=>e.stopPropagation()}>
            <CheckCircle2 size={38} color="#22c55e" style={{margin:"0 auto 12px"}}/>
            <div style={{fontSize:16,fontWeight:700,color:"#0f172a",marginBottom:8}}>Template Ready</div>
            <div style={{fontSize:13,color:"#64748b",marginBottom:18,lineHeight:1.6}}>"{dl}" will be available for download in the full RAPath release.</div>
            <button className="th-btn th-btn-p" onClick={()=>setDl(null)} style={{width:"100%",justifyContent:"center"}}>Got it</button>
          </div>
        </div>
      )}
    </div>
  );
}
