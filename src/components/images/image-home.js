import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageHome = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Russel Tremblay, fondateur."
        style={{ "marginBottom": "2rem" }}
      />
    )}
  />
)
export default ImageHome
