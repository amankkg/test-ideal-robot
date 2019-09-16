import {moveGoods, State} from './inventory'

const state: State = {
  products: {
    p1: {id: 'p1', name: '', description: null, imageUri: null},
  },
  warehouses: {
    wh1: {id: 'wh1', label: '', address: ''},
    wh2: {id: 'wh2', label: '', address: ''},
  },
  stocks: {wh1: {p1: 42}, wh2: {p1: 0}},
  unsorted: {},
}

describe('moveGoods', () => {
  it('should move the goods actually', () => {
    const nextState = moveGoods('wh1', 'wh2', 'p1', 42)(state)

    expect(nextState.stocks.wh1.p1).toBe(0)
    expect(nextState.stocks.wh2.p1).toBe(42)
  })

  it('should throw if amount is greater than available', () => {
    const moveGoodsFrom = moveGoods('wh1', 'wh2', 'p1', 146)

    expect(moveGoodsFrom(state)).toThrow()
  })
})
