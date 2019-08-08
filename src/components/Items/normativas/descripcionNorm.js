import React from "react"
import "./styleNorm.css"

const Descripcion = ({ data }) => {
  return (
    <div>
      <h5 className="texto"> {data.descripcion} </h5>
    </div>
  )
}
export default Descripcion
