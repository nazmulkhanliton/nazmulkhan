"use client";
import { portfolioData } from "@/lib/data";

export default function Research() {
  const journals = portfolioData.publications.filter((p) => p.type === "Journal");
  const conferences = portfolioData.publications.filter((p) => p.type === "Conference");

  return (
    <section id="research" style={{ padding: "5rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <div className="section-marker" style={{ marginBottom: "1.5rem" }}>Research</div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "2.5rem",
          fontWeight: 800,
          marginBottom: "3rem",
        }}
      >
        Publications
      </h2>

      {[
        { label: "Journal Paper", items: journals },
        { label: "Conference Papers", items: conferences },
      ].map(({ label, items }) => (
        <div key={label} style={{ marginBottom: "3rem" }}>
          <h3
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#ff6a9d",
              marginBottom: "1.25rem",
            }}
          >
            {label}
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {items.map((pub, i) => (
              <a
                key={i}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                  padding: "1.5rem 2rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1.5rem",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                className="card-hover"
              >
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: "0.95rem", color: "var(--text)", lineHeight: 1.6, marginBottom: "0.5rem" }}>
                    {pub.title}
                  </p>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      color: "var(--muted)",
                    }}
                  >
                    {pub.year}
                  </span>
                </div>
                <span
                  style={{
                    color: "#7c6aff",
                    fontSize: "1.2rem",
                    flexShrink: 0,
                    transition: "transform 0.2s",
                  }}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}

      {/* Awards */}
      <div style={{ marginTop: "2rem" }}>
        <div className="section-marker" style={{ marginBottom: "1.5rem" }}>Recognition</div>
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "1.8rem",
            marginBottom: "2rem",
          }}
        >
          Honors & Awards
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem" }}>
          {portfolioData.awards.map((award, i) => (
            <div
              key={i}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
              className="card-hover"
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "3px",
                  background: "linear-gradient(to bottom, #7c6aff, #ff6a9d)",
                }}
              />
              <div
                style={{
                  paddingLeft: "1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    marginBottom: "0.4rem",
                    color: "var(--text)",
                  }}
                >
                  {award.title}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "var(--muted)",
                  }}
                >
                  {award.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
