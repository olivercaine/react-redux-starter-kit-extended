# --------------- STAGE 1: Dependencies ---------------
FROM base:latest as stage-dependencies

COPY package*.json ./
RUN npm install --prefer-offline

# --------------- STAGE 2: Build ---------------
FROM stage-dependencies as stage-build

COPY . ./
RUN npm run lint
RUN npm run test
RUN npm run build

# --------------- STAGE 3: Host ---------------
FROM node:8.15-alpine

WORKDIR /usr/src/app
RUN npm install --prefer-offline
COPY --from=stage-build /project/dist .
USER node
CMD ["node", "server.js"]
