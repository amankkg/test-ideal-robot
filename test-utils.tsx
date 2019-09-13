import * as React from 'react'
import {ThemeProvider} from 'styled-components'

import {theme} from './theming'

type Props = {child: React.ReactChild}

export const Wrapper = ({child}: Props) => (
  <ThemeProvider theme={theme}>{child}</ThemeProvider>
)
