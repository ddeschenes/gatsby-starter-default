import React from "react"
import PropTypes from "prop-types"
import "./section.css"

const Section = ({ id, className, backgroundImage, children }) => {
  const style = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {}
  return (
    <section id={id} className={className} style={style}>
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

export default Section
