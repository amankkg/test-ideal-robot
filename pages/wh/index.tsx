import * as React from 'react'
import Link from 'next/link'

import {List} from '../../ui/templates/list'

const WarehousesPage = () => (
  <List>
    <h1>Warehouses List</h1>
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
  </List>
)

export default WarehousesPage
