import React from "react"
import Styles from "./preview.module.css"

const Preview = ({ text }) => (
  <div className={Styles.side} style={{ float: "left" }}>
    {text}
  </div>
)

export default Preview
