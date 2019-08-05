import React from "react"
import Evento from "../components/evento/evento"
import Strapi from "strapi-sdk-javascript"
import { STRAPI_URL } from "../config/strapiConfig"
import Layout from "../components/layout/layout"

const strapi = new Strapi(STRAPI_URL)

class Eventos extends React.Component {
  constructor(props) {
    super(props)
    this.showMore = this.showMore.bind(this)
    this.state = {
      eventos: [],
      limit: 1,
    }
  }

  showMore = async () => {
    await this.setState({ limit: this.state.limit + 5 })
    try {
      const eventos = await strapi.getEntries("eventos", {
        _limit: this.state.limit,
      })
      this.setState({ eventos })
    } catch (err) {
      alert(err)
    }
  }

  async componentDidMount() {
    try {
      const eventos = await strapi.getEntries("eventos", {
        _start: 0,
        _limit: this.state.limit,
      })
      this.setState({ eventos })
    } catch (err) {
      alert(err)
    }
  }

  render() {
    console.log(this.state)

    return (
      <Layout>
        {this.state.eventos.map((doc, index) => {
          doc.fecha = "Format date"
          return <Evento data={doc} key={index} />
        })}
        <button onClick={this.showMore}>Mostrar 5 más</button>
      </Layout>
    )
  }
}
export default Eventos
