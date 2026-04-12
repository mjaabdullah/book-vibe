import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { router } from "./assets/routes/Routes";
import BookProvider from "./context/BookContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
    <ToastContainer />
  </StrictMode>,
);
