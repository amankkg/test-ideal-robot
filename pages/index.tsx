import * as React from 'react'
import Link from 'next/link'

import {List} from '../ui/templates/list'

const ProductsPage = () => (
  <List>
    <h1>Products List</h1>
    <ul>
      <li>
        <Link href="/p/[id]" as="/p/1">
          product #1
        </Link>
      </li>
      <li>
        <Link href="/p/[id]" as="/p/2">
          product #2
        </Link>
      </li>
      <li>
        <Link href="/p/[id]" as="/p/3">
          product #3
        </Link>
      </li>
    </ul>
  </List>
)

export default ProductsPage
