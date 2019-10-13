import React from "react"
import ImageGroup from "../imagenes/group/imageGroup"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"
import InfoPrincipalNoticia from "./infoPrincipalNoticia"
import DescripcionNoticia from "./descripcionNoticia"
import { Col, Row } from "reactstrap"
import close from "../../images/Icons/cross.png"

const Noticia = ({ selected, onClick, next, prev, index }) => {
  return (
    <>
      <Row
        className="mx-auto"
        style={{
          padding: 0,
          marginTop: "5rem",
        }}
      >
        <Col
          xs="1"
          sm="1"
          md="1"
          lg="1"
          xl="1"
          className="my-auto"
          style={{ padding: 0 }}
        >
          <FaAngleLeft
            style={{ fontSize: "3rem", opacity: 0.3, float: "right" }}
            onClick={prev}
          />
        </Col>
        <Col
          xs="10"
          sm="10"
          md="10"
          lg="10"
          xl="10"
          style={{
            padding: 0,
            display: "flex",
            boxShadow: "-1rem 1rem 0.5rem rgba(0, 0, 0, 0.18)",
            borderRadius: "0.5rem",
            backgroundColor: "#F5F5F5",
          }}
        >
          <Col
            xs="4"
            sm="4"
            md="4"
            lg="4"
            xl="4"
            style={{ borderRadius: "0.5rem 0 0 0.5rem" }}
            className="my-auto"
          >
            <ImageGroup images={selected.imagenes} />
          </Col>
          <Col
            xs="8"
            sm="8"
            md="8"
            lg="8"
            xl="8"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "0 0.5rem 0.5rem 0",
            }}
          >
            {index == false ? (
              <img
                src={close}
                alt="Cerrar Noticia"
                style={{
                  marginTop: "1rem",
                  marginRight: "1rem",
                  height: "1rem",
                  float: "right",
                }}
                onClick={onClick}
              />
            ) : (
              <></>
            )}

            <InfoPrincipalNoticia
              titulo={selected.titulo}
              fecha={selected.fecha}
              autor={selected.autor}
            />
            <DescripcionNoticia descipcion={selected.descripcion} />
          </Col>
        </Col>
        <Col
          xs="1"
          sm="1"
          md="1"
          lg="1"
          xl="1"
          className="my-auto"
          style={{ padding: 0 }}
        >
          <FaAngleRight
            style={{ fontSize: "3rem", opacity: 0.3, float: "left" }}
            onClick={next}
          />
        </Col>
      </Row>
    </>
  )
}

export default Noticia
/*




<Col
            xs="12"
            sm="12"
            md="8"
            lg="8"
            xl="8"
            style={{
              padding: 0,
              backgroundColor: "#F5F5F5",
              borderRadius: "0 0.5rem 0.5rem 0",
            }}
          >
            <img
              src={close}
              alt="Cerrar Noticia"
              style={{
                marginTop: "1rem",
                marginRight: "1rem",
                height: "1rem",
                float: "right",
              }}
              onClick={onClick}
            />
            <InfoPrincipalNoticia
              titulo={selected.titulo}
              fecha={selected.fecha}
              autor={selected.autor}
            />
            <DescripcionNoticia descipcion={selected.descripcion} />
          </Col>




*/
