Only the ./dist folder is meant to be ran in Production, not the actual Node app.

However if you want to run this app on Heroku in Production mode (e.g. to host an API), add the following to package.json->scripts:

1. `postinstall: npm run build`
  This builds the standalone frontend HTML app.

2. `heroku-prebuild": "npm install --dev"`
  This forces Heroku to install the required devDependencies (bleeugh!).

