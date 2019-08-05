import React from "react"
import Styles from "./ItemEvento.module.css"
import { CSSTransition } from "react-transition-group"
import Preview from "./preview"
import Info from "./info"

class ItemEvento extends React.Component {
  render() {
    return this.props.status ? (
      <CSSTransition
        key={this.props.data.id}
        timeout={500}
        appear
        in={this.props.status}
        classNames="fade"
        className={Styles.container}
      >
        <div>
          <Preview text={`${this.props.status}`}></Preview>
          <Info
            nombre={this.props.data.nombre}
            desc={this.props.data.descripcion.substring(0, 100) + "..."}
            onClick={this.props.onClick}
          />
        </div>
      </CSSTransition>
    ) : (
      <></>
    )
  }
}

export default ItemEvento
