import React , {Fragment}from "react"
import { Row , Col} from "reactstrap"


const DirectorioLine = (props) => {
  console.log(props.contact.node);
  var contact = props.contact.node;

return(
  <Fragment>
    <td scope="row">{contact.siglas }</td>
    <td>{contact.correo}</td>
    <td>{contact.telefono}</td>
    <td>{contact.puesto}</td>
    <td>{contact.sede.nombre}</td>
  </Fragment>
  )
}

export default DirectorioLine
