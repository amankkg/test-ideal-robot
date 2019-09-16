import {State, Product} from './inventory'
import {addNewProduct} from './product'

const initial: State = {
  products: {p1: {id: 'p1', name: '', description: null, imageUri: null}},
  warehouses: {wh1: {id: 'wh1', label: '', address: ''}},
  stocks: {wh1: {p1: 0}},
  unsorted: {p1: 0},
}

describe('addNewProduct', () => {
  it('should add product, populate stock entries, and move all stocks to unsorted', () => {
    const product: Product = {
      id: 'p2',
      name: '',
      description: null,
      imageUri: null,
    }

    const actual = addNewProduct(product)(42)(initial)

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

    const actual = addNewProduct(product)(42, {wh1: 17})(initial)

    expect(actual.stocks.wh1.p2).toBe(17)
    expect(actual.unsorted.p2).toBe(42)
  })
})
