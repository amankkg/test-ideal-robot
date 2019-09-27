import * as React from 'react'
import {useRouter} from 'next/router'

import {WarehouseView} from '../../ui/organisms/warehouse-view'
import {Details} from '../../ui/templates/details'

const WarehousePage = () => {
  const router = useRouter()

  // TODO: fetch warehouse?
  const warehouse = {label: 'foo', address: 'bar'}

  return (
    <Details sidebar={<WarehouseView {...warehouse} />}>
      <h1>#{router.query.id} warehouse stocks</h1>
    </Details>
  )
}

export default WarehousePage
