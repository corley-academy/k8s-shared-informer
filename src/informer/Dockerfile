FROM node:12-alpine

WORKDIR /code

COPY package.json package.json

RUN npm install

COPY index.js index.js

CMD ["node", "index.js"]
