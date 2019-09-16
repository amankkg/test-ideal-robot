import {Warehouse, State} from './domain'
import {addWarehouse, removeWarehouse} from './warehouse'

const initial: State = {
  products: {p1: {id: 'p1', name: '', description: null, imageUri: null}},
  warehouses: {wh1: {id: 'wh1', label: '', address: ''}},
  stocks: {wh1: {p1: 17}},
  unsorted: {p1: 42},
}

describe('addWarehouse', () => {
  it('should actually add a new warehouse and populate its empty stocks', () => {
    const warehouse: Warehouse = {
      id: 'wh2',
      address: '',
      label: '',
    }

    const actual = addWarehouse(warehouse)(initial)

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

    const actual = addWarehouse(warehouse, stocks)(initial)

    expect(actual.stocks.wh2.p1).toBe(42)
    expect(actual.unsorted.p1).toBe(0)
  })
})

describe('removeWarehouse', () => {
  it('should actually remove a warehouse and move the goods to unsorted', () => {
    const actual = removeWarehouse('wh1')(initial)

    expect(actual.warehouses.wh1).not.toBeDefined()
    expect(actual.stocks.wh1).not.toBeDefined()
    expect(actual.unsorted.p1).toBe(42 + 17)
  })

  it('should move goods to another warehouse', () => {
    const warehouse: Warehouse = {
      id: 'wh2',
      address: '',
      label: '',
    }
    const preActual = addWarehouse(warehouse)(initial)
    const actual = removeWarehouse('wh1', 'wh2')(preActual)

    expect(actual.stocks.wh2.p1).toBe(17)
  })

  // TODO: add more edge cases like this in other tests
  it('should throw if warehouse to remove is nonexistent', () => {
    const action = () => removeWarehouse('wh2')(initial)

    expect(action).toThrowErrorMatchingInlineSnapshot(
      `"Target warehouse is nonexistent."`,
    )
  })

  it('should throw if move-goods-to warehouse is nonexistent', () => {
    const action = () => removeWarehouse('wh1', 'wh2')(initial)

    expect(action).toThrowErrorMatchingInlineSnapshot(
      `"Move-goods-to warehouse is nonexistent."`,
    )
  })
})
