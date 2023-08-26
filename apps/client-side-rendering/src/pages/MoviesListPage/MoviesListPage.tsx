import { Link, useLoaderData } from "react-router-dom";
import { MovieCard } from "../../components";
import { MoviesLoaderdata } from "./loader";

export default function MoviesListPage() {
  const { movies } = useLoaderData() as MoviesLoaderdata;
  return movies.length > 0 ? (
    <section className="flex flex-row flex-wrap justify-between">
      {movies.map((movie) => {
        return (
          <Link
            to={`/movies/${movie.id}`}
            key={movie.id}
            className="w-full sm:basis-1/4 sm:w-20"
          >
            <MovieCard movie={movie} />
          </Link>
        );
      })}
    </section>
  ) : (
    <p>Aucun film</p>
  );
}
