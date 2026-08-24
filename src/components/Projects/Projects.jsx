import { projects } from '../../scripts/projects.js'
import ProjectCard from './Card/ProjectCard.jsx'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects-container">
      <h2 className="section-heading">Personal Projects</h2>
      <p className="section-subtext">Published non-professional projects.</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects