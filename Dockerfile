FROM node:18

WORKDIR /server

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD [ "nodemon","index.js" ]