import * as React from 'react'
import Link from 'next/link'

import {Default} from '../ui/templates/default'

const WarehousesPage = () => (
  <Default>
    <h1>Warehouses List</h1>
    <Link href="/wh/new">
      <a>create new</a>
    </Link>
    <ul>
      <li>
        <Link href="/wh/[id]" as="/wh/1">
          <a>warehouse #1</a>
        </Link>
      </li>
      <li>
        <Link href="/wh/[id]" as="/wh/2">
          <a>warehouse #2</a>
        </Link>
      </li>
      <li>
        <Link href="/wh/[id]" as="/wh/3">
          <a>warehouse #3</a>
        </Link>
      </li>
    </ul>
  </Default>
)

export default WarehousesPage
