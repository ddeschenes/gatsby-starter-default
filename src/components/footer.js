import React from "react"
import "./footer.css"

const Footer = () => (
  <footer>
    <div class="container">
      <div class="row">
        <div class="text-center">
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
