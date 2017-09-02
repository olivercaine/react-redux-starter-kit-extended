# How to deploy app to Heroku from Terminal

From within checked out repo of app to be deployed:

heroku create --remote staging

https://infinite-sea-96772.herokuapp.com/ | https://git.heroku.com/infinite-sea-96772.git

```git push staging master```

Note: App didn't build properly. Needed to add missing line from package.json->scripts:

```"postinstall": "npm run build"```

and also make sure yarn.lock wasn't checked in.

Then accessed above URL to see Staging app!

heroku create --remote production

https://rocky-temple-33396.herokuapp.com/ | https://git.heroku.com/rocky-temple-33396.git

```git push production master```

Then accessed above URL to see Production app!