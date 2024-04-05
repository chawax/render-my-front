import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Loader, MovieCard } from "../../components";
import { fetchMovies } from "../../services";

export default function MoviesListPage() {
  // Use Tanstack Query to retrieve and cache the movies

  const {
    data: movies,
    error,
    isError,
    isFetching,
    isSuccess,
  } = useQuery({
    queryKey: ["movies"],
    queryFn: () => fetchMovies(),
  });

  // Displays a loader while fetching

  if (isFetching) {
    return <Loader />;
  }

  // Displays the error message if fetching failed

  if (isError) {
    return (
      <p className="text-red-400">
        Impossible de charger les données : {error.message}
      </p>
    );
  }

  // Displays the details of movie if fetching was successful

  if (isSuccess) {
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
}
