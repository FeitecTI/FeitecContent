import React from "react"
import Descripcion from "./descripcionAso"
import Imagen from "./imagenAso"
import { Link } from "gatsby"

const Contenedor = ({ data }) => {
  data.nombre = data.nombre.toLowerCase()
  return (
    <Link to={`/${data.id}`}>
      <Imagen data={{ id: data.src, node: data.id }} />
      <Descripcion
        data={{
          acronimo: data.acronimo,
          nombre: data.nombre,
          sede: data.sede,
        }}
      />
    </Link>
  )
}
export default Contenedor