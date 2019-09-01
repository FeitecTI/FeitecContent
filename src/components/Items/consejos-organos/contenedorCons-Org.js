import React from "react"
import Imagen from "./imagenCons-Org"
import Styles from "./styleCons-Org.module.css"
import Titulo from "./tituloCons-Org"
import { Link } from "gatsby"
import { FaAngleRight } from "react-icons/fa"

const Contenedor = ({ data }) => {
  data.nombre = data.nombre.toLowerCase()
  return (
    <Link to={`/${data.id}`} style={{ padding: 0 }}>
      <div class="container">
        <Imagen
          data={{ id: data.src, node: data.id }}
          className={Styles.image}
        />
        <div>
          <Titulo data={{ titulo: data.nombre }} />
          <div style={{ float: "right", verticalAlign: "auto" }}>
            <FaAngleRight className={Styles.icon} />
          </div>
        </div>
      </div>
    </Link>
  )
}

/* 
<div style={{ float: "right" }}>
        <FaArrowAltCircleRight />
      </div>
      */
export default Contenedor
