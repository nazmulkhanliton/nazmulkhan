"use client";
import { publications } from "../data/portfolio";

export default function Research() {
  return (
    <section
      id="research"
      style={{
        padding: "6rem 2rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: "3.5rem" }}>
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
          {"// publications"}
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Research
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {publications.map((pub, i) => (
          <a
            key={i}
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: "14px",
              padding: "1.5rem 1.75rem",
              display: "flex",
              gap: "1.5rem",
              alignItems: "flex-start",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border-accent)";
              el.style.background = "var(--bg-card-hover)";
              el.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border)";
              el.style.background = "var(--bg-card)";
              el.style.transform = "translateX(0)";
            }}
          >
            {/* Year + type badge */}
            <div
              style={{
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
                width: "56px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--accent-soft)",
                }}
              >
                {pub.year}
              </span>
              <span
                style={{
                  background:
                    pub.type === "Journal"
                      ? "rgba(74,222,128,0.1)"
                      : "rgba(108,99,255,0.1)",
                  color:
                    pub.type === "Journal" ? "#4ade80" : "var(--accent-soft)",
                  border: `1px solid ${
                    pub.type === "Journal"
                      ? "rgba(74,222,128,0.2)"
                      : "rgba(108,99,255,0.2)"
                  }`,
                  borderRadius: "100px",
                  padding: "0.15rem 0.5rem",
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {pub.type}
              </span>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    lineHeight: 1.4,
                  }}
                >
                  {pub.title}
                </h3>
                <span
                  style={{
                    color: "var(--text-dim)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-dim)",
                  lineHeight: 1.5,
                }}
              >
                {pub.authors}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginTop: "0.5rem",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--text-dim)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {pub.venue}
                </span>
                {pub.citation != null && (
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.68rem",
                      color: "var(--accent-soft)",
                      fontFamily: "'JetBrains Mono', monospace",
                      background: "rgba(108,99,255,0.08)",
                      border: "1px solid rgba(108,99,255,0.2)",
                      borderRadius: "100px",
                      padding: "0.1rem 0.55rem",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                    </svg>
                    {pub.citation} {pub.citation === 1 ? "citation" : "citations"}
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
