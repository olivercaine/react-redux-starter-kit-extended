# How to run this app on Heroku

Running app in Production mode only serves /dist folder, however it doesn't exist unless the app is built. To force hosting to run the build, add the following to package.json->scripts:
`postinstall: npm run build`

Running in Production mode requires a bunch of devDependencies. To get them add the following to package.json->scripts:
`heroku-prebuild": "npm install --dev"`
