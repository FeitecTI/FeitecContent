import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contenedor from "../components/Items/consejos-organos/contenedorCons-Org"
import { graphql } from "gatsby"
const Organosfederados = ({ data }) => {
  return (
    <Layout>
      <SEO title="Órganos Federados" />
      <div className="row">
        {data.allStrapiOrganofederado.edges.map((document, index) => (
          <div className="col-md-6 my-3">
            <Contenedor
              data={{
                id: document.node.id,
                src: document.node.Preview.childImageSharp.resize.src,
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

export default Organosfederados

export const pageQuery = graphql`
  query OrganosQuery {
    allStrapiOrganofederado {
      edges {
        node {
          id
          nombre
          Preview {
            childImageSharp {
              resize(width: 550, height: 300, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`
