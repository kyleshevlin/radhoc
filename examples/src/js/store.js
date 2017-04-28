import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducers'
import radhoc from 'radhoc'

const store = createStore(
  radhoc(reducer),
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
