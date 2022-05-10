# build environment
FROM node:16.14.2-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

# production environment
FROM nginxinc/nginx-unprivileged:1.21-alpine

COPY --from=build /app/dist /app/web/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

USER 65534

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]