import { projects } from './scripts/projects.js'
import { emailAddress } from './scripts/email.js'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import './App.css'

function App() {
  return (
    <div className="portfolio-wrapper">
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <a href="#" className="nav-brand">
              <span className="brand-cap">J</span>
              <span className="brand-sub">OSHUA</span>
              <span className="brand-cap">S</span>
              <span className="brand-sub">UBRAY</span>
              {/* <span className="brand-domain">.COM</span> */}
            </a>
          </div>

          {/*
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
          </nav>
          */}

        </div>
      </header>

      <main className="main-content">
        <section id="projects" className="projects-container">
          <h2 className="section-heading">Personal Projects</h2>
          <p className="section-subtext">Published non-professional projects.</p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="screenshot-container">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                  ) : (
                    <span className="screenshot-text">{project.title}</span>
                  )}
                </div>

                <div className="project-body">
                  <h3 className="project-title">
                    <a href={project.github} target="_blank" rel="noreferrer">
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
                    <a href={project.github} target="_blank" rel="noreferrer" className="repo-link">
                      GitHub &rarr;
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="profile-column">
          <section id="about" className="header-box">
            <h1 className="title">Joshua Subray</h1>
            <p className="subtitle">Developer & Software Developer</p>
            <img src="/JS.png" alt="Joshua Subray." className="profile-image" />

            <div className="description-section">
              <p className="description-placeholder">
                Joshua Subray is a passionate software engineer, currently working as a freelance web developer with
                {' '}<a href="https://www.instagram.com/dev.velosdigital/" target="_blank" rel="noreferrer"><em>Velos Digital</em></a>,
                helping bring many small to medium-sized local businesses concepts to life.
                <br/><br/>
                Across numerous collaborative projects, Joshua has gained extensive experience with various programming languages and frameworks and can easily adapt to anything new. Graduated from Humber Polytechnic, and currently attending York University, Joshua is always looking to learn more and grow as a developer.
                <br/><br/>
                For more information, please visit Joshua's 
                {' '}<a href="https://www.linkedin.com/in/joshuasubray/" target="_blank" rel="noreferrer"><em>LinkedIn</em></a>.
                If you need a developer to help bring your project to life, please don't hesitate to contact through any of the methods listed below.
              </p>
            </div>
          </section>

          <section id="contact" className="contact-container">
            <h2 className="section-heading">Contact</h2>
            <div className="contact-links-grid">
              <a href={`mailto:${emailAddress}`} className="contact-box">
                <span className="contact-copy">
                  <span className="contact-title">Email</span>
                  <span className="contact-url">{emailAddress}</span>
                </span>
                <FaEnvelope className="contact-icon" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/in/joshuasubray" target="_blank" rel="noreferrer" className="contact-box">
                <span className="contact-copy">
                  <span className="contact-title">LinkedIn</span>
                  <span className="contact-url">linkedin.com/in/joshuasubray</span>
                </span>
                <FaLinkedin className="contact-icon" aria-hidden="true" />
              </a>
              <a href="https://github.com/JoshuaSubray" target="_blank" rel="noreferrer" className="contact-box">
                <span className="contact-copy">
                  <span className="contact-title">GitHub</span>
                  <span className="contact-url">github.com/JoshuaSubray</span>
                </span>
                <FaGithub className="contact-icon" aria-hidden="true" />
              </a>
            </div>
          </section>
        </aside>
      </main>

      <footer className="footer">
        <p>
          Powered by Vite + React. This work is protected under the
          {' '}<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noreferrer">CC BY-NC-ND 4.0</a>{' '}
          license.
        </p>
        <p className="footer-disclaimer">&copy; {new Date().getFullYear()} Joshua Subray.</p>
      </footer>
    </div>
  )
}

export default App






