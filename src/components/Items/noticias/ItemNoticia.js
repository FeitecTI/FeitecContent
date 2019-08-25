import React from "react"
import { Row, Col, Media } from "reactstrap"
import { FaAngleRight } from "react-icons/fa"
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
    <Col lg="4" md="4" sm="12" xs="12" className={Styles.box}>
      <Media src={imagen} alt="" className={Styles.media} />
      <div className={Styles.titulo}>{titulo}</div>
      <div className={Styles.descripcion}>{descripcion}</div>
      <div className={Styles.publicador}>{publicador}</div>
      <Row>
        <Col lg="10" md="10" sm="10" xs="10" className={Styles.fecha}>
          {fecha}
        </Col>
        <Col lg="2" md="2" sm="2" xs="2">
          <FaAngleRight
            className={Styles.arrow}
            onClick={() => {
              onClick(id)
            }}
          />
        </Col>
      </Row>
    </Col>
  )
}
export default ItemNoticia
