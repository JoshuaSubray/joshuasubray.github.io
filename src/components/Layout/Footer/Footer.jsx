import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p>
        Powered by Vite + React. This work is protected under the
        {' '}<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noreferrer" className="accent-link">CC BY-NC-ND 4.0</a>{' '}
        license.
      </p>
      <p className="footer-disclaimer">&copy; {new Date().getFullYear()} Joshua Subray.</p>
    </footer>
  )
}

export default Footer