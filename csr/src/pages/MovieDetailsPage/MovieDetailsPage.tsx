import { useLoaderData } from "react-router-dom";
import { MovieLoaderdata } from "./loader";

export default function MovieDetailsPage() {
  const { movie } = useLoaderData() as MovieLoaderdata;
  if (movie) {
    const imgUrl = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;
    return (
      <article>
        <h2>{movie.title}</h2>
        <p>{movie.tagline}</p>
        <p>{movie.overview}</p>
        <p>{movie.releaseDate}</p>
        <p>{movie.popularity}</p>
        <img src={imgUrl} alt={movie.title} />
        {movie.genres ? (
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        ) : null}
      </article>
    );
  } else {
    return <p>Film introuvable !</p>;
  }
}
