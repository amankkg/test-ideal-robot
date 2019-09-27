import * as React from 'react'
import styled from 'styled-components'

import {Label} from '../atoms/label'

const Root = styled.p`
  display: block;
`

const StyledLabel = styled(Label)`
  display: inline;
  font-size: small;
`

const Value = styled(Label)`
  display: inline;
  font-size: large;
`

type Props = {
  label?: string
  value?: React.ReactNode
}

const Info = ({label, value, ...props}: Props) => (
  <Root {...props}>
    <StyledLabel>{label}</StyledLabel>: <Value>{value}</Value>
  </Root>
)

export {Info}
