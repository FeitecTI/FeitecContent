import React , {Fragment} from "react"
import { Row , Col} from "reactstrap"
import DirectorioLine from "./directorioLine"

const LARGE = 2;
const MEDIUM = 2;
const SMALL = 4;
const EXTRASMALL = 4;

const Directorio = ({contactList}) => (
  <Fragment>
    <Row>
    <Col lg={LARGE} md={MEDIUM} sm={SMALL} xs={EXTRASMALL} >Siglas</Col>
    <Col lg={LARGE} md={MEDIUM} sm={SMALL} xs={EXTRASMALL} >Correo Electronico</Col>
    <Col lg={LARGE} md={MEDIUM} sm={SMALL} xs={EXTRASMALL}  >Telefono</Col>
    <Col lg={LARGE} md={MEDIUM} sm={SMALL} xs={EXTRASMALL} >Puesto</Col>
    <Col lg={LARGE} md={MEDIUM} sm={SMALL} xs={EXTRASMALL} >Sede</Col>
    </Row>
    {contactList.map((contact, index) => (
        <div>
          <DirectorioLine contact={contact}/>
        </div>
    )
    )
    }

  </Fragment>
)
//<DirectorioLine contact={contact}/>
export default Directorio
