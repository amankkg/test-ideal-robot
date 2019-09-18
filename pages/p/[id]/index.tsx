import * as React from 'react'
import {useRouter} from 'next/router'

import {Details} from '../../../ui/templates/details'

const ProductPage = () => {
  const router = useRouter()

  return (
    <Details sidebar={<h1>sidebar</h1>}>
      <h1>#{router.query.id} product details</h1>
    </Details>
  )
}

export default ProductPage
