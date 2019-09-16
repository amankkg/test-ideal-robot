import {moveGoods, State, moveGoodsToUnsorted} from './inventory'

const state: State = {
  products: {
    p1: {id: 'p1', name: '', description: null, imageUri: null},
  },
  warehouses: {
    wh1: {id: 'wh1', label: '', address: ''},
    wh2: {id: 'wh2', label: '', address: ''},
  },
  stocks: {wh1: {p1: 42}, wh2: {p1: 0}},
  unsorted: {p1: 0},
}

describe('moveGoods', () => {
  it('should actually move the goods between warehouses', () => {
    const nextState = moveGoods('wh1', 'wh2', 'p1', 42)(state)

    expect(nextState.stocks.wh1.p1).toBe(0)
    expect(nextState.stocks.wh2.p1).toBe(42)
  })

  it('should throw if given amount is greater than available', () => {
    const action = () => moveGoods('wh1', 'wh2', 'p1', 146)(state)

    expect(action).toThrowErrorMatchingInlineSnapshot(
      `"Not enough stocks: requested to move 146 pcs, available 42 pcs only"`,
    )
  })
})

describe('moveGoodsToUnsorted', () => {
  it('should actually move the goods from warehouse to unsorted', () => {
    const nextState = moveGoodsToUnsorted('wh1', 'p1', 42)(state)

    expect(nextState.stocks.wh1.p1).toBe(0)
    expect(nextState.unsorted.p1).toBe(42)
  })

  it('should throw if given amount is greater than available', () => {
    const action = () => moveGoodsToUnsorted('wh1', 'p1', 146)(state)

    expect(action).toThrowErrorMatchingInlineSnapshot(
      `"Not enough stocks: requested to move 146 pcs, available 42 pcs only"`,
    )
  })
})
