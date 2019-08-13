import React from "react"
import { graphql } from "gatsby"
import Contenedor from "../components/Items/consejos-organos/contenedorCons-Org"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

function Consejos({ data }) {
  return (
    <Layout>
      <SEO title="Feitec" />
      <div className="row">
        {data.allStrapiConsejo.edges.map((document, index) => (
          <div className="col-md-6 my-3 shadow container">
            <Contenedor
              data={{
                id: document.node.id,
                src: document.node.foto.childImageSharp.fixed.src,
                nombre: document.node.nombre,
              }}
              key={index}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Consejos

export const pageQuery = graphql`
  query ConsejosQuery {
    allStrapiConsejo {
      edges {
        node {
          id
          nombre
          foto {
            id
            childImageSharp {
              fixed(height: 300, width: 550, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`
