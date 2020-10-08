FROM node:14.11.0-alpine

WORKDIR /sandbox/test

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]

EXPOSE 4000
