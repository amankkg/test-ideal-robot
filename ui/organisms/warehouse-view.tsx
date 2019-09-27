import * as React from 'react'
import styled from 'styled-components'

import {Info} from '../molecules/info'

const Root = styled.div`
  display: block;
`

type Props = {
  label?: string
  address?: string
  className?: string
}

const WarehouseView = ({label, address, ...props}: Props) => {
  return (
    <Root {...props}>
      <Info label="label" value={label} />
      <Info label="address" value={<h3>embed map</h3>} />
    </Root>
  )
}

export {WarehouseView}
