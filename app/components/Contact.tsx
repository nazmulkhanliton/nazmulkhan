"use client";
import { person } from "../data/portfolio";

export default function Contact() {
  const socials = [
    { label: "GitHub", url: person.github, icon: "GH" },
    { label: "LinkedIn", url: person.linkedin, icon: "LI" },
    { label: "Google Scholar", url: person.scholar, icon: "GS" },
    { label: "LeetCode", url: person.leetcode, icon: "LC" },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* CTA banner */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(108,99,255,0.12) 0%, rgba(96,165,250,0.08) 100%)",
          border: "1px solid rgba(108,99,255,0.2)",
          borderRadius: "24px",
          padding: "4rem 3rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "400px",
            height: "200px",
            background: "radial-gradient(ellipse, rgba(108,99,255,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--accent-soft)",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          // get in touch
        </p>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--text)",
            marginBottom: "1rem",
          }}
        >
          Let&apos;s Build Something
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-muted)",
            maxWidth: "480px",
            margin: "0 auto 2.5rem",
            lineHeight: 1.6,
          }}
        >
          Open to full-time roles, freelance projects, research collaborations, and training engagements.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={`mailto:${person.email}`}
            style={{
              background: "var(--accent)",
              color: "#fff",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              borderRadius: "100px",
              fontWeight: 600,
              fontSize: "0.9rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "0.85";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.opacity = "1";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            {person.email}
          </a>
          <a
            href={`tel:${person.phone}`}
            style={{
              background: "transparent",
              color: "var(--text)",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              borderRadius: "100px",
              fontWeight: 500,
              fontSize: "0.9rem",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            {person.phone}
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--accent-soft)",
              marginBottom: "0.25rem",
            }}
          >
            NKL
          </p>
          <p style={{ fontSize: "0.78rem", color: "var(--text-dim)" }}>
            © {new Date().getFullYear()} Md Nazmul Khan Liton
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.75rem" }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              style={{
                width: "36px",
                height: "36px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "var(--text-dim)",
                fontSize: "0.65rem",
                fontWeight: 700,
                fontFamily: "'JetBrains Mono', monospace",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLElement).style.color = "var(--accent-soft)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.color = "var(--text-dim)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
}
