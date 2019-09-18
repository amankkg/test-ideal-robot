import {Entity, EntityMap, IdMap} from '../shared'

// TODO: in the context of warehouse accounting this should be named as Operator/Employee/HeadOfWarehouse
export type User = Entity & {
  name: string
}

export type Product = Entity & {
  name: string
  description: string | null
  imageUri: string | null
}

export type Warehouse = Entity & {
  label: string
  address: string
}

export type State = {
  products: EntityMap<Product> // Product:id -> Product
  warehouses: EntityMap<Warehouse> // Warehouse:id -> Warehouse
  stocks: IdMap<IdMap<number>> // Warehouse:id -> Product:id -> amount
  unsorted: IdMap<number> // Product:id -> amount
}
