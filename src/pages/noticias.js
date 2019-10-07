import React from "react"
import Noticia from "../components/noticias/noticia"
import ListaNoticias from "../components/Items/noticias/ListaNoticias"
import { STRAPI_URL } from "../config/strapiConfig"
import Strapi from "strapi-sdk-javascript"
import Layout from "../components/layout/layout"
import { Col } from "reactstrap"

const strapi = new Strapi(STRAPI_URL)

class Noticias extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noticias: [],
      start: 0,
      limit: 6,
      selected: -1,
    }
    this.goBack = this.goBack.bind(this)
    this.selectItem = this.selectItem.bind(this)
  }

  goBack = () => {
    this.setState({ selected: -1 })
  }

  selectItem = id => {
    this.setState({ selected: id })
  }

  async componentWillMount() {
    const _noticias = await strapi.getEntries("noticias", {
      _start: 0,
      _limit: this.state.limit,
    })
    this.setState({ noticias: _noticias })
  }

  render() {
    console.log("selected", this.state.selected)

    return (
      <Layout>
        <Col className="mx-auto" xl="10" lg="10" md="11" sm="11" xs="11">
          {this.state.selected !== -1 ? (
            <Noticia
              selected={this.state.noticias[this.state.selected]}
              next={this.state.noticias[this.state.selected + 1]}
              prev={this.state.noticias[this.state.selected - 1]}
              onClick={this.goBack}
            />
          ) : (
            <ListaNoticias
              noticias={this.state.noticias}
              onClick={this.selectItem}
            />
          )}
        </Col>
      </Layout>
    )
  }
}

export default Noticias
