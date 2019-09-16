import {Warehouse, State, IdMap} from './inventory'

// TODO: refactor for better readability, using loops at least
export const addWarehouse = (warehouse: Warehouse) => (
  stocks?: IdMap<number>,
) => (state: State) => {
  const stockSeed: IdMap<number> = {}

  const whStocks =
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
    stocks: {...state.stocks, [warehouse.id]: whStocks},
    unsorted,
  }

  return next
}

// export const removeWarehouse = (id: Warehouse['id']) => (toId?: Warehouse['id']) => (state: State) => {
//   return state
// }
