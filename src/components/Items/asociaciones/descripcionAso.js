import React from "react"
import { Col, Row } from "reactstrap"
import "./styleAso.css"

const Descripcion = ({ data }) => {
  return (
    <div>
      <Row>
        <Col>
          <h3 className="acronimo">{data.acronimo}</h3>
        </Col>
        <Col>
          <h4 className="sede">{data.sede}</h4>
        </Col>
      </Row>
      <Row>
        <h6 className="texto">{data.nombre}</h6>
      </Row>
    </div>
  )
}

export default Descripcion
