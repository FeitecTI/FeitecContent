import React from "react"

//Components
import Descripcion from "./descripcion"
import Titutlo from "./titulo"
import Fecha from "./fecha"
import { Row } from "reactstrap"
import { FaDownload } from "react-icons/fa"

//Style
import "./style.css"

const Contenedor = ({ data }) => {
  console.log(data.link)
  return (
    <div className="container">
      <Row>
        <Titutlo data={{ titulo: data.titulo }} />
      </Row>
      <Row lg="2">
        <Descripcion data={{ descripcion: data.descripcion }} />
      </Row>
      <div class="row">
        <div class="col-xs">
          <h5 style={{ marginBottom: 0 }}>Fecha de Publicación</h5>
          <Fecha data={{ fecha: data.fecha }} />
        </div>
        <div class="icon">
          <h4>
            <a
              href="https://reactjs.org/docs/lists-and-keys.html#keys"
              target="_blank"
            >
              <FaDownload className="download-icon" />
            </a>
          </h4>
        </div>
      </div>
    </div>
  )
}
export default Contenedor
