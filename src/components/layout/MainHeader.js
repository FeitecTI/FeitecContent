import React from "react"
import { Link } from "gatsby"
import { Navbar, NavbarToggler, Nav, Collapse, Media } from "reactstrap"

import { HEADER } from "../../config/consts"
import Dropdown from "./dropdown"
import Item from "./item"
import pathInfo from "../../config/pathInfo"
import logo from "../../images/Logo-Feitec.png"

class MainHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.state = {
      collapsed: true,
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <Navbar
        light
        expand="md"
        style={{ backgroundColor: "#eeeeee", maxHeight: "5rem" }}
      >
        <NavbarToggler onClick={this.toggleNavbar} className="ml-2" />
        <Collapse navbar isOpen={!this.state.collapsed}>
          <Nav navbar style={{ margin: "auto" }}>
            {HEADER.map((info, index) => {
              let icon = <></>
              if (index === HEADER.length / 2) {
                icon = (
                  <Link to="/" className="navbar-brand mr-auto">
                    <Media
                      src={logo}
                      style={{ maxHeight: "3rem", margin: "auto" }}
                      key={index + 10}
                    />
                  </Link>
                )
              }
              if (info instanceof pathInfo) {
                return (
                  <>
                    {icon}
                    <Item path={info.path} text={info.text} key={index} />
                  </>
                )
              } else {
                return (
                  <>
                    {icon}
                    <Dropdown
                      text={info.name}
                      pathsInfo={info.pathInfo}
                      key={index}
                    />
                  </>
                )
              }
            })}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default MainHeader
