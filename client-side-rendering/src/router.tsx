import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./pages/Layout";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { MoviesListPage } from "./pages/MoviesListPage";

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
      },
      {
        path: "movies/:id",
        element: <MovieDetailsPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
