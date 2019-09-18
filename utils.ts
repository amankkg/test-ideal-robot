import {IdMap} from './shared'

export function omit<T>(key: string, obj: IdMap<T>): IdMap<T> {
  return Object.entries(obj)
    .filter(kv => kv[0] !== key)
    .reduce((acc, [k, v]) => ({...acc, [k]: v}), {})
}
