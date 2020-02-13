#!/bin/bash

# Pull submodules
git submodule update --init --recursive

# Build base image (Node alpine)
docker build . -f ./Dockerfile.base -t olliecaine/base:master 

# Build dev environment from base image (install Chrome etc)
docker build . -f ./Dockerfile.dev -t olliecaine/dev:master

# Run the dev environment and then run the client tests
docker run --rm -v $(pwd):/project -p 3000:3000 olliecaine/dev:master sh -c "npm run test"