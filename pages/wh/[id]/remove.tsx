import * as React from 'react'
import {useRouter} from 'next/router'

import {Default} from '../../../ui/templates/default'

const RemoveWarehousePage = () => {
  const router = useRouter()

  return (
    <Default>
      <h1>Removing warehouse #{router.query.id}?</h1>
    </Default>
  )
}

export default RemoveWarehousePage
