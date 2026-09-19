import { FaGithub } from 'react-icons/fa6'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const images = project.images?.length
    ? project.images
    : project.image
      ? [project.image]
      : []
  const contributors = project.contributors?.filter(
    (contributor) => contributor.name && contributor.platform,
  ) ?? []

  return (
    <article className="project-card surface">
      <div className="screenshot-container">
        {images.length > 0 ? (
          <div className="screenshot-gallery">
            {images.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="project-image"
              />
            ))}
          </div>
        ) : (
          <span className="screenshot-text">{project.title}</span>
        )}
      </div>

      <div className="project-body">
        <div className="project-title-row">
          <h3 className="project-title">
          <a 
            href={project.deployment || project.github || '#'} 
            target={(project.deployment || project.github) ? '_blank' : '_self'} 
            rel="noreferrer" 
            className="accent-link"
          >
            {project.title}
          </a>
          </h3>
          {project.year && <span className="project-year">{project.year}</span>}
        </div>

        {contributors.length > 0 && (
          <details className="project-contributors" open>
            <summary>Additional Contributors ({contributors.length})</summary>
            <div className="contributor-list">
              {contributors.map((contributor) => (
                <a
                  key={contributor.platform}
                  href={contributor.platform}
                  target="_blank"
                  rel="noreferrer"
                  className="contributor-link"
                >
                  {contributor.name}
                </a>
              ))}
            </div>
          </details>
        )}

        {project.description && <p className="project-description">{project.description}</p>}

        <div className="project-meta">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" className="repo-link" aria-label="GitHub Repository">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard