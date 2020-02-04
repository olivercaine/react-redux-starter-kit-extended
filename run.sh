#!/bin/bash

docker build . -f ./devops/Dockerfile.base -t olliecaine/base:master 

docker build . -f ./devops/Dockerfile.dev -t olliecaine/dev:master

docker build . --target stage-build -t olliecaine/client:master
