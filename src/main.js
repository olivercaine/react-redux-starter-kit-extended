import React from 'react'
import ReactDOM from 'react-dom'
import { initialRootState } from './State'
import createStore from './store/createStore'
import './styles/main.scss'

// Store Initialization - with state
const store = createStore(JSON.parse(sessionStorage.getItem('ROOT_STATE')) || initialRootState)

// Persist state
store.subscribe(() => {
  sessionStorage.setItem('ROOT_STATE', JSON.stringify(store.getState()))
})

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      './routes/index',
    ], () =>
      setTimeout(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      }, 0)
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
