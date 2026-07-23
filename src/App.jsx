import './App.css'

function App() {
  return (
    <main className="container mt-5">
      <h1 className="mb-4">Joshua Subray</h1>

      <nav className="nav mb-4">
        <a className="nav-link px-0 me-4" href="https://github.com/JoshuaSubray" target="_blank" rel="noreferrer">GitHub</a>
        <a className="nav-link px-0 me-4" href="https://linkedin.com/in/joshuasubray" target="_blank" rel="noreferrer">LinkedIn</a>
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle px-0" href="#projects" id="projectsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
            <li><a className="dropdown-item" href="https://joshuasubray.github.io/Junior/" target="_blank" rel="noreferrer">Grade Calculator</a></li>
            <li><a className="dropdown-item" href="https://github.com/JoshuaSubray/Currency-Exchange-Concept" target="_blank" rel="noreferrer">Currency Exchange App Concept</a></li>
            <li><a className="dropdown-item" href="https://github.com/JoshuaSubray/Car-Wash-Concept" target="_blank" rel="noreferrer">Car Wash Exchange Website Concept</a></li>
            <li><a className="dropdown-item" href="https://github.com/JoshuaSubray/Pype" target="_blank" rel="noreferrer">Pype: Instant Messaging Website</a></li>
            <li><a className="dropdown-item" href="https://github.com/JoshuaSubray/SeeSharpReviews" target="_blank" rel="noreferrer">See Sharp Reviews: Movie Review Website Concept</a></li>
          </ul>
        </div>
      </nav>

      <p>Hi, I'm Joshua Subray! This website is a WIP.</p>
    </main>
  )
}

export default App
