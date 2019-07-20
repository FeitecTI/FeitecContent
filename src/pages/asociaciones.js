import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

function Asociaciones({data}) {
  return(
    <Layout>
      <SEO title="Feitec" />
      <ul>
        {data.allStrapiAsociacion.edges.map(document => (
          <li key={document.node.id}>
            <Link to = {`/${document.node.id}`}>{document.node.nombre}</Link>
          </li>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}


export default Asociaciones


export const asoQuery = graphql`  
  query AsociacionesQuery {
    allStrapiAsociacion {
      edges {
        node {
          nombre
          id
        }
      }
    }
  }
`