import React from "react"
import Titulo from "./titulo"
import Styles from "./eventoExtendido.module.css"
import Descripcion from "./descripcion"
import Info from "./info"
import Organizador from "./organizador"
import { CSSTransition } from "react-transition-group"
import DropdownController from "../toggle/dropdownController"

class EventoExtendido extends React.Component {
  render() {
    return this.props.status ? (
      <div className={Styles.rect}>
        <CSSTransition
          key={this.props.data.id}
          timeout={500}
          appear
          in={this.props.status}
          classNames="fade"
        >
          <div>
            <Titulo
              text={this.props.data.nombre}
              onClick={this.props.onClick}
            />
            <Info
              ubicacion={this.props.data.ubicacion}
              fecha={this.props.data.fecha}
              sede={this.props.data.sedes[0].nombre}
            />
            <Descripcion text={this.props.data.descripcion} />
            <Organizador text={this.props.data.carreras[0].nombre} />
            <DropdownController onClick={this.props.onClick} />
          </div>
        </CSSTransition>
      </div>
    ) : (
      <></>
    )
  }
}

export default EventoExtendido
