export type IdMap<T> = {[key: string]: T} // object, generic map

export type Entity = {id: string} // entities are the ones with `id` of type `string`
export type EntityMap<T extends Entity> = {[key: string]: T} // object, actual type of its keys is `Entity['id']`
