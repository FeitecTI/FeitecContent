import React from "react"
import Styles from "./info.module.css"
import Titulo from "./titulo"
import Description from "./descripcion"

const Info = ({ nombre, desc, onClick }) => (
  <div
    className={`${Styles.textBox} ${Styles.side}`}
    style={{ float: "right" }}
  >
    <Titulo nombre={nombre} />
    <Description desc={desc} />
    <div onClick={onClick} className={Styles.controller}>
      +
    </div>
  </div>
)

export default Info
