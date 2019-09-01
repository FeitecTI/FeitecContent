import React from "react"
import "./styleNorm.css"

const Fecha = ({ data }) => {
  if (data != null) {
    return (
      <div>
        <h5 className="texto" style={{ opacity: "0.7" }}>
          {" "}
          {data.fecha}{" "}
        </h5>
      </div>
    )
  } else {
    return (
      <div>
        <h5 className="texto" style={{ opacity: "0.7" }}>
          {" "}
          -{" "}
        </h5>
      </div>
    )
  }
}
export default Fecha
