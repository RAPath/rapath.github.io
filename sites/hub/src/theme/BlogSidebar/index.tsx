import React from 'react';
import './styles.css';
import tagCounts from './tagCounts.json';

const JURISDICTIONS = [
  { flag: '🇦🇺', tag: 'australia',      name: 'Australia' },
  { flag: '🇧🇩', tag: 'bangladesh',     name: 'Bangladesh' },
  { flag: '🇧🇷', tag: 'brazil',         name: 'Brazil' },
  { flag: '🇨🇦', tag: 'canada',         name: 'Canada' },
  { flag: '🇨🇳', tag: 'china',          name: 'China' },
  { flag: '🇪🇺', tag: 'european-union', name: 'EU (MDR)' },
  { flag: '🇭🇰', tag: 'hong-kong',      name: 'Hong Kong' },
  { flag: '🇮🇳', tag: 'india',          name: 'India' },
  { flag: '🇮🇩', tag: 'indonesia',      name: 'Indonesia' },
  { flag: '🇯🇵', tag: 'japan',          name: 'Japan' },
  { flag: '🇲🇾', tag: 'malaysia',       name: 'Malaysia' },
  { flag: '🇲🇽', tag: 'mexico',         name: 'Mexico' },
  { flag: '🇳🇿', tag: 'new-zealand',    name: 'New Zealand' },
  { flag: '🇵🇭', tag: 'philippines',    name: 'Philippines' },
  { flag: '🇷🇺', tag: 'russia',         name: 'Russia' },
  { flag: '🇸🇦', tag: 'saudi-arabia',   name: 'Saudi Arabia' },
  { flag: '🇸🇬', tag: 'singapore',      name: 'Singapore' },
  { flag: '🇰🇷', tag: 'south-korea',    name: 'South Korea' },
  { flag: '🇱🇰', tag: 'sri-lanka',      name: 'Sri Lanka' },
  { flag: '🇨🇭', tag: 'switzerland',    name: 'Switzerland' },
  { flag: '🇹🇭', tag: 'thailand',       name: 'Thailand' },
  { flag: '🇬🇧', tag: 'united-kingdom', name: 'UK (MHRA)' },
  { flag: '🇺🇸', tag: 'united-states',  name: 'US (FDA)' },
  { flag: '🇻🇳', tag: 'vietnam',        name: 'Vietnam' },
];

const CATEGORIES = [
  { icon: '📋', tag: 'regulatory-changes', name: 'Regulatory Changes' },
  { icon: '💬', tag: 'consultations',      name: 'Consultations' },
  { icon: '🔄', tag: 'reform-tracker',     name: 'Reform Updates' },
  { icon: '📅', tag: 'key-dates',          name: 'Key Dates' },
];

function Count({ n }: { n: number }) {
  if (!n) return null;
  return <span className="bfs-count">{n}</span>;
}

export default function BlogSidebar(_props: unknown) {
  return (
    <nav className="blog-filter-sidebar">
      <section className="bfs-section">
        <h3 className="bfs-title">By Jurisdiction</h3>
        <ul className="bfs-list">
          {JURISDICTIONS.map(({ flag, tag, name }) => {
            const n = tagCounts[tag] ?? 0;
            if (!n) return null;
            return (
              <li key={tag}>
                <a href={`/whats-new/tags/${tag}`} className="bfs-chip bfs-chip--jurisdiction">
                  <span className="bfs-flag">{flag}</span>
                  <span className="bfs-name">{name}</span>
                  <Count n={n} />
                </a>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="bfs-section">
        <h3 className="bfs-title">By Category</h3>
        <ul className="bfs-list">
          {CATEGORIES.map(({ icon, tag, name }) => {
            const n = tagCounts[tag] ?? 0;
            return (
              <li key={tag}>
                <a href={`/whats-new/tags/${tag}`} className="bfs-chip bfs-chip--category">
                  <span className="bfs-icon">{icon}</span>
                  <span className="bfs-name">{name}</span>
                  <Count n={n} />
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </nav>
  );
}
