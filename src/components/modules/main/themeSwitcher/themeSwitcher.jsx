import React from "react"
import PropTypes from "prop-types"
import "./themeSwitcher.css"

const ThemeSwitcher = ({ isDark, toggleTheme }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="theme-switcher"
        checked={isDark}
        onChange={() => {
          toggleTheme(!isDark)
        }}
      />
      <span className="slider round"></span>
    </label>
  )
}

ThemeSwitcher.propTypes = {
  isDark: PropTypes.bool,
  toggleTheme: PropTypes.func,
}

export default ThemeSwitcher
