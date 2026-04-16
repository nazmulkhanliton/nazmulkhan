"use client";
import { awards, skills, leadership, experience, education } from "../data/portfolio";

export default function Awards() {
  const allSkills = [
    { label: "Languages", items: skills.languages },
    { label: "Frontend", items: skills.frontend },
    { label: "Backend", items: skills.backend },
    { label: "Databases", items: skills.databases },
    { label: "ORM / Tools", items: [...skills.orm, ...skills.other] },
  ];

  return (
    <section id="awards" style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      {/* Experience + Education row */}
      <div style={{ marginBottom: "5rem" }}>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--accent-soft)",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          // background
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "2.5rem",
          }}
        >
          Experience & Skills
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Experience card */}
          {experience.map((exp) => (
            <div
              key={exp.company}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.75rem",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "var(--text)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.85rem", color: "var(--accent-soft)", textDecoration: "none" }}
                  >
                    {exp.company}
                  </a>
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-dim)",
                    fontFamily: "'JetBrains Mono', monospace",
                    textAlign: "right",
                    flexShrink: 0,
                    marginLeft: "1rem",
                  }}
                >
                  {exp.period}
                </span>
              </div>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {exp.responsibilities.map((r) => (
                  <li
                    key={r}
                    style={{
                      fontSize: "0.83rem",
                      color: "var(--text-muted)",
                      paddingLeft: "1rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.4em",
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                        opacity: 0.6,
                      }}
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Education + Leadership */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {education.map((edu) => (
              <div
                key={edu.institution}
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    marginBottom: "0.35rem",
                  }}
                >
                  {edu.degree}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--accent-soft)", marginBottom: "0.25rem" }}>
                  {edu.institution}
                </p>
                <p style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}>
                  {edu.period} · {edu.location}
                </p>
              </div>
            ))}

            {/* Leadership */}
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "1.5rem 1.75rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--text)",
                  marginBottom: "1rem",
                }}
              >
                Leadership
              </h3>
              {leadership.map((l) => (
                <div
                  key={l.role}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.83rem", color: "var(--text)", fontWeight: 500 }}>{l.role}</p>
                    <p style={{ fontSize: "0.75rem", color: "var(--text-dim)" }}>{l.org}</p>
                  </div>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}>
                    {l.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "16px",
            padding: "1.75rem",
          }}
        >
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "var(--text)",
              marginBottom: "1.5rem",
            }}
          >
            Technical Skills
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {allSkills.map((group) => (
              <div key={group.label}>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-dim)",
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.6rem",
                  }}
                >
                  {group.label}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        background: "rgba(108,99,255,0.08)",
                        border: "1px solid rgba(108,99,255,0.15)",
                        borderRadius: "6px",
                        padding: "0.2rem 0.6rem",
                        fontSize: "0.75rem",
                        color: "var(--accent-soft)",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Awards */}
      <div>
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--accent-soft)",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "0.75rem",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          // recognition
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "2rem",
          }}
        >
          Honors & Awards
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
          }}
        >
          {awards.map((award) => (
            <div
              key={award.title}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.5rem",
                transition: "border-color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border-accent)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{award.icon}</div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "var(--text)",
                  marginBottom: "0.35rem",
                  lineHeight: 1.3,
                }}
              >
                {award.title}
              </h3>
              <p style={{ fontSize: "0.78rem", color: "var(--text-dim)", lineHeight: 1.4 }}>{award.org}</p>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "var(--accent-soft)",
                  marginTop: "0.5rem",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {award.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
