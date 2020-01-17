import React from "react"
import PropTypes from "prop-types"
import SectionHeader from "./sectionHeader"
import styled from "@emotion/styled"
import Container from "../layout/container"

const Block = styled("section")`
  padding: 64px 0px;
  background: ${({ background, theme }) =>
    background || theme.palette.background.default};
`
const Section = ({ title, children, hideHeader, bg }) => {
  return (
    <Block background={bg}>
      <Container>
        <SectionHeader hide={hideHeader}>{title}</SectionHeader>
        <div>{children}</div>
      </Container>
    </Block>
  )
}

Section.propTypes = {
  children: PropTypes.node,
}
Section.defaultProps = {
  bg: "",
}

export default Section
