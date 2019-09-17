import * as React from 'react'
import {render, getByText} from '@testing-library/react'

import {Wrapper} from 'test-utils'
import WarehousePage from 'pages/wh/[id]'

// TODO: mock next/router?
test.skip('warehouse details page renders', async () => {
  const {container} = render(<Wrapper child={<WarehousePage />} />)

  expect(getByText(container, /\#\d warehouse details/)).toBeVisible()
})
