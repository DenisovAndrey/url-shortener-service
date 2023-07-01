# URL Shortener Service - Development

## Description

The URL Shortener is a web application designed on Node.js and Express.js setup.

## API Documentation

All the api documentation (Swagger) is available by `/api-docs` url.

## Getting Started

To get started with the URL Shortener, follow the steps below:

1. Clone the repository: `git clone https://github.com/DenisovAndrey/url-shortener-service`
2. Install dependencies:
    1. Switch to Node 18
    2. Run `npm install`
3. Fill out the url address of frontend app if needed to env variable `ALLOWED_ORIGINS`
4. Start the server: `npm run start:dev`
5. Access the URL Shortener interface by visiting `http://localhost:3001/api-docs` in your web browser. (or setup port
   in `process.env.PORT`)

## Available Scripts

In the project directory, you can run:

### `npm run start:dev`

Runs the project in the development mode.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run start`

Runs app that was build.

### `npm run test`

Launches the test runner via Jest and supertest.

### `npm run lint`

Launches ES linter.

