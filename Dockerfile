FROM node:lts-alpine

WORKDIR /usr/src/app

RUN rm -rf node_modules

COPY package*.json ./

EXPOSE 3000

RUN npm install

COPY . .

CMD [ "npm", "start" ]
