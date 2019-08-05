import React from "react"
import "./style.css"

const Fecha = ({ data }) => {
  if (data == null) {
    return (
      <div>
        <h5 className="texto"> {data.fecha} </h5>
      </div>
    )
  } else {
    return (
      <div>
        <h5 className="texto"> 04/8/2019 </h5>
      </div>
    )
  }
}
export default Fecha
