import * as React from 'react'
import Link from 'next/link'

import {Main} from 'templates'

const WarehousesPage = () => (
  <Main>
    <h1>Warehouses List</h1>
    <ul>
      <li>
        <Link href="/wh/[id]" as="/wh/1">
          warehouse #1
        </Link>
      </li>
      <li>
        <Link href="/wh/[id]" as="/wh/2">
          warehouse #2
        </Link>
      </li>
      <li>
        <Link href="/wh/[id]" as="/wh/3">
          warehouse #3
        </Link>
      </li>
    </ul>
  </Main>
)

export default WarehousesPage
