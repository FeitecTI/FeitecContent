import React from "react"
import { graphql } from "gatsby"
import Contenedor from "../components/Items/consejos-organos/contenedorCons-Org"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import { Row, Col, Container } from "reactstrap"
function Consejos({ data }) {
  return (
    <Layout>
      <SEO title="Consejos" />
      <Col md="10" style={{ margin: "0 auto" }}>
        <Row md="4">
          {data.allStrapiConsejo.edges.map((document, index) => (
            <div className="container">
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
        </Row>
      </Col>
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
              fixed(height: 200, width: 400, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`
