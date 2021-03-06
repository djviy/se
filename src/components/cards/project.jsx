import React from "react"
import PropTypes from "prop-types"

import styled from "@emotion/styled"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Paper = styled("div")`
  border-radius: 1rem;
  position: relative;
  background-color: ${({ theme }) => theme.palette.background.paper};
  padding: 1rem;
  transform: translateZ(0);
  /* transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1); */
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1),
    opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1),
    color 0.2s cubic-bezier(0.19, 1, 0.22, 1),
    box-shadow 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    cursor: pointer;
    transform: translateY(-16px) translateZ(0);
    transform: scale(1.05) translateZ(0);
    opacity: 1;
    box-shadow: 0 0 58px rgba(6, 67, 117, 0.4);
    & span {
      color: ${({ theme }) => theme.palette.primary.main};
      text-decoration: underline;
    }
  }
`
const Content = styled("div")`
  display: flex;
  color: ${({ theme }) => theme.palette.text.secondary};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
  }
`
const Text = styled("div")`
  margin-left: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin-left: 0rem;
    margin-top: 1rem;
  }
  & h4 {
    color: ${({ theme }) => theme.palette.text.secondary};
    margin-bottom: 1rem;
  }
  & span {
    text-decoration: underline;
  }
`

const Project = ({ image, title, description, link }) => {
  return (
    <Paper>
      <Link to={link} style={{ textDecoration: "none" }}>
        <Content>
          <div style={{ width: "50%" }}>
            <Image
              fluid={image.sharp.fluid}
              alt={title}
              style={{ borderRadius: " 0.5rem" }}
            />
          </div>
          <Text>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <span>Подробнее...</span>
          </Text>
        </Content>
      </Link>
    </Paper>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
}
// Project.defaultProps = {}

export default Project
