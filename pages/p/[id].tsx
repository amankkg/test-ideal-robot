import * as React from 'react'
import {useRouter} from 'next/router'

import {ProductView} from '../../ui/organisms/product-view'
import {Details} from '../../ui/templates/details'

const ProductPage = () => {
  const router = useRouter()

  // TODO: fetch product?
  const product = {name: 'foo', description: 'bar', imageUri: 'baz'}

  return (
    <Details sidebar={<ProductView {...product} />}>
      <h1>#{router.query.id} product stocks</h1>
    </Details>
  )
}

export default ProductPage
