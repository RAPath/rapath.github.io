// Pure classification logic — no JSX, fully unit-testable.
//
// Classification framework:
//   Primary: EU MDR 2017/745 Annex VIII Rules 1–22
//   SaMD:    IMDRF SaMD N41 / N55 risk categorisation
//   Other:   General GHTF risk-based principles applied to non-EU jurisdictions
//
// getRiskLevel returns 1 (low) → 4 (high), mapping to each jurisdiction's
// cls[] index in jurisdictions.ts.

import { JURISDICTIONS, type Jurisdiction } from "./jurisdictions";
import { RISK_META, CLASS_BADGE }            from "./constants";

export interface Answers {
  purpose?:  string;
  contact?:  string;
  software?: string;
  duration?: string;
  harm?:     string;
}

export interface JurisdictionResult extends Jurisdiction {
  class:    string;
  route:    string;
  timeline: string;
}

export interface DocGroup {
  title:  string;
  bg:     string;
  border: string;
  items:  string[];
}

export interface ClassifierResults {
  riskLevel:   number;           // 1–4
  riskIndex:   number;           // 0–3 (riskLevel - 1)
  meta:        typeof RISK_META[0];
  badge:       typeof CLASS_BADGE[0];
  isSoftware:  boolean;
  isSaMD:      boolean;
  isHighRisk:  boolean;
  mayNotBeMD:  boolean;
  jurisdictions: JurisdictionResult[];
  docs:        DocGroup[];
}

// ── Risk classification ───────────────────────────────────────────────────

export function getRiskLevel(answers: Answers): number {
  const { contact, software, duration, harm, purpose } = answers;

  const isSW       = software === "pure_sw" || software === "hw_sw";
  const h          = ({ minimal:1, moderate:2, serious:3, critical:4 } as Record<string,number>)[harm ?? ""] ?? 1;
  const d          = ({ transient:1, na:1, short:2, long:3 }           as Record<string,number>)[duration ?? ""] ?? 1;

  // SaMD — clinical decision support (diagnose / treat / predict)
  // EU MDR Rule 11: IIa minimum; IIb if serious harm; III if death/irreversible
  const clinDecSW  = isSW && ["diagnose","treat","predict"].includes(purpose ?? "");

  // SaMD — monitoring physiological processes
  // EU MDR Rule 11: IIa minimum; IIb if vital parameter / immediate danger risk
  // NOTE: Monitoring SaMD is CAPPED at Class IIb (level 3) — does NOT escalate to III
  const monitorSW  = isSW && purpose === "monitor";

  // Implantable — minimum IIb; escalates to III with serious+ harm
  if (contact === "implantable")        return h >= 3 ? 4 : 3;

  // Surgically invasive — IIa minimum; escalates with harm severity and long duration
  if (contact === "invasive_surgical")  return h >= 4 ? 4 : (h >= 3 || d >= 3) ? 3 : 2;

  // Clinical decision SaMD — escalates up to Class III
  if (clinDecSW)                        return h >= 4 ? 4 : h >= 3 ? 3 : 2;

  // Monitoring SaMD — capped at IIb per EU MDR Rule 11
  if (monitorSW)                        return h >= 3 ? 3 : 2;

  // Natural orifice — IIa minimum; escalates with critical harm or long-term use
  if (contact === "invasive_natural")   return (h >= 4 || d >= 3) ? 3 : 2;

  // Surface contact — Class I for low harm; IIa with serious+ harm
  if (contact === "surface")            return h >= 3 ? 2 : 1;

  // No contact / wellness SW / general non-clinical / external equipment
  return h >= 3 ? 2 : 1;
}

// ── Full results builder ──────────────────────────────────────────────────

export function getResults(answers: Answers): ClassifierResults {
  const riskLevel  = getRiskLevel(answers);
  const riskIndex  = riskLevel - 1;
  const meta       = RISK_META[riskIndex];
  const badge      = CLASS_BADGE[riskIndex];

  const isSoftware = answers.software === "pure_sw" || answers.software === "hw_sw";
  const isSaMD     = isSoftware && ["diagnose","treat","predict","monitor"].includes(answers.purpose ?? "");
  const isHighRisk = riskLevel >= 3;
  const mayNotBeMD = answers.purpose === "wellness" && answers.contact === "none";

  const jurisdictions: JurisdictionResult[] = JURISDICTIONS.map(j => ({
    ...j,
    class:    j.cls[riskIndex],
    route:    j.route[riskIndex],
    timeline: j.time[riskIndex],
  }));

  const docs: DocGroup[] = [
    {
      title:"Core Technical File",
      bg:"#eff6ff", border:"#bfdbfe",
      items:[
        "Technical Documentation / Design Dossier",
        "Risk Management File (ISO 14971)",
        "Intended Use & Indications for Use Statement",
        "Labelling & Instructions for Use",
        "Benefit–Risk Determination",
        "Post-Market Surveillance Plan",
      ],
    },
    {
      title:"Quality Management System",
      bg:"#f0fdf4", border:"#bbf7d0",
      items:[
        "QMS to ISO 13485 (certificate or declaration)",
        "Quality Manual & Controlled Procedures",
        "Design & Development Controls & Records",
        "Supplier / Subcontractor Management Records",
      ],
    },
    {
      title:"Clinical & Performance Evidence",
      bg:"#fffbeb", border:"#fde68a",
      items: isHighRisk
        ? ["Clinical Evaluation Report (CER)","Clinical Investigation Plan & Data","Post-Market Clinical Follow-up (PMCF) Plan","Periodic Safety Update Report (PSUR)","Summary of Safety & Clinical Performance (SSCP)"]
        : ["Clinical Evaluation Report (CER)","Literature Search & Critical Appraisal","Summary of Clinical Evidence"],
    },
    ...(isSoftware ? [{
      title:"Software & Cybersecurity",
      bg:"#faf5ff", border:"#ddd6fe",
      items:[
        "Software Development Lifecycle (IEC 62304)",
        "Software Architecture & Design Documentation",
        "Cybersecurity Risk Assessment & Controls",
        "Usability Engineering File (IEC 62366)",
        "SaMD Intended Purpose Statement (IMDRF N41)",
      ],
    }] : []),
    ...(isHighRisk ? [{
      title:"Additional High-Risk Requirements",
      bg:"#fef2f2", border:"#fca5a5",
      items:[
        "Notified / Assessment Body Review Package",
        "Pre-submission / Q-Sub Meeting Records",
        "Clinical Investigation Ethics Approvals",
        "Field Safety Corrective Action (FSCA) Plan Template",
      ],
    }] : []),
  ];

  return { riskLevel, riskIndex, meta, badge, isSoftware, isSaMD, isHighRisk, mayNotBeMD, jurisdictions, docs };
}
