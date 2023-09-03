import type { MovieDetails, MovieResume } from "../types";

const getHeaders = (): HeadersInit => {
  const key = import.meta.env.API_KEY;
  if (!key) {
    throw new Error("No API key configured on server !");
  }
  return {
    accept: "application/json",
    Authorization: `Bearer ${key}`,
  };
};

const loadMovie = async (id: number): Promise<MovieDetails> => {
  // We load queries to get details and credits

  const detailsUrl = `${import.meta.env.API_URL}/movie/${id}?language=fr-FR`;

  const creditsUrl = `${
    import.meta.env.API_URL
  }/movie/${id}/credits?language=fr-FR`;

  const promises = [
    fetch(detailsUrl, {
      headers: getHeaders(),
    }),
    fetch(creditsUrl, {
      headers: getHeaders(),
    }),
  ];
  const responses = await Promise.all(promises);

  if (!responses[0].ok || !responses[1].ok) {
    throw new Error(`Failed to fetch details for movie ${id}`);
  }

  const details = await responses[0].json();
  const credits = await responses[1].json();

  return {
    id: details.id,
    title: details.title,
    overview: details.overview,
    releaseDate: details.release_date,
    voteAverage: details.vote_average,
    posterPath: details.poster_path,
    genres: details.genres.map((genre: any) => genre.name),
    originalTitle: details.original_title,
    tagline: details.tagline,
    actors: credits.cast
      .filter((c: any) => c.known_for_department === "Acting")
      .slice(0, 10)
      .map((a: any) => ({
        id: a.id,
        name: a.name,
        profilePath: a.profile_path,
      })),
  };
};

const loadMovies = async (): Promise<Array<MovieResume>> => {
  const url = `${import.meta.env.API_URL}/trending/movie/week?language=fr-FR`;
  const response = await fetch(url, {
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch trending movies data");
  }
  const { results } = await response.json();
  return results.map((result: any) => ({
    id: result.id,
    title: result.title,
    overview: result.overview,
    releaseDate: result.release_date,
    voteAverage: result.vote_average,
    posterPath: result.poster_path,
  }));
};

export { loadMovie, loadMovies };
