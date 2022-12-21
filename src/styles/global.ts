import { createGlobalStyle } from 'styled-components'
import { modularScale } from 'polished'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: color, background-color .2s
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.font};
    font-size: ${modularScale(2)}
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .MonstersWrapper {
    width: 100%;
    max-height: 70vh;
  }
`