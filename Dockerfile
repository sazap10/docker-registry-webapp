FROM mhart/alpine-node:5.5.0

WORKDIR /src
ADD . .

RUN npm install

CMD ["node", "server.js"]