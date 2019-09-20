import * as React from 'react'
import {useRouter} from 'next/router'

import {Default} from '../../../ui/templates/default'

const EditWarehousePage = () => {
  const router = useRouter()

  return (
    <Default>
      <h1>Edit Warehouse #{router.query.id}</h1>
    </Default>
  )
}

export default EditWarehousePage
