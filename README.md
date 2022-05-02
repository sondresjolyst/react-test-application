# kubernetes-test-application

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.

## Docker build

### Build and test dev
`docker-compose -f docker-compose.yaml up -d --build`

### Build and test production
`docker-compose -f docker-compose.prod.yaml up -d --build`
