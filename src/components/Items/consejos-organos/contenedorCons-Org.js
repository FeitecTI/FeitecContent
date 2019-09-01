import React from "react"
import Imagen from "./imagenCons-Org"
import Titulo from "./tituloCons-Org"
import { Link } from "gatsby"

const Contenedor = ({ data }) => {
  data.nombre = data.nombre.toLowerCase()
  return (
    <Link to={`/${data.id}`}>
      <div className="shadow">
        <Imagen data={{ id: data.src }} />
        <div>
          <Titulo data={{ titulo: data.nombre }} />
        </div>
      </div>
    </Link>
  )
}

export default Contenedor
