#!/bin/bash

cd "$(dirname "$0")"
cd ../
${0} # run current file

# echo "Enter new branch name"
# read branch

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo "On branch $branch"

appName='starterkit-'$branch
echo "Creating Heroku app $appName"
heroku create $appName --region eu --buildpack heroku/nodejs

# echo "Adding app to pipeline"
# heroku pipelines:add -a starterkit-$branch starterkit

# Adding Dyno
# heroku ps:scale -a $appName

echo "Opening app..."
heroku open -a $appName

echo "Complete"
