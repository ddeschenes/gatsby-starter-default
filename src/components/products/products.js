import React, { Fragment } from "react"
import { graphql, useStaticQuery, withPrefix } from "gatsby"
import Img from "gatsby-image"

import "./products.css"

const Products = () => {
  const { allProductsJson } = useStaticQuery(
    graphql`
      {
        allProductsJson(limit: 1000) {
          edges {
            node {
              id
              title
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              filename
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <h1 className="text-center">Nos produits Nord-Côtiers</h1>
      <ul className="product-list">
        {allProductsJson.edges.map(({ node }) => {
          return renderProduct(node)
        })}
      </ul>
    </div>
  )
}

const renderProduct = product => {
  const title = product.filename ? (
    <a
      rel="noopener noreferrer"
      className="product-title"
      href={withPrefix(`/pdf/${product.filename}`)}
      target="_blank"
    >
      {product.title}
      <Img fluid={product.image.childImageSharp.fluid} />
    </a>
  ) : (
    <Fragment>
      <h3 className="product-title">{product.title}</h3>
      <div className="gatsby-image-wrapper" />
    </Fragment>
  )

  return (
    <li class="product-list-item">
      {title}
      <p>{product.description}</p>
    </li>
  )
}

export default Products
