import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"
import { Link } from "react-scroll"
import styled from "@emotion/styled"
import { useTheme } from "emotion-theming"
import { ClassNames } from "@emotion/core"

import Logo from "../../../images/topbar_logo.svg"
import ThemeSwitcher from "./themeSwitcher/themeSwitcher"
import Container from "../../layout/container"

const Nav = styled("nav")`
  display: flex;
  align-items: center;
`
const Header = styled("header")`
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.25);
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  z-index: 2;
`
const Content = styled("div")`
  margin: auto;
  max-width: 960px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
const NavLink = styled("div")`
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: #666a7a;
  margin-right: 1rem;
`

const anchors = [
  {
    title: "Проекты",
    to: "projects",
  },
  {
    title: "Услуги",
    to: "services",
  },
  {
    title: "Контакты",
    to: "contacts",
  },
]

const Topbar = ({ isDark, toggleTheme, isProject }) => {
  const theme = useTheme()
  const cls1 = `
    height: 20px;
    font-size: 20px;
    color: ${theme.palette.text.primary}
  `
  const projectContent = (
    <div>
      <GatsbyLink to="/">← Назад</GatsbyLink>
    </div>
  )
  const mainContent = (
    <>
      <Link to={"main"} spy={true} smooth={true} offset={-40} duration={300}>
        <Logo />
      </Link>
      <Nav>
        <ClassNames>
          {({ css, cx }) => {
            return anchors.map(({ title, to }) => {
              return (
                <NavLink key={to}>
                  <Link
                    activeClass={cx(
                      css`
                        ${cls1};
                      `
                    )}
                    to={to}
                    spy={true}
                    smooth={true}
                    offset={-10}
                    duration={500}
                  >
                    {title}
                  </Link>
                </NavLink>
              )
            })
          }}
        </ClassNames>
      </Nav>
      <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
    </>
  )

  return (
    <Header>
      <Container>
        <Content>{isProject ? projectContent : mainContent}</Content>
      </Container>
    </Header>
  )
}

Topbar.propTypes = {
  isDark: PropTypes.bool,
  toggleTheme: PropTypes.func,
  isProject: PropTypes.bool,
}

Topbar.defaultProps = {
  isProject: false,
}
export default Topbar
