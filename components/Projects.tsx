"use client";
import { portfolioData } from "@/lib/data";

const techColor: Record<string, string> = {
  "Next.js": "#7c6aff",
  "Node.js": "#83BA63",
  "PostgreSQL": "#336791",
  "Drizzle ORM": "#ff9f43",
  "Python": "#3572A5",
  "LLaMA": "#6affd4",
  "ChromaDB": "#a29bfe",
  "Prisma": "#ff6a9d",
};

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div className="section-marker" style={{ marginBottom: "1.5rem" }}>Projects</div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "3rem",
        }}
      >
        Selected Work
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: "1.5rem" }}>
        {portfolioData.projects.map((project, i) => (
          <div
            key={i}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              position: "relative",
              overflow: "hidden",
            }}
            className="card-hover"
          >
            {/* Accent line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: `linear-gradient(90deg, #7c6aff, #ff6a9d)`,
                opacity: 0.6,
              }}
            />

            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.68rem",
                    color: "var(--muted)",
                  }}
                >
                  {project.year}
                </span>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--muted)",
                    textDecoration: "none",
                    fontSize: "1rem",
                    transition: "all 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "#7c6aff";
                    el.style.color = "#7c6aff";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.color = "var(--muted)";
                  }}
                  title="Visit project"
                >
                  ↗
                </a>
              )}
            </div>

            {/* Description */}
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>
              {project.description}
            </p>

            {/* Tech tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tech.map((t) => {
                const c = techColor[t] || "#7c6aff";
                return (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      background: `${c}15`,
                      color: c,
                      border: `1px solid ${c}25`,
                    }}
                  >
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
