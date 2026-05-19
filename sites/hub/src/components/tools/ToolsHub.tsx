import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, X } from "lucide-react";

import "./tools.css";
import { BLUE, TOOLS, CATS, GROUP_LABELS, type Tool } from "./data/constants";
import { Classifier } from "./Classifier";
import { ToolFlow } from "./panels/ToolFlow";
import { ToolCompare } from "./panels/ToolCompare";
import { ToolGantt } from "./panels/ToolGantt";
import { ToolGlossary } from "./panels/ToolGlossary";
import { ToolMDSAP } from "./panels/ToolMDSAP";
import { ToolEcomap } from "./panels/ToolEcomap";
import { ToolGSPR } from "./panels/ToolGSPR";
import { ToolClinical } from "./panels/ToolClinical";
import { ToolLabel } from "./panels/ToolLabel";
import { ToolPMO } from "./panels/ToolPMO";
import { ToolFee } from "./panels/ToolFee";
import { ToolImport } from "./panels/ToolImport";
import { ToolDistrib } from "./panels/ToolDistrib";
import { ToolChecklist } from "./panels/ToolChecklist";
import { ToolGap } from "./panels/ToolGap";
import { ToolIVD } from "./panels/ToolIVD";
import { ToolSaMD } from "./panels/ToolSaMD";
import { ToolCyber } from "./panels/ToolCyber";

// ── Panel content map ─────────────────────────────────────────────────────
const PANELS: Record<string, React.ComponentType> = {
  flow: ToolFlow,
  compare: ToolCompare,
  gantt: ToolGantt,
  glossary: ToolGlossary,
  mdsap: ToolMDSAP,
  ecomap: ToolEcomap,
  gspr: ToolGSPR,
  clinical: ToolClinical,
  label: ToolLabel,
  pmo: ToolPMO,
  fee: ToolFee,
  import: ToolImport,
  distrib: ToolDistrib,
  checklist: ToolChecklist,
  gap: ToolGap,
  ivd: ToolIVD,
  samd: ToolSaMD,
  cyber: ToolCyber,
};

// ── Subcomponents ─────────────────────────────────────────────────────────
function ToolCard({ tool, active, onToggle }: { tool: Tool; active: boolean; onToggle: () => void }) {
  return (
    <button className={`th-card${active ? " on" : ""}`} onClick={onToggle}>
      <div className="th-card-ico" style={{ background: tool.bg }}>
        <tool.Icon size={21} color={tool.ic} />
      </div>
      <div className="th-card-tag" style={{ background: tool.tagBg, color: tool.tagColor }}>
        {tool.tag}
      </div>
      <div className="th-card-nm">{tool.name}</div>
      <div className="th-card-desc">{tool.desc}</div>
      <div className="th-card-arr"><ChevronRight size={15} color={BLUE} /></div>
    </button>
  );
}

function ToolPanel({ tool, onClose }: { tool: Tool; onClose: () => void }) {
  const Content = tool.id === "classifier" ? Classifier : PANELS[tool.id];
  if (!Content) return null;
  return (
    <div className="th-panel">
      <div className="th-panel-hd">
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: tool.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <tool.Icon size={16} color={tool.ic} />
            </div>
            <span style={{ background: tool.tagBg, color: tool.tagColor, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 10 }}>
              {tool.tag}
            </span>
          </div>
          <div className="th-panel-title">{tool.name}</div>
          <div className="th-panel-sub">{tool.desc}</div>
        </div>
        <button className="th-close" onClick={onClose}><X size={15} color="#64748b" /></button>
      </div>
      <div className="th-panel-body"><Content /></div>
    </div>
  );
}

// ── Main Hub ──────────────────────────────────────────────────────────────
export default function ToolsHub(): JSX.Element {
  const [cat, setCat] = useState("all");
  const [active, setActive] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active && panelRef.current) {
      setTimeout(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [active]);

  const visible = cat === "all" ? TOOLS : TOOLS.filter(t => t.cat === cat);
  const activeTool = active ? TOOLS.find(t => t.id === active) : null;
  const toggle = (id: string) => setActive(prev => prev === id ? null : id);

  const CAT_ORDER = ["classify", "general", "mfr", "import", "ra", "sw"];
  const grouped = CAT_ORDER.map(catId => ({
    catId, label: GROUP_LABELS[catId],
    tools: TOOLS.filter(t => t.cat === catId),
  }));

  return (
    <div className="th">
      <div className="th-hero">
        <div className="th-hero-in">
          <div className="th-hero-tag">
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,.9)" }} />
            19 FREE TOOLS · 19 JURISDICTIONS · NO AI REQUIRED
          </div>
          <h1>Regulatory Intelligence<br />for Medical Devices</h1>
          <p>Every tool a regulatory professional, manufacturer, importer, or consultant needs — device classification, process flows, comparison tables, checklists, gap analysis, and more.</p>
          <div className="th-stats">
            {[["19", "Free tools"], ["19", "Jurisdictions"], ["5", "User types"]].map(([n, l]) => (
              <div key={l}><div className="th-stat-n">{n}</div><div className="th-stat-l">{l}</div></div>
            ))}
          </div>
        </div>
      </div>

      <div className="th-body">
        <div className="th-cats">
          {CATS.map(c => (
            <button key={c.id} className={`th-cat${cat === c.id ? " on" : ""}`}
              onClick={() => { setCat(c.id); setActive(null); }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", opacity: .7 }} />
              {c.label}
              <span style={{ fontSize: 11, opacity: .7 }}>({c.count})</span>
            </button>
          ))}
        </div>

        {cat === "all" ? (
          grouped.map(({ catId, label, tools }) => tools.length === 0 ? null : (
            <div key={catId}>
              <p className="th-sec-hd">{label}</p>
              <div className="th-grid">
                {tools.map(t => <ToolCard key={t.id} tool={t} active={active === t.id} onToggle={() => toggle(t.id)} />)}
              </div>
            </div>
          ))
        ) : (
          <div className="th-grid">
            {visible.map(t => <ToolCard key={t.id} tool={t} active={active === t.id} onToggle={() => toggle(t.id)} />)}
          </div>
        )}

        {activeTool && (
          <div ref={panelRef}>
            <ToolPanel tool={activeTool} onClose={() => setActive(null)} />
          </div>
        )}

        <p className="th-disc">
          Independent open-source project. All tools are based on publicly available
          regulatory information and provide indicative guidance only — not regulatory
          or legal advice.<br />
          Always verify requirements with the relevant competent authority before
          making regulatory decisions.<br />
          Part of RAPath · <a href="https://rapath.github.io/" style={{ color: BLUE }}>rapath.github.io</a>
        </p>
      </div>
    </div>
  );
}
