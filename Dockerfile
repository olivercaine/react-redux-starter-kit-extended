# --------------- STAGE 1: Develop ---------------
FROM olliecaine/dev:master as stage-develop

CMD ["npm", "run", "dev"]

# --------------- STAGE 2: Build ---------------
FROM stage-develop as stage-build

# Install dependencies first so that cache layer isn't invalidated by source code change
COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run lint \
    && npm run test \
    && npm run build

# --------------- STAGE 3: Host ---------------
FROM olliecaine/base:master

WORKDIR /usr/src/app

COPY --from=stage-build /project/dist .
RUN npm install

USER node
CMD ["node", "server.js"]
