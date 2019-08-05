import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Item from "../components/Items/normativas/contenedor"

//<Img fluid={data.logo.childImageSharp} alt="" />
function Normativas({ data }) {
  console.log(data)
  return (
    <Layout>
      <SEO title="Feitec" />
      <div className="row">
        {data.allStrapiNormativa.edges.map(document => (
          <Item
            data={{
              titulo: document.node.Nombre,
              descripcion: document.node.Descripcion,
              link: document.node.Link,
              id: document.node.id,
            }}
          />
        ))}
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default Normativas

export const normativasQuery = graphql`
  query NormativasQuery {
    allStrapiNormativa {
      edges {
        node {
          id
          Nombre
          Descripcion
          Link
        }
      }
    }
  }
`
