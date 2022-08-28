# README [extended]

[![Node.js CI](https://github.com/olivercaine/react-redux-starter-kit-extended/actions/workflows/node.js.yml/badge.svg)](https://github.com/olivercaine/react-redux-starter-kit-extended/actions/workflows/node.js.yml)

## Tests

| Test Type       | Naming Convention           |
| --------------- | --------------------------- |
| Unit            | [FileUnderTest].spec.ts     |
| Component       | [ComponentName].stories.tsx |
| Integration/E2E | [FeatureName].cy.ts         |

## Creating a new route

1. Duplicate any folder inside /src/routes.

2. Rename the new folder to something sensible, e.g. "ContactUs".

3. Inside the new folder, open index.js and update the path property to the URL of your new route, e.g. "contact-us"

4. Open /src/routes/index.js and add the new route to the child routes, e.g.

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

Now the route is accessible, it's time to tidy up the new code:

1. Delete the folder named "components" in the new folder and create your new component in /src/components/.

## Setting environment variables

Environment variables are defined in the globals object inside project.config.js.

These variables can have a default value and can be overridden by an NPM argument, e.g.

```bash
# analyticsId has the default value "UA-XXXXXXXX-1"
globals: {
    analyticsId: process.env.analyticsId || 'UA-XXXXXXXX-1'
}

# Which can be overridden during development...
analyticsId=UA-PROD-1 yarn start

# Or build...
analyticsId=UA-PRODUCTION-1 npm run build
```

Access them in the app like so;

```typescript
import project from '../../../project.config'

export const Component = () => (
  <b>{project.globals.analyticsId}</b>
)
```

## Redux Middleware

### Dispatching Events

```javascript
createStore(reducer,
  applyMiddleware(
    middlewareA,
    middlewareB,
    middlewareC
  )
);
```

Calling `next(action)` within middlewareB will cause the action to be passed to middlewareC and then the reducer.

Calling `store.dispatch(action)` within middlewareB will cause the action to be passed to middlewareA, then middlewareB, then middlewareC, and finally to the reducer, returning the execution back to middlewareB. Calling dispatch() multiple times is a common and valid practice. next() can also be called more than once, but this is not recommended as any action passed to next() will skip the middleware before the current one (for example, potentially skipping the logging middleware).

### Reducers

It's *highly* recommended to use [Typed Reducers](https://github.com/olivercaine/common/tree/master/reducers/lib) to handle Redux events as they:

1. Prevent developers from passing incorrect payload types to action creators
2. Provide developers with the return type from the reducer

### Mapping State to the UI

These are sometimes referred to as Redux Selectors, however they're simply methods which return Redux state to React container components. See `mapStateToProps` in [FormContainer](./src/routes/SignInForm/containers/FormContainer.ts) for an example.

## Linting

Install the recommended plugins listed in the .vscode folder to automatically fix most lint issues
