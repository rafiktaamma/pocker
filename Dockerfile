FROM node:12-alpine

WORKDIR /app
COPY package*.json /
COPY . /app

EXPOSE 3000

RUN npm install -g nodemon && npm install
CMD ["nodemon", "bin/www"]

