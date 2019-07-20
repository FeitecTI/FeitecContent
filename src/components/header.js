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

const Item = ({path, text}) => (
  <Link to= {path} className = "nav-link text-dark">
    <NavItem>
      {text}
    </NavItem>
  </Link>
)

const Dropdown = ({text, paths, options}) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret className = "text-dark">
      {text}
    </DropdownToggle>
    <DropdownMenu >
      {paths.map((path, index)=> (
          <Link to = {path} key = {index} className="dropdown-item text-dark" style= {{whiteSpace:"pre-line"}}>
            {options[index]}
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
    return (
      <Navbar light style = {{backgroundColor: "#7fc232"}} expand="md">
        <Link to= "/" className = "navbar-brand mr-auto text-dark">
          { this.props.siteTitle }
        </Link>
        <NavbarToggler onClick = {this.toggleNavbar} className="ml-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav className= "ml-auto" navbar>
            <Item path = "/" text = "Inicio"/>
            <Dropdown 
              text = "Acerca De"
              paths = {[
                "/",
                "/"
              ]}
              options = {[
                "¿Quiénes Somos?", 
                "La lucha estudiantil de los \"Párvulos Guerrilleros\" del tec"
              ]}
              />
            <Dropdown
            text = "Representación Estudiantil"
            paths = {[
              "/asociaciones",
              "/",
              "/",
              "/"
            ]}
            options ={[
              "Asociaciones de Estudiantes",
              "Consejos y Órganos Feitec",
              "Grupos deportivos",
              "Grupos culturales"
            ]}
            />
            <Item path = "/" text = "Normativa"/>
            <Item path = "/" text = "Noticias"/>
            <Item path = "/" text = "Eventos"/>
            <Item path = "/" text = "Contactenos"/>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Header