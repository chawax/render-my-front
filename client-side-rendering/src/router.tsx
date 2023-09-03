import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/Layout";
import { MovieDetailsPage, movieLoader } from "./pages/MovieDetailsPage";
import { MoviesListPage, moviesLoader } from "./pages/MoviesListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        path: "movies",
        element: <MoviesListPage />,
        loader: moviesLoader,
      },
      {
        path: "movies/:id",
        element: <MovieDetailsPage />,
        loader: movieLoader,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
