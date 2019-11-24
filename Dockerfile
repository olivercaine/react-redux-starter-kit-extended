# --------------- STAGE 1: Dependencies ---------------
FROM olliecaine/base:1.0.9 as stage-dependencies

COPY package*.json ./
RUN npm install

# --------------- STAGE 2: Build ---------------
FROM stage-dependencies as stage-build

COPY . ./
RUN npm run lint
# TODO: RUN npm run test
RUN npm run build

# --------------- STAGE 3: Host ---------------
FROM node:8.15-alpine

WORKDIR /usr/src/app

COPY --from=stage-build /project/dist .
RUN npm install

USER node
CMD ["node", "server.js"]
