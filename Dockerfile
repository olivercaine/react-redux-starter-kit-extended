# Stage 1: Prepare the dist
FROM node:8.15-alpine as build-image
WORKDIR /project

COPY package.json package-lock.json ./
RUN npm set progress=false
RUN npm install

COPY . ./
RUN npm run lint
# RUN npm run test TODO: fix tests. Possibly not working due to PhantomJS environemnt variable.
RUN npm run build

# Stage 2: Create the production image
FROM node:8.15-alpine
WORKDIR /dist

COPY --from=build-image /project/dist .
RUN npm set progress=false
RUN npm install

CMD [ "npm", "start" ]