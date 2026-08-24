import Navbar from './components/Layout/Navbar/Navbar.jsx'
import Projects from './components/Projects/Projects.jsx'
import Profile from './components/Profile/Profile.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="portfolio-wrapper">
      <Navbar />

      <main className="main-content">
        <Projects />
        <Profile />
      </main>

      <Footer />
    </div>
  )
}

export default App






