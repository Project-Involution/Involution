# syntax=docker/dockerfile:1

FROM node:14-alpine as dev
WORKDIR /client

COPY package.json package.json
RUN npm install
EXPOSE 3000

COPY . .
CMD [ "npm", "run", "dev" ]
