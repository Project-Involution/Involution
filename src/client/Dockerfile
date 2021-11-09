# syntax=docker/dockerfile:1

FROM node:14-alpine
WORKDIR /client

# install dependencies
COPY package*.json .
RUN npm install

# Copying source files
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "dev" ]
