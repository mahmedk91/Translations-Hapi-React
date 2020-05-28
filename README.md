# Translations Hapi React

A Hapi app for translation API with pluggable translation engine and simple react frontend.

## Backend

I made the backend in the simplest hapi js app. There is only one route POST /translate. The translation service wraps translation backend (Yandex) which can be changed in the translation service contructor anytime. I made a mock backend for example to show how easy it is to make another backend. Unfortunatly, I couldn't get the time to write tests or dockerise the solution.

The .env file must be configured with the yandex API key which is not free anymore :(

To run the backend, just do

```
cd backend
npm install
npm start
```

## Frontend

The frontend is a simple react app with only one component and single service. Only 6 languages are supported on the frontend as we dont have an API on the backend side to tell how many languages are supported by backend. This is one of the improvements that can be done in future.

To run the frontend, do

```
cd frontend
yarn install
yarn start
```

## Possible improvements

- Testsss!!! - unit and integration
- Request query and param validation in the API
- Smart translations - translate from any language to target language
- An API to fetch supported locales and render the dropdown accordingly.
