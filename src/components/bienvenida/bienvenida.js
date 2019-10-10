import React from "react"
import { Col, Row } from "reactstrap"

const Bienvenida = () => (
  <div
    style={{
      backgroundColor: "#9AC42F",
      height: "25rem",
      display: "flex",
      alignContent: "center",
    }}
  >
    <Row
      style={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Col xs="8" sm="8" md="8" lg="8" xl="8" className="mx-auto">
        <Col
          xs="5"
          sm="5"
          md="5"
          lg="5"
          xl="5"
          style={{ display: "inline-block" }}
        >
          a
        </Col>
        <Col
          xs="7"
          sm="7"
          md="7"
          lg="7"
          xl="7"
          style={{
            display: "inline-block",
            fontSize: "5rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Bienvenidos
        </Col>
      </Col>
    </Row>
  </div>
)

export default Bienvenida
