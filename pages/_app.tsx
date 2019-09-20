import App from 'next/app'
import {ThemeProvider, DefaultTheme, createGlobalStyle} from 'styled-components'

const theme: DefaultTheme = {
  fg: 'palevioletred',
  bg: 'white',
  bgMain: '#fafafa',
}

const GlobalStyle = createGlobalStyle`
  body {
    padding: 8px;
  }
`

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props

    return (
      <ThemeProvider theme={theme}>
        <>
          <Component {...pageProps} />
          <GlobalStyle />
        </>
      </ThemeProvider>
    )
  }
}
