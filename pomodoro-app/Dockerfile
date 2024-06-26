FROM node:14-alpine

WORKDIR /tmp/react

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN mkdir -p /var/www/html \
    && cp -r build/* /var/www/html \
    && rm -rf /tmp/react

WORKDIR /
