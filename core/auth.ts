export type User = {
  id: string
  name: string
}

// gotta have side-effects: attempt count, redirects
export type login = (name: string, password: string) => void | false // or return user?
// gotta have side-effects too: clearing storage, redirects
export type logout = () => void
