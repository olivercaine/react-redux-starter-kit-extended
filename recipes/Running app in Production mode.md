Running app in Production mode only serves /dist folder.

/dist folder doesn't exist unless built, so following command was added to package.json->scripts:
`postinstall: npm run build`

Building requires a bunch of devDependencies so quite a few were moved over to dependencies.
See git history or compare with remote master to see which they were.
