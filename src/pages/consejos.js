import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
//import DeleteList from "../components/deleteList"

const Consejos = ({data}) => {
  return(
    <Layout>
      <SEO title="Feitec" />
      <ul>
        {data.allStrapiConsejo.edges.map(document => (
          <li key={document.node.id}>
            <Link to = {`/${document.node.id}`}>{document.node.nombre}</Link>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}
export default Consejos


export const pageQuery = graphql`  
  query ConsejosQuery {
    allStrapiConsejo {
      edges {
        node {
          id
          nombre
        }
      }
    }
  }
`