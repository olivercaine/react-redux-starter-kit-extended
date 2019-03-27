# --------------- STAGE 1: Build ---------------
FROM base:latest as stage-1

# Install dependencies
COPY package*.json ./
RUN npm install --prefer-offline

# Lint, test and build app
COPY . ./
RUN npm run lint
RUN npm run test
RUN npm run build

# --------------- STAGE 2: Host ---------------
FROM node:8.15-alpine

# Is this step needed? Use /project and COPY to . instead (below)?
WORKDIR /usr/src/app

# Get dist from build image
COPY --from=stage-1 /project/dist /usr/src/app

# Install prod dependencies (Express)
RUN npm install --prefer-offline

# Run as non-root user
USER node

# Better than npm start
CMD ["node", "server.js"]
