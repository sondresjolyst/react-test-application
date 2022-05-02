FROM node:16.14.2-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm i --silent
COPY . ./

# Start app
CMD ["npm", "start"]