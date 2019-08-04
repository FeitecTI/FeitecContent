import React from "react"
import { Link } from "gatsby"
import { NavItem } from "reactstrap"

const Item = ({ path, text }) => (
    <Link to={path} className="nav-link text-dark">
        <NavItem>
            {text}
        </NavItem>
    </Link>
)

export default Item