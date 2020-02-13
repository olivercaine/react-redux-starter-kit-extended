FROM node:8.15-alpine

# Speed up NPM by preventing it from displaying progress
RUN npm set progress=false \
      # Good default to set even though offline cache is checked first when package.lock exists
      npm set prefer-offline=true \ 
      # Sets how deeply recursive commands are executed
      npm config set depth 0