import { loadMovie, loadMovies } from "@/services";
import { Movie } from "@/types";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export default function MoviePage({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h2>{movie?.title}</h2>
      <p>{movie?.resume}</p>
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  movie: Movie;
}> = async ({ params }) => {
  if (params && params.id) {
    // @ts-ignore
    const movie = await loadMovie(params.id);
    return { props: { movie: movie! } };
  } else {
    throw new Error("Missing id parameter");
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = await loadMovies();
  return {
    paths: movies.map((movie) => `/movies/${movie.id}`),
    fallback: false,
  };
};
