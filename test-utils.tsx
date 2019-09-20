import * as React from 'react'
import {ThemeProvider, DefaultTheme} from 'styled-components'

const theme: DefaultTheme = {
  fg: 'blue',
  bg: 'red',
  bgMain: 'brown',
}

type Props = {child: React.ReactChild}

export const Wrapper = ({child}: Props) => (
  <ThemeProvider theme={theme}>{child}</ThemeProvider>
)
