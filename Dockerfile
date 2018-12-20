# Stage 1 - the build process
FROM node:8.11.3-alpine as build-image
WORKDIR /project

COPY package.json package-lock.json ./
RUN npm set progress=false
RUN npm install

COPY . ./
RUN npm run lint
# RUN npm run test TODO: fix tests. Possibly not working due to PhantomJS environemnt variable.
RUN npm run build

# Stage 2 - the production environment
FROM node:8.11.3-alpine
WORKDIR /dist

COPY --from=build-image /project/dist .
RUN npm set progress=false
RUN npm install

CMD [ "npm", "start" ]