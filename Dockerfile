# --------------- STAGE 1: Develop ---------------
FROM cypress/browsers:node14.17.6-slim-chrome100-ff99-edge as stage-develop

CMD ["npm", "run", "dev"]

# --------------- STAGE 2: Build ---------------
FROM stage-develop as stage-build

# Install dependencies first so cache layer isn't invalidated by source code changes. 
# TODO: Switch to sharing volume with running container.
COPY package*.json ./
RUN npm ci

COPY . ./
RUN npm run health-check

# --------------- STAGE 3: Host ---------------
FROM nginx:alpine

COPY --from=stage-build /project/dist /usr/share/nginx/html
COPY ./devops/nginx/nginx.conf.template /etc/nginx/conf.d/default.conf.template

CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
