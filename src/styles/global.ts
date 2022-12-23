import { createGlobalStyle } from 'styled-components'
import { modularScale, between } from 'polished'

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

  body #root {
    width: 100%;
    height: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .content {
    margin-top: ${between('5px', '10px')};
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%
  }
`