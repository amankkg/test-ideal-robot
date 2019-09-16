import {addWarehouse} from './warehouse'
import {Warehouse, State} from './inventory'

const initial: State = {
  products: {p1: {id: 'p1', name: '', description: null, imageUri: null}},
  warehouses: {wh1: {id: 'wh1', label: '', address: ''}},
  stocks: {wh1: {p1: 0}},
  unsorted: {p1: 42},
}

describe('addWarehouse', () => {
  it('should add a new warehouse and populate its empty stocks', () => {
    const warehouse: Warehouse = {
      id: 'wh2',
      address: '',
      label: '',
    }

    const actual = addWarehouse(warehouse)()(initial)

    expect(actual.warehouses.wh2).toEqual(warehouse)
    expect(actual.stocks).toHaveProperty('wh2.p1', 0)
    expect(actual.unsorted).toEqual(initial.unsorted)
  })

  it('should populate given product stocks from unsorted', () => {
    const stocks = {p1: 42}
    const warehouse: Warehouse = {
      id: 'wh2',
      address: '',
      label: '',
    }

    const actual = addWarehouse(warehouse)(stocks)(initial)

    expect(actual.stocks.wh2.p1).toBe(42)
    expect(actual.unsorted.p1).toBe(0)
  })
})

// describe('removeWarehouse', () => {
//   it ('should fail', () => {expect(true).toBe(false)})
// }
// )
