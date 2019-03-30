import React from "react"
import "./footer.css"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="text-center">
          <p>
            <small>
              ©{new Date().getFullYear()} lessaveursboréales.com. Tout droits
              réservés
            </small>
          </p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
