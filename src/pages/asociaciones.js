import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contenedor from "../components/Items/asociaciones/contenedorAso"

function Asociaciones({ data }) {
  return (
    <Layout>
      <SEO title="Feitec" />
      <div className="row">
        {data.allStrapiAsociacion.edges.map((document, index) => (
          <div
            className="col-11 col-md-4 my-3 shadow container mx-auto d-flex"
            key={index}
          >
            <Contenedor
              data={{
                id: document.node.id,
                src: document.node.logo.childImageSharp.fluid.src,
                acronimo: document.node.acronimo,
                nombre: document.node.nombre,
                sede: document.node.sede.nombre,
              }}
            ></Contenedor>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Asociaciones

export const asoQuery = graphql`
  query AsociacionesQuery {
    allStrapiAsociacion {
      edges {
        node {
          id
          nombre
          acronimo
          logo {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          sede {
            nombre
          }
        }
      }
    }
  }
`
