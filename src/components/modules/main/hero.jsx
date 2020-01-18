import React from "react"
import styled from "@emotion/styled"
import Container from "../../layout/container"
//import { useTheme } from "emotion-theming"
import ImageHero from "./image-hero"

const HeroContent = styled("div")`
  text-align: center;
  z-index: 2;
  & > h4 {
    color: ${({ theme }) => theme.palette.text.secondary};
  }
`

const Hero = () => {
  return (
    <section>
      <Container>
        <HeroContent>
          <h1>Разработка приложений на нейросетевых вычислениях</h1>
          <h4>под десктопные и мобильные платформы</h4>
          <ImageHero />
        </HeroContent>
      </Container>
    </section>
  )
}

export default Hero
