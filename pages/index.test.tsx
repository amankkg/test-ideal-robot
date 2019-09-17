import * as React from 'react'
import {render, getByText} from '@testing-library/react'

import {Wrapper} from 'test-utils'
import Index from './index'

test('index page loads', async () => {
  const {container} = render(<Wrapper child={<Index />} />)

  expect(getByText(container, 'Index')).toBeVisible()
})
