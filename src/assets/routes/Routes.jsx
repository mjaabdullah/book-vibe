import { createBrowserRouter } from "react-router";
import Loading from "../Components/Loading/Loading";
import MainLayout from "../layout/MainLayout";
import BookDetails from "../pages/BookDetails";
import BooksPage from "../pages/BooksPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    HydrateFallback: Loading,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/books",
        Component: BooksPage,
      },
      {
        path: "/book-details/:id",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
