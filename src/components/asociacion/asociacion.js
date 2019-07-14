import React , {Fragment}from "react"
import { Link } from "gatsby"

const Asociacion = ({data}) => (
  <Fragment>
    <h2>
       <Link to={`/${data.strapiAsociacion.id}`}>{data.strapiAsociacion.nombre}</Link>
    </h2>
  </Fragment>
)

export default Asociacion

export const query = graphql`
  query AsociacionTemplate($id: String!) {
    strapiAsociacion(id: {eq: $id}) {
      id
      nombre
    }
  }
`