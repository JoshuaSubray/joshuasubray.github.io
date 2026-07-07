import './App.css'

function App() {
  return (
    <main className="page">
      <h1>Joshua Subray</h1>

      <nav className="navbar">
        <a href="https://github.com/JoshuaSubray" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/joshuasubray" target="_blank" rel="noreferrer">LinkedIn</a>
        <div className="dropdown">
          <a href="#projects" className="dropbtn">Projects</a>
          <div className="dropdown-content">
            <a href="https://github.com/JoshuaSubray/Currency-Exchange-Concept" target="_blank" rel="noreferrer">Currency Exchange App Concept</a>
            <a href="https://github.com/JoshuaSubray/Car-Wash-Concept" target="_blank" rel="noreferrer">Car Wash Exchange Website Concept</a>
            <a href="https://github.com/JoshuaSubray/Pype" target="_blank" rel="noreferrer">Pype: Instant Messaging Website</a>
            <a href="https://github.com/JoshuaSubray/SeeSharpReviews" target="_blank" rel="noreferrer">See Sharp Reviews: Movie Review Website Concept</a>
          </div>
        </div>
      </nav>

      <p>Hi, I'm Joshua Subray! This website is a WIP.</p>
    </main>
  )
}

export default App
