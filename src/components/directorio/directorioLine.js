import React , {Fragment}from "react"
import { Row , Col} from "reactstrap"

const DirectorioLine = (props) => {
  console.log(props.contact.node);
  var contact = props.contact.node;

return(
  <Fragment>
    <Row>
    <Col>{contact.siglas}</Col>
    <Col>{contact.correo}</Col>
    <Col>{contact.telefono}</Col>
    <Col>{contact.puesto}</Col>
    <Col>{contact.sede.nombre}</Col>
    </Row>
  </Fragment>
  )
}

export default DirectorioLine
