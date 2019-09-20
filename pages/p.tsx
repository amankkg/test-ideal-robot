import * as React from 'react'
import Link from 'next/link'

import {Default} from '../ui/templates/default'

const ProductsPage = () => (
  <Default>
    <h1>Products List</h1>
    <Link href="/p/new">
      <a>create new</a>
    </Link>
    <ul>
      <li>
        <Link href="/p/[id]" as="/p/1">
          <a>product #1</a>
        </Link>
      </li>
      <li>
        <Link href="/p/[id]" as="/p/2">
          <a>product #2</a>
        </Link>
      </li>
      <li>
        <Link href="/p/[id]" as="/p/3">
          <a>product #3</a>
        </Link>
      </li>
    </ul>
  </Default>
)

export default ProductsPage
