import React, { useState } from "react";
import Layout from "@theme/Layout";
import {
  Stethoscope, Syringe, Activity, Microscope, ShieldCheck, HelpCircle,
  Wifi, Fingerprint, Droplets, Scissors, Anchor,
  Cpu, CircuitBoard, Wrench,
  Zap, Calendar, CalendarCheck, Minus,
  CheckCircle2, AlertCircle, AlertTriangle, AlertOctagon,
  ArrowLeft, ChevronDown, ExternalLink, Globe, FileText, Navigation,
} from "lucide-react";

// ── CSS ───────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
  .rp *, .rp *::before, .rp *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .rp { font-family: 'DM Sans', system-ui, sans-serif; background: white; color: #0f172a; min-height: 100vh; }
  .rp-hero { background: linear-gradient(158deg, #1d4ed8 0%, #2563eb 55%, #3b82f6 100%); padding: 52px 20px 44px; }
  .rp-hero-inner { max-width: 860px; margin: 0 auto; }
  .rp-hero-eye { display: inline-flex; align-items: center; gap: 7px; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.25); border-radius: 20px; padding: 5px 13px; margin-bottom: 18px; }
  .rp-hero-eye span { font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.9); letter-spacing: 0.6px; }
  .rp-hero h1 { font-size: 28px; font-weight: 700; color: white; line-height: 1.22; margin-bottom: 14px; }
  .rp-hero p { font-size: 15px; color: rgba(255,255,255,0.82); line-height: 1.68; max-width: 520px; }
  .rp-hero-stats { display: flex; gap: 24px; margin-top: 28px; flex-wrap: wrap; }
  .rp-stat { text-align: center; }
  .rp-stat-n { font-size: 24px; font-weight: 700; color: white; }
  .rp-stat-l { font-size: 11px; color: rgba(255,255,255,0.7); font-weight: 600; margin-top: 2px; letter-spacing: 0.3px; }
  .rp-home-body { max-width: 860px; margin: 0 auto; padding: 36px 20px 52px; }
  .rp-section-label { font-size: 11px; font-weight: 700; color: #94a3b8; letter-spacing: 1px; margin-bottom: 14px; text-transform: uppercase; }
  .rp-tool-grid { display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
  .rp-cta-card { background: #2563eb; border: none; border-radius: 16px; padding: 22px 20px; cursor: pointer; text-align: left; width: 100%; font-family: inherit; display: flex; align-items: flex-start; justify-content: space-between; gap: 14px; box-shadow: 0 4px 24px rgba(37,99,235,0.28); transition: transform 0.15s, box-shadow 0.15s; }
  .rp-cta-card:hover { transform: translateY(-2px); box-shadow: 0 8px 36px rgba(37,99,235,0.38); }
  .rp-cta-icon { width: 46px; height: 46px; min-width: 46px; border-radius: 13px; background: rgba(255,255,255,0.18); display: flex; align-items: center; justify-content: center; }
  .rp-cta-lbl { font-size: 10px; font-weight: 700; letter-spacing: 1px; color: rgba(255,255,255,0.7); margin-bottom: 6px; }
  .rp-cta-title { font-size: 17px; font-weight: 700; color: white; margin-bottom: 4px; }
  .rp-cta-sub { font-size: 12px; color: rgba(255,255,255,0.82); }
  .rp-sec-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .rp-sec-card { border: 1.5px solid; border-radius: 14px; padding: 18px 16px; cursor: pointer; text-align: left; font-family: inherit; transition: transform 0.15s, box-shadow 0.15s; width: 100%; }
  .rp-sec-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
  .rp-sec-ico { width: 36px; height: 36px; border-radius: 9px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; }
  .rp-sec-lbl { font-size: 10px; font-weight: 700; letter-spacing: 0.6px; margin-bottom: 4px; }
  .rp-sec-title { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 3px; }
  .rp-sec-sub { font-size: 11px; color: #64748b; line-height: 1.4; }
  .rp-features { background: #f8fafc; border-radius: 16px; padding: 22px; }
  .rp-feat-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 16px; }
  .rp-feat-item { display: flex; align-items: flex-start; gap: 10px; }
  .rp-feat-ico { width: 30px; height: 30px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .rp-feat-text { font-size: 13px; color: #374151; line-height: 1.4; font-weight: 500; }
  .rp-q-bar { border-bottom: 1px solid #f1f5f9; background: white; }
  .rp-q-bar-inner { max-width: 760px; margin: 0 auto; padding: 14px 20px; display: flex; align-items: center; gap: 14px; }
  .rp-back-btn { width: 38px; height: 38px; min-width: 38px; border-radius: 10px; background: #f8fafc; border: 1px solid #e2e8f0; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.12s; }
  .rp-back-btn:hover { background: #eff6ff; border-color: #bfdbfe; }
  .rp-dots { display: flex; gap: 5px; margin-top: 6px; }
  .rp-dot { height: 3px; flex: 1; border-radius: 2px; background: #e2e8f0; transition: background 0.3s; }
  .rp-dot.done { background: #2563eb; }
  .rp-pct { font-size: 12px; font-weight: 700; color: #2563eb; white-space: nowrap; }
  .rp-q-body { max-width: 760px; margin: 0 auto; padding: 32px 20px 48px; }
  .rp-q-ico-wrap { width: 48px; height: 48px; border-radius: 13px; background: #eff6ff; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
  .rp-q-title { font-size: 20px; font-weight: 700; color: #0f172a; line-height: 1.3; margin-bottom: 7px; }
  .rp-q-hint { font-size: 13px; color: #64748b; line-height: 1.55; margin-bottom: 24px; }
  .rp-options { display: flex; flex-direction: column; gap: 10px; }
  .rp-opt { display: flex; align-items: center; gap: 14px; padding: 15px 17px; background: white; border: 2px solid #e8ecf0; border-radius: 14px; cursor: pointer; text-align: left; width: 100%; font-family: inherit; min-height: 66px; transition: all 0.13s ease; }
  .rp-opt:hover { border-color: #bfdbfe; background: #f8fbff; }
  .rp-opt.sel { border-color: #2563eb; background: #eff6ff; box-shadow: 0 0 0 3px #bfdbfe; }
  .rp-opt-ico { width: 44px; height: 44px; min-width: 44px; border-radius: 11px; display: flex; align-items: center; justify-content: center; transition: all 0.13s; }
  .rp-opt-main { flex: 1; min-width: 0; }
  .rp-opt-label { font-size: 14px; font-weight: 500; color: #0f172a; line-height: 1.35; }
  .rp-opt.sel .rp-opt-label { font-weight: 700; color: #1e40af; }
  .rp-opt-desc { font-size: 11px; color: #94a3b8; margin-top: 3px; line-height: 1.4; }
  .rp-opt-tick { width: 22px; height: 22px; min-width: 22px; border-radius: 50%; background: #2563eb; display: flex; align-items: center; justify-content: center; }
  @media (min-width: 600px) {
    .rp-options { display: grid; grid-template-columns: 1fr 1fr; }
    .rp-options > button:last-child:nth-child(odd) { grid-column: 1 / -1; }
    .rp-q-title { font-size: 22px; }
  }
  @media (min-width: 1024px) {
    .rp-hero { padding: 72px 24px 60px; }
    .rp-hero h1 { font-size: 36px; }
    .rp-tool-grid { display: grid; grid-template-columns: 1.5fr 1fr 1fr; }
    .rp-sec-grid { display: contents; }
    .rp-feat-grid { grid-template-columns: 1fr 1fr 1fr 1fr; }
    .rp-home-body { padding: 44px 24px 60px; }
  }
  .rp-risk-banner { padding: 16px 20px; border-bottom: 2px solid; }
  .rp-risk-inner { max-width: 1000px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
  .rp-risk-dots { display: flex; flex-direction: column; gap: 5px; align-items: center; }
  .rp-risk-dot { width: 10px; height: 10px; border-radius: 50%; transition: background 0.3s; }
  .rp-tabs-bar { background: white; border-bottom: 1px solid #e2e8f0; position: sticky; top: 60px; z-index: 100; }
  .rp-tabs-inner { max-width: 1000px; margin: 0 auto; display: flex; }
  .rp-tab { flex: 1; padding: 11px 8px 10px; background: none; border: none; cursor: pointer; font-family: inherit; font-size: 12px; font-weight: 500; color: #94a3b8; display: flex; flex-direction: column; align-items: center; gap: 4px; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: color 0.15s; }
  .rp-tab.active { color: #2563eb; font-weight: 700; border-bottom-color: #2563eb; }
  @media (min-width: 640px) { .rp-tab { font-size: 13px; flex-direction: row; justify-content: center; gap: 7px; } }
  .rp-res-body { max-width: 1000px; margin: 0 auto; padding: 24px 20px 52px; }
  .rp-regions { display: flex; flex-direction: column; gap: 24px; }
  @media (min-width: 860px) { .rp-regions { display: grid; grid-template-columns: 1fr 1fr 1.5fr; align-items: start; } }
  .rp-region-label { font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 1.2px; margin-bottom: 10px; }
  .rp-jur-card { border: 1.5px solid #e8ecf0; border-radius: 13px; overflow: hidden; background: white; margin-bottom: 8px; transition: border-color 0.15s; }
  .rp-jur-card.exp { border-color: #bfdbfe; }
  .rp-jur-btn { width: 100%; background: none; border: none; cursor: pointer; padding: 13px 15px; display: flex; align-items: center; gap: 12px; font-family: inherit; }
  .rp-jur-name { font-size: 13px; font-weight: 600; color: #0f172a; text-align: left; }
  .rp-jur-reg { font-size: 11px; color: #94a3b8; text-align: left; }
  .rp-cls-badge { font-size: 11px; font-weight: 700; padding: 2px 9px; border-radius: 20px; border: 1px solid; white-space: nowrap; }
  .rp-jur-time { font-size: 10px; color: #94a3b8; margin-top: 3px; white-space: nowrap; }
  .rp-jur-detail { padding: 12px 15px 15px; border-top: 1px solid #f1f5f9; background: #f8fafc; }
  .rp-detail-lbl { font-size: 10px; font-weight: 700; color: #94a3b8; letter-spacing: 0.5px; margin-bottom: 4px; }
  .rp-detail-val { font-size: 13px; color: #374151; line-height: 1.55; margin-bottom: 12px; }
  .rp-tl-pill { display: inline-block; background: #eff6ff; color: #2563eb; font-size: 13px; font-weight: 700; padding: 4px 11px; border-radius: 20px; }
  .rp-ext-link { display: inline-flex; align-items: center; gap: 5px; font-size: 12px; color: #2563eb; font-weight: 600; text-decoration: none; }
  .rp-docs-grid { display: grid; grid-template-columns: 1fr; gap: 12px; }
  @media (min-width: 600px) { .rp-docs-grid { grid-template-columns: 1fr 1fr; } }
  @media (min-width: 900px) { .rp-docs-grid { grid-template-columns: 1fr 1fr 1fr; } }
  .rp-doc-card { border-radius: 14px; padding: 18px; border: 1px solid; }
  .rp-doc-title { font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
  .rp-doc-item { display: flex; align-items: flex-start; gap: 9px; margin-bottom: 8px; }
  .rp-doc-text { font-size: 13px; color: #374151; line-height: 1.5; }
  .rp-timeline-wrap { max-width: 680px; margin: 0 auto; }
  .rp-timeline { position: relative; padding-left: 54px; }
  .rp-tl-line { position: absolute; left: 19px; top: 19px; bottom: 56px; width: 2px; background: #e2e8f0; }
  .rp-tl-step { position: relative; margin-bottom: 16px; }
  .rp-tl-num { position: absolute; left: -54px; top: 0; width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; z-index: 1; }
  .rp-tl-card { background: white; border: 1px solid #e8ecf0; border-radius: 12px; padding: 14px 16px; }
  .rp-tl-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; margin-bottom: 6px; }
  .rp-tl-title { font-size: 14px; font-weight: 700; color: #0f172a; }
  .rp-tl-time { background: #eff6ff; color: #2563eb; font-size: 10px; font-weight: 700; padding: 3px 9px; border-radius: 20px; white-space: nowrap; flex-shrink: 0; }
  .rp-tl-desc { font-size: 12px; color: #64748b; line-height: 1.6; }
  .rp-warn { padding: 12px 14px; background: #fffbeb; border: 1px solid #fde68a; border-radius: 12px; font-size: 12px; color: #92400e; line-height: 1.6; margin-top: 8px; }
  .rp-not-md { padding: 10px 13px; background: #fff7ed; border: 1px solid #fdba74; border-radius: 8px; font-size: 12px; color: #92400e; line-height: 1.55; margin-top: 10px; }
  .rp-samd-tag { background: #ede9fe; color: #5b21b6; font-size: 10px; font-weight: 700; padding: 3px 9px; border-radius: 20px; }
  .rp-risk-tag { font-size: 10px; font-weight: 700; padding: 3px 9px; border-radius: 20px; }
  .rp-reset { display: block; width: 100%; max-width: 400px; margin: 32px auto 0; padding: 15px; background: #2563eb; color: white; border: none; border-radius: 14px; font-size: 14px; font-weight: 700; cursor: pointer; font-family: inherit; text-align: center; transition: background 0.15s; }
  .rp-reset:hover { background: #1d4ed8; }
  .rp-disc { font-size: 11px; color: #94a3b8; text-align: center; line-height: 1.7; margin-top: 20px; }
`;

// ── 16 Jurisdictions ──────────────────────────────────────────────────────
const JURISDICTIONS = [
  {
    id:"au", name:"Australia", reg:"TGA", flag:"🇦🇺", url:"https://rapath.github.io/au",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:["Manufacturer declaration of conformity + sponsor ARTG application — no mandatory audit for Class I","Comparable overseas evidence (EU NB MDR cert, MDSAP, or FDA-exempt + MDSAP pathway eff. Oct 2024) OR Australian CAB audit + ARTG inclusion","Comparable overseas evidence (EU NB MDR cert or MDSAP) OR Australian CAB audit + ARTG inclusion; risk-based audit may apply","TGA-issued CA certificate OR EU NB cert (MDR only) OR MDSAP + FDA 510(k) + ARTG inclusion; mandatory audit applies for MDD + MDSAP + 510(k) pathway"],
    time: ["3–6 mo","9–15 mo","15–24 mo","24–36 mo"],
  },
  {
    id:"eu", name:"European Union", reg:"EU MDR / IVDR", flag:"🇪🇺", url:"https://rapath.github.io/eu",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:["Manufacturer self-certification — Notified Body only for sterile, measuring, or reusable surgical Class I devices","Notified Body QMS audit + technical documentation assessment (Annex IX) OR type examination + QA (Annex X + VIII)","Notified Body full QMS audit + EU-type examination (Annex IX or Annex X + VIII); stricter for implantables","Notified Body full QMS & design examination (Annex IX Ch I + II, or Annex X + VIII); EUDAMED registration required"],
    time: ["6–12 mo","12–24 mo","18–30 mo","24–42 mo"],
  },
  {
    id:"us", name:"United States", reg:"FDA", flag:"🇺🇸", url:"https://rapath.github.io/us",
    cls:  ["Class I","Class II","Class II","Class III"],
    route:["510(k) exempt — general controls only; FDA device listing required","510(k) premarket notification — substantial equivalence to a predicate; special controls apply","510(k) with special controls OR De Novo classification request for novel low-to-moderate risk devices","PMA — Premarket Approval Application; valid scientific evidence of safety & effectiveness; clinical data required"],
    time: ["3–6 mo","12–18 mo","18–30 mo","36–60 mo"],
  },
  {
    id:"ca", name:"Canada", reg:"Health Canada", flag:"🇨🇦", url:"https://rapath.github.io/hc",
    cls:  ["Class I","Class II","Class III","Class IV"],
    route:["MDEL (Medical Device Establishment Licence) only — no device licence required","Medical Device Licence — Declaration of Conformity + safety & effectiveness summary; MDEL required","Medical Device Licence — safety and effectiveness evidence including clinical data; MDEL required","Medical Device Licence — comprehensive clinical investigation data; full safety & effectiveness dossier; MDEL required"],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–36 mo"],
  },
  {
    id:"uk", name:"United Kingdom", reg:"MHRA", flag:"🇬🇧", url:"https://rapath.github.io/uk",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:["UKCA self-certification + MHRA registration; CE marking accepted until June 2028; UK Responsible Person required for non-UK manufacturers","UK Approved Body conformity assessment + UKCA marking + MHRA registration; CE marking accepted until June 2028; UKRP required","UK Approved Body QMS audit + type examination + MHRA registration; CE marking accepted until June 2030 (high-risk); UKRP required","UK AB full QMS + design examination + MHRA registration; MHRA international reliance framework (AU, CA, EU, US) in development; UKRP required"],
    time: ["6–9 mo","12–18 mo","18–24 mo","24–36 mo"],
  },
  {
    id:"sg", name:"Singapore", reg:"HSA", flag:"🇸🇬", url:"https://rapath.github.io/sg",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:["PRISM product listing; many Class A devices exempt under the Product Registration Exemption (PRE) order","PRISM registration — Notified Route (recognised overseas approval) or Restricted Route; Dealer's Licence required","PRISM full registration + complete technical dossier; HSA in-depth evaluation; Dealer's Licence required","PRISM full registration + pre-market evaluation by HSA; clinical evaluation report required; Dealer's Licence required"],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"jp", name:"Japan", reg:"PMDA / MHLW", flag:"🇯🇵", url:"https://rapath.github.io/jp",
    cls:  ["Class I","Class II","Class III","Class IV"],
    route:["Todokede — self-notification to PMDA; no technical review; MAH licence and Foreign Manufacturer Registration (FMR) required","Ninsho — third-party certification by Registered Certification Body (RCB) if JIS standard exists; OR PMDA Shonin if no standard; MAH & FMR required","Shonin (PMDA pre-market approval) for most Class III; RCB Ninsho if certification standard exists; clinical evidence often required; MAH & FMR required","Shonin — full PMDA pre-market approval; comprehensive clinical data required; QMS conformity assessment by PMDA; MAH & FMR required"],
    time: ["3–6 mo","12–18 mo","18–30 mo","24–36 mo"],
  },
  {
    id:"ch", name:"Switzerland", reg:"Swissmedic", flag:"🇨🇭", url:"https://rapath.github.io/swiss",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:["Manufacturer self-certification + Swissmedic product registration (MedDO Art. 9); mirrors EU MDR Class I","Swiss Designated Body (DB) conformity declaration + Swissmedic registration; aligned with EU MDR Annex IX","DB QMS audit + EU-type examination + Swissmedic registration; DB must be designated under MedDO","DB full QMS + design examination + Swissmedic registration; EU MDR CE certificate may support Swiss registration"],
    time: ["6–12 mo","12–24 mo","18–30 mo","24–36 mo"],
  },
  {
    id:"cn", name:"China", reg:"NMPA", flag:"🇨🇳", url:"https://rapath.github.io/cn",
    cls:  ["Class I","Class II","Class II","Class III"],
    route:["Product record filing (备案) — provincial drug authority; no technical review; NMPA agent in China required","NMPA registration (注册) — provincial authority for domestic; national CMDE review for all imported Class II; home country approval proof required","NMPA registration (注册) — national CMDE comprehensive review; clinical data often required; in-country testing may be needed; home country approval proof required","NMPA Class III registration — CMDE full technical review; clinical trials in China often required; mandatory QMS inspection; home country approval proof required"],
    time: ["3–6 mo","12–24 mo","18–30 mo","24–48 mo"],
  },
  {
    id:"in", name:"India", reg:"CDSCO", flag:"🇮🇳", url:"https://rapath.github.io/in",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:["SUGAM portal registration via State Licensing Authority (SLA); importer/manufacturer licence required","CDSCO Central Licensing Authority (CLA) registration + import/manufacturing licence; test reports and performance data required","CDSCO CLA registration + clinical performance data; detailed technical file; import or manufacturing licence required","CDSCO CLA registration + full clinical investigation data; may require local clinical trial data; import or manufacturing licence required"],
    time: ["3–6 mo","12–18 mo","18–24 mo","24–36 mo"],
  },
  {
    id:"kr", name:"South Korea", reg:"MFDS", flag:"🇰🇷", url:"https://rapath.github.io/kr",
    cls:  ["Class I","Class II","Class III","Class IV"],
    route:["MFDS notification (신고) — low-risk; Korean Importer or Domestic Responsible Person required","MFDS safety inspection or designated third-party review; technical dossier required; UDIKOREA registration","MFDS technical review + comprehensive dossier; clinical performance data required; GMP inspection possible","Full MFDS pre-market review + clinical investigation data; GMP inspection; highest regulatory scrutiny"],
    time: ["3–6 mo","6–12 mo","12–24 mo","24–36 mo"],
  },
  {
    id:"br", name:"Brazil", reg:"ANVISA", flag:"🇧🇷", url:"https://rapath.github.io/br",
    cls:  ["Class I","Class II","Class III","Class IV"],
    route:["Notificação (Class I) — no dossier submission; audit-ready technical file + B-GMP certification + Brazil Registration Holder (BRH) required (RDC 751/2022)","Notificação (Class II) — no dossier submission to ANVISA; audit-ready technical file + B-GMP certification + BRH required (RDC 751/2022)","Registro (Class III) — full dossier submitted to ANVISA for technical review; B-GMP audit + BRH required; registration valid 10 years","Registro (Class IV) — full registration + comprehensive ANVISA technical review + B-GMP audit; BRH mandatory; registration valid 10 years"],
    time: ["3–9 mo","6–18 mo","18–36 mo","24–42 mo"],
  },
  {
    id:"my", name:"Malaysia", reg:"MDA", flag:"🇲🇾", url:"https://rapath.github.io/my",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:["MDA product listing via MeDC@St portal; Establishment Licence required for importers/manufacturers","MDA registration via MeDC@St — Recognised Route (overseas approval) or Standard Route; Establishment Licence required","MDA registration — Standard Route with conformity assessment body (CAB) audit; full technical dossier required","MDA full registration + comprehensive technical review + CAB audit; clinical evaluation required; Establishment Licence required"],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"id", name:"Indonesia", reg:"BPOM / Kemenkes", flag:"🇮🇩", url:"https://rapath.github.io/id",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:["REGALKES notification (Notifikasi Alat Kesehatan) via e-REGALKES; Import Licence (IT-Alkes) required","REGALKES standard Izin Edar registration via e-REGALKES; technical documentation + import licence required","REGALKES full Izin Edar registration + technical dossier review; clinical data and test reports required","REGALKES full Izin Edar registration + comprehensive clinical evaluation; highest scrutiny; import licence required"],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"vn", name:"Vietnam", reg:"DAV / MOH", flag:"🇻🇳", url:"https://rapath.github.io/vt",
    cls:  ["Class A","Class B","Class C","Class D"],
    route:["MOH declaration (công bố tiêu chuẩn áp dụng) — Class A self-declaration via DAV portal","DAV simplified registration (đăng ký lưu hành) — Class B; abbreviated pathway available with recognised overseas certificate","DAV full registration (đăng ký lưu hành) — Class C with complete technical file review","DAV full registration + clinical evidence review — Class D; comprehensive dossier; local clinical data may be required"],
    time: ["1–3 mo","6–12 mo","12–18 mo","18–24 mo"],
  },
  {
    id:"ru", name:"Russia", reg:"Roszdravnadzor (RZN)", flag:"🇷🇺", url:"https://rapath.github.io/ru",
    cls:  ["Class I","Class IIa","Class IIb","Class III"],
    route:["GRLS state registration — simplified procedure (~50 working days); RUS REP required; EAEU pathway also valid","GRLS full state registration; QMS inspection mandatory for sterile Class IIa from Jan 2024; RUS REP required","GRLS full registration + mandatory QMS inspection (Jan 2024); clinical trials may be required; RUS REP required","GRLS full registration + mandatory clinical trials (Russian centres) + QMS inspection; RUS REP required; EAEU-only from Jan 2027"],
    time: ["2–6 mo","6–12 mo","12–24 mo","18–30 mo"],
  },
];

// ── Questions ─────────────────────────────────────────────────────────────
const QUESTIONS = [
  { id:"purpose", text:"What is the primary purpose of your product?",
    hint:"Choose the closest match to the main intended medical use.",
    opts:[
      { v:"diagnose", label:"Diagnose a condition or disease",               Icon:Stethoscope, desc:"e.g. imaging system, IVD, diagnostic algorithm" },
      { v:"treat",    label:"Treat, relieve or compensate for a condition",  Icon:Syringe,     desc:"e.g. therapeutic device, implant, drug delivery" },
      { v:"monitor",  label:"Monitor a physiological parameter",             Icon:Activity,    desc:"e.g. ECG, glucose monitor, wearable sensor" },
      { v:"predict",  label:"Predict, screen or detect a risk",              Icon:Microscope,  desc:"e.g. screening tool, risk algorithm, AI triage" },
      { v:"prevent",  label:"Prevent disease or control conception",         Icon:ShieldCheck, desc:"e.g. barrier device, prophylactic instrument" },
      { v:"wellness", label:"General wellness — not sure if medical device", Icon:HelpCircle,  desc:"e.g. fitness tracker, wellness app, lifestyle tool" },
    ]},
  { id:"contact", text:"How does your product interact with the human body?",
    hint:"Select the highest level of contact your device has.",
    opts:[
      { v:"none",              label:"No body contact — external or data only",     Icon:Wifi,        desc:"e.g. standalone software, remote monitor, analyser" },
      { v:"surface",           label:"Non-invasive surface contact",                Icon:Fingerprint, desc:"e.g. ECG electrodes, wound dressing, external probe" },
      { v:"invasive_natural",  label:"Invasive via a natural body opening",         Icon:Droplets,    desc:"e.g. endoscope, catheter, nasal or oral device" },
      { v:"invasive_surgical", label:"Surgically invasive — incision or puncture",  Icon:Scissors,    desc:"e.g. surgical instrument, cannula, hypodermic needle" },
      { v:"implantable",       label:"Implantable — intended to remain in body",    Icon:Anchor,      desc:"e.g. pacemaker, orthopaedic implant, cochlear device" },
    ]},
  { id:"software", text:"Is your product software, or does it contain software?",
    hint:"Includes apps, algorithms, AI/ML models, firmware and clinical decision support tools.",
    opts:[
      { v:"pure_sw",  label:"Pure software / app / algorithm / AI or ML",  Icon:Cpu,          desc:"No physical hardware component" },
      { v:"hw_sw",    label:"Hardware device with embedded software",       Icon:CircuitBoard, desc:"Software drives or controls the device function" },
      { v:"hw_only",  label:"Hardware only — no software component",        Icon:Wrench,       desc:"Purely mechanical, electrical or material-based" },
    ]},
  { id:"duration", text:"What is the intended duration of use or body contact?",
    hint:"Per treatment episode or application — not the product's total lifespan.",
    opts:[
      { v:"transient", label:"Transient — less than 60 minutes",  Icon:Zap,          desc:"Single use or brief contact per application" },
      { v:"short",     label:"Short-term — up to 30 days",        Icon:Calendar,     desc:"Continuous or intermittent use ≤ 30 days" },
      { v:"long",      label:"Long-term — more than 30 days",     Icon:CalendarCheck,desc:"Continuous or intermittent use > 30 days" },
      { v:"na",        label:"Not applicable — no body contact",  Icon:Minus,        desc:"External device, software only, or remote system" },
    ]},
  { id:"harm", text:"What is the potential impact if your product fails or gives incorrect output?",
    hint:"Consider the realistic worst-case clinical scenario for a patient.",
    opts:[
      { v:"minimal",  label:"Minimal — no realistic clinical consequence",    Icon:CheckCircle2,  desc:"Failure causes no patient injury or clinical harm" },
      { v:"moderate", label:"Moderate — delayed or sub-optimal treatment",    Icon:AlertCircle,   desc:"Failure leads to less effective care, not direct injury" },
      { v:"serious",  label:"Serious — injury, hospitalisation or surgery",   Icon:AlertTriangle, desc:"Failure may cause reversible but serious patient harm" },
      { v:"critical", label:"Critical — death or irreversible deterioration", Icon:AlertOctagon,  desc:"Failure may cause death or permanent patient harm" },
    ]},
];

// ── Classification Logic ───────────────────────────────────────────────────
function getRiskLevel({ contact, software, duration, harm, purpose }) {
  const isSW      = software === "pure_sw" || software === "hw_sw";
  const h         = ({ minimal:1, moderate:2, serious:3, critical:4 })[harm]    || 1;
  const d         = ({ transient:1, na:1, short:2, long:3 })[duration]          || 1;
  const clinDecSW = isSW && ["diagnose","treat","predict"].includes(purpose);
  const monitorSW = isSW && purpose === "monitor";
  if (contact === "implantable")        return h >= 3 ? 4 : 3;
  if (contact === "invasive_surgical")  return h >= 4 ? 4 : (h >= 3 || d >= 3) ? 3 : 2;
  if (clinDecSW)  return h >= 4 ? 4 : h >= 3 ? 3 : 2;
  if (monitorSW)  return h >= 3 ? 3 : 2;
  if (contact === "invasive_natural")   return (h >= 4 || d >= 3) ? 3 : 2;
  if (contact === "surface")            return h >= 3 ? 2 : 1;
  return h >= 3 ? 2 : 1;
}

const RISK_META = [
  { label:"Low Risk",         level:"Level 1 / 4", color:"#16a34a", bg:"#f0fdf4", border:"#86efac", badge:"#dcfce7" },
  { label:"Low–Medium Risk",  level:"Level 2 / 4", color:"#ca8a04", bg:"#fefce8", border:"#fde047", badge:"#fef9c3" },
  { label:"Medium–High Risk", level:"Level 3 / 4", color:"#ea580c", bg:"#fff7ed", border:"#fdba74", badge:"#ffedd5" },
  { label:"High Risk",        level:"Level 4 / 4", color:"#dc2626", bg:"#fef2f2", border:"#fca5a5", badge:"#fee2e2" },
];
const CLASS_BADGE = [
  { bg:"#dcfce7", color:"#166534", border:"#86efac" },
  { bg:"#fef9c3", color:"#854d0e", border:"#fde047" },
  { bg:"#ffedd5", color:"#9a3412", border:"#fdba74" },
  { bg:"#fee2e2", color:"#991b1b", border:"#fca5a5" },
];

function getResults(answers) {
  const rl        = getRiskLevel(answers);
  const ri        = rl - 1;
  const meta      = RISK_META[ri];
  const badge     = CLASS_BADGE[ri];
  const isSW      = answers.software === "pure_sw" || answers.software === "hw_sw";
  const isSaMD    = isSW && ["diagnose","treat","predict","monitor"].includes(answers.purpose);
  const isHR      = rl >= 3;
  const mayNotBeMD= answers.purpose === "wellness" && answers.contact === "none";
  const jurs      = JURISDICTIONS.map(j => ({ ...j, class:j.cls[ri], route:j.route[ri], timeline:j.time[ri] }));
  const docs = [
    { title:"Core Technical File", bg:"#eff6ff", border:"#bfdbfe",
      items:["Technical Documentation / Design Dossier","Risk Management File (ISO 14971)","Intended Use & Indications for Use Statement","Labelling & Instructions for Use","Benefit–Risk Determination","Post-Market Surveillance Plan"] },
    { title:"Quality Management System", bg:"#f0fdf4", border:"#bbf7d0",
      items:["QMS to ISO 13485 (certificate or declaration)","Quality Manual & Controlled Procedures","Design & Development Controls & Records","Supplier / Subcontractor Management Records"] },
    { title:"Clinical & Performance Evidence", bg:"#fffbeb", border:"#fde68a",
      items: isHR
        ? ["Clinical Evaluation Report (CER)","Clinical Investigation Plan & Data","Post-Market Clinical Follow-up (PMCF) Plan","Periodic Safety Update Report (PSUR)","Summary of Safety & Clinical Performance (SSCP)"]
        : ["Clinical Evaluation Report (CER)","Literature Search & Critical Appraisal","Summary of Clinical Evidence"] },
    ...(isSW ? [{ title:"Software & Cybersecurity", bg:"#faf5ff", border:"#ddd6fe",
      items:["Software Development Lifecycle (IEC 62304)","Software Architecture & Design Documentation","Cybersecurity Risk Assessment & Controls","Usability Engineering File (IEC 62366)","SaMD Intended Purpose Statement (IMDRF N41)"] }] : []),
    ...(isHR ? [{ title:"Additional High-Risk Requirements", bg:"#fef2f2", border:"#fca5a5",
      items:["Notified / Assessment Body Review Package","Pre-submission / Q-Sub Meeting Records","Clinical Investigation Ethics Approvals","Field Safety Corrective Action (FSCA) Plan Template"] }] : []),
  ];
  return { rl, ri, meta, badge, isSW, isSaMD, isHR, mayNotBeMD, jurs, docs };
}

// ── Screens ───────────────────────────────────────────────────────────────
function HomeScreen({ onStart }) {
  return (
    <div className="rp">
      <style>{CSS}</style>
      <div className="rp-hero">
        <div className="rp-hero-inner">
          <div className="rp-hero-eye">
            <div style={{ width:6, height:6, borderRadius:"50%", background:"rgba(255,255,255,0.9)" }} />
            <span>16 JURISDICTIONS · FREE · OPEN REFERENCE</span>
          </div>
          <h1>Medical Device<br/>Regulatory Classifier</h1>
          <p>Answer 5 plain-English questions. Get indicative device classification, documentation requirements, and pathway timelines across all 16 RAPath jurisdictions — instantly.</p>
          <div className="rp-hero-stats">
            {[["16","Jurisdictions"],["5","Questions"],["3","Output Views"]].map(([n,l]) => (
              <div className="rp-stat" key={l}><div className="rp-stat-n">{n}</div><div className="rp-stat-l">{l}</div></div>
            ))}
          </div>
        </div>
      </div>
      <div className="rp-home-body">
        <p className="rp-section-label">Choose a starting point</p>
        <div className="rp-tool-grid">
          <button className="rp-cta-card" onClick={onStart}>
            <div>
              <div className="rp-cta-lbl">MOST USED</div>
              <div className="rp-cta-title">Device Classification Wizard</div>
              <div className="rp-cta-sub">Classification · Documentation · Pathway · 16 jurisdictions</div>
            </div>
            <div className="rp-cta-icon"><Stethoscope size={22} color="white" /></div>
          </button>
          <div className="rp-sec-grid">
            {[
              { lbl:"IS THIS A MEDICAL DEVICE?", title:"Quick Screener",  sub:"Not sure your product qualifies?", Icon:HelpCircle,  bg:"#f0fdf4", border:"#bbf7d0", ic:"#16a34a", ibg:"#dcfce7" },
              { lbl:"SAMD · AI · SOFTWARE",      title:"Software Track",  sub:"Apps, algorithms, AI/ML models",   Icon:Cpu,          bg:"#faf5ff", border:"#ddd6fe", ic:"#7c3aed", ibg:"#ede9fe" },
            ].map(c => (
              <button key={c.lbl} className="rp-sec-card" onClick={onStart} style={{ borderColor:c.border, background:c.bg }}>
                <div className="rp-sec-ico" style={{ background:c.ibg }}><c.Icon size={18} color={c.ic} /></div>
                <div className="rp-sec-lbl" style={{ color:c.ic }}>{c.lbl}</div>
                <div className="rp-sec-title">{c.title}</div>
                <div className="rp-sec-sub">{c.sub}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="rp-features">
          <p className="rp-section-label" style={{ marginBottom:0 }}>What you will receive</p>
          <div className="rp-feat-grid">
            {([
              [Globe,      "#2563eb","#eff6ff","Classification across 16 jurisdictions"],
              [FileText,   "#7c3aed","#faf5ff","Documentation checklist by risk level"],
              [Navigation, "#ea580c","#fff7ed","Regulatory pathway & timeline phases"],
              [Activity,   "#16a34a","#f0fdf4","SaMD & software-specific requirements"],
            ] as const).map(([Icon, c, bg, text]) => (
              <div className="rp-feat-item" key={text}>
                <div className="rp-feat-ico" style={{ background:bg }}><Icon size={15} color={c} /></div>
                <span className="rp-feat-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="rp-disc" style={{ marginTop:28 }}>
          Indicative guidance only — not regulatory or legal advice.<br/>
          Always verify requirements with the relevant competent authority.
        </p>
      </div>
    </div>
  );
}

function QuestionScreen({ step, total, question, answers, onAnswer, onBack }) {
  const [sel, setSel] = useState(answers[question.id] || null);
  const HARM_C = { minimal:"#16a34a", moderate:"#ca8a04", serious:"#ea580c", critical:"#dc2626" };
  const Q_ICONS = { purpose:Stethoscope, contact:Activity, software:Cpu, duration:Calendar, harm:AlertTriangle };
  const QIco = Q_ICONS[question.id] || Stethoscope;
  const pick = (v) => { setSel(v); setTimeout(() => onAnswer(question.id, v), 170); };
  return (
    <div className="rp">
      <style>{CSS}</style>
      <div className="rp-q-bar">
        <div className="rp-q-bar-inner">
          <button className="rp-back-btn" onClick={onBack}><ArrowLeft size={17} color="#64748b" /></button>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
              <span style={{ fontSize:12, color:"#94a3b8", fontWeight:600 }}>Question {step} of {total}</span>
              <span className="rp-pct">{Math.round((step / total) * 100)}%</span>
            </div>
            <div className="rp-dots">
              {Array.from({ length:total }).map((_, i) => (
                <div key={i} className={`rp-dot${i < step ? " done" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="rp-q-body">
        <div className="rp-q-ico-wrap"><QIco size={24} color="#2563eb" /></div>
        <h2 className="rp-q-title">{question.text}</h2>
        <p className="rp-q-hint">{question.hint}</p>
        <div className="rp-options">
          {question.opts.map(({ v, label, desc, Icon }) => {
            const isSel = sel === v;
            const hc = question.id === "harm" ? HARM_C[v] : "#2563eb";
            return (
              <button key={v} className={`rp-opt${isSel ? " sel" : ""}`} onClick={() => pick(v)}>
                <div className="rp-opt-ico" style={{ background: isSel ? "#2563eb" : `${hc}18` }}>
                  <Icon size={20} color={isSel ? "white" : hc} />
                </div>
                <div className="rp-opt-main">
                  <div className="rp-opt-label">{label}</div>
                  <div className="rp-opt-desc">{desc}</div>
                </div>
                {isSel && <div className="rp-opt-tick"><CheckCircle2 size={13} color="white" /></div>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const REGIONS = [
  { label:"Americas",     ids:["us","ca","br"] },
  { label:"Europe",       ids:["eu","uk","ch","ru"] },
  { label:"Asia Pacific", ids:["au","sg","jp","cn","in","kr","my","id","vn"] },
];

const PATHWAY = [
  { n:1, title:"Design & Development",      time:"3–12 mo",  desc:"Define intended use, design controls, risk management initiation (ISO 14971), mapping to general safety & performance requirements." },
  { n:2, title:"Technical Documentation",   time:"3–9 mo",   desc:"Compile the technical file — clinical evaluation, software documentation (IEC 62304 if applicable), labelling, IFU." },
  { n:3, title:"Quality Management System", time:"6–18 mo",  desc:"Implement and certify ISO 13485 QMS. Appoint Authorised Representatives / Local Regulatory Agents in each target market." },
  { n:4, title:"Conformity Assessment",     time:"6–18 mo",  desc:"Notified/approved body audit or regulatory authority technical review. Resolve any deficiencies and obtain certificates." },
  { n:5, title:"Registration & Licence",    time:"1–6 mo",   desc:"Submit jurisdiction applications, pay regulatory fees, receive registration certificates or licence numbers." },
  { n:6, title:"Post-Market Obligations",   time:"Ongoing",  desc:"Activate PMS plan, vigilance and FSCA reporting, Periodic Safety Update Reports, re-registration renewals." },
];

function ResultsScreen({ answers, onReset }) {
  const [tab, setTab] = useState("classification");
  const [exp, setExp] = useState(null);
  const { rl, ri, meta, badge, isSaMD, isHR, mayNotBeMD, jurs, docs } = getResults(answers);
  return (
    <div className="rp">
      <style>{CSS}</style>
      <div className="rp-risk-banner" style={{ background:meta.bg, borderBottomColor:meta.border }}>
        <div className="rp-risk-inner">
          <div>
            <div style={{ fontSize:10, fontWeight:700, color:meta.color, letterSpacing:1, marginBottom:4 }}>{meta.level.toUpperCase()} · {meta.label.toUpperCase()}</div>
            <div style={{ fontSize:18, fontWeight:700, color:"#0f172a" }}>Classification Results</div>
            <div style={{ fontSize:14, fontWeight:600, color:meta.color, marginTop:2 }}>{["Low risk device","Low–medium risk device","Medium–high risk device","High risk device"][ri]}</div>
            {mayNotBeMD && <div className="rp-not-md">⚠️ Based on your answers, this product <strong>may not qualify as a medical device</strong>. Verify against the device definition in each target jurisdiction.</div>}
          </div>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
            <div className="rp-risk-dots">{[1,2,3,4].map(l => <div key={l} className="rp-risk-dot" style={{ background: l <= rl ? meta.color : "#e2e8f0" }} />)}</div>
            <div style={{ display:"flex", gap:5, flexWrap:"wrap", justifyContent:"flex-end" }}>
              {isSaMD && <span className="rp-samd-tag">SaMD</span>}
              {isHR && <span className="rp-risk-tag" style={{ background:meta.badge, color:meta.color }}>High Risk</span>}
            </div>
          </div>
        </div>
      </div>
      <div className="rp-tabs-bar">
        <div className="rp-tabs-inner">
          {[
            { id:"classification", label:"Classification", Icon:Globe },
            { id:"documentation",  label:"Documentation",  Icon:FileText },
            { id:"pathway",        label:"Pathway",         Icon:Navigation },
          ].map(({ id, label, Icon }) => (
            <button key={id} className={`rp-tab${tab===id ? " active" : ""}`} onClick={() => setTab(id)}>
              <Icon size={14} />{label}
            </button>
          ))}
        </div>
      </div>
      <div className="rp-res-body">
        {tab === "classification" && (
          <div className="rp-regions">
            {REGIONS.map(region => (
              <div key={region.label}>
                <div className="rp-region-label">{region.label}</div>
                {jurs.filter(j => region.ids.includes(j.id)).map(j => {
                  const isExp = exp === j.id;
                  return (
                    <div key={j.id} className={`rp-jur-card${isExp ? " exp" : ""}`}>
                      <button className="rp-jur-btn" onClick={() => setExp(isExp ? null : j.id)}>
                        <span style={{ fontSize:22, lineHeight:1, flexShrink:0 }}>{j.flag}</span>
                        <div style={{ flex:1, minWidth:0 }}>
                          <div className="rp-jur-name">{j.name}</div>
                          <div className="rp-jur-reg">{j.reg}</div>
                        </div>
                        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:3, flexShrink:0 }}>
                          <span className="rp-cls-badge" style={{ background:badge.bg, color:badge.color, borderColor:badge.border }}>{j.class}</span>
                          <span className="rp-jur-time">{j.timeline}</span>
                        </div>
                        <ChevronDown size={15} color="#cbd5e1" style={{ flexShrink:0, marginLeft:4, transform: isExp ? "rotate(180deg)" : "none", transition:"transform 0.2s" }} />
                      </button>
                      {isExp && (
                        <div className="rp-jur-detail">
                          <div className="rp-detail-lbl">CONFORMITY ROUTE</div>
                          <div className="rp-detail-val">{j.route}</div>
                          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
                            <div>
                              <div className="rp-detail-lbl">ESTIMATED TIMELINE</div>
                              <span className="rp-tl-pill">{j.timeline}</span>
                            </div>
                            <a href={j.url} target="_blank" rel="noopener noreferrer" className="rp-ext-link">
                              <ExternalLink size={12} /> Full guide on RAPath
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        )}
        {tab === "documentation" && (
          <div className="rp-docs-grid">
            {docs.map(({ title, bg, border, items }) => (
              <div key={title} className="rp-doc-card" style={{ background:bg, borderColor:border }}>
                <div className="rp-doc-title">{title}</div>
                {items.map(item => (
                  <div key={item} className="rp-doc-item">
                    <CheckCircle2 size={14} color="#22c55e" style={{ marginTop:2, flexShrink:0 }} />
                    <span className="rp-doc-text">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
        {tab === "pathway" && (
          <div className="rp-timeline-wrap">
            <div className="rp-timeline">
              <div className="rp-tl-line" />
              {PATHWAY.map((p, i) => (
                <div key={p.n} className="rp-tl-step">
                  <div className="rp-tl-num" style={{ background: i === 0 ? "#2563eb" : "#f1f5f9", color: i === 0 ? "white" : "#94a3b8", border:`2px solid ${i === 0 ? "#2563eb" : "#e2e8f0"}` }}>{p.n}</div>
                  <div className="rp-tl-card">
                    <div className="rp-tl-head"><span className="rp-tl-title">{p.title}</span><span className="rp-tl-time">{p.time}</span></div>
                    <div className="rp-tl-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rp-warn">⚠️ Timelines are indicative estimates. Actual duration depends on device complexity, documentation completeness, and regulatory body workload. Engage a qualified regulatory affairs consultant early in the process.</div>
          </div>
        )}
        <button className="rp-reset" onClick={onReset}>Start New Assessment</button>
        <p className="rp-disc">
          Indicative guidance only. Not regulatory or legal advice.<br/>
          Always verify requirements against current authority publications before making regulatory decisions.
        </p>
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────
function App() {
  const [screen,  setScreen]  = useState("home");
  const [step,    setStep]    = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (id, val) => {
    const next = { ...answers, [id]: val };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setScreen("results");
  };

  const handleBack = () => {
    if (screen === "results") { setScreen("questions"); setStep(QUESTIONS.length - 1); return; }
    if (step > 0) setStep(step - 1);
    else setScreen("home");
  };

  const reset = () => { setScreen("home"); setStep(0); setAnswers({}); };

  return (
    <>
      {screen === "results"   && <ResultsScreen answers={answers} onReset={reset} />}
      {screen === "questions" && <QuestionScreen key={step} step={step + 1} total={QUESTIONS.length} question={QUESTIONS[step]} answers={answers} onAnswer={handleAnswer} onBack={handleBack} />}
      {screen === "home"      && <HomeScreen onStart={() => { setStep(0); setScreen("questions"); }} />}
    </>
  );
}

// ── Docusaurus page export ────────────────────────────────────────────────
export default function ClassifierPage() {
  return (
    <Layout
      title="Device Classifier"
      description="Indicative medical device classification across 16 jurisdictions"
    >
      <App />
    </Layout>
  );
}
