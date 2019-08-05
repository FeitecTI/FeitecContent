import React from "react"
import { CardImg } from "reactstrap"

const Imagen = ({ data }) => {
  return <CardImg className="imagen" src={data.id} alt="Not Found" />
}

/*const imageQuery = graphql`
  query {
    strapiAsociacion(id: { eq: $id }) {
      logo {
        childImageSharp {
          fixed {
            src
          }
        }
      }
    }
  }
`*/
export default Imagen
