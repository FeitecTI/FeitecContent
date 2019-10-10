import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
//import DeleteList from "../components/deleteList"

const IndexPage = () => (
  <Layout>
    <SEO title="Feitec" />
    <p>JAJA SALU3 Solo estoy rellenando para que no se despiche tere ok bai</p>
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
