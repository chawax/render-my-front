import { loadMovies } from "../../services";
import { Movie } from "../../types";

export interface MoviesLoaderdata {
  movies: Array<Movie>;
}

export default async function moviesLoader(): Promise<MoviesLoaderdata> {
  const movies = await loadMovies();
  return { movies };
}
