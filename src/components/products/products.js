import React from "react"
import "./products.css"
import { graphql, useStaticQuery } from "gatsby"

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
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <h1 class="text-center">Nos produits Nord-Côtiers</h1>
      <ul class="product-list">
        {allProductsJson.edges.map(({ node }) => {
          return (
            <li class="product-list-item">
              <h3>{node.title}</h3>
              <p>{node.description}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Products
