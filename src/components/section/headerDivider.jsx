import React from "react"
// import PropTypes from 'prop-types';
import styled from "@emotion/styled"

const Divider = styled("div")`
  width: 80px;
  height: 4px;
  background: linear-gradient(
    270deg,
    #0099e5 0%,
    #0099e5 0.01%,
    rgba(0, 153, 229, 0.5) 51.04%,
    #0099e5 100%
  );
  border-radius: 2px;
`

const HeaderDivider = props => {
  return <Divider />
}

// HeaderDivider.propTypes = {

//  };

export default HeaderDivider
