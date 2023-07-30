import { LoaderFunctionArgs } from "react-router-dom";
import { loadMovie } from "../../services";
import { Movie } from "../../types";

export interface MovieLoaderdata {
  movie?: Movie;
}

export default async function movieLoader({
  params,
}: LoaderFunctionArgs): Promise<MovieLoaderdata> {
  if (!params.id) {
    throw new Error("Expected params.id");
  }
  const movieId = params.id;
  const movie = await loadMovie(movieId);
  return { movie };
}
