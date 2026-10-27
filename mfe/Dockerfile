FROM node:26-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine

COPY nginx-app.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/mfe/browser/ /usr/share/nginx/html/

EXPOSE 8080