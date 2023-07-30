import { Link, useLoaderData } from "react-router-dom";
import { MoviesLoaderdata } from "./loader";

export default function MoviesListPage() {
  const { movies } = useLoaderData() as MoviesLoaderdata;
  return movies.length > 0 ? (
    <ul>
      {movies.map((movie) => {
        return (
          <li>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Aucun film</p>
  );
}
