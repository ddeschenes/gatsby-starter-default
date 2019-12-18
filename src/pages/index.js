import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Section from "../components/section/section"

import ImageFirst from "../images/bg-nature-2.jpg"
import ImageSecond from "../images/bg-nature-3.jpg"
import ImageContact from "../images/bg-shipping-1.jpg"

import LogoFacebook from "../images/f-logo-58.png"

import Products from "../components/products/products"
import ImageHome from "../components/images/image-home"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Les Saveurs Boréales"
      keywords={[
        `produits boréales`,
        `saveurs boréales`,
        `produit du terroir`,
        `épices`,
        `thés`,
        `fruits thé du labrador`,
        `poivre des dunes`,
        `chaga`,
        `quenouille`,
        `salicorne`,
        `récoltes`,
        `tête de violon`,
      ]}
    />
    <Section
      id="section-bg-first"
      className="section-bg-info"
      backgroundImage={ImageFirst}
    >
      <div className="text-center">
        <h1 className="text-center">De la cueillette à votre assiette</h1>
        <p>
          Nos cueilleurs prennent soin de ne pas altérer les produits afin
          qu'ils soient le plus intact possible dans votre assiette.
        </p>
      </div>
    </Section>
    <Section id="section-about" className="section-info">
      <div>
        <h1 className="text-center">Description du projet</h1>
        <ImageHome />
        <p>
          Les Saveurs Boréales est une entreprise qui se spécialise dans la
          récolte des produits du terroir Nord-Côtier tel que les plantes vertes
          (La salicorne, livèche écossaise), les thés (thé du Labrador, chaga),
          les champignons (morille, chanterelle en tube, bolet, champignon
          crabe...), les épices (poivre des dunes, myrique baumier, baies de
          génévrier...). En plus des récoltes, la gestion des habitats nous
          tient à coeur afin d'assurer la continuité de la ressource naturelle.
        </p>
        <p>
          Une des priotités de l'entreprise est de faire la liaison entre les
          récolteurs et les acheteurs potentiels. Les industries
          pharmaceutiques, les épiceries, les restaurants et le public demeurent
          la clientèle visée.
        </p>
        <p>
          Le champ d’intervention de la recherche et développement de nouveaux
          produits assure une plus longue période de récolte et un plus grande
          valeur dans le développement des produits régionaux. De par ce fait,
          Les Saveurs Boréales se démarque par son propre concept de la
          planification des récoltes et de la recherche continue.
        </p>
      </div>
    </Section>
    <Section
      id="section-bg-second"
      className="section-bg-info"
      backgroundImage={ImageSecond}
    >
      <div className="text-center">
        <h1>Des produits frais et variés</h1>
        <p>Des produits de nos forêts boréales de grande qualité.</p>
      </div>
    </Section>
    <Section id="section-products" className="section-info">
      <Products />
    </Section>
    <Section
      id="section-contact"
      className="section-bg-info"
      backgroundImage={ImageContact}
    >
      <div>
        <div className="text-center">
          <h1>Contactez-nous</h1>
          <p>
            Les Saveurs Boréales <br />
            Russel Tremblay <br />
            12, 1ère Rue <br />
            Forestville, Québec <br />
            G0T 1E0 <br />
            Téléphone : <a href="tel:4185874884">418-587-4884</a> <br />
            Courriel :{" "}
            <a href="mailto:info@lessaveursboreales.com">
              info@lessaveursboreales.com
            </a>
          </p>
          <div className="section-socials">
            <a href="https://www.facebook.com/lessaveursboreales">
              <img alt="Facebook" src={LogoFacebook} />
            </a>
          </div>
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
