import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Section from "../components/section/section"

import ImageFirst from "../images/bg-nature-2.jpg"
import ImageSecond from "../images/bg-nature-3.jpg"
import ImageContact from "../images/bg-shipping-1.jpg"
import ImageHome from "../images/home.jpg"

import Products from "../components/products/products"

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
        <img alt="Russel Tremblay" className="block-center" src={ImageHome} />
        <p>
          Le manque de ressources statistiques et techniques des récoltes et le
          besoin d’établir des liens entre les récolteurs et les acheteurs sont
          les motivations principales de cette entreprise.
        </p>
        <p>
          Nous sommes une entreprise qui se spécialise dans la récolte des
          produits du terroir Nord-Côtier tel que les plantes vertes (La
          salicorne), les produits pharmaceutiques (gomme de sapin, le if,
          tchaga), les thés (thé du Labrador), les algues, les champignons
          (morille, chanterelle, bolet) et quelques autres. En plus des
          récoltes, la gestion des habitats nous tient à coeur afin d'assurer la
          continuité de la ressource naturelle.
        </p>
        <p>
          Une des priotités de l'entreprise est de faire la liaison entre les
          récolteurs et les acheteurs potentiels. Les industries
          pharmaceutiques, les épiceries, les restaurants et le large public
          demeurent la clientèle visée.
        </p>
        <p>
          Le champ d’intervention de la recherche et développement de nouveaux
          produits assure une plus longue période de récolte et un plus grande
          valeur dans le développement des produits régionaux. De par ce fait,
          Les Saveurs Boréales se démarque par son propre concept de la
          planification des récoltes et de la recherche continue.
        </p>
        <br />
        <h1 className="text-center">Les objectifs de l'entreprise</h1>
        <ul>
          <li>
            Récolter, organiser, transformer et expédier les produits du terroir
            Nord-Côtier.
          </li>
          <li>
            Les acheteurs potentiels sont les industries pharmaceutiques, les
            épiceries, les restaurants et le large public.
          </li>
          <li>
            Pour la récolte, la grande région de la Côte-Nord nous semble bien
            suffisante.
          </li>
          <li>
            Pour les acheteurs : le Québec, le Canada et le reste du monde.
          </li>
          <li>
            L’entreposage et l’expédition par camion ou par autobus pour
            l’industrie pharmaceutique.
          </li>
          <li>
            L’expédition quotidienne pour les restaurants, question de
            fraîcheur.
          </li>
          <li>
            Comptoirs dans les épiceries et boutiques ou maisons qui réunissent
            les produits du terroir, des artisans et des producteurs régionaux.
          </li>
        </ul>
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
        </div>
      </div>
    </Section>
  </Layout>
)

export default IndexPage
