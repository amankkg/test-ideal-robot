import {IdMap} from 'shared'

import {Product, Warehouse, State} from './domain'

export const addNewProduct = (
  product: Product,
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

export const moveGoods = (
  from: Warehouse['id'],
  to: Warehouse['id'],
  product: Product['id'],
  amount: number,
) => (state: State) => {
  const available = state.stocks[from][product]

  if (available < amount)
    throw new Error(
      `Not enough stocks: requested to move ${amount} pcs, available ${available} pcs only`,
    )

  const next: State = {
    ...state,
    stocks: {
      ...state.stocks,
      [from]: {
        ...state.stocks[from],
        [product]: available - amount,
      },
      [to]: {
        ...state.stocks[to],
        [product]: state.stocks[to][product] + amount,
      },
    },
  }

  return next
}

export const moveGoodsToUnsorted = (
  from: Warehouse['id'],
  product: Product['id'],
  amount: number,
) => (state: State) => {
  const available = state.stocks[from][product]

  if (available < amount)
    throw new Error(
      `Not enough stocks: requested to move ${amount} pcs, available ${available} pcs only`,
    )

  const next: State = {
    ...state,
    stocks: {
      ...state.stocks,
      [from]: {...state.stocks[from], [product]: available - amount},
    },
    unsorted: {...state.unsorted, [product]: state.unsorted[product] + amount},
  }

  return next
}
