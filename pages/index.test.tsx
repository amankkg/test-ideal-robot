import {render} from 'test-utils'

import Index from './index'

test('index page loads', async () => {
  const {container} = render(<Index />)

  expect(container).toMatchInlineSnapshot()
})
