import type { Project } from "../projects";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  const baseUrl = (import.meta as ImportMeta & { env: { BASE_URL: string } })
    .env.BASE_URL;
  return (
    <article className="project-card group">
      <div className={`project-art art-${project.color}`}>
        {project.image ? (
          <img
            src={`${baseUrl}${project.image}`}
            alt={`${project.title} website preview`}
            className="project-image"
            loading="lazy"
          />
        ) : (
          <>
            <div className="art-grid" aria-hidden="true" />

            <div className="browser-shell" aria-hidden="true">
              <div className="browser-top">
                <span />
                <span />
                <span />
                <div className="browser-address" />
              </div>

              <div className="browser-body">
                <div className="mock-sidebar">
                  <b />
                  <i />
                  <i />
                  <i />
                </div>

                <div className="mock-content">
                  <div className="mock-label" />
                  <div className="mock-heading" />
                  <div className="mock-heading short" />

                  <div className="mock-panels">
                    <div />
                    <div />
                    <div />
                  </div>

                  <div className="mock-line" />
                  <div className="mock-line narrow" />
                </div>
              </div>
            </div>
          </>
        )}

        <span className="project-number">
          PROJECT / {String(project.id).padStart(2, "0")}
        </span>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-open"
          aria-label={`Open ${project.title}`}
        >
          <ArrowUpRight size={19} />
        </a>
      </div>

      <div className="project-details">
        <div className="project-meta">
          <span>{project.category}</span>
          <span className="meta-divider">·</span>
          <span>{project.stack.join(" / ")}</span>
        </div>

        <div className="project-title-row">
          <h3>{project.title}</h3>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title}`}
            className="title-arrow"
          >
            <ArrowUpRight size={19} />
          </a>
        </div>

        <p>{project.description}</p>
      </div>
    </article>
  );
}
