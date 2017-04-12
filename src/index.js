export const defaultActionType = 'RADHOC'

export function setActionType (actionName) {
  if (actionName && typeof actionName === 'string') {
    return `${defaultActionType}_${actionName.toUpperCase()}`
  } else {
    return defaultActionType
  }
}

const radhoc = (reducer, actionName = '') => (state, action) => {
  const type = setActionType(actionName)

  if (type === action.type && typeof action.update === 'object') {
    return Object.assign({}, state, action.update)
  }

  return reducer(state, action)
}

export default radhoc
