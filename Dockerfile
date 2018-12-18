# Stage 1 - the build process
FROM node:8.11.3-alpine as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./
RUN npm run lint
RUN npm run test
RUN npm run build

# Stage 2 - the production environment
FROM node:8.11.3-alpine
WORKDIR /usr/src/app
COPY --from=build-deps /usr/src/app/dist /usr/src/app
RUN npm install
CMD npm start