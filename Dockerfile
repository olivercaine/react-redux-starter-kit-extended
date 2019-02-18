# Stage 1: Prepare the dist
FROM node:8.15-alpine as build-client

RUN npm set progress=false

WORKDIR /project

# INSTALL CHROME
RUN sed -i -e 's/v3.8/edge/g' /etc/apk/repositories \
    && apk add --no-cache \
    python \
    build-base \
    git \
    bash \
    openjdk8-jre-base \
    # chromium dependencies
    nss \
    chromium-chromedriver \
    chromium \
    && apk upgrade --no-cache --available
ENV CHROME_BIN /usr/bin/chromium-browser
# END: INSTALL CHROME

COPY package*.json ./
# TODO: pass in below as variables
COPY --from=boilerplate-stack/module:devops-deploy-improvement-with-long-branch-name /project ../module
RUN npm install

COPY . ./
RUN npm run lint
RUN npm run test
RUN npm run build

# Stage 2: Create the production image
FROM node:8.15-alpine

# Create work directory
WORKDIR /usr/src/app

# Copy app source to work directory
COPY --from=build-client /project/dist /usr/src/app

# Install app dependencies
RUN npm install

# Run as non-root user
USER node

# Build and run the app
CMD npm start
