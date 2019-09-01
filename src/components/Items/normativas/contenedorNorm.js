import React from "react"

//Components
import Descripcion from "./descripcionNorm"
import Titutlo from "./tituloNorm"
import Fecha from "./fechaNorm"
import { Row } from "reactstrap"
import { FaArrowAltCircleDown } from "react-icons/fa"

//Style
import "./styleNorm.css"

const Contenedor = ({ data }) => {
  return (
    <div className="shadow" style={{ padding: "0.3rem" }}>
      <Row style={{ paddingTop: "0.2rem" }}>
        <Titutlo data={{ titulo: data.titulo }} />
      </Row>
      <Row lg="2" style={{ paddingTop: "0.5rem" }}>
        <Descripcion data={{ descripcion: data.descripcion }} />
      </Row>
      <div>
        <div
          style={{
            maxWidth: "80%",
            display: "inline-block",
            paddingTop: "1rem",
          }}
        >
          <h5 style={{ marginBottom: 0, marginLeft: "1rem", opacity: "0.7" }}>
            Fecha de Publicación
          </h5>
          <Fecha data={{ fecha: data.fecha }} />
        </div>
        <div className="icon" style={{ paddingTop: "1rem" }}>
          <h4>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <h6 className="download-text">
                Descargar PDF {"    "}
                <FaArrowAltCircleDown className="download-icon" />
              </h6>
            </a>
          </h4>
        </div>
      </div>
    </div>
  )
}
export default Contenedor
