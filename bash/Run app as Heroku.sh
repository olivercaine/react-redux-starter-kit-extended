#!/bin/bash

cd "$(dirname "$0")"
cd ../
${0} # run current file

git clean -fd
git clean -fX
rm -rf node_modules
npm install --production
npm run heroku-prebuild
npm start --production

echo "Complete"
