"use client";
import { projects } from "../data/portfolio";

function ExternalLinkIcon() {
  return (
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
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      {/* Section header */}
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
          {"// selected work"}
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
          Projects
        </h2>
      </div>

      {/* Featured grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.25rem",
          marginBottom: "1.25rem",
        }}
      >
        {featured.map((project) => (
          <ProjectCard key={project.name} project={project} featured />
        ))}
      </div>

      {/* Rest grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1rem",
        }}
      >
        {rest.map((project) => (
          <ProjectCard key={project.name} project={project} featured={false} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof projects)[0];
  featured: boolean;
}) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: featured ? "1.75rem" : "1.4rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        transition: "border-color 0.25s, transform 0.25s, background 0.25s",
        cursor: "default",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border-accent)";
        el.style.background = "var(--bg-card-hover)";
        el.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.background = "var(--bg-card)";
        el.style.transform = "translateY(0)";
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background:
            "linear-gradient(90deg, var(--accent) 0%, transparent 100%)",
          opacity: 0.5,
          borderRadius: "16px 16px 0 0",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontSize: "0.72rem",
            color: "var(--text-dim)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {project.year}
        </span>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-dim)",
              transition: "color 0.2s",
              lineHeight: 1,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color =
                "var(--accent-soft)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--text-dim)")
            }
          >
            <ExternalLinkIcon />
          </a>
        )}
      </div>

      <div>
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: featured ? "1.15rem" : "1rem",
            fontWeight: 600,
            color: "var(--text)",
            marginBottom: "0.6rem",
            lineHeight: 1.3,
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            lineHeight: 1.65,
          }}
        >
          {project.description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          marginTop: "auto",
        }}
      >
        {project.tech.map((t) => (
          <span
            key={t}
            style={{
              background: "rgba(108,99,255,0.08)",
              border: "1px solid rgba(108,99,255,0.15)",
              borderRadius: "6px",
              padding: "0.2rem 0.6rem",
              fontSize: "0.72rem",
              color: "var(--accent-soft)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
