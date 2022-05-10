# react-test-application
This project is the frontend for [# Express-Backend-TypeScript-Example](https://github.com/sondresjolyst/Express-Backend-TypeScript-Example)

## Quick Start
Install the dependencies.

    $ npm i
    
Start the server:

    $ npm start
    
View the website at: [http://localhost:3000](http://localhost:3000)
 
## Radixconfig

| Name			| Branch		|
|---------------|---------------|
| production	| master		|
| development	| development   |

## Docker

| Container Name		| Dockerfile	| External port	| Internal port	|
|-----------------------|---------------|---------------|---------------|
| react-test-container	| Dockerfile	| 3000			| 80			|

### Build

    docker build -t react-test-application

### Build and start production

    docker-compose -f docker-compose.prod.yaml up -d --build