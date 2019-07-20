import React from "react"
import { Link } from "gatsby"
import { 
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Collapse
} from "reactstrap"
import { HEADER, MAIN_COLOR } from "../config/consts"
import pathInfo from "../config/pathInfo"

const Item = ({path, text}) => (
  <Link to= {path} className = "nav-link text-dark">
    <NavItem>
      {text}
    </NavItem>
  </Link>
)

const Dropdown = ({text, pathsInfo}) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret className = "text-dark">
      {text}
    </DropdownToggle>
    <DropdownMenu >
      {pathsInfo.map((info, index)=> (
          <Link to = {info.path} key = {index} className="dropdown-item text-dark" style= {{whiteSpace:"pre-line"}}>
            {info.text}
          </Link>
        ))}
    </DropdownMenu>
  </UncontrolledDropdown>
)

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    // color celeste se ve más bonito 00AEE0
    // Carpeta Layout (Header, Footer, Layout)
    return (
      <Navbar light style = {{backgroundColor: MAIN_COLOR}} expand="md"> 
        <Link to= "/" className = "navbar-brand mr-auto text-dark">
          { this.props.siteTitle }
        </Link>
        <NavbarToggler onClick = {this.toggleNavbar} className="ml-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className= "ml-auto" navbar>
            {
              HEADER.map((info, index) => {
              if (info instanceof pathInfo) {
                return(
                  <Item 
                    path = {info.path} 
                    text = {info.text} 
                    key = {index}
                  />
                )
              } else { // Tipo dropdownInfo
                return(
                  <Dropdown
                    text = {info.name}
                    pathsInfo = {info.pathInfo}
                    key = {index}
                  />
                )
              }
            })}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header