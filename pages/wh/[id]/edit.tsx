import * as React from 'react'
import {useRouter} from 'next/router'

import {Main} from 'templates'

const EditWarehousePage = () => {
  const router = useRouter()

  return (
    <Main>
      <h1>Edit Warehouse #{router.query.id}</h1>
    </Main>
  )
}

export default EditWarehousePage
