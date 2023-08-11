import { MovieDetails, MovieResume } from "./types";

const getHeaders = (): HeadersInit => {
  const key = import.meta.env.VITE_API_KEY;
  if (!key) {
    throw new Error("No API key configured on server !");
  }
  return {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  };
};

export const loadMovie = async (id: number): Promise<MovieDetails> => {
  const url = `${import.meta.env.VITE_API_URL}/movie/${id}?language=fr-FR`;
  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch details for movie ${id}`);
  }

  const details = await response.json();
  return {
    id: details.id,
    title: details.title,
    overview: details.overview,
    releaseDate: details.release_date,
    popularity: details.popularity,
    posterPath: details.poster_path,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    genres: details.genres.map((genre: any) => genre.name),
    originalTitle: details.original_title,
    tagline: details.tagline,
    actors: [],
  };
};

const loadMovies = async (): Promise<Array<MovieResume>> => {
  const url = `${
    import.meta.env.VITE_API_URL
  }/trending/movie/week?language=fr-FR`;
  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies data");
  }
  const { results } = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return results.map((result: any) => ({
    id: result.id,
    title: result.title,
    overview: result.overview,
    releaseDate: result.release_date,
    popularity: result.popularity,
    posterPath: result.poster_path,
  }));
};

export { loadMovies };
