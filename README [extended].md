# README [extended]

## Automatic pulling of submodules

This project contains subprojects in the form of [git submodules](https://git-scm.com/docs/git-submodule) to benefit from pre-written and pre-tested reusable code. These submodules are referenced via a specific commit however when switching branches the code relating to the specific commit of the branch isn't automatically pulled.

To enable automatic pulling of the specific commit of a submodule, run the following command (this enables automatic pulling system-wide so it'll also automatically pull submodules on your other projects):

```shell
git config --global submodule.recurse true
```

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
