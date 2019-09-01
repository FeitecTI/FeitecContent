import React from "react"
import ImageGroup from "../imagenes/group/imageGroup"
import { FaAngleLeft } from "react-icons/fa"
import InfoPrincipalNoticia from "./infoPrincipalNoticia"
import DescripcionNoticia from "./descripcionNoticia"

const Noticia = ({ selected, onClick }) => {
  return (
    <>
      <FaAngleLeft
        style={{ height: "3rem", marginTop: "auto" }}
        onClick={onClick}
      />
      <ImageGroup images={selected.imagenes} />
      <InfoPrincipalNoticia
        titulo={selected.titulo}
        fecha={selected.fecha}
        autor={selected.autor}
      />
      <DescripcionNoticia descipcion={selected.descripcion} />
    </>
  )
}

export default Noticia
//<ImageGroup />
