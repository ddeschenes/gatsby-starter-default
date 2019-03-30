import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="navbar">
      <div class="navbar-collapse">
        <Link class="navbar-brand">Les Saveurs Boréales</Link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link" to="/#section-about">
              <span>À propos</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link">
              <span>Produits</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/#section-contact">
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
