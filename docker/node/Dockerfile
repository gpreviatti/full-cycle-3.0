FROM node:15 as build

WORKDIR /usr/src/app

COPY . .

CMD ["npm", "install"]

EXPOSE 3000

ENTRYPOINT ["node", "index.js"]
