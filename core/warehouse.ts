import {IdMap} from '../shared'
import {omit} from '../utils'
import {Warehouse, State} from './domain'

const stockSeed: IdMap<number> = {}

export const addWarehouse = (warehouse: Warehouse, stocks?: IdMap<number>) => (
  state: State,
) => {
  const newStocks =
    stocks ||
    Object.keys(state.products).reduce(
      (acc, cur) => ({...acc, [cur]: 0}),
      stockSeed,
    )

  const unsorted = stocks
    ? Object.entries(state.unsorted).reduce(
        (acc, [product, amount]) => ({
          ...acc,
          [product]: amount - stocks[product],
        }),
        stockSeed,
      )
    : state.unsorted

  const next: State = {
    ...state,
    warehouses: {...state.warehouses, [warehouse.id]: warehouse},
    stocks: {...state.stocks, [warehouse.id]: newStocks},
    unsorted,
  }

  return next
}

export const removeWarehouse = (
  id: Warehouse['id'],
  toId?: Warehouse['id'],
) => (state: State) => {
  if (!state.stocks[id]) throw new Error('Target warehouse is nonexistent.')

  if (toId && !state.stocks[toId]) {
    throw new Error('Move-goods-to warehouse is nonexistent.')
  }

  const stocks = omit(id, state.stocks)

  if (toId) {
    stocks[toId] = Object.entries(stocks[toId]).reduce(
      (acc, [product, amount]) => ({
        ...acc,
        [product]: amount + state.stocks[id][product],
      }),
      stockSeed,
    )
  }

  const unsorted = toId
    ? state.unsorted
    : Object.entries(state.unsorted).reduce(
        (acc, [product, amount]) => ({
          ...acc,
          [product]: amount + state.stocks[id][product],
        }),
        stockSeed,
      )

  const next: State = {
    ...state,
    warehouses: omit(id, state.warehouses),
    stocks,
    unsorted,
  }

  return next
}
