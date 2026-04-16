"use client";
import { portfolioData } from "@/lib/data";

const skillColors: Record<string, string> = {
  "Python": "#3572A5",
  "TypeScript": "#2b7489",
  "JavaScript": "#f1e05a",
  "Next.js": "#7c6aff",
  "Node.js": "#83BA63",
  "React.js": "#61DAFB",
  "PostgreSQL": "#336791",
  "MongoDB": "#4DB33D",
  "Machine Learning": "#ff6a9d",
  "LLaMA": "#6affd4",
  "ChromaDB": "#ff9f43",
  "AI Agents": "#a29bfe",
};

export default function Skills() {
  return (
    <section style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div className="section-marker" style={{ marginBottom: "1.5rem" }}>Skills</div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "2.5rem",
        }}
      >
        Tech Stack
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
        {portfolioData.skills.map((skill) => {
          const color = skillColors[skill] || "#7c6aff";
          return (
            <span
              key={skill}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.78rem",
                padding: "8px 16px",
                border: `1px solid ${color}33`,
                borderRadius: "100px",
                color: color,
                background: `${color}10`,
                transition: "all 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLElement;
                el.style.background = `${color}25`;
                el.style.borderColor = color;
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLElement;
                el.style.background = `${color}10`;
                el.style.borderColor = `${color}33`;
              }}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </section>
  );
}
