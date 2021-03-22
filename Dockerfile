FROM node:14.16.0-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm install --silent && react-scripts build
EXPOSE 3000
ENTRYPOINT react-scripts start