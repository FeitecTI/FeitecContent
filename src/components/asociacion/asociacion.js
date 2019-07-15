import React from "react"
import styles from "./asociacion.module.css"
import { Link } from "gatsby";

const Asociacion = ({nombre, path}) => (
  <Link to={path} className = {styles.head}>{nombre}</Link>
)

export default Asociacion;