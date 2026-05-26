import {
  GitBranch, Table2, GanttChart, BookOpen,
  ClipboardCheck, Users, Award, Cpu,
  Layers, FlaskConical, Tag, Clock, DollarSign,
  Package, Truck, BarChart3, Microscope, Shield,
} from "lucide-react";
import type { ComponentType } from "react";

// ── Brand colours ─────────────────────────────────────────────────────────
export const BLUE = "#2563eb";
export const NAVY = "#0f172a";

// ── Category tabs ─────────────────────────────────────────────────────────
export interface Category { id: string; label: string; count: number; }

export const CATS: Category[] = [
  { id:"all",     label:"All Tools",                count:19 },
  { id:"classify",label:"Device Classifier",        count:1  },
  { id:"general", label:"General",                  count:5  },
  { id:"mfr",     label:"Manufacturers",            count:5  },
  { id:"import",  label:"Importers & Distributors", count:3  },
  { id:"ra",      label:"RA Consultants",           count:3  },
  { id:"sw",      label:"Software / SaMD",          count:2  },
];

// ── Tool registry ─────────────────────────────────────────────────────────
export interface Tool {
  id: string; cat: string; name: string; tag: string;
  tagBg: string; tagColor: string; bg: string; ic: string;
  Icon: ComponentType<{ size?: number; color?: string }>;
  desc: string;
}

export const TOOLS: Tool[] = [
  // ── Classifier (1) ───────────────────────────────────────────────────────
  { id:"classifier", cat:"classify", name:"Device Classification Wizard",
    tag:"CLASSIFIER", tagBg:"#dbeafe", tagColor:"#1e40af", bg:"#eff6ff", ic:BLUE, Icon:Layers,
    desc:"5 questions. Indicative classification, documentation checklist, and pathway timelines across all 24 RAPath jurisdictions. Includes Quick Screener and SaMD track." },

  // ── General (5) ──────────────────────────────────────────────────────────
  { id:"flow",    cat:"general", name:"Regulatory Process Flow",
    tag:"VISUAL",    tagBg:"#dbeafe", tagColor:"#1e40af", bg:"#eff6ff", ic:BLUE,      Icon:GitBranch,
    desc:"Interactive 7-phase flowchart with jurisdiction-specific notes and per-phase checklists." },
  { id:"compare", cat:"general", name:"Jurisdiction Comparison Tables",
    tag:"ANALYSIS",  tagBg:"#dcfce7", tagColor:"#166534", bg:"#f0fdf4", ic:"#16a34a", Icon:Table2,
    desc:"Side-by-side comparison of PMS, UDI, authorised reps, vigilance, and QMS across 24 markets." },
  { id:"gantt",   cat:"general", name:"Regulatory Timeline Planner",
    tag:"PLANNING",  tagBg:"#fef9c3", tagColor:"#854d0e", bg:"#fefce8", ic:"#ca8a04", Icon:GanttChart,
    desc:"Gantt-style view of overlapping regulatory phases, adjustable by device class." },
  { id:"glossary",cat:"general", name:"Acronym & Glossary Lookup",
    tag:"REFERENCE", tagBg:"#fce7f3", tagColor:"#9d174d", bg:"#fdf2f8", ic:"#db2777", Icon:BookOpen,
    desc:"Searchable glossary of 100+ regulatory terms and acronyms across all 24 jurisdictions." },
  { id:"mdsap",   cat:"general", name:"MDSAP Value Map",
    tag:"STRATEGY",  tagBg:"#ede9fe", tagColor:"#5b21b6", bg:"#faf5ff", ic:"#7c3aed", Icon:Award,
    desc:"What MDSAP gets you in each jurisdiction — full recognition, partial credit, or no benefit." },

  // ── Manufacturers (5) ────────────────────────────────────────────────────
  { id:"gspr",    cat:"mfr", name:"GSPR / Essential Req. Mapper",
    tag:"TECHNICAL",  tagBg:"#dcfce7", tagColor:"#166534", bg:"#f0fdf4", ic:"#16a34a", Icon:Layers,
    desc:"Map applicable General Safety & Performance Requirements to your device type with evidence guidance." },
  { id:"clinical",cat:"mfr", name:"Clinical Evidence Calculator",
    tag:"CLINICAL",   tagBg:"#fce7f3", tagColor:"#9d174d", bg:"#fdf2f8", ic:"#db2777", Icon:FlaskConical,
    desc:"Determine the level of clinical evidence required by device class, novelty, and equivalence approach." },
  { id:"label",   cat:"mfr", name:"Labelling Requirements Checker",
    tag:"LABELLING",  tagBg:"#ffedd5", tagColor:"#9a3412", bg:"#fff7ed", ic:"#ea580c", Icon:Tag,
    desc:"Mandatory label elements, language requirements, eIFU eligibility, and UDI placement by jurisdiction." },
  { id:"pmo",     cat:"mfr", name:"Post-Market Obligations Calendar",
    tag:"POST-MARKET",tagBg:"#fef9c3", tagColor:"#854d0e", bg:"#fefce8", ic:"#ca8a04", Icon:Clock,
    desc:"What you must do — and when — after market entry. Vigilance timeframes, PSUR cycles, and renewal windows across all 24 jurisdictions." },
  { id:"fee",     cat:"mfr", name:"Regulatory Fee Estimator",
    tag:"PLANNING",   tagBg:"#ede9fe", tagColor:"#5b21b6", bg:"#faf5ff", ic:"#7c3aed", Icon:DollarSign,
    desc:"Approximate government registration fees per jurisdiction — planning purposes only." },

  // ── Importers & Distributors (3) ─────────────────────────────────────────
  { id:"import",   cat:"import", name:"Import Requirements Checker",
    tag:"IMPORT",    tagBg:"#dcfce7", tagColor:"#166534", bg:"#f0fdf4", ic:"#16a34a", Icon:Package,
    desc:"Licences, permits, and appointments an importer needs before a device can legally cross the border." },
  { id:"distrib",  cat:"import", name:"Distributor Obligations Guide",
    tag:"COMPLIANCE",tagBg:"#dbeafe", tagColor:"#1e40af", bg:"#eff6ff", ic:BLUE,      Icon:Truck,
    desc:"Verification steps, record-keeping obligations, when relabelling triggers manufacturer status, FSCA duties." },
  { id:"checklist",cat:"import", name:"Submission Readiness Checklist",
    tag:"ACTION",    tagBg:"#dcfce7", tagColor:"#166534", bg:"#f0fdf4", ic:"#16a34a", Icon:ClipboardCheck,
    desc:"Track submission readiness across 42 items with a live progress bar." },

  // ── RA Consultants (3) ───────────────────────────────────────────────────
  { id:"gap",    cat:"ra", name:"Regulatory Gap Analysis",
    tag:"STRATEGY",  tagBg:"#fce7f3", tagColor:"#9d174d", bg:"#fdf2f8", ic:"#db2777", Icon:BarChart3,
    desc:"Already approved in one market? Identify what extra requirements apply for each new target jurisdiction." },
  { id:"ivd",    cat:"ra", name:"IVD Classification Track",
    tag:"IVD",       tagBg:"#ffedd5", tagColor:"#9a3412", bg:"#fff7ed", ic:"#ea580c", Icon:Microscope,
    desc:"Dedicated IVD classifier — EU IVDR List A/B, FDA, TGA, HSA; analyte type, professional vs self-test." },
  { id:"ecomap", cat:"ra", name:"Economic Operator Map",
    tag:"COMPLIANCE",tagBg:"#dbeafe", tagColor:"#1e40af", bg:"#eff6ff", ic:BLUE,      Icon:Users,
    desc:"Required roles — manufacturer, importer, authorised rep — and their legal obligations per jurisdiction." },

  // ── Software / SaMD (2) ──────────────────────────────────────────────────
  { id:"samd",  cat:"sw", name:"SaMD Decision Tree",
    tag:"SAMD",      tagBg:"#ede9fe", tagColor:"#5b21b6", bg:"#faf5ff", ic:"#7c3aed", Icon:Cpu,
    desc:"IMDRF N41 risk matrix with FDA classification mapping and 'is my app a medical device?' screener." },
  { id:"cyber", cat:"sw", name:"Cybersecurity Requirements",
    tag:"SOFTWARE",  tagBg:"#dbeafe", tagColor:"#1e40af", bg:"#eff6ff", ic:BLUE,      Icon:Shield,
    desc:"Cybersecurity standards, SBOM requirements, documentation obligations, pre and post-market duties by jurisdiction." },
];

// ── Group labels for "All" view ───────────────────────────────────────────
export const GROUP_LABELS: Record<string, string> = {
  classify: "Device Classifier",
  general:  "General Tools",
  mfr:      "For Manufacturers",
  import:   "For Importers & Distributors",
  ra:       "For RA Consultants",
  sw:       "Software & SaMD",
};

// ── Risk level metadata ───────────────────────────────────────────────────
export const RISK_META = [
  { label:"Low Risk",         level:"Level 1 / 4", color:"#16a34a", bg:"#f0fdf4", border:"#86efac", badge:"#dcfce7" },
  { label:"Low–Medium Risk",  level:"Level 2 / 4", color:"#ca8a04", bg:"#fefce8", border:"#fde047", badge:"#fef9c3" },
  { label:"Medium–High Risk", level:"Level 3 / 4", color:"#ea580c", bg:"#fff7ed", border:"#fdba74", badge:"#ffedd5" },
  { label:"High Risk",        level:"Level 4 / 4", color:"#dc2626", bg:"#fef2f2", border:"#fca5a5", badge:"#fee2e2" },
];

export const CLASS_BADGE = [
  { bg:"#dcfce7", color:"#166534", border:"#86efac" },
  { bg:"#fef9c3", color:"#854d0e", border:"#fde047" },
  { bg:"#ffedd5", color:"#9a3412", border:"#fdba74" },
  { bg:"#fee2e2", color:"#991b1b", border:"#fca5a5" },
];
