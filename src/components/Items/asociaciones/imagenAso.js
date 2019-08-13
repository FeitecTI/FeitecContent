import React from "react"
import { CardImg } from "reactstrap"

const Imagen = ({ data }) => {
  return <CardImg className="imagen" src={data.id} alt="Not Found" />
}

export default Imagen
