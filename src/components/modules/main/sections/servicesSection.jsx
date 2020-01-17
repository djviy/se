import React from "react"
//import PropTypes from "prop-types"

import Section from "../../../section/section"
import Paper from "../../../paper/paper"
//import DefaultSvg64 from "../../../../images/svg-jsx/DefaultSvg64"
import ServiceImage1 from "../../../../images/service/service_64_01.svg"
import ServiceImage2 from "../../../../images/service/service_64_02.svg"
import ServiceImage3 from "../../../../images/service/service_64_03.svg"
import ServiceImage4 from "../../../../images/service/service_64_04.svg"
import ServiceImage5 from "../../../../images/service/service_64_05.svg"
import ServiceImage6 from "../../../../images/service/service_64_06.svg"

const features = [
  {
    image: <ServiceImage1 />,
    text: "Алгоритмы глубинного обучения",
  },
  {
    image: <ServiceImage2 />,
    text: "IoT датчики",
  },
  {
    image: <ServiceImage3 />,
    text:
      "Устройства обработки радиосигналов: обнаружение, корреляционная обработка, определение параметров",
  },

  {
    image: <ServiceImage4 />,
    text: "Формирователи сигналов с заданными параметрами",
  },
  {
    image: <ServiceImage5 />,
    text:
      "БПЛА (мультикоптеры) на защищенной платформе, алгоритмы альтернативного позиционирования",
  },
  {
    image: <ServiceImage6 />,
    text:
      "Устройства обработки радиосигналов, обнаружение,корреляционная обработка",
  },
]

const ServicesSection = ({ element }) => {
  return (
    <Section title="Услуги разработки">
      <p style={{ maxWidth: "440px" }}>
        Выполнмим весь цикл разработки: от технического задания до выпуска
        прототипа (опытного образца) с комплектом документации. Системы на
        основе пк и встраиваемые.
      </p>

      <Paper>
        <div style={{ display: "flex" }}>
          {features.map(({ image, text }, index) => {
            return (
              <div key={index}>
                {image}
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </Paper>
    </Section>
  )
}

//ServicesSection.propTypes = {}

export default ServicesSection
