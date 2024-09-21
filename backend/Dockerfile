FROM node:20 AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# PROD Stage
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app ./

RUN yarn install --production

EXPOSE 53330

CMD ["node", "--env-file", ".env", "dist/index.js"]
