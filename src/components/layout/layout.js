import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import MainHeader from "./MainHeader"
import "./layout.css"

const Layout = ({ children, isMain }) => {
  const isMobile = window.innerWidth < 480
  return (
    <>
      {isMain && !isMobile ? <MainHeader /> : <Header />}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
