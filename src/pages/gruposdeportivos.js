import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Contenedor from "../components/Items/gruposdeoprtivos-culturales/contenedorGrupos"
import { graphql } from "gatsby"

function GruposDeportivos({ data }) {
  return (
    <Layout>
      <SEO title="Grupos Deportivos" />
      <h2 style={{ textAlign: "center" }}>Grupos Deportivos</h2>
      <h4 style={{ textAlign: "center", fontWeight: "normal", text: "muted" }}>
        En el TEC existen grupos deportivos en los cuales te podés involucrar de
        forma complementaria a tus estudios. Acá te mencionamos los grupos
        pertenecientes a la Unidad de Deporte del TEC:
      </h4>
      <div className="row">
        {data.allStrapiGrupodeportivo.edges.map((document, index) => (
          <div className="col-11 col-md-4 my-3" key={index}>
            <Contenedor
              data={{
                titulo: document.node.Nombre,
                link: document.node.Link,
                src: document.node.Preview.childImageSharp.fluid.src,
              }}
            />
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default GruposDeportivos

export const gruposDeportivosQuery = graphql`
  query gruposDeportivosQuery {
    allStrapiGrupodeportivo(sort: { fields: Nombre, order: ASC }) {
      edges {
        node {
          Nombre
          Link
          Preview {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  }
`
