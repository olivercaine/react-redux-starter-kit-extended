#!/bin/bash

docker rm tmp-rrske-build
docker build . -t olliecaine/rrske &&
docker create --name tmp-rrske-build olliecaine/rrske &&
rm -rf dist &&
docker cp $(docker create olliecaine/rrske):/dist ./dist
