import './ProjectCard.css'

function ProjectCard({ project }) {
  return (
    <article className="project-card surface">
      <div className="screenshot-container">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-image" />
        ) : (
          <span className="screenshot-text">{project.title}</span>
        )}
      </div>

      <div className="project-body">
        <h3 className="project-title">
          <a href={project.github} target="_blank" rel="noreferrer" className="accent-link">
            {project.title}
          </a>
        </h3>

        <p className="project-description">{project.description}</p>

        <div className="project-meta">
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" className="repo-link accent-link">
            GitHub &rarr;
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard