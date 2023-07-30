import { loadMovie } from "@/services";
import { Movie } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function MoviePage({
  movie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h2>{movie?.title}</h2>
      <p>{movie?.resume}</p>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
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
