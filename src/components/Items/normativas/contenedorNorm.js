import React from "react"

//Components
import Descripcion from "./descripcionNorm"
import Titutlo from "./tituloNorm"
import Fecha from "./fechaNorm"
import { Row } from "reactstrap"
import { FaDownload } from "react-icons/fa"

//Style
import "./styleNorm.css"

const Contenedor = ({ data }) => {
  return (
    <div className="container">
      <Row>
        <Titutlo data={{ titulo: data.titulo }} />
      </Row>
      <Row lg="2">
        <Descripcion data={{ descripcion: data.descripcion }} />
      </Row>
      <div>
        <div style={{ maxWidth: "80%", display: "inline-block" }}>
          <h5 style={{ marginBottom: 0, marginLeft: "1rem" }}>
            Fecha de Publicación
          </h5>
          <Fecha data={{ fecha: data.fecha }} />
        </div>
        <div className="icon">
          <h4>
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <FaDownload className="download-icon" />
            </a>
          </h4>
        </div>
      </div>
    </div>
  )
}
export default Contenedor
