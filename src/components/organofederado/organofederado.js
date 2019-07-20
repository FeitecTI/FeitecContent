import React , {Fragment}from "react"
import Layout from "../layout";
import { graphql } from "gatsby"
import { Card, CardImg, CardHeader, Col, Row, CardBody, CardFooter } from "reactstrap"

const OrganoFederado = ({data}) => {
  var organo = data.strapiOrganofederado;
  return (
  <Layout>
      <Card>
        <CardHeader>
        <h1>{ organo.nombre }</h1>
        </CardHeader>
        <CardBody>
        <p>{organo.descripcion}</p>
        </CardBody>
      </Card>
  </Layout>
  )
  }

export default OrganoFederado


export const query = graphql`
  query OrganofederadoTemplate($id: String!) {
    strapiOrganofederado(id: {eq: $id}) {
      id
      nombre
      descripcion
    }
  }
`