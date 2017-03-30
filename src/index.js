const radhoc = (reducer, name = false) => (state, action) => {
  let radhocType = 'RADHOC'

  if (name && typeof name === 'string') {
    radhocType = `RADHOC_${name.toUpperCase()}`
  }

  if (action.type === radhocType) {
    return Object.assign({}, state, action.update)
  }

  return reducer(state, action)
}

export default radhoc
