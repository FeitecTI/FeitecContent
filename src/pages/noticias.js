import React from "react"
import Noticia from "../components/noticias/noticia"
import ItemNoticia from "../components/Items/noticias/ItemNoticia"
import { STRAPI_URL } from "../config/strapiConfig"
import Strapi from "strapi-sdk-javascript"
import Layout from "../components/layout/layout"

const strapi = new Strapi(STRAPI_URL)

class Noticias extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noticias: [],
      start: 0,
      limit: 6,
    }
  }

  async componentDidMount() {
    const noticias = await strapi.getEntries("noticias", {
      _start: 0,
      _limit: this.state.limit,
    })
    this.setState({ noticias })
  }

  render() {
    console.log(this.state.noticias)
    return (
      <Layout>
        <Noticia />
      </Layout>
    )
  }
}

export default Noticias
