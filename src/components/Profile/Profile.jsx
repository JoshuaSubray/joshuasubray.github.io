import Contact from '../Contact/Contact.jsx'
import './Profile.css'

function Profile() {
  return (
    <aside className="profile-column">
      <section id="about" className="header-box surface">
        <h1 className="title">Joshua Subray</h1>
        <p className="subtitle">Software Engineer & Website Developer</p>
        <img src="/JS.png" alt="Joshua Subray." className="profile-image" />

        <div className="description-section surface">
          <p className="description-content">
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

      <Contact />
    </aside>
  )
}

export default Profile