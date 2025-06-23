import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./components/Login.jsx";
import HomePage from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./components/Products.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ContactPage from "./components/ContactPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/product",
    element: <ProductPage />,
  },

  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/contactPage",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
