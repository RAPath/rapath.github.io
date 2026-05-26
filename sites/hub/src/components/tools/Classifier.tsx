import React, { useState } from "react";
import {
  Stethoscope, ArrowLeft, CheckCircle2,
  ChevronDown, ExternalLink, Globe, FileText, Navigation,
  HelpCircle, Cpu,
} from "lucide-react";

import { BLUE, RISK_META }                                                from "./data/constants";
import { QUESTIONS }                                                      from "./data/questions";
import { REGIONS }                                                        from "./data/jurisdictions";
import { getRiskLevel, getResults, type Answers, type ClassifierResults } from "./data/classifier-logic";

// ── Screen: Home ──────────────────────────────────────────────────────────
function HomeScreen({ onStart, onStartSaMD }: { onStart: () => void; onStartSaMD: () => void }) {
  return (
    <div>
      <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, marginBottom: 24 }}>
        Answer 5 plain-English questions and receive indicative device classification,
        required documentation, and pathway timelines across all 24 RAPath jurisdictions.
      </p>

      {/* Primary CTA */}
      <button onClick={onStart} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, width: "100%", background: BLUE, color: "white", border: "none", borderRadius: 14, padding: "20px 22px", cursor: "pointer", fontFamily: "inherit", marginBottom: 14, boxShadow: "0 4px 20px rgba(37,99,235,.28)", transition: "all .15s" }}>
        <div style={{ textAlign: "left" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1, opacity: .75, marginBottom: 6 }}>MOST USED</div>
          <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 4 }}>Device Classification Wizard</div>
          <div style={{ fontSize: 12, opacity: .85 }}>5 questions · 24 jurisdictions · Classification, documentation &amp; pathway</div>
        </div>
        <div style={{ width: 46, height: 46, minWidth: 46, borderRadius: 13, background: "rgba(255,255,255,.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Stethoscope size={22} />
        </div>
      </button>

      {/* Secondary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
        {/* Quick Screener */}
        <button onClick={onStart} style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: 14, padding: "18px 16px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all .15s" }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: "white", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
            <HelpCircle size={18} color="#16a34a" />
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#16a34a", letterSpacing: .6, marginBottom: 4 }}>IS THIS A MEDICAL DEVICE?</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>Quick Screener</div>
          <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}>Not sure if your product qualifies? Start here.</div>
        </button>

        {/* Software / SaMD Track */}
        <button onClick={onStartSaMD} style={{ background: "#faf5ff", border: "1.5px solid #ddd6fe", borderRadius: 14, padding: "18px 16px", cursor: "pointer", textAlign: "left", fontFamily: "inherit", transition: "all .15s" }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: "white", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
            <Cpu size={18} color="#7c3aed" />
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, color: "#7c3aed", letterSpacing: .6, marginBottom: 4 }}>SAMD · AI · SOFTWARE</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>Software Track</div>
          <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.4 }}>Apps, algorithms, AI/ML models.</div>
        </button>
      </div>

      {/* What you get */}
      <div style={{ background: "#f8fafc", borderRadius: 14, padding: "16px 18px", marginBottom: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>What the wizard provides</div>
        {[
          [BLUE,      "#eff6ff", "Classification across all 24 jurisdictions"],
          ["#7c3aed", "#faf5ff", "Documentation checklist by risk level"],
          ["#ea580c", "#fff7ed", "Regulatory pathway phases with timelines"],
          ["#16a34a", "#f0fdf4", "SaMD & software-specific requirements"],
        ].map(([c, bg, text]) => (
          <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 9 }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Globe size={14} color={c} />
            </div>
            <span style={{ fontSize: 13, color: "#374151" }}>{text}</span>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.7 }}>
        Indicative guidance only — not regulatory or legal advice.<br />
        Always verify requirements with the relevant competent authority.
      </p>
    </div>
  );
}

// ── Screen: Question ──────────────────────────────────────────────────────
const HARM_COLORS: Record<string, string> = {
  minimal: "#16a34a", moderate: "#ca8a04", serious: "#ea580c", critical: "#dc2626",
};
const Q_ICONS: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  purpose: Stethoscope, contact: Globe, software: FileText, duration: Navigation, harm: CheckCircle2,
};

function QuestionScreen({
  step, total, question, answers, onAnswer, onBack,
}: {
  step: number; total: number;
  question: (typeof QUESTIONS)[0];
  answers: Answers;
  onAnswer: (id: string, val: string) => void;
  onBack: () => void;
}) {
  const [sel, setSel] = useState<string>(answers[question.id as keyof Answers] ?? "");
  const QIco = Q_ICONS[question.id] ?? Stethoscope;
  const pick = (v: string) => { setSel(v); setTimeout(() => onAnswer(question.id, v), 170); };

  return (
    <div>
      <div className="th-q-bar">
        <div className="th-q-bar-in">
          <button className="th-back-btn" onClick={onBack}><ArrowLeft size={17} color="#64748b" /></button>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>Question {step} of {total}</span>
              <span className="th-pct">{Math.round((step / total) * 100)}%</span>
            </div>
            <div className="th-dots">
              {Array.from({ length: total }).map((_, i) => (
                <div key={i} className={`th-dot${i < step ? " done" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="th-q-body">
        <div className="th-q-ico-wrap"><QIco size={24} color={BLUE} /></div>
        <h2 className="th-q-title">{question.text}</h2>
        <p className="th-q-hint">{question.hint}</p>
        <div className="th-options">
          {question.opts.map(({ v, label, desc, Icon }) => {
            const isSel = sel === v;
            const hc    = question.id === "harm" ? (HARM_COLORS[v] ?? BLUE) : BLUE;
            return (
              <button key={v} className={`th-opt${isSel ? " sel" : ""}`} onClick={() => pick(v)}>
                <div className="th-opt-ico" style={{ background: isSel ? BLUE : `${hc}18` }}>
                  <Icon size={20} color={isSel ? "white" : hc} />
                </div>
                <div className="th-opt-main">
                  <div className="th-opt-label">{label}</div>
                  <div className="th-opt-desc">{desc}</div>
                </div>
                {isSel && <div className="th-opt-tick"><CheckCircle2 size={13} color="white" /></div>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Screen: Results ───────────────────────────────────────────────────────
const PATHWAY = [
  { n: 1, title: "Design & Development",      time: "3–12 mo",  desc: "Define intended use, design controls, risk management initiation (ISO 14971), mapping to general safety & performance requirements." },
  { n: 2, title: "Technical Documentation",   time: "3–9 mo",   desc: "Compile technical file — clinical evaluation, software documentation (IEC 62304 if applicable), labelling, IFU." },
  { n: 3, title: "Quality Management System", time: "6–18 mo",  desc: "Implement and certify ISO 13485. Appoint Authorised Representatives / Local Regulatory Agents in each target market." },
  { n: 4, title: "Conformity Assessment",     time: "6–18 mo",  desc: "Notified/approved body audit or regulatory authority technical review. Resolve deficiencies and obtain certificates." },
  { n: 5, title: "Registration & Licence",    time: "1–6 mo",   desc: "Submit jurisdiction applications, pay regulatory fees, receive registration certificates or licence numbers." },
  { n: 6, title: "Post-Market Obligations",   time: "Ongoing",  desc: "Activate PMS plan, vigilance and FSCA reporting, Periodic Safety Update Reports, re-registration renewals." },
];

function ResultsScreen({ results, onReset }: { results: ClassifierResults; onReset: () => void }) {
  const [tab, setTab] = useState<"classification" | "documentation" | "pathway">("classification");
  const [exp, setExp] = useState<string | null>(null);
  const { riskLevel, riskIndex, meta, badge, isSaMD, isHighRisk, mayNotBeMD, jurisdictions, docs } = results;

  return (
    <div>
      <div className="th-risk-banner" style={{ background: meta.bg, borderBottomColor: meta.border }}>
        <div className="th-risk-inner">
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, color: meta.color, letterSpacing: 1, marginBottom: 4 }}>
              {meta.level.toUpperCase()} · {meta.label.toUpperCase()}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>Classification Results</div>
            <div style={{ fontSize: 14, fontWeight: 600, color: meta.color, marginTop: 2 }}>
              {["Low risk device", "Low–medium risk device", "Medium–high risk device", "High risk device"][riskIndex]}
            </div>
            {mayNotBeMD && (
              <div className="th-not-md">
                ⚠️ Based on your answers, this product <strong>may not qualify as a medical device</strong>.
                Verify against the device definition in each target jurisdiction.
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div className="th-risk-dots">
              {[1, 2, 3, 4].map(l => (
                <div key={l} className="th-risk-dot" style={{ background: l <= riskLevel ? meta.color : "#e2e8f0" }} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" }}>
              {isSaMD     && <span className="th-samd-tag">SaMD</span>}
              {isHighRisk && <span style={{ background: meta.badge, color: meta.color, fontSize: 10, fontWeight: 700, padding: "3px 9px", borderRadius: 20 }}>High Risk</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="th-res-tabs-bar">
        <div className="th-res-tabs-in">
          {([
            { id: "classification" as const, label: "Classification", Icon: Globe },
            { id: "documentation"  as const, label: "Documentation",  Icon: FileText },
            { id: "pathway"        as const, label: "Pathway",         Icon: Navigation },
          ]).map(({ id, label, Icon }) => (
            <button key={id} className={`th-res-tab${tab === id ? " on" : ""}`} onClick={() => setTab(id)}>
              <Icon size={14} />{label}
            </button>
          ))}
        </div>
      </div>

      <div className="th-res-body">
        {tab === "classification" && (
          <div className="th-regions">
            {REGIONS.map(region => (
              <div key={region.label}>
                <div className="th-region-lbl">{region.label.toUpperCase()}</div>
                {jurisdictions.filter(j => region.ids.includes(j.id)).map(j => {
                  const isExp = exp === j.id;
                  return (
                    <div key={j.id} className={`th-jur-card${isExp ? " exp" : ""}`}>
                      <button className="th-jur-btn" onClick={() => setExp(isExp ? null : j.id)}>
                        <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{j.flag}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div className="th-jur-name">{j.name}</div>
                          <div className="th-jur-reg">{j.reg}</div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 3, flexShrink: 0 }}>
                          <span className="th-cls-badge" style={{ background: badge.bg, color: badge.color, borderColor: badge.border }}>{j.class}</span>
                          <span className="th-jur-time">{j.timeline}</span>
                        </div>
                        <ChevronDown size={15} color="#cbd5e1" style={{ flexShrink: 0, marginLeft: 4, transform: isExp ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
                      </button>
                      {isExp && (
                        <div className="th-jur-detail">
                          <div className="th-detail-lbl">CONFORMITY ROUTE</div>
                          <div className="th-detail-val">{j.route}</div>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                            <div>
                              <div className="th-detail-lbl">ESTIMATED TIMELINE</div>
                              <span className="th-tl-pill">{j.timeline}</span>
                            </div>
                            <a href={j.url} target="_blank" rel="noopener noreferrer" className="th-ext-link">
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
          <div className="th-docs-grid">
            {docs.map(({ title, bg, border, items }) => (
              <div key={title} className="th-doc-card" style={{ background: bg, borderColor: border }}>
                <div className="th-doc-title">{title}</div>
                {items.map(item => (
                  <div key={item} className="th-doc-item">
                    <CheckCircle2 size={14} color="#22c55e" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span className="th-doc-text">{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {tab === "pathway" && (
          <div className="th-timeline-wrap">
            <div className="th-timeline">
              <div className="th-tl-line" />
              {PATHWAY.map((p, i) => (
                <div key={p.n} className="th-tl-step">
                  <div className="th-tl-num" style={{ background: i === 0 ? BLUE : "#f1f5f9", color: i === 0 ? "white" : "#94a3b8", border: `2px solid ${i === 0 ? BLUE : "#e2e8f0"}` }}>
                    {p.n}
                  </div>
                  <div className="th-tl-card">
                    <div className="th-tl-head">
                      <span className="th-tl-title">{p.title}</span>
                      <span className="th-tl-time">{p.time}</span>
                    </div>
                    <div className="th-tl-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="th-warn" style={{ marginTop: 8 }}>
              ⚠️ Timelines are indicative estimates. Actual duration depends on device complexity,
              documentation completeness, and regulatory body workload. Engage a regulatory affairs consultant early.
            </div>
          </div>
        )}

        <button className="th-reset" onClick={onReset}>Start New Assessment</button>
        <p className="th-disc">
          Indicative guidance only. Not regulatory or legal advice.<br />
          Always verify requirements against current authority publications before making regulatory decisions.
        </p>
      </div>
    </div>
  );
}

// ── Classifier orchestrator ───────────────────────────────────────────────
type Screen = "home" | "questions" | "results";

export function Classifier(): JSX.Element {
  const [screen,  setScreen]  = useState<Screen>("home");
  const [step,    setStep]    = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<ClassifierResults | null>(null);

  const handleAnswer = (id: string, val: string) => {
    const next: Answers = { ...answers, [id]: val };
    setAnswers(next);
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      setResults(getResults(next));
      setScreen("results");
    }
  };

  const handleBack = () => {
    if (screen === "results") { setScreen("questions"); setStep(QUESTIONS.length - 1); return; }
    if (step > 0) setStep(step - 1);
    else setScreen("home");
  };

  const reset = () => { setScreen("home"); setStep(0); setAnswers({}); setResults(null); };

  // Software Track: pre-select software=pure_sw then start from question 0
  const startSaMD = () => {
    setAnswers({ software: "pure_sw" } as Answers);
    setStep(0);
    setScreen("questions");
  };

  if (screen === "results" && results) return <ResultsScreen results={results} onReset={reset} />;

  if (screen === "questions") return (
    <QuestionScreen
      key={step} step={step + 1} total={QUESTIONS.length}
      question={QUESTIONS[step]} answers={answers}
      onAnswer={handleAnswer} onBack={handleBack}
    />
  );

  return <HomeScreen onStart={() => { setStep(0); setAnswers({}); setScreen("questions"); }} onStartSaMD={startSaMD} />;
}
