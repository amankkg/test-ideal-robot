import * as React from 'react'
import {useRouter} from 'next/router'

import {Details} from '../../../ui/templates/details'

const WarehousePage = () => {
  const router = useRouter()

  return (
    <Details sidebar={<h1>sidebar</h1>}>
      <h1>#{router.query.id} warehouse details</h1>
    </Details>
  )
}

export default WarehousePage
