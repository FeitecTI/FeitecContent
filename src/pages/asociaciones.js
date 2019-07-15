import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Asociacion from "../components/asociacion/asociacion"


function Asociaciones({data}) {
  return(
    <Layout>
      <SEO title="Feitec" />
      <ul>
        {data.allStrapiAsociacion.edges.map((document, index) => (
            <Asociacion datos = {document.node} key= {index}/>
        ))}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}


export default Asociaciones


export const asoQuery = graphql`  
  query IndexQuery {
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