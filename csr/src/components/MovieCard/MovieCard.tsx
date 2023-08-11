import { MovieResume } from "../../types";

type MovieCardProps = {
  movie: MovieResume;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const imgUrl = `https://image.tmdb.org/t/p/w200${movie.posterPath}`;
  return (
    <article>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>{movie.releaseDate}</p>
      <p>{movie.popularity}</p>
      <img src={imgUrl} alt={movie.title} />
    </article>
  );
};

export default MovieCard;
