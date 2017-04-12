import radhoc, { defaultActionType, setActionType } from '../src'

describe('setActionType', () => {
  it('returns RADHOC if no args', () => {
    expect(setActionType()).toEqual(defaultActionType)
  })

  it('appends _actionName', () => {
    const type = setActionType('foo')
    expect(type).toEqual(`${defaultActionType}_FOO`)
  })
})

describe('radhoc', () => {
  it('will return an object if type matches', () => {
    const mockFn = jest.fn()
    const state = {}
    const action = {
      type: defaultActionType,
      update: { test: 'radhoc' }
    }
    const expectedState = { test: 'radhoc' }

    const newState = radhoc(mockFn)(state, action)

    expect(newState).toEqual(expectedState)
  })

  describe('will return and call the reducer if', () => {
    it('action.type is incorrect', () => {
      const mockFn = jest.fn()
      const state = {}
      const action = { type: 'TEST' }

      radhoc(mockFn)(state, action)

      expect(mockFn).toHaveBeenCalled()
      expect(mockFn).toHaveBeenCalledWith(state, action)
    })

    it('action.update is not an object', () => {
      const mockFn = jest.fn()
      const state = {}
      const action = { type: defaultActionType, update: 'string' }

      radhoc(mockFn)(state, action)

      expect(mockFn).toHaveBeenCalled()
      expect(mockFn).toHaveBeenCalledWith(state, action)
    })
  })
})
