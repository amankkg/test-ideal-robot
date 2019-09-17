import * as React from 'react'
import {useRouter} from 'next/router'

import {Main} from 'templates'

const WarehousePage = () => {
  const router = useRouter()

  return (
    <Main>
      <h1>#{router.query.id} warehouse details</h1>
    </Main>
  )
}

export default WarehousePage
