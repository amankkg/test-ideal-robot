import * as React from 'react'
import styled from 'styled-components'

import {Info} from '../molecules/info'

const Root = styled.div`
  display: block;
`

type Props = {
  name?: string
  description?: string
  imageUri?: string
  className?: string
}

const ProductView = ({name, description, imageUri, ...props}: Props) => {
  return (
    <Root {...props}>
      <Info label="image" value={<img src={imageUri} />} />
      <Info label="name" value={name} />
      <Info label="description" value={description} />
    </Root>
  )
}

export {ProductView}
