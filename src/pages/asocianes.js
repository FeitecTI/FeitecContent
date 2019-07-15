import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Asociacion from "../components/asociacion/asociacion"

//import DeleteList from "../components/deleteList"

const Asociaciones = ({data}) => (
  <Layout>
    <SEO title="Feitec" />
    <h1>Hi people</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <ul>
      {data.allStrapiAsociacion.edges.map(document => (
        <li key={document.node.id}>
            <Link to={`/${document.node.id}`}>{document.node.nombre}</Link>
        </li>
      ))}
    </ul>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Asociaciones


export const asoQuery = graphql`  
  query IndexQuery {
    allStrapiAsociacion {
      edges {
        node {
          id
          nombre
        }
      }
    }
  }
`