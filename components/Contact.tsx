"use client";
import { portfolioData } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "6rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(124,106,255,0.3), transparent)",
          marginBottom: "5rem",
        }}
      />

      <div className="section-marker" style={{ marginBottom: "1.5rem", justifyContent: "center" }}>
        Contact
      </div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2.5rem, 6vw, 4rem)",
          fontWeight: 800,
          marginBottom: "1.5rem",
          lineHeight: 1.1,
        }}
      >
        Let&apos;s Build
        <br />
        <span className="gradient-text">Something Together</span>
      </h2>
      <p
        style={{
          fontSize: "1rem",
          color: "var(--muted)",
          maxWidth: "500px",
          margin: "0 auto 3rem",
          lineHeight: 1.7,
        }}
      >
        Whether you have a project in mind or just want to talk tech — I&apos;m always open to interesting conversations and opportunities.
      </p>

      <a
        href={`mailto:${portfolioData.email}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "16px 36px",
          background: "linear-gradient(135deg, #7c6aff, #ff6a9d)",
          borderRadius: "10px",
          color: "white",
          textDecoration: "none",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "1rem",
          marginBottom: "4rem",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "scale(1.04)";
          el.style.boxShadow = "0 20px 60px rgba(124,106,255,0.35)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "scale(1)";
          el.style.boxShadow = "none";
        }}
      >
        Say Hello →
      </a>

      {/* Social links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "4rem", flexWrap: "wrap" }}>
        {[
          { label: "GitHub", href: portfolioData.links.github },
          { label: "LinkedIn", href: portfolioData.links.linkedin },
          { label: "Scholar", href: portfolioData.links.googleScholar },
          { label: "LeetCode", href: portfolioData.links.leetcode },
          { label: "Email", href: `mailto:${portfolioData.email}` },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.08em",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#7c6aff")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            background: "linear-gradient(135deg, #7c6aff, #ff6a9d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          NKL
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--muted)",
          }}
        >
          © {new Date().getFullYear()} Md Nazmul Khan Liton
        </span>
      </div>
    </section>
  );
}
