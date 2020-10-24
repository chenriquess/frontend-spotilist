FROM node:13 AS builder
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_URL_BACKEND=http://localhost:5000
RUN npm run build

FROM nginx
COPY build /usr/share/nginx/html
