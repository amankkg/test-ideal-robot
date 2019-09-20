import * as React from 'react'
import newId from 'nanoid'
import styled from 'styled-components'
import Router from 'next/router'

import {Default} from '../../ui/templates/default'
import {ProductForm} from '../../ui/organisms/product-form'

const StyledForm = styled(ProductForm)`
  max-width: 400px;
  max-height: 250px;
`

const NewProductPage = () => (
  <Default>
    <h1>New product</h1>
    <StyledForm
      onSubmit={p => {
        console.log('created a product: $0', {id: newId(), ...p})
        Router.push('/p')
      }}
    />
  </Default>
)

export default NewProductPage
