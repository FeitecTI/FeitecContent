import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Item from "../components/Items/normativas/contenedorNorm"
import Directorio from "../components/directorio/directorio"




//<Img fluid={data.logo.childImageSharp} alt="" />
function DirectorioPage({ data }) {
  return (
    <Layout>
      <SEO title="Feitec" />
      <Directorio contactList = {data.allStrapiDirectorio.edges}/>
    </Layout>
  )
}

export default DirectorioPage;

export const directorioQuery = graphql`
  query DirectorioQuery {
    allStrapiDirectorio {
      edges {
        node {
          id
          nombre
          siglas
          correo
          telefono
          puesto
          sede {
            id
            nombre
          }
        }
      }
    }
  }
`
