export type MovieResume = {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
  posterPath: string;
};

export type MovieDetails = MovieResume & {
  genres: Array<string>;
  originalTitle: string;
  tagline: string;
  actors: Array<Actor>;
};

export type Actor = {
  id: number;
  name: string;
  profilePath: string;
};
