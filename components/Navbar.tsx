"use client";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 2rem",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,10,15,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #7c6aff, #ff6a9d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          NKL
        </span>
      </a>

      {/* Desktop nav */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              color: "var(--muted)",
              textDecoration: "none",
              transition: "color 0.2s",
              textTransform: "uppercase",
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          >
            {item.label}
          </a>
        ))}
        <a
          href="mailto:liton079@gmail.com"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            padding: "8px 18px",
            border: "1px solid rgba(124,106,255,0.5)",
            borderRadius: "6px",
            color: "#7c6aff",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            const el = e.target as HTMLElement;
            el.style.background = "rgba(124,106,255,0.15)";
            el.style.borderColor = "#7c6aff";
          }}
          onMouseLeave={(e) => {
            const el = e.target as HTMLElement;
            el.style.background = "transparent";
            el.style.borderColor = "rgba(124,106,255,0.5)";
          }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
