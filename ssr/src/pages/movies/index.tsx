import { MovieCard } from "@/components/MovieCard";
import { loadMovies } from "@/services";
import { MovieResume } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default function MoviesPage({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return movies.length > 0 ? (
    <section>
      {movies.map((movie) => {
        return (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
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
