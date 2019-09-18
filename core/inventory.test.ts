import {State, Product} from './domain'
import {
  addNewProduct,
  repelnishStocks,
  moveGoods,
  moveGoodsToUnsorted,
} from './inventory'

describe('addNewProduct', () => {
  const initial: State = {
    products: {p1: {id: 'p1', name: '', description: null, imageUri: null}},
    warehouses: {wh1: {id: 'wh1', label: '', address: ''}},
    stocks: {wh1: {p1: 0}},
    unsorted: {p1: 0},
  }

  it('should add product, populate stock entries, and move all stocks to unsorted', () => {
    const product: Product = {
      id: 'p2',
      name: '',
      description: null,
      imageUri: null,
    }

    const actual = addNewProduct(product, 42)(initial)

    expect(actual.products.p2).toEqual(product)
    expect(actual.stocks.wh1.p2).toBe(0)
    expect(actual.unsorted.p2).toBe(42)
  })

  it('should distribute stocks among warehouses and unsorted', () => {
    const product: Product = {
      id: 'p2',
      name: '',
      description: null,
      imageUri: null,
    }

    const actual = addNewProduct(product, 42, {wh1: 17})(initial)

    expect(actual.stocks.wh1.p2).toBe(17)
    expect(actual.unsorted.p2).toBe(42)
  })
})

describe('repelnishStocks', () => {
  const initial: State = {
    products: {p1: {id: 'p1', name: '', description: null, imageUri: null}},
    warehouses: {wh1: {id: 'wh1', label: '', address: ''}},
    stocks: {wh1: {p1: 0}},
    unsorted: {p1: 0},
  }

  it('should put all to unsorted', () => {
    const actual = repelnishStocks('p1', 42)(initial)

    expect(actual.stocks.wh1.p1).toBe(0)
    expect(actual.unsorted.p1).toBe(42)
  })

  it('should distribute stocks among warehouses and unsorted', () => {
    const actual = repelnishStocks('p1', 17, {wh1: 42})(initial)

    expect(actual.stocks.wh1.p1).toBe(42)
    expect(actual.unsorted.p1).toBe(17)
  })
})

describe('moveGoods', () => {
  const initial: State = {
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

  it('should actually move the goods between warehouses', () => {
    const actual = moveGoods('wh1', 'wh2', 'p1', 42)(initial)

    expect(actual.stocks.wh1.p1).toBe(0)
    expect(actual.stocks.wh2.p1).toBe(42)
  })

  it('should throw if given amount is greater than available', () => {
    const action = () => moveGoods('wh1', 'wh2', 'p1', 146)(initial)

    expect(action).toThrowErrorMatchingInlineSnapshot(
      `"Not enough stocks: requested to move 146 pcs, available 42 pcs only"`,
    )
  })
})

describe('moveGoodsToUnsorted', () => {
  const initial: State = {
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

  it('should actually move the goods from warehouse to unsorted', () => {
    const actual = moveGoodsToUnsorted('wh1', 'p1', 42)(initial)

    expect(actual.stocks.wh1.p1).toBe(0)
    expect(actual.unsorted.p1).toBe(42)
  })

  it('should throw if given amount is greater than available', () => {
    const action = () => moveGoodsToUnsorted('wh1', 'p1', 146)(initial)

    expect(action).toThrowErrorMatchingInlineSnapshot(
      `"Not enough stocks: requested to move 146 pcs, available 42 pcs only"`,
    )
  })
})
