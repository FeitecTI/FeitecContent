import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Item from "../components/Items/normativas/contenedorNorm"
import {Row} from "reactstrap"

function Normativas({ data }) {
  return (
    <Layout>
      <SEO title="Normativas" />
      <h2 style={{ textAlign: "center" }}>Normativas</h2>
      <h4 style={{ textAlign: "center", fontWeight: "normal" }}>
        En esta sección se muestran algunos de los estatutos vigentes de la
        Federación de Estudiantes del Tecnológico de Costa Rica.
      </h4>
      <div className="row">
        {data.allStrapiNormativa.edges.map((document, index) => (
          <div
            className="col-11 col-md-6 my-3 container mx-auto d-flex"
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
    allStrapiNormativa(sort: { fields: Fecha_Publicacion, order: DESC }) {
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
