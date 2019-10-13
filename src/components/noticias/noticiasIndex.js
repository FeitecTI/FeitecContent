import React from "react"
import Noticia from "./noticia"
import { STRAPI_URL } from "../../config/strapiConfig"
import Strapi from "strapi-sdk-javascript"
import { Col } from "reactstrap"

const strapi = new Strapi(STRAPI_URL)

class NoticiasIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      noticias: this.props.noticias,
      start: 0,
      limit: 6,
      selected: 0,
      index: 1,
    }
    this.goBack = this.goBack.bind(this)
    this.selectItem = this.selectItem.bind(this)
    this.next = this.next.bind(this)
    this.prev = this.prev.bind(this)
  }

  goBack = () => {
    this.setState({ selected: -1 })
  }

  selectItem = id => {
    this.setState({ selected: id })
  }

  next = () => {
    this.setState({
      selected: (this.state.selected + 1) % this.state.noticias.length,
    })
  }

  prev = () => {
    let pos = (this.state.selected - 1) % this.state.noticias.length
    this.setState({
      selected: pos < 0 ? this.state.noticias.length - 1 : pos,
    })
  }

  render() {
    console.log(this.state.noticias)
    return (
      <Col className="mx-auto" xl="10" lg="10" md="11" sm="11" xs="11">
        <Noticia
          selected={this.state.noticias[this.state.selected]}
          next={this.next}
          prev={this.prev}
          onClick={this.goBack}
          index={true}
        />
      </Col>
    )
  }
}

export default NoticiasIndex
