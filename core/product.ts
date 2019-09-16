import {Product, IdMap, State} from './inventory'

export const addNewProduct = (product: Product) => (
  unsorted: number,
  distribution?: IdMap<number>,
) => (state: State) => {
  const stockSeed: IdMap<IdMap<number>> = {}

  const stocks = Object.entries(state.stocks).reduce(
    (acc, [warehouse, whStocks]) => {
      acc[warehouse] = {
        ...whStocks,
        [product.id]: distribution ? distribution[warehouse] : 0,
      }
      return acc
    },
    stockSeed,
  )

  const next: State = {
    ...state,
    products: {...state.products, [product.id]: product},
    stocks,
    unsorted: {...state.unsorted, [product.id]: unsorted},
  }

  return next
}
