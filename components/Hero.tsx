"use client";
import { useEffect, useState } from "react";
import { portfolioData } from "@/lib/data";

const roles = [
  "Full Stack Engineer",
  "AI Agent Developer",
  "ML Researcher",
  "Tech Trainer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
    >
      {/* Mesh blobs */}
      <div
        className="mesh-bg"
        style={{
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(124,106,255,0.12) 0%, transparent 70%)",
          top: "-100px", right: "-200px",
        }}
      />
      <div
        className="mesh-bg"
        style={{
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(255,106,157,0.08) 0%, transparent 70%)",
          bottom: "100px", left: "-100px",
        }}
      />

      <div style={{ maxWidth: "900px", margin: "0 auto", paddingTop: "80px", position: "relative", zIndex: 1 }}>
        {/* Tag */}
        <div className="section-marker" style={{ marginBottom: "2rem", opacity: 0, animation: "fadeUp 0.6s 0.1s ease forwards" }}>
          Available for Opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            marginBottom: "1.5rem",
            opacity: 0,
            animation: "fadeUp 0.6s 0.2s ease forwards",
          }}
        >
          Md Nazmul
          <br />
          <span className="gradient-text">Khan Liton</span>
        </h1>

        {/* Typewriter */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "var(--muted)",
            marginBottom: "2rem",
            opacity: 0,
            animation: "fadeUp 0.6s 0.35s ease forwards",
            minHeight: "2rem",
          }}
        >
          <span style={{ color: "#7c6aff" }}>~ </span>
          {displayed}
          <span
            style={{
              display: "inline-block",
              width: "2px",
              height: "1.1em",
              background: "#7c6aff",
              marginLeft: "2px",
              verticalAlign: "text-bottom",
              animation: "blink 0.9s step-end infinite",
            }}
          />
        </div>

        {/* Bio */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "var(--muted)",
            maxWidth: "600px",
            marginBottom: "3rem",
            opacity: 0,
            animation: "fadeUp 0.6s 0.5s ease forwards",
          }}
        >
          {portfolioData.bio}
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.6s 0.65s ease forwards",
          }}
        >
          <a
            href="#projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "linear-gradient(135deg, #7c6aff, #ff6a9d)",
              borderRadius: "8px",
              color: "white",
              textDecoration: "none",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1.03)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
          >
            View Projects →
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px",
              color: "var(--text)",
              textDecoration: "none",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(124,106,255,0.5)";
              el.style.transform = "scale(1.03)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.1)";
              el.style.transform = "scale(1)";
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            opacity: 0,
            animation: "fadeUp 0.6s 0.8s ease forwards",
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "6+", label: "Live Projects" },
            { value: "4", label: "Publications" },
            { value: "2×", label: "Champion" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  background: "linear-gradient(135deg, #7c6aff, #ff6a9d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--muted)", fontFamily: "'DM Mono', monospace" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
