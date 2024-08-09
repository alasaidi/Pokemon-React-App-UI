import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { ErrorPage } from "./components/Pages/ErrorPage/ErrorPage.jsx";
import HomePage from "./components/Pages/home-page/HomePage.jsx";
import { LoginPage } from "./components/Pages/login-page/LoginPage.jsx";
import { PokemonDetails } from "./components/Pages/pokemon-details-page/PokemonDetails.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/pokemon", element: <PokemonDetails /> },
      { path: "/Login", element: <LoginPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
