FROM node:latest

WORKDIR /usr/src/app

EXPOSE 3000

COPY . .

RUN npm ci

ENTRYPOINT ["npm", "start"]
