import React from "react"
import Section from "../../../section/section"
import List from "../../../list/list"

const listContent = [
  "Разработка и обучение нейронных сетей",
  "Программирование C, C++, Phyton, Java, Autodesk 3Ds Max, Unread Engine, MATLAB, VHDL, Verilog",
  "Работа с микроконтроллерами и ПЛИС RFID, FPGA, Smart Card, MultiSIM в среде MATLAB",
  "Работа с оборудованием National Instruments в среде LabView",
  "Расчет параметров и изготовление из дюроида сверхэффективных антенн",
  "Подготовка проектов и их исполнение на 3D принтере.",
]

const QualifitaionSection = props => {
  return (
    <Section title="Квалификация исполнителей">
      <List items={listContent} />
    </Section>
  )
}

export default QualifitaionSection
