import { Movie } from "./types";

const movies: Array<Movie> = [
  {
    id: "1",
    title: "Titre 1",
    resume: "Bla bla bla",
  },
  {
    id: "2",
    title: "Titre 2",
    resume: "Bla bla bla",
  },
  {
    id: "3",
    title: "Titre 3",
    resume: "Bla bla bla",
  },
];

export const loadMovies = async (): Promise<Array<Movie>> => {
  return movies;
};

export const loadMovie = async (id: string): Promise<Movie | undefined> => {
  return movies.find((movie) => movie.id === id);
};
