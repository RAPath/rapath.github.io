import {
  Stethoscope, Syringe, Activity, Microscope, ShieldCheck, HelpCircle,
  Wifi, Fingerprint, Droplets, Scissors, Anchor,
  Cpu, CircuitBoard, Wrench,
  Zap, Calendar, CalendarCheck, Minus,
  CheckCircle2, AlertCircle, AlertTriangle, AlertOctagon,
} from "lucide-react";
import type { ComponentType } from "react";

export interface QuestionOption {
  v:    string;
  label: string;
  desc:  string;
  Icon:  ComponentType<{ size?: number; color?: string }>;
}

export interface Question {
  id:   string;
  text: string;
  hint: string;
  opts: QuestionOption[];
}

export const QUESTIONS: Question[] = [
  {
    id:"purpose",
    text:"What is the primary purpose of your product?",
    hint:"Choose the closest match to the main intended medical use.",
    opts:[
      { v:"diagnose", label:"Diagnose a condition or disease",               Icon:Stethoscope, desc:"e.g. imaging system, IVD, diagnostic algorithm" },
      { v:"treat",    label:"Treat, relieve or compensate for a condition",  Icon:Syringe,     desc:"e.g. therapeutic device, implant, drug delivery" },
      { v:"monitor",  label:"Monitor a physiological parameter",             Icon:Activity,    desc:"e.g. ECG, glucose monitor, wearable sensor" },
      { v:"predict",  label:"Predict, screen or detect a risk",              Icon:Microscope,  desc:"e.g. screening tool, risk algorithm, AI triage" },
      { v:"prevent",  label:"Prevent disease or control conception",         Icon:ShieldCheck, desc:"e.g. barrier device, prophylactic instrument" },
      { v:"wellness", label:"General wellness — not sure if medical device", Icon:HelpCircle,  desc:"e.g. fitness tracker, wellness app, lifestyle tool" },
    ],
  },
  {
    id:"contact",
    text:"How does your product interact with the human body?",
    hint:"Select the highest level of contact your device has.",
    opts:[
      { v:"none",              label:"No body contact — external or data only",     Icon:Wifi,        desc:"e.g. standalone software, remote monitor, analyser" },
      { v:"surface",           label:"Non-invasive surface contact",                Icon:Fingerprint, desc:"e.g. ECG electrodes, wound dressing, external probe" },
      { v:"invasive_natural",  label:"Invasive via a natural body opening",         Icon:Droplets,    desc:"e.g. endoscope, catheter, nasal or oral device" },
      { v:"invasive_surgical", label:"Surgically invasive — incision or puncture",  Icon:Scissors,    desc:"e.g. surgical instrument, cannula, hypodermic needle" },
      { v:"implantable",       label:"Implantable — intended to remain in body",    Icon:Anchor,      desc:"e.g. pacemaker, orthopaedic implant, cochlear device" },
    ],
  },
  {
    id:"software",
    text:"Is your product software, or does it contain software?",
    hint:"Includes apps, algorithms, AI/ML models, firmware and clinical decision support tools.",
    opts:[
      { v:"pure_sw",  label:"Pure software / app / algorithm / AI or ML",  Icon:Cpu,          desc:"No physical hardware component" },
      { v:"hw_sw",    label:"Hardware device with embedded software",       Icon:CircuitBoard, desc:"Software drives or controls the device function" },
      { v:"hw_only",  label:"Hardware only — no software component",        Icon:Wrench,       desc:"Purely mechanical, electrical or material-based" },
    ],
  },
  {
    id:"duration",
    text:"What is the intended duration of use or body contact?",
    hint:"Per treatment episode or application — not the product's total lifespan.",
    opts:[
      { v:"transient", label:"Transient — less than 60 minutes",  Icon:Zap,          desc:"Single use or brief contact per application" },
      { v:"short",     label:"Short-term — up to 30 days",        Icon:Calendar,     desc:"Continuous or intermittent use ≤ 30 days" },
      { v:"long",      label:"Long-term — more than 30 days",     Icon:CalendarCheck,desc:"Continuous or intermittent use > 30 days" },
      { v:"na",        label:"Not applicable — no body contact",  Icon:Minus,        desc:"External device, software only, or remote system" },
    ],
  },
  {
    id:"harm",
    text:"What is the potential impact if your product fails or gives incorrect output?",
    hint:"Consider the realistic worst-case clinical scenario for a patient.",
    opts:[
      { v:"minimal",  label:"Minimal — no realistic clinical consequence",    Icon:CheckCircle2,  desc:"Failure causes no patient injury or clinical harm" },
      { v:"moderate", label:"Moderate — delayed or sub-optimal treatment",    Icon:AlertCircle,   desc:"Failure leads to less effective care, not direct injury" },
      { v:"serious",  label:"Serious — injury, hospitalisation or surgery",   Icon:AlertTriangle, desc:"Failure may cause reversible but serious patient harm" },
      { v:"critical", label:"Critical — death or irreversible deterioration", Icon:AlertOctagon,  desc:"Failure may cause death or permanent patient harm" },
    ],
  },
];
