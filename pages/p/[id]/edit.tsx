import * as React from 'react'
import {useRouter} from 'next/router'

import {Main} from 'templates'

const EditProductPage = () => {
  const router = useRouter()

  return (
    <Main>
      <h1>Edit Product #{router.query.id}</h1>
    </Main>
  )
}

export default EditProductPage
