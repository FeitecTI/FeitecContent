import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contenedor from "../components/Items/consejos-organos/contenedorCons-Org"
import { graphql } from "gatsby"
import { Col, Row, Container } from "reactstrap"
const Organosfederados = ({ data }) => {
  return (
    <Layout>
      <SEO title="Órganos Federados" />
      <Col>
        <Row md="4">
          {data.allStrapiOrganofederado.edges.map((document, index) => (
            <Container className="col-md-6 my-3">
              <Contenedor
                data={{
                  id: document.node.id,
                  src: document.node.Preview.childImageSharp.resize.src,
                  nombre: document.node.nombre,
                }}
                key={index}
              />
            </Container>
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
