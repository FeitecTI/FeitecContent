import React , {Fragment}from "react"
import { graphql } from "gatsby"
import Layout from "../layout";
import { Card, CardImg, CardHeader, Col, Row, CardBody, CardFooter } from "reactstrap"

const Age = ({data}) => {
  var age = data.strapiAge;
  return(
  <Layout>
    <Card>
      <CardHeader>
      <h1>{age.nombre }</h1>
      </CardHeader>
      <CardBody>
      <p>{age.descripcion}</p>
      </CardBody>
    </Card>
  </Layout>
  )
}

export default Age;

export const query = graphql`
  query AgeTemplate($id: String!) {
    strapiAge(id: {eq: $id}) {
      id
      nombre
      descripcion
    }
  }
`