# Radhoc

[![Build Status](https://travis-ci.org/kyleshevlin/radhoc.svg?branch=master)](https://travis-ci.org/kyleshevlin/radhoc)
[![codecov](https://codecov.io/gh/kyleshevlin/radhoc/branch/master/graph/badge.svg)](https://codecov.io/gh/kyleshevlin/radhoc)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Add an _ad hoc_ case to your Redux reducer.

## Why

When developing applications with Redux, you may occasionally find yourself wanting to persist significant changes to state arbitrarily. Perhaps a snapshot of state or a new key/value pair you'd like to add but don't have an action prebuilt for. Radhoc will add an _ad hoc_ case to your root reducer, allowing you to arbitrarily merge any state object you'd like into Redux.

## Installation

If you're building a Redux application, it is likely you already have NPM or Yarn installed. If not, please take the time to install one of these package managers. After one or the other is installed, you can run the corresponding command below:

```
npm install --save-dev radhoc
```

or

```
yarn add radhoc -D
```

This will save Radhoc to your `devDependencies` in your `package.json` file. Next, you will need to add it to your application. If you're using ES2015 imports and exports, it may look like this:

```javascript
import { createStore } from 'redux'
import reducer from './reducers'
import radhoc from 'radhoc'

const store = createStore(radhoc(reducer))

export default store
```

Then, either in your application (or using a tool like redux-devtools), you can dispatch actions with the correct `type` and an `update` key, and the update will be applied to your Redux state.

```javascript
store.dispatch({
  type: 'RADHOC',
  update: {
    rad: 'hoc'
  }
})
```

## What It Does

Radhoc is a higher-order function for Redux reducers, that is it takes a reducer as an argument and either returns the next state or returns the reducer.

Specifically, Radhoc is a reducer itself with one case (either the default, or the one created via the _optional_ `name` argument). Radhoc then listens for this `type` and then returns the next state by merging the `update` value passed along with the action. There are more details in the API section below.

If the `action.type` is anything else, Radhoc simply returns the reducer passed to it, and passes the `state` and `action` arguments given to the reducer to it.

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

## Changelog

This project uses `semantic-release` which auto-generates a changelog with each release.
