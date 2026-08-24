import { emailAddress } from '../../scripts/email.js'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="section-heading">Contact</h2>
      <div className="contact-links-grid">
        <a href={`mailto:${emailAddress}`} className="contact-box surface">
          <span className="contact-copy">
            <span className="contact-title accent-link">Email</span>
            <span className="contact-url">{emailAddress}</span>
          </span>
          <FaEnvelope className="contact-icon accent-link" aria-hidden="true" />
        </a>
        <a href="https://linkedin.com/in/joshuasubray" target="_blank" rel="noreferrer" className="contact-box surface">
          <span className="contact-copy">
            <span className="contact-title accent-link">LinkedIn</span>
            <span className="contact-url">linkedin.com/in/joshuasubray</span>
          </span>
          <FaLinkedin className="contact-icon accent-link" aria-hidden="true" />
        </a>
        <a href="https://github.com/JoshuaSubray" target="_blank" rel="noreferrer" className="contact-box surface">
          <span className="contact-copy">
            <span className="contact-title accent-link">GitHub</span>
            <span className="contact-url">github.com/JoshuaSubray</span>
          </span>
          <FaGithub className="contact-icon accent-link" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

export default Contact