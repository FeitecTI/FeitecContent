import React from "react"
import { Row, Col, Media, Container } from "reactstrap"
import { FaAngleRight, FaAutoprefixer } from "react-icons/fa"
import Styles from "./ItemNoticia.module.css"

const ItemNoticia = ({
  titulo,
  descripcion,
  publicador,
  fecha,
  imagen,
  onClick,
  id,
}) => {
  fecha = new Date(fecha)
  fecha = fecha.getDate() + "/" + fecha.getMonth() + "/" + fecha.getFullYear()
  return (
    <Row
      style={{ marginTop: "2rem" }}
      style={{
        marginTop: "3rem",
        paddingTop: "0.7rem",
        paddingLeft: "0.7rem",
      }}
      onClick={() => {
        onClick(id)
      }}
    >
      <Col xs="6" sm="4" style={{ padding: 0 }}>
        <Media src={imagen} alt="" className={Styles.media} />
      </Col>
      <Col
        xs="6"
        sm="4"
        style={{ position: "relative", backgroundColor: "#F5F5F5" }}
      >
        <div style={{ marginLeft: "0.5rem" }}>
          <Row>
            <div style={{ fontSize: "110%" }} className={Styles.titulo}>
              {titulo}
            </div>
          </Row>
          <Row>
            <div className={Styles.publicador}>
              {fecha}
              {", "}
              {publicador}
            </div>
          </Row>
          <Row>
            <div style={{ fontSize: "90%" }} className={Styles.descripcion}>
              {descripcion}
            </div>
          </Row>
        </div>
      </Col>
    </Row>
  )
}
export default ItemNoticia
