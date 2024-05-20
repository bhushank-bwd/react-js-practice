# React Practice App

## Install React JS app

- Run Following Commands

1. `npm create vite@latest`
2. `npm install`
3. `npm run dev`

## Install Tailwind

- Follow Links to install [Tailwind CSS](https://tailwindcss.com/docs/guides/vite)

## React Router DOM

- Install package npm i react-router-dom
- In app.js file import { createBrowserRouter, RouterProvider} from "react-router-dom";
- AppLayout Component `<RouterProvider router={router}></RouterProvider>`
- Approuter `const router = createBrowserRouter([]);`
- Body `<Outlet />`

## React Redux Toolkit

- `npm i react-redux && @reduxjs/toolkit`
- create utils/redux-toolkit/store.js
- create utils\redux-toolkit\slice\site.js

## React Query

- Installation

1. `npm i @tanstack/react-query`
2. Provide the client to your App

## GH PAGES

1. `npm install --save gh-pages`
2. Add homepage in package.json https://username.github.io/repo-name
3. Add following command in package.json
   ` "predeploy": "npm run build"`
   ` "deploy": "gh-pages -d dist"` // build for create-react-app

## Multiple environment

1. Create .env.development
