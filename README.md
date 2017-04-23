# Radhoc

[![Build Status](https://travis-ci.org/kyleshevlin/radhoc.svg?branch=master)](https://travis-ci.org/kyleshevlin/radhoc)
[![codecov](https://codecov.io/gh/kyleshevlin/radhoc/branch/master/graph/badge.svg)](https://codecov.io/gh/kyleshevlin/radhoc)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Add an _ad hoc_ case to your Redux reducer.

## Install

```
npm install --save-dev radhoc
```

or

```
yarn add radhoc -D
```

## Usage

```javascript
import { createStore } from 'redux'
import reducer from './reducers'
import radhoc from 'radhoc'

const store = createStore(radhoc(reducer))

export default store
```

Then, you dispatch any action with an `update` key.

```javascript
store.dispatch({
  type: 'RADHOC',
  update: {
    rad: 'hoc'
  }
})
```

## What It Does

Radhoc is a higher-order function for Redux reducers. It listens for a specified `action.type` and then returns the next state (more details below). If the `action.type` is anything else, it simply returns the reducer it takes as an argument, passing `state` and `action` to it.

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
