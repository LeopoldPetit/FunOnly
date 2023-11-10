import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './assets/index.css'
import ErrorPage from "./routes/error-page.jsx";

import {loader as rootLoader, HomePage} from "./routes/HomePage.jsx";
import {GamePage} from "./routes/GamePage.jsx";
import {LoginPage} from "./routes/LoginPage.jsx";





const router = createBrowserRouter([

    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
    },
    {
        path: "/game/:id",
        element: <GamePage />,
    },
    {
        path: "/Login",
        element: <LoginPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
