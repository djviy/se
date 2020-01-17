import React from "react"
import PropTypes from "prop-types"
import HeaderDivider from "./headerDivider"

const SectionHeader = ({ children, hide }) => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      {hide && (
        <>
          <h2>{children}</h2>
          <HeaderDivider />
        </>
      )}
    </div>
  )
}

SectionHeader.propTypes = {
  children: PropTypes.string,
}
SectionHeader.defaultProps = {
  children: "Header H2",
  hide: true,
}

export default SectionHeader
