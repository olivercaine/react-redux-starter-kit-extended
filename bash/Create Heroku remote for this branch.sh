#!/bin/bash

cd "$(dirname "$0")"
cd ../
${0} # run current file

appName="starterproject"
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

echo "Creating remote on Heroku"
heroku create --remote $branch $appName-$branch --region eu

echo "Opening app..."
heroku open -a $appName-$branch

echo "Pushing empty commit to trigger deploy"
git commit --allow-empty -m "Commit to automatically trigger deploy for first time"
git push

echo "Complete"
