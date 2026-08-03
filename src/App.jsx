import './App.css'

function App() {
  return (
    <main className="app-main">
      <h1 className="app-title">Joshua Subray</h1>

      <nav className="nav">
        <a className="nav-link" href="https://github.com/JoshuaSubray" target="_blank" rel="noreferrer">GitHub</a>
        <a className="nav-link" href="https://linkedin.com/in/joshuasubray" target="_blank" rel="noreferrer">LinkedIn</a>
        <div className="dropdown">
          <a className="nav-link" href="#projects">
            Projects
          </a>
          <ul className="dropdown-content">
            <li><a href="https://github.com/JoshuaSubray/Junior-Grade-Calculator" target="_blank" rel="noreferrer">Junior: Grade Calculator</a></li>
            <li className="dropdown nested-dropdown">
              <a className="nav-link" href="#project-concepts">
                Concepts
              </a>
              <ul className="dropdown-content nested-dropdown-content">
                <li><a href="https://github.com/JoshuaSubray/SeeSharpReviews" target="_blank" rel="noreferrer">SeeSharpReviews: Movie Review Website Concept</a></li>
                <li><a href="https://github.com/JoshuaSubray/Pype" target="_blank" rel="noreferrer">Pype: Instant Messenger Website Concept</a></li>
                <li><a href="https://github.com/JoshuaSubray/Currency-Exchange-Concept" target="_blank" rel="noreferrer">JAJ Currency Exchange: Mobile App Concept</a></li>
                <li><a href="https://github.com/JoshuaSubray/Car-Wash-Concept" target="_blank" rel="noreferrer">JAJ Car Wash: Website Concept</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <p className="app-description">Hi, I'm Joshua Subray! This website is a WIP.</p>
    </main>
  )
}

export default App
