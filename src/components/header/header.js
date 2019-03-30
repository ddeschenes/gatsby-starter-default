import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar">
      <div className="navbar-collapse">
        <Link className="navbar-brand" to="/#">
          Les Saveurs Boréales
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/#section-about">
              <span>À propos</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#section-products">
              <span>Produits</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/#section-contact">
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
