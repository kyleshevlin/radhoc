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
