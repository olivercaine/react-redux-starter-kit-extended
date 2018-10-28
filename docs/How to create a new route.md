# How to create a new route

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
