import * as React from 'react'
import {useRouter} from 'next/router'

import {Main} from 'templates'

const RemoveProductPage = () => {
  const router = useRouter()

  return (
    <Main>
      <h1>Removing product #{router.query.id}?</h1>
    </Main>
  )
}

export default RemoveProductPage
