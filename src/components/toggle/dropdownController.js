import React from "react"
import Styles from "./dropdownController.module.css"
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa"

const DropdownController = ({ isOpen, onClick }) => {
  return isOpen ? (
    <FaAngleDoubleDown className={Styles.controller} onClick={onClick} />
  ) : (
    <FaAngleDoubleUp className={Styles.controller} onClick={onClick} />
  )
}

export default DropdownController
