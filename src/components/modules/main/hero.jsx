import React from "react"
import styled from "@emotion/styled"
import Container from "../../layout/container"
//import { useTheme } from "emotion-theming"
import ImageHero from "./image-hero"

const HeroContent = styled("div")`
  text-align: center;
  z-index: 2;
  & > h5 {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`

const Hero = props => {
  return (
    <section>
      <Container>
        <HeroContent>
          <h1>Разработка приложений на нейросетевых вычислениях</h1>
          <h5>под десктопные и мобильные платформы</h5>
          <ImageHero />
        </HeroContent>
      </Container>
    </section>
  )
}

export default Hero
