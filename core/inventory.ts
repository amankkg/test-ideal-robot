// TODO: add Entity base class or base type with identity field?
// `key` should be `T['id']` instead of string, but TS does not allow this
type IdMap<T> = {[key: string]: T}

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

export const moveGoods = (
  from: Warehouse['id'],
  to: Warehouse['id'],
  product: Product['id'],
  amount: number,
) => (state: State) => {
  return {
    ...state,
    stocks: {
      ...state.stocks,
      [from]: {
        ...state.stocks[from],
        [product]: state.stocks[from][product] - amount,
      },
      [to]: {
        ...state.stocks[to],
        [product]: state.stocks[to][product] + amount,
      },
    },
  }
}

// export const moveGoodsToUnsorted = (from: Warehouse['id'], product: Product['id'], amount: number) => (state: State) => {}
