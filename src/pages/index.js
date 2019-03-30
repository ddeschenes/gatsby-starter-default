import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section id="section-bg-first" class="section-bg-info">
      <div class="container">
        <div class="row">
          <div class="text-center">
            <h1 class="text-center">De la cueillette à votre assiette</h1>
            <p>
              Nos cueilleurs prennent soin de ne pas altérer les produits afin
              qu'ils soient le plus intact possible dans votre assiette.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
