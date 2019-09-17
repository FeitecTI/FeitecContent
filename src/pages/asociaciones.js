import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contenedor from "../components/Items/asociaciones/contenedorAso"
import { Row, Col } from "reactstrap"

function Asociaciones({ data }) {
  return (
    <Layout>
      <SEO title="Feitec" />
      <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
        <Row>
          {data.allStrapiAsociacion.edges.map((document, index) => (
            <Col
              xl="4"
              lg="4"
              md="4"
              sm="11"
              xs="11"
              className="my-3 shadow container mx-auto d-flex"
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
            </Col>
          ))}
        </Row>
      </Col>
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
