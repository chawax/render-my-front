import { Link, useLoaderData } from "react-router-dom";
import { MovieCard } from "../../components/MovieCard";
import { MoviesLoaderdata } from "./loader";

export default function MoviesListPage() {
  const { movies } = useLoaderData() as MoviesLoaderdata;
  return movies.length > 0 ? (
    <section>
      {movies.map((movie) => {
        return (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        );
      })}
    </section>
  ) : (
    <p>Aucun film</p>
  );
}
