import * as React from 'react'
import {useRouter} from 'next/router'

import {List} from '../../../ui/templates/list'

const RemoveWarehousePage = () => {
  const router = useRouter()

  return (
    <List>
      <h1>Removing warehouse #{router.query.id}?</h1>
    </List>
  )
}

export default RemoveWarehousePage
