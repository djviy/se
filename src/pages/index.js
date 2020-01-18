import React from "react"
//import {useState, useEffect } from "react"
//import { Link } from "gatsby"
import { Element } from "react-scroll"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Hero from "../components/modules/main/hero"
import StyledParticles from "../components/modules/main/styledParticles"
import AboutSection from "../components/modules/main/sections/aboutSection"
import ProjectsSection from "../components/modules/main/sections/projectsSection"
import ServicesSection from "../components/modules/main/sections/servicesSection"
import QualifitaionSection from "../components/modules/main/sections/qualifitaionSection"
import ContactsSection from "../components/modules/main/sections/contactsSection"
//import Section from "../components/section/section"

const Particles = styled("div")`
  position: absolute;
  height: 640px;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 0;
`

const IndexPage = () => {
  // const [scrollToProjects, setScroll] = useState()

  // useEffect(() => {
  //   console.log(scrollToProjects)
  //   if (!scrollToProjects) {
  //     //scroll to projects
  //   }
  // }, [scrollToProjects])

  return (
    <>
      <Particles>
        <StyledParticles />
      </Particles>
      <Layout>
        <SEO
          title="SmartSE"
          lang="ru"
          description="Разработка приложений на нейросетевых вычислениях"
        />
        <Element name="main">
          <Hero />
        </Element>
        <AboutSection />
        <Element name="projects">
          <ProjectsSection />
        </Element>
        <Element name="services">
          <ServicesSection />
        </Element>
        <QualifitaionSection />
        {/* <Section hideHeader={false}>Python, Matlab, C++</Section> */}
        <Element name="contacts">
          <ContactsSection />
        </Element>
      </Layout>
    </>
  )
}

export default IndexPage
