/**
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "emotion-theming"

import Topbar from "../modules/main/topbar"
import GlobalStyles from "./globalStyles"
import { darkTheme, theme } from "../../utils/theme"

const Layout = ({ children, isProject }) => {
  const [isDark, toggleTheme] = useState(false)

  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <Topbar toggleTheme={toggleTheme} isDark={isDark} isProject={isProject} />
      <GlobalStyles />
      <main style={{ position: "relative" }}>{children}</main>
      {/* <footer>Footer</footer> */}
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isProject: PropTypes.bool,
}
Layout.defaultProps = {
  isProject: false,
}

export default Layout
