import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Content = styled("div")`
  margin: auto;
  max-width: 960px;
  padding: 0px 1rem;
  width: 100%;
`

const Container = ({ children }) => {
  return <Content>{children}</Content>
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
