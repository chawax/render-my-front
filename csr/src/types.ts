export type MovieResume = {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  popularity: number;
  posterPath: string;
};

export type MovieDetails = MovieResume & {
  genres: Array<string>;
  originalTitle: string;
  tagline: string;
  actors: Array<string>;
};
