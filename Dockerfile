# syntax=docker/dockerfile:1
FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install 
COPY . .
CMD ["yarn", "run", "dev"]
EXPOSE 5173