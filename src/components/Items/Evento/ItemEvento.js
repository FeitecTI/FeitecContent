import React from "react"
import Styles from "./ItemEvento.module.css"
import { CSSTransition } from "react-transition-group"

class ItemEvento extends React.Component {
  render() {
    return this.props.status ? (
      <div className={Styles.container}>
        <CSSTransition
          key={this.props.data.id}
          timeout={500}
          appear
          in={this.props.status}
          classNames="fade"
        >
          <div>
            <div className={Styles.side} style={{ float: "left" }}>
              {this.props.status}
            </div>
            <div className={Styles.side} style={{ float: "right" }}>
              <div className={Styles.textBox}>
                <div className={Styles.title}>{this.props.data.nombre}</div>
                <div className={Styles.desc}>
                  {this.props.data.descripcion.substring(0, 100) + "..."}
                </div>
                <div onClick={this.props.onClick} className={Styles.controller}>
                  +
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    ) : (
      <></>
    )
  }
} /*
const itemEvento = ({ onClick, data, status }) => {
  return status ? (
    <TransitionGroup className={Styles.container}>
      <CSSTransition
        key={data.id}
        timeout={500}
        appear
        in={status}
        classNames="fade"
      >
        <div>
          <div className={Styles.side} style={{ float: "left" }}>
            Placeholder para imagenes
          </div>
          <div className={Styles.side} style={{ float: "right" }}>
            <div className={Styles.textBox}>
              <div className={Styles.title}>{this.props.data.nombre}</div>
              <div className={Styles.desc}>
                {data.descripcion.substring(0, 180) + "..."}
              </div>
              <div onClick={onClick} className={Styles.controller}>
                +
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </TransitionGroup>
  ) : (
    <> </>
  )
}*/

export default ItemEvento
