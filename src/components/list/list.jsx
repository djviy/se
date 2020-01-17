import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import Mail from "../../images/contacts/mail.svg"
import MapPin from "../../images/contacts/map-pin.svg"
import Phone from "../../images/contacts/phone.svg"
import User from "../../images/contacts/user.svg"
import Skype from "../../images/contacts/skype.svg"

import Icons from "../../images/icons"

const ListUl = styled("ul")`
  text-decoration: none;
  padding: 0px 0px;
  color: ${({ theme }) => theme.palette.text.primary};
  & li {
    display: flex;
    margin-bottom: 1rem;
  }
  & p {
    margin-left: 0.5rem;
  }
`

const listContent = (type, items) => {
  switch (type) {
    case "default":
      return items.map((item, index) => {
        return (
          <li key={index}>
            <Icons />
            <p>{item}</p>
          </li>
        )
      })
    case "contacts":
      return (
        <>
          <li>
            <MapPin />
            <p>4320 Selah Way, Burlington, 05401</p>
            <p>4320 Selah Way, Burlington, 05401</p>
          </li>
          <li>
            <User />
            <p>John Smith</p>
          </li>
          <li>
            <Phone />
            <p>+375 (291) 230-34-53</p>
          </li>
          <li>
            <Mail />
            <p>emailme@gmail.com</p>
          </li>
          <li>
            <Skype />
            <p>skypeme</p>
          </li>
        </>
      )
    default:
      return <li>Unknown listype</li>
  }
}

const List = ({ items, type }) => {
  return <ListUl>{listContent(type, items)}</ListUl>
}

List.propTypes = {
  items: PropTypes.array,
  type: PropTypes.string,
}
List.defaultProps = {
  type: "default",
}

export default List
