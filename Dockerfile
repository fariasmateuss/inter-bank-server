FROM node:alpine

WORKDIR /usr/app/

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3333

CMD ["yarn", "dev:server"]
