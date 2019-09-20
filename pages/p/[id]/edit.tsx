import * as React from 'react'
import {useRouter} from 'next/router'

import {Default} from '../../../ui/templates/default'

const EditProductPage = () => {
  const router = useRouter()

  return (
    <Default>
      <h1>Edit Product #{router.query.id}</h1>
    </Default>
  )
}

export default EditProductPage
