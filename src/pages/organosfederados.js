import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
//import DeleteList from "../components/deleteList"

const Organosfederados = ({data}) => {
  return(
    <Layout>
      <SEO title="Feitec" />
      <ul>
        {data.allStrapiOrganofederado.edges.map(document => (
          <li key={document.node.id}>
            <Link to = {`/${document.node.id}`}>{document.node.nombre}</Link>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default Organosfederados


export const pageQuery = graphql`  
  query OrganosQuery {
    allStrapiOrganofederado {
      edges {
        node {
          id
          nombre
        }
      }
    }
  }
`