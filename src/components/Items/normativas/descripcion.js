import React from "react"
import "./style.css"

const Descripcion = ({ data }) => {
  return (
    <div>
      <h5 className="texto"> {data.descripcion} </h5>
    </div>
  )
}
export default Descripcion
