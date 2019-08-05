import React from "react"
import { graphql } from "gatsby"
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
        {data.allStrapiNormativa.edges.map((document, index) => (
          <div
            className="col-11 col-md-6 my-3 shadow container mx-auto d-flex"
            key={index}
          >
            <Item
              data={{
                titulo: document.node.Nombre,
                descripcion: document.node.Descripcion,
                link: document.node.Link,
                id: document.node.id,
              }}
            />
          </div>
        ))}
      </div>
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