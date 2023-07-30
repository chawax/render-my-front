import { loadMovies } from "@/services";
import { Movie } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";

export default function MoviesPage({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return movies.length > 0 ? (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Aucun film</p>
  );
}

export const getServerSideProps: GetServerSideProps<{
  movies: Array<Movie>;
}> = async () => {
  const movies = await loadMovies();
  return { props: { movies } };
};
