FROM node:16-alpine

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN npm install yarn

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]