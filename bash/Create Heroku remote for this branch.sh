#!/bin/bash

cd "$(dirname "$0")"
cd ../
${0} # run current file

branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')

echo "Creating remote on Heroku"
heroku create --remote $branch olivercainev2-$branch --region eu

echo "Opening app..."
heroku open -a olivercainev2-$branch

echo "Complete"
