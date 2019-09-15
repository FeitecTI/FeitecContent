import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contenedor from "../components/Items/consejos-organos/contenedorCons-Org"
import { graphql } from "gatsby"
import { Col, Row } from "reactstrap"
const Organosfederados = ({ data }) => {
  return (
    <Layout>
      <SEO title="Órganos Federados" />
      <Col md="10" style={{ margin: "0 auto" }}>
        <Row md="4">
          {data.allStrapiOrganofederado.edges.map((document, index) => (
            <div class="container">
              <Contenedor
                data={{
                  id: document.node.id,
                  src: document.node.Preview.childImageSharp.fixed.src,
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
