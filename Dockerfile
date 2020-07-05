FROM node:stretch-slim

COPY . .

RUN npm i && npm i -g serverless

ENTRYPOINT [ "npm", "run", "offline" ]
