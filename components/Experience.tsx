"use client";
import { portfolioData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div className="section-marker" style={{ marginBottom: "1.5rem" }}>Experience</div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "3rem",
        }}
      >
        Work History
      </h2>

      {portfolioData.experience.map((exp, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Left */}
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "var(--accent)",
                letterSpacing: "0.08em",
                marginBottom: "0.5rem",
              }}
            >
              {exp.period}
            </div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                color: "var(--text)",
              }}
            >
              {exp.company}
            </div>
          </div>

          {/* Right */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "2rem",
            }}
            className="card-hover"
          >
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: "1.5rem",
                color: "var(--text)",
              }}
            >
              {exp.role}
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {exp.responsibilities.map((r, j) => (
                <li key={j} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      color: "#7c6aff",
                      fontSize: "0.7rem",
                      marginTop: "0.25rem",
                      flexShrink: 0,
                    }}
                  >
                    ▸
                  </span>
                  <span style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6 }}>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Education */}
      <div style={{ marginTop: "4rem" }}>
        <div className="section-marker" style={{ marginBottom: "1.5rem" }}>Education</div>
        {portfolioData.education.map((edu, i) => (
          <div
            key={i}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "1.75rem 2rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
            className="card-hover"
          >
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  marginBottom: "0.25rem",
                }}
              >
                {edu.degree}
              </div>
              <div style={{ fontSize: "0.9rem", color: "var(--muted)" }}>{edu.institution}</div>
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.72rem",
                color: "#7c6aff",
                padding: "6px 14px",
                border: "1px solid rgba(124,106,255,0.3)",
                borderRadius: "100px",
              }}
            >
              {edu.year}
            </div>
          </div>
        ))}
      </div>

      {/* Leadership */}
      <div style={{ marginTop: "4rem" }}>
        <div className="section-marker" style={{ marginBottom: "1.5rem" }}>Leadership</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
          {portfolioData.leadership.map((l, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
              }}
              className="card-hover"
            >
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  marginBottom: "0.35rem",
                }}
              >
                {l.role}
              </div>
              <div style={{ fontSize: "0.85rem", color: "#7c6aff", marginBottom: "0.25rem" }}>{l.org}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--muted)" }}>
                {l.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
