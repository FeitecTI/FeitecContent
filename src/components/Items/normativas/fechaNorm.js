import React from "react"
import "./styleNorm.css"

const Fecha = ({ data }) => {
  if (data != null) {
    return (
      <div>
        <h5 className="texto"> {data.fecha} </h5>
      </div>
    )
  } else {
    return (
      <div>
        <h5 className="texto"> - </h5>
      </div>
    )
  }
}
export default Fecha
