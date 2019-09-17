import * as React from 'react'
import {render, getByText} from '@testing-library/react'

import {Wrapper} from 'test-utils'
import ProductPage from 'pages/p/[id]'

// TODO: mock next/router?
test.skip('product details page renders', async () => {
  const {container} = render(<Wrapper child={<ProductPage />} />)

  expect(getByText(container, /\#\d product details/)).toBeVisible()
})
