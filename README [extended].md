# README [extended]

## How to create a new route

1. Duplicate any folder inside /src/routes.

1. Rename the new folder to something sensible, e.g. "ContactUs".

1. Inside the new folder, open index.js and update the path property to the URL of your new route, e.g. "contact-us"

1. Open /src/routes/index.js and add the new route to the child routes, e.g.

  ```javascript
  import ContactUs from './ContactUs'

  export const createRoutes = (store) => ({
    path        : '/',
    component   : CoreLayout,
    indexRoute  : Home,
    childRoutes : [
      ContactUs(store)
    ]
  })
  ```

1. Now go to the URL you defined in the path [http://localhost:3000/contact-us](http://localhost:3000/contact-us) and you'll see your new page!

Now the route is accessible, it's time to tidy up some of the new code:

1. Open the folder you just created and delete the components folder.

1. In  /containers/index.js, tell the route which component should be loaded when open the URL defined earler.

   On the last line you will see something like:

   ​```export default connect(mapStateToProps, mapDispatchToProps)(Component)```

   "Component" here is defined above. Just change it's path to a component you've created in the /src/components folder.

## How to retrieve data from the API and display it in a component

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

## How to set default state

Useful for setting state to develop UI.

To add user to the default state, do the following in main.js:

```javascript
// Retrieve State
// ------------------------------------
const defaultState = {
    user: {
        id: 1 ,
        name: 'John'
    }
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

## Accessing global state

A Reducer only has access to a specific key however it's possible to access global scope in the `mapStateToProps` function which is how you can build the data object for a specific component.

## Building the app

```bash
docker build . -t olliecaine/rrske:latest
docker run -p 80:3000 --rm olliecaine/rrske:latest # to debug: docker run -p 80:3000 --rm -it olliecaine/rrske:latest sh
```

## Creating a dist

```bash
docker build . -t olliecaine/rrske
docker create --name build olliecaine/rrske
docker cp $(docker create olliecaine/rrske):/dist ./dist
docker rm build
```