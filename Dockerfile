# --------------- STAGE 1 ---------------
FROM node:8.15-alpine as stage-1

# Install Chrome
RUN sed -i -e 's/v3.8/edge/g' /etc/apk/repositories
RUN apk add --no-cache build-base
RUN apk add --no-cache chromium-chromedriver 
RUN apk add --no-cache chromium 
RUN apk upgrade --no-cache --available
ENV CHROME_BIN /usr/bin/chromium-browser
# End: Install Chrome

RUN npm set progress=false

WORKDIR /project

# Install dependencies
COPY package*.json ./
RUN npm install
COPY --from=boilerplate-stack/module:latest /project ../module

# Lint, test and build app
COPY . ./
RUN npm run lint
RUN npm run test
RUN npm run build

# --------------- STAGE 2 ---------------
FROM node:8.15-alpine

# Is this step needed? Use /project and COPY to . instead (below)?
WORKDIR /usr/src/app

# Get dist from build image
COPY --from=stage-1 /project/dist /usr/src/app

# Install prod dependencies (Express)
RUN npm install

# Run as non-root user
USER node

# Better than npm start
CMD ["node", "server.js"]
