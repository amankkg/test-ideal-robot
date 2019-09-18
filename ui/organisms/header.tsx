import * as React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Root = styled.header`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > a {
    margin-left: 5px;
  }
`

// TODO: actual content shouldn't be hardcoded
const Header = ({className}: {className?: string}) => (
  <Root className={className}>
    <Link href="/">
      <a>Products</a>
    </Link>
    <Link href="/wh">
      <a>Warehouses</a>
    </Link>
    <Link href="/insights">
      <a>Insights</a>
    </Link>
  </Root>
)

export {Header}
