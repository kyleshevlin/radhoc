import radhoc, { setActionType } from '../src'

describe('setActionType', () => {
  it('returns RADHOC if no args', () => {
    expect(setActionType()).toEqual('RADHOC')
  })

  it('appends _actionName', () => {
    const type = setActionType('foo')
    expect(type).toEqual('RADHOC_FOO')
  })
})

describe('radhoc', () => {
  it('will return and call the reducer if action.type is not the right type', () => {
    const mockFn = jest.fn()
    const state = {}
    const action = { type: 'TEST' }

    radhoc(mockFn)(state, action)

    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith(state, action)
  })

  it('will return an object if type matches', () => {
    const mockFn = jest.fn()
    const state = {}
    const action = {
      type: 'RADHOC',
      update: { test: 'radhoc' }
    }
    const expectedState = { test: 'radhoc' }

    const newState = radhoc(mockFn)(state, action)

    expect(newState).toEqual(expectedState)
  })
})
