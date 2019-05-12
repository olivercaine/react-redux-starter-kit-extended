# README [extended]

## Develop the app using Docker

```shell
docker-compose up
```

## Creating a new route

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

Now the route is accessible, it's time to tidy up the new code:

1. Delete the folder named "components" in the new folder and create your new component in /src/components/.


## Accessing global state

A Reducer only has access to a specific key however it's possible to access global scope in the `mapStateToProps` function which is how you can build the data object for a specific component.
