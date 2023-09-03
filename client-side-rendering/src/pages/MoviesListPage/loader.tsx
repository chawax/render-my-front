import { fetchMovies } from "../../services";
import { MovieResume } from "../../types";

export interface MoviesLoaderdata {
  movies: Array<MovieResume>;
}

export default async function moviesLoader(): Promise<MoviesLoaderdata> {
  const movies = await fetchMovies();
  return { movies };
}
