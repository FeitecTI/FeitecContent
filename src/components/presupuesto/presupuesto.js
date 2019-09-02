import React, {Fragment} from "react"
import {Row,Col,Media} from 'reactstrap';
import "./presupuesto.css";
import DownloadIcon from "../../images/Icons/download.svg";
import { Link } from "gatsby"
import LightDate from "../date/lightDate";

//      <div className="marker"></div>   
const Presupuesto = ({data}) => {
    var archivo = data.archivo;
    console.log({data});
    return(
    <Row className="componentBody"> 
      <Col xl ="1" lg="1" md="1" sm="1" xs="1">
        <a href={archivo.url} target="_blank" rel="noopener noreferrer">
          <Media src={DownloadIcon} style={{ maxHeight: "2rem" }}  />
        </a>
      </Col>

      <Col xl ="9" lg="9" md="9">
        <h4 className="tittleText">{data.nombre}</h4>
        <p  className="text-muted descriptionText">{data.descripcion}</p>
        <LightDate text="Publicado: " date={new Date(data.createdAt)}/>
      </Col>
      <Col>
        <LightDate text="Desde: " date={new Date(data.inicio)}/>
        <LightDate text="Hasta: "date={new Date(data.fin)}/>
      </Col>
    </Row>
    )
  }
  
  export default Presupuesto;
