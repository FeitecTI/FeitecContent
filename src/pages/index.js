import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Bienvenida from "../components/bienvenida/bienvenida"
import { Col } from "reactstrap"
import Titulo from "../components/titulo/titulo"
import HorarioContainer from "../components/horarioDeBuses/horarioContainer"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Feitec" />
    <Bienvenida />
    <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
      <Titulo Color="#9AC42F" Text="Noticias y Eventos" />
      <Titulo Color="#9AC42F" Text="Horario De Buses" />
      <HorarioContainer routes={data.allStrapiRutabuses.edges} />
    </Col>
  </Layout>
)

export default IndexPage

export const MainPageQuery = graphql`
  query IndextQuery {
    allStrapiRutabuses {
      edges {
        node {
          horariosSalida
          nombreRuta
          infoExtra
          strapiId
        }
      }
    }
  }
`
