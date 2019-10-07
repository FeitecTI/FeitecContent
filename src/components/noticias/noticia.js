import React from "react"
import ImageGroup from "../imagenes/group/imageGroup"
import { FaAngleLeft } from "react-icons/fa"
import { FaAngleRight } from "react-icons/fa"
import InfoPrincipalNoticia from "./infoPrincipalNoticia"
import DescripcionNoticia from "./descripcionNoticia"
import { Col, Row } from "reactstrap"

const Noticia = ({ selected, onClick }) => {
  return (
    <>
      <FaAngleLeft style={{ height: "3rem" }} onClick={onClick} />
      <Col className="mx-auto">
        <Row>
          <Col xs="1">
            <FaAngleLeft
              style={{ fontSize: "3rem", opacity: 0.3 }}
              onClick={() => {}}
            />
          </Col>
          <Col xs="5" style={{ padding: 0 }}>
            <ImageGroup images={selected.imagenes} />
          </Col>
          <Col
            xs="5"
            style={{ position: "relative", backgroundColor: "#F5F5F5" }}
          >
            <InfoPrincipalNoticia
              titulo={selected.titulo}
              fecha={selected.fecha}
              autor={selected.autor}
            />
            <DescripcionNoticia descipcion={selected.descripcion} />
          </Col>
          <Col xs="1">
            <FaAngleRight
              style={{ fontSize: "3rem", opacity: 0.3 }}
              onClick={() => {}}
            />
          </Col>
        </Row>
      </Col>
    </>
  )
}

export default Noticia
//<ImageGroup />
