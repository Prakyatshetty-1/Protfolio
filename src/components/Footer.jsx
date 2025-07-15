import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">© {new Date().getFullYear()} Prakyat Shetty. All rights reserved.</p>
        <div className="footer-links">
          <a
            href="https://github.com/Prakyatshetty-1"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/prakyat-shetty-50875b365/" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/prakyatshetty0/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LeetCode
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
