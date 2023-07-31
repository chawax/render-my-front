import { loadMovies } from "@/services";
import { Movie } from "@/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";

export default function HomePage({
  movies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
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

export const getStaticProps: GetStaticProps<{
  movies: Array<Movie>;
}> = async () => {
  const movies = await loadMovies();
  return { props: { movies } };
};
