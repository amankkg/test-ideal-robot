import * as React from 'react'
import {useRouter} from 'next/router'

import {List} from '../../../ui/templates/list'

const EditProductPage = () => {
  const router = useRouter()

  return (
    <List>
      <h1>Edit Product #{router.query.id}</h1>
    </List>
  )
}

export default EditProductPage
