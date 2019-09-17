import * as React from 'react'
import {useRouter} from 'next/router'

import {Main} from 'templates'

const ProductPage = () => {
  const router = useRouter()

  return (
    <Main>
      <h1>#{router.query.id} product details</h1>
    </Main>
  )
}

export default ProductPage
