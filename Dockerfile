FROM node:latest

WORKDIR /app

COPY . .

RUN yarn
RUN yarn build

EXPOSE 5000

ENTRYPOINT ["yarn", "start"]
