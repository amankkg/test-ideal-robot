// TODO:
// - move to utility types
// - add Entity base class or base type with identity field?
// - `key` should be `T['id']` instead of string, but TS does not allow this
export type IdMap<T> = {[key: string]: T}

export type Product = {
  id: string
  name: string
  description: string | null
  imageUri: string | null
}

export type Warehouse = {
  id: string
  label: string
  address: string
}

export type State = {
  products: IdMap<Product> // Product:id -> Product
  warehouses: IdMap<Warehouse> // Warehouse:id -> Warehouse
  stocks: IdMap<IdMap<number>> // Warehouse:id -> Product:id -> amount
  unsorted: IdMap<number> // Product:id -> amount
}

// TODO:
// - refactor immutable updates using lenses
// - create custom errors

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
