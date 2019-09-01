import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Item from "../components/Items/normativas/contenedorNorm"
import {Row} from "reactstrap"

//<Img fluid={data.logo.childImageSharp} alt="" />
function Normativas({ data }) {
  return (
    <Layout>
      <SEO title="Feitec" />
      <Row>
        {data.allStrapiNormativa.edges.map((document, index) => (
          <div
            className="col-11 col-md-6 my-3 shadow container mx-auto d-flex"
            key={index}
          >
            <Item
              data={{
                titulo: document.node.Nombre,
                descripcion: document.node.Descripcion,
                link: document.node.Link,
                id: document.node.id,
                fecha: document.node.Fecha_Publicacion,
              }}
            />
          </div>
        ))}
      </Row>
    </Layout>
  )
}

export default Normativas

export const normativasQuery = graphql`
  query NormativasQuery {
    allStrapiNormativa {
      edges {
        node {
          id
          Nombre
          Descripcion
          Link
          Fecha_Publicacion(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`
