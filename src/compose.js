export function compose(...funcs) {
  const [first, ...rest] = funcs.reverse()
  return (...args) => rest.reduce((composed, fn) => fn(composed), first(...args))
}

export function composeLeft(...funcs) {
  const [first, ...rest] = funcs
  return (...args) => rest.reduce((composed, fn) => fn(composed), first(...args))
}
