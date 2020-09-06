import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="inner-header">
        <div className="logo">
          {/* <img src={pug-logo} alt="Pug-Logo" /> */}
          <Link to="/">Peter Knight</Link>
        </div>
        <div className="navigation">
          <nav>
            <Link to="/luna">Luna</Link>
            <Link to="/work">something</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </header>
)

export default Header
