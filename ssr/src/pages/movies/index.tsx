import { MovieCard } from "@/components/MovieCard";
import { loadMovies } from "@/services";
import { MovieResume } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default function MoviesPage({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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

export const getServerSideProps: GetServerSideProps<{
  movies: Array<MovieResume>;
}> = async () => {
  const movies = await loadMovies();
  return { props: { movies } };
};
