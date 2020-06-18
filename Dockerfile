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
FROM nginx:alpine

COPY --from=stage-build /project/dist /usr/share/nginx/html
COPY ./devops/nginx/nginx.conf.template /etc/nginx/conf.d/default.conf.template

CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
