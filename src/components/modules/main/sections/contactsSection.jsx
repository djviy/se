import React from "react"

import Section from "../../../section/section"
import List from "../../../list/list"

const ContactsSection = props => {
  return (
    <Section title="Контакты">
      <List type="contacts" />
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9092f8ed37e0ac1e9f8fa824013b4aadc18c5568ef8af47f27e6f94bca2c7764&source=constructor"
        title="map"
        width="100%"
        height={400}
        frameBorder={0}
      />
    </Section>
  )
}

export default ContactsSection
