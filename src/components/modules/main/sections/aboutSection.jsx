import React from "react"
import styled from "@emotion/styled"

import Section from "../../../section/section"

const About = styled("div")`
  max-width: 600px;
  margin: auto;
`
const bg =
  "linear-gradient(0deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(269.62deg, rgba(0, 153, 229, 0.15) 0.05%, rgba(0, 153, 229, 0.0075) 42.71%, rgba(0, 141, 229, 0.0075) 61.44%, rgba(0, 109, 229, 0.15) 99.95%);"

const AboutSection = () => {
  return (
    <Section hideHeader={false} bg={bg}>
      <About>
        <b>ООО «СМАРТ системс инжиниринг»</b> ⏤ производственно-инжиниринговая
        компания, реализующая потенциал и квалификацию опытных системных
        инженеров в разработке собственных продуктов и под заказ.
      </About>
    </Section>
  )
}

export default AboutSection
