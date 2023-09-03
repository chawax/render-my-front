import { LoaderFunctionArgs } from "react-router-dom";
import { fetchOneMovie } from "../../services";
import { MovieDetails } from "../../types";

export interface MovieLoaderdata {
  movie: MovieDetails;
}

export default async function movieLoader({
  params,
}: LoaderFunctionArgs): Promise<MovieLoaderdata> {
  if (!params.id) {
    throw new Error("Expected params.id");
  }
  const movieId = params.id;
  const movie = await fetchOneMovie(Number(movieId));
  return { movie };
}
