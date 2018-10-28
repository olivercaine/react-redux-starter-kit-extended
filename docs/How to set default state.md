# How to set default state

Useful for setting state to develop UI.

To add user to the default state, do the following in main.js:

```javascript
// Retrieve State
// ------------------------------------
const defaultState = {
    user: { id: 1 ,name: 'John' }
}

// Store Initialization
// ------------------------------------
const store = createStore(defaultState)
```

Important: the state property name has to match a reducer key, e.g. /routes/X/index.js

```javascript
injectReducer(store, { key: 'user', reducer })
```

otherwise the user will be erased from the state object and will not show in the Redux dev tools.
