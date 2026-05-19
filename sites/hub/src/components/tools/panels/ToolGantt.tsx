import React, { useState } from "react";

const PHASES = [
  { l:"Design & Dev",    s:0,  d:6,  c:"#2563eb" },
  { l:"Technical File",  s:2,  d:5,  c:"#7c3aed" },
  { l:"QMS / ISO 13485", s:1,  d:10, c:"#16a34a" },
  { l:"Clinical Eval",   s:3,  d:5,  c:"#0891b2" },
  { l:"NB / CA Review",  s:8,  d:7,  c:"#ea580c" },
  { l:"Registration",    s:14, d:4,  c:"#dc2626" },
  { l:"Post-Market",     s:17, d:6,  c:"#ca8a04" },
];

const MULT: Record<string, number> = { I:.5, IIa:.8, IIb:1, III:1.4 };

export function ToolGantt() {
  const [cls, setCls] = useState("IIb");
  const m     = MULT[cls] ?? 1;
  const TOTAL = Math.ceil(24 * m);  // dynamic total so bars never overflow

  return (
    <div>
      <div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:20, flexWrap:"wrap" }}>
        <span style={{ fontSize:13, fontWeight:600, color:"#374151" }}>Device Class:</span>
        {["I","IIa","IIb","III"].map(c => (
          <button key={c} className={`th-filter${cls === c ? " on" : ""}`} onClick={() => setCls(c)}>{c}</button>
        ))}
        <span style={{ fontSize:12, color:"#64748b" }}>
          Est. total: <strong style={{ color:"#0f172a" }}>{TOTAL} months</strong>
        </span>
      </div>

      {/* Scrollable chart wrapper — fixes Class III overflow */}
      <div style={{ overflowX:"auto", paddingBottom:8 }}>
        <div style={{ minWidth: TOTAL * 18 + 140 }}>
          {/* Month header */}
          <div style={{ marginLeft:140, display:"grid", gridTemplateColumns:`repeat(${TOTAL},1fr)`, marginBottom:6 }}>
            {Array.from({ length: TOTAL }).map((_, i) => (
              <div key={i} style={{ fontSize:10, color: i % 4 === 0 ? "#94a3b8" : "transparent", textAlign:"center" }}>
                M{i+1}
              </div>
            ))}
          </div>

          {/* Phase rows */}
          {PHASES.map(ph => {
            const s2 = Math.round(ph.s * m);
            const d2 = Math.round(ph.d * m);
            return (
              <div key={ph.l} className="th-gantt-row">
                <div className="th-gantt-lbl">{ph.l}</div>
                <div className="th-gantt-track">
                  <div
                    className="th-gantt-bar"
                    style={{
                      left: `${(s2 / TOTAL) * 100}%`,
                      width: `${(d2 / TOTAL) * 100}%`,
                      background: ph.c,
                      minWidth: 40,
                    }}
                  >
                    M{s2+1}–M{s2+d2}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Parallel activities note */}
      <div style={{ marginTop:14, padding:"12px 14px", background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:10, fontSize:12, color:"#374151", lineHeight:1.6 }}>
        <strong>Parallel activities:</strong> Technical File and QMS can run concurrently with Design &amp; Development.
        Clinical Evaluation overlaps with Technical File compilation. Registration submits once NB/CA review is complete.
      </div>

      <div className="th-warn">
        ⚠️ Illustrative for EU MDR Class {cls}. EU Notified Body wait times currently 12–18 months — engage early.
        Phases can run in parallel where shown. Actual timelines depend on documentation readiness and CB workload.
      </div>
    </div>
  );
}
