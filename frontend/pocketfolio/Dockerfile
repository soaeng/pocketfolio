# build stage
FROM node:16.16.0 as build-stage
WORKDIR /var/jenkins_home/workspace/k7e101/frontend/pocketfolio
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /var/jenkins_home/workspace/k7e101/frontend/pocketfolio/build /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]

