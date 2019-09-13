// LOGIN

export type User = {
  id: string
  name: string
}

// gotta have side-effects: attempt count, redirects
export type login = (name: string, password: string) => void | false // or return user?
// gotta have side-effects too: clearing storage, redirects
export type logout = () => void

// INVENTORY CONTROL

export type Product = {
  id: string
  name: string
  description: string | null
  imageUri: string | null
}

// gotta be a VO
export type Stock = {
  product: Product
  amount: number
}

export type Warehouse = {
  id: string
  label: string
  address: string
  stocks: Stock[]
}

// unsorted is similar to warehouse but has no real address
export type Unsorted = Omit<Warehouse, 'address'>
