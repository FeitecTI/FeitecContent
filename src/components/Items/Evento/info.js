import React from "react"
import Styles from "./info.module.css"
import Titulo from "./titulo"
import Description from "./descripcion"
import DropdownController from "../../toggle/dropdownController"

const Info = ({ nombre, desc, onClick }) => (
  <div
    className={`${Styles.textBox} ${Styles.side}`}
    style={{ float: "right" }}
  >
    <Titulo nombre={nombre} />
    <Description desc={desc} />
    <DropdownController isOpen onClick={onClick} />
  </div>
)

export default Info
