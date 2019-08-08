import React from "react"
import "./styleNorm.css"
import { FaGavel } from "react-icons/fa"

const Titulo = ({ data }) => {
  return (
    <div className="contenedor">
      <h3 className="titulo">
        {" "}
        <FaGavel /> {" | "}
        {data.titulo}{" "}
      </h3>
    </div>
  )
}
export default Titulo
