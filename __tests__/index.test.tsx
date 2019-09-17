import * as React from 'react'
import {render, getByText} from '@testing-library/react'

import {Wrapper} from 'test-utils'
import Index from 'pages'

test('index page renders', async () => {
  const {container} = render(<Wrapper child={<Index />} />)

  expect(getByText(container, 'Products List')).toBeVisible()
})
