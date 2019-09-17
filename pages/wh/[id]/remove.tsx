import * as React from 'react'
import {useRouter} from 'next/router'

import {Main} from 'templates'

const RemoveWarehousePage = () => {
  const router = useRouter()

  return (
    <Main>
      <h1>Removing warehouse #{router.query.id}?</h1>
    </Main>
  )
}

export default RemoveWarehousePage
