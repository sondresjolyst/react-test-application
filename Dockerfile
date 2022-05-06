# build environment
FROM node:16.14.2-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm ci --silent
COPY . ./
RUN npm run build

# production environment
FROM nginxinc/nginx-unprivileged:1.20-alpine

COPY --from=build /app/dist /app/web/nginx/html

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Add a new group "radix-non-root-group" with group id 1001 
RUN addgroup -S -g 1001 radix-non-root-group

# Add a new user "radix-non-root-user" with user id 1001 and include in group
RUN adduser -S -u 1001 -G radix-non-root-group radix-non-root-user

USER 1001

EXPOSE 1024

CMD ["nginx", "-g", "daemon off;"]