import * as React from 'react'
import styled from 'styled-components'

import {Header} from '../organisms/header'
import {Footer} from '../organisms/footer'

const Root = styled.div`
  display: grid;
  align-content: space-between;
  grid-template:
    'header header' 80px
    'sidebar main' 1fr
    'footer footer' 40px
    / 350px 1fr;
`

const HeaderArea = styled(Header)`
  grid-area: header;
  align-self: start;
`

const SidebarArea = styled.div`
  grid-area: sidebar;
`

const MainArea = styled.div`
  grid-area: main;
  background: ${props => props.theme.bgMain};
`

const FooterArea = styled(Footer)`
  grid-area: footer;
  justify-self: center;
  align-self: end;
`

type Props = {sidebar?: React.ReactNode; children?: React.ReactNode}

const Details = ({sidebar, children}: Props) => (
  <Root>
    <HeaderArea />
    <SidebarArea>{sidebar}</SidebarArea>
    <MainArea>{children}</MainArea>
    <FooterArea />
  </Root>
)

export {Details}
