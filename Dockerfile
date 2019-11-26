# --------------- STAGE 1: Dev Environment ---------------
FROM olliecaine/dev:master as stage-dev-environment

# Used by docker-compose as development environment...

# --------------- STAGE 2: Build ---------------
FROM stage-dev-environment as stage-build

# Building dependencies separately so it's cache isn't invalidated by source code change.
# TODO: Install in running container with source code shared as volume so that container uses existing node_modules container.
COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run lint
# TODO: RUN npm run test
RUN npm run build

# --------------- STAGE 3: Host ---------------
FROM olliecaine/base:master

WORKDIR /usr/src/app

COPY --from=stage-build /project/dist .
RUN npm install

USER node
CMD ["node", "server.js"]
