import React from "react"
import Styles from "./titulo.module.css"
import { MAIN_COLOR, AZUL_FEITEC } from "../../config/consts"

const Titulo = ({ text, onClick }) => (
  <div className={Styles.contenedor} style={{ backgroundColor: MAIN_COLOR }}>
    {text}
    <div
      onClick={onClick}
      className={Styles.controller}
      style={{ backgroundColor: AZUL_FEITEC }}
    >
      -
    </div>
  </div>
)

export default Titulo
