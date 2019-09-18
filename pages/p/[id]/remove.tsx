import * as React from 'react'
import {useRouter} from 'next/router'

import {List} from '../../../ui/templates/list'

const RemoveProductPage = () => {
  const router = useRouter()

  return (
    <List>
      <h1>Removing product #{router.query.id}?</h1>
    </List>
  )
}

export default RemoveProductPage
