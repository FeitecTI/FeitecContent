import React from "react"
import 
{
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from "reactstrap"
import { Link } from "gatsby"

const Dropdown = ({ text, pathsInfo }) => (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret className="text-dark">
            {text}
        </DropdownToggle>
        <DropdownMenu>
            {pathsInfo.map((info, index) => (
                <Link to={info.path} key={index} className="dropdown-item text-dark" style={{ whiteSpace: "pre-line" }}>
                    {info.text}
                </Link>
            ))}
        </DropdownMenu>
    </UncontrolledDropdown>
)

export default Dropdown