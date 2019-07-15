import React from "react"
import styles from "./asociacion.module.css"
import { Link } from "gatsby"
import icon from "../../images/gatsby-icon.png"

const Asociacion = ({datos}) => {
  //<Img fixed= {query}/>
  return(
    <Link to={datos.path ? datos.path : "/"} className = {styles.head}>
      <img src = {icon} alt = "Icon" className={styles.img} />
      {datos.nombre}
    </Link>
  )
}

export default Asociacion;