import React , {Fragment}from "react"
import { graphql } from "gatsby"
import Layout from "../layout";
import { Card, CardImg, CardHeader, Col, Row, CardBody, CardFooter } from "reactstrap"

const Consejo = ({data}) => {
  var consejo = data.strapiConsejo;
  return(
  <Layout>
    <Card>
      <CardHeader>
      <h1>{consejo.nombre }</h1>
      </CardHeader>
      <CardBody>
      <p>descripcion consejo</p>
      </CardBody>
    </Card>
  </Layout>
  )
}

export default Consejo;

export const query = graphql`
  query ConsejoTemplate($id: String!) {
    strapiConsejo(id: {eq: $id}) {
      nombre
      id
    }
  }
`