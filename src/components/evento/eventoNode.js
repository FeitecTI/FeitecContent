import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../layout/layout"
import ImageGroup from "../imagenes/group/imageGroup"
import InfoPrincipalNoticia from "../noticias/infoPrincipalNoticia"
import DescripcionNoticia from "../noticias/descripcionNoticia"
import { Col, Row } from "reactstrap"
import close from "../../images/Icons/cross.png"
import Titulo from "../titulo/titulo"

const EventoNode = ({ data }) => {
  console.log({ data })
  return (
    <Layout>
      <Col className="mx-auto" xl="10" lg="10" md="11" sm="12" xs="12">
        <Titulo Color="#9AC42F" Text="Evento" />
      </Col>
      <Row
        className="mx-auto"
        style={{
          padding: 0,
          marginTop: "5rem",
        }}
      >
        <Col
          xs="1"
          sm="1"
          md="1"
          lg="1"
          xl="1"
          className="my-auto"
          style={{ padding: 0 }}
        ></Col>
        <Col
          xs="10"
          sm="10"
          md="10"
          lg="10"
          xl="10"
          style={{
            padding: 0,
            display: "flex",
            boxShadow: "-1rem 1rem 0.5rem rgba(0, 0, 0, 0.18)",
            borderRadius: "0.5rem",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Col
            xs="5"
            sm="5"
            md="5"
            lg="5"
            xl="5"
            style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
            className="my-auto"
          >
            <ImageGroup images={data.strapiEvento.imagenes} />
          </Col>
          <Col
            xs="7"
            sm="7"
            md="7"
            lg="7"
            xl="7"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "0 0.5rem 0.5rem 0",
            }}
          >
            <Link to="/">
              <img
                src={close}
                alt="Cerrar Noticia"
                style={{
                  marginTop: "1rem",
                  marginRight: "1rem",
                  height: "1rem",
                  float: "right",
                }}
              />
            </Link>

            <InfoPrincipalNoticia
              titulo={data.strapiEvento.titulo}
              fecha={data.strapiEvento.fecha}
              autor={data.strapiEvento.tag}
            />

            <DescripcionNoticia descipcion={data.strapiEvento.descripcion} />
          </Col>
        </Col>
        <Col
          xs="1"
          sm="1"
          md="1"
          lg="1"
          xl="1"
          className="my-auto"
          style={{ padding: 0 }}
        ></Col>
      </Row>
    </Layout>
  )
}

export default EventoNode

export const query = graphql`
  query EventoTemplate($id: String!) {
    strapiEvento(id: { eq: $id }) {
      fecha
      titulo
      descripcion
      tag
      imagenes {
        url
      }
    }
  }
`
