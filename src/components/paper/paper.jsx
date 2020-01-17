import React from "react"
import PropTypes from "prop-types"

//import { jsx } from "@emotion/core"

const styles = {
  padding: "1rem",
}

const Paper = ({ children }) => {
  return <div css={styles}>{children}</div>
}

Paper.propTypes = {
  children: PropTypes.node,
}
Paper.defaultProps = {
  children: <div>content</div>,
}

export default Paper
