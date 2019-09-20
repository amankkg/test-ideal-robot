import * as React from 'react'
import {useRouter} from 'next/router'

import {Default} from '../../../ui/templates/default'

const RemoveProductPage = () => {
  const router = useRouter()

  return (
    <Default>
      <h1>Removing product #{router.query.id}?</h1>
    </Default>
  )
}

export default RemoveProductPage
