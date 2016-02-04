FROM mhart/alpine-node:5.5.0

WORKDIR /src
ADD . .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]