# Radhoc

Add an _ad hoc_ case to your Redux reducer.

## Usage

```javascript
import { createStore } from 'redux'
import reducer from './reducers'
import radhoc from './helpers/radhoc'

const store = createStore(radhoc(reducer))

export default store
```

## What It Does

Radhoc is a higher-order reducer. It listens for a particular `action.type` and then returns the next state (more details below). If the `action.type` is anything else, it simply returns the reducer it takes as an argument, passing `state` and `action` to it.

## API

```javascript
radhoc(reducer, name)
```

The `radhoc()` function takes two arguments, a `reducer` and an _optional_ `name`. If a `name` is passed, it is uppercased and appended to the default `action.type`.

```javascript
radhoc(reducer) // action.type === 'RADHOC'

// Passing in a name argument
radhoc(reducer, 'root') // action.type === 'RADHOC_ROOT'
```
