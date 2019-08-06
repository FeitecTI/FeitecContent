import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
//import DeleteList from "../components/deleteList"

const IndexPage = () => (
  <Layout>
    <SEO title="Feitec" />

    <p>JAJA SALU3 Solo estoy rellenando para que no se despiche tere ok bai</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

/*
export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiDeletearticle {
      edges {
        node {
          id
          tittle
          content
        }
      }
    }
  }
`*/
