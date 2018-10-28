# How to retrieve data from the API and display it in a component

This applies to APIs but also any other "out-of-app" behaviour - e.g. manipulating binaries (images, videos), etc.

** 1. Dispatch SHOULD_FETCH_CHEFS event**

Directory page (/src/routes/directory/index.js) requests list of chefs by dispatching the SHOULD_FETCH_CHEFS event:

```javascript
store.dispatch({ type: 'SHOULD_FETCH_CHEFS' })
```

** 2. ReduxService recieves the SHOULD_FETCH_CHEFS event**

Because ReduxService is listening for the SHOULD_FETCH_CHEFS event it makes a request to the apiConnector to get a list of chefs:

```javascript
  case SHOULD_FETCH_CHEFS:
    apiConnector.getChefs(data => {
      next({ type: DID_FETCH_CHEFS, data })
    })
    break
```

Once it's received the data it dispatches an event called DID_FETCH_CHEFS.

** 3. The DID_FETCH_CHEFS event is received**

Directory module receives the DID_FETCH_CHEFS event in /src/routes/Directory/modules/index.js (but any other component could be listening for it too):

```javascript
const ACTION_HANDLERS = {
    [DID_FETCH_CHEFS]: (state, action) => {
        return action.data
    }
}
```

This DID_FETCH_CHEFS action handler is what handles the action sent in #2. Note how the action in #2 was sent with 2 properties: type and data, and data is what's used in #3 (action.data).

This action handler is what's used by the reducer to create a new state:

```javascript
const initialState = null
export default function resultsReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
```

The directory container (/src/routes/Directory/containers/index.js) is what passes the new state to the React components so it can be displayed to the users.
