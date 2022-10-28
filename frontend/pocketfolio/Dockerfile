# build stage
FROM node:16.16.0 AS build-stage
WORKDIR /var/jenkins_home/workspace/k7e101/frontend/pocketfolio
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "start" ]
EXPOSE 3000
