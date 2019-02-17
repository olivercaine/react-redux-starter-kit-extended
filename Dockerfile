FROM node:8.15-alpine

# Create work directory
WORKDIR /usr/src/app

# Copy app source to work directory
COPY ./dist /usr/src/app

# Install app dependencies
RUN npm install

# Run as non-root user
USER node

# Build and run the app
CMD npm start
