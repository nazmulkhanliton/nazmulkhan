"use client";
import { person, skills } from "../data/portfolio";

const allSkills = [
  ...skills.frontend,
  ...skills.backend,
  ...skills.databases,
  ...skills.languages.slice(0, 2),
];

export default function Hero() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Glow blob */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(108,99,255,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(108,99,255,0.1)",
            border: "1px solid rgba(108,99,255,0.25)",
            borderRadius: "100px",
            padding: "0.35rem 1rem",
            marginBottom: "2rem",
            fontSize: "0.8rem",
            color: "var(--accent-soft)",
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#4ade80",
              animation: "pulse 2s infinite",
            }}
          />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: "1.5rem",
            color: "var(--text)",
          }}
        >
          Md Nazmul
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #6c63ff 0%, #a78bfa 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Khan Liton
          </span>
        </h1>

        {/* Role */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "var(--text-muted)",
            marginBottom: "1.5rem",
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: "560px",
          }}
        >
          {person.bio}
        </p>

        {/* Skill pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          {allSkills.map((s) => (
            <span
              key={s}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                padding: "0.3rem 0.85rem",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="#projects"
            style={{
              background: "var(--accent)",
              color: "#fff",
              textDecoration: "none",
              padding: "0.85rem 2rem",
              borderRadius: "100px",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.01em",
              transition: "transform 0.2s, opacity 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
          >
            View Projects
          </a>
          <a
            href={`mailto:${person.email}`}
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
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor =
                "var(--border)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "2.5rem",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Years of Experience", value: "4+" },
            { label: "Projects Delivered", value: "20+" },
            { label: "Research Papers", value: "4" },
            { label: "Hackathon Wins", value: "2" },
            { label: "Citations", value: "164+" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--accent-soft)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-dim)",
                  marginTop: "0.25rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
