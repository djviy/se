import React from "react"
import { Global, css } from "@emotion/core"
import { useTheme } from "emotion-theming"

const GlobalStyles = () => {
  const { palette } = useTheme()
  //console.log(palette)

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          /* More info: https://bit.ly/2PsCnzk */
          /* * + * {
      margin-top: 1rem;
    } */

          html,
          body {
            background-color: ${palette.background.default};
            transition: background-color 0.2s ease-in-out;
            margin: 0;
            color: ${palette.text.secondary};
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 16px;
            line-height: 1.4;

            @media (max-width: 420px) {
              font-size: 18px;
            }

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
          }
          h1 {
            font-size: 48px;
            @media (max-width: 420px) {
              font-size: 32px;
            }
          }
          h2 {
            font-weight: 500;
            font-size: 48px;
            @media (max-width: 420px) {
              font-size: 32px;
            }
          }
          h3 {
            font-size: 28px;
            @media (max-width: 420px) {
              font-size: 24px;
            }
          }
          h4 {
            font-weight: 400;
            font-size: 24px;
            @media (max-width: 420px) {
              font-size: 20px;
            }
          }
          h5 {
            max-width: 600px;
            font-weight: 600;
            font-size: 18px;
            @media (max-width: 420px) {
              font-size: 20px;
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${palette.text.primary};
            line-height: 1.1;
            margin-bottom: 1rem;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: ${palette.text.primary};
          }

          li {
            margin-top: 0.25rem;
          }
        `}
      />
    </>
  )
}

export default GlobalStyles
