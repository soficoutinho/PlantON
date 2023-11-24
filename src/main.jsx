import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom"
import App from './App'
import Home from "./routes/Home/home"
import Error from "./routes/Error/error"
import Login from './routes/Login/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Login/>
      },
      {
        path: "/home",
        element: <Home/>
      }
    ]
  }
]);

export default router;