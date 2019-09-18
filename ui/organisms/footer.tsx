import * as React from 'react'
import styled from 'styled-components'

const Root = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-height: 130px;
  color: gray;
`

const Footer = ({className}: {className?: string}) => (
  <Root className={className}>Ⓒ 2019</Root>
)

export {Footer}
