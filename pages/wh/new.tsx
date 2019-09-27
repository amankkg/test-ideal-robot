import * as React from 'react'
import newId from 'nanoid'
import styled from 'styled-components'
import Router from 'next/router'

import {Default} from '../../ui/templates/default'
import {WarehouseForm} from '../../ui/organisms/warehouse-form'

const StyledForm = styled(WarehouseForm)`
  max-width: 400px;
  max-height: 250px;
`

const NewWarehousePage = () => (
  <Default>
    <h1>New warehouse</h1>
    <StyledForm
      onSubmit={wh => {
        console.log('created a warehouse: $0', {id: newId(), ...wh})
        Router.push('/wh')
      }}
    />
  </Default>
)

export default NewWarehousePage
