#!/bin/bash

# Build base image (Node alpine)
docker build . -f ./devops/Dockerfile.base -t olliecaine/base:master 

# Extend base image by adding dev dependencies (e.g. Chrome)
docker build . -f ./devops/Dockerfile.dev -t olliecaine/dev:master

# if("dev" flag, e.g. ./run.sh dev){
    # Run app in dev environment
    docker run --rm -v $(pwd):/project -p 3000:3000 $(docker build . --target stage-develop -q)
# } else {
    # Build app in dev environment
    # docker build . --target stage-build -t olliecaine/client:master
# }
