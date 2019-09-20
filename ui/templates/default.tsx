import * as React from 'react'
import styled from 'styled-components'

import {Header} from '../organisms/header'
import {Footer} from '../organisms/footer'

const Container = styled.div`
  display: grid;
  align-content: space-between;
  grid-template: 'header' 80px 'main' 1fr 'footer' 40px / 1fr;
`

const HeaderArea = styled(Header)`
  grid-area: header;
  align-self: start;
`

const Content = styled.main`
  grid-area: main;
  background: ${props => props.theme.bgMain};
`

const FooterArea = styled(Footer)`
  grid-area: footer;
  justify-self: center;
  align-self: end;
`

const Default = ({children}: {children: React.ReactNode}) => (
  <Container>
    <HeaderArea />
    <Content>{children}</Content>
    <FooterArea />
  </Container>
)

export {Default}
