FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

ENV NODE_ENV production

CMD ["npm", "start"]
