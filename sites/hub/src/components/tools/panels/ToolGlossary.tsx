import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { GLOSSARY } from "../data/glossary";

export function ToolGlossary() {
  const [q, setQ] = useState("");
  const filtered = GLOSSARY.filter(g =>
    !q ||
    g.term.toLowerCase().includes(q.toLowerCase()) ||
    g.def.toLowerCase().includes(q.toLowerCase()) ||
    g.jur.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div>
      <div className="th-search">
        <Search size={15} color="#94a3b8" />
        <input
          placeholder="Search terms, definitions, jurisdictions…"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        {q && (
          <button onClick={() => setQ("")} style={{background:"none",border:"none",cursor:"pointer"}}>
            <X size={13} color="#94a3b8" />
          </button>
        )}
      </div>
      <div style={{fontSize:12,color:"#94a3b8",marginBottom:12}}>{filtered.length} of {GLOSSARY.length} terms</div>
      <div className="th-gloss-grid">
        {filtered.map(g => (
          <div key={g.term} className="th-gloss-card">
            <div className="th-gloss-term">{g.term}</div>
            <div className="th-gloss-def">{g.def}</div>
            <div className="th-gloss-jur">{g.jur}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
