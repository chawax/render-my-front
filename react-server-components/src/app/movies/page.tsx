import { MovieCard } from "@/components";
import { fetchMovies } from "@/services";
import Link from "next/link";

export default async function Home() {
  const movies = await fetchMovies();

  return movies.length > 0 ? (
    <section className="flex flex-row flex-wrap justify-between">
      {movies.map((movie) => {
        return (
          <Link
            href={`/movies/${movie.id}`}
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
