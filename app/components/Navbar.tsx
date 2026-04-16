"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
        background: scrolled
          ? "rgba(10,10,15,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a
        href="#"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "1.1rem",
          color: "var(--accent-soft)",
          textDecoration: "none",
          letterSpacing: "-0.02em",
        }}
      >
        NKL
      </a>

      {/* Desktop links */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={{
              color: "var(--text-muted)",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "var(--text-muted)")
            }
          >
            {l.label}
          </a>
        ))}
        <a
          href="mailto:liton079@gmail.com"
          style={{
            background: "var(--accent)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.8rem",
            fontWeight: 600,
            padding: "0.45rem 1.1rem",
            borderRadius: "100px",
            letterSpacing: "0.02em",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.opacity = "1")
          }
        >
          Hire Me
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "var(--text)",
          cursor: "pointer",
          padding: "4px",
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          {menuOpen ? (
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M6 6l12 12M6 18L18 6"
            />
          ) : (
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(10,10,15,0.97)",
            backdropFilter: "blur(16px)",
            padding: "1.5rem 2rem",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
